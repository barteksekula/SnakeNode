import Snake from './Snake';
import Board from './Board';
import Tile from './Tile';

export default class Game {
  constructor(width: number, height: number, size: number = 1) {
    this.board = new Board(width, height, size);
    this.snake = new Snake(this.board.center, 5, size);
    this._size = size;
    this._score = 0;
    this._speed = 1;
    this.generateNewMeal();
  }

  get score(): Number {
    return this._score;
  }

  get speed(): Number {
    return this._speed;
  }

  get isGameOver(): Boolean {
    return this.snake.isEatingItself || this.board.isHittingTheWall(this.snake);
  }

  reset() {
    this._score = 0;
    this._speed = 1;
    this.snake.reset();
    this.generateNewMeal();
  }

  tick() {
    if (this.snake.tick(this.meal)) {
      this.generateNewMeal();
      this._score++;
      if (this._score % 3 === 0) {
        this._speed++;
      }
    }
  }

  static _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateNewMeal() {
    let x = Game._getRandomInt(1, this.board.width / this.board.size - 1) * this.board.size;
    let y = Game._getRandomInt(1, this.board.height / this.board.size - 1) * this.board.size;

    this.meal = new Tile(x, y, this._size);
  }
}
