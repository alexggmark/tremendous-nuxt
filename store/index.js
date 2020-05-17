export const actions = {
  nuxtServerInit ({ dispatch }) {
    return Promise.all([
      dispatch('navigation/fetchAndSet'),
      dispatch('articles/fetchAndSet'),
      dispatch('categories/fetchAndSet'),
      dispatch('pages/fetchAndSet')
    ])
  }
}
