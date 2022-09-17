const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    galaxy: "./src/galaxy.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  watch: true,

  devServer: {
    host: "0.0.0.0",
    liveReload: true,
  },
};
