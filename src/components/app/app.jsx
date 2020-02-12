import React from "react";
import PropTypes from "prop-types";
import Main from "@components/main/main";

const App = ({filmData, catalogFilmsNamesList}) => {
  const filmTitleClickHandler = () => {};

  return (
    <Main
      filmData={filmData}
      onTitleClick={filmTitleClickHandler}
      catalogFilmsNamesList={catalogFilmsNamesList}
    />
  );
};

App.propTypes = {
  filmData: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired
  }),
  catalogFilmsNamesList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
