module.exports = {
	extends: [
		"stylelint-config-sass-guidelines",
		"stylelint-a11y/recommended",
		"stylelint-config-recommended"
	],
	plugins: ["stylelint-order", "stylelint-scss", "stylelint-a11y"]
};
