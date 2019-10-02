export const peoples = [
  {
    id: 1,
    name: "jiho",
    age: 26,
    gender: "male"
  },
  {
    id: 2,
    name: "sj",
    age: 13,
    gender: "male"
  },
  {
    id: 3,
    name: "jiho",
    age: 23,
    gender: "female"
  },
  {
    id: 4,
    name: "jiho",
    age: 26,
    gender: "male"
  },
  {
    id: 5,
    name: "jiho",
    age: 26,
    gender: "male"
  },
  {
    id: 6,
    name: "jiho",
    age: 26,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = peoples.filter(person => id === person.id);
  return filteredPeople[0];
};
