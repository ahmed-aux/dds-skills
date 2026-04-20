import fs from 'fs';
import path from 'path';

/**
 * Utility functions for file operations.
 */
export const fileUtils = {
    /**
     * Reads the content of a file.
     * @param filePath - The path to the file to read.
     * @returns The content of the file as a string.
     */
    readFile: (filePath: string): string => {
        return fs.readFileSync(filePath, 'utf-8');
    },

    /**
     * Writes content to a file.
     * @param filePath - The path to the file to write to.
     * @param content - The content to write to the file.
     */
    writeFile: (filePath: string, content: string): void => {
        fs.writeFileSync(filePath, content, 'utf-8');
    },

    /**
     * Gets all `.tsx` files in a directory recursively.
     * @param dir - The directory to search for `.tsx` files.
     * @returns An array of paths to `.tsx` files.
     */
    getFilesByExtension: (dir: string, ext: string): string[] => {
        let results: string[] = [];
        const list = fs.readdirSync(dir);

        list.forEach((file) => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat && stat.isDirectory()) {
                results = results.concat(fileUtils.getFilesByExtension(filePath, ext));
            } else if (file.endsWith(ext)) {
                results.push(filePath);
            }
        });

        results.sort();
        return results;
    }
};
