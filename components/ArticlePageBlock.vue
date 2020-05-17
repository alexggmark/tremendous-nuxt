<template>
  <ul>
    <li
      v-for="(item, index) in articleData"
      :key="index"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    articleData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
// @import '@/assets/scss/main.scss';

//   @media screen and (min-width: $width-lg) {
//     &__container {
//       flex-flow: row;
//       position: relative;
//       width: $width-lg;
//       z-index: 0;
//     }

</style>
