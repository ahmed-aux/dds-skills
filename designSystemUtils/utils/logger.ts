import chalk from 'chalk';

export const logger = {
    info: (message: string) => {
        console.log(chalk.blue(`[INFO] ${message}`));
    },
    warn: (message: string) => {
        console.log(chalk.yellow(`[WARN] ${message}`));
    },
    error: (message: string) => {
        console.error(chalk.red(`[ERROR] ${message}`));
    },
    success: (message: string) => {
        console.log(chalk.green(`[SUCCESS] ${message}`));
    }
};