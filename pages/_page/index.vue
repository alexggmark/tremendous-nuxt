<template>
  <section class="page">
    <div class="page--top">
      <div class="page__container">
        <div class="page__main">
          <div class="page__image image" :style="{ background: 'url(' + pageData.image.url + ')', backgroundPosition: 'center', backgroundSize: 'cover' }" />
          <h2 class="page__title">
            {{ pageData.title }}
          </h2>
          <p class="page__text-content">
            {{ pageData.subtitle }}
          </p>
        </div>
      </div>
    </div>
    <div class="page--bottom">
      <div class="page__container">
        <div class="page__main">
          <div
            v-for="(item, index) in pageData.content"
            :key="'block' + index"
            :class="{ 'page__content--reverse': index % 2 !== 0 }"
            class="page__content shadow"
          >
            <div class="page__block">
              <div class="page__image image" :style="{ background: 'url(' + item.image.url + ')', backgroundPosition: 'center', backgroundSize: 'cover' }" />
            </div>
            <div class="page__block page__block--text">
              <h2 class="h3">
                {{ item.title }}
              </h2>
              <p class="page__text-content">
                {{ item.content }}
              </p>
            </div>
          </div>

          <!-- <div class="page__content page__content--reverse shadow" v-if="content3Image && content3Text">
            <div class="page__block">
                <div class="page__image image" v-lazy:background-image="content3Image"></div>
            </div>
            <div class="page__block page__block--text">
              <h2 class="h3">
                {{content3Title}}
              </h2>
              <span class="page__text-content" v-html="content3Text"></span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'Standard',
  data () {
    return {
      handle: this.$route.params.page
    }
  },
  computed: {
    pageData () {
      return this.$store.state.pages.pages.find((page) => {
        return page.navigationtitle === this.handle
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.page {
  color: $color-black;

  &--bottom {
    background-color: $color-grey-light;
  }

  &__container {
    display: flex;
    margin: 0 auto;
    padding: 0 1rem;
    width: calc(100% - 2rem);
  }

  &__content {
    background-color: $color-white;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    padding: 1.2rem;
    margin: $spacing-md 0;
  }

  &__block {
    width: 100%;

    &--text {
      display: flex;
      flex-flow: column;
      justify-content: center;
    }

    .h3 {
      margin-bottom: 0;
    }
  }

  &__main {
    width: 100%;
  }

  &__side {
    display: none;
  }

  &__image {
    background-size: cover;
    background-position: center;
    height: 420px;
  }

  &__title {
    color: $color-black;
    font-size: 53px;
    line-height: 60px;
    margin: 1.5rem 0 0.5rem;
    text-decoration: underline;
    text-decoration-color: $color-primary;
  }

  &__date {
    border-bottom: 1px solid $color-black;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
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

  @media screen and (min-width: $width-md) {
    &__container {
      flex-flow: row;
    }

    &__content {
      flex-flow: row;
      padding: 1rem;

      &--reverse {
        flex-flow: row-reverse;
        text-align: right;
      }
    }

    &__block {
      padding: 0 3rem 0 0;

      .image {
        border-radius: 3px 0 0 3px;
        height: auto;
        padding-top: 100%;
      }

      .page__content--reverse & {
        padding: 0 0 0 3rem;

        .image {
          border-radius: 0 3px 3px 0;
        }
      }
    }
  }

  @media screen and (min-width: $width-lg) {
    padding-top: 2rem;

    &__container {
      flex-flow: row;
      padding: 0;
      width: $width-lg;
    }

    &__main {
      padding: 0 16rem 0 0;
      width: 100%;
    }
  }
}
</style>