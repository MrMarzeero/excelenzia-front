const webpack = require('webpack');

module.exports = {
  transpileDependencies: [],  
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





