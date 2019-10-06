import fetch from "node-fetch";
import axios from "axios";

const BASE_URL = "https://yts.lt/api/v2";
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;
export const getMovies = async (limit, rating) => {
  let {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit: limit,
      rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  let REQUEST_URL = MOVIE_DETAIL_URL;
  let {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAIL_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
};
