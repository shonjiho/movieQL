import { peoples, getById } from "./db";

const resolvers = {
  Query: {
    people: () => peoples,
    person: (_, { id }) => getById(id)
  }
};

export default resolvers;
