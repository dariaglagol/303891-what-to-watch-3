import React, {PureComponent} from 'react';
import Tabs from "@components/movie-nav-tabs/movie-nav-tabs";
import {DEFAULT_ACTIVE_TAB} from "@utils/constants";

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: DEFAULT_ACTIVE_TAB,
      };

      this._tabClickHandler = this._tabClickHandler.bind(this);
    }

    _tabClickHandler(newActiveTab) {
      this.setState({
        activeTab: newActiveTab
      });
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        activeTab={activeTab}
        renderTabs={() => {
          return (
            <Tabs
              {...this.props}
              activeTab={activeTab}
              onTabClick={this._tabClickHandler}
            />
          );
        }}
      />;
    }
  }

  WithTabs.propTypes = {};

  return WithTabs;
};

export default withTabs;
