(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'jsonp', 'querystring'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('jsonp'), require('querystring'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jsonp, global.querystring);
    global.promiseJsonp = mod.exports;
  }
})(this, function (exports, _jsonp, _querystring) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.promiseJsonp = promiseJsonp;

  var _jsonp2 = _interopRequireDefault(_jsonp);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function apiRejectHandler(msg) {
    return Promise.reject(msg);
  }

  function promiseJsonp(url, data) {
    return new Promise((resolve, reject) => {
      (0, _jsonp2.default)(`${ url }?${ (0, _querystring.stringify)(data) }`, null, (error, data) => {
        if (error) {
          apiRejectHandler(error);
          reject(error);
        } else {
          resolve(data);
        }
      });
    }).catch(_ => {
      apiRejectHandler('接口请求出错');
    });
  }
});
