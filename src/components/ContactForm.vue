<template>
  <form method="POST" name="contact" data-netlify="true">
      <p>The contents of this form will be sent directly to my inbox, and I will be in touch with you shortly.</p>
  <div>
    <label>Name <input type="text" name="name" v-bind="name" /></label>
  </div>
  <div>
    <label>Email <input type="email" name="email" v-bind="email" /></label>
  </div>

  <label>Message<textarea v-bind="message" /></label>
  <div>
      <button @click="close" class="button--secondary">Cancel</button>
    <button @click="submit" class="button--primary">Send</button>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit');
    },
    close() {
      this.$emit('close');
    },
  }
}
</script>
