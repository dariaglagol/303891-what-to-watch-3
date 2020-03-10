import React, {PureComponent} from 'react';
import Tabs from "@components/tabs/tabs";
import {DEFAULT_ACTIVE_TAB} from "@utils/constants";

const withMovieExtended = (Component) => {
  class WithMovieExtended extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: DEFAULT_ACTIVE_TAB,
      };
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        renderTabs={() => {
          return (
            <Tabs
              activeTab={activeTab}
            />
          );
        }}
      />;
    }
  }

  WithMovieExtended.propTypes = {};

  return WithMovieExtended;
};

export default withMovieExtended;
