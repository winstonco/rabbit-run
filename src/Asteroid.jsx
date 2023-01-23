import './css/asteroid.css';
import FlyingObject from './FlyingObject';

export default class Asteroid extends FlyingObject {
  constructor() {
    super();
    this.value = -1;
  }

  toElement(key = 0) {
    return (
      <div
        key={key}
        className="asteroid prevent-select"
        style={{ top: `${442 - this.top}px`, left: `${this.left}px` }}
      >
        🗿
      </div>
    );
  }
}
