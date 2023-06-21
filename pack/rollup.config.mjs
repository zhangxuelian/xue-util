import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
export default {
  input: "./util/index.js", // 入口文件
  output: [
    {
      file: "./es/index.js",
      format: "esm", // 将软件包保存为 ES 模块文件
      name: "xueUtil"
    },
    {
      file: "./dist/index.js",
      format: "cjs", // CommonJS，适用于 Node 和 Browserify/Webpack
      name: "xueUtil",
      exports: "named"
    }
  ],
  watch: {
    // 配置监听处理
    exclude: "node_modules/**"
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: [["@babel/preset-env"]]
    }),
    terser() // 压缩代码，生产环境推荐启用
  ]
};
