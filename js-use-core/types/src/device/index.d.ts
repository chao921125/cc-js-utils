export * from './types';
export * from './detector';
export * from './utils';
export { default } from './device';
export { DeviceDetector, getDeviceInfo, getDeviceInfoSync, createDeviceDetector, isDeviceType } from './device';
export { isMobile, isTablet, isDesktop, getDeviceType, detectOS, detectBrowser, isTouchDevice, enhancedMobileDetection, clearDetectionCache, getCacheStats } from './detector';
export { getScreenSize, getDetailedScreenInfo, getViewportSize, getActualViewportSize, getScreenSizeCategory, getDevicePerformanceInfo, getDeviceCapabilities, isEnhancedTouchDevice, runPerformanceBenchmark, monitorDevicePerformance, isLowPerformanceMode, getDeviceThermalState, getPerformanceOptimizationSuggestions, supportsFeature, getCompatibilityReport } from './utils';
