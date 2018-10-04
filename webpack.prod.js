const path = require("path");
const webpack = require("webpack");

const APP_DIR = path.resolve(__dirname, "./src");
const BUILD_DIR = path.resolve(__dirname, "./dist");

module.exports = {
  mode: "development",
  entry: APP_DIR + "/index.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    historyApiFallback: true,
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
