<template>
  <article>
    <h1>{{ $page.article.title }}</h1>
    <span>{{ $page.article.timeToRead }} minute read</span>
    <span>Updated {{ updated }}</span>
    <div class="post__content" v-html="$page.article.content" />
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
    timeToRead
    content
    date
  }
}
</page-query>
