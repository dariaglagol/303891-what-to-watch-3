import React from "react";
import PropTypes from "prop-types";
import Main from "@components/main/main";

const App = ({filmData, films}) => {
  const filmTitleClickHandler = () => {};

  return (
    <Main
      filmData={filmData}
      onTitleClick={filmTitleClickHandler}
      films={films}
    />
  );
};

App.propTypes = {
  filmData: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired
};

export default App;
