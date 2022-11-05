const path = require("path");
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
