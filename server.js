const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

require('cors-anywhere').createServer({
  originWhitelist: [],        // allow all origins (lock this down to your domain later)
  requireHeader: [],          // no required headers — browser fetches work without Origin
  removeHeaders: ['cookie', 'cookie2'],
  setHeaders: { 'X-Proxy': 'fred-explorer' },
}).listen(port, host, () => {
  console.log(`CORS proxy running on ${host}:${port}`);
});