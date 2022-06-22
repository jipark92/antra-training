import React, { Component } from "react";
import { withCounter } from "../../hoc/withCounter";
import BuyStockNumber from "./BuyStockNumber";

class BuyStockClass extends Component {
    render() {
        return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>
            Context BuyStockClass{" "}
            <BuyStockNumber stockNumber={this.props.counter} />
            </h1>
            <p>{this.props.counter}</p>
            <button onClick={this.props.handleSub}>-</button>
            <button onClick={this.props.handleAdd}>+</button>
        </div>
        );
    }
}

const BuyStockContainer = withCounter(BuyStockClass);

export default BuyStockContainer;
