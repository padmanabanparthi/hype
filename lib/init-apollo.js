import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

function create (initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
        uri: "https://api.omnix.digital/commands",
        headers: {
          "X-Hype-Language" : "en",
          "X-Hype-App" :"eyJhbGciOiJub25lIn0.eyJkYXRhIjoiNWI5MTk2YTY5YzBlNWYwMDAxNmY2MTdmIn0.",
          "X-Hype-User":"eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiMzEwY2VkMzcyMDBiMWEwZGFlMjVlZGIyNjNmZTUyYzQ5MWY2ZTQ2NzI2OGFjYWIwZmZlYzA2NjY2ZTJlZDk1OSIsImV4cCI6MTU0NTgzOTAyMX0.u47jzF_y9mgH-aSPAkF4Y3nJJdW2RS07QSsN0HlYQXw",
        },
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !isBrowser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
