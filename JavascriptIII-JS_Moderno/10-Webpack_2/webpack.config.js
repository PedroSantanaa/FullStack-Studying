const miniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new miniCssExtractPlugin()],
};
