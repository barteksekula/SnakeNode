/* global describe, it, before */

import chai from 'chai';
import {Snake, Tile, Direction} from '../dist/SnakeGame.js';

chai.expect();

const expect = chai.expect;

let snake;

describe('When Snake does not hit itself', () => {
  before(() => {
    snake = new Snake(new Tile(10, 10), 5);
    snake.changeDirection(Direction.DOWN);
    snake.move();
    snake.move();
    snake.move();
  });

  it('should return false', () => {
    expect(snake.isEatingItself).to.be.false;
  });
});

describe('When Snake hits itself', () => {
  before(() => {
    snake = new Snake(new Tile(10, 10), 5);
    snake.changeDirection(Direction.DOWN);
    snake.move();
    snake.changeDirection(Direction.LEFT);
    snake.move();
    snake.changeDirection(Direction.UP);
    snake.move();
  });

  it('should return true', () => {
    expect(snake.isEatingItself).to.be.true
  });
});
