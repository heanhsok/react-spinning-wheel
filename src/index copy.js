import React from "react";
import ReactDOM from "react-dom";

import Wheel from "./components/wheel";

import "./styles.css";

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
