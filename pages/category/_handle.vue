<template>
  <section>
    <!-- <div class="header-banner" :style="{ background: 'url(' + category.image.url + ')', backgroundPosition: 'center', backgroundSize: 'cover' }" /> -->
    <div class="header-banner" :style="{ backgroundColor: category.backgroundcolor.hex }">
      <div class="header-banner__image" :style="{ background: 'url(' + category.image.url + ')', backgroundPosition: 'center', backgroundSize: 'cover', opacity: 1 }">
        <div class="header-banner__container">
          <h1 class="header-banner__title" :style="{ backgroundColor: category.backgroundcolor.hex }" :class="{ 'header-banner__title--inverted': category.inverttext }">
            {{ category.title }}
          </h1>
        </div>
      </div>
    </div>
    <article-page-block :article-data="matchedCatArticles" />
  </section>
</template>

<script>
import ArticlePageBlock from '@/components/ArticlePageBlock'
import { handleize } from '@/modules/stringTools.js'

export default {
  layout: 'Standard',
  components: {
    ArticlePageBlock
  },
  data () {
    return {
      handle: this.$route.params.handle
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.categories.find((cat) => {
        return handleize(cat.title) === this.handle
      })
    },
    matchedCatArticles () {
      return this.$store.state.articles.articles.filter((article) => {
        return article.categories.some((item) => {
          return item.title.id === this.category.id
        })
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

.header-banner {
  position: relative;

  &__container {
    margin: 0 auto;
    width: 100%;
  }

  &__title {
    color: $color-white;
    display: inline-block;
    font-size: 42px;
    margin: 0;
    padding: 0 1.5rem;

    &--inverted {
      color: #000000;
    }
  }

  &__image {
    align-items: center;
    display: flex;
    top: 0;
    left: 0;
    min-height: 200px;
    width: 100%;
  }

  @media screen and (min-width: $width-lg) {
    &__title {
      font-size: 72px;
    }

    &__image {
      min-height: 300px;
    }

    &__container {
      width: $width-lg;
    }
  }
}
</style>
