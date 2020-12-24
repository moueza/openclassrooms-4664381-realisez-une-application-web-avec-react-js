import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js/4664871-mettez-en-place-un-etat-local*/
const HIDDEN_SYMBOL = "?";

const Card = ({ card, feedback }) => (
  <div className={`card ${feedback}`}>
    <span className="symbol">
      {feedback === "hidden" ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

ReactDOM.render(<Card />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
