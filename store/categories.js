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
            title
            inverttext
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
