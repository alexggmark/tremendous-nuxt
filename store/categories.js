export const state = () => ({
  categories: []
})

export const mutations = {
  set (state, apiData) {
    state.categories = apiData.allCategories
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allCategories {
            id
            title
            inverttext
            image {
              url
            }
            backgroundcolor {
              hex
            }
          }
        }
      `
    })

    commit('set', apiData)
  }
}
