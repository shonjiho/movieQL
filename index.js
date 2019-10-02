import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer();
server.start(() => {
  console.log("Graph QL server running...");
});

console.log("hello");
console.log("hello");
