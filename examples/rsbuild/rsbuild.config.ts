import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { SubresourceIntegrityPlugin } from "rspack-subresource-integrity";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack(config, { HtmlPlugin }) {
      config.plugins?.push(new SubresourceIntegrityPlugin({
        HtmlPlugin
      }));
    }
  }
});
