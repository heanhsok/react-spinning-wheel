import React from "react";
import ReactDOM from "react-dom";

import Wheel from "./components/wheel";
import WheelComponent from "react-wheel-of-prizes";

import "./styles.css";

const segments = [
  "better luck next time",
  "won 70",
  "won 10",
  "better luck next time",
  "won 2",
  "won uber pass",
  "better luck next time",
  "won a voucher",
  "won 70",
  "won 10",
  "better luck next time",
  "won 2",
  "won uber pass",
  "better luck next time",
  "won a voucher",
];

const segColors = [
  "#EE4040",
  "#F0CF50",
  "#815CD1",
  "#3DA5E0",
  "#34A24F",
  "#F9AA1F",
  "#EC3F3F",
  "#FF9000",
  "#F0CF50",
  "#815CD1",
  "#3DA5E0",
  "#34A24F",
  "#F9AA1F",
  "#EC3F3F",
  "#FF9000",
];

export class App extends React.Component {
  constructor() {
    super();
    this.places = [
      "មួក Pulse",
      "សូមអរគុណ",
      "មួក Pulse",
      "ទឺកអាល់កុលលាងដៃ",
      "អាវយឺត Pulse",
      "សូមអរគុណ",
      "កាបូប",
      "សូមអរគុណ",
      "ម៉ាស់ Pulse",
    ];
  }

  // onFinished = (winner) => {
  //   console.log(winner);
  // };

  render() {
    return (
      <div className="App">
        <h1>Spin to win many awesome prizes?</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
