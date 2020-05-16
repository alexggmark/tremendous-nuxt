<template>
  <ul class="article-tag">
    <li
      v-for="tag in linkedTagCat"
      :key="'article-tag-' + tag.title"
      :style="{
        '--color-hover': tag.backgroundcolor.hex,
        '--color-text-hover': tag.inverttext ? '#000000' : '#ffffff',
      }"
      class="article-tag__tag"
    >
      {{ tag.title }}<br>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tagData: {
      type: Array,
      required: true
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories.categories
    },
    tags () {
      return this.tagData.map((tag) => {
        return tag.title.title
      })
    },
    linkedTagCat () {
      return this.categories.filter((cat) => {
        return this.tags.includes(cat.title)
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.article-tag {
  margin: 0;
  padding-inline-start: 0;

  &__tag {
    background-color: var(--color-hover);
    border-radius: 20px;
    color: var(--color-text-hover);
    cursor: pointer;
    display: inline-block;
    font-size: $font-size-2xs;
    font-weight: 400;
    line-height: 12px;
    margin: 0.3rem 0.3rem 0 0;
    padding: 0.2rem 0.5rem;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  @media screen and (min-width: $width-md) {
    &__tag {
      background-color: #cacaca;
      color: white;

      &:hover {
        background-color: var(--color-hover);
        color: var(--color-text-hover);
      }
    }
  }
}
</style>
