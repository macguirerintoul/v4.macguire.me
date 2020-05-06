// Import main scss
import "~/assets/style/style.scss";

// Import libraries
import Cloudinary from "cloudinary-vue";

// Import Gridsome config to use the siteDescription
const config = require("../gridsome.config.js");

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
	head.meta.push({
		name: "description",
		content: config.siteDescription
	});

	// Cloudinary configuration
	Vue.use(Cloudinary, {
		configuration: { cloudName: "macguire" }
	});
}
