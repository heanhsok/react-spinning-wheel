import React from "react";

import "./index.css";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    console.log(this.state.selectedItem);
    if (this.state.selectedItem === null) {
      // const selectedItem = Math.floor(Math.random() * this.props.items.length);
      const selectedItem = 3;
      console.log("Props" + this.props.onSelectItem);
      if (this.props.onSelectItem) {
        console.log("iffff");
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
      console.log("selected: " + selectedItem);
      console.log("finished");
      setTimeout(() => {
        console.log("completed");
        console.log(`You have won ${this.state.selectedItem}`);
        // this.setState({ selectedItem: null });
      }, 4000);
    }
    // else {
    //   console.log("Props" + this.props.onSelectItem);
    //   this.setState({ selectedItem: null });
    //   setTimeout(this.selectItem, 30000);
    //   console.log("why");
    // }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    return (
      <div>
        <div className="wheel-container">
          <div
            className={`wheel ${spinning}`}
            style={wheelVars}
            onClick={this.selectItem}
          >
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ "--item-nb": index }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: -50,
          }}
        >
          <div
            style={{
              backgroundColor: "#000",
              height: 120,
              width: 150,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          ></div>
        </div>
        <div style={{ marginTop: 30 }}>
          <button
            onClick={() => {
              console.log("hello");
              this.setState({ selectedItem: null });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
