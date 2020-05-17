export const state = () => ({
  pages: []
})

export const mutations = {
  set (state, apiData) {
    state.pages = apiData.allPages
  }
}

export const actions = {
  async fetchAndSet ({ commit }) {
    const apiData = await this.$apiRequest({
      query: `
        query {
          allPages {
            title
            subtitle
            image {
              url
            }
            id
            createdAt
            navigationtitle
            content {
              title
              updatedAt
              image {
                url
              }
              content
            }
          }
        }
      `
    })

    commit('set', apiData)
  }
}
