import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {FilmData} from "./utils/mocks";
import FilmsMock from './mocks/films';

ReactDOM.render(
    <App
      filmData={FilmData}
      films={FilmsMock}
    />,
    document.querySelector(`#root`)
);
