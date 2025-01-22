const webpack = require('webpack');

module.exports = {
  transpileDependencies: [],  // ou adicione os pacotes desejados, como ['some-package']
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true),
      }),
    ],
  },
};





