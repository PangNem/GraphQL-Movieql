import axios from "axios";
const BASE_URL = "https://yts.lt/api/v2/";
const MOVIE_LISTS_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
const GET_STATUS_URL = MOVIE_LISTS_URL;

export const getStatus = async() => {
  let response;
  try {
    response = await axios.get(GET_STATUS_URL);
  } catch(err) {
    console.error(err);
    return err;
  }
  return response.data.status;
};

export const getMovies = async(limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_LISTS_URL, {
    params: {
      limit,
      rating
    }
  });
  console.log(movies);
  return movies;
};

export const getMovieById = async(id) => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id : id
    }
  });
  console.log(movie);
  return movie;
};

export const suggestMovieById = async(id) => {
  const {
    data: {
      data: { suggest_movies }
    }
  } = await axios.get(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id : id
    }
  });
  console.log(suggest_movies);
  return suggest_movies;
};


