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

const TABS = [`Overview`, `Details`, `Reviews`];

const DEFAULT_ACTIVE_TAB = `Overview`;

export {MovieMarksTypes, GENRES, PageTypes, TABS, SIMILAR_FILM_COUNT, DEFAULT_ACTIVE_GENRE, DEFAULT_ACTIVE_TAB};
