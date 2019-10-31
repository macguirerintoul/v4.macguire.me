<template>
  <section>
    <h1>Articles</h1>
    <!-- List posts -->
    <div>
      <g-link v-for="edge in $page.articles.edges"
      :key="edge.node.id"
      :post="edge.node" :to="edge.node.path">
      <li>
        {{ edge.node.title }}
      </li>
    </g-link>
    </div>
  </section>
</template>

<page-query>
query AllArticles {
  articles: allArticle {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>
