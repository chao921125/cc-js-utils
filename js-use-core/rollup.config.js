import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import { visualizer } from 'rollup-plugin-visualizer';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

// 外部依赖配置
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'tslib'
];

// 基础插件配置
const basePlugins = [
  nodeResolve({
    browser: true,
    preferBuiltins: false,
    exportConditions: ['browser', 'module', 'import', 'default']
  }),
  commonjs({
    include: ['node_modules/**']
  }),
  json(),
  typescript({
    tsconfig: './tsconfig.build.json',
    declaration: false,
    declarationMap: false,
    sourceMap: !isProduction,
    inlineSources: !isProduction,
    noEmitOnError: false,
    // 由 rollup 负责产物输出，避免插件额外落盘并消除默认行为警告
    outputToFilesystem: false
  })
];

// 生产环境插件
const productionPlugins = isProduction ? [
  terser({
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info', 'console.debug']
    },
    mangle: {
      reserved: ['BaseManager', 'ErrorHandler', 'EventEmitter', 'Logger', 'Cache']
    },
    format: {
      comments: false
    }
  }),
  visualizer({
    filename: 'dist/stats.html',
    open: false,
    gzipSize: true,
    brotliSize: true,
    template: 'treemap'
  })
] : [];

// 主要构建配置
const mainConfig = {
  input: 'index.ts',
  output: [
    // CommonJS 格式 (使用 .cjs 扩展名，确保在 "type": "module" 下被 Node 正确识别为 CJS)
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: !isProduction,
      exports: 'named',
      interop: 'auto'
    },
    // ES Module 格式
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: !isProduction,
      exports: 'named'
    },
    // UMD 格式 (浏览器兼容)
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'JSUseCore',
      sourcemap: !isProduction,
      exports: 'named',
      globals: {}
    },
    // IIFE 格式 (直接在浏览器中使用)
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      name: 'JSUseCore',
      sourcemap: !isProduction,
      exports: 'named'
    }
  ],
  plugins: [
    ...basePlugins,
    ...productionPlugins
  ],
  external: (id) => {
    // 对于 UMD 和 IIFE 格式，不排除任何依赖
    return false;
  },
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false
  }
};

// 模块化构建配置 (支持 tree shaking)
const moduleConfig = {
  input: 'index.ts',
  output: [
    // ES Module 格式 (优化的模块化版本)
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: !isProduction,
      exports: 'named'
    }
  ],
  plugins: [
    ...basePlugins,
    ...productionPlugins
  ],
  external,
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false
  }
};

// 类型定义构建配置
//
// 说明：rollup 在合成命名空间时，对「重新赋值」的变量（如 TS 编译出的枚举）
// 会生成 getter 形式：Object.freeze({ get X () { return X; } })。
// rollup-plugin-dts 的 NamespaceFixer 仅识别 `X: X` 形式的属性赋值，
// 遇到 getter 形式会抛出 "Expected a property assignment"。
//
// 因此这里先由 tsc 预生成 .d.ts，再交给 rollup-plugin-dts 打包。
// tsc 输出的声明文件不含 Object.freeze/getter 形态，可稳定通过。
const dtsConfig = {
  input: 'types/index.d.ts',
  output: [
    { file: 'dist/index.d.ts', format: 'es' }
  ],
  plugins: [
    dts({
      tsconfig: './tsconfig.build.json',
      respectExternal: true
    })
  ],
  external
};

// 分模块构建配置 (支持按需导入)
const moduleNames = [
  'core',
  'clipboard',
  'device',
  'file',
  'font',
  'fullscreen',
  'image',
  'ua',
  'url',
  'utils'
];

const moduleBuilds = moduleNames.map(moduleName => ({
  input: `src/${moduleName}/index.ts`,
  output: [
    {
      file: `dist/${moduleName}.js`,
      format: 'esm',
      sourcemap: !isProduction,
      exports: 'named'
    },
    {
      file: `dist/${moduleName}.cjs`,
      format: 'cjs',
      sourcemap: !isProduction,
      exports: 'named'
    }
  ],
  plugins: [
    ...basePlugins,
    ...productionPlugins
  ],
  external,
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false
  }
}));

// 分模块类型定义构建配置
// exports 中每个子路径都声明了 types 字段，必须产出对应的 .d.ts 文件
// 输入为 tsc 预生成的类型声明，原因同 dtsConfig
const moduleDtsBuilds = moduleNames.map(moduleName => ({
  input: `types/src/${moduleName}/index.d.ts`,
  output: [
    { file: `dist/${moduleName}.d.ts`, format: 'es' }
  ],
  plugins: [
    dts({
      tsconfig: './tsconfig.build.json',
      respectExternal: true
    })
  ],
  external
}));

// 导出配置
export default [
  mainConfig,
  moduleConfig,
  dtsConfig,
  ...moduleBuilds,
  ...moduleDtsBuilds
];