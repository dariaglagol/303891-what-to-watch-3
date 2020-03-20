import React from "react";
import PropTypes from "prop-types";
import GenresList from "@components/genres-list/genres-list";

const Catalog = (props) => {
  const {activeGenre, onGenreTabClick, renderMovieList} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden"> Catalog </h2>
      <GenresList
        onGenreTabClick={onGenreTabClick}
        activeGenre={activeGenre}
      />
      {renderMovieList()}
      <div className="catalog__more">
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Catalog;

Catalog.propTypes = {
  renderMovieList: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};
