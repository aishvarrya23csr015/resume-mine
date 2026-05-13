import { createServer } from 'http';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;

// Import the built server
const { handler } = await import('./dist/server/index.js');

const server = createServer(async (req, res) => {
  try {
    const handled = await handler(req, res);
    if (!handled) {
      // Serve static files
      const filePath = join(__dirname, 'dist/client', req.url === '/' ? 'index.html' : req.url);
      try {
        const content = readFileSync(filePath);
        res.writeHead(200);
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not Found');
      }
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
