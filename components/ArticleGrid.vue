<template>
  <div class="article-grid">
    <div class="article-grid__container">
      <div v-for="(article, index) in articles" :key="index" class="article-grid__item">
        <nuxt-link :to="'/articles/' + handleize(article.title)">
          <div class="article-grid__item--inner shadow">
            <h2 class="h2">
              {{ article.title }}
            </h2>
            <span class="article-grid__date">
              {{ processDate(article._createdAt) }}
            </span>
            <article-tags :tag-data="article.categories" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleTags from '@/components/ArticleTags'
import { handleize, processDate } from '@/modules/stringTools'

export default {
  components: {
    ArticleTags
  },
  computed: {
    articles () {
      return this.$store.state.articles.articles
    }
  },
  methods: {
    handleize,
    processDate
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.article-grid {
  background-color: $color-grey-light;
  color: $color-black;
  margin-bottom: 0;
  overflow: auto;

  &__container {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto 1.2rem;
    padding-top: 0;
    width: 100%;
  }

  &__item {
    margin-bottom: 1.8rem;
    width: 100%;

    a {
      text-decoration: none;
    }

    &--inner {
      background-color: $color-white;
      box-sizing: content-box;
      cursor: pointer;
      display: flex;
      flex-flow: column;
      height: 100%;
      justify-content: space-between;
      margin: 0 $spacing-xs;
      padding-bottom: $spacing-sm;
      padding-left: $spacing-xs;
      padding-right: $spacing-sm;
      position: relative;
      transition: transform 0.1s ease, box-shadow 0.1s ease;

      .article-tag {
        position: absolute;
        bottom: 6px;
        max-width: 250px;
        right: 2px;
        text-align: right;
      }

      &:hover {
        box-shadow: 0px 11px 10px rgba(0,0,0,0.08);
        transform: translate(0px, -7px);

        h2 {
          color: $color-primary;
          text-decoration: underline;
        }
      }

      a & {
        color: $color-black;
      }
    }
  }

  &__date {
    color: $color-black;
    font-size: $font-size-xs;
  }

  @media screen and (min-width: $width-sm) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: $width-lg) {
    overflow: hidden;

    &__container {
      margin: $layout-sm auto;
      padding-top: $spacing-sm;
      padding-right: 50px;
      width: calc(#{$width-lg} - 50px);
    }

    &__item {
      width: 50%;

      &--inner {
        margin: 0 $spacing-xs 0 0;
      }
    }
  }
}
</style>