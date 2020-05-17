export const state = () => ({
  navigation: []
})

export const mutations = {
  set (state, apiData) {
    state.navigation = apiData.allNavigations
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allNavigations {
            link {
              navigationtitle
            }
            title
            stringlink
          }
        }
      `
    })

    commit('set', apiData)
  }
}
