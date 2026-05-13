import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const distDir = join(__dirname, 'dist/client');

const server = createServer((req, res) => {
  // Try to serve the requested file first
  let filePath = join(distDir, req.url === '/' ? 'index.html' : req.url);
  
  // Security: prevent directory traversal
  if (!filePath.startsWith(distDir)) {
    filePath = join(distDir, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    // If file doesn't exist or is a directory, try to serve index.html
    if (err || !stats.isFile()) {
      filePath = join(distDir, 'index.html');
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      // Determine content type
      const ext = filePath.split('.').pop()?.toLowerCase() || '';
      const contentTypes = {
        'html': 'text/html; charset=utf-8',
        'css': 'text/css',
        'js': 'application/javascript',
        'json': 'application/json',
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'gif': 'image/gif',
        'svg': 'image/svg+xml',
        'pdf': 'application/pdf'
      };
      
      const contentType = contentTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\nServer running on http://localhost:${PORT}\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
