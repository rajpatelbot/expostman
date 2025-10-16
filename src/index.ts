import * as path from 'path';
import { Project } from 'ts-morph';

// Initialize a ts-morph project
const project = new Project();

export function main() {
    // Get the current working directory
    const currentDir = process.cwd();
    project.getDirectory(currentDir);

    // Extract the directory name and entry point
    const projectMeta = project.addSourceFileAtPath(path.join(currentDir, 'package.json'));
    const metaContent = projectMeta.getText();
    const { name, main: entryPoint } = JSON.parse(metaContent);

    if (!name || !entryPoint) {
        console.error('Error: Unable to find name or main entry in package.json');
        process.exit(1);
    }

    console.log(`Project Name: ${name}`);
    console.log(`Entry Point: ${entryPoint}`);
}
