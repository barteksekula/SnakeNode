/* global describe, it, before */

import chai from 'chai';
import {Snake, Tile} from '../dist/SnakeGame.js';

chai.expect();

const expect = chai.expect;

let snake;

describe('When I initialize a snake without specifying the size', () => {
  before(() => {
    snake = new Snake(new Tile(10, 10));
  });
  it('should only have a head', () => {
    expect(snake.head).to.be.not.null;
  });
  it('should only have an empty body', () => {
    expect(snake.body).to.be.empty;
  });
});

describe('When I initialize a snake with an initial size', () => {
  before(() => {
    snake = new Snake(new Tile(10, 10), 5);
  });
  it('should have a head set to (10,10)', () => {
    expect(snake.head).to.deep.equal(new Tile(10, 10));
  });
  it('should have body of 4 tiles long', () => {
    expect(snake.body).to.be.an('array').to.have.lengthOf(4);
  });
  it('should have the size of 5', () => {
    expect(snake.totalSize).to.equal(5);
  });
});
