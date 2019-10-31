<template>
  <article>
    <h1>{{$page.article.title}}</h1>
    <VueRemarkContent />
  </article>
</template>

<page-query>
query Article($id: ID!) {
  article: article(id: $id) {
    title
    content
  }
}
</page-query>
