(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SnakeGame", [], factory);
	else if(typeof exports === 'object')
		exports["SnakeGame"] = factory();
	else
		root["SnakeGame"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function () {
  function Tile(x, y) {
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Tile);

    this.x = x;
    this.y = y;
    this.size = size;
  }

  _createClass(Tile, [{
    key: "equals",
    value: function equals(tile) {
      return this.x === tile.x && this.y === tile.y;
    }
  }]);

  return Tile;
}();

exports.default = Tile;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Direction = __webpack_require__(2);

var _Direction2 = _interopRequireDefault(_Direction);

var _Tile = __webpack_require__(0);

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = function () {
  function Snake(startPoint, initialLength) {
    var _this = this;

    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Snake);

    this._size = size;
    this._reset = function () {
      _this._head = startPoint;
      _this._body = [];
      _this._direction = _Direction2.default.RIGHT;
      if (initialLength > 1) {
        for (var i = 1; i < initialLength; i++) {
          _this._body.push(new _Tile2.default(startPoint.x - _this._size * i, startPoint.y, _this._size));
        }
      }
    };

    this.reset();
  }

  _createClass(Snake, [{
    key: 'changeDirection',
    value: function changeDirection(direction) {
      if (this._direction === _Direction2.default.RIGHT && direction === _Direction2.default.LEFT || this._direction === _Direction2.default.LEFT && direction === _Direction2.default.RIGHT || this._direction === _Direction2.default.DOWN && direction === _Direction2.default.UP || this._direction === _Direction2.default.UP && direction === _Direction2.default.DOWN) {
        return;
      }

      this._direction = direction;
    }
  }, {
    key: 'getNextElement',
    value: function getNextElement() {
      var nextElement = void 0;

      switch (this.direction) {
        case _Direction2.default.DOWN:
          nextElement = new _Tile2.default(this.head.x, this.head.y + this._size, this._size);
          break;
        case _Direction2.default.LEFT:
          nextElement = new _Tile2.default(this.head.x - this._size, this.head.y, this._size);
          break;
        case _Direction2.default.UP:
          nextElement = new _Tile2.default(this.head.x, this.head.y - this._size, this._size);
          break;
        case _Direction2.default.RIGHT:
          nextElement = new _Tile2.default(this.head.x + this._size, this.head.y, this._size);
          break;
      }

      return nextElement;
    }
  }, {
    key: 'move',
    value: function move() {
      this.eat();
      this._body.splice(-1, 1);
    }
  }, {
    key: 'eat',
    value: function eat() {
      this._body.splice(0, 0, this.head);
      this._head = this.getNextElement();
    }
  }, {
    key: 'tick',
    value: function tick(meal) {
      if (meal.equals(this.getNextElement())) {
        this.eat();
        return true;
      }

      this.move();
      return false;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._reset();
    }
  }, {
    key: 'direction',
    get: function get() {
      return this._direction;
    }
  }, {
    key: 'head',
    get: function get() {
      return this._head;
    }
  }, {
    key: 'tail',
    get: function get() {
      return this._body[this._body.length - 1];
    }
  }, {
    key: 'body',
    get: function get() {
      return this._body;
    }
  }, {
    key: 'totalSize',
    get: function get() {
      return this._body.length + 1;
    }
  }, {
    key: 'isEatingItself',
    get: function get() {
      var _this2 = this;

      return this._body.some(function (item) {
        return item.equals(_this2.head);
      });
    }
  }]);

  return Snake;
}();

exports.default = Snake;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Direction = function () {
  function Direction(direction) {
    _classCallCheck(this, Direction);

    this.direction = direction;
  }

  _createClass(Direction, [{
    key: 'toString',
    value: function toString() {
      return this.direction.toString().toLowerCase();
    }
  }]);

  return Direction;
}();

exports.default = Direction;


Direction.RIGHT = new Direction('RIGHT');
Direction.DOWN = new Direction('DOWN');
Direction.LEFT = new Direction('LEFT');
Direction.UP = new Direction('UP');
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tile = __webpack_require__(0);

var _Tile2 = _interopRequireDefault(_Tile);

var _Snake = __webpack_require__(1);

var _Snake2 = _interopRequireDefault(_Snake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
  function Board() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Board);

    this.size = size;
    this.width = width;
    this.height = height;
  }

  _createClass(Board, [{
    key: 'isHittingTheWall',
    value: function isHittingTheWall(snake) {
      return snake.head.x === this.width || snake.head.y === this.height || snake.head.x === 0 || snake.head.y === 0;
    }
  }, {
    key: 'center',
    get: function get() {
      return new _Tile2.default(Math.floor(this.width / 2), Math.floor(this.height / 2), this.size);
    }
  }]);

  return Board;
}();

