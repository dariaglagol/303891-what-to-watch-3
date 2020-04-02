import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReview from "./add-review";

Enzyme.configure({
  adapter: new Adapter(),
});

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
  stars: 1,
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
    stars,
  } = mock;

  const starsClickHandler = jest.fn();
  const submitHandler = jest.fn((arg) => [...arg]);
  const toggleSubmitButton = jest.fn();
  const signInClickHandler = jest.fn();

  const addReviewComponent = mount(
      <AddReview
        userData={userData}
        authStatus={authStatus}
        movieDetails={movieDetails}
        reviewError={reviewError}
        onStarsChange={starsClickHandler}
        onSubmit={submitHandler}
        toggleSubmitButton={toggleSubmitButton}
        onSignInClick={signInClickHandler}
        isSubmitButtonDisable={isSubmitButtonDisable}
        stars={stars}
      />
  );

  const submitButton = addReviewComponent.find(`.add-review__form`);
  const textArea = addReviewComponent.find(`.add-review__textarea`);

  textArea.instance().value = `sometext`;
  textArea.simulate(`change`);
  submitButton.simulate(`submit`, mockSubmitEvent);

  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toBeCalledWith(`sometext`);
});

it(`Click on stars call callback`, () => {
  const {
    userData,
    authStatus,
    movieDetails,
    reviewError,
    isSubmitButtonDisable,
    stars,
  } = mock;

  const starsClickHandler = jest.fn();
  const submitHandler = jest.fn((arg) => [...arg]);
  const toggleSubmitButton = jest.fn();
  const signInClickHandler = jest.fn();

  const addReviewComponent = mount(
      <AddReview
        userData={userData}
        authStatus={authStatus}
        movieDetails={movieDetails}
        reviewError={reviewError}
        onStarsChange={starsClickHandler}
        onSubmit={submitHandler}
        toggleSubmitButton={toggleSubmitButton}
        onSignInClick={signInClickHandler}
        isSubmitButtonDisable={isSubmitButtonDisable}
        stars={stars}
      />
  );

  const star = addReviewComponent.find(`.rating__input`).at(1);
  star.simulate(`change`);

  expect(starsClickHandler).toHaveBeenCalledTimes(1);
  expect(starsClickHandler).toBeCalledWith(starCount);
});

