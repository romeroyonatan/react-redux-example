// webpack.config.js
module.exports = {
  entry: './assets/index.js',
  output: {
    filename: './snippets/static/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};