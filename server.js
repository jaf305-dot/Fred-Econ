const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '8080', 10);

require('cors-anywhere').createServer({
  originWhitelist: [],          // allow all origins
  requireHeader: ['origin', 'x-requested-with'],  // basic abuse guard
  removeHeaders: ['cookie', 'cookie2'],
  httpProxyOptions: {
    xfwd: false,                // don't forward client IP to FRED
  },
}).listen(port, host, () => {
  console.log(`CORS proxy running on ${host}:${port}`);
});
