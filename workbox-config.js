module.exports = {
  navigateFallback: "offline.html",
  globDirectory: "public/",
  globPatterns: ["**/*.{svg,css,js,ttf,ico,png,html,pdf}"],
  swDest: "public/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  maximumFileSizeToCacheInBytes: 2097152 * 10,
  sourcemap: false,
};
