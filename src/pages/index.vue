<template>
  <div>
    <section class="hero">
      <p>
        I'm Macguire, an experience designer & developer from Vancouver, BC.
        Currently, I'm working at
        <MagicLink url="http://www.visier.com/">Visier</MagicLink> as a User
        Experience Design Intern for their analytics platform. Previously, I've
        worked at
        <MagicLink url="http://vch.ca/">Vancouver Coastal Health</MagicLink>
        and the <MagicLink url="http://clab.iat.sfu.ca/">Connections Lab</MagicLink>.
      </p>
      <div class="social-buttons">
        <a
          href="https://twitter.com/MacguireRintoul?ref_src=twsrc%5Etfw"
          class="twitter-follow-button"
          data-show-count="false"
          data-size="large"
          >Follow @MacguireRintoul</a>
        <a
          class="github-button"
          href="https://github.com/MacguireRintoul"
          data-size="large"
          aria-label="Follow @MacguireRintoul on GitHub"
          >Follow @MacguireRintoul</a
        >
    </div>
    </section>
    <section class="work">
      <h1>Featured Work</h1>
      <div class="project-flex-container">
        <ProjectBlock
          v-for="edge in $page.featuredProjects.edges"
          :key="edge.node.id"
          :project="edge.node"
        />
      </div>
      <!--
      <h2>Other projects</h2>
      <div class="other-projects__flex-container">
        <g-link
          class="table-row"
          v-for="edge in $page.otherProjects.edges"
          :to="edge.node.path"
          :key="edge.node.id"
        >
          <p>{{edge.node.title}} — {{edge.node.shortDescription}}</p>
        </g-link>
      </div>
       -->
    </section>
  </div>
</template>

<page-query>
query AllProjects {
  featuredProjects: allProject(sortBy: "order", order: ASC, filter: {
    featured: { eq: true },
    published: { eq: true }
  }) {
    edges {
      node {
        id
        for
        title
        shortDescription
        tags
        imagePath
        path
      }
    }
  }
  otherProjects: allProject(filter: {
    featured: { eq: false },
    published: { eq: true }
  }) {
    edges {
      node {
        id
        title
        path
        shortDescription
      }
    }
  }
}
</page-query>

<script>
import ProjectBlock from '~/components/ProjectBlock.vue'
import MagicLink from '~/components/MagicLink.vue'

export default {
  components: {
    ProjectBlock,
    MagicLink,
  },
  metaInfo() {
    return {
      title: 'Work',
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js',
          async: 'async',
          defer: 'defer',
        },
        {
          src: 'https://buttons.github.io/buttons.js',
          async: 'async',
          defer: 'defer',
        },
      ],
    }
  },
}
</script>
