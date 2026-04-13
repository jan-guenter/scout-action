import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from '@rollup/plugin-replace';

const config = {
    cache: false,
    logLevel: "debug",
    input: "index.js",
    output: {
        esModule: true,
        file: "../index.js",
        format: "es",
        sourcemap: false,
    },
    context: "false",
    moduleContext: {
        "@actions/cache": "false",
        "@actions/core": "false",
        "@actions/github": "false",
        "@actions/tool-cache": "false",
    },
    plugins: [
        replace({
            preventAssignment: true,
            __VERSION__: process.env.VERSION || '0.0.0',
        }),
        commonjs(),
        nodeResolve({ 
            preferBuiltins: true,
            allowExportsFolderMapping: false,
        }),
    ],
};

export default config;