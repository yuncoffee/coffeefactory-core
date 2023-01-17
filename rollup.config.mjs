import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import copy from "rollup-plugin-copy"
import postcss from "rollup-plugin-postcss"
import terser from "@rollup/plugin-terser"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import packageJson from "./package.json" assert { type: "json" }

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["src/stories", "**/*.stories.tsx", "**/*.test.tsx"],
            }),
            // copy({
            //     targets: [
            //         { src: "src/data/type.ts", dest: "dist/esm/data/" },
            //         { src: "src/models/type.d.ts", dest: "dist/esm/models/" },
            //     ],
            // }),
            postcss({ extract: true }),
            terser(),
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/, /\.scss$/],
    },
]
