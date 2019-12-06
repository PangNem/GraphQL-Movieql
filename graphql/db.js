import axios from "axios";
const BASE_URL = "https://yts.lt/api/v2/";
const MOVIE_LISTS_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;
const GET_STATUS_URL = MOVIE_LISTS_URL;

export const getStatus = async() => {
  return await axios.get(GET_STATUS_URL)
    .then(response => { return response.data.status })
    .catch(err => console.error(err));
};

export const getMovies = async(limit, rating) => {
  return await axios.get(MOVIE_LISTS_URL, {
    params: {
      limit,
      rating
    }
  }).then(response => { return response.data.data.movies })
    .catch(err => console.error(err));
};

export const getMovieById = async(id) => {
  return await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id : id
    }
  }).then(response => { return response.data.data.movie })
    .catch(err => console.error(err));
};

export const suggestMovieById = async(id) => {
  return await axios.get(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id : id
    }
  }).then(response => { return response.data.data.movies })
    .catch(err => console.error(err));
};


