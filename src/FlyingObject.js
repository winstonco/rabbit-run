export default class FlyingObject {
  top;
  left;
  value;

  constructor() {
    this.top = Math.random() * 425;
    this.left = Math.random() * 880 + 880;
  }

  moveLeft(move) {
    this.left -= move;
  }

  reset() {
    this.top = Math.random() * 425;
    this.left = Math.random() * 300 + 880;
  }

  print() {
    console.log(`At pos: {top: ${this.top}, left: ${this.left}}`);
  }
}
