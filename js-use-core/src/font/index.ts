/**
 * 字体模块入口
 *
 * FontManager 类已抽离到 ./FontManager，以便 ./utils 可以直接引用，
 * 避免 index.ts <-> utils.ts 之间的循环依赖。
 */

import FontManager from './FontManager';

export * from './FontManager';
export { FontManager };

// 保持向后兼容性
export default FontManager;
export { FontManager as Font };

// 导出工具函数
// utils 中的 FontOptions / FontCheckResult / FontLoadResult 与 ./FontManager 同源，
// 这里显式导出以避免与上面的 export * 产生歧义。
export * from './utils';
export type {
  FontOptions,
  FontCheckResult,
  FontLoadResult,
} from './utils';

// 导出增强的字体加载基础设施
export * from './enhanced';
