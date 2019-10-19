<template>
  <section>
    <h1>Contact</h1>
    <div
      class="contact-form"
    >
      <div
        v-if="submitted === 'error'"
        class="info-block info-block--error"
      >
        <p class="info-block__title">
          An error occurred.
        </p>
        </p><p class="info-block__description">
          Are you connected to the Internet?
        </p>
      </div>
      <form
        v-if="submitted != true"
        method="POST"
        name="contact"
        data-netlify="true"
        @submit.prevent="handleSubmit"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
        >
        <p>The contents of this form will be sent directly to my inbox, and I will be in touch with you shortly.</p>

        <label for="name">Name</label>
        <input
          v-model="formData.name"
          type="text"
          name="name"
        >
        <label for="email">Email</label>
        <input
          v-model="formData.email"
          type="email"
          name="email"
          required
        >

        <label for="message">Message</label>
        <textarea
          v-model="formData.message"
          name="message"
          required
        />

        <div class="form__button-container">
          <button
            type="button"
            class="button--secondary"
            @click="close"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="button--primary"
          >
            Send
          </button>
        </div>
      </form>

      <div v-if="submitted === true">
        <h2>Message sent.</h2>
        <p>Thank you for reaching out. I will be in touch with you shortly.</p>
        <g-link to="/articles">
          How about an article?
        </g-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      formData: {}
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      // Post the form data to '/' where Netlify forms will pick it up
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(data => {
        console.log(data)
        if (data.status == 200) {
          this.submitted = true
        } else {
          this.submitted = 'error'
        }
      })
      .catch(error => {
        console.error(error)
        this.submitted = 'error'
        alert(error)
      })
    },
    close() {
      this.$parent.$emit('close');
    },
  }
}
</script>
