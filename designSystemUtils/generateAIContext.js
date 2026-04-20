import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

const ENTRIES_DIR =
  "../digital-design-system-react/web-client/src/page-structure/sidebar";
const OUTPUT_DIR = process.argv[2] || ".";
const VALID_EXTENSIONS = new Set(["tsx", "ts"]);

/**
 * Maps entry files to AI context categories
 * You can customize this mapping to organize your components
 */
const CATEGORY_MAP = {
  modals: ["modalEntries.tsx"],
  forms: [
    "forms/formEntries.tsx",
    "forms/formInputEntries.tsx",
    "forms/formSelectEntries.tsx",
    "forms/formCheckAndRadioEntries.tsx",
    "forms/formDateEntries.tsx",
    "forms/formDropzoneEntries.tsx",
    "forms/formInputGroupEntries.tsx",
    "forms/formTemplateEntries.tsx",
    "forms/formToggleEntries.tsx",
  ],
  tables: ["tableEntries.tsx"],
  buttons: ["buttonsEntries.tsx"],
  alerts: ["alertEntries.tsx", "toastEntries.tsx", "messagesEntries.tsx"],
  navigation: [
    "breadcrumbEntries.tsx",
    "tabEntries.tsx",
    "sidebarEntries.tsx",
    "headerEntries.tsx",
    "footerEntries.tsx",
    "progressNavbarEntries.tsx",
    "offcanvasEntries.tsx",
  ],
  cards: ["cardsEntries.tsx"],
  typography: ["typographyEntries.tsx"],
  utilities: [
    "utils/utilEntries.tsx",
    "utils/hooksEntries.tsx",
    "utils/dateUtilEntries.tsx",
    "utils/numberUtilEntries.tsx",
    "utils/formatFileSizeUtilEntries.tsx",
    "utils/nameValidationUtilEntries.tsx",
  ],
};

class AIContextGenerator {
  constructor() {
    this.categorizedSources = {};
    Object.keys(CATEGORY_MAP).forEach((category) => {
      this.categorizedSources[category] = [];
    });
  }

  /**
   * Extract components with their metadata and sources together
   */
  extractComponents(file) {
    const contents = readFileSync(file, "utf-8");
    const components = [];

    // Find the components array
    const componentsMatch = contents.match(/components:\s*\[([\s\S]*)\]/);
    if (!componentsMatch) return components;

    const componentsContent = componentsMatch[1];

    // Split by component blocks - each starts with an opening brace at the start of a line
    // We need to carefully parse each component object
    let depth = 0;
    let currentComponent = "";
    let inComponent = false;

    for (let i = 0; i < componentsContent.length; i++) {
      const char = componentsContent[i];

      if (char === "{") {
        depth++;
        inComponent = true;
      }

      if (inComponent) {
        currentComponent += char;
      }

      if (char === "}") {
        depth--;
        if (depth === 0 && inComponent) {
          // We've completed a component object
          this.parseComponent(currentComponent, components);
          currentComponent = "";
          inComponent = false;
        }
      }
    }

    return components;
  }

