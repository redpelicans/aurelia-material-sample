'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.makeNode = makeNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function makeNode(obj) {
  if (!obj) return;
  switch (obj.type) {
    case 'transac':
      return new Transac(obj);
    case 'event':
      return new Event(obj);
    case 'message':
      return new Message(obj);
  }
}

var Node = (function () {
  function Node() {
    var _ref2 = arguments[0] === undefined ? {} : arguments[0];

    var id = _ref2.id;
    var label = _ref2.label;
    var transacId = _ref2.transacId;
    var parentId = _ref2.parentId;
    var type = _ref2.type;
    var createdAt = _ref2.createdAt;

    _classCallCheck(this, Node);

    this.id = id;
    this.createdAt = (0, _moment2['default'])(createdAt);
    this.transacId = transacId;
    if (parentId) this.parentId = parentId;
    this.type = type;
    this.label = label;
    this.status = 'ok';
  }

  _createClass(Node, [{
    key: 'isTransac',
    value: function isTransac() {
      return this.type === 'transac';
    }
  }, {
    key: 'isEvent',
    value: function isEvent() {
      return this.type === 'event';
    }
  }, {
    key: 'isMessage',
    value: function isMessage() {
      return this.type === 'message';
    }
  }, {
    key: 'addChild',
    value: function addChild(node) {
      if (!this._children) this._children = [];
      this._children.push(node);
      node.parent = this;
      this.updateStates(node);
      return this;
    }
  }, {
    key: 'isLeaf',
    value: function isLeaf() {
      return !this.length;
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      var _ref;

      var done = {},
          node = undefined,
          remainingNodes = [this];
      function iterate(_x5) {
        var _again2 = true;

        _function2: while (_again2) {
          var nodes = _x5;
          child = undefined;
          _again2 = false;

          var child = nodes[0];
          if (!child) return [null, []];
          if (child.isLeaf() || done[child.id]) return [child, nodes.slice(1)];
          nodes.splice.apply(nodes, [0, 0].concat(_toConsumableArray(child.children)));
          done[child.id] = true;
          _x5 = nodes;
          _again2 = true;
          continue _function2;
        }
      }

      return (_ref = {}, _defineProperty(_ref, Symbol.iterator, function () {
        return this;
      }), _defineProperty(_ref, 'next', function next() {
        var _iterate = iterate(remainingNodes);

        var _iterate2 = _slicedToArray(_iterate, 2);

        node = _iterate2[0];
        remainingNodes = _iterate2[1];

        if (node) return { value: node };else return { done: true };
      }), _ref);
    }
  }, {
    key: 'children',
    get: function get() {
      return this._children || [];
    }
  }, {
    key: 'length',
    get: function get() {
      return this.children.length;
    }
  }, {
    key: 'lastChild',
    get: function get() {
      return this.children && this.children[this.length - 1];
    }
  }, {
    key: 'lastMessage',
    get: function get() {
      // BUG with Babel
      //let nodes = _.filter([...this], node => node.isMessage());
      var nodes = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var node = _step.value;
          if (node.isMessage()) nodes.push(node);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return nodes[nodes.length - 1];
    }
  }, {
    key: 'lastMessageTime',
    get: function get() {
      var lastMessage = this.lastMessage;
      return lastMessage && lastMessage.createdAt;
    }
  }, {
    key: 'transac',
    get: function get() {
      if (!this.parent) return this;
      return this.parent.transac;
    }
  }]);

  return Node;
})();

var Transac = (function (_Node) {
  function Transac(options) {
    _classCallCheck(this, Transac);

    _get(Object.getPrototypeOf(Transac.prototype), 'constructor', this).call(this, options);
    if (options.valueDate) this.valueDate = (0, _moment2['default'])(options.valueDate, 'DD/MM/YYYY');
    _lodash2['default'].extend(this, _lodash2['default'].pick(options, 'server', 'user', 'processId'));
    this.isRunning = true;
    this.status = 'ok';
    this.isLocked = options.locked;
    this.isCompound = options.compound;
  }

  _inherits(Transac, _Node);

  _createDecoratedClass(Transac, [{
    key: 'updateStates',
    value: function updateStates(node) {
      if (node.isMessage()) {
        if (node.level === 'commit' || node.level === 'abort') this.isRunning = false;
        this.delay = node.createdAt - this.createdAt;
        if (node.status === 'error') this.status = 'error';else if (this.status != 'error' && node.level === 'warning') this.status = 'warning';
      }
      if (this.parent) this.parent.updateStates(node);
    }
  }, {
    key: 'statusIcon',
    decorators: [(0, _aureliaFramework.computedFrom)('status')],
    get: function get() {
      switch (this.status) {
        case 'ok':
          return 'glyphicon glyphicon-chevron-down green-icon';
        case 'warning':
          return 'glyphicon glyphicon-warning-sign orange-icon';
        case 'error':
          return 'glyphicon glyphicon-minus-sign red-icon';
      }
    }
  }, {
    key: 'runningIcon',
    decorators: [(0, _aureliaFramework.computedFrom)('isRunning')],
    get: function get() {
      return this.isRunning ? 'glyphicon glyphicon-time green-icon' : 'glyphicon glyphicon-remove green-icon';
    }
  }, {
    key: 'compoundIcon',
    decorators: [(0, _aureliaFramework.computedFrom)('isCompound')],
    get: function get() {
      if (this.isCompound) return 'glyphicon glyphicon-th-large blue-icon';
    }
  }, {
    key: 'lockIcon',
    decorators: [(0, _aureliaFramework.computedFrom)('isLocked')],
    get: function get() {
      if (this.isLocked) return 'glyphicon glyphicon-lock gray-icon';
    }
  }]);

  return Transac;
})(Node);

exports.Transac = Transac;

var Event = (function (_Node2) {
  function Event(options) {
    _classCallCheck(this, Event);

    _get(Object.getPrototypeOf(Event.prototype), 'constructor', this).call(this, options);
  }

  _inherits(Event, _Node2);

  _createClass(Event, [{
    key: 'updateStates',
    value: function updateStates(node) {
      if (node.isMessage()) {
        if (node.status === 'error') this.status = 'error';else if (this.status != 'error' && node.level === 'warning') this.status = 'warning';
      }
      if (this.parent) this.parent.updateStates(node);
    }
  }]);

  return Event;
})(Node);

exports.Event = Event;

var Message = (function (_Node3) {
  function Message(options) {
    _classCallCheck(this, Message);

    _get(Object.getPrototypeOf(Message.prototype), 'constructor', this).call(this, options);
    this.level = options.level;
    if (this.level === 'abort' || this.level === 'error') this.status = 'error';else this.status = this.level;
  }

  _inherits(Message, _Node3);

  return Message;
})(Node);

exports.Message = Message;
//# sourceMappingURL=../transacs/index.js.map