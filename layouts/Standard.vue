<template>
  <div class="layout">
    <layout-header />
    <nuxt />
    <layout-footer />
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader'
import LayoutFooter from '@/components/LayoutFooter'

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  },
  updated () {
    this.$nextTick(() => {
      this.loadedState = true
    })
  }
}
</script>

<style lang="scss" >
.layout {
  margin: 0;
  padding: 0;
}
</style>