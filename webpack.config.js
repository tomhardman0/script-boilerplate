const path = require('path');
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const OUTPUT_DIR = 'dist';

module.exports = {
  mode: NODE_ENV || 'development',
  entry: './src/index.ts',
  devtool: !isProduction && 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, OUTPUT_DIR)
  }
};
