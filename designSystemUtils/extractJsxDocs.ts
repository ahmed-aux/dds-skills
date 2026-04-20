import { writeFileSync, mkdirSync, existsSync } from 'fs';
import ts from 'typescript';
import * as fs from 'fs';
import { join } from 'path';
import { logger } from './utils/logger';
import { fileUtils } from './utils/file-utils';
import { extractJSDocComments, JSDocData } from './utils/parser';

interface ComponentInfo {
    componentName: string;
    description: string;
    examples: string[];
    propsAndParams: { [key: string]: { description: string; type: string } };
    fileType: 'component' | 'function';
}

// ---------------------------------------------------------------------------
// Category definitions
// ---------------------------------------------------------------------------

const CATEGORIES: Record<string, string> = {
    alerts: 'Alerts & Toasts',
    badges: 'Badges',
    cards: 'Cards',
    'drag-drop': 'Drag & Drop',
    filters: 'Filters',
    forms: 'Forms',
    kendo: 'Kendo Grid',
    navigation: 'Navigation',
    utilities: 'Utilities',
    misc: 'Miscellaneous',
};

/** Maps a component/function name to its category. Uncategorised entries fall back to 'misc'. */
const COMPONENT_CATEGORY_MAP: Record<string, string> = {
    // Alerts & Toasts
    Alert: 'alerts',
    AlertButton: 'alerts',
    AlertCollapse: 'alerts',
    TOAST_QUEUE: 'alerts',

    // Badges
    CircularBadge: 'badges',
    PillBadge: 'badges',
    CircularBadgeList: 'badges',
    CircularBadgeListItem: 'badges',

    // Cards
    InfoCard: 'cards',
    ComponentContainer: 'cards',

    // Drag & Drop
    DragAndDropList: 'drag-drop',
    DraggableListItem: 'drag-drop',
    DropIndicator: 'drag-drop',

    // Filters
    SearchableCheckboxDropdown: 'filters',
    CheckboxFilter: 'filters',
    CheckboxFilterDropdown: 'filters',
    DateFilter: 'filters',
    DateRangeFilter: 'filters',

    // Forms
    CountryFlag: 'forms',
    FormCountrySelect: 'forms',
    FormProvinceSelect: 'forms',
    FormDatePicker: 'forms',
    FormDropdown: 'forms',
    FileLink: 'forms',
    FormFileDropzone: 'forms',
    FormFileDropzoneReview: 'forms',
    FormLabel: 'forms',
    FormMonetaryInput: 'forms',
    FormMultiCountrySelect: 'forms',
    FormNumericInput: 'forms',
    FormCountryListDropdown: 'forms',
    FormPhoneNumber: 'forms',
    FormCheckAndRadioGroup: 'forms',
    FormSingleCheck: 'forms',
    FormTagCheckAndRadioGroup: 'forms',
    FormSearchableSelect: 'forms',
    FormTypeaheadSelect: 'forms',
    FormSelect: 'forms',
    FormSuperCheckbox: 'forms',
    FormSuperCheckboxGroup: 'forms',
    FormSuperRadio: 'forms',
    FormSuperRadioGroup: 'forms',
    FormEmailInput: 'forms',
    FormTextInput: 'forms',
    FormTextarea: 'forms',
    TimePicker: 'forms',
    FormProvider: 'forms',
    FormProviderProps: 'forms',
    FormContextValue: 'forms',
    FormContext: 'forms',
    FormData: 'forms',

    // Kendo Grid
    KendoColumnHeaderWithPin: 'kendo',
    KendoDropdownButton: 'kendo',
    KendoDropdownList: 'kendo',
    KendoStickyHeaderGridWrapper: 'kendo',
    useKendoResponsiveColWidths: 'kendo',

    // Navigation
    Sidebar: 'navigation',
    SidebarAccordionItem: 'navigation',
    SidebarItem: 'navigation',
    SearchBar: 'navigation',
    SearchBarWithHistory: 'navigation',
    HistoryDropdown: 'navigation',
    LanguageSelector: 'navigation',
    MultiSelectComponent: 'navigation',

    // Utilities
    calcSizeClass: 'utilities',
    ExcludedCountries: 'utilities',
    getCountryList: 'utilities',
    startOfDay: 'utilities',
    endOfDay: 'utilities',
    calculateStartDate: 'utilities',
    calculateEndDate: 'utilities',
    calculateFilterDateRange: 'utilities',
    formatDateForFilter: 'utilities',
    formatDateTimeInUTC: 'utilities',
    formatRelativeDateTime: 'utilities',
    formatDateTime: 'utilities',
    formatDate: 'utilities',
    toLocalDateISOString: 'utilities',
    fromUTCDateString: 'utilities',
    formatFileSize: 'utilities',
    useDebounce: 'utilities',
    useURLSearchParams: 'utilities',
    ScreenWidthXXLarge: 'utilities',
    debounce: 'utilities',
    useWindowSize: 'utilities',
    sanitizeHtml: 'utilities',
    translate: 'utilities',
    nameValidation: 'utilities',
    formatPlaceName: 'utilities',
    formatNumber: 'utilities',
    formatCurrency: 'utilities',
    formatAmount: 'utilities',
    getProvinceList: 'utilities',
    sanitizeText: 'utilities',
    resetSearchText: 'utilities',
    getSearchText: 'utilities',
    setItemBusy: 'utilities',

    // Miscellaneous
    CopyToClipboard: 'misc',
    ExpandingText: 'misc',
    SmallSpinner: 'misc',
    Spinner: 'misc',
};

