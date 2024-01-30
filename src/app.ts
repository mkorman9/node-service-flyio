import {attachDefaultHandlers, createExpressApp} from './http/express_template';
import config from './config';

const app = createExpressApp({
  corsOrigin: config.HTTP_CORS_ORIGIN,
  trustProxies: config.HTTP_TRUST_PROXIES
});

app.get('/', async (req, res) => {
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

export default attachDefaultHandlers(app);
