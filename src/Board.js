import Tile from './Tile';
import Snake from './Snake';

export default class Board {
  constructor(width = 100, height = 100, size = 1) {
    this.size = size;
    this.width = width;
    this.height = height;
  }

  get center(): Tile {
    return new Tile(Math.floor(this.width / 2), Math.floor(this.height / 2), this.size);
  }

  isHittingTheWall(snake: Snake) {
    return snake.head.x === this.width ||
      snake.head.y === this.height ||
      snake.head.x === 0 ||
      snake.head.y === 0;
  }
}
