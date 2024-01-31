// typeDefs.ts
import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    greet(name: String!): String
  }
`;
