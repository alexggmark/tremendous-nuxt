<template>
  <section>
    <homepage-article />
    <article-grid />
    <main-article :entry-data="secondArticle" />
  </section>
</template>

<script>
import HomepageArticle from '@/components/HomepageArticle'
import ArticleGrid from '@/components/ArticleGrid'
import MainArticle from '@/components/MainArticle'

export default {
  layout: 'Standard',
  components: {
    HomepageArticle,
    ArticleGrid,
    MainArticle
  },
  computed: {
    secondArticle () {
      return this.$store.state.articles.articles[1]
    }
  }
}
</script>

<style>

</style>