"use strict";

require("core-js/modules/es.array.concat.js");

var _require = require("core-js"),
    Promise = _require.Promise;

function testingES8(text1, text2) {
  alert("".concat(text1, "\n").concat(text2));
}

var promise = Promise.resolve();