/**
 * Maps a ref/props interface name prefix (the part before the dot) to its parent
 * component name. Used to nest imperative ref methods under the parent entry.
 */
const REF_PARENT_MAP: Record<string, string> = {
    CheckboxFilterRef: 'CheckboxFilter',
    DateFilterRef: 'DateFilter',
    DateRangeFilterRef: 'DateRangeFilter',
    FormMonetaryInputRef: 'FormMonetaryInput',
    FormMultiCountrySelectRef: 'FormMultiCountrySelect',
    FormPhoneNumberRef: 'FormPhoneNumber',
    FormSearchableSelectRef: 'FormSearchableSelect',
    FormSuperCheckboxGroupRef: 'FormSuperCheckboxGroup',
    FormSuperRadioGroupRef: 'FormSuperRadioGroup',
    KendoStickyHeaderGridWrapperProps: 'KendoStickyHeaderGridWrapper',
};

/**
 * Internal render helpers that belong to FormFileDropzone but are extracted as
 * standalone functions. Nested under FormFileDropzone rather than emitted top-level.
 */
const FORMFILEDROPZONE_HELPERS = new Set([
    'triggerStateChange',
    'setSelectedDocumentType',
    'renderDocumentTypes',
    'renderValidFileWithDocumentType',
    'renderValidFileWithoutDocumentType',
    'renderErrorMessage',
]);

// ---------------------------------------------------------------------------
// AST helpers (unchanged from original)
// ---------------------------------------------------------------------------

const getComponentNameFromNode = (node: ts.Node): string => {
    if (ts.isFunctionDeclaration(node) && node.name) return node.name.text;
    if (ts.isVariableDeclaration(node) && node.name && ts.isIdentifier(node.name)) return node.name.text;
    if (ts.isVariableStatement(node)) {
        const declaration = node.declarationList.declarations[0];
        if (declaration?.name && ts.isIdentifier(declaration.name)) return declaration.name.text;
    }
    if (ts.isClassDeclaration(node) && node.name) return node.name.text;
    if (ts.isInterfaceDeclaration(node)) return node.name.text;
    if (ts.isTypeAliasDeclaration(node)) return node.name.text;
    if ((ts.isPropertySignature(node) || ts.isMethodSignature(node)) && node.name) {
        const memberName = ts.isIdentifier(node.name) ? node.name.text : node.name.getText();
        if (node.parent && ts.isInterfaceDeclaration(node.parent)) {
            return `${node.parent.name.text}.${memberName}`;
        }
        return memberName;
    }
    return 'Unknown Component';
};

const determineFileType = (sourceFile: ts.SourceFile, node?: ts.Node): 'component' | 'function' => {
    if (sourceFile.fileName.endsWith('.tsx')) return 'component';
    if (node) {
        if (
            ts.isFunctionDeclaration(node) ||
            (ts.isVariableStatement(node) &&
                node.declarationList.declarations.some(
                    (decl) => decl.initializer && (ts.isArrowFunction(decl.initializer) || ts.isFunctionExpression(decl.initializer))
                ))
        ) {
            return 'function';
        }
    }
    return 'function';
};

const parseJSDocComment = (jsDoc: ts.JSDoc, sourceFile: ts.SourceFile, attachedNode?: ts.Node): ComponentInfo | null => {
    const fileType = determineFileType(sourceFile, attachedNode);
    const componentInfo: ComponentInfo = {
        componentName: 'Unknown Component',
        description: '',
        examples: [],
        propsAndParams: {},
        fileType,
    };

    if (attachedNode) componentInfo.componentName = getComponentNameFromNode(attachedNode);

    if (jsDoc.comment) {
        componentInfo.description =
            typeof jsDoc.comment === 'string'
                ? jsDoc.comment
                : jsDoc.comment.map((part) => (typeof part === 'string' ? part : part.text)).join('');
    }

    if (jsDoc.tags) {
        jsDoc.tags.forEach((tag) => {
            switch (tag.tagName.text) {
                case 'component':
                case 'function':
                    if (tag.comment) {
                        componentInfo.componentName =
                            typeof tag.comment === 'string'
                                ? tag.comment
                                : tag.comment.map((part) => (typeof part === 'string' ? part : part.text)).join('');
                    }
                    break;
                case 'prop':
                case 'param':
                    if (tag.comment) {
                        const propComment =
                            typeof tag.comment === 'string'
                                ? tag.comment
                                : tag.comment.map((part) => (typeof part === 'string' ? part : part.text)).join('');
                        const propMatch = propComment.match(/^\{([^}]+)\}\s+(\w+)\s+-\s+(.+)$/);
                        if (propMatch) {
                            const [, type, name, description] = propMatch;
                            componentInfo.propsAndParams[name] = { description: description.trim(), type: type.trim() };
                        }
                    }
                    break;
            }
        });
    }

    return componentInfo;
};

