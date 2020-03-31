import React from "react";
import renderer from "react-test-renderer";
import MovieNavTabs from "./movie-nav-tabs";

const activeTab = `Overview`;

it(`Render movie nav tabs`, () => {
  const tabsComponent = renderer
    .create(
        <MovieNavTabs
          activeTab={activeTab}
          onTabClick={()=> {}}
        />
    ).toJSON();

  expect(tabsComponent).toMatchSnapshot();
});
