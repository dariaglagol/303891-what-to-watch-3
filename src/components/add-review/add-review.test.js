import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review";

const mock = {
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
      id: 1,
    }
  }
};

it(`Render add review component`, () => {
  const {
    userData,
    authStatus,
    movieDetails,
    reviewError,
    isSubmitButtonDisable,
    validationErrors,
    isLoading
  } = mock;

  const addReviewComponent = renderer
    .create(
        <AddReview
          userData={userData}
          authStatus={authStatus}
          movieDetails={movieDetails}
          reviewError={reviewError}
          onStarsChange={() => {}}
          onSubmit={() => {}}
          toggleSubmitButton={() => {}}
          onSignInClick={() => {}}
          isSubmitButtonDisable={isSubmitButtonDisable}
          validationErrors={validationErrors}
          isLoading={isLoading}
        />
    ).toJSON();

  expect(addReviewComponent).toMatchSnapshot();
});
