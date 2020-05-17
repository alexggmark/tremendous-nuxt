<template>
  <ul>
    <li v-for="(link, index) in navigationLinks" :key="index">
      <nuxt-link v-if="link.link" :to="'/' + link.link.navigationtitle">
        {{ link.title }}
      </nuxt-link>
      <nuxt-link v-else :to="'/' + link.stringlink">
        {{ link.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navigationLinks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
