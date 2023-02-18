"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const customServer = _http.default.createServer(function (req, res) {
  res.end('<h1>hello im h1</h1>');
}).listen(8080);
var _default = customServer;
exports.default = _default;