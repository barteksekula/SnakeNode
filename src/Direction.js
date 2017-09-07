export default class Direction {
  constructor(direction) {
    this.direction = direction;
  }

  toString() {
    return this.direction.toString().toLowerCase();
  }
}

Direction.RIGHT = new Direction('RIGHT');
Direction.DOWN = new Direction('DOWN');
Direction.LEFT = new Direction('LEFT');
Direction.UP = new Direction('UP');
