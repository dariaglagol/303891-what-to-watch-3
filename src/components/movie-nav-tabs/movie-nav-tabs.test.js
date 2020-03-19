import React from "react";
import renderer from "react-test-renderer";
import MovieNavTabs from "./movie-nav-tabs";

const ACTIVE_TAB_MOCK = `Overview`;

it(`Render movie nav tabs`, () => {
  const tabsComponent = renderer
    .create(
        <MovieNavTabs
          activeTab={ACTIVE_TAB_MOCK}
          onTabClick={()=> {}}
        />
    ).toJSON();

  expect(tabsComponent).toMatchSnapshot();
});
