import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, option) {
    super("form", parent, option);
  }

  addChildren(...children) {
    children.forEach((child) => {
      this.componentValue().appendChild(child.componentValue());
    });
  }
}
