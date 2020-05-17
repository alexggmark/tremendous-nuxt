<template>
  <main>
    <main-article :entry-data="article" />
  </main>
</template>

<script>
import MainArticle from '@/components/MainArticle'
import { handleize } from '@/modules/stringTools.js'

export default {
  layout: 'Standard',
  components: {
    MainArticle
  },
  data () {
    return {
      entryHandle: this.$route.params.handle
    }
  },
  computed: {
    article () {
      return this.$store.state.articles.articles.find((article) => {
        return this.entryHandle === handleize(article.title)
      })
    }
  }
}
</script>

<style>

</style>