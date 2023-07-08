import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_HOST || ''

const client = new ApolloClient({
  link: new HttpLink({ uri: endpoint, fetch }),
  cache: new InMemoryCache()
})

export default client
