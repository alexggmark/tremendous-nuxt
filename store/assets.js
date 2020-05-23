export const state = () => ({
  assets: []
})

export const mutations = {
  set (state, apiData) {
    state.assets = apiData.allAssets
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allAssets {
            image {
              url
              alt
              title
            }
            assettitle
          }
        }
      `
    })

    commit('set', apiData)
  }
}
