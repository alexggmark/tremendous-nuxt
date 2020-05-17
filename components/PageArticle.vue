<template>
  <main>
    <main-article :key="entryHandle" :entry-handle="entryHandle" />
  </main>
</template>

<script>
import MainArticle from '@/components/MainArticle'

export default {
  components: {
    MainArticle
  },
  data () {
    return {
      entryHandle: this.$route.params.handle
    }
  }
}
</script>

<style>

</style>