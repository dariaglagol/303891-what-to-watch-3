import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RatingStar from "./rating-star";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on star call callback`, () => {
  const starClickHandler = jest.fn();

  const starComponent = shallow(
      <RatingStar
        item={1}
        onChange={starClickHandler}
      />
  );

  const star = starComponent.find(`.rating__input`);
  star.simulate(`change`);

  expect(starClickHandler).toHaveBeenCalledTimes(1);
  expect(starClickHandler).toBeCalledWith(1);
});
