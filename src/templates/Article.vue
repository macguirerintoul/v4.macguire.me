<template>
  <article>
    <div class="content">
      <h1>{{ $page.article.title }}</h1>
      <p>by Macguire Rintoul — updated {{ updated }}</p>
      <VueRemarkContent />
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    updated: function() {
      return moment(this.$page.article.date).fromNow()
    },
  },
}
</script>

<page-query>
query Article($id: ID!) {
  article: article(id: $id) {
    title
    content
    date
  }
}
</page-query>
