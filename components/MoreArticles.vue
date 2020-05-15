<template>
  <ul>
    <li v-for="(article, index) in moreArticles" :key="index">
      <router-link :to="{name: 'Article', params: {handle: article.entryId}}">
        {{ article.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>