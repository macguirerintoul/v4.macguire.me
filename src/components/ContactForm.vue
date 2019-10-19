<template>
  <form
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
    >

    <label for="message">Message</label>
    <textarea
      v-model="formData.message"
      name="message"
    />
    <div>
      <button
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
</template>

<script>
export default {
  data() {
    return {
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
      this.$emit('submit');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    },
      close() {
        this.$emit('close');
      },
    }
  }
</script>
