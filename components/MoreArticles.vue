<template>
  <ul>
    <li v-for="(article, index) in articles" :key="index">
      <nuxt-link :to="'/articles/' + handleize(article.title)">
        {{ article.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { handleize } from '@/modules/stringTools'

export default {
  data () {
    return {
      start: 1,
      limit: 3
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles.articles.slice(1, 4)
    }
  },
  methods: {
    handleize
  }
}
</script>

<style>

</style>
