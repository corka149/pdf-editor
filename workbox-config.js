module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{svg,css,js,ttf,ico,png,html,pdf}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};