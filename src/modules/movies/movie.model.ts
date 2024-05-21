import mongoose, { Schema } from 'mongoose';
import TMovie, { TReview } from './movie.interface';

const reviewSchema = new Schema<TReview>({
  email: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const movieSchema = new Schema<TMovie>({
  title: { type: String, required: [true, "Title is required"], },
  description: { type: String, required: [true, "Description is required"] },
  releaseDate: { type: Date, },
  genre: { type: String, required: [true, "Genre is required"] },
  reviews: [reviewSchema],
  slug: { type: String,},
  isDeleted: { type: Boolean, default: false,},
  viewCount: { type: Number, default: 0, },
});

export const Movie = mongoose.model<TMovie>('Movie', movieSchema);






















// import mongoose, { Document, Schema } from 'mongoose';

// interface IReview extends Document {
//   email: string;
//   rating: number;
//   comment: string;
// }

// const reviewSchema = new Schema<IReview>({
//   email: { type: String, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
// });

// interface IMovie extends Document {
//   title: string;
//   description: string;
//   releaseDate: Date;
//   genre: string;
//   isDeleted: boolean;
//   viewCount: number;
//   reviews: IReview[];
// }

// const movieSchema = new Schema<IMovie>({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   releaseDate: { type: Date, required: true },
//   genre: { type: String, required: true },
//   isDeleted: { type: Boolean, required: true },
//   viewCount: { type: Number, required: true },
//   reviews: [reviewSchema],
// });

// const Movie = mongoose.model<IMovie>('Movie', movieSchema);

// export default Movie;