  /**
   * Parse a single component block and extract metadata + sources
   */
  parseComponent(componentBlock, components) {
    const titleMatch = componentBlock.match(/title:\s*['"`](.*?)['"`]/);
    if (!titleMatch) return; // Skip if no title

    const subtitleMatch = componentBlock.match(
      /subtitle:\s*['"`]([\s\S]*?)['"`]\s*,/,
    );
    const usagesMatch = componentBlock.match(/usages:\s*\[(.*?)\]/);
    const searchTermsMatch = componentBlock.match(/searchTerms:\s*\[(.*?)\]/);

    // Extract sources array
    const sourcesMatch = componentBlock.match(
      /sources:\s*\[([\s\S]*?)\]\s*[,}]/,
    );

    if (!sourcesMatch) return; // Skip if no sources

    const sourcesContent = sourcesMatch[1];
    const sourceFiles = [];

    // Extract file paths from sources
    const fileMatches = sourcesContent.matchAll(/file:\s*['"`](.*?)['"`]/g);
    for (const match of fileMatches) {
      sourceFiles.push(match[1]);
    }

    const metadata = {
      title: titleMatch[1],
      subtitle: subtitleMatch
        ? subtitleMatch[1].replace(/\\n/g, "\n").replace(/\\/g, "")
        : "",
      usages: usagesMatch ? usagesMatch[1] : "",
      searchTerms: searchTermsMatch ? searchTermsMatch[1] : "",
    };

    // Add component with all its source files grouped together
    components.push({
      files: sourceFiles,
      metadata: metadata,
    });
  }

  /**
   * Read source file content
   */
  readSourceFile(sourceRef) {
    try {
      const filePath = sourceRef.file.startsWith("livingston-npm-components")
        ? "../digital-design-system-react-npm/LII.Bootstrap.npm" +
          sourceRef.file.substring(25)
        : "../digital-design-system-react/web-client/" + sourceRef.file;

      const contents = readFileSync(filePath, "utf-8");
      return contents;
    } catch (error) {
      console.warn(`Warning: Could not read ${sourceRef.file}:`, error.message);
      return null;
    }
  }

  /**
   * Process entry file and categorize its sources
   */
  processEntryFile(category, entryFile) {
    const fullPath = join(ENTRIES_DIR, entryFile);

    try {
      console.log(`Processing ${category}: ${entryFile}`);

      // Extract components with their metadata and source files already paired
      const components = this.extractComponents(fullPath);

      components.forEach((component) => {
        // Read all source files for this component
        const sources = [];
        component.files.forEach((file) => {
          const content = this.readSourceFile({ file: file });
          if (content) {
            sources.push({
              file: file,
              content: content,
            });
          }
        });

        // Only add if we have at least one valid source
        if (sources.length > 0) {
          this.categorizedSources[category].push({
            metadata: component.metadata,
            sources: sources,
          });
        }
      });
    } catch (error) {
      console.error(`Error processing ${entryFile}:`, error.message);
    }
  }

  /**
   * Generate markdown file for a category
   */
  generateMarkdownForCategory(category) {
    const components = this.categorizedSources[category];
    if (!components || components.length === 0) {
      console.log(`No sources found for category: ${category}`);
      return;
    }

    let markdown = `# ${category.charAt(0).toUpperCase() + category.slice(1)} - Code Examples\n\n`;
    markdown += `This file contains code examples for ${category} components from the Livingston Design System.\n\n`;

    let totalExamples = 0;

    components.forEach((component) => {
      markdown += `## ${component.metadata.title || "Code Example"}\n\n`;

      if (component.metadata.subtitle) {
        markdown += `**Description:** ${component.metadata.subtitle}\n\n`;
      }

      if (component.metadata.usages) {
        markdown += `**Usages:** ${component.metadata.usages}\n\n`;
      }

      if (component.metadata.searchTerms) {
        markdown += `**Search Terms:** ${component.metadata.searchTerms}\n\n`;
      }

      // Add all source files for this component
      component.sources.forEach((source, index) => {
        if (component.sources.length > 1) {
          markdown += `### Source File ${index + 1}: \`${source.file}\`\n\n`;
        } else {
          markdown += `**File:** \`${source.file}\`\n\n`;
        }

        markdown += "```tsx\n";
        markdown += source.content;
        markdown += "\n```\n\n";

        totalExamples++;
      });

      markdown += "---\n\n";
    });

    const outputPath = join(OUTPUT_DIR, `${category}-examples.md`);
    writeFileSync(outputPath, markdown, "utf-8");
    console.log(
      `✓ Generated ${outputPath} (${components.length} components, ${totalExamples} code examples)`,
    );
  }

  /**
   * Main execution
   */
  run() {
    console.log("Generating AI context files...\n");
    console.log("=".repeat(60));

    // Process each category completely before moving to the next
    Object.entries(CATEGORY_MAP).forEach(([category, entryFiles]) => {
      console.log(`\n📁 Category: ${category.toUpperCase()}`);
      console.log("-".repeat(60));

      // Process all entry files for this category
      entryFiles.forEach((entryFile) => {
        this.processEntryFile(category, entryFile);
      });

      // Generate markdown for this category
      console.log("");
      this.generateMarkdownForCategory(category);
      console.log("=".repeat(60));
    });

    console.log("\n✓ Done! AI context files generated successfully.");
  }
}

// Main execution
const generator = new AIContextGenerator();
generator.run();
