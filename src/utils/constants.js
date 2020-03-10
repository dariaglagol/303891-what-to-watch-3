const MovieMarksTypes = {
  'Awesome': `10`,
  'Very good': `8`,
  'Good': `5`,
  'Normal': `3`,
  'Bad': `0`,
};

const GENRES = [
  `All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`
];

const DEFAULT_ACTIVE_GENRE = `All genres`;

const PageTypes = {
  MAIN: `main`,
  MOVIE: `movie`
};

const SIMILAR_FILM_COUNT = 4;

export {MovieMarksTypes, GENRES, PageTypes, DEFAULT_ACTIVE_GENRE, SIMILAR_FILM_COUNT};
