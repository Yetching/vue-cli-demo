const { defineConfig } = require('@vue/cli-service');

console.log(process.env.NODE_ENV);

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production' ? 'http://localhost:8080/' : '/',

  lintOnSave: false,

  runtimeCompiler: false,

  // 生产环境source-map
  productionSourceMap: false,

  pages: {
    // TODO 键名必须和filename同名?
    index: {
      // page 入口
      entry: 'src/main.ts',
      // html模板
      template: 'public/index.html',
      // 输出的html文件名
      filename: 'index.html',
      // title
      title: 'Main page',
      // chunks 提取出来的通用chunk和vendor chunk
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    another: {
      entry: 'src/another.ts',
      template: 'public/another.html',
    },
  },
  // webpack配置
  // 1.对象
  // configureWebpack: {
  //   plugins: [],
  // },

  // 2.函数，可以基于环境变量修改配置
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === 'development') {
  //     config.devtool = 'inline-source-map';
  //   } else {
  //     console.log('nothing');
  //   }
  // },

  // 3.链式操作，更加细颗粒度
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        console.log('dosomething');
        return options;
      });
  },

  // css
  css: {
    requireModuleExtension: true,

    // 是否分离css到独立的文件中
    // 默认生产true，开发false
    extract: false,

    loaderOptions: {
      less: {},
      css: {},
      postcss: {},
    },
  },

  // 开发服务器
  devServer: {
    // proxy: 'http://localhost:3003',
    // 更多配置
    proxy: {
      '/api': {
        target: 'url',
        ws: true,
        changeOrigin: true,
      },
      '/upload': {
        target: 'upload-url',
      },
    },
  },

  // 是否开启thread-loader加速
  parallel: true,

  pwa: {},
});
