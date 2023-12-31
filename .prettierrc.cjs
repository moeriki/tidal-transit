module.exports = {
	arrowParens: 'always',
	singleQuote: true,
	useTabs: true,
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
