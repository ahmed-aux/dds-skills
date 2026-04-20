import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const tsxFileExtensions = ['.tsx'];

export interface JSDocData {
    jsDoc: ts.JSDoc;
    node: ts.Node;
}

/**
 * Extracts JSDoc comments from a given .tsx file.
 *
 * @param sourceFile - The TypeScript source file.
 * @returns An array of extracted JSDoc comments with their attached nodes.
 */
export const extractJSDocComments = (sourceFile: ts.SourceFile): JSDocData[] => {
    const jsDocData: JSDocData[] = [];

    // Traverse the AST to find JSDoc comments.
    // Skips expression statements inside function bodies (e.g. useImperativeHandle, useEffect)
    // which have no meaningful name and would produce "Unknown Component" entries.
    function visit(node: ts.Node) {
        // Skip expression statements (e.g. useEffect(...), useImperativeHandle(...))
        // that are nested inside function bodies — these have no extractable name.
        if (ts.isExpressionStatement(node) && node.parent !== sourceFile) {
            return;
        }

        const jsDoc = (node as any).jsDoc;
        if (jsDoc && Array.isArray(jsDoc)) {
            jsDoc.forEach((doc: ts.JSDoc) => {
                jsDocData.push({ jsDoc: doc, node });
            });
        }

        ts.forEachChild(node, visit);
    }

    visit(sourceFile);
    return jsDocData;
};

/**
 * Reads all .tsx files in a given directory and extracts JSDoc comments.
 *
 * @param dirPath - The directory path to search for .tsx files.
 * @returns An array of extracted JSDoc comments from all .tsx files.
 */
export const extractFromDirectory = (dirPath: string): JSDocData[] => {
    const allJsDocData: JSDocData[] = [];

    fs.readdirSync(dirPath).forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            allJsDocData.push(...extractFromDirectory(fullPath));
        } else if (tsxFileExtensions.includes(path.extname(file))) {
            const fileContent = fs.readFileSync(fullPath, 'utf-8');
            const sourceFile = ts.createSourceFile(fullPath, fileContent, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
            allJsDocData.push(...extractJSDocComments(sourceFile));
        }
    });

    return allJsDocData;
};
