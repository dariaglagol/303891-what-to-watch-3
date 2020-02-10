import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {FilmData, CATALOG_FILMS_NAMES_LIST} from "./utils/mocks";

ReactDOM.render(
    <App
      filmData={FilmData}
      catalogFilmsNamesList={CATALOG_FILMS_NAMES_LIST}
    />,
    document.querySelector(`#root`)
);
