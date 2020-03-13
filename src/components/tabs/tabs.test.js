import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";

const ACTIVE_TAB_MOCK = `Overview`;

it(`Render tabs`, () => {
  const tabsComponent = renderer
    .create(
        <Tabs
          activeTab={ACTIVE_TAB_MOCK}
          onTabClick={()=> {}}
        />
    ).toJSON();

  expect(tabsComponent).toMatchSnapshot();
});
