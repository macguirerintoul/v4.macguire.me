// Import main scss
import "~/assets/style/style.scss";

// Import libraries
import Cloudinary from "cloudinary-vue";

// Import Gridsome config to use the siteDescription
const config = require("../gridsome.config.js");

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
	// Make it UTF-8
	head.meta.push({
		name: "charset",
		content: "utf-8"
	});

	// Make it work on mobile
	head.meta.push({
		name: "viewport",
		content: "width=device-width, initial-scale=1.0"
	});

	// Add a meta description to the site using the siteDescription field of gridsome.config.js
	head.meta.push({
		name: "description",
		content: config.siteDescription
	});

	// Make it English
	head.htmlAttrs = { lang: "en" };


	// Set up Cloudinary
	Vue.use(Cloudinary, {
		configuration: { cloudName: "macguire" }
	});
}
