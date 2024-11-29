module.exports = {
    apps: [
      {
        name: "myapp",
        script: "build/server.js",
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };