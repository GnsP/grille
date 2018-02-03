'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Grill Cell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Cell = exports.Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          span = _props.span,
          divide = _props.divide,
          offset = _props.offset,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: '\n        ' + (className || '') + '\n        cell\n        cell-n-' + span + '\n        cell-d-' + (divide || span) + '\n        ' + (offset ? 'cell-o-' + offset : '') + '\n      '
        },
        this.props.children
      );
    }
  }]);

  return Cell;
}(_react.Component);

Cell.displayName = 'Cell';
Cell.propTypes = {
  span: _propTypes2.default.number.isRequired,
  divide: _propTypes2.default.number,
  offset: _propTypes2.default.number,
  className: _propTypes2.default.string
};
Cell.defaultProps = {
  span: 1
};
exports.default = Cell;