// ---------------------------------------------------------------------------
// Markdown rendering
// ---------------------------------------------------------------------------

const renderEntry = (
    info: ComponentInfo,
    refMethods: ComponentInfo[] = [],
    helperFunctions: ComponentInfo[] = []
): string => {
    let content = `### ${info.componentName}\n\n`;

    if (info.description) content += `**Description:** ${info.description}\n\n`;

    if (info.examples?.length > 0) {
        content += '**Examples:**\n\n';
        info.examples.forEach((example) => {
            content += `\`\`\`tsx\n${example}\n\`\`\`\n\n`;
        });
    }

    if (Object.keys(info.propsAndParams).length > 0) {
        const sectionTitle = info.fileType === 'component' ? 'Props' : 'Parameters';
        content += `**${sectionTitle}:**\n\n`;
        Object.entries(info.propsAndParams).forEach(([name, { description, type }]) => {
            content += `- **${name}** (\`${type}\`): ${description}\n`;
        });
        content += '\n';
    }

    if (refMethods.length > 0) {
        content += `**Imperative Methods (ref):**\n\n`;
        refMethods.forEach((method) => {
            const methodName = method.componentName.split('.')[1];
            content += `#### \`${methodName}\`\n\n`;
            if (method.description) content += `${method.description}\n\n`;
        });
    }

    if (helperFunctions.length > 0) {
        content += `**Internal Render Functions:**\n\n`;
        helperFunctions.forEach((helper) => {
            content += `#### \`${helper.componentName}\`\n\n`;
            if (helper.description) content += `${helper.description}\n\n`;
        });
    }

    content += '---\n\n';
    return content;
};

// ---------------------------------------------------------------------------
// Category-split file generation
// ---------------------------------------------------------------------------

const generateCategoryFiles = (allComponents: ComponentInfo[], outputDir: string): void => {
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

    // Separate dotted "ref method" entries from regular top-level entries
    const refMethodEntries: ComponentInfo[] = [];
    const regularEntries: ComponentInfo[] = [];
    allComponents.forEach((info) => {
        if (info.componentName.includes('.')) {
            refMethodEntries.push(info);
        } else {
            regularEntries.push(info);
        }
    });

    // Map ref methods to their parent component: parentName → methods[]
    const refMethodsByParent: Record<string, ComponentInfo[]> = {};
    refMethodEntries.forEach((method) => {
        const prefix = method.componentName.split('.')[0];
        const parentName = REF_PARENT_MAP[prefix];
        if (parentName) {
            (refMethodsByParent[parentName] ??= []).push(method);
        }
        // Unmapped dotted entries are silently dropped — add to REF_PARENT_MAP if needed
    });

    // Collect FormFileDropzone helper functions (will be nested, not top-level)
    const dropzoneHelpers = regularEntries.filter((info) => FORMFILEDROPZONE_HELPERS.has(info.componentName));

    // Group top-level entries by category (skip helpers — they appear nested only)
    const byCategory: Record<string, ComponentInfo[]> = {};
    Object.keys(CATEGORIES).forEach((cat) => (byCategory[cat] = []));

    regularEntries.forEach((info) => {
        if (FORMFILEDROPZONE_HELPERS.has(info.componentName)) return;
        if (info.componentName === 'Unknown Component') return;
        const category = COMPONENT_CATEGORY_MAP[info.componentName] ?? 'misc';
        byCategory[category].push(info);
    });

    // Write one file per category and collect index data
    const indexData: Record<string, string[]> = {};

    Object.entries(CATEGORIES).forEach(([categoryKey, categoryTitle]) => {
        const components = byCategory[categoryKey];
        if (!components?.length) return;

        indexData[categoryKey] = components.map((c) => c.componentName);

        let markdown = `# ${categoryTitle}\n\n`;
        markdown += `Full API documentation for **${categoryTitle}** components from \`livingston-npm-components\`.\n\n`;
        markdown += `---\n\n`;

        components.forEach((info) => {
            const refMethods = refMethodsByParent[info.componentName] ?? [];
            const helpers = info.componentName === 'FormFileDropzone' ? dropzoneHelpers : [];
            markdown += renderEntry(info, refMethods, helpers);
        });

        const outputPath = join(outputDir, `npm-${categoryKey}.md`);
        writeFileSync(outputPath, markdown, 'utf-8');
        logger.info(`  ✓ npm-${categoryKey}.md  (${components.length} entries)`);
    });

    // Write index file
    let indexMarkdown = `# Livingston NPM Components — Index\n\n`;
    indexMarkdown += `This index lists all available components and utilities grouped by category.\n`;
    indexMarkdown += `Load the relevant category file for full props, descriptions, and imperative methods.\n\n`;
    indexMarkdown += `---\n\n`;

    Object.entries(CATEGORIES).forEach(([categoryKey, categoryTitle]) => {
        const names = indexData[categoryKey];
        if (!names?.length) return;
        indexMarkdown += `## ${categoryTitle} → \`npm-${categoryKey}.md\`\n\n`;
        names.forEach((name) => (indexMarkdown += `- ${name}\n`));
        indexMarkdown += '\n';
    });

    const indexPath = join(outputDir, 'npm-index.md');
    writeFileSync(indexPath, indexMarkdown, 'utf-8');
    logger.info(`  ✓ npm-index.md`);
};

