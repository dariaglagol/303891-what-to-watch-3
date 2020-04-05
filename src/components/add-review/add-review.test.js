import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import AddReview from "./add-review";
import history from "../../history.js";

const mock = {
  films: [
    {
      name: `name`,
      genre: `Comedy`,
      posterImage: `posterImage`,
      previewImage: `previewImage`,
      backgroundImage: `backgroundImage`,
      backgroundColor: `backgroundColor`,
      description: `description`,
      rating: 124,
      scoresCount: 8.9,
      director: `director`,
      starring: [`starring`, `starring`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `videoLink`,
      previewVideoLink: `previewVideoLink`,
    }, {
      name: `name 2`,
      genre: `Comedy`,
      posterImage: `posterImage 2`,
      previewImage: `previewImage 2`,
      backgroundImage: `backgroundImage 2`,
      backgroundColor: `backgroundColor 2`,
      description: `description 2`,
      rating: 124,
      scoresCount: 8.9,
      director: `director 2`,
      starring: [`starring 2`, `starring 2`],
      runTime: 113,
      released: 2020,
      id: 2,
      isFavorite: false,
      videoLink: `videoLink 2`,
      previewVideoLink: `previewVideoLink 2`,
    },
  ],
  userData: {
    id: 1,
    email: `email`,
    name: `name`,
    avatarUrl: `avatarUrl`
  },
  authStatus: `AUTH`,
  movieDetails: {
    name: `givenPromoMovie name`,
    genre: `givenPromoMovie genre`,
    posterImage: `givenPromoMovie posterImage`,
    previewImage: `givenPromoMovie previewImage`,
    backgroundImage: `givenPromoMovie backgroundImage`,
    backgroundColor: `givenPromoMovie backgroundColor`,
    description: `givenPromoMovie description`,
    rating: 124,
    scoresCount: 8.9,
    director: ` givenPromoMovie director`,
    starring: [` givenPromoMovie starring`, `givenPromoMovie starring`],
    runTime: 113,
    released: 2020,
    id: 1,
    isFavorite: false,
    videoLink: `givenPromoMovie videoLink`,
    previewVideoLink: `givenPromoMovie previewVideoLink`,
  },
  reviewError: {},
  isSubmitButtonDisable: true,
  validationErrors: [],
  isLoading: false,
  match: {
    params: {
      id: `1`,
    }
  },
  text: `text`
};

it(`Render add review component`, () => {
  const {
    userData,
    authStatus,
    movieDetails,
    reviewError,
    isSubmitButtonDisable,
    validationErrors,
    isLoading,
    match,
    text,
    films
  } = mock;

  const addReviewComponent = renderer
    .create(
        <Router history={history}>
          <AddReview
            films={films}
            onStarsChange={() => {}}
            onSubmit={() => {}}
            userData={userData}
            authStatus={authStatus}
            text={text}
            movieDetails={movieDetails}
            isSubmitButtonDisable={isSubmitButtonDisable}
            reviewError={reviewError}
            validationErrors={validationErrors}
            onTextChange={() =>{}}
            toggleSubmitButton={() => {}}
            isLoading={isLoading}
            match={match}
          />
        </Router>
    ).toJSON();

  expect(addReviewComponent).toMatchSnapshot();
});
