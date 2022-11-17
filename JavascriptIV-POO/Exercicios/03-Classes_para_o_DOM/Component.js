export class Component {
  #element = null;
  constructor(tag, parent, options) {
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }

  componentValue() {
    return this.#element;
  }

  build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.options);
    return this;
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.componentValue().append(this.#element);
    } else {
      document.querySelector(this.parent).append(this.#element);
    }
  }
}

class Input extends Component {}
class Label extends Component {
  constructor(content, reference) {
    super(reference);
    this.content = content;
  }
}
class Form extends Component {}
