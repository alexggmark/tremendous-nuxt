export const state = () => ({
  articles: []
})

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
            id
            categories {
              title {
                title
                id
              }
            }
            title
            intro
            body
            image {
              id
              url
            }
            _createdAt
          }
        }
      `
    })

    commit('set', apiData)
  }
}