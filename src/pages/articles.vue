<template>
  <section>
    <h1>Articles</h1>
    <!-- List posts -->
    <div>
      <li
        v-for="edge in $page.articles.edges"
        :key="edge.node.id"
        :post="edge.node"
      >
        {{ edge.node.title }}
      </li>
    </div>
  </section>
</template>

<page-query>
query AllArticles {
  articles: allArticle {
    edges {
      node {
        title
      }
    }
  }
}
</page-query>
