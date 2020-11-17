(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.YuyanMonitor = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
      return this;
    };

    Gp.toString = function() {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$1 = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof$1 = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$1(obj);
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var checkEnv = function (window) {
    return function () {
      if (!window || !window.navigator || !window.navigator.userAgent) {
        return '';
      }

      var ua = window.navigator.userAgent;
      var isIos = !!ua.match(/iphone|ipad|iPod/gi);
      var isAndroid = !!ua.match(/android/gi);
      var isFirefox = !!ua.match(/Firefox/gi);
      var isChrome = !!ua.match(/Chrome/gi);
      var isSafari = !ua.match(/Chrome/gi) && !!ua.match(/Safari/gi);
      var isOpera = !!ua.match(/Opera/gi);
      var isIe = !!ua.match(/MSIE/gi);
      var env = '';

      if (isIos) {
        env = 'iOS';
      }

      if (isAndroid) {
        env = 'Android';
      }

      if (isFirefox) {
        env = 'Firefox';
      }

      if (isChrome) {
        env = 'Chrome';
      }

      if (isSafari) {
        env = 'Safari';
      }

      if (isOpera) {
        env = 'Opera';
      }

      if (isIe) {
        env = 'IE';
      }

      return env;
    };
  }(undefined);

  function checkAndriodSpecial() {
    // todo by white list or else
    return true;
  }

  var generateHandler = function generateHandler(env) {
    switch (env) {
      case 'iOS':
        return {
          filter: function filter(line) {
            return line.indexOf('[native code]') < 0 && line.indexOf('@') >= 0;
          }
        };

      case 'Android':
        return {
          filter: function filter(line, index) {
            return index && line.indexOf('nonymous') < 0 && checkAndriodSpecial();
          }
        };

      default:
        return {
          filter: function filter() {
            return true;
          }
        };
    }
  };

  /**
   * copy from blueimp-md5@2.10.0
   * 由于bigfish rollup 打包问题，引入
   */

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  }
  /*
  * Bitwise rotate a 32-bit number to the left.
  */


  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  /*
  * These functions implement the four basic operations the algorithm uses.
  */


  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }

  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
  }

  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
  }

  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length.
  */


  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }

    return [a, b, c, d];
  }
  /*
  * Convert an array of little-endian words to a string
  */


  function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;

    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }

    return output;
  }
  /*
  * Convert a raw string to an array of little-endian words
  * Characters >255 have their high-byte silently ignored.
  */


  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;

    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }

    var length8 = input.length * 8;

    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }

    return output;
  }
  /*
  * Calculate the MD5 of a raw string
  */


  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }
  /*
  * Calculate the HMAC-MD5, of a key and some data (raw strings)
  */


  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;

    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }

    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }

    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }
  /*
  * Convert a raw string to a hex string
  */


  function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;

    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }

    return output;
  }
  /*
  * Encode a string as utf-8
  */


  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }
  /*
  * Take string arguments and return either raw or hex encoded strings
  */


  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }

  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }

  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }

  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }

  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }

      return rawMD5(string);
    }

    if (!raw) {
      return hexHMACMD5(key, string);
    }

    return rawHMACMD5(key, string);
  }

  var ErrorStack = /*#__PURE__*/function () {
    function ErrorStack(env) {
      _classCallCheck$1(this, ErrorStack);

      this.env = env || checkEnv();
      this.stackFilter = generateHandler(this.env).filter;
    }

    _createClass$1(ErrorStack, [{
      key: "makeReg",
      value: function makeReg() {
        switch (this.env) {
          case 'iOS':
            return new RegExp('(?:\\s*)\\w+(?=@)|(?:@).*?(?=:\\d*:)|(?::)\\d*(?=:)|(?::)\\d*$', 'g');
          // case 'Android':
          //   return new RegExp('(?<=\\s*)\\w+(?=@)|(?<=@).*?(?=:\\d*:)|(?<=:)\\d*(?=:)|(?<=:)\\d*$', 'g');

          default:
            return null;
        }
      }
    }, {
      key: "stackFormatter",
      value: function stackFormatter(error) {
        var message = error.message,
            stack = error.stack;
        var stackList = [];
        var isAndroid = this.env === 'Android';
        var isIOS = this.env === 'iOS';
        var filterList = stack.split('\n').filter(this.stackFilter);
        filterList.shift();
        var stackStr = filterList.join('\n');
        var reg = this.makeReg();

        if (reg) {
          filterList.map(function (line) {
            var res = line.match(reg);

            if (res) {
              var _res = _slicedToArray(res, 4),
                  _res$ = _res[0],
                  func = _res$ === void 0 ? '' : _res$,
                  _res$2 = _res[1],
                  filePath = _res$2 === void 0 ? '' : _res$2,
                  _res$3 = _res[2],
                  lineNumber = _res$3 === void 0 ? '' : _res$3,
                  _res$4 = _res[3],
                  locationNumebr = _res$4 === void 0 ? '' : _res$4;

              var funcName = isAndroid ? func.split('.').reverse()[0] : func;
              var gap = isIOS ? 1 : 0;
              stackList.push("at ".concat(funcName, " (").concat(filePath.substr(gap), ":").concat(lineNumber.substr(gap), ":").concat(locationNumebr.substr(gap), ")"));
            } else {
              stackList.push(line);
            }

            return null;
          });
        } else {
          stackList = filterList;
        }

        var hash = this.encryptStack(message, stackList);
        return {
          hash: hash,
          message: message,
          stackList: stackList,
          stackStr: stackStr
        };
      } // eslint-disable-next-line class-methods-use-this

    }, {
      key: "encryptStack",
      value: function encryptStack(message, stackList) {
        // 抽样取最多10行日志，靠前的取的密
        var stackSampleList = [].concat(_toConsumableArray(stackList.slice(0, 6)), _toConsumableArray(stackList.slice(7, 8)), _toConsumableArray(stackList.slice(9, 10)), _toConsumableArray(stackList.slice(11, 12)), _toConsumableArray(stackList.slice(13, 14)));
        var stackStr = stackSampleList.join(';');
        return md5("".concat(message, ":").concat(stackStr));
      }
    }]);

    return ErrorStack;
  }();

  /**
   * 解析错误对象中的 stack，并尝试压缩 js
   *
   * 压缩逻辑
   * 1. 提取 stack 中所有的 js 名，并为其附一个简化的标识符，形如 #1#
   * 2. 将 stack 中所有的 xxx.js 替换为对应的标识符
   * 3. 所有的标识符通过 `js名@标识符` 的形式保存，多个组合用 ; 隔开，保存为字段中的 c1
   * 4. 客户端读到 stack 后再按照原规则解析
   *
   * @param  {Object} errorObj 原生 Error
   * @return {string}
   */
  var STACK_LENGTH_LIMIT = 20; // regex borrowed from https://github.com/getsentry/raven-js/blob/master/vendor/TraceKit/tracekit.js

  var ChromeREGEX = /^\s*at .*? ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::\d+)?(?::\d+)?\)?\s*$/i;
  var GeckoREGEX = /^\s*.*?(?:\(.*?\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::\d+)?(?::\d+)?\s*$/i;
  var WinJSREGEX = /^\s*at (?:(?:\[object object\])?.+ )?\(?((?:file|ms-appx|https?|blob):.*?):\d+(?::\d+)?\)?\s*$/i; // for test

  if ((typeof process === "undefined" ? "undefined" : _typeof$1(process)) === 'object' && "development" === 'test') {
    ChromeREGEX = /([^()]+\.spec\.js)/i;
  }

  function parseStack(arrList) {
    var arr = arrList.slice(0, STACK_LENGTH_LIMIT);
    var result = ['', '']; // 由于 stack 中 js 地址很长，压缩同名的 js，以获得更多的 stack 捕获

    var jsObj = {};
    var identifierIndex = 1;

    for (var i = 0; i < arr.length; i += 1) {
      var matchRegex = ChromeREGEX;
      var matches = (arr[i] || '').match(matchRegex);

      if (matches === null) {
        matchRegex = GeckoREGEX;
        matches = (arr[i] || '').match(matchRegex);
      }

      if (matches === null) {
        matchRegex = WinJSREGEX;
        matches = (arr[i] || '').match(matchRegex);
      }

      if (matches !== null) {
        var jsFile = matches[1];
        var identifier = jsObj[jsFile];

        if (identifier === undefined) {
          jsObj[jsFile] = "#".concat(identifierIndex, "#");
          identifierIndex += 1;
          identifier = jsObj[jsFile];
        }

        arr[i] = arr[i].replace(jsFile, identifier);
      }
    }

    if (arr.length > 0) {
      result[1] = arr.map(function (line) {
        return line.trim();
      }).join("\x03");
    }

    var identifiers = '';

    for (var _jsFile in jsObj) {
      if (jsObj.hasOwnProperty(_jsFile)) {
        identifiers += "".concat(_jsFile, "@").concat(jsObj[_jsFile], ";");
      }
    }

    identifiers = identifiers.replace(/;$/, '');
    result[0] = identifiers;
    return result.join("\x10").replace(/\^/g, "\x04").replace(/=/g, "\x05").replace(/,/g, "\x06");
  }

  function unParseStack(stackStr) {
    var stack = stackStr && stackStr.split("\x10") || [];

    if (!stack[0] || !stack[1]) {
      return stackStr;
    }

    var jsObj = {};
    var jsFiles = stack[0].split(';');

    for (var i = 0; i < jsFiles.length; i += 1) {
      var files = jsFiles[i] && jsFiles[i].split('@#');
      jsObj["#".concat(files[1])] = files[0];
    }

    return stack[1].replace(/#[0-9]+#/g, function (reg) {
      return jsObj[reg] || '';
    }).replace(/\u0004/g, '^').replace(/\u0005/g, '=').replace(/\u0006/g, ',').split("\x03");
  }

  var helper = {
    compressStack: function compressStack(stackList) {
      return parseStack(stackList);
    },
    uncompressStack: function uncompressStack(stackStr) {
      return unParseStack(stackStr);
    }
  };

  var compressStack = helper.compressStack;

  function _typeof$2(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof$2 = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof$2 = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof$2(obj);
  }

  function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$2(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _iterableToArray$2(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function F() {};

        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function s() {
        it = o[Symbol.iterator]();
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function allFieldsReady(logItem) {
    var requiredFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var logger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    if (!requiredFields.length) {
      return true;
    }

    var _iterator = _createForOfIteratorHelper(requiredFields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var field = _step.value;

        if (logItem[field] === null || logItem[field] === undefined) {
          if (logger) {
            logger("Field \"".concat(field, "\" is required. Log cached."));
          }

          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return true;
  }
  /**
   * 浅拷贝对象，将对象 b 中所有 a 不存在的 kv 拷贝给 a
   *
   * @export
   * @param {object} a
   * @param {object} b
   */


  function shallowMerge(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
  }

  function objectAssign(target, obj) {
    if (!obj || _typeof$2(obj) !== 'object') {
      return target;
    }

    var tar = target || {};

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
        tar[key] = obj[key];
      }
    }

    return tar;
  }
  /**
   * Gets the value at path of object
   * @param {object} obj object to query
   * @param {string} path query path
   * @returns {any} - if {@param path} requests element from array, then `undefined` will be returned
   */


  function getProperty(obj, path) {
    var name = path.split('.');

    for (var i = 0; i < name.length - 1; i++) {
      obj = obj[name[i]];

      if (_typeof$2(obj) !== 'object' || !obj || Array.isArray(obj)) {
        return '';
      }
    }

    return obj[name.pop()];
  }
  /**
   * Sets the value at path of object. Stops execution, if {@param path} requests element from array to be set
   * @param {object} obj object to query
   * @param {string} path query path
   * @param {any} value value to be set
   * @returns {void}
   */


  function setProperty(obj, path, value) {
    var name = path.split('.');

    for (var i = 0; i < name.length - 1; i++) {
      if (_typeof$2(obj[name[i]]) !== 'object' && obj[name[i]] !== undefined) {
        return;
      }

      if (Array.isArray(obj[name[i]])) {
        return;
      }

      if (!obj[name[i]]) {
        obj[name[i]] = {};
      }

      obj = obj[name[i]];
    }

    obj[name.pop()] = value;
  }
  /**
   * A Options Defaulter for Monitor Sdks
   * - Inspired by webpack optionsDefaulter
   * @export
   * @class OptionsDefaulter
   */


  var OptionsDefaulter = /*#__PURE__*/function () {
    function OptionsDefaulter() {
      _classCallCheck$2(this, OptionsDefaulter);

      this.defaults = {};
      this.configs = {};
    }
    /**
     * build up default values
     *
     * @param {string} name option path
     * @param {ConfigType} config config if define is provided, then only config is allowed
     * @param {Define} [define] defaults
     * @memberof OptionsDefaulter
     */


    _createClass$2(OptionsDefaulter, [{
      key: "set",
      value: function set(name, config, define) {
        if (define !== undefined) {
          this.defaults[name] = define;
          this.configs[name] = config;
        } else {
          this.defaults[name] = config;
          delete this.configs[name];
        }
      }
      /**
       * executing values with default values
       *
       * @param {{}} options options provide by user
       * @memberof OptionsDefaulter
       */

    }, {
      key: "process",
      value: function process(options) {
        var _oldValue;

        options = objectAssign({}, options);

        for (var name in this.defaults) {
          if (this.defaults.hasOwnProperty(name)) {
            switch (this.configs[name]) {
              case 'call':
                setProperty(options, name, this.defaults[name].call(this, getProperty(options, name), options));
                break;

              case 'make':
                if (getProperty(options, name) === undefined) {
                  setProperty(options, name, this.defaults[name].call(this, options));
                }

                break;

              case 'append':
                var oldValue = getProperty(options, name);

                if (!Array.isArray(oldValue)) {
                  oldValue = [];
                }

                (_oldValue = oldValue).push.apply(_oldValue, _toConsumableArray$1(this.defaults[name]));

                setProperty(options, name, oldValue);
                break;

              default:
                if (getProperty(options, name) === undefined) {
                  setProperty(options, name, this.defaults[name]);
                }

            }
          }
        }

        return options;
      }
    }]);

    return OptionsDefaulter;
  }(); // 将dom转化为Array


  function nodeListToArray(nodes) {
    var arr;
    var length;

    try {
      arr = [].slice.call(nodes);
      return arr;
    } catch (err) {
      arr = []; // eslint-disable-next-line prefer-destructuring

      length = nodes.length;

      for (var i = 0; i < length; i++) {
        arr.push(nodes[i]);
      }

      return arr;
    }
  }

  function getAttr(element, attrName) {
    return element && element.getAttribute ? element.getAttribute(attrName) || '' : '';
  }
  /* eslint-disable no-console */


  var warnCache = {};

  function warnDeprecated(property, suggestion) {
    if (!console || !console.warn || warnCache[property]) {
      return;
    }

    warnCache[property] = 1;
    console.warn("\u914D\u7F6E\u9879 [".concat(property, "] \u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528\u3002\u8BF7\u4F7F\u7528 [").concat(suggestion, "]\u3002"));
  }

  var defaulterSingleton;

  function getGlobal() {
    if (!eval) {
      return global || window;
    }

    return (0, eval)('this');
  }

  function getOptionsDefaulter() {
    if (!defaulterSingleton) {
      defaulterSingleton = createOptionsDefaulter();
    }

    return defaulterSingleton;
  }

  var getMetaInfo = function (win) {
    return function (metaKey) {
      var _win$document;

      if (!(win === null || win === void 0 ? void 0 : (_win$document = win.document) === null || _win$document === void 0 ? void 0 : _win$document.querySelectorAll)) {
        return '';
      }

      var metas = nodeListToArray(win.document.querySelectorAll('meta'));

      for (var i = 0; i < metas.length; i++) {
        var m = metas[i];

        if (getAttr(m, 'name') === metaKey) {
          return getAttr(m, 'content');
        }
      }

      return null;
    };
  }(getGlobal());

  var metaMap = {
    _appId: 'bm_app_id',
    yuyanId: 'yuyan_id',
    sprintId: 'bm_sprint_id'
  };

  function getMetaOptions() {
    var options = {};

    for (var key in metaMap) {
      if (metaMap.hasOwnProperty(key)) {
        var metaContent = getMetaInfo(metaMap[key]);

        if (metaContent) {
          options[key] = metaContent;
        }
      }
    }

    return options;
  }

  function createOptionsDefaulter() {
    var defaulter = new OptionsDefaulter();
    var metaOptions = getMetaOptions(); // bmAppid 的兼容获取逻辑

    defaulter.set('bmAppid', 'call', function (value, options) {
      // 如果显式设置了 bmAppid，则直接取值
      if (value) {
        warnDeprecated('bmAppid', '_appId');
        return value;
      } // appid: 1.x appx 和 node 的接口rol


      if (options.appid) {
        warnDeprecated('appid', '_appId');
        return options.appid;
      } // _appId: 2.0 新增的建议 fallback 接口


      return options._appId || metaOptions._appId;
    });
    defaulter.set('yuyanId', 'call', function (value) {
      return value || metaOptions.yuyanId;
    });
    defaulter.set('userId', 'call', function (value, options) {
      if (options.roleId) {
        warnDeprecated('roleId', 'userId');
        return options.roleId;
      }

      return value;
    });
    defaulter.set('disableInterface', 'call', function (value) {
      return value || false;
    });
    defaulter.set('oncePerSession', 'call', function (value) {
      return value || false;
    });
    defaulter.set('autoCapture', 'call', function (_, options) {
      // 如果传入的属性里有写 autoCapture, 则用 Boolean 后的 autoCapture
      if (options.hasOwnProperty('autoCapture')) {
        return Boolean(options.autoCapture);
      }

      return true;
    });
    defaulter.set('defaults', 'call', function (value) {
      return objectAssign({}, value);
    });
    defaulter.set('sprintId', 'call', function (value) {
      return value || metaOptions.sprintId;
    }); // 只是做一下强转。。
    // 兼容一下用户只写一个字段的情况。。

    defaulter.set('requiredFields', 'call', function (value) {
      if (!Array.isArray(value)) {
        return typeof value === 'string' ? [value] : [];
      }

      return value;
    });
    defaulter.set('eventId', 'call', function (_, options) {
      return options.appType === 'PC' ? '102022' : '102023';
    });
    defaulter.set('beforeLog', 'call', function (value) {
      if (typeof value === 'function') {
        return value;
      }
    });
    defaulter.set('callBridge', 'call', function (value) {
      if (typeof value === 'function') {
        return value;
      }
    });
    defaulter.set('plugins', 'call', function (value) {
      return Array.isArray(value) ? value : ['performance', 'buc'];
    });
    return defaulter;
  }

  var ErrorCodeEnums = {
    JS: 1,
    REQUEST: 2,
    PROMISEREJECTION: 3,
    ASSETS: 4
  };
  var enums = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ErrorCodeEnums: ErrorCodeEnums
  });
  var es = new ErrorStack();

  function logError(err, hashDetect, _ref) {
    var log = _ref.log,
        _warn = _ref._warn;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    try {
      var code = (options === null || options === void 0 ? void 0 : options.code) || ErrorCodeEnums.JS; // 监控项code

      var hashValue = '';

      if (err) {
        if (err.stack) {
          var _es$stackFormatter = es.stackFormatter(err),
              hash = _es$stackFormatter.hash,
              stackList = _es$stackFormatter.stackList;

          hashValue = hash; // 判断堆栈是否上报过

          if (hash && stackList && stackList.length) {
            hashDetect(hash).then(function (detect) {
              if (!detect) {
                log(_objectSpread2$1(_objectSpread2$1({}, options), {}, {
                  code: ErrorCodeEnums.JS,
                  s1: hash,
                  s2: compressStack(stackList),
                  s3: 1
                }));
              }
            }).catch(function (e) {
              _warn('hash检测失败', e);
            });
          } // 上报日志信息


          log(_objectSpread2$1({
            code: code,
            msg: err.message,
            s10: hashValue
          }, options));
        } else {
          log(_objectSpread2$1({
            code: code,
            msg: err.message || err
          }, options));
        }
      }
    } catch (e) {
      _warn('异常上报失败:', e);
    }
  }

  /**
   * 解析 UserAgent 字符串
   * @param {String} ua, userAgent string.
   * @return {Object}
   *
   * "app": {
   *      "is": true,
   *      "name": "TB|TM|JU|LW|DD|ET|XM|...",  // 详见 http://velocity.alibaba-inc.com/projects/cross-end-web/wiki/App-ua
   *      "version": "9.0"
   *  }
   */
  var checkApp = function(ua) {
      var app = {},
          aliApp = ua.match(/AliApp\S+\b\)/ig);
      app.is = /(T-UA)|(TBIOS)|(WindVane)|(AliApp)/i.test(ua) ? true : false;
      app.name = aliApp ? aliApp[0].match(/\(\w+\-*\w*/)[0].split("(")[1] : "";
      app.version = aliApp ? aliApp[0].match(/(\d+\.*)+/ig)[0] : "";
      return app;
  };

  var checkApp_1 = checkApp;

  var encodeValue = function encodeValue(v) {
    return encodeURIComponent(v).replace(/'/g, '%27');
  };
  function objToStr(obj) {
    var spliter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '^';
    var encode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var strArr = [];
    var prop;

    if (obj instanceof Array) {
      strArr = obj;
    } else if (obj instanceof Object) {
      var handleValue = encode ? encodeValue // encode + replace 单引号
      : function (v) {
        return v;
      };

      for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          var value = handleValue(obj[prop]);
          strArr.push("".concat(prop, "=").concat(value));
        }
      }
    }

    return strArr.join(spliter);
  }
  function getTime() {
    var dt = new Date();

    var fillDate = function fillDate(num) {
      return num < 10 ? "0".concat(num) : "".concat(num);
    };

    return "".concat(dt.getFullYear(), "-").concat(fillDate(dt.getMonth() + 1), "-").concat(fillDate(dt.getDate()), " ").concat(fillDate(dt.getHours()), ":").concat(fillDate(dt.getMinutes()), ":").concat(fillDate(dt.getSeconds()), ":").concat(dt.getMilliseconds());
  }
  function parseItem(item) {
    if (!item || _typeof(item) !== 'object') {
      return [];
    }

    var eventId = item.eventId,
        userId = item.userId,
        ua = item.ua,
        param4 = item.param4;
    var data = ['D-AE', getTime(), '', '', '2', '', '', userId, '1000', eventId, 'H5behavior', '2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ua, '', '', '', '', '', ''];
    data.push(objToStr(param4, '^', true));
    return data;
  }
  function objectAssign$1(target, obj) {
    var tar = target || {};

    if (!obj || _typeof(obj) !== 'object') {
      return tar;
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
        tar[key] = obj[key];
      }
    }

    return tar;
  } // 通过 ua 判断是不是在 支付宝容器内

  function checkIsAlipay(navi) {
    var ua = navi && navi.userAgent;
    if (!ua) return false;
    var appInfo = checkApp_1(ua);
    return ['AP', 'AF', 'AFW', 'BK', 'AM', 'APHK', 'KB'].indexOf(appInfo.name) >= 0;
  } // mixin 函数，字节级复制 ts 官网中的函数

  function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
        if (name === 'constructor') {
          return;
        }

        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
  } // 绑定事件

  function addEvent(evnt, ele, func) {
    var elem = ele || window.document;

    if (elem.addEventListener) {
      // W3C DOM
      elem.addEventListener(evnt, func, true);
    } else if (elem.attachEvent) {
      // IE DOM
      elem.attachEvent("on".concat(evnt), func);
    } else {
      elem[evnt] = func;
    }
  } // 移除事件

  function removeEvent(evnt, ele, func) {
    var elem = ele || window.document;

    if (elem.removeEventListener) {
      // W3C DOM
      elem.removeEventListener(evnt, func, true);
    } else if (elem.detachEvent) {
      // IE DOM
      elem.detachEvent("on".concat(evnt), func);
    } else {
      elem[evnt] = func;
    }
  }
  /**
   * 根据打点的各个参数生成唯一的标识符，用于判断一次 session 内该错误是否已经打过点
   * @param  {Object} options 打点参数
   * @return {String}
   */

  function generateIdentifier(options) {
    return [options.code, options.uid, options.page, options.msg || ''].join('_');
  }
  /**
   * 页面加载完成后执行回调
   * @param callback 回调函数
   */

  function load(callback) {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      callback();
    } else {
      addEvent('DOMContentLoaded', document, callback);
    }
  }

  // 获取dom上面的属性
  function getAttr$1(element, attrName) {
    return element && element.getAttribute ? element.getAttribute(attrName) || '' : '';
  } // 将dom转化为Array

  function nodeListToArray$1(nodes) {
    var arr;
    var length;

    try {
      arr = [].slice.call(nodes);
      return arr;
    } catch (err) {
      arr = [];
      length = nodes.length;

      for (var i = 0; i < length; i++) {
        arr.push(nodes[i]);
      }

      return arr;
    }
  }
  function getXPath(dom, depth) {
    var id = dom.id ? "".concat(dom.id) : '';
    var className = dom.className ? "".concat(dom.className) : '';
    var tagName = dom.tagName.toLowerCase();
    var hasIdOrClass = id || className;
    var idClassAttr = [];

    if (id) {
      idClassAttr.push("[@id=\"".concat(id, "\"]"));
    }

    if (className) {
      idClassAttr.push("[@class=\"".concat(className, "\"]"));
    }

    var selfXPath = "".concat(tagName).concat(hasIdOrClass ? idClassAttr.join('') : '');
    return dom.parentNode && dom.parentNode.tagName && depth - 1 !== 0 ? "".concat(getXPath(dom.parentNode, depth - 1), ">").concat(selfXPath) : selfXPath;
  }
  /**
   * 资源加载类异常处理方法
   * @param {Event} event 事件
   */

  function getResourceErrorSrc() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var src = target.src || target.href; // IMG

    if (target.tagName.toLowerCase() === 'img') {
      // 如果是编码图片，则截取图片类型和编码作为src
      if (src.indexOf('data:') === 0) {
        src = src.split(',')[0];
      }
    }

    return src;
  }

  /**
   * spm 相关工具方法
   */
  var spmDataKey = 'data-aspm';
  /**
   * 获取页面spm元数据
   * 元数据包括：
   * 1. spm a位，在meta标签里 name 为 data-aspm 的 content 中
   * 2. 页面bizType，在meta标签里 name 为 data-bizType 的 content 中
   */

  function getMetaSpm(metas) {
    var metaList = nodeListToArray$1(metas || document.getElementsByTagName('meta'));
    var len = metaList.length;
    var metaItem;
    var name;
    var content; // let bizType;

    var spmAPos;

    for (var i = 0; i < len; i++) {
      metaItem = metaList[i];
      name = getAttr$1(metaItem, 'name');
      content = getAttr$1(metaItem, 'content');

      if (name === spmDataKey && content) {
        spmAPos = content;
        break;
      }
    }

    var ret = {};

    if (spmAPos) {
      ret.spmAPos = spmAPos;
    }

    return ret;
  }
  function getSpmBPos() {
    // 获取 B 位
    var spmBPos = getAttr$1(document.body, spmDataKey);
    return spmBPos;
  }

  /* eslint-disable no-underscore-dangle */

  /* eslint-disable no-plusplus */

  /* eslint-disable prefer-rest-params */

  /* eslint-disable func-names */

  /**
   * 通过 hack XMLHttpRequest 和 fetch 统计接口报错情况，仅兼容 IE8 及以上
   */
  var win = window; // 由于页面可能有很多请求被拦截，所以出于性能考虑为了不 deopt V8，对所有的 arguments
  // 做 slice 处理，避免 arguments leaking

  function interfaceRegister(Monitor) {
    var pluginConfig = {
      sampleRate: 1,
      evaluate: null,
      fullSample: false
    }; // Hack XMLHttpRequest

    if ('XMLHttpRequest' in win) {
      var xhrproto = win.XMLHttpRequest.prototype;
      var prevOpen = xhrproto.open; // eslint-disable-next-line func-names

      xhrproto.open = function (method, url) {
        this.__interfaceMonitor__ = {
          method: method,
          url: url || '',
          status_code: null
        };
        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }

        prevOpen.apply(this, args);
      };

      var prevSend = xhrproto.send;

      xhrproto.send = function (data) {
        var xhr = this;

        function onreadystatechangeHandler() {
          if (xhr.__interfaceMonitor__ && xhr.readyState === 4) {
            try {
              var url = xhr.__interfaceMonitor__.url; // 当请求被取消或 timeout 时为 0

              if (xhr.status === 0) {
                return;
              }

              var trueUrl = url.split('?')[0];
              var query = url.split('?')[1] || ''; // url 参数

              var params = typeof data === 'string' ? data : JSON.stringify(data);
              var response = String(xhr.response);

              if (response.length > 2048) {
                response = '[too large]';
              }

              var shouldLog = false;

              if (xhr.status < 200 || xhr.status > 299 || shouldLog || pluginConfig.fullSample) {
                // 过滤掉自身报错，防止循环
                if (trueUrl === Monitor.server) {
                  Monitor._warn('上报异常', params);

                  return;
                }

                Monitor.logRequestError({
                  type: 'http',
                  status: xhr.status,
                  url: trueUrl,
                  method: xhr.__interfaceMonitor__.method,
                  query: query,
                  data: params,
                  response: response,
                  traceId: Monitor.traceId || ''
                });
              }
            } catch (e) {
              Monitor._warn('接口异常上报失败:', e);
            }
          }
        }

        if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
          var prevReadyStateChangeHandler = xhr.onreadystatechange;

          xhr.onreadystatechange = function () {
            var args = new Array(arguments.length);

            for (var i = 0; i < args.length; ++i) {
              args[i] = arguments[i];
            }

            onreadystatechangeHandler.apply(this, args);
            prevReadyStateChangeHandler.apply(this, args);
          };
        } else {
          xhr.onreadystatechange = onreadystatechangeHandler;
        }

        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }

        return prevSend.apply(this, arguments);
      };
    } // Hack Fetch


    if ('fetch' in win) {
      var prevFetch = win.fetch;

      win.fetch = function () {
        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }

        var method = 'GET';

        if (args[1] && args[1].method) {
          method = args[1].method.toUpperCase();
        }

        return prevFetch.apply(this, args).then(function (response) {
          return new Promise(function (resolve) {
            try {
              var url = args[0];
              var trueUrl = url.split('?')[0];
              var query = url.split('?')[1] || ''; // url 参数

              var data = args[1] && args[1].body || '';
              var params = typeof data === 'string' ? data : JSON.stringify(data);
              response.clone().text().then(function (text) {
                if (!response.ok || pluginConfig.fullSample) {
                  var responseText = (text || '').length > 2048 ? '[too large]' : text;
                  Monitor.logRequestError({
                    type: 'http',
                    status: response.status,
                    url: trueUrl,
                    method: method,
                    query: query,
                    data: params,
                    response: responseText,
                    traceId: Monitor.traceId || ''
                  });
                }
              }).then(function () {
                resolve(response);
              }, function () {
                resolve(response);
              });
            } catch (e) {
              resolve(response);
            }
          });
        });
      };
    }
  }

  var version = "2.0.29";

  var spliter = "\x02";
  var doc = document;
  var docEl = doc.documentElement;

  var LastAction = /*#__PURE__*/function () {
    function LastAction() {
      var _this = this;

      _classCallCheck(this, LastAction);

      this.lastAction = "0\x02\x02".concat(getTime(), "\x02"); // 滚动事件锁

      this.setLastActionTimer = false;
      addEvent('scroll', document, function (event) {
        if (_this.setLastActionTimer) {
          return;
        }

        _this.setLastActionTimer = true;
        setTimeout(function () {
          _this.setLastActionTimer = false;
        }, 300);

        _this.setLastAction(event);
      });
      addEvent('click', document, function (event) {
        _this.setLastAction(event);
      });
    }

    _createClass(LastAction, [{
      key: "setLastAction",
      value: function setLastAction(event) {
        try {
          var actions = [];
          var isClick = event.type === 'click'; // index 1 : type

          var type = isClick ? 1 : 2;
          actions.push(type); // index 2 : xpath (click only)

          var xpath = isClick ? "".concat(getXPath(event.target, 5)) : '';
          actions.push(xpath); // index 3 : time

          actions.push(getTime()); // index 4 : position

          var position = isClick ? "".concat(event.x, "x").concat(event.y) : "".concat(docEl.scrollLeft + doc.body.scrollLeft, "x").concat(docEl.scrollTop + doc.body.scrollTop);
          actions.push(position); // index 5 : innerText (click only)

          var innerText = event.target && event.target.innerText;
          var text = innerText ? "".concat(innerText.slice(0, 8)) : '';
          actions.push(text);
          this.lastAction = actions.join(spliter);
        } catch (e) {// do nothing
        }
      }
    }, {
      key: "get",
      value: function get() {
        return this.lastAction;
      }
    }]);

    return LastAction;
  }();

  var serverUrl = 'https://mdap.alipay.com/loggw/dwcookieLogGet.do';
  /**
   * @file Define all kinds of document-level metrics
   * @see https://yuque.antfin-inc.com/deer/backyard/moovhb
   */

  var NAVIGATION_KEYS = ['connectEnd', 'connectStart', 'decodedBodySize', 'domComplete', 'domContentLoadedEventEnd', 'domContentLoadedEventStart', 'domInteractive', 'domainLookupEnd', 'domainLookupStart', 'duration', 'encodedBodySize', 'fetchStart', 'loadEventEnd', 'loadEventStart', 'redirectCount', 'redirectEnd', 'redirectStart', 'requestStart', 'responseEnd', 'responseStart', 'secureConnectionStart', 'transferSize', 'type', 'unloadEventEnd', 'unloadEventStart', 'workerStart', 'firstPaint', 'firstContentfulPaint', 'firstMeaningfulPaint'];

  var ErrorCodeEnums$1 = enums.ErrorCodeEnums;
  var doc$1 = document;
  var docEl$1 = doc$1.documentElement;
  var startTime = new Date().getTime();

  var Base = /*#__PURE__*/function () {
    function Base(_opts) {
      _classCallCheck(this, Base);

      this.server = serverUrl;
      this.userConfig = {};
      this.defaults = {}; // 容器参数

      this.cOfflineVer = '';
      this.cAppId = '';
      this.cUserId = '';
      this.trackedLogs = [];
      this.requiredFields = []; // 异常事件监听是否已注册

      this.isErrorHandler = false; // 是否开启性能收集

      this.enabledPlugins = [];
      var opts = getOptionsDefaulter().process(_opts);
      this.userConfig = opts;
      this.eventId = '102022';
      this.bmAppid = opts.bmAppid;
      this.debug = opts.debug || false;
      this.autoCapture = opts.autoCapture;
      this.disableInterface = opts.disableInterface;
      this.lastActionComp = new LastAction();
      this.oncePerSession = opts.oncePerSession;
      this.beforeLog = opts.beforeLog;
      this.defaults = opts.defaults || {};
      this.requiredFields = opts.requiredFields || [];
      this.enabledPlugins = opts.plugins;
    } // 异常事件处理


    _createClass(Base, [{
      key: "handleErrorEvent",
      value: function handleErrorEvent(event, fn) {
        try {
          var target = event.target || event.srcElement;

          if (!target) {
            return;
          }

          var type = event.type; // unhandledrejection

          if (type === 'unhandledrejection') {
            var reason = event.reason || {};

            if (reason.message && reason.stack) {
              // reason 是 error
              this.logError(reason, {
                code: ErrorCodeEnums$1.PROMISEREJECTION
              });
            } else {
              // reason 不是 error
              var msg = reason.message || (typeof reason === 'string' ? reason : JSON.stringify(reason));
              fn({
                code: ErrorCodeEnums$1.PROMISEREJECTION,
                msg: msg
              });
            }

            return;
          }

          var isElementTarget = target instanceof HTMLElement; // 资源加载异常

          if (isElementTarget) {
            var src = getResourceErrorSrc(target);
            var tagName = target.tagName.toLowerCase();
            var _target$alt = target.alt,
                alt = _target$alt === void 0 ? '' : _target$alt;
            fn({
              code: ErrorCodeEnums$1.ASSETS,
              msg: src || '',
              s1: tagName,
              s2: getXPath(target, 5),
              s3: alt
            });
            return;
          } // JS ERROR


          if (event.error && event.error.stack) {
            this.logError(event.error);
            return;
          } // 获取不到stack的情况


          fn({
            code: ErrorCodeEnums$1.JS,
            msg: event.message,
            s3: 0
          });
        } catch (e) {
          this._warn('handleErrorOptions failed', e);
        }
      } // 处理前置捕获逻辑

    }, {
      key: "handlePreCapture",
      value: function handlePreCapture() {
        var _this = this;

        var monitorObj = window.g_monitor;

        if (!monitorObj) {
          return;
        }

        var _monitorObj$listener = monitorObj.listener,
            listener = _monitorObj$listener === void 0 ? {} : _monitorObj$listener,
            _monitorObj$events = monitorObj.events,
            events = _monitorObj$events === void 0 ? [] : _monitorObj$events; // 删除listener中的事件

        for (var eventName in listener) {
          if (listener.hasOwnProperty(eventName)) {
            removeEvent(eventName, window, listener[eventName]);
            delete listener[eventName];
          }
        } // 处理捕获的event


        for (var i = 0; i < events.length; i++) {
          this.handleErrorEvent(events[i], function (options) {
            _this.log(options);
          });
        }

        monitorObj.events = [];
      } // 注册异常监听事件：

    }, {
      key: "register",
      value: function register() {
        var _this2 = this;

        if (!this.autoCapture) {
          this._warn('已通过 autoCapture 禁用异常捕获');

          return;
        }

        try {
          if (!doc$1) {
            this._warn('当前为非 web 环境，不支持报错监听与插件使用');

            return this;
          }

          if (this.isErrorHandler) {
            this._warn('错误事件已监听');

            return;
          }

          var getErrorEventHandler = function getErrorEventHandler(e) {
            _this2.handleErrorEvent(e, function (options) {
              _this2.log(options);
            });
          };

          addEvent('error', window, getErrorEventHandler); // promise reject未被catch

          addEvent('unhandledrejection', window, getErrorEventHandler);
          this.isErrorHandler = true;
        } catch (e) {
          this._warn('异常监听事件注册失败', e);
        }
      } // 判断通过什么方式上报

    }, {
      key: "isBridgeReport",
      value: function isBridgeReport(code) {
        return window.AlipayJSBridge && (Number(code) > 10 || Number(code) < 1);
      }
    }, {
      key: "getNetwork",
      value: function getNetwork() {
        var _navigator = navigator;

        if (!_navigator || !_navigator.connection || !_navigator.connection.effectiveType) {
          return '';
        }

        return _navigator.connection.effectiveType;
      }
    }, {
      key: "_warn",
      value: function _warn() {
        var win = window;

        if (_typeof(win) === 'object' && win.console && typeof win.console.warn === 'function' && this.debug) {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var params = Array.prototype.slice.call(args);
          win.console.warn.apply(null, ["[Monitor Debug]".concat(params[0]), params.slice(1)]);
        }
      }
    }, {
      key: "parseParam4",
      value: function parseParam4(item) {
        if (!item || _typeof(item) !== 'object') {
          return null;
        }

        var param4 = _objectSpread2(_objectSpread2({}, this.defaults), item);

        if (item.bmAppid || this.bmAppid) {
          param4.bm_appid = item.bmAppid || this.bmAppid;
        }

        if (this.userConfig.sprintId) param4.bm_sid = this.userConfig.sprintId;
        if (this.userConfig.env) param4.env = this.userConfig.env;
        if (this.userConfig.yuyanId) param4.yuyan_id = this.userConfig.yuyanId;
        param4.monitor_ver = "websdk:".concat(version);
        param4.title = param4.title || document.title;
        param4.dom_cnt = document.getElementsByTagName('*').length;
        param4.delay = new Date().getTime() - startTime;
        param4.scroll_top = docEl$1.scrollTop + doc$1.body.scrollTop;
        param4.content_height = Math.max(docEl$1.clientHeight, docEl$1.offsetHeight, docEl$1.scrollHeight);
        param4.last_action = this.lastActionComp.get();
        param4.network = this.getNetwork();
        var spmId = this.userConfig.spmAPos && this.userConfig.spmBPos ? "".concat(this.userConfig.spmAPos, ".").concat(this.userConfig.spmBPos) : '';
        if (spmId) param4.spmId = spmId;
        param4.fullURL = param4.fullURL || location.href; // 离线包版本

        if (this.cOfflineVer) {
          param4.c_offline_ver = this.cOfflineVer;
        } // H5 应用Id，只有容器内能获取到


        if (this.cAppId) {
          param4.c_app_id = this.cAppId;
        }

        if (_typeof(param4) === 'object') {
          var p = param4;

          for (var k in p) {
            if (p.hasOwnProperty(k) && typeof p[k] === 'string') {
              // 替换逗号和回车以及等号
              var _item = p[k].replace(/\s+/g, ' ');

              p[k] = k === 'fullURL' && _item.length > 300 ? _item.slice(0, 300) : _item;
            }
          }
        }

        return param4;
      }
      /**
       * 发送 post 请求
       * @param data 日志格式的数据
       */

    }, {
      key: "sendData",
      value: function sendData(data) {
        var _encode = encodeURIComponent;

        if (this.debug) {
          console.log('send', data);
        }

        try {
          var xhr = new XMLHttpRequest();
          xhr.open('POST', this.server, true);
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xhr.send("data=".concat(_encode(data.join()), "&time=").concat(new Date().getTime()));
        } catch (e) {
          try {
            var image = new Image();
            image.src = "".concat(this.server, "?data=").concat(_encode(data.join()), "&time=").concat(new Date().getTime());
          } catch (imgError) {
            this._warn('通过 IMG 上报失败.', imgError);
          }
        }
      }
      /**
       * 通过容器接口上报
       * @param param4
       */

    }, {
      key: "bridgeLog",
      value: function bridgeLog(param4) {
        if (!window.AlipayJSBridge) {
          this._warn('非容器环境，不能调用 handleLoggingAction');

          return;
        }

        var extData = param4 || {};
        window.AlipayJSBridge.call('handleLoggingAction', {
          actionType: 'reportEvent',
          params: {
            eventId: this.eventId,
            bizType: 'bmmonitor',
            extData: extData
          }
        });
      }
    }]);

    return Base;
  }();

  var monitorConfigCacheKey = "_YUYAN_COOKIE_monitor_config";
  var expireDelta = 15 * 60 * 1000; // 15分钟

  var ConfigStorage = /*#__PURE__*/function () {
    function ConfigStorage() {
      _classCallCheck(this, ConfigStorage);
    }

    _createClass(ConfigStorage, [{
      key: "getStorageInfoMap",
      value: function getStorageInfoMap() {
        try {
          var storage = window.localStorage;

          if (!storage) {
            return {};
          }

          var storageStr = storage.getItem(monitorConfigCacheKey) || '{}';
          return JSON.parse(storageStr);
        } catch (e) {
          console && console.warn && console.warn('[MonitorSDK]从Storage中获取配置失败', e);
        }

        return {};
      }
    }, {
      key: "getMonitorConfig",
      value: function getMonitorConfig(bmAppid) {
        var configMap = this.getStorageInfoMap();
        var prjConfig = configMap[bmAppid];

        if (!prjConfig || prjConfig.expire < new Date().valueOf()) {
          return null;
        }

        return prjConfig.config;
      }
    }, {
      key: "saveMonitorConfig",
      value: function saveMonitorConfig(bmAppid, config) {
        var storage = window.localStorage;

        if (!storage) {
          return null;
        }

        var storageInfoMap = this.getStorageInfoMap();
        var storageInfo = {
          config: config,
          expire: new Date().valueOf() + expireDelta
        };
        storageInfoMap[bmAppid] = storageInfo;
        storage.setItem(monitorConfigCacheKey, JSON.stringify(storageInfoMap));
      }
    }]);

    return ConfigStorage;
  }();

  var configStorage = new ConfigStorage();

  function execScript(Monitor, configScript) {
    var window = {
      Tracert: Monitor
    }; // 服务端配置目前是直接对 Tracert 对象进行操作，所以此处还需要命名为 Tracert

    eval(configScript);
    return window;
  }

  var ServerConfig = /*#__PURE__*/function () {
    function ServerConfig() {
      _classCallCheck(this, ServerConfig);

      this.monitorConfigInited = false;
      this.monitorConfigFailed = false;
      this.monitorOptions = [];
    }

    _createClass(ServerConfig, [{
      key: "fetchConfig",
      value: function fetchConfig() {
        var _this = this;

        if (!this.bmAppid) {
          setTimeout(function () {
            _this.onFetchConfigError('没有 bmAppid');
          });
          return;
        } // 尝试从 storage 中获取配置


        var config = configStorage.getMonitorConfig(this.bmAppid);

        if (config) {
          this.setMonitorConfigs(config);
          return;
        }

        var isPre = this.userConfig.env === 'pre';
        var url = "https://render.alipay.com/p/alertserver".concat(isPre ? '_pre' : '', "/").concat(this.bmAppid, "_config/index.js");

        if (window.AlipayJSBridge) {
          this.fetchConfigByJSBridge(url);
        } else {
          this.fetchConfigByRequest(url);
        }
      } // 容器外获取监控配置的方法，通过 script 标签加载

    }, {
      key: "fetchConfigByRequest",
      value: function fetchConfigByRequest(url) {
        var _this2 = this;

        if (!window.XMLHttpRequest) {
          this.onFetchConfigError('没有 XHR，无法请求配置');
        }

        try {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.send();

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200 || xhr.status === 304) {
                try {
                  execScript(_this2, xhr.responseText);
                } catch (e) {
                  _this2.onFetchConfigError(e);
                }
              } else {
                _this2.onFetchConfigError("\u83B7\u53D6\u914D\u7F6E\u5931\u8D25: ".concat(url));
              }
            }
          };
        } catch (error) {
          this.onFetchConfigError(error);
        }
      }
    }, {
      key: "initMonitorConfigs",
      value: function initMonitorConfigs(config) {
        this.setMonitorConfigs(config);
        configStorage.saveMonitorConfig(this.bmAppid, config);
      }
    }, {
      key: "setMonitorConfigs",
      value: function setMonitorConfigs(_ref) {
        var monitors = _ref.monitors;
        this.monitorOptions = monitors;
        this.monitorConfigInited = true;
        this.onMonitorConfigInited();
      } // 通过容器获取服务端配置

    }, {
      key: "fetchConfigByJSBridge",
      value: function fetchConfigByJSBridge(url) {
        var _this3 = this;

        window.AlipayJSBridge.call('httpRequest', {
          url: url,
          method: 'GET',
          contentType: 'application/json'
        }, function (res) {
          if (!res || res.status !== 200) {
            _this3.onFetchConfigError('未找到配置');

            return;
          }

          try {
            execScript(_this3, res.data);
            setTimeout(function () {
              if (!_this3.monitorConfigInited) _this3.onFetchConfigError('获取服务端配置超时');
            }, 3000);
          } catch (e) {
            _this3.onFetchConfigError(e);
          }
        });
      }
    }]);

    return ServerConfig;
  }();

  var lib = createCommonjsModule(function (module) {
  /**
   * timing2 - A PerformanceTimeline polyfill for legacy browsers.
   * @author jasonslyvia
   */

  (function (root, factory) {
    if ( module.exports) {
      module.exports = factory();
    } else {
      root.timing2 = factory();
    }
  }(typeof self !== 'undefined' ? self : commonjsGlobal, function () {
    if (typeof window !== 'object') {
      return;
    }

    var win = window;
    var timing2;
    var NAVIGATION_TYPE = {
      0: 'navigate',
      1: 'reload',
      2: 'back_forward',
    };

    var KEYS = [
      'unloadEventStart',
      'unloadEventEnd',
      'redirectStart',
      'redirectEnd',
      'fetchStart',
      'domainLookupStart',
      'domainLookupEnd',
      'connectStart',
      'connectEnd',
      'secureConnectionStart',
      'requestStart',
      'responseStart',
      'responseEnd',
      'domLoading',
      'domInteractive',
      'domContentLoadedEventStart',
      'domContentLoadedEventEnd',
      'domComplete',
      'loadEventStart'
    ];

    if (!win || !win.performance || typeof win.performance !== 'object') {
      return timing2;
    }

    // only return window.performance if it's fully equipped, sometimes it only got
    // partial support such as in iOS 8.1 to iOS 8.4
    if (typeof win.performance.getEntries === 'function' &&
        typeof win.performance.getEntriesByType === 'function' &&
        typeof win.performance.getEntriesByName === 'function' &&
        typeof win.performance.now === 'function' &&
        win.performance.timeOrigin) {
      return win.performance;
    }

    var getEntry = function() {
      var entry = win.performance.timing;
      var timeOrigin = entry.navigationStart || entry.redirectStart || entry.fetchStart;
      var finalEntry = {
        entryType: 'navigation',
        initiatorType: 'navigation',
        name: win.location.href,
        startTime: 0,
        duration: entry.loadEventEnd ? entry.loadEventEnd - timeOrigin : 0,
        redirectCount: win.performance.navigation.redirectCount,
        type: NAVIGATION_TYPE[win.performance.navigation.type],
      };

      for (var i = 0; i < KEYS.length; i++) {
        var key = KEYS[i];
        var value = entry[key];
        finalEntry[key] = !value ? 0 : value - timeOrigin;
      }

      return finalEntry;
    };

    timing2 = {
      _entry: getEntry(),
      timeOrigin: win.performance.timing.navigationStart,
      getEntries: function() {
        return [this._entry];
      },
      getEntriesByType: function(type) {
        if (type !== 'navigation') {
          return [];
        }
        return [this._entry];
      },
      getEntriesByName: function(name) {
        if (name !== win.location.href) {
          return [];
        }
        return [this._entry];
      },
      now: function() {
        return Date.now() - win.performance.timing.navigationStart;
      },
    };

    return timing2;
  }));
  });

  function getWeight(num) {
    return Math.pow(0.5, num);
  }

  var calculateFMP = function calculateFMP(option) {
    var records = option.records;
    var start = option.start;
    var timeout = option.timeout;
    var load = option.load;

    if (records.length === 0) {
      return typeof timeout === 'number' ? timeout : 0;
    }

    // add weight to each data point
    if (typeof load === 'number') {
      records.forEach(function(item) {
        var t = item.t;
        var abst = Math.abs(parseFloat(t) - load);
        item.weight = getWeight(abst / 1000);
      });
    }

    var slopes = records.map(function(item, idx) {
      if (idx === 0) {
        return 0;
      }
      var prev = records[idx - 1];
      if (item.domCnt === prev.domCnt) {
        return 0;
      }

      return (item.domCnt - prev.domCnt) / (item.t - prev.t) * (typeof item.weight === 'number' ? item.weight : 1);
    });

    var maxSlope = Math.max.apply(null, slopes);
    var maxSlopeIndex = slopes.indexOf(maxSlope);
    return records[maxSlopeIndex].t - start;
  };

  /**
   * painty - A First Meaningful Paint metric collector based on MutationObserver with a setTimeout
   *          fallback
   * @author jasonslyvia
   */



  /* global __PAINTY_STACK_LIMIT__ */

  // record at most 100 DOM changes
  var STACK_LIMIT = typeof __PAINTY_STACK_LIMIT__ === 'number' ? __PAINTY_STACK_LIMIT__ : 100;

  function now() {
    return typeof performance === 'object' && typeof performance.now === 'function' ? performance.now() : Date.now();
  }

  var _painty_0_3_3_painty = function painty(timeout, callback) {
    if (typeof window !== 'object' || typeof lib !== 'object') {
      return;
    }

    if (typeof timeout === 'function') {
      callback = timeout;
    }

    var records = [];

    function logDOMChange() {
      if (typeof MutationObserver === 'function') {
        var observer = new MutationObserver(function() {
          records.push({
            t: now(),
            domCnt: document.getElementsByTagName('*').length,
          });

          if (records.length === STACK_LIMIT) {
            done();
          }
        });
        observer.observe(document, {
          childList: true,
          subtree: true,
        });

        return observer.disconnect.bind(observer);
      }

      var timer = setTimeout(function() {
        records.push({
          t: now(),
          domCnt: document.getElementsByTagName('*').length,
        });

        if (records.length === STACK_LIMIT) {
          done();
        } else {
          logDOMChange();
        }
      }, 200);

      return function() {
        clearTimeout(timer);
      };
    }

    var stopLogging = logDOMChange();
    function done() {
      stopLogging();

      if (typeof lib !== 'object' || typeof lib.getEntriesByType !== 'function') {
        return;
      }

      var navTimings = lib.getEntriesByType('navigation');
      if (!navTimings || !navTimings.length) {
        return;
      }

      var navTiming = navTimings[0];
      var start = navTiming.startTime;

      callback(calculateFMP({
        records: records,
        start: start,
        timeout: timeout,
        load: navTiming.duration,
      }));
    }

    if (typeof timeout === 'number') {
      setTimeout(done, timeout);
    } else {
      var ua = navigator.userAgent;
      var isMobileSafari = !!ua.match(/iPhone|iPad|iPod/i);
      var eventName = isMobileSafari ? 'pagehide' : 'beforeunload';

      window.addEventListener(eventName, done);
    }
  };

  var extractPaintMetrics = function extractPaintMetrics(timing) {
    if (_typeof(timing) !== 'object') {
      return [];
    }

    var paintTiming = timing.getEntriesByType('paint');
    var metrics = {};

    if (paintTiming.length) {
      var firstPaint = (paintTiming.filter(function (t) {
        return t.name === 'first-paint';
      })[0] || {}).startTime;
      var firstContentfulPaint = (paintTiming.filter(function (t) {
        return t.name === 'first-contentful-paint';
      })[0] || {}).startTime;
      metrics.firstPaint = parseFloat(firstPaint);
      metrics.firstContentfulPaint = parseFloat(firstContentfulPaint);
    }

    return metrics;
  };
  function extractPageMetrics(timing, fmp) {
    if (_typeof(timing) !== 'object' || typeof timing.getEntriesByType !== 'function') {
      return null;
    }
    var navTimings = timing.getEntriesByType('navigation'); // Add special checks for iOS 8.1 - iOS 8.4

    if (!navTimings || navTimings.length === 0) {
      return null;
    }

    var navTiming = navTimings[0];
    var paintTiming = extractPaintMetrics(timing);
    var fmpTiming = {
      firstMeaningfulPaint: fmp
    }; // For the detailed explanation of DOM related durations, see
    // https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp#navigation-timing

    return NAVIGATION_KEYS.reduce(function (prev, key) {
      var val = navTiming[key] || paintTiming[key] || fmpTiming[key];

      if (val == null || typeof val === 'number' && isNaN(val)) {
        return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, "".concat(key), 0));
      }

      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, "".concat(key), val));
    }, {});
  }
  function getPerformanceMetrics(m, navTiming) {
    if (!m) {
      return {};
    }

    return normalizeMetrics({
      // m1:load = navigationTiming.duration 或 loadEventEnd - navigationStart
      m1: navTiming.duration || parseFloat(m.loadEventEnd) - navTiming.startTime,
      // m2: dcl = DOMContentLoaded
      m2: parseFloat(m.domContentLoadedEventStart) - navTiming.startTime,
      // m3: DOMComplete 时长 (dc)
      m3: parseFloat(m.domComplete) - navTiming.startTime,
      // m4: fp paintTiming['first-paint']
      m4: m.firstPaint,
      // m5: fcp
      m5: m.firstContentfulPaint,
      // m6: fmp
      m6: m.firstMeaningfulPaint,
      // m7: rdt: redirectEnd - redirectStart
      m7: parseFloat(m.redirectEnd) - parseFloat(m.redirectStart),
      // m8: act: domainLookupStart - fetchStart
      m8: parseFloat(m.domainLookupStart) - parseFloat(m.fetchStart),
      // m9: dlt
      m9: parseFloat(m.domainLookupEnd) - parseFloat(m.domainLookupStart),
      // m10: ct = connectEnd - connectStart
      m10: parseFloat(m.connectEnd) - parseFloat(m.connectStart),
      // m11: sslt = connectEnd - secureConnectionStart
      m11: parseFloat(m.connectEnd) - parseFloat(m.secureConnectionStart),
      // m12: reqt: responseStart - requestStart
      m12: parseFloat(m.responseStart) - parseFloat(m.requestStart),
      // m13: rest: reponseEnd - responseStart
      m13: parseFloat(m.responseEnd) - parseFloat(m.responseStart),
      // m14: dpt = domComplete - responseEnd
      m14: parseFloat(m.domComplete) - parseFloat(m.responseEnd),
      // m15: ft = loadEventEnd - responseEnd
      m15: parseFloat(m.loadEventEnd) - parseFloat(m.responseEnd),
      // m16: di = domInteractive - navigationStart
      m16: parseFloat(m.domInteractive) - navTiming.startTime,
      // m17: dret = domContentLoadedEventEnd - domContentLoadedEventStart
      m17: parseFloat(m.domContentLoadedEventEnd) - parseFloat(m.domContentLoadedEventStart),
      // m18: dcp = domComplete - navigationStart
      m18: parseFloat(m.domComplete) - navTiming.startTime
    });
  }

  function normalizeMetrics(object) {
    var result = {};

    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        if (isNaN(object[key])) {
          result[key] = 0;
        } else {
          result[key] = Math.round(Math.min(Math.max(0, parseFloat(object[key])), 5 * 60 * 1000));
        }
      }
    }

    return result;
  }

  var fmp = null;
  var RESOURCE_LIMIT = 500;
  var PERFORMANCE_PROJECT_ID = '5e85b985a00cad447680db5a';
  var PERFORMANCE_ERROR_CODE = 11;
  var SEND_METRICS_ERROR_CODE = 12;
  var PERFORMACE_RESERVED_CODE = '32767';

  function logError$1(monitor, e, code) {
    monitor.log({
      bmAppid: PERFORMANCE_PROJECT_ID,
      code: code,
      msg: e.message,
      page: location.href
    });
  }

  function sendMetrics(monitor, timing) {
    // 避免性能日志在 beforeunload 被用户取消的场景下反复触发的问题
    if (_typeof(timing) !== 'object' || monitor.metricsSent) {
      return;
    }

    try {
      var _navigator, _navigator$connection;

      var navTiming = timing.getEntriesByType('navigation')[0]; // 页面粒度的性能指标

      var metrics = extractPageMetrics(timing, fmp);
      var performanceDimensions = {
        // network
        d1: ((_navigator = navigator) === null || _navigator === void 0 ? void 0 : (_navigator$connection = _navigator.connection) === null || _navigator$connection === void 0 ? void 0 : _navigator$connection.effectiveType) || '-',
        // partial
        d2: navTiming.duration === 0 ? 1 : 0,
        // visible
        d3: document.hidden ? 0 : 1
      };
      var performanceCustoms = {
        c1: document.title
      };
      monitor.log(_objectSpread2(_objectSpread2(_objectSpread2({
        code: PERFORMACE_RESERVED_CODE,
        msg: location.href
      }, getPerformanceMetrics(metrics, navTiming)), performanceDimensions), performanceCustoms));
      /* eslint-disable-next-line */

      monitor.metricsSent = true;
    } catch (e) {
      logError$1(monitor, e, SEND_METRICS_ERROR_CODE);
    }
  }

  var Performace = /*#__PURE__*/function () {
    function Performace() {
      _classCallCheck(this, Performace);
    }

    _createClass(Performace, [{
      key: "apply",
      value: function apply(monitor) {
        this.monitor = monitor;

        if (_typeof(lib) !== 'object') {
          return;
        }

        try {
          // 开始检测 first meaningful paint
          _painty_0_3_3_painty(function (val) {
            fmp = val;
          });

          if (typeof lib.setResourceTimingBufferSize === 'function') {
            lib.setResourceTimingBufferSize(RESOURCE_LIMIT);
          } // mobile safari 不再触发 unload 事件，因此用 pagehide 替代


          var ua = navigator.userAgent;
          var isMobileSafari = !!ua.match(/iPhone|iPad|iPod/i);
          var eventName = isMobileSafari ? 'pagehide' : 'beforeunload'; // util.addEvent 强制使用捕获方式导致事件无法触发

          window.addEventListener(eventName, sendMetrics.bind(null, monitor, lib));
        } catch (e) {
          logError$1(monitor, e, PERFORMANCE_ERROR_CODE);
        }
      }
    }]);

    return Performace;
  }();

  /**
   * hack 掉 Tracert.log
   *
   * @export
   * @class TracertHacker
   */

  var TracertHacker = /*#__PURE__*/function () {
    function TracertHacker() {
      var _this = this;

      _classCallCheck(this, TracertHacker);

      this.injectedLog = function (item) {
        var _this$monitor;

        return (_this$monitor = _this.monitor) === null || _this$monitor === void 0 ? void 0 : _this$monitor.log.call(_this.monitor, item);
      };
    }

    _createClass(TracertHacker, [{
      key: "apply",
      value: function apply(monitor) {
        var _this2 = this;

        this.monitor = monitor;
        load(function () {
          var _window = window,
              Tracert = _window.Tracert; // window 上没有 Tracert

          if (!Tracert) {
            return;
          }

          var injected = {
            log: function log(item) {
              var paramsBmAppId = (item === null || item === void 0 ? void 0 : item.bmAppId) || (item === null || item === void 0 ? void 0 : item.bm_appid) || item._bmAppId;
              var _bmAppId = Tracert._bmAppId;

              monitor._warn("\"Tracert.log\" \u5DF2\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002\u8BF7\u8FC1\u79FB\u5230 @alipay/yuyan-monitor-web\u3002");

              return _this2.injectedLog(_objectSpread2(_objectSpread2({}, item), {}, {
                bmAppid: paramsBmAppId || _bmAppId
              }));
            }
          };
          Tracert.call('after', 'start', function () {
            Tracert.call('set', _objectSpread2({}, injected));
          });
          Tracert.call('set', _objectSpread2({}, injected));
        });
      }
    }]);

    return TracertHacker;
  }();

  var iframeSrc = 'https://tracert.alipay.com/cross.html';

  var CrossIframe = /*#__PURE__*/function () {
    function CrossIframe() {
      _classCallCheck(this, CrossIframe);

      this._iframe = null;
    }

    _createClass(CrossIframe, [{
      key: "canLoadIframe",
      value: function canLoadIframe() {
        var win = window;

        if (typeof win.WeixinJSBridge !== 'undefined' || typeof win.QQJSBridge !== 'undefined') {
          return false;
        }

        if (win.navigator && (win.navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1 || win.navigator.userAgent.toLowerCase().indexOf('qq') > -1 || win.navigator.userAgent.toLowerCase().indexOf('toutiaomicroapp') > -1 || typeof win.navigator.wxuserAgent !== 'undefined')) {
          return false;
        }

        return true;
      }
    }, {
      key: "initIframe",
      value: function initIframe() {
        if (!this.canLoadIframe()) {
          return null;
        }

        if (this._iframe) {
          return this._iframe;
        }

        var iframe = document.createElement('iframe');
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.style.position = 'absolute';
        iframe.style.left = '-100px';
        iframe.style.bottom = '-100px';
        iframe.style.width = '-100px';
        iframe.setAttribute('src', iframeSrc);

        iframe.onload = function () {
          iframe.style.display = 'none';
        };

        try {
          document.body.appendChild(iframe);
        } catch (e) {// do nothing
        }

        this._iframe = iframe;
        return iframe;
      }
    }]);

    return CrossIframe;
  }();

  var crossIframe = new CrossIframe();

  var bucUserKey = '_YUYAN_COOKIE_bucUserId'; // const ALIPAYDOMAIN = '.alipay.com';

  function send(target, type, content) {
    target.postMessage(JSON.stringify({
      type: type,
      content: content
    }), '*');
  }

  var BucUserId = /*#__PURE__*/function () {
    function BucUserId() {
      _classCallCheck(this, BucUserId);

      this.iframe = null;
      this.iframeLoaded = false;
      this.pending = false;
      this.queue = [];
      this.cachedQuery = [];
    } // private isAlipayDomain: boolean = false;


    _createClass(BucUserId, [{
      key: "apply",
      value: function apply(monitor) {
        var _this = this;

        this.monitor = monitor; // this.isAlipayDomain = document.domain.indexOf(ALIPAYDOMAIN) !== -1;

        load(function () {
          var _this$monitor, _this$monitor$userCon;

          // 如果用户有传 userId，则直接返回，不进行 bucId 的获取
          if ((_this$monitor = _this.monitor) === null || _this$monitor === void 0 ? void 0 : (_this$monitor$userCon = _this$monitor.userConfig) === null || _this$monitor$userCon === void 0 ? void 0 : _this$monitor$userCon.userId) {
            return;
          }

          window.addEventListener('message', function (ev) {
            return _this.receive(ev);
          }, false);
          _this.pending = true;
          _this.iframe = crossIframe.initIframe();

          _this.getUserIdForMonitor(function (userId) {
            var _this$monitor2, _this$monitor2$userCo, _this$monitor3;

            if (!userId || ((_this$monitor2 = _this.monitor) === null || _this$monitor2 === void 0 ? void 0 : (_this$monitor2$userCo = _this$monitor2.userConfig) === null || _this$monitor2$userCo === void 0 ? void 0 : _this$monitor2$userCo.userId)) {
              return;
            }

            (_this$monitor3 = _this.monitor) === null || _this$monitor3 === void 0 ? void 0 : _this$monitor3.config({
              userId: userId
            });
          });
        });
      }
    }, {
      key: "getUserIdForMonitor",
      value: function getUserIdForMonitor(callback) {
        var _this2 = this;

        var _window = window,
            localStorage = _window.localStorage;

        if (localStorage) {
          var userId = localStorage.getItem(bucUserKey);

          if (userId) {
            var _this$monitor4;

            callback(userId);
            (_this$monitor4 = this.monitor) === null || _this$monitor4 === void 0 ? void 0 : _this$monitor4._warn('从 localstorge 中获取 bucId:', userId);
            return;
          }
        }

        this.getBucUserId(function () {
          var userId = _this2.userId;

          if (localStorage && userId) {
            localStorage.setItem(bucUserKey, userId);
          }

          callback(_this2.userId || '');
        });
      }
    }, {
      key: "receive",
      value: function receive(event) {
        var _this$monitor5;

        var json;

        if (!event.data) {
          return;
        }

        try {
          json = JSON.parse(event.data);
        } catch (e) {
          return;
        }

        if (!json.type) {
          return;
        }

        switch (json.type) {
          case 'getBucUserId':
            this.userId = json.content;
            this.pending = false;
            (_this$monitor5 = this.monitor) === null || _this$monitor5 === void 0 ? void 0 : _this$monitor5._warn('从跨域 storage 获取 bucId:', this.userId);

            while (this.queue.length) {
              var fn = this.queue[0];
              fn(json.content);
              this.queue.shift();
            }

            break;

          case 'iframOnload':
            this.iframeOnLoad();
            break;
        }
      }
    }, {
      key: "iframeOnLoad",
      value: function iframeOnLoad() {
        this.iframeLoaded = true;
        this.executeCachedQuery();
      }
    }, {
      key: "executeCachedQuery",
      value: function executeCachedQuery() {
        if (!this.cachedQuery.length) {
          return;
        }

        for (var i = 0; i < this.cachedQuery.length; i++) {
          var _this$cachedQuery$i = _toArray(this.cachedQuery[i]),
              fn = _this$cachedQuery$i[0],
              args = _this$cachedQuery$i.slice(1); // eslint-disable-next-line prefer-spread


          this[fn].apply(this, args);
        }
      }
    }, {
      key: "getBucUserId",
      value: function getBucUserId(callback) {
        if (!this.iframeLoaded) {
          this.cachedQuery.push(['getBucUserId', callback]);
          return;
        }

        this.queue.push(callback);

        if (!this.pending) {
          send(this.iframe.contentWindow, 'getBucUserId');
          this.pending = true;
        }
      }
    }]);

    return BucUserId;
  }();

  var hashMap = {};
  function detectHash(_x) {
    return _detectHash.apply(this, arguments);
  }

  function _detectHash() {
    _detectHash = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(hash) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!hashMap[hash]) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", Promise.resolve(true));

            case 2:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                try {
                  var xhr = new XMLHttpRequest();
                  xhr.open('GET', "https://dataservice.alipayobjects.com/alertserver/hash/".concat(hash), true);
                  xhr.send();

                  xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                      if (xhr.status === 200 || xhr.status === 304) {
                        hashMap[hash] = true;
                        return resolve(true);
                      }

                      return resolve(false);
                    }
                  };
                } catch (e) {
                  return reject(e);
                }
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _detectHash.apply(this, arguments);
  }

  var ErrorCodeEnums$2 = enums.ErrorCodeEnums;
  var win$1 = window;

  var MonitorWeb = /*#__PURE__*/function (_Base) {
    _inherits(MonitorWeb, _Base);

    var _super = _createSuper(MonitorWeb);

    function MonitorWeb() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        appType: 'H5'
      };

      _classCallCheck(this, MonitorWeb);

      _this = _super.call(this, opts);
      _this.jsBridgeReady = false;
      _this.itemCache = [];
      _this.monitorOptionMap = {};
      _this.UserConfig = {}; // mixins
      // serverConfig

      _this.monitorConfigInited = false;
      _this.monitorConfigFailed = false;
      _this.monitorOptions = [];
      new TracertHacker().apply(_assertThisInitialized(_this));

      if (_this.enabledPlugins.indexOf('performance') !== -1) {
        new Performace().apply(_assertThisInitialized(_this));
      }

      if (_this.enabledPlugins.indexOf('buc') !== -1) {
        new BucUserId().apply(_assertThisInitialized(_this));
      }

      _this.isAlipay = checkIsAlipay(win$1.navigator); // spm

      _this.initJsBridge();

      _this.fetchConfig(); // 处理前置捕获逻辑


      _this.handlePreCapture(); // 注册异常事件监听


      _this.register();

      return _this;
    }
    /**
     * 上报信息
     * @param logItem
     */


    _createClass(MonitorWeb, [{
      key: "log",
      value: function log() {
        var logItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 ? arguments[1] : undefined;

        if (!logItem) {
          return;
        } // 钱包内未ready的时候，先把item缓存住，等到ready再上报


        var alipayNotReady = this.isAlipay && !this.jsBridgeReady;

        if (alipayNotReady || !this.monitorConfigInited) {
          // 监控项没有获取到之前也不上报，先缓存
          this.itemCache.push([logItem, options]);
          return;
        }

        if (!allFieldsReady(this.userConfig, this.requiredFields, this._warn.bind(this))) {
          this.itemCache.push([logItem, options]);
          return;
        }

        this._log(logItem, options);
      }
    }, {
      key: "logError",
      value: function logError$1(err, logItem) {
        logError(err, detectHash, {
          log: this.log.bind(this),
          _warn: this._warn.bind(this)
        }, logItem);
      }
    }, {
      key: "logRequestError",
      value: function logRequestError() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        try {
          if (!options) {
            return;
          }

          var _options$type = options.type,
              type = _options$type === void 0 ? 'http' : _options$type;

          if (type === 'http') {
            // http 接口异常
            var status = options.status,
                url = options.url,
                method = options.method,
                query = options.query,
                data = options.data,
                response = options.response,
                traceId = options.traceId,
                optCode = options.code;
            var msg = "".concat(method.toUpperCase(), " ").concat(url);
            var item = {
              code: optCode || 2,
              msg: msg
            };
            if (status) item.s1 = status;
            if (query) item.s2 = query;
            if (data) item.s3 = data;
            if (response) item.s4 = response;
            if (traceId) item.s5 = traceId;
            this.log(item);
          }

          if (type === 'rpc') {// wait for rpc
          }
        } catch (e) {
          this._warn('接口异常上报失败:', e);
        }
      }
    }, {
      key: "config",
      value: function config(configItem) {
        if (!configItem || _typeof(configItem) !== 'object') {
          return;
        }

        shallowMerge(this.userConfig, configItem);

        if (allFieldsReady(this.userConfig, this.requiredFields, this._warn.bind(this))) {
          this.logCache();
        }
      } // 将 cache 中的 item 都上报

    }, {
      key: "logCache",
      value: function logCache() {
        var cache = this.itemCache;

        for (var i = 0; i < cache.length; i++) {
          var params = cache[i];
          Array.isArray(params) && this._log(params[0], params[1]);
        }

        this.itemCache = [];
      } // 上报前置判断

    }, {
      key: "preprocess",
      value: function preprocess(item) {
        var _item$oncePerSession;

        // beforeLog处理
        if (typeof this.beforeLog === 'function') {
          try {
            item = this.beforeLog(item);
          } catch (e) {
            // do nothing
            this._warn('beforeLog 失败:', e);
          }
        }

        if (!item || _typeof(item) !== 'object' && Array.isArray(item)) {
          this._warn('beforeLog返回值不是对象，不进行上报');

          return;
        } // oncePerSession


        var id = generateIdentifier(_objectSpread2(_objectSpread2({}, item), {}, {
          uid: item.roleId || this.userConfig.userId || this.cUserId || '',
          page: location.href
        }));
        var trackedFlag = false;

        for (var i = 0; i < this.trackedLogs.length; i++) {
          if (this.trackedLogs[i] === id) {
            trackedFlag = true;
            break;
          }
        }

        var finalOncePerSession = (_item$oncePerSession = item.oncePerSession) !== null && _item$oncePerSession !== void 0 ? _item$oncePerSession : this.oncePerSession;

        if (finalOncePerSession && trackedFlag) {
          this._warn('当前由于 OncePerSession 策略，未被采集');

          return;
        } // 根据服务端配置过滤


        var bmAppid = item.bmAppid || this.bmAppid;

        if (bmAppid === this.bmAppid) {
          // 如果是性能监控项，直接放行
          if (item.code === PERFORMACE_RESERVED_CODE) {
            return item;
          } // 兼容动态 bmAppid 上报，只有与this.bmAppid匹配才进行过滤


          var monitorConfig = this.monitorOptionMap[Number(item.code)] || this.monitorOptionMap["".concat(item.code)];

          if (!this.monitorConfigFailed && !monitorConfig) {
            this._warn("\u76D1\u63A7\u5E73\u53F0\u6CA1\u6709\u8BE5\u76D1\u63A7\u9879\u7684\u914D\u7F6E\uFF0Ccode: ".concat(item.code));

            return;
          } // 采样


          var configSampleRate = monitorConfig && monitorConfig.sampleRate;
          var sampleRate = configSampleRate || item.sampleRate || 1;

          if (Math.random() > sampleRate) {
            this._warn("\u5F53\u524D\u5DF2\u8BBE\u7F6E\u91C7\u6837\u7387 ".concat(sampleRate, "\uFF0C\u672A\u88AB\u91C7\u96C6"));

            return;
          } // 过滤自定义字段


          if (monitorConfig) {
            var fields = {};
            var configFields = monitorConfig.fields || [];

            for (var _i = 0; _i < configFields.length; _i++) {
              fields[configFields[_i]] = true;
            }

            for (var key in item) {
              if (!fields[key] && /^[dmc]\d+$/.test(key)) {
                delete item[key];
              }
            }
          }
        }

        !trackedFlag && this.trackedLogs.push(id);
        return item;
      }
    }, {
      key: "_log",
      value: function _log(logItem, options) {
        var item = this.preprocess(logItem);

        if (!item) {
          return;
        }

        this.getSpmInfo(); // 获取通用逻辑

        var param4 = this.parseParam4(item);
        var forceHttpReport = !!(options === null || options === void 0 ? void 0 : options.forceHttpReport); // 判断是否通过容器上报

        if (!forceHttpReport && this.isBridgeReport(param4.code)) {
          param4._ua = navigator.userAgent ? navigator.userAgent.replace(/,/g, '%2C') : '';

          for (var _i2 = 0, _Object$keys = Object.keys(param4); _i2 < _Object$keys.length; _i2++) {
            var field = _Object$keys[_i2];
            param4[field] = encodeValue(param4[field]);
          }

          this.bridgeLog(param4);
        } else {
          // 处理用户ID
          var userId = item.roleId || this.userConfig.userId || this.cUserId || '';
          delete item.roleId;
          var ua = navigator.userAgent ? navigator.userAgent.replace(/,/g, '%2C') : '';
          var itemData = parseItem({
            eventId: this.eventId,
            userId: userId,
            param4: param4,
            ua: ua
          });

          if (!itemData.length) {
            return;
          }

          return this.sendData(itemData);
        }
      } // 获取spm信息
      // 通过 meta、window._to等方式获取 AB 位

    }, {
      key: "getSpmInfo",
      value: function getSpmInfo() {
        var params = window._to || {};

        if (!this.userConfig.spmAPos) {
          var spmAPos = getMetaSpm().spmAPos || params.spmAPos;

          if (spmAPos) {
            this.userConfig.spmAPos = spmAPos;
          }
        }

        if (!this.userConfig.spmBPos) {
          var spmBPos = getSpmBPos() || params.spmBPos;

          if (spmBPos) {
            this.userConfig.spmBPos = spmBPos;
          }
        }
      }
      /**
       * 初始化容器相关操作
       */

    }, {
      key: "initJsBridge",
      value: function initJsBridge() {
        var _this2 = this;

        document.addEventListener('AlipayJSBridgeReady', function () {
          _this2.onJsBridgeReady();
        });
      }
    }, {
      key: "getInfoFromBridge",
      value: function getInfoFromBridge(callback) {
        var _this3 = this;

        var count = 2; // 需要调用2次jsBridge

        function bridgeCallback() {
          count--;

          if (count === 0) {
            callback();
          }
        }

        try {
          var jsBridge = win$1.AlipayJSBridge;
          jsBridge.call('getUserInfo', function (result) {
            _this3.cUserId = result.userId; // 容器用户ID

            bridgeCallback();
          });
          jsBridge.call('getStartupParams', function (result) {
            _this3.cOfflineVer = result.version; // 离线包版本

            if (result.version) {
              _this3.cAppId = result.appId; // 离线包 appid，非离线包会拿到错的appid，所以必须先确定是离线包再取字段
            }

            bridgeCallback();
          });
        } catch (e) {
          callback();

          this._warn('调用容器接口获取信息失败', e);
        }
      }
    }, {
      key: "onJsBridgeReady",
      value: function onJsBridgeReady() {
        var _this4 = this;

        var callback = function callback() {
          _this4.jsBridgeReady = true; // 如果服务端配置也获取到了就上报cache

          _this4.monitorConfigInited && _this4.logCache();
        };

        this.getInfoFromBridge(callback);
      }
      /**
       * 设置属性
       * @param opts 属性
       */

    }, {
      key: "set",
      value: function set() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        objectAssign$1(this, opts);
      }
    }, {
      key: "setMonitorConfigs",
      value: function setMonitorConfigs() {}
    }, {
      key: "initMonitorConfigs",
      value: function initMonitorConfigs() {}
    }, {
      key: "fetchConfig",
      value: function fetchConfig() {}
    }, {
      key: "fetchConfigByRequest",
      value: function fetchConfigByRequest() {}
    }, {
      key: "fetchConfigByJSBridge",
      value: function fetchConfigByJSBridge() {}
    }, {
      key: "onMonitorConfigInited",
      value: function onMonitorConfigInited() {
        var _this5 = this;

        this.monitorOptions && this.monitorOptions.forEach(function (item) {
          if (item && item.code) {
            _this5.monitorOptionMap[item.code] = item;
          }
        }); // 判断是否有接口异常监控项

        var requestConfig = this.monitorOptionMap[ErrorCodeEnums$2.REQUEST];

        if (!this.disableInterface && requestConfig) {
          var code = requestConfig.code,
              isActive = requestConfig.isActive,
              isDeleted = requestConfig.isDeleted;

          if (code === ErrorCodeEnums$2.REQUEST && isActive && !isDeleted) {
            interfaceRegister(this);
          }
        } // 如果容器还未ready，就不上报 cache


        if (this.isAlipay && !this.jsBridgeReady) {
          return;
        }

        this.logCache();
      }
    }, {
      key: "onFetchConfigError",
      value: function onFetchConfigError(err) {
        this.monitorConfigInited = true;
        this.monitorConfigFailed = true;
        this.onMonitorConfigInited();

        this._warn('获取服务端配置失败：', err);
      }
    }]);

    return MonitorWeb;
  }(Base);

  applyMixins(MonitorWeb, [ServerConfig]);

  return MonitorWeb;

})));
