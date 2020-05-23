<template>
  <div class="home-article">
    <div class="home-article__container">
      <div class="home-article__image">
        <div :style="{ background: 'url(' + assets.image.url + ')', backgroundPosition: 'center', backgroundSize: 'cover' }" class="image" />
      </div>
      <div class="home-article__content">
        <div class="home-article__content--inner">
          <article-tags :tag-data="article.categories" />
          <span class="h5">{{ article.category }}</span>
          <h1 class="home-article__title">
            <nuxt-link :to="'/articles/' + handleize(article.title)">
              {{ article.title }}
            </nuxt-link>
          </h1>
          <span class="home-article__date">{{ article._createdAt }}</span>
          <div class="home-article__more-articles">
            <more-articles />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoreArticles from '@/components/MoreArticles'
import ArticleTags from '@/components/ArticleTags'
import { handleize } from '@/modules/stringTools'

export default {
  components: {
    MoreArticles,
    ArticleTags
  },
  computed: {
    article () {
      return this.$store.state.articles.articles[0]
    },
    assets () {
      return this.$store.state.assets.assets.find((asset) => {
        return asset.assettitle === 'homepagesplash'
      })
    }
  },
  methods: {
    handleize
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.home-article {
  padding-bottom: 2rem;

  .article-tag {
    margin: 0;
    padding: 0;
  }

  &__container {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    width: 100%;
  }

  &__image {
    width: 100%;

    .image {
      background-position: center;
      background-size: cover;
      height: 350px;
    }
  }

  &__title {
    font-size: 29px;
    line-height: 36px;
    margin: $spacing-xs 0 $spacing-md;

    a {
      color: $color-black;
      text-decoration: underline;
      text-decoration-color: $color-primary;

      &:hover {
        background-color: $color-grey-light;
        color: $color-primary;
      }
    }
  }

  &__content {
    padding: $spacing-xs 1rem 0;
  }

  &__date {
    background-color: $color-primary;
    border-radius: 20px;
    color: $color-white;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding: 0.1rem 0.4rem;
  }

  &__more-articles {
    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        font-size: $font-size-sm;
        padding: $spacing-2xs 0;

        &:not(:last-child) {
          border-bottom: 1px dotted $color-black;
        }

        a {
          color: $color-black;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media screen and (min-width: $width-lg) {
    padding-top: 2rem;

    &__container {
      flex-flow: row;
      position: relative;
      width: $width-lg;
      z-index: 0;
    }

    &__image {
      width: 50%;

      .image {
        height: auto;
        padding-top: 100%;
      }
    }

    &__title {
      font-size: 53px;
      line-height: 61px;
      margin: 0.3em 0 0.67em;
    }

    &__content {
      padding: $spacing-xs 0 0;
      width: 50%;

      &--inner {
        padding-left: $spacing-xl;
      }
    }
  }
}
</style>