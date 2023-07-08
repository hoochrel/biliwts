module.exports = {
  apps: [
    {
      name: 'biliwts',
      script: './index.js',
      watch: true,
      ignore_watch: ['./logs','.git/'],
      exec_mode: 'fork',
      cwd: '', // the directory from which your app will be launched
      args: '', // string containing all arguments passed via CLI to script
      env_production: {
        NODE_ENV: 'production',
      },
      out_file:'./logs/out.log',
      error_file:'./logs/error.log'
    },
  ],
}
