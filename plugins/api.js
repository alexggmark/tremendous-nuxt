import { GraphQLClient } from 'graphql-request'

export default ({ app }, inject) => {
  inject('apiRequest', ({ query, variables, preview }) => {
    const endpoint = preview
      ? 'https://graphql.datocms.com/preview'
      : 'https://graphql.datocms.com/'

    const client = new GraphQLClient(endpoint, {
      headers: {
        // authorization: `Bearer ${process.env.DATOCMS_TOKEN}`
        authorization: 'Bearer 6fc78660c7274f72a1197d25040ff2'
      }
    })

    return client.request(query, variables)
  })
}
