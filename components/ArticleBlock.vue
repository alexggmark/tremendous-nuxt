<template>
  <div class="article-block">
    <div class="article-block__container">
      <div class="article-block__content">
        <h2 class="h1 article-block__title">
          {{contentTitle}}
        </h2>
        <span class="article-block__date">{{contentDate}}</span>
        <span class="article-block__text-content" v-html="contentTextTruncated">
        </span>
      </div>
      <div class="article-block__image">
        <div class="image" v-lazy:background-image="contentImage"></div>
      </div>
    </div>
    <div class="article-block__bottom-spacer"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.article-block {
  background-color: $color-black;
  color: $color-white;

  &__container {
    display: flex;
    flex-flow: column-reverse;
    margin: 0 auto;
    padding: 0 0 $spacing-md;
    width: 100%;
  }

  &__image {
    width: 100%;

    .image {
      background-position: center;
      background-size: cover;
      height: 550px;
    }
  }

  &__content {
    padding: 0 $layout-sm 0 0;
  }

  &__title.h1 {
    margin-top: $spacing-xl;
  }

  &__date {
    border-bottom: 1px solid $color-white;
    color: $color-white;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding-bottom: $spacing-2xs;
    width: 100%;
  }

  &__text-content{
    font-size: $font-size-sm;
    line-height: $line-height-sm;
  }

  &__bottom-spacer {
    background-color: $color-white;
    margin-bottom: $spacing-md;
    width: 100%;
  }

  @media screen and (min-width: $width-lg) {
    &__container {
      flex-flow: row;
      padding: $layout-md 0;
      width: $width-lg;
    }

    &__image {
      width: 50%;

      .image {
        height: 350px;
      }
    }

    &__content {
      width: 50%;
    }

    &__title.h1 {
      margin-top: 0;
    }
  }
}
</style>