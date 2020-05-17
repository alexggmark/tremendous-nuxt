<template>
  <section>
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
    categoryId () {
      return this.$store.state.categories.categories.find((cat) => {
        return handleize(cat.title) === this.handle
      }).id
    },
    matchedCatArticles () {
      return this.$store.state.articles.articles.filter((article) => {
        return article.categories.some((item) => {
          return item.title.id === this.categoryId
        })
      })
    }
  },
  methods: {
    handleize
  }
}
</script>

<style>

</style>
