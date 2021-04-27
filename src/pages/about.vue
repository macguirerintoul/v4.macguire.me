<template>
	<DefaultLayout>
		<h1>About</h1>
		<hr />
		<p class="overview__summary">
			I'm Macguire — an experience designer, software developer, music producer,
			and DJ. I currently work as a User Experience Designer at Visier. In
			December 2020, I graduated with distinction with a Bachelor of Science in
			Interactive Arts & Technology from SFU. 🎉
		</p>
		<hr />
		<Resume />
	</DefaultLayout>
</template>

<script>
import MagicLink from "~/components/MagicLink";
import Resume from "~/components/Resume";

export default {
	metaInfo: {
		title: "About"
	},
	components: {
		MagicLink,
		Resume
	}
};
</script>
