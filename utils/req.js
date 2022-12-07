const API_KEY = process.env.API_KEY;
function queryBuilder(url) {
  return url + `api_key=${API_KEY}&language=en-US`;
}
export default [
  {
    title: "Trending",
    url: queryBuilder(`/trending/all/week?`),
  },
  {
    title: "Top Rated",
    url: queryBuilder("/movie/top_rated?"),
  },
  {
    title: "Action",
    url: queryBuilder("/discover/movie?with_genres=28&"),
  },
  {
    title: "Comedy",
    url: queryBuilder("/discover/movie?with_genres=35&"),
  },
  {
    title: "Horror",
    url: queryBuilder("/discover/movie?with_genres=27&"),
  },
  {
    title: "Romance",
    url: queryBuilder("/discover/movie?with_genres=10749&"),
  },
  {
    title: "Mystery",
    url: queryBuilder("/discover/movie?with_genres=9648&"),
  },
  {
    title: "SI-FI",
    url: queryBuilder("/discover/movie?with_genres=878&"),
  },
  {
    title: "Western",
    url: queryBuilder("/discover/movie?with_genres=37&"),
  },
  {
    title: "Animation",
    url: queryBuilder("/discover/movie?with_genres=16&"),
  },
  {
    title: "Tv Movie",
    url: queryBuilder("/discover/movie?with_genres=10770&"),
  },
];
