const path = require('path');

module.exports = {
  entry: './dist/main.js',
  output: {
    // filename: '[contenthash]bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}