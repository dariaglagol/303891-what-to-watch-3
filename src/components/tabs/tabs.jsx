import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {TABS} from "@utils/constants";

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderTab() {
    const {
      activeTab,
      onTabClick
    } = this.props;

    return TABS.map((tab) => {
      return (
        <li
          className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``}`}
          key={tab}
          onClick={() => onTabClick(tab)}
        >
          <a href="#" className="movie-nav__link">{tab}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {this._renderTab()}
        </ul>
      </nav>
    );
  }
}

Tabs.propTypes = {};
