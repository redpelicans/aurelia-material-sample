/* */ 
"format cjs";
/* eslint quotes: 0 */

"use strict";

exports.__esModule = true;
exports.Identifier = Identifier;
exports.RestElement = RestElement;
exports.ObjectExpression = ObjectExpression;
exports.Property = Property;
exports.ArrayExpression = ArrayExpression;
exports.Literal = Literal;
exports._stringLiteral = _stringLiteral;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isInteger = require("is-integer");

var _isInteger2 = _interopRequireDefault(_isInteger);

var _types = require("../../types");

var t = _interopRequireWildcard(_types);

/**
 * Prints Identifier, prints name.
 */

function Identifier(node) {
  this.push(node.name);
}

/**
 * Prints RestElement, prints argument.
 */

function RestElement(node, print) {
  this.push("...");
  print.plain(node.argument);
}

/**
 * Alias RestElement printer as SpreadElement,
 * and RestElement printer as SpreadProperty.
 */

exports.SpreadElement = RestElement;
exports.SpreadProperty = RestElement;

/**
 * Prints ObjectExpression, prints properties.
 */

function ObjectExpression(node, print) {
  var props = node.properties;

  if (props.length) {
    this.push("{");
    this.space();

    print.list(props, { indent: true });

    this.space();
    this.push("}");
  } else {
    this.push("{}");
  }
}

/**
 * Alias ObjectExpression printer as ObjectPattern.
 */

exports.ObjectPattern = ObjectExpression;

/**
 * Prints Property, prints decorators, key, and value, handles kind, computed, and shorthand.
 */

function Property(node, print) {
  print.list(node.decorators, { separator: "" });

  if (node.method || node.kind === "get" || node.kind === "set") {
    this._method(node, print);
  } else {
    if (node.computed) {
      this.push("[");
      print.plain(node.key);
      this.push("]");
    } else {
      // print `({ foo: foo = 5 } = {})` as `({ foo = 5 } = {});`
      if (t.isAssignmentPattern(node.value) && t.isIdentifier(node.key) && node.key.name === node.value.left.name) {
        print.plain(node.value);
        return;
      }

      print.plain(node.key);

      // shorthand!
      if (node.shorthand && (t.isIdentifier(node.key) && t.isIdentifier(node.value) && node.key.name === node.value.name)) {
        return;
      }
    }

    this.push(":");
    this.space();
    print.plain(node.value);
  }
}

/**
 * Prints ArrayExpression, prints elements.
 */

function ArrayExpression(node, print) {
  var elems = node.elements;
  var len = elems.length;

  this.push("[");

  for (var i = 0; i < elems.length; i++) {
    var elem = elems[i];
    if (!elem) {
      // If the array expression ends with a hole, that hole
      // will be ignored by the interpreter, but if it ends with
      // two (or more) holes, we need to write out two (or more)
      // commas so that the resulting code is interpreted with
      // both (all) of the holes.
      this.push(",");
    } else {
      if (i > 0) this.space();
      print.plain(elem);
      if (i < len - 1) this.push(",");
    }
  }

  this.push("]");
}

/**
 * Alias ArrayExpression printer as ArrayPattern.
 */

exports.ArrayPattern = ArrayExpression;

/**
 * RegExp for testing scientific notation in literals.
 */

var SCIENTIFIC_NOTATION = /e/i;

/**
 * Prints Literal, prints value, regex, raw, handles val type.
 */

function Literal(node, print, parent) {
  var val = node.value;
  var type = typeof val;

  if (type === "string") {
    this._stringLiteral(val);
  } else if (type === "number") {
    // check to see if this is the same number as the raw one in the original source as asm.js uses
    // numbers in the form 5.0 for type hinting
    var raw = node.raw;
    if (val === +raw && raw[raw.length - 1] !== "." && !/^0[bo]/i.test(raw)) {
      val = raw;
    }

    val = val + "";

    if (_isInteger2["default"](+val) && t.isMemberExpression(parent, { object: node }) && !SCIENTIFIC_NOTATION.test(val)) {
      val += ".";
    }

    this.push(val);
  } else if (type === "boolean") {
    this.push(val ? "true" : "false");
  } else if (node.regex) {
    this.push("/" + node.regex.pattern + "/" + node.regex.flags);
  } else if (val === null) {
    this.push("null");
  }
}

/**
 * Prints string literals, handles format.
 */

function _stringLiteral(val) {
  val = JSON.stringify(val);

  // escape illegal js but valid json unicode characters
  val = val.replace(/[\u000A\u000D\u2028\u2029]/g, function (c) {
    return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
  });

  if (this.format.quotes === "single") {
    // remove double quotes
    val = val.slice(1, -1);

    // unescape double quotes
    val = val.replace(/\\"/g, "\"");

    // escape single quotes
    val = val.replace(/'/g, "\\'");

    // add single quotes
    val = "'" + val + "'";
  }

  this.push(val);
}