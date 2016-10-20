var tape = require("tape");
var ext = typeof window !== "undefined" &&  window && window.tapExtension;
module.exports = ext ? ext(tape) : tape;
