<template>
  <div class="article-vertical">
    <div class="article-vertical__item" v-for="(article, index) in data" :key="index">
      <router-link :to="{name: 'Article', params: {handle: article.entryId}}">
        <div class="article-vertical__item--inner">
          <h2 class="h2">
            <a href="#">
              {{ article.title }}
            </a>
          </h2>
          <span class="article-vertical__date">
            {{ article.date }}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.article-vertical {
  display: flex;
  flex-wrap: wrap;
  padding: 0 $spacing-md;

  &__item {
    margin-bottom: $spacing-md;
    width: 50%;

    a {
      text-decoration: none;
    }

    &--inner {
      border-bottom: 1px dotted $color-black;
      cursor: pointer;
      display: flex;
      flex-flow: column;
      height: 100%;
      justify-content: space-between;
      margin: 0 $spacing-xs 0 0;
      padding-bottom: $spacing-sm;
      padding-right: $spacing-sm;

      &:hover {
        a {
          text-decoration: underline;
        }
      }

      a {
        color: $color-black;
        text-decoration: none;
      }
    }
  }

  &__date {
    color: $color-grey;
    font-size: $font-size-xs;
  }

  @media screen and (min-width: $width-md) {
    flex-flow: row;

    &__item {
      margin-bottom: $spacing-md;
      width: 25%;
    }
  }

  @media screen and (min-width: $width-lg) {
    flex-flow: column;
    padding: 0 $spacing-sm 0 0;

    &__item {
      margin-bottom: $spacing-md;
      width: 100%;
    }
  }
}
</style>