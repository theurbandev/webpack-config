const path = require("path");

module.exports = {
  mode: "development",
  entry: "./pages/test.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "test-bundle.ts",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
};
