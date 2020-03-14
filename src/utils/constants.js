const MovieMarksTypes = {
  'Awesome': `10`,
  'Very good': `8`,
  'Good': `5`,
  'Normal': `3`,
  'Bad': `0`,
};

const TabTypes = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
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

const FILM_REVIEWS_COLUMN_COUNT = 2;

export {MovieMarksTypes, FILM_REVIEWS_COLUMN_COUNT, TabTypes, GENRES, PageTypes, TABS, SIMILAR_FILM_COUNT, DEFAULT_ACTIVE_GENRE, DEFAULT_ACTIVE_TAB};
