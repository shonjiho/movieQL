const person = {
  name: "jiho",
  age: 26,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => {
      //alertive data base
      return person;
    }
  }
};

export default resolvers;
