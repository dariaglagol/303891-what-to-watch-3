import React from "react";
import Enzyme, {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import AddReview from "./add-review";

Enzyme.configure({
  adapter: new Adapter(),
});

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
      id: `2`,
    }
  },
  text: `text`,
};

const mockSubmitEvent = {
  preventDefault() {}
};

const starCount = 2;

it(`Submit handler call onSubmit callback`, () => {
  const {
    userData,
    authStatus,
    movieDetails,
    reviewError,
    isSubmitButtonDisable,
    validationErrors,
    isLoading,
    match,
    films,
    text
  } = mock;

  const starsClickHandler = jest.fn();
  const textChangeHandler = jest.fn();
  const submitHandler = jest.fn((arg) => [...arg]);
  const toggleSubmitButton = jest.fn();
  const signInClickHandler = jest.fn();

  const addReviewComponent = mount(
      <MemoryRouter>
        <AddReview
          films={films}
          text={text}
          userData={userData}
          authStatus={authStatus}
          movieDetails={movieDetails}
          reviewError={reviewError}
          onStarsChange={starsClickHandler}
          onTextChange={textChangeHandler}
          onSubmit={submitHandler}
          toggleSubmitButton={toggleSubmitButton}
          onSignInClick={signInClickHandler}
          isSubmitButtonDisable={isSubmitButtonDisable}
          validationErrors={validationErrors}
          isLoading={isLoading}
          match={match}
        />
      </MemoryRouter>
  );

  const submitButton = addReviewComponent.find(`.add-review__form`);
  const textArea = addReviewComponent.find(`.add-review__textarea`);

  textArea.instance().value = `sometext`;
  textArea.simulate(`change`);
  submitButton.simulate(`submit`, mockSubmitEvent);

  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toBeCalledWith(match.params.id);
});

it(`Click on stars call callback`, () => {
  const {
    userData,
    authStatus,
    movieDetails,
    reviewError,
    isSubmitButtonDisable,
    validationErrors,
    isLoading,
    match,
    films,
    text
  } = mock;

  const starsClickHandler = jest.fn();
  const textChangeHandler = jest.fn();
  const submitHandler = jest.fn((arg) => [...arg]);
  const toggleSubmitButton = jest.fn();
  const signInClickHandler = jest.fn();

  const addReviewComponent = mount(
      <MemoryRouter>
        <AddReview
          films={films}
          text={text}
          userData={userData}
          authStatus={authStatus}
          movieDetails={movieDetails}
          reviewError={reviewError}
          onStarsChange={starsClickHandler}
          onTextChange={textChangeHandler}
          onSubmit={submitHandler}
          toggleSubmitButton={toggleSubmitButton}
          onSignInClick={signInClickHandler}
          isSubmitButtonDisable={isSubmitButtonDisable}
          validationErrors={validationErrors}
          isLoading={isLoading}
          match={match}
        />
      </MemoryRouter>
  );

  const star = addReviewComponent.find(`.rating__input`).at(3);
  star.simulate(`change`);

  expect(starsClickHandler).toHaveBeenCalledTimes(1);
  expect(starsClickHandler).toBeCalledWith(starCount);
});

