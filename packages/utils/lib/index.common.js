/* !
  * library v0.0.5-alpha.0
  * 
  * (c) 2021 gsj
  */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.library = {}, global.axios));
})(this, (function (exports, axios) { 'use strict';

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

    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    const n = 1;
    console.log(n);
    function sum(v1, v2) {
        console.log(v1, v2);
        return v1 + v2;
    }
    function getTopics() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios__default["default"].get('https://cnodejs.org/api/v1/topics');
        });
    }
    function replaceAll() {
        const str = 'q=query+string+parameters';
        const res = str.replaceAll('+', ' ');
        return res;
    }
    function promiseAny() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.any([
                Promise.resolve(111),
                Promise.reject(2),
                Promise.resolve(3),
            ]);
        });
    }
    function optionalOperator() {
        var _a;
        const obj = { arr: [] };
        return (_a = obj.arr.length) !== null && _a !== void 0 ? _a : 1;
    }
    function budget() {
        const budget = 1000000000000;
        return budget === Math.pow(10, 12);
    }
    function testClass() {
        var _a, _StaticClassFeatures_privateMethods, _StaticClassFeatures_privateField;
        class StaticClassFeatures {
            static callPrivateMethods() {
                __classPrivateFieldGet(StaticClassFeatures, _a, "m", _StaticClassFeatures_privateMethods).call(StaticClassFeatures);
            }
            static logPrivateField() {
                console.log(__classPrivateFieldGet(StaticClassFeatures, _a, "f", _StaticClassFeatures_privateField));
            }
        }
        _a = StaticClassFeatures, _StaticClassFeatures_privateMethods = function _StaticClassFeatures_privateMethods() {
            console.log('privateMethods');
        };
        Object.defineProperty(StaticClassFeatures, "staticField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'staticField'
        });
        _StaticClassFeatures_privateField = { value: 'privateField' };
        console.log(StaticClassFeatures.staticField);
        StaticClassFeatures.logPrivateField();
        StaticClassFeatures.callPrivateMethods();
    }
    function arrayIncludes() {
        return [1, 2, 3, 4].includes(5);
    }
    function gen() {
        function* gen() {
            yield 1;
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

}));
