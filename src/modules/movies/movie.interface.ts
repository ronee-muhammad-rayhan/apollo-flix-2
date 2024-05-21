export type TReview ={
    email: string;
    rating: number;
    comment: string;
  }
  
  export type TMovie = {
    title: string;
    description: string;
    releaseDate: Date;
    genre: string;
    reviews: [TReview];
    slug: string;
    viewCount: number;
    isDeleted?: boolean;
  }
  
  export default TMovie;
  
































// export type TMovie = {
//     title: string;
// }

// interface Review {
//     email: string;
//     rating: number;
//     comment: string;
//   }
  
//   interface Movie {
//     title: string;
//     description: string;
//     releaseDate: string;
//     genre: string;
//     isDeleted: boolean;
//     viewCount: number;
//     reviews: Review[];
//   }
  
//   export default Movie;
  