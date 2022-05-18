const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer : {
  //   proxy: {
  //     '/api': {
  //       target: 'http://121.4.102.12:4000',
  //       pathRewrite: {'^/api': ''},
  //       ws: true, //websocket
  //       changeOrigin: true, //control the value of host header
  //     },
  //   },
  // }
})
