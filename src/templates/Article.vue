<template>
  <article>
    <h1>{{$page.article.title}}</h1>
    <div class="post__content" v-html="$page.article.content"/>
  </article>
</template>

<page-query>
query Article($id: ID!) {
  article: article(id: $id) {
    title
    timeToRead
    content
  }
}
</page-query>
