<template>
  <div class="content">
    <h1>{{$page.article.title}}</h1>
    <VueRemarkContent />
  </div>
</template>

<page-query>
query Article($id: ID!) {
  article: article(id: $id) {
    title
    content
  }
}
</page-query>
