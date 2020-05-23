<template>
  <div class="main-article">
    <div class="main-article__container">
      <div class="main-article__main">
        <div :style="{ background: 'url(' + entryData.image.url + ')' }" class="main-article__image image" />
        <article-tags :tag-data="entryData.categories" />
        <div class="main-article__content">
          <h2 class="main-article__title">
            {{ entryData.title }}
          </h2>

          <span class="main-article__date">
            {{ entryData._createdAt }}
          </span>

          <span class="main-article__text-content">
            <p>
              {{ entryData.body }}
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleTags from '@/components/ArticleTags'

export default {
  components: {
    ArticleTags
  },
  props: {
    entryData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.main-article {
  color: $color-black;
  padding-bottom: $spacing-xl;

  .contentful__code-block {
    background-color: #232323;
    color: #dfdffd;
    font-size: 18px;
    line-height: 25px;
    padding: 1rem;
    border-radius: 5px;
    white-space: pre-wrap;
  }

  .contentful__embedded-image {
    width: 100%;
  }

  &__container {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    width: 100%;
  }

  &__main {
    padding: 0;
    width: 100%;

    .article-tag {
      padding: 0 1rem;
      margin: 0.75rem 0;
      text-align: left;
    }
  }

  &__content {
    padding: 0 1rem;
  }

  &__image {
    background-size: cover;
    background-position: center;
    height: 420px;
  }

  &__title {
    font-size: 29px;
    line-height: 36px;
    margin: $spacing-xs 0 $spacing-md;
    text-decoration: underline;
    text-decoration-color: $color-primary;
  }

  &__date {
    border-bottom: 1px solid #e6e6e6;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    font-weight: 500;
    padding-bottom: $spacing-2xs;
    width: 100%;
  }

  &__text-content{
    font-size: $font-size-md;
    line-height: $line-height-md;
  }

  .skeleton--image {
    height: 420px;
  }

  @media screen and (min-width: $width-sm) {
    &__main {
      padding: 0 1rem;
      width: calc(100% - 2rem);

      .article-tag {
       margin: 0 0 0.75rem 0;
        padding: 0;
      }
    }

    &__content {
      padding: 0;
    }
  }

  @media screen and (min-width: $width-lg) {
    .code-block {
      font-size: 16px;
      line-height: 23px;
    }

    &__main {
      padding: 0 16rem 0 0;
    }

    &__container {
      flex-flow: row-reverse;
      width: $width-lg;
    }

    &__image {
      height: 320px;
    }

    .skeleton--image {
      height: 320px;
    }
  }
}
</style>
