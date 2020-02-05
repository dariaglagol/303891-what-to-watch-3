import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {FilmData} from "./utils/mocks";

ReactDOM.render(
    <App
      filmData={FilmData}
    />,
    document.querySelector(`#root`)
);
