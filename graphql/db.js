import axios from "axios";
const BASE_URL = "https://yts.lt/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;

export const getStatus = async() => {
  let response;
  try {
    response = await axios.get(LIST_MOVIES_URL);
  } catch(err) {
    console.error(err);
    return err;
  }
  return response.status;
};

export const getMovies = async(limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      rating
    }
  });
  return movies;
};
