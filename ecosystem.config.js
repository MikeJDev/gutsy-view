module.exports = {
  apps: [{
    name: 'gutsy-project-view',
    script: __dirname + './src/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-141-127.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Gutsy2.pem',
      ref: 'origin/master',
      repo: 'https://github.com/MikeJDev/gutsy-view.git',
      path: '/home/ubuntu/server',
      //  'post-deploy': 'npm install && npm run webpack-prod && pm2 startOrRestart ecosystem.config.js'
    }
  }
}