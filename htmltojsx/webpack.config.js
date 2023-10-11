const path = require('path');

module.exports = {
  entry: './src/main.js', // Replace with the path to your JavaScript file
  output: {
    filename: 'htmltojsxlib.js', // Name of the output bundle file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
};
