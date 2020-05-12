<template>
	<div>
		<h1>Contact</h1>

		<!-- netlify attribute connects the form to Netlify Forms -->
		<form
			v-if="submissionState === 'default'"
			class="contact-form"
			method="POST"
			name="Contact"
			action="/"
			netlify
			@submit.prevent="handleSubmit"
		>
			<p>
				Here's a contact form that goes straight to my inbox. Or, feel free to
				email me at firstname.lastname@gmail.com.
			</p>

			<input type="hidden" form-name="Contact" />

			<label for="name">Name</label>
			<input v-model="formData.name" type="text" name="name" />

			<label for="email">Email</label>
			<input v-model="formData.email" type="email" name="email" required />

			<label for="message">Message</label>
			<textarea v-model="formData.message" name="message" required />

			<div class="form__button-container">
				<button type="submit" class="button--primary">
					Send
				</button>
			</div>
		</form>

		<div v-if="submissionState === 'submitted'">
			<h2>Message sent.</h2>
			<p>Thanks for reaching out. I will be in touch with you shortly.</p>
			<p><g-link to="/blog">How about a blog post?</g-link></p>
		</div>

		<div
			v-if="submissionState === 'error'"
			class="info-block info-block--error"
		>
			<p class="info-block__title">
				An error occurred 😳
			</p>
		</div>
	</div>
</template>

<script>
import MagicLink from "~/components/MagicLink";

export default {
	components: {
		MagicLink
	},
	metaInfo: {
		title: "Contact"
	},
	data() {
		return {
			submissionState: "default",
			formData: { name: "", email: "", message: "", "form-name": "Contact" }
		};
	},
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
				)
				.join("&");
		},
		handleSubmit(event) {
			// Post the form data to '/' where Netlify Forms will pick it up
			console.log(
				"event.target.getAttribute('name')",
				event.target.getAttribute("name")
			);
			console.log(
				"encoded form data: ",
				this.encode({
					"form-name": event.target.getAttribute("name"),
					...this.formData
				})
			);
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: this.encode({
					"form-name": event.target.getAttribute("name"),
					...this.formData
				})
			})
				.then(data => {
					console.log(data);
					if (data.status == 200) {
						this.submissionState = "submitted";
					} else if (data.status == 401) {
						this.submissionState = "401";
					}
				})
				.catch(error => {
					console.error(error);
					this.submitted = "error";
					alert(error);
				});
		}
	}
};
</script>
