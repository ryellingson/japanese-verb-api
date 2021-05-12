const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./graphql/schema.js');
const { resolvers } = require('./graphql/resolvers.js')
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
