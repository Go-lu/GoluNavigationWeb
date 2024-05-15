// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8082/api', // 确保使用http://
        changeOrigin: true,                   // 正确的属性名是changeOrigin
        pathRewrite: {
          '^/api': ''                         // 去除请求路径中的/api
        }
      },
    }
  }
};
