const path = require("path");
var plugins = [];
var devPlugins = [];
var webpack = require("webpack");

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);



module.exports = {
  context: __dirname,
  entry: "./frontend/slouch.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  plugins: plugins,
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: 'source-maps',
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.node$/,
      loader: "node-loader"
    }
    ]
  }
};
