const path = require('path');

module.exports = {
  entry: './src/food-app/main.ts',
  output: {
    // filename: '[contenthash]bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}