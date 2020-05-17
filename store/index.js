export const actions = {
  nuxtServerInit ({ dispatch }) {
    return Promise.all([
      dispatch('articles/fetchAndSet'),
      dispatch('categories/fetchAndSet'),
      dispatch('pages/fetchAndSet')
    ])
  }
}
