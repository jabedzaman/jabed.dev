module.exports = {
    apps: {
      name: 'portfolio',
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_prod: {
        NODE_ENV: 'production', // NODE_ENV: 'development' || NODE_ENV: 'test'
      },
    },
  }
  