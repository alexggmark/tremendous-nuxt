<template>
  <div class="article-page-block">
    <div class="article-page-block__container">
      <div class="article-page-block__main">
        <div v-for="(article, index) in articleData" :key="index" class="article-page-block__item">
          <nuxt-link :to="'/articles/' + handleize(article.title)">
            <div class="article-page-block__item--inner shadow">
              <h2 class="h2">
                {{ article.title }}
              </h2>
              <span class="article-page-block__date">
                {{ article._createdAt }}
              </span>
              <article-tags :tag-data="article.categories" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleTags from '@/components/ArticleTags'
import { handleize } from '@/modules/stringTools'

export default {
  components: {
    ArticleTags
  },
  props: {
    articleData: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleize
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.article-page-block {
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
    margin-bottom: 1rem;
    width: 100%;

    a {
      text-decoration: none;
    }

    &--inner {
      background-color: $color-white;
      border-radius: 5px;
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
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      .article-tag {
        position: absolute;
        bottom: 6px;
        max-width: 250px;
        right: 2px;
        text-align: right;
      }

      &:hover {
        background-color: #fbfeff;
        box-shadow: 0px 11px 10px rgba(0,0,0,0.08);
        transform: translate(0, -4px);

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

  @media screen and (min-width: $width-lg) {
    overflow: hidden;

    &__main {
      padding-right: 16rem;
    }

    &__container {
      margin: $layout-sm auto;
      padding-top: $spacing-sm;
      padding-right: 50px;
      width: calc(#{$width-lg} - 50px);
    }

    &__item {
      &--inner {
        margin: 0 $spacing-xs 0 0;
      }
    }
  }
}
</style>
