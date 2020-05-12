<template>
	<header>
		<nav :class="{ 'is-active': showMobileMenu }" class="navbar container">
			<div class="navbar-brand">
				<g-link class="navbar-item" to="/">
					<span class="header-name">Macguire Rintoul</span>
				</g-link>

				<button class="mobile-menu button--secondary" @click="toggleMobileMenu">
					<span>Menu</span>
				</button>
			</div>

			<div class="navbar-menu" @click="closeMobileMenu">
				<div class="navbar-end">
					<g-link to="/" class="navbar-item hvr-underline-reveal">
						Work
					</g-link>
					<g-link to="/blog" class="navbar-item hvr-underline-reveal">
						Blog
					</g-link>
					<g-link to="/about" class="navbar-item hvr-underline-reveal">
						About
					</g-link>
					<g-link
						class="navbar-item contact-button button--primary"
						to="/contact"
					>
						Contact
					</g-link>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return { showMobileMenu: false };
	},
	methods: {
		toggleMobileMenu() {
			this.showMobileMenu = !this.showMobileMenu;
		},
		closeMobileMenu() {
			this.showMobileMenu = false;
		}
	}
};
</script>
