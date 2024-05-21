import express, { Request, Response } from "express";
import { Movie } from "./movie.model";
import { MovieController } from "./movie.controller";

const router = express.Router();

router.post("/", MovieController.createMovie);
router.get("/", MovieController.getAllMovies);

export const MovieRoutes = router;
