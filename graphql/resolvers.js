import { getStatus, getMovies } from './db';

const resolvers = {
    Query: {
        status: () => getStatus(),
        movies: (_, {limit, rating}) => getMovies(limit, rating)
    }
};

export default resolvers;
 