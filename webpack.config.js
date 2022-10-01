const path = require("path");

module.exports = {
  mode: "development",
  entry: "./pages/test.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "test-bundle.js",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
};
