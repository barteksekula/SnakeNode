import Game from './Game';

export default class Printer {

  constructor(game: Game) {
    this.game = game;
  }

  get gameBoard(): String {
    let board = '';

    for (let i = 0; i <= this.game.board.height; i++) {
      for (let j = 0; j <= this.game.board.width; j++) {
        if (i === 0 && j === 0) {
          board += '\u250C';
        } else if (i === 0 && j === this.game.board.width) {
          board += '\u2510';
        } else if (i === this.game.board.height && j === 0) {
          board += '\u2514';
        } else if (i === this.game.board.height && j === this.game.board.width) {
          board += '\u2518';
        } else if ((i === 0 || i === this.game.board.height) && j < this.game.board.width) {
          board += '\u2500';
        } else if (j === 0 || j === this.game.board.width) {
          board += '\u2502';
        } else {
          let isPartOfSnakeBody = this.game.snake.body.some((tile) => {
            return tile.y === i && tile.x === j;
          });
          let isMeal = this.game.meal.y === i && this.game.meal.x === j;

          if (isPartOfSnakeBody) {
            board += '\u2022';
          } else if (isMeal) {
            board += '*';
          } else {
            board += ' ';
          }
        }
      }

      board += '\n';
    }

    return board;
  }
}
