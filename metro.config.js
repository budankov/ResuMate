const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Allow Metro to resolve .js extension imports (used by @react-navigation/native ESM modules)
config.resolver.sourceExts = [
  ...new Set([
    ...config.resolver.sourceExts,
    "js",
    "jsx",
    "ts",
    "tsx",
    "cjs",
    "mjs",
  ]),
];

module.exports = config;
