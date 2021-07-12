const path = require("path");
const webpack = require('webpack')
const jQuery = require('jquery')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
  entry: "./js/script.js",
  mode: "development",
  devtool: "source-map",
  watch: true,
  output: {
    path: path.resolve(__dirname, "./public/"),
    publicPath: path.resolve(__dirname, "./public/"),
    filename: "index.js",
  },
  stats: {
    errorDetails: false,
    assets: true,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    colors: true,
    depth: false,
    entrypoints: true,
    excludeAssets: /app\/assets/,
    hash: false,
    modules: false,
    performance: true,
    reasons: true,
    source: false,
    timings: true,
    version: false,
    warnings: true,
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public/"),
    compress: true,
    port: 9000,
    hot: true,
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "postcss-loader",
          // 'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        type: "asset/inline",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        // type: 'asset/resource',
        options: {
          name: "[name].[ext]",
          outputPath: (url, resourcePath, context) => {
            const relativePath = path.relative(context, resourcePath);
            if (relativePath.includes("epa")) {
              return `img/epa/${url}`;
            }
            return `img/${url}`;
          },
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      linkType: "text/css",
    }),
    new NodePolyfillPlugin(),
  ],
};
