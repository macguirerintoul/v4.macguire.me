// Import main scss
import "~/assets/style/style.scss";

// Import libraries
import Cloudinary from "cloudinary-vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
	// Cloudinary configuration
	Vue.use(Cloudinary, {
		configuration: { cloudName: "macguire" }
	});
}
