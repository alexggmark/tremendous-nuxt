<template>
  <section>
    <homepage-article />
    <article-grid />
    <main-article />
  </section>
</template>

<script>
import HomepageArticle from '@/components/HomepageArticle'
import ArticleGrid from '@/components/ArticleGrid'
import MainArticle from '@/components/MainArticle'

export default {
  components: {
    HomepageArticle,
    ArticleGrid,
    MainArticle
  }
}
</script>

<style>

</style>