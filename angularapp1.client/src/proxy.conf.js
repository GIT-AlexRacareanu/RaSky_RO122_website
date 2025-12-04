const { env } = require('process');

// Determine the backend target URL
let target = 'http://localhost:5019'; // Default fallback

if (env.ASPNETCORE_HTTPS_PORT) {
  target = `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`;
} else if (env.ASPNETCORE_URLS) {
  target = env.ASPNETCORE_URLS.split(';')[0];
}

const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: target,
    secure: false, 
    changeOrigin: true, 
    logLevel: 'debug' 
  }
];

module.exports = PROXY_CONFIG;
