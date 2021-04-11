<template>
	<DefaultLayout>
    <h1>About</h1>
    <p class="overview__summary">
      I'm Macguire — an experience designer, software developer, hackathon
      participant, and music producer. I'm currently completing a Bachelor
      of Science in Interactive Arts & Technology at Simon Fraser
      University and doing design at Visier. When I'm not doing that, I
      might be
      <MagicLink url="https://www.mixcloud.com/weirdnite/">
        DJing
      </MagicLink>
      or
      <MagicLink url="https://weirdnite.com/">making beats</MagicLink>.
    </p>
    <hr/>
    <Resume/>
	</DefaultLayout>
</template>

<script>
import MagicLink from "~/components/MagicLink";
import Resume from "~/components/Resume"

export default {
	metaInfo: {
		title: "About",
    meta: [{property: "og:title", content: document.title}]
	},
	components: {
		MagicLink, Resume
	}
};
</script>
