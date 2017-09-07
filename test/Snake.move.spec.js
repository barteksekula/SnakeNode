/* global describe, it, before */

import chai from 'chai';
import {Snake, Tile} from '../dist/SnakeGame.js';

chai.expect();

const expect = chai.expect;

let snake;
let head;

describe('When Snake moves to empty field', () => {
  before(() => {
    snake = new Snake(new Tile(10, 10), 5);
    head = snake.head;
    snake.move();
  });

  it('should retain the same size', () => {
    expect(snake.totalSize).to.equal(5);
  });

  it('should have a new head', () => {
    expect(snake.head).to.not.equal(head);
  });

  it('should contain its tail as part of body', () => {
    expect(snake.body).to.include(head);
  });
});
