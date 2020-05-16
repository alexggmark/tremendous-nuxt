<template>
  <ul>
    <li v-for="(link, index) in navigationLinks" :key="index">
      <a href="#">
        {{ link.title }}
      </a>
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
