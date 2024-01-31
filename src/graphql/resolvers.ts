// resolvers.ts
export const resolvers = {
    Query: {
      hello: () => 'Hello, world!',
    },
    Mutation: {
      greet: (_, { name }) => `Hello, ${name}!`,
    },
  };
  