exports.default = Board;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Snake = __webpack_require__(1);

var _Snake2 = _interopRequireDefault(_Snake);

var _Board = __webpack_require__(3);

var _Board2 = _interopRequireDefault(_Board);

var _Tile = __webpack_require__(0);

var _Tile2 = _interopRequireDefault(_Tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(width, height) {
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Game);

    this.board = new _Board2.default(width, height, size);
    this.snake = new _Snake2.default(this.board.center, 5, size);
    this._size = size;
    this._score = 0;
    this._speed = 1;
    this.generateNewMeal();
  }

  _createClass(Game, [{
    key: 'reset',
    value: function reset() {
      this._score = 0;
      this._speed = 1;
      this.snake.reset();
      this.generateNewMeal();
    }
  }, {
    key: 'tick',
    value: function tick() {
      if (this.snake.tick(this.meal)) {
        this.generateNewMeal();
        this._score++;
        if (this._score % 3 === 0) {
          this._speed++;
        }
      }
    }
  }, {
    key: 'generateNewMeal',
    value: function generateNewMeal() {
      var x = Game._getRandomInt(1, this.board.width / this.board.size - 1) * this.board.size;
      var y = Game._getRandomInt(1, this.board.height / this.board.size - 1) * this.board.size;

      this.meal = new _Tile2.default(x, y, this._size);
    }
  }, {
    key: 'score',
    get: function get() {
      return this._score;
    }
  }, {
    key: 'speed',
    get: function get() {
      return this._speed;
    }
  }, {
    key: 'isGameOver',
    get: function get() {
      return this.snake.isEatingItself || this.board.isHittingTheWall(this.snake);
    }
  }], [{
    key: '_getRandomInt',
    value: function _getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }]);

  return Game;
}();

exports.default = Game;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Printer = exports.Game = exports.Direction = exports.Board = exports.Tile = exports.Snake = undefined;

var _Snake = __webpack_require__(1);

var _Snake2 = _interopRequireDefault(_Snake);

var _Tile = __webpack_require__(0);

var _Tile2 = _interopRequireDefault(_Tile);

var _Board = __webpack_require__(3);

var _Board2 = _interopRequireDefault(_Board);

var _Direction = __webpack_require__(2);

var _Direction2 = _interopRequireDefault(_Direction);

var _Game = __webpack_require__(4);

var _Game2 = _interopRequireDefault(_Game);

var _Printer = __webpack_require__(6);

var _Printer2 = _interopRequireDefault(_Printer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Snake = _Snake2.default;
exports.Tile = _Tile2.default;
exports.Board = _Board2.default;
exports.Direction = _Direction2.default;
exports.Game = _Game2.default;
exports.Printer = _Printer2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game = __webpack_require__(4);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Printer = function () {
  function Printer(game) {
    _classCallCheck(this, Printer);

    this.game = game;
  }

  _createClass(Printer, [{
    key: 'gameBoard',
    get: function get() {
      var _this = this;

      var board = '';

      var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
          if (i === 0 && j === 0) {
            board += '\u250C';
          } else if (i === 0 && j === _this.game.board.width) {
            board += '\u2510';
          } else if (i === _this.game.board.height && j === 0) {
            board += '\u2514';
          } else if (i === _this.game.board.height && j === _this.game.board.width) {
            board += '\u2518';
          } else if ((i === 0 || i === _this.game.board.height) && j < _this.game.board.width) {
            board += '\u2500';
          } else if (j === 0 || j === _this.game.board.width) {
            board += '\u2502';
          } else {
            var isPartOfSnakeBody = _this.game.snake.body.some(function (tile) {
              return tile.y === i && tile.x === j;
            });
            var isMeal = _this.game.meal.y === i && _this.game.meal.x === j;

            if (isPartOfSnakeBody) {
              board += '\u2022';
            } else if (isMeal) {
              board += '*';
            } else {
              board += ' ';
            }
          }
        };

        for (var j = 0; j <= _this.game.board.width; j++) {
          _loop2(j);
        }

        board += '\n';
      };

      for (var i = 0; i <= this.game.board.height; i++) {
        _loop(i);
      }

      return board;
    }
  }]);

  return Printer;
}();

exports.default = Printer;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=SnakeGame.js.map