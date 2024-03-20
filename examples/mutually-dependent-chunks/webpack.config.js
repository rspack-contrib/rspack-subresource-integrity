const { SubresourceIntegrityPlugin } = require("rspack-subresource-integrity");
const expect = require("expect");

module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new SubresourceIntegrityPlugin({ hashFuncNames: ["sha256", "sha384"] }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap("wsi-test", (stats) => {
          expect(stats.hasWarnings()).toBeFalsy();
          stats.toJson().assets.forEach((asset) => {
            expect(asset.integrity).toMatch(/^sha/);
          });
        });
      },
    },
  ],
};
