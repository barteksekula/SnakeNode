export default class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(tile: Tile) {
    return this.x === tile.x && this.y === tile.y;
  }
}
