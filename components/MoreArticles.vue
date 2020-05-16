<template>
  <ul>
    <li v-for="(article, index) in articles" :key="index">
      <a href="#">
        {{ article.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      start: 1,
      limit: 3
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles.articles
    }
  }
}
</script>

<style>

</style>