import Snake from './Snake';
import Board from './Board';
import Tile from './Tile';

export default class Game {
  constructor(width: number, height: number) {
    this.board = new Board(width, height);
    this.snake = new Snake(this.board.center, 5);
    this._score = 0;
    this.generateNewMeal();
  }

  get score(): Number {
    return this._score;
  }

  get isGameOver(): Boolean {
    return this.snake.isEatingItself || this.board.isHittingTheWall(this.snake);
  }

  reset() {
    this._score = 0;
    this.snake.reset();
    this.generateNewMeal();
  }

  tick() {
    if (this.snake.tick(this.meal)) {
      this.generateNewMeal();
      this._score++;
    }
  }

  static _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateNewMeal() {
    let x = Game._getRandomInt(1, this.board.width - 1);
    let y = Game._getRandomInt(1, this.board.height - 1);

    this.meal = new Tile(x, y);
  }
}
