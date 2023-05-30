import axios from 'axios';

export class RequestServer {
  static url = 'https://pixabay.com/api/';
  static key = '35337679-b7947e609f482c58d47f4cd5a';
  // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
  searchImg(value, page = 1) {
    return axios.get(
      `${RequestServer.url}?q=${value}&page=${page}&key=${RequestServer.key}&image_type=photo&orientation=horizontal&per_page=12`
    );
  }
  //   trendingWeek() {
  //     return axios.get(
  //       `${RequestServer.url}trending/movie/week?api_key=${RequestServer.key}`
  //     );
  //   }
  //   newFilms() {
  //     return axios.get(
  //       `${RequestServer.url}movie/upcoming?api_key=${RequestServer.key}&language=en-US&page=1`
  //     );
  //   }
  //   searchMovies(value) {
  //     return axios.get(
  //       `${RequestServer.url}search/movie?api_key=${RequestServer.key}&language=en-US&query=${value}`
  //     );
  //   }
  //   movieDetails(movieId) {
  //     return axios.get(
  //       `${RequestServer.url}movie/${movieId}?api_key=${RequestServer.key}&language=en-US`
  //     );
  //   }
  //   movieVideos(movieId) {
  //     return axios.get(
  //       `${RequestServer.url}movie/${movieId}/videos?api_key=${RequestServer.key}&language=en-US`
  //     );
  //   }
  //   movieGenre() {
  //     return axios.get(
  //       `${RequestServer.url}genre/movie/list?api_key=${RequestServer.key}&language=en-US`
  //     );
  //   }
  //   movieCountries() {
  //     return axios.get(
  //       `${RequestServer.url}configuration/countries?api_key=${RequestServer.key}`
  //     );
  //   }
  //   movieTrailer(movieId) {
  //     return axios.get(
  //       `${RequestServer.url}movie/${movieId}/videos?api_key=${RequestServer.key}&language=en-US`
  //     );
  //   }
  //   movieImage(backdropPath) {
  //     return axios.get(`https://image.tmdb.org/t/p/original/${backdropPath}`);
  //   }
}
