import {createApp, appendErrorHandlers} from './http/app_template';
import {Request, Response} from 'express';
import config from './config';

const app = createApp({
  corsOrigin: config.HTTP_CORS_ORIGIN,
  trustProxies: config.HTTP_TRUST_PROXIES
});

app.get('/', async (req: Request, res: Response) => {
  res.json({
    data: randomPayload(16)
  });
});

function randomPayload(n: number) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  return [...Array(n)]
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');
}

export default appendErrorHandlers(app);
