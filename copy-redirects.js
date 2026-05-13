import fs from 'fs';
import path from 'path';

const source = path.join(process.cwd(), 'public', '_redirects');
const dest = path.join(process.cwd(), 'dist', 'client', '_redirects');

// Ensure dist/client exists
const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy _redirects file
fs.copyFileSync(source, dest);
console.log('✓ Copied _redirects to dist/client');
