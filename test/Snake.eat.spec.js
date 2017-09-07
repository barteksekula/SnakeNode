/* global describe, it, before */

import chai from 'chai';
import {Snake, Tile} from '../dist/SnakeGame.js';

chai.expect();

const expect = chai.expect;

let snake;
let head;

describe('When Snake eats', () => {
  before(() => {
    snake = new Snake(new Tile(10, 10), 5);
    head = snake.head;
    snake.eat();
  });

  it('should grow in size by 1', () => {
    expect(snake.totalSize).to.equal(6);
  });

  it('should include its former head in the body', () => {
    expect(snake.body).to.include(head);
  });
});
