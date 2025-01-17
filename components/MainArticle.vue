<template>
  <div class="main-article">
    <div class="main-article__container">
      <div class="main-article__main">
        <div :style="{ background: 'url(' + entryData.image.url + ')', backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }" class="main-article__image image" />
        <article-tags :tag-data="entryData.categories" />
        <div class="main-article__content">
          <h2 class="main-article__title">
            {{ entryData.title }}
          </h2>

          <span class="main-article__date">
            {{ processDate(entryData._createdAt) }}
          </span>

          <div
            v-if="entryData.buttonlink !== ''"
            class="main-article__button-container"
          >
            <a
              :href="entryData.buttonlink.split(',')[1]"
              class="button"
              target="_blank"
            >
              {{ entryData.buttonlink.split(',')[0] }}
            </a>
          </div>

          <span class="main-article__text-content" v-html="$md.render(entryData.body)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleTags from '@/components/ArticleTags'
import { processDate } from '@/modules/stringTools'

export default {
  components: {
    ArticleTags
  },
  props: {
    entryData: {
      type: Object,
      required: true
    }
  },
  methods: {
    processDate
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.main-article {
  background-color: $color-white;
  color: $color-black;
  padding-bottom: $spacing-xl;

  &__button-container {
    margin: 2rem 0;
  }

  .button {
    background-color: $color-primary;
    border-radius: 2px;
    color: $color-white;
    font-size: 12px;
    padding: 0.75rem 2.5rem;
    text-decoration: none;
    transition: 0.1s ease;

    &:hover {
      background-color: $color-grey-light;
      color: $color-primary;
      border-radius: 0;
    }
  }

  img {
    border: 2px solid $color-grey-light;
    width: 100%;
  }

  blockquote {
    background-color: $color-grey-light;
    border-radius: 0;
    color: $color-primary;
    font-size: 25px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    position: relative;

    &::before {
      content: '';
      display: block;
      background-color: $color-primary;
      width: 3px;
      left: 0;
      height: 100%;
      position: absolute;
    }

    p {
      margin: 0;
      padding: 1rem 1rem 1rem 1.5rem;
    }
  }

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

    blockquote {
      border-radius: 0 5px 5px 0;
      margin: 0 0 0 1rem;

      p {
        margin: 0;
        padding: 1rem 1rem 1rem 2rem;
      }
    }
  }

  @media screen and (min-width: $width-lg) {
    padding-top: 2rem;

    .code-block {
      font-size: 16px;
      line-height: 23px;
    }

    &__main {
      width: 800px;
    }

    &__container {
      display: block;
      flex-flow: row-reverse;
      width: $width-lg;
    }

    &__image {
      height: 500px;
    }

    .skeleton--image {
      height: 320px;
    }
  }
}
</style>
