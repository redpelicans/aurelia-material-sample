System.register(['aurelia-framework', 'lodash', 'moment'], function (_export) {
  'use strict';

  var computedFrom, _, moment, Node, Transac, Event, Message;

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  _export('makeNode', makeNode);

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }, function (_lodash) {
      _ = _lodash['default'];
    }, function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      Node = (function () {
        function Node() {
          var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

          var id = _ref2.id;
          var label = _ref2.label;
          var transacId = _ref2.transacId;
          var parentId = _ref2.parentId;
          var type = _ref2.type;
          var createdAt = _ref2.createdAt;

          _classCallCheck(this, Node);

          this.id = id;
          this.createdAt = moment(createdAt);
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

      Transac = (function (_Node) {
        _inherits(Transac, _Node);

        function Transac(options) {
          _classCallCheck(this, Transac);

          _get(Object.getPrototypeOf(Transac.prototype), 'constructor', this).call(this, options);
          if (options.valueDate) this.valueDate = moment(options.valueDate, 'DD/MM/YYYY');
          _.extend(this, _.pick(options, 'server', 'user', 'processId'));
          this.isRunning = true;
          this.status = 'ok';
          this.isLocked = options.locked;
          this.isCompound = options.compound;
        }

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
          decorators: [computedFrom('status')],
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
          decorators: [computedFrom('isRunning')],
          get: function get() {
            return this.isRunning ? 'glyphicon glyphicon-time green-icon' : 'glyphicon glyphicon-remove green-icon';
          }
        }, {
          key: 'compoundIcon',
          decorators: [computedFrom('isCompound')],
          get: function get() {
            if (this.isCompound) return 'glyphicon glyphicon-th-large blue-icon';
          }
        }, {
          key: 'lockIcon',
          decorators: [computedFrom('isLocked')],
          get: function get() {
            if (this.isLocked) return 'glyphicon glyphicon-lock gray-icon';
          }
        }]);

        return Transac;
      })(Node);

      _export('Transac', Transac);

      Event = (function (_Node2) {
        _inherits(Event, _Node2);

        function Event(options) {
          _classCallCheck(this, Event);

          _get(Object.getPrototypeOf(Event.prototype), 'constructor', this).call(this, options);
        }

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

      _export('Event', Event);

      Message = (function (_Node3) {
        _inherits(Message, _Node3);

        function Message(options) {
          _classCallCheck(this, Message);

          _get(Object.getPrototypeOf(Message.prototype), 'constructor', this).call(this, options);
          this.level = options.level;
          if (this.level === 'abort' || this.level === 'error') this.status = 'error';else this.status = this.level;
        }

        return Message;
      })(Node);

      _export('Message', Message);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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RUFBRTtTQUNoQjs7cUJBSFUsS0FBSzs7aUJBS0osc0JBQUMsSUFBSSxFQUFDO0FBQ2hCLGdCQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQztBQUNsQixrQkFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFJLE9BQU8sQ0FBQyxLQUM5QyxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUksU0FBUyxDQUFDO2FBQ3RGO0FBQ0QsZ0JBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUNoRDs7O2VBWFUsS0FBSztTQUFTLElBQUk7O3VCQUFsQixLQUFLOztBQWNMLGFBQU87a0JBQVAsT0FBTzs7QUFDUCxpQkFEQSxPQUFPLENBQ04sT0FBTyxFQUFDO2dDQURULE9BQU87O0FBRWhCLHFDQUZTLE9BQU8sNkNBRVYsT0FBTyxFQUFFO0FBQ2YsY0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzNCLGNBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBSSxPQUFPLENBQUMsS0FDdkUsSUFBSSxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2hDOztlQU5VLE9BQU87U0FBUyxJQUFJOzt5QkFBcEIsT0FBTyIsImZpbGUiOiJ0cmFuc2Fjcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU5vZGUob2JqKXtcbiAgaWYoIW9iailyZXR1cm47XG4gIHN3aXRjaChvYmoudHlwZSl7XG4gICAgY2FzZSAndHJhbnNhYyc6XG4gICAgICByZXR1cm4gbmV3IFRyYW5zYWMob2JqKTtcbiAgICBjYXNlICdldmVudCc6XG4gICAgICByZXR1cm4gbmV3IEV2ZW50KG9iaik7XG4gICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICByZXR1cm4gbmV3IE1lc3NhZ2Uob2JqKTtcbiAgfVxufVxuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3Ioe2lkLCBsYWJlbCwgdHJhbnNhY0lkLCBwYXJlbnRJZCwgdHlwZSwgY3JlYXRlZEF0fSA9IHt9KXtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5jcmVhdGVkQXQgPSBtb21lbnQoY3JlYXRlZEF0KTtcbiAgICB0aGlzLnRyYW5zYWNJZCA9IHRyYW5zYWNJZDtcbiAgICBpZihwYXJlbnRJZCkgdGhpcy5wYXJlbnRJZCA9IHBhcmVudElkO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuc3RhdHVzID0gJ29rJztcbiAgfVxuXG4gIGlzVHJhbnNhYygpe1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICd0cmFuc2FjJztcbiAgfVxuXG4gIGlzRXZlbnQoKXtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnZXZlbnQnO1xuICB9XG5cbiAgaXNNZXNzYWdlKCl7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ21lc3NhZ2UnO1xuICB9XG5cblxuICBnZXQgY2hpbGRyZW4oKXtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4gfHwgW107XG4gIH1cblxuICBhZGRDaGlsZChub2RlKXtcbiAgICBpZighdGhpcy5fY2hpbGRyZW4pIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICBub2RlLnBhcmVudCA9IHRoaXM7XG4gICAgdGhpcy51cGRhdGVTdGF0ZXMobm9kZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpc0xlYWYoKXtcbiAgICByZXR1cm4gIXRoaXMubGVuZ3RoO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKXtcbiAgICBsZXQgZG9uZSA9IHt9LCBub2RlLCByZW1haW5pbmdOb2RlcyA9IFt0aGlzXTtcbiAgICBmdW5jdGlvbiBpdGVyYXRlKG5vZGVzKXtcbiAgICAgIGxldCBjaGlsZCA9IG5vZGVzWzBdO1xuICAgICAgaWYoIWNoaWxkKSByZXR1cm4gW251bGwsIFtdXTtcbiAgICAgIGlmKGNoaWxkLmlzTGVhZigpIHx8IGRvbmVbY2hpbGQuaWRdKSByZXR1cm4gW2NoaWxkLCBub2Rlcy5zbGljZSgxKV07XG4gICAgICBub2Rlcy5zcGxpY2UoMCwgMCwgLi4uY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgZG9uZVtjaGlsZC5pZF0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGl0ZXJhdGUobm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpe1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBuZXh0KCl7XG4gICAgICAgIFtub2RlLCByZW1haW5pbmdOb2Rlc10gPSAgaXRlcmF0ZShyZW1haW5pbmdOb2Rlcyk7XG4gICAgICAgIGlmKG5vZGUpcmV0dXJuIHt2YWx1ZTogbm9kZX07XG4gICAgICAgIGVsc2UgcmV0dXJuIHtkb25lOiB0cnVlfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGdldCBsZW5ndGgoKXtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICBnZXQgbGFzdENoaWxkKCl7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlblt0aGlzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IGxhc3RNZXNzYWdlKCl7XG4gICAgLy8gQlVHIHdpdGggQmFiZWxcbiAgICAvL2xldCBub2RlcyA9IF8uZmlsdGVyKFsuLi50aGlzXSwgbm9kZSA9PiBub2RlLmlzTWVzc2FnZSgpKTtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMpIGlmKG5vZGUuaXNNZXNzYWdlKCkpIG5vZGVzLnB1c2gobm9kZSk7IFxuICAgIHJldHVybiBub2Rlc1tub2Rlcy5sZW5ndGgtMV07XG4gIH1cblxuICBnZXQgbGFzdE1lc3NhZ2VUaW1lKCl7XG4gICAgbGV0IGxhc3RNZXNzYWdlID0gdGhpcy5sYXN0TWVzc2FnZTtcbiAgICByZXR1cm4gbGFzdE1lc3NhZ2UgJiYgbGFzdE1lc3NhZ2UuY3JlYXRlZEF0O1xuICB9XG5cbiAgZ2V0IHRyYW5zYWMoKXtcbiAgICBpZighdGhpcy5wYXJlbnQpcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnRyYW5zYWM7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNhYyBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIGlmKG9wdGlvbnMudmFsdWVEYXRlKSB0aGlzLnZhbHVlRGF0ZSA9IG1vbWVudChvcHRpb25zLnZhbHVlRGF0ZSwgXCJERC9NTS9ZWVlZXCIpO1xuICAgIF8uZXh0ZW5kKHRoaXMsIF8ucGljayhvcHRpb25zLCAnc2VydmVyJywgJ3VzZXInLCAncHJvY2Vzc0lkJykpO1xuICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXR1cyA9ICdvayc7XG4gICAgdGhpcy5pc0xvY2tlZCA9IG9wdGlvbnMubG9ja2VkO1xuICAgIHRoaXMuaXNDb21wb3VuZCA9IG9wdGlvbnMuY29tcG91bmQ7XG4gIH1cblxuICB1cGRhdGVTdGF0ZXMobm9kZSl7XG4gICAgaWYobm9kZS5pc01lc3NhZ2UoKSl7XG4gICAgICBpZihub2RlLmxldmVsID09PSAnY29tbWl0JyB8fCBub2RlLmxldmVsID09PSAnYWJvcnQnKSB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxheSA9IG5vZGUuY3JlYXRlZEF0IC0gdGhpcy5jcmVhdGVkQXQ7XG4gICAgICBpZihub2RlLnN0YXR1cyA9PT0gJ2Vycm9yJykgdGhpcy5zdGF0dXMgPSAgJ2Vycm9yJztcbiAgICAgIGVsc2UgaWYodGhpcy5zdGF0dXMgIT0gJ2Vycm9yJyAmJiBub2RlLmxldmVsID09PSAnd2FybmluZycpIHRoaXMuc3RhdHVzID0gICd3YXJuaW5nJztcbiAgICB9XG4gICAgaWYodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LnVwZGF0ZVN0YXRlcyhub2RlKTtcbiAgfVxuXG4gIEBjb21wdXRlZEZyb20oJ3N0YXR1cycpXG4gIGdldCBzdGF0dXNJY29uKCl7XG4gICAgc3dpdGNoKHRoaXMuc3RhdHVzKXtcbiAgICAgIGNhc2UgJ29rJzpcbiAgICAgICAgcmV0dXJuICdnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tZG93biBncmVlbi1pY29uJztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICByZXR1cm4gJ2dseXBoaWNvbiBnbHlwaGljb24td2FybmluZy1zaWduIG9yYW5nZS1pY29uJztcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgcmV0dXJuICdnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzLXNpZ24gcmVkLWljb24nO1xuICAgIH1cbiAgfVxuIFxuICBAY29tcHV0ZWRGcm9tKCdpc1J1bm5pbmcnKVxuICBnZXQgcnVubmluZ0ljb24oKXtcbiAgICByZXR1cm4gKHRoaXMuaXNSdW5uaW5nID8gJ2dseXBoaWNvbiBnbHlwaGljb24tdGltZSBncmVlbi1pY29uJyA6ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBncmVlbi1pY29uJyk7XG4gIH1cblxuICBAY29tcHV0ZWRGcm9tKCdpc0NvbXBvdW5kJylcbiAgZ2V0IGNvbXBvdW5kSWNvbigpe1xuICAgIGlmKHRoaXMuaXNDb21wb3VuZCkgcmV0dXJuICdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxhcmdlIGJsdWUtaWNvbic7XG4gIH1cblxuICBAY29tcHV0ZWRGcm9tKCdpc0xvY2tlZCcpXG4gIGdldCBsb2NrSWNvbigpe1xuICAgIGlmKHRoaXMuaXNMb2NrZWQpIHJldHVybiAnZ2x5cGhpY29uIGdseXBoaWNvbi1sb2NrIGdyYXktaWNvbic7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRXZlbnQgZXh0ZW5kcyBOb2Rle1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlcyhub2RlKXtcbiAgICBpZihub2RlLmlzTWVzc2FnZSgpKXtcbiAgICAgIGlmKG5vZGUuc3RhdHVzID09PSAnZXJyb3InKSB0aGlzLnN0YXR1cyA9ICAnZXJyb3InO1xuICAgICAgZWxzZSBpZih0aGlzLnN0YXR1cyAhPSAnZXJyb3InICYmIG5vZGUubGV2ZWwgPT09ICd3YXJuaW5nJykgdGhpcy5zdGF0dXMgPSAgJ3dhcm5pbmcnO1xuICAgIH1cbiAgICBpZih0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQudXBkYXRlU3RhdGVzKG5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgTm9kZXtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5sZXZlbCA9IG9wdGlvbnMubGV2ZWw7XG4gICAgaWYodGhpcy5sZXZlbCA9PT0gJ2Fib3J0JyB8fCB0aGlzLmxldmVsID09PSAnZXJyb3InKSB0aGlzLnN0YXR1cyA9ICAnZXJyb3InO1xuICAgIGVsc2UgdGhpcy5zdGF0dXMgPSAgdGhpcy5sZXZlbDtcbiAgfVxufVxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9