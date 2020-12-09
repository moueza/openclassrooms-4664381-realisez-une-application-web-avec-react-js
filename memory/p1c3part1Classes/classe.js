"use strict";

//const { default: src } = require("*.avif");

class Screen /*extends Component*/ {
  constructor(props) {
    //super(props)
    this.state = { loginState: "logged-out" };
  }

  renderVanilla = function () {
    console.log("in renderVanilla");
  };
  render() {
    console.log("in renderVanilla");
  }
}
var scr = new Screen();
scr.renderVanilla();
scr.render();
console.log("in term");
