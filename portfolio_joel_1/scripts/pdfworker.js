import path from 'node:path';
import fs from 'node:fs';

const pdfjsDistPath = path.resolve('node_modules/pdfjs-dist');
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.mjs');
const outputPath = path.join(process.cwd(), 'public', 'pdf.worker.mjs');

// Ensure the public directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// Copy the worker file
fs.copyFileSync(pdfWorkerPath, outputPath);

console.log(`Copied PDF worker to ${outputPath}`);
