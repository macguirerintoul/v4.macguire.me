module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	extends: [
		"plugin:vue/recommended",
		"eslint:recommended",
		"plugin:prettier/recommended",
		"prettier/vue",
		"plugin:gridsome/recommended"
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"prettier/prettier": "warn"
	},
	parserOptions: {
		parser: "babel-eslint"
	}
};
