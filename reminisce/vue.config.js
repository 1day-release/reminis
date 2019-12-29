module.exports = {

  devServer: {
    port: 7000,
    disableHostCheck: true,
  },

  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true,
      })
  },
}
