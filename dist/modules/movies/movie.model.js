"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const reviewSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
});
const movieSchema = new mongoose_1.Schema({
    title: { type: String, required: [true, "Title is required"], },
    description: { type: String, required: [true, "Description is required"] },
    releaseDate: { type: Date, },
    genre: { type: String, required: [true, "Genre is required"] },
    reviews: [reviewSchema],
    slug: { type: String, },
    isDeleted: { type: Boolean, default: false, },
    viewCount: { type: Number, default: 0, },
});
exports.Movie = mongoose_1.default.model('Movie', movieSchema);
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
