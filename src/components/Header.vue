<template>
	<header>
		<nav
			:class="{ 'is-active': showMobileMenu, 'util-has-home-bar': hasHomeBar }"
			class="navbar container"
		>
			<div class="navbar-brand" @click="toggleMobileMenu">
				<g-link class="navbar-item navbar__title" to="/">
					<span>Macguire Rintoul</span>
				</g-link>

				<button class="mobile-menu button--secondary">
					Menu
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
	mounted() {
		// Detect if the device is an iPhone with a home bar (i.e. X, XS, 11, etc.)
		let isiPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
		let aspect = window.screen.width / window.screen.height;
		if (isiPhone && aspect.toFixed(3) === "0.462") {
			this.hasHomeBar = true;
		}
	},
	data() {
		return { showMobileMenu: false, hasHomeBar: false };
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
