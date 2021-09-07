/* !
  * library v0.0.0
  * 
  * (c) 2021 gsj
  */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.library = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function sum(v1, v2) {
        console.log(v1, v2);
        return v1 + v2;
    }
    function getTopics() {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios__default['default'].get('https://cnodejs.org/api/v1/topics')];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function replaceAll() {
        var str = 'q=query+string+parameters';
        var res = str.replaceAll('+', ' ');
        return res;
    }
    function promiseAny() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Promise.any([
                            Promise.resolve(111),
                            Promise.reject(2),
                            Promise.resolve(3),
                        ])];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function optionalOperator() {
        var _a, _b;
        var obj = {};
        return (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.arr) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 1;
    }
    function budget() {
        var budget = 1000000000000;
        return budget === Math.pow(10, 12);
    }
    function testClass() {
        var StaticClassFeatures = (function () {
            function StaticClassFeatures() {
            }
            StaticClassFeatures.callPrivateMethods = function () {
                __classPrivateFieldGet(StaticClassFeatures, _a, "m", _StaticClassFeatures_privateMethods).call(StaticClassFeatures);
            };
            StaticClassFeatures.logPrivateField = function () {
                console.log(__classPrivateFieldGet(StaticClassFeatures, _a, "f", _StaticClassFeatures_privateField));
            };
            var _a, _StaticClassFeatures_privateMethods, _StaticClassFeatures_privateField;
            _a = StaticClassFeatures, _StaticClassFeatures_privateMethods = function _StaticClassFeatures_privateMethods() {
                console.log('privateMethods');
            };
            StaticClassFeatures.staticField = 'staticField';
            _StaticClassFeatures_privateField = { value: 'privateField' };
            return StaticClassFeatures;
        }());
        console.log(StaticClassFeatures.staticField);
        StaticClassFeatures.logPrivateField();
        StaticClassFeatures.callPrivateMethods();
    }
    function arrayIncludes() {
        return [1, 2, 3, 4].includes(5);
    }
    function gen() {
        function gen() {
            return __generator(this, function (_a) {
                return [2];
            });
        }
        return gen();
    }

    exports.arrayIncludes = arrayIncludes;
    exports.budget = budget;
    exports.gen = gen;
    exports.getTopics = getTopics;
    exports.optionalOperator = optionalOperator;
    exports.promiseAny = promiseAny;
    exports.replaceAll = replaceAll;
    exports.sum = sum;
    exports.testClass = testClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));