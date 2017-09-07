import Tile from './Tile';
import Snake from './Snake';

export default class Board {
  constructor(width, height) {
    this.width = width || 100;
    this.height = height || 100;
  }

  get center(): Tile {
    return new Tile(Math.floor(this.width / 2), Math.floor(this.height / 2));
  }

  isHittingTheWall(snake: Snake) {
    return snake.head.x === this.width ||
      snake.head.y === this.height ||
      snake.head.x === 0 ||
      snake.head.y === 0;
  }
}
