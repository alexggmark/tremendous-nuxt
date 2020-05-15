export const state = {
  articles: []
}

export const mutations = {
  set (state, apiData) {
    state.articles = apiData.allArticles
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allArticles {
            category {
              title
              description
            },
            title,
            intro,
            body,
            image {
              id,
              url
            }
          }
        }
      `
    })

    commit('set', apiData)
  }
}