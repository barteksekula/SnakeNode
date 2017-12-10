import Direction from './Direction';
import Tile from './Tile';

export default class Snake {
  constructor(startPoint: Tile, initialLength: number, size: number = 1) {
    this._size = size;
    this._reset = () => {
      this._head = startPoint;
      this._body = [];
      this._direction = Direction.RIGHT;
      if (initialLength > 1) {
        for (let i = 1; i < initialLength; i++) {
          this._body.push(new Tile(startPoint.x - this._size * i, startPoint.y, this._size));
        }
      }
    };

    this.reset();
  }

  get direction(): Direction {
    return this._direction;
  }

  changeDirection(direction: Direction): void {
    if (this._direction === Direction.RIGHT && direction === Direction.LEFT ||
      this._direction === Direction.LEFT && direction === Direction.RIGHT ||
      this._direction === Direction.DOWN && direction === Direction.UP ||
      this._direction === Direction.UP && direction === Direction.DOWN) {
      return;
    }

    this._direction = direction;
  }

  get head(): Tile {
    return this._head;
  }

  get tail(): Tile {
    return this._body[this._body.length - 1];
  }

  get body(): Array<Tile> {
    return this._body;
  }

  get totalSize(): number {
    return this._body.length + 1;
  }

  getNextElement(): Tile {
    let nextElement;

    switch (this.direction) {
      case Direction.DOWN:
        nextElement = new Tile(this.head.x, this.head.y + this._size, this._size);
        break;
      case Direction.LEFT:
        nextElement = new Tile(this.head.x - this._size, this.head.y, this._size);
        break;
      case Direction.UP:
        nextElement = new Tile(this.head.x, this.head.y - this._size, this._size);
        break;
      case Direction.RIGHT:
        nextElement = new Tile(this.head.x + this._size, this.head.y, this._size);
        break;
    }

    return nextElement;
  }

  move(): void {
    this.eat();
    this._body.splice(-1, 1);
  }

  eat(): void {
    this._body.splice(0, 0, this.head);
    this._head = this.getNextElement();
  }

  tick(meal: Tile): Boolean {
    if (meal.equals(this.getNextElement())) {
      this.eat();
      return true;
    }

    this.move();
    return false;
  }

  get isEatingItself(): Boolean {
    return this._body.some((item) => {
      return item.equals(this.head);
    });
  }

  reset(): void {
    this._reset();
  }
}
