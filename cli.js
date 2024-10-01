#!/usr/bin/env node

import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, 'package.json');

async function getPackageVersion() {
    try {
        const data = await readFile(packageJsonPath, 'utf8');
        const packageJson = JSON.parse(data);
        return packageJson.version;
    } catch (error) {
        console.error('Error reading package.json:', error);
        return null;
    }
}

const args = process.argv.slice(2);

if (args.includes('--v') || args.includes('--version')) {
    const version = await getPackageVersion();
    console.log(`auth-pass version: ${version}`);
} else {
    console.log('Usage: auth-pass --v or auth-pass --version');
}
