import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { randomUUID } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.resolve(__dirname, 'reservations.json');

function readAll(): unknown[] {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeAll(list: unknown[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}

/**
 * Stand-in for the owner's backoffice, which doesn't exist yet.
 * Persists every booking/cancellation request to reservations.json so the
 * data pipe is real; a future backoffice just needs to read this same store.
 * Dev-server only (Vite middleware) — not present in a production build.
 */
function backofficeApi(): Plugin {
  return {
    name: 'afa-backoffice-api',
    configureServer(server) {
      server.middlewares.use('/api/reservations', (req, res) => {
        if (req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(readAll(), null, 2));
          return;
        }
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => (body += chunk));
          req.on('end', () => {
            try {
              const payload = JSON.parse(body || '{}');
              const list = readAll();
              const record = {
                id: randomUUID(),
                createdAt: new Date().toISOString(),
                status: 'pendiente_confirmacion',
                ...payload
              };
              list.push(record);
              writeAll(list);
              res.statusCode = 201;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(record));
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'invalid json' }));
            }
          });
          return;
        }
        res.statusCode = 405;
        res.end();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), backofficeApi()],
  server: {
    port: 5173,
    open: true
  }
});
