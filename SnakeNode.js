const keypress = require('keypress');
const readline = require('readline');
const process = require('process');
const cliCursor = require('cli-cursor');
const Snake = require('./dist/SnakeGame.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const game = new Snake.Game(rl.output.rows, 16);
const printer = new Snake.Printer(game);

cliCursor.hide();
keypress(rl.input);
rl.input.on('keypress', function (ch, key) {
  if (key.name === Snake.Direction.LEFT.toString()) {
    game.snake.changeDirection(Snake.Direction.LEFT);
  } else if (key.name === Snake.Direction.UP.toString()) {
    game.snake.changeDirection(Snake.Direction.UP);
  } else if (key.name === Snake.Direction.RIGHT.toString()) {
    game.snake.changeDirection(Snake.Direction.RIGHT);
  } else if (key.name === Snake.Direction.DOWN.toString()) {
    game.snake.changeDirection(Snake.Direction.DOWN);
  }
});

setInterval(() => {
  game.tick();
  rl.write('\u033c');
  readline.clearScreenDown(rl);
  readline.cursorTo(rl, 0, 0);
  rl.write(`Score = ${game.score}\n`);
  rl.write(printer.gameBoard);
  if (game.isGameOver) {
    readline.clearScreenDown(rl);
    game.reset();
    readline.cursorTo(rl, 0, 0);
  }
}, 100);
