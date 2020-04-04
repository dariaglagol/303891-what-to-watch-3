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

const Genres = new Map([
  [`ALL_GENRES`, {single: `All genres`, multiply: `All genres`}],
  [`COMEDY`, {single: `Comedy`, multiply: `Comedies`}],
  [`CRIME`, {single: `Crime`, multiply: `Crime`}],
  [`DOCUMENTARY`, {single: `Documentary`, multiply: `Documentary`}],
  [`DRAMA`, {single: `Drama`, multiply: `Dramas`}],
  [`HORROR`, {single: `Horror`, multiply: `Horror`}],
  [`KIDS_AND_FAMILY`, {single: `Kids & Family`, multiply: `Kids & Family`}],
  [`ROMANCE`, {single: `Romance`, multiply: `Romance`}],
  [`SCI_FI`, {single: `Sci-Fi`, multiply: `Sci-Fi`}],
  [`THRILLER`, {single: `Thriller`, multiply: `Thrillers`}],
]);

const DEFAULT_ACTIVE_GENRE = {
  single: `All genres`,
  multiply: `All genres`
};

const PageTypes = {
  MAIN: `main`,
  MOVIE: `movie`,
  AUTH: `auth`,
  LOADING: `loading`,
  REVIEW: `review`
};

const SIMILAR_FILM_COUNT = 4;

const TABS = [`Overview`, `Details`, `Reviews`];

const DEFAULT_ACTIVE_TAB = `Overview`;

const FILM_REVIEWS_COLUMN_COUNT = 2;

const DEFAULT_SHOWN_FILMS = 8;

const FULLSCREEN_VIDEO_CLASS = `player__video`;

const StatusCode = {
  UNAUTHORIZED: 401,
  SERVER_PROBLEMS: 500,
  AUTH_ERROR: 400,
  SUCCESS: 200,
};

const TIMEOUT = 5000;

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const RATING_STARS_COUNT = 5;

const TextAreaMinMaxValues = {
  MIN: 50,
  MAX: 400,
};

const RATING_ERROR_TEXT = `Оцените фильм`;

const AppRoute = {
  LOGIN: `/login`,
  MOVIE: `/films`,
  REVIEW: `/review`,
  MY_LIST: `/mylist`,
  ROOT: `/`,
};

export {
  MovieMarksTypes,
  FILM_REVIEWS_COLUMN_COUNT,
  TabTypes,
  Genres,
  PageTypes,
  TABS,
  SIMILAR_FILM_COUNT,
  DEFAULT_ACTIVE_GENRE,
  DEFAULT_ACTIVE_TAB,
  DEFAULT_SHOWN_FILMS,
  FULLSCREEN_VIDEO_CLASS,
  StatusCode,
  TIMEOUT,
  AuthorizationStatus,
  RATING_STARS_COUNT,
  TextAreaMinMaxValues,
  RATING_ERROR_TEXT,
  AppRoute
};
