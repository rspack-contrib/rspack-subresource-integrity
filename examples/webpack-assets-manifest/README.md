# Integration with webpack-assets-manifest

[webpack-assets-manifest](https://github.com/webdeveric/webpack-assets-manifest)
has a somewhat
[undocumented feature](https://github.com/webdeveric/webpack-assets-manifest/blob/9261b516209ece4311b77f200b78ff5dc945985f/src/WebpackAssetsManifest.js#L448-L449)
where it will include the `integrity` value generated by this plugin
(by rspack-subresource-integrity) when configured with `integrity: true`.
