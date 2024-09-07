module.exports = {
  apps: [
    // pm2 start ecosystem.config.js --only dev
    {
      name: 'dev',
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'development'
      }
    },
     // pm2 start ecosystem.config.js --only prod
     {
      name: 'prod',
      script: 'server.js',
    },
  ],
};
