import gql from 'graphql-tag'

export default gql`
  query getItems {
    items {
      id,
      title,
      done
    }
  }
`