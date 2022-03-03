import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

const inputFileName = "src/index.ts";
const moduleName = pkg.name.replace(/^@.*\//, "");
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default [
  {
    input: inputFileName,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: "true",
        banner
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: "true",
        banner
      }
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.build.json" }), postcss(), terser()]
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];
