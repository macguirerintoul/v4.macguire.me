<template>
  <div class="modal__backdrop">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modal__title"
      aria-describedby="modal__description"
    >
      <header
        id="modal__title"
        class="modal__header"
      >
        <slot name="header" />
        <svg
          class="modal__header-close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          @click="close"
        >
          <path
            fill="grey"
            d="M24 20.2L15.7 12l8.2-8.3L20.2 0 12 8.3 3.7.1 0 3.8 8.3 12 .1 20.3 3.8 24l8.2-8.3 8.3 8.2z"
          />
        </svg>
      </header>
      <section
        id="modal__description"
        class="modal__body"
      >
        <slot name="body" />
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
