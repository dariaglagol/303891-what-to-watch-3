import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const MockFilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  RELEASE_DATE: `2020`
};

const MOCK_CATALOG_FILMS_NAMES_LIST = [
  `Midnight Special`,
  `Mindhunter`,
  `Orlando`,
  `Dardjeeling Limited`,
  `War of the Worlds`,
  `Midnight Special`,
  `Seven Years in Tibet`,
  `Moonrise Kingdom`,
  `Snatch`,
  `No Country for Old Men`,
  `Pulp Fiction`,
  `Shutter Island`,
  `Johnny English`,
  `Revenant`,
  `What We Do in the Shadows`,
  `We need to talk about Kevin`,
  `Aviator`,
  `Macbeth`,
  `Bohemian Rhapsody`,
  `Fantastic Beasts: The Crimes of Grindelwald`,
];

it(`Main component render`, () => {
  const mainComponent = renderer
    .create(
        <Main
          filmData={MockFilmData}
          catalogFilmsNamesList={MOCK_CATALOG_FILMS_NAMES_LIST}
          onTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(mainComponent).toMatchSnapshot();
});
