import { ViteMinifyPlugin } from "vite-plugin-minify";
import nunjucks from "vite-plugin-nunjucks";

export default {
  plugins: [nunjucks(), ViteMinifyPlugin({})],
};
