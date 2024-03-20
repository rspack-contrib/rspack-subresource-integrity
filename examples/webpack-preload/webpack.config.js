const { SubresourceIntegrityPlugin } = require("rspack-subresource-integrity");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { RunInPuppeteerPlugin } = require("wsi-test-helper");

module.exports = {
  entry: {
    index: "./index.js",
  },
  output: {
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new SubresourceIntegrityPlugin({
      hashFuncNames: ["sha256", "sha384"],
      enabled: true,
    }),
    new HtmlWebpackPlugin(),
    new RunInPuppeteerPlugin(),
  ],
};
