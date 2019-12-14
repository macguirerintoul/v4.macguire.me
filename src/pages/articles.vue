<template>
  <section>
    <h1>Articles</h1>
    <!-- List posts -->
    <table>
      <tr v-for="edge in $page.articles.edges" :key="edge.node.id">
        <td>
          <g-link :to="edge.node.path">
            {{ edge.node.title }}
          </g-link>
        </td>
        <td>{{ updated(edge.node.date) }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  metaInfo: {
    title: 'Articles',
  },
  methods: {
    updated: function(string) {
      return moment(string).fromNow()
    },
  },
}
</script>

<page-query>
query AllArticles {
  articles: allArticle {
    edges {
      node {
        title
        path
        date
      }
    }
  }
}
</page-query>
