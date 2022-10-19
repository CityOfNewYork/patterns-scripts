'use strict';

class SetHeightProperties {
  constructor (s) {
    this.elements = (s.elements) ? s.elements : SetHeightProperties.elements;

    for (let i = 0; i < this.elements.length; i++) {
      if (document.querySelector(this.elements[i]['selector'])) {
        window.addEventListener('load', () => this.setProperty(this.elements[i]));
        window.addEventListener('resize', () => this.setProperty(this.elements[i]));
      } else {
        document.documentElement.style.setProperty(this.elements[i]['property'], '0px');
      }
    }
  }

  setProperty(e) {
    let element = document.querySelector(e['selector']);

    document.documentElement.style.setProperty(e['property'], `${element.clientHeight}px`);
  }
}

SetHeightProperties.elements = [];

export default SetHeightProperties;
