import NameSpace from "@reducers/name-space";

const NAME = NameSpace.GENRE;

const getSortedFilms = (state) => {
  return state[NAME].films;
};

const getActiveGenre = (state) => {
  return state[NAME].activeGenre;
};

export {getSortedFilms, getActiveGenre};
