"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const customServer = _http.default.createServer(function (req, res) {
  res.end('some text from the server');
}).listen(8080);
var _default = customServer;
exports.default = _default;