// ---------------------------------------------------------------------------
// Legacy single-file helpers (kept for programmatic use)
// ---------------------------------------------------------------------------

export const generateMarkdown = (jsDocData: Array<{ jsDoc: ts.JSDoc; node: ts.Node }>, sourceFile: ts.SourceFile): string => {
    let markdownContent = '# Extracted JSDoc Documentation\n\n';
    if (jsDocData.length === 0) return markdownContent + '*No JSDoc comments found.*\n';

    const components: ComponentInfo[] = [];
    const functions: ComponentInfo[] = [];

    jsDocData.forEach(({ jsDoc, node }) => {
        const info = parseJSDocComment(jsDoc, sourceFile, node);
        if (!info) return;
        (info.fileType === 'component' ? components : functions).push(info);
    });

    if (components.length > 0) {
        markdownContent += '## Components\n\n';
        components.forEach((info) => (markdownContent += renderEntry(info)));
    }
    if (functions.length > 0) {
        markdownContent += '## Functions\n\n';
        functions.forEach((info) => (markdownContent += renderEntry(info)));
    }

    return markdownContent;
};

export const generateAndSaveMarkdown = (
    jsDocData: Array<{ jsDoc: ts.JSDoc; node: ts.Node }>,
    sourceFile: ts.SourceFile,
    outputPath: string
): void => {
    const markdownContent = generateMarkdown(jsDocData, sourceFile);
    writeFileSync(outputPath, markdownContent, 'utf-8');
    console.log(`Markdown documentation saved to: ${outputPath}`);
};

// ---------------------------------------------------------------------------
// Main execution
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log('Extracts JSDoc from .tsx/.ts files and generates category-split markdown docs.');
    console.log('Usage: npx tsx designSystemUtils/extractJsxDocs.ts <source-folder> <output-dir>');
    console.log('Example: npx tsx designSystemUtils/extractJsxDocs.ts ../../digital-design-system-react-npm/LII.Bootstrap.npm/src public/docs/dds/livingston-npm-components');
    process.exit(1);
}

const folderPath = args[0];
const outputDir = args[1];

if (!folderPath || !outputDir) {
    console.error('Both source folder and output directory are required.');
    process.exit(1);
}

const tsxFiles = fileUtils.getFilesByExtension(folderPath, '.tsx');
const tsFiles = fileUtils.getFilesByExtension(folderPath, '.ts');
const files = [...tsxFiles, ...tsFiles];

if (files.length === 0) {
    logger.warn('No .tsx or .ts files found in the specified directory.');
    process.exit(0);
}

logger.info(`Found ${tsxFiles.length} .tsx files and ${tsFiles.length} .ts files in ${folderPath}.`);
logger.info('Extracting JSDoc comments...');

const allJsDocData: JSDocData[] = [];
const allComponents: ComponentInfo[] = [];

for (const file of files) {
    const fileContent = fs.readFileSync(file, 'utf-8');
    const scriptKind = file.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
    const sourceFile = ts.createSourceFile(file, fileContent, ts.ScriptTarget.Latest, true, scriptKind);
    const jsdocData = extractJSDocComments(sourceFile);
    allJsDocData.push(...jsdocData);

    jsdocData.forEach(({ jsDoc, node }) => {
        const info = parseJSDocComment(jsDoc, sourceFile, node);
        if (info) allComponents.push(info);
    });
}

logger.info(`\nGenerating category files in ${outputDir}/\n`);
generateCategoryFiles(allComponents, outputDir);
logger.info('\n✓ Done!');
