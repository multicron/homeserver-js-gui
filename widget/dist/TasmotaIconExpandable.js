"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TasmotaIconExpandable;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _clsx2 = _interopRequireDefault(require("clsx"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _colors = require("@material-ui/core/colors");

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _Share = _interopRequireDefault(require("@material-ui/icons/Share"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _widget = _interopRequireDefault(require("@homeserver-js-gui/widget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: _colors.red[500]
    }
  };
});

function TasmotaIconExpandable(props) {
  var classes = useStyles();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement(_CardActions.default, {
    disableSpacing: true
  }, /*#__PURE__*/_react.default.createElement(_widget.default, {
    name: props.name,
    broker: props.broker,
    topic: props.topic,
    field: "power",
    true_value: props.true_value,
    false_value: props.false_value
  }), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: (0, _clsx2.default)(classes.expand, _defineProperty({}, classes.expandOpen, expanded)),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more"
  }, /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null))), /*#__PURE__*/_react.default.createElement(_Collapse.default, {
    in: expanded,
    timeout: "auto"
  }, /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_widget.default, {
    name: props.name,
    caption: "Brightness",
    field: "dimmer",
    min: 0,
    max: 100,
    step: 5
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_widget.default, {
    name: props.name,
    caption: "Color Temperature",
    field: "color_temperature",
    min: 2000,
    max: 5000,
    step: 100,
    value: 3500
  }), " ", /*#__PURE__*/_react.default.createElement("br", null))));
}