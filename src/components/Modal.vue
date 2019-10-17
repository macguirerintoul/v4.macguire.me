<template>
    <div class="modal__backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modal__title"
        aria-describedby="modal__description"
      >
        <header
          class="modal__header"
          id="modal__title"
        >
          <slot name="header">

          </slot>
        </header>
        <section
          class="modal__body"
          id="modal__description"
        >
          <slot name="body">
          </slot>
        </section>
      </div>
    </div>
  </transition>
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
