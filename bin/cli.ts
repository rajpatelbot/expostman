/**
 * CLI entry point for the application.
 */

import { Command } from 'commander';
import { main } from '../src/index';

const program = new Command();

program
    .name('expostman')
    .description('A CLI tool to generate postman collection from express app.')
    .version('1.0.0')
    .action(() => {
        main();
    });

program.parse();
