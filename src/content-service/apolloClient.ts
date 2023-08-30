import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_CONTENTFUL_SPACE_ID}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.NEXT_CONTENTFUL_ACCESS_TOKEN}`,
  },
});

export default client