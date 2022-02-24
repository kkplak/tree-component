import React, { Component } from "react";
export default class App extends Component {

  state = {
    cart: [],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    let { cart, input } = this.state;
    cart.push(input);

  };

  handleRemoveItem = () => {
    const cart = this.state.cart;
    if (cart.length > 0) {
      const lastIndex = cart.length - 1;
      this.setState({ cart: cart.filter((cart, index) => index !== lastIndex) });
    }
  };
 

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.saveInput}
          />
        <button onClick={this.addNewItem}> Add Person </button>
        <button onClick={this.handleRemoveItem}>Remove</button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
}
