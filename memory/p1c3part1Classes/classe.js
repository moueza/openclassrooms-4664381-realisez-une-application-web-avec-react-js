"use strict";

//const { default: src } = require("*.avif");

class Screen /*extends Component*/ {
  constructor(props) {
    //super(props)
    this.state = { loginState: "logged-out" };
  }

  renderVanilla = function () {
    console.log("in renderVanilla");
  }

  /**browser https://eslint.org/docs/rules/no-undef */
  /*renderVanilla2( function () {
    console.log("in renderVanilla2");
  });*/
  render() {
    console.log("in renderVanilla");
  }
}
var scr = new Screen();
scr.renderVanilla();
scr.render();
console.log("in term");
