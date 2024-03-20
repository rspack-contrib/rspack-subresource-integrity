const { SubresourceIntegrityPlugin } = require("rspack-subresource-integrity");
const expect = require("expect");

module.exports = {
  mode: "production",
  entry: "./a.js",
  output: {
    filename: "[name]-[hash]-[hash:4]-[id]-[query].js",
    chunkFilename:
      "[name]-[hash]-[chunkhash]-[hash:4]-[chunkhash:4]-[id]-[query].js",
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new SubresourceIntegrityPlugin({ hashFuncNames: ["sha256", "sha384"] }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap("wsi-test", (stats) => {
          expect(
            stats.compilation.warnings.filter(
              (warning) =>
                !warning.message.match(
                  /Use \[contenthash\] and ensure realContentHash/
                )
            )
          ).toEqual([]);
        });
      },
    },
  ],
};
