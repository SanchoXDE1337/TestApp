module.exports = {
	extends: [
		'airbnb-typescript-prettier',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	plugins: ['@typescript-eslint'],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		'func-names': 0,
		'import/no-cycle': 'error',
		'import/no-extraneous-dependencies': 0,
		'@typescript-eslint/ban-types': 0,
		'import/prefer-default-export': 0,
		'react-hooks/exhaustive-deps': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'no-void': 0,
		'consistent-return': 0,
		'@typescript-eslint/no-empty-interface': 'error',
		'sort-imports': 'off',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'no-shadow': 'error',
		'no-console': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/unbound-method': 0,
		'@typescript-eslint/no-unsafe-assignment': 0,
		'@typescript-eslint/no-unsafe-member-access': 0,
		'@typescript-eslint/no-unsafe-return': 0,
	},
};
