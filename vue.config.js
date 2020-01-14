module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      // markdown support
      .rule("markdown")
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader")
      .options({})
      .end();
  }
};
