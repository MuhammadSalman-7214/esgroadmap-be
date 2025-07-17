import app from './server.js';
import {createServer} from 'http';
import type {IncomingMessage, ServerResponse} from 'http';

export default function handler(req: IncomingMessage, res: ServerResponse) {
  const server = createServer(app);
  server.emit('request', req, res);
}
