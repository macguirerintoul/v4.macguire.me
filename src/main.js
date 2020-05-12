// Import main scss
import "~/assets/style/style.scss";

// Import libraries
import Cloudinary from "cloudinary-vue";

// Import Gridsome config to use the siteDescription
const config = require("../gridsome.config.js");

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
	// Add a meta description to the site using the siteDescription field of gridsome.config.js
	head.meta.push({
		name: "description",
		content: config.siteDescription
	});

	head.htmlAttrs = { lang: "en" };

	// Cloudinary configuration
	Vue.use(Cloudinary, {
		configuration: { cloudName: "macguire" }
	});
}
