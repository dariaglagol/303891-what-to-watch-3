import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./calalog-card";

const MOCKED_NAME = `What We Do in the Shadows`;

it(`Render catalog card`, () => {
  const catalogCardComponent = renderer
    .create(
        <CatalogCard
          name={MOCKED_NAME}
        />
    )
    .toJSON();

  expect(catalogCardComponent).toMatchSnapshot();
});
