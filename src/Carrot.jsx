import './css/carrot.css';
import FlyingObject from './FlyingObject.js';

export default class Carrot extends FlyingObject {
  constructor() {
    super();
    this.value = 1;
  }

  toElement(key = 0) {
    return (
      <div
        key={key}
        className="carrot prevent-select"
        style={{ top: `${442 - this.top}px`, left: `${this.left}px` }}
      >
        🥕
      </div>
    );
  }
}
