var webpack = require("webpack");

module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/boot",
    "declare": "./app/declaration"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts','.css','.html']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      },
      {test: /\.html$/, loader:'raw-loader', exclude: /node_modules/},
      {test: /\.css$/, loader:'style!css', exclude: /node_modules/}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./dist/vendor.bundle.js")
  ]
};
