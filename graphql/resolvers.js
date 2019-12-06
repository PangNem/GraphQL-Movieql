import { getStatus, getMovies, getMovieById, suggestMovieById } from './db';

const resolvers = {
  Query: {
    status: () => getStatus(),
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovieById(id),
    suggest: (_, { id }) => suggestMovieById(id)
  }
};

export default resolvers;