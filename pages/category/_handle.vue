<template>
  <section>
    <div class="header-banner" :style="{ background: 'url(' + category.image.url + ')', backgroundPosition: 'center', backgroundSize: 'cover' }" />
    <article-page-block :article-data="matchedCatArticles" />
  </section>
</template>

<script>
import ArticlePageBlock from '@/components/ArticlePageBlock'
import { handleize } from '@/modules/stringTools.js'

export default {
  layout: 'Standard',
  components: {
    ArticlePageBlock
  },
  data () {
    return {
      handle: this.$route.params.handle
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.categories.find((cat) => {
        return handleize(cat.title) === this.handle
      })
    },
    matchedCatArticles () {
      return this.$store.state.articles.articles.filter((article) => {
        return article.categories.some((item) => {
          return item.title.id === this.category.id
        })
      })
    }
  },
  methods: {
    handleize
  }
}
</script>

<style lang="scss">
.header-banner {
  min-height: 300px;
}
</style>
