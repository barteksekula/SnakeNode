export default class Tile {
  constructor(x, y, size = 1) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  equals(tile: Tile) {
    return this.x === tile.x && this.y === tile.y;
  }
}
