import TMovie from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload:TMovie) => {
    const result = await Movie.create(payload);
    return result;
}

const getAllMovies = async () => {
    const result = await Movie.find();
    return result;
}

export const MovieServices = {
    createMovie,
    getAllMovies,
}


// service is for controlling business logics

// Data-Flow

// Traditional Way
// interface => schema => model => query


// modular pattern for industry standard (organized way)
// route -> controller -> service



