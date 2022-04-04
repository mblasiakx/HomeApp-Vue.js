const path = require('path');

module.exports = {
  
  configureWebpack: {
    resolve: {
      alias: {
        VUE: 'vue/dist/vue.esm-bundler.js',
      },
    }
  }
}