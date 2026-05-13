import fs from 'fs';
import path from 'path';

const destDir = path.join(process.cwd(), 'dist', 'client');

// Ensure dist/client exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy _redirects file
const sourceRedirects = path.join(process.cwd(), 'public', '_redirects');
const destRedirects = path.join(destDir, '_redirects');
try {
  fs.copyFileSync(sourceRedirects, destRedirects);
  console.log('✓ Copied _redirects to dist/client');
} catch (err) {
  console.log('⚠ No _redirects file found');
}

// Create index.html if it doesn't exist
const indexPath = path.join(destDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aishvarya Resume</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/assets/index-Cxp7spd6.js"></script>
  </body>
</html>`;
  fs.writeFileSync(indexPath, html);
  console.log('✓ Created index.html in dist/client');
} else {
  console.log('✓ index.html already exists');
}
