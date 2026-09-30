module.exports = {
  apps: [{
    name: 'pdf-signer',
    script: 'python3',
    args: '-m http.server 4578 --bind 0.0.0.0',
    cwd: '.',
    interpreter: 'none',
    autorestart: true,
    max_memory_restart: '200M'
  }]
};
