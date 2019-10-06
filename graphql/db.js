let movies = [
  { id: 0, name: "Joket", score: 1.4 },
  { id: 1, name: "sdf", score: 1.4 },
  { id: 2, name: "asdsa", score: 3.4 },
  { id: 3, name: "asdf", score: 4.4 },
  { id: 4, name: "Joasdfaket", score: 2.2 },

  { id: 5, name: "Jokadf sdfet", score: 5.4 },
  { id: 6, name: "Joasdfafket", score: 6.4 },
  { id: 7, name: "J  sfoket", score: 8.4 },
  { id: 8, name: "Josdf  ket", score: 2.4 },
  { id: 9, name: "Jsdf  oket", score: 4.4 }
];
export const getMovies = () => movies;

export const getById = id => {
  const filteredMoives = movies.filter(movie => id === movie.id);
  return filteredMoives[0];
};

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => id !== movie.id);
  if (movies.length > cleanedMovie.length) {
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
