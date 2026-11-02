(() => {
  // fitEngine-CgMI6p5E.js
  var e = (e15, t2) => () => (t2 || (e15((t2 = { exports: {} }).exports, t2), e15 = null), t2.exports);
  (function() {
    let e15 = document.createElement(`link`).relList;
    if (e15 && e15.supports && e15.supports(`modulepreload`)) return;
    for (let e16 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e16);
    new MutationObserver((e16) => {
      for (let t3 of e16) if (t3.type === `childList`) for (let e17 of t3.addedNodes) e17.tagName === `LINK` && e17.rel === `modulepreload` && n2(e17);
    }).observe(document, { childList: true, subtree: true });
    function t2(e16) {
      let t3 = {};
      return e16.integrity && (t3.integrity = e16.integrity), e16.referrerPolicy && (t3.referrerPolicy = e16.referrerPolicy), e16.crossOrigin === `use-credentials` ? t3.credentials = `include` : e16.crossOrigin === `anonymous` ? t3.credentials = `omit` : t3.credentials = `same-origin`, t3;
    }
    function n2(e16) {
      if (e16.ep) return;
      e16.ep = true;
      let n3 = t2(e16);
      fetch(e16.href, n3);
    }
  })();
  var t = e(((e15) => {
    function t2(e16, t3) {
      var n3 = e16.length;
      e16.push(t3);
      a: for (; 0 < n3; ) {
        var r3 = n3 - 1 >>> 1, a3 = e16[r3];
        if (0 < i2(a3, t3)) e16[r3] = t3, e16[n3] = a3, n3 = r3;
        else break a;
      }
    }
    function n2(e16) {
      return e16.length === 0 ? null : e16[0];
    }
    function r2(e16) {
      if (e16.length === 0) return null;
      var t3 = e16[0], n3 = e16.pop();
      if (n3 !== t3) {
        e16[0] = n3;
        a: for (var r3 = 0, a3 = e16.length, o3 = a3 >>> 1; r3 < o3; ) {
          var s3 = 2 * (r3 + 1) - 1, c3 = e16[s3], l3 = s3 + 1, u3 = e16[l3];
          if (0 > i2(c3, n3)) l3 < a3 && 0 > i2(u3, c3) ? (e16[r3] = u3, e16[l3] = n3, r3 = l3) : (e16[r3] = c3, e16[s3] = n3, r3 = s3);
          else if (l3 < a3 && 0 > i2(u3, n3)) e16[r3] = u3, e16[l3] = n3, r3 = l3;
          else break a;
        }
      }
      return t3;
    }
    function i2(e16, t3) {
      var n3 = e16.sortIndex - t3.sortIndex;
      return n3 === 0 ? e16.id - t3.id : n3;
    }
    if (e15.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
      var a2 = performance;
      e15.unstable_now = function() {
        return a2.now();
      };
    } else {
      var o2 = Date, s2 = o2.now();
      e15.unstable_now = function() {
        return o2.now() - s2;
      };
    }
    var c2 = [], l2 = [], u2 = 1, d2 = null, f = 3, p2 = false, m = false, h2 = false, g2 = false, _3 = typeof setTimeout == `function` ? setTimeout : null, v3 = typeof clearTimeout == `function` ? clearTimeout : null, y3 = typeof setImmediate < `u` ? setImmediate : null;
    function b3(e16) {
      for (var i3 = n2(l2); i3 !== null; ) {
        if (i3.callback === null) r2(l2);
        else if (i3.startTime <= e16) r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
        else break;
        i3 = n2(l2);
      }
    }
    function x2(e16) {
      if (h2 = false, b3(e16), !m) if (n2(c2) !== null) m = true, S2 || (S2 = true, O3());
      else {
        var t3 = n2(l2);
        t3 !== null && te3(x2, t3.startTime - e16);
      }
    }
    var S2 = false, C2 = -1, w2 = 5, T2 = -1;
    function E3() {
      return g2 ? true : !(e15.unstable_now() - T2 < w2);
    }
    function D2() {
      if (g2 = false, S2) {
        var t3 = e15.unstable_now();
        T2 = t3;
        var i3 = true;
        try {
          a: {
            m = false, h2 && (h2 = false, v3(C2), C2 = -1), p2 = true;
            var a3 = f;
            try {
              b: {
                for (b3(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && E3()); ) {
                  var o3 = d2.callback;
                  if (typeof o3 == `function`) {
                    d2.callback = null, f = d2.priorityLevel;
                    var s3 = o3(d2.expirationTime <= t3);
                    if (t3 = e15.unstable_now(), typeof s3 == `function`) {
                      d2.callback = s3, b3(t3), i3 = true;
                      break b;
                    }
                    d2 === n2(c2) && r2(c2), b3(t3);
                  } else r2(c2);
                  d2 = n2(c2);
                }
                if (d2 !== null) i3 = true;
                else {
                  var u3 = n2(l2);
                  u3 !== null && te3(x2, u3.startTime - t3), i3 = false;
                }
              }
              break a;
            } finally {
              d2 = null, f = a3, p2 = false;
            }
            i3 = void 0;
          }
        } finally {
          i3 ? O3() : S2 = false;
        }
      }
    }
    var O3;
    if (typeof y3 == `function`) O3 = function() {
      y3(D2);
    };
    else if (typeof MessageChannel < `u`) {
      var k2 = new MessageChannel(), ee = k2.port2;
      k2.port1.onmessage = D2, O3 = function() {
        ee.postMessage(null);
      };
    } else O3 = function() {
      _3(D2, 0);
    };
    function te3(t3, n3) {
      C2 = _3(function() {
        t3(e15.unstable_now());
      }, n3);
    }
    e15.unstable_IdlePriority = 5, e15.unstable_ImmediatePriority = 1, e15.unstable_LowPriority = 4, e15.unstable_NormalPriority = 3, e15.unstable_Profiling = null, e15.unstable_UserBlockingPriority = 2, e15.unstable_cancelCallback = function(e16) {
      e16.callback = null;
    }, e15.unstable_forceFrameRate = function(e16) {
      0 > e16 || 125 < e16 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w2 = 0 < e16 ? Math.floor(1e3 / e16) : 5;
    }, e15.unstable_getCurrentPriorityLevel = function() {
      return f;
    }, e15.unstable_next = function(e16) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var t3 = 3;
          break;
        default:
          t3 = f;
      }
      var n3 = f;
      f = t3;
      try {
        return e16();
      } finally {
        f = n3;
      }
    }, e15.unstable_requestPaint = function() {
      g2 = true;
    }, e15.unstable_runWithPriority = function(e16, t3) {
      switch (e16) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e16 = 3;
      }
      var n3 = f;
      f = e16;
      try {
        return t3();
      } finally {
        f = n3;
      }
    }, e15.unstable_scheduleCallback = function(r3, i3, a3) {
      var o3 = e15.unstable_now();
      switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
        case 1:
          var s3 = -1;
          break;
        case 2:
          s3 = 250;
          break;
        case 5:
          s3 = 1073741823;
          break;
        case 4:
          s3 = 1e4;
          break;
        default:
          s3 = 5e3;
      }
      return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (v3(C2), C2 = -1) : h2 = true, te3(x2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m || p2 || (m = true, S2 || (S2 = true, O3()))), r3;
    }, e15.unstable_shouldYield = E3, e15.unstable_wrapCallback = function(e16) {
      var t3 = f;
      return function() {
        var n3 = f;
        f = t3;
        try {
          return e16.apply(this, arguments);
        } finally {
          f = n3;
        }
      };
    };
  }));
  var n = e(((e15, n2) => {
    n2.exports = t();
  }));
  var r = e(((e15) => {
    var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.portal`), r2 = /* @__PURE__ */ Symbol.for(`react.fragment`), i2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), a2 = /* @__PURE__ */ Symbol.for(`react.profiler`), o2 = /* @__PURE__ */ Symbol.for(`react.consumer`), s2 = /* @__PURE__ */ Symbol.for(`react.context`), c2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), l2 = /* @__PURE__ */ Symbol.for(`react.suspense`), u2 = /* @__PURE__ */ Symbol.for(`react.memo`), d2 = /* @__PURE__ */ Symbol.for(`react.lazy`), f = /* @__PURE__ */ Symbol.for(`react.activity`), p2 = /* @__PURE__ */ Symbol.for(`react.view_transition`), m = Symbol.iterator;
    function h2(e16) {
      return typeof e16 != `object` || !e16 ? null : (e16 = m && e16[m] || e16[`@@iterator`], typeof e16 == `function` ? e16 : null);
    }
    var g2 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, _3 = Object.assign, v3 = {};
    function y3(e16, t3, n3) {
      this.props = e16, this.context = t3, this.refs = v3, this.updater = n3 || g2;
    }
    y3.prototype.isReactComponent = {}, y3.prototype.setState = function(e16, t3) {
      if (typeof e16 != `object` && typeof e16 != `function` && e16 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
      this.updater.enqueueSetState(this, e16, t3, `setState`);
    }, y3.prototype.forceUpdate = function(e16) {
      this.updater.enqueueForceUpdate(this, e16, `forceUpdate`);
    };
    function b3() {
    }
    b3.prototype = y3.prototype;
    function x2(e16, t3, n3) {
      this.props = e16, this.context = t3, this.refs = v3, this.updater = n3 || g2;
    }
    var S2 = x2.prototype = new b3();
    S2.constructor = x2, _3(S2, y3.prototype), S2.isPureReactComponent = true;
    var C2 = Array.isArray;
    function w2() {
    }
    var T2 = { H: null, A: null, T: null, S: null }, E3 = Object.prototype.hasOwnProperty;
    function D2(e16, n3, r3) {
      var i3 = r3.ref;
      return { $$typeof: t2, type: e16, key: n3, ref: i3 === void 0 ? null : i3, props: r3 };
    }
    function O3(e16, t3) {
      return D2(e16.type, t3, e16.props);
    }
    function k2(e16) {
      return typeof e16 == `object` && !!e16 && e16.$$typeof === t2;
    }
    function ee(e16) {
      var t3 = { "=": `=0`, ":": `=2` };
      return `$` + e16.replace(/[=:]/g, function(e17) {
        return t3[e17];
      });
    }
    var te3 = /\/+/g;
    function ne3(e16, t3) {
      return typeof e16 == `object` && e16 && e16.key != null ? ee(`` + e16.key) : t3.toString(36);
    }
    function re3(e16) {
      switch (e16.status) {
        case `fulfilled`:
          return e16.value;
        case `rejected`:
          throw e16.reason;
        default:
          switch (typeof e16.status == `string` ? e16.then(w2, w2) : (e16.status = `pending`, e16.then(function(t3) {
            e16.status === `pending` && (e16.status = `fulfilled`, e16.value = t3);
          }, function(t3) {
            e16.status === `pending` && (e16.status = `rejected`, e16.reason = t3);
          })), e16.status) {
            case `fulfilled`:
              return e16.value;
            case `rejected`:
              throw e16.reason;
          }
      }
      throw e16;
    }
    function ie3(e16, r3, i3, a3, o3) {
      var s3 = typeof e16;
      (s3 === `undefined` || s3 === `boolean`) && (e16 = null);
      var c3 = false;
      if (e16 === null) c3 = true;
      else switch (s3) {
        case `bigint`:
        case `string`:
        case `number`:
          c3 = true;
          break;
        case `object`:
          switch (e16.$$typeof) {
            case t2:
            case n2:
              c3 = true;
              break;
            case d2:
              return c3 = e16._init, ie3(c3(e16._payload), r3, i3, a3, o3);
          }
      }
      if (c3) return o3 = o3(e16), c3 = a3 === `` ? `.` + ne3(e16, 0) : a3, C2(o3) ? (i3 = ``, c3 != null && (i3 = c3.replace(te3, `$&/`) + `/`), ie3(o3, r3, i3, ``, function(e17) {
        return e17;
      })) : o3 != null && (k2(o3) && (o3 = O3(o3, i3 + (o3.key == null || e16 && e16.key === o3.key ? `` : (`` + o3.key).replace(te3, `$&/`) + `/`) + c3)), r3.push(o3)), 1;
      c3 = 0;
      var l3 = a3 === `` ? `.` : a3 + `:`;
      if (C2(e16)) for (var u3 = 0; u3 < e16.length; u3++) a3 = e16[u3], s3 = l3 + ne3(a3, u3), c3 += ie3(a3, r3, i3, s3, o3);
      else if (u3 = h2(e16), typeof u3 == `function`) for (e16 = u3.call(e16), u3 = 0; !(a3 = e16.next()).done; ) a3 = a3.value, s3 = l3 + ne3(a3, u3++), c3 += ie3(a3, r3, i3, s3, o3);
      else if (s3 === `object`) {
        if (typeof e16.then == `function`) return ie3(re3(e16), r3, i3, a3, o3);
        throw r3 = String(e16), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e16).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
      }
      return c3;
    }
    function ae3(e16, t3, n3) {
      if (e16 == null) return e16;
      var r3 = [], i3 = 0;
      return ie3(e16, r3, ``, ``, function(e17) {
        return t3.call(n3, e17, i3++);
      }), r3;
    }
    function oe3(e16) {
      if (e16._status === -1) {
        var t3 = e16._result, n3 = t3();
        n3.then(function(t4) {
          (e16._status === 0 || e16._status === -1) && (e16._status = 1, e16._result = t4, n3.status === void 0 && (n3.status = `fulfilled`, n3.value = t4));
        }, function(t4) {
          (e16._status === 0 || e16._status === -1) && (e16._status = 2, e16._result = t4, n3.status === void 0 && (n3.status = `rejected`, n3.reason = t4));
        }), e16._status === -1 && (e16._status = 0, e16._result = n3);
      }
      if (e16._status === 1) return e16._result.default;
      throw e16._result;
    }
    var se2 = typeof reportError == `function` ? reportError : function(e16) {
      if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
        var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e16 == `object` && e16 && typeof e16.message == `string` ? String(e16.message) : String(e16), error: e16 });
        if (!window.dispatchEvent(t3)) return;
      } else if (typeof process == `object` && typeof process.emit == `function`) {
        process.emit(`uncaughtException`, e16);
        return;
      }
      console.error(e16);
    };
    function ce3(e16) {
      var t3 = T2.T, n3 = {};
      n3.types = t3 === null ? null : t3.types, T2.T = n3;
      try {
        var r3 = e16(), i3 = T2.S;
        i3 !== null && i3(n3, r3), typeof r3 == `object` && r3 && typeof r3.then == `function` && r3.then(w2, se2);
      } catch (e17) {
        se2(e17);
      } finally {
        t3 !== null && n3.types !== null && (t3.types = n3.types), T2.T = t3;
      }
    }
    function le2(e16) {
      var t3 = T2.T;
      if (t3 !== null) {
        var n3 = t3.types;
        n3 === null ? t3.types = [e16] : n3.indexOf(e16) === -1 && n3.push(e16);
      } else ce3(le2.bind(null, e16));
    }
    var ue2 = { map: ae3, forEach: function(e16, t3, n3) {
      ae3(e16, function() {
        t3.apply(this, arguments);
      }, n3);
    }, count: function(e16) {
      var t3 = 0;
      return ae3(e16, function() {
        t3++;
      }), t3;
    }, toArray: function(e16) {
      return ae3(e16, function(e17) {
        return e17;
      }) || [];
    }, only: function(e16) {
      if (!k2(e16)) throw Error(`React.Children.only expected to receive a single React element child.`);
      return e16;
    } };
    e15.Activity = f, e15.Children = ue2, e15.Component = y3, e15.Fragment = r2, e15.Profiler = a2, e15.PureComponent = x2, e15.StrictMode = i2, e15.Suspense = l2, e15.ViewTransition = p2, e15.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T2, e15.__COMPILER_RUNTIME = { __proto__: null, c: function(e16) {
      return T2.H.useMemoCache(e16);
    } }, e15.addTransitionType = le2, e15.cache = function(e16) {
      return function() {
        return e16.apply(null, arguments);
      };
    }, e15.cacheSignal = function() {
      return null;
    }, e15.cloneElement = function(e16, t3, n3) {
      if (e16 == null) throw Error(`The argument must be a React element, but you passed ` + e16 + `.`);
      var r3 = _3({}, e16.props), i3 = e16.key;
      if (t3 != null) for (a3 in t3.key !== void 0 && (i3 = `` + t3.key), t3) !E3.call(t3, a3) || a3 === `key` || a3 === `__self` || a3 === `__source` || a3 === `ref` && t3.ref === void 0 || (r3[a3] = t3[a3]);
      var a3 = arguments.length - 2;
      if (a3 === 1) r3.children = n3;
      else if (1 < a3) {
        for (var o3 = Array(a3), s3 = 0; s3 < a3; s3++) o3[s3] = arguments[s3 + 2];
        r3.children = o3;
      }
      return D2(e16.type, i3, r3);
    }, e15.createContext = function(e16) {
      return e16 = { $$typeof: s2, _currentValue: e16, _currentValue2: e16, _threadCount: 0, Provider: null, Consumer: null }, e16.Provider = e16, e16.Consumer = { $$typeof: o2, _context: e16 }, e16;
    }, e15.createElement = function(e16, t3, n3) {
      var r3, i3 = {}, a3 = null;
      if (t3 != null) for (r3 in t3.key !== void 0 && (a3 = `` + t3.key), t3) E3.call(t3, r3) && r3 !== `key` && r3 !== `__self` && r3 !== `__source` && (i3[r3] = t3[r3]);
      var o3 = arguments.length - 2;
      if (o3 === 1) i3.children = n3;
      else if (1 < o3) {
        for (var s3 = Array(o3), c3 = 0; c3 < o3; c3++) s3[c3] = arguments[c3 + 2];
        i3.children = s3;
      }
      if (e16 && e16.defaultProps) for (r3 in o3 = e16.defaultProps, o3) i3[r3] === void 0 && (i3[r3] = o3[r3]);
      return D2(e16, a3, i3);
    }, e15.createRef = function() {
      return { current: null };
    }, e15.forwardRef = function(e16) {
      return { $$typeof: c2, render: e16 };
    }, e15.isValidElement = k2, e15.lazy = function(e16) {
      return { $$typeof: d2, _payload: { _status: -1, _result: e16 }, _init: oe3 };
    }, e15.memo = function(e16, t3) {
      return { $$typeof: u2, type: e16, compare: t3 === void 0 ? null : t3 };
    }, e15.startTransition = ce3, e15.unstable_useCacheRefresh = function() {
      return T2.H.useCacheRefresh();
    }, e15.use = function(e16) {
      return T2.H.use(e16);
    }, e15.useActionState = function(e16, t3, n3) {
      return T2.H.useActionState(e16, t3, n3);
    }, e15.useCallback = function(e16, t3) {
      return T2.H.useCallback(e16, t3);
    }, e15.useContext = function(e16) {
      return T2.H.useContext(e16);
    }, e15.useDebugValue = function() {
    }, e15.useDeferredValue = function(e16, t3) {
      return T2.H.useDeferredValue(e16, t3);
    }, e15.useEffect = function(e16, t3) {
      return T2.H.useEffect(e16, t3);
    }, e15.useEffectEvent = function(e16) {
      return T2.H.useEffectEvent(e16);
    }, e15.useId = function() {
      return T2.H.useId();
    }, e15.useImperativeHandle = function(e16, t3, n3) {
      return T2.H.useImperativeHandle(e16, t3, n3);
    }, e15.useInsertionEffect = function(e16, t3) {
      return T2.H.useInsertionEffect(e16, t3);
    }, e15.useLayoutEffect = function(e16, t3) {
      return T2.H.useLayoutEffect(e16, t3);
    }, e15.useMemo = function(e16, t3) {
      return T2.H.useMemo(e16, t3);
    }, e15.useOptimistic = function(e16, t3) {
      return T2.H.useOptimistic(e16, t3);
    }, e15.useReducer = function(e16, t3, n3) {
      return T2.H.useReducer(e16, t3, n3);
    }, e15.useRef = function(e16) {
      return T2.H.useRef(e16);
    }, e15.useState = function(e16) {
      return T2.H.useState(e16);
    }, e15.useSyncExternalStore = function(e16, t3, n3) {
      return T2.H.useSyncExternalStore(e16, t3, n3);
    }, e15.useTransition = function() {
      return T2.H.useTransition();
    }, e15.version = `19.3.0`;
  }));
  var i = e(((e15, t2) => {
    t2.exports = r();
  }));
  var a = e(((e15) => {
    var t2 = i();
    function n2(e16) {
      var t3 = `https://react.dev/errors/` + e16;
      if (1 < arguments.length) {
        t3 += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
      }
      return `Minified React error #` + e16 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function r2() {
    }
    var a2 = { d: { f: r2, r: function() {
      throw Error(n2(522));
    }, D: r2, C: r2, L: r2, m: r2, X: r2, S: r2, M: r2 }, p: 0, findDOMNode: null }, o2 = /* @__PURE__ */ Symbol.for(`react.portal`), s2 = /* @__PURE__ */ Symbol.for(`react.recoverable`), c2 = /* @__PURE__ */ Symbol.for(`react.optimistic_key`);
    function l2(e16, t3, n3) {
      var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: o2, key: r3 == null ? null : r3 === c2 ? c2 : `` + r3, children: e16, containerInfo: t3, implementation: n3 };
    }
    var u2 = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d2(e16, t3) {
      if (e16 === `font`) return ``;
      if (typeof t3 == `string`) return t3 === `use-credentials` ? t3 : ``;
    }
    e15.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a2, e15.browser = function(e16) {
      return { $$typeof: s2, _reason: e16 };
    }, e15.createPortal = function(e16, t3) {
      var r3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11) throw Error(n2(299));
      return l2(e16, t3, null, r3);
    }, e15.flushSync = function(e16) {
      var t3 = u2.T, n3 = a2.p;
      try {
        if (u2.T = null, a2.p = 2, e16) return e16();
      } finally {
        u2.T = t3, a2.p = n3, a2.d.f();
      }
    }, e15.preconnect = function(e16, t3) {
      typeof e16 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, a2.d.C(e16, t3));
    }, e15.prefetchDNS = function(e16) {
      typeof e16 == `string` && a2.d.D(e16);
    }, e15.preinit = function(e16, t3) {
      if (typeof e16 == `string` && t3 && typeof t3.as == `string`) {
        var n3 = t3.as, r3 = d2(n3, t3.crossOrigin), i2 = typeof t3.integrity == `string` ? t3.integrity : void 0, o3 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
        n3 === `style` ? a2.d.S(e16, typeof t3.precedence == `string` ? t3.precedence : void 0, { crossOrigin: r3, integrity: i2, fetchPriority: o3 }) : n3 === `script` && a2.d.X(e16, { crossOrigin: r3, integrity: i2, fetchPriority: o3, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
      }
    }, e15.preinitModule = function(e16, t3) {
      if (typeof e16 == `string`) if (typeof t3 == `object` && t3) {
        if (t3.as == null || t3.as === `script`) {
          var n3 = d2(t3.as, t3.crossOrigin);
          a2.d.M(e16, { crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
        }
      } else t3 ?? a2.d.M(e16);
    }, e15.preload = function(e16, t3) {
      if (typeof e16 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
        var n3 = t3.as, r3 = d2(n3, t3.crossOrigin);
        a2.d.L(e16, n3, { crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0 });
      }
    }, e15.preloadModule = function(e16, t3) {
      if (typeof e16 == `string`) if (t3) {
        var n3 = d2(t3.as, t3.crossOrigin);
        a2.d.m(e16, { as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
      } else a2.d.m(e16);
    }, e15.requestFormReset = function(e16) {
      a2.d.r(e16);
    }, e15.unstable_batchedUpdates = function(e16, t3) {
      return e16(t3);
    }, e15.useFormState = function(e16, t3, n3) {
      return u2.H.useFormState(e16, t3, n3);
    }, e15.useFormStatus = function() {
      return u2.H.useHostTransitionStatus();
    }, e15.version = `19.3.0`;
  }));
  var o = e(((e15, t2) => {
    function n2() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e16) {
        console.error(e16);
      }
    }
    n2(), t2.exports = a();
  }));
  var s = e(((e15) => {
    var t2 = n(), r2 = i(), a2 = o();
    function s2(e16) {
      var t3 = `https://react.dev/errors/` + e16;
      if (1 < arguments.length) {
        t3 += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n2 = 2; n2 < arguments.length; n2++) t3 += `&args[]=` + encodeURIComponent(arguments[n2]);
      }
      return `Minified React error #` + e16 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function c2(e16) {
      return !(!e16 || e16.nodeType !== 1 && e16.nodeType !== 9 && e16.nodeType !== 11);
    }
    function l2(e16) {
      for (var t3 = e16, n2 = t3; n2 && !n2.alternate; ) t3 = n2, t3.flags & 4098 && (e16 = t3.return), n2 = t3.return;
      for (; t3.return; ) t3 = t3.return;
      return t3.tag === 3 ? e16 : null;
    }
    function u2(e16) {
      if (e16.tag === 13) {
        var t3 = e16.memoizedState;
        if (t3 === null && (e16 = e16.alternate, e16 !== null && (t3 = e16.memoizedState)), t3 !== null) return t3.dehydrated;
      }
      return null;
    }
    function d2(e16) {
      if (e16.tag === 31) {
        var t3 = e16.memoizedState;
        if (t3 === null && (e16 = e16.alternate, e16 !== null && (t3 = e16.memoizedState)), t3 !== null) return t3.dehydrated;
      }
      return null;
    }
    function f(e16) {
      if (l2(e16) !== e16) throw Error(s2(188));
    }
    function p2(e16) {
      var t3 = e16.alternate;
      if (!t3) {
        if (t3 = l2(e16), t3 === null) throw Error(s2(188));
        return t3 === e16 ? e16 : null;
      }
      for (var n2 = e16, r3 = t3; ; ) {
        var i2 = n2.return;
        if (i2 === null) break;
        var a3 = i2.alternate;
        if (a3 === null) {
          if (r3 = i2.return, r3 !== null) {
            n2 = r3;
            continue;
          }
          break;
        }
        if (i2.child === a3.child) {
          for (a3 = i2.child; a3; ) {
            if (a3 === n2) return f(i2), e16;
            if (a3 === r3) return f(i2), t3;
            a3 = a3.sibling;
          }
          throw Error(s2(188));
        }
        if (n2.return !== r3.return) n2 = i2, r3 = a3;
        else {
          for (var o2 = false, c3 = i2.child; c3; ) {
            if (c3 === n2) {
              o2 = true, n2 = i2, r3 = a3;
              break;
            }
            if (c3 === r3) {
              o2 = true, r3 = i2, n2 = a3;
              break;
            }
            c3 = c3.sibling;
          }
          if (!o2) {
            for (c3 = a3.child; c3; ) {
              if (c3 === n2) {
                o2 = true, n2 = a3, r3 = i2;
                break;
              }
              if (c3 === r3) {
                o2 = true, r3 = a3, n2 = i2;
                break;
              }
              c3 = c3.sibling;
            }
            if (!o2) throw Error(s2(189));
          }
        }
        if (n2.alternate !== r3) throw Error(s2(190));
      }
      if (n2.tag !== 3) throw Error(s2(188));
      return n2.stateNode.current === n2 ? e16 : t3;
    }
    function m(e16) {
      var t3 = e16.tag;
      if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e16;
      for (e16 = e16.child; e16 !== null; ) {
        if (t3 = m(e16), t3 !== null) return t3;
        e16 = e16.sibling;
      }
      return null;
    }
    function h2(e16, t3, n2, r3, i2, a3) {
      for (; e16 !== null; ) {
        if ((e16.tag === 5 || e16.tag === 27 || e16.tag === 6) && n2(e16, r3, i2, a3) || (e16.tag !== 22 || e16.memoizedState === null) && (t3 || e16.tag !== 5 && e16.tag !== 27) && h2(e16.child, t3, n2, r3, i2, a3)) return true;
        e16 = e16.sibling;
      }
      return false;
    }
    function g2(e16) {
      for (e16 = e16.return; e16 !== null; ) {
        if (e16.tag === 3 || e16.tag === 5 || e16.tag === 27) return e16;
        e16 = e16.return;
      }
      return null;
    }
    function _3(e16) {
      var t3 = false;
      for (e16 = e16.return; e16 !== null && (e16.tag === 4 && (t3 = true), !(e16.tag === 3 || e16.tag === 5 || e16.tag === 27)); ) e16 = e16.return;
      return t3;
    }
    function v3(e16) {
      var t3 = [null, null], n2 = g2(e16);
      return n2 === null || y3(t3, e16, n2.child, { foundSelf: false }), t3;
    }
    function y3(e16, t3, n2, r3) {
      for (; n2 !== null; ) {
        if (n2 === t3) r3.foundSelf = true;
        else if (n2.tag === 5 || n2.tag === 27 || n2.tag === 6) {
          if (r3.foundSelf) return e16[1] = n2, true;
          e16[0] = n2;
        } else if ((n2.tag !== 22 || n2.memoizedState === null) && y3(e16, t3, n2.child, r3)) return true;
        n2 = n2.sibling;
      }
      return false;
    }
    function b3(e16) {
      switch (e16.tag) {
        case 5:
        case 27:
        case 6:
          return e16.stateNode;
        case 3:
          return e16.stateNode.containerInfo;
        default:
          throw Error(s2(559));
      }
    }
    var x2 = null, S2 = null;
    function C2(e16, t3, n2) {
      return e16 === n2 ? true : e16 === t3 ? (x2 = e16, true) : false;
    }
    function w2(e16, t3, n2) {
      return e16 === n2 ? (S2 = e16, false) : e16 === t3 ? (S2 !== null && (x2 = e16), true) : false;
    }
    function T2(e16) {
      if (e16 === null) return null;
      do
        e16 = e16 === null ? null : e16.return;
      while (e16 && e16.tag !== 5 && e16.tag !== 27 && e16.tag !== 3);
      return e16 || null;
    }
    function E3(e16, t3, n2) {
      for (var r3 = 0, i2 = e16; i2; i2 = n2(i2)) r3++;
      i2 = 0;
      for (var a3 = t3; a3; a3 = n2(a3)) i2++;
      for (; 0 < r3 - i2; ) e16 = n2(e16), r3--;
      for (; 0 < i2 - r3; ) t3 = n2(t3), i2--;
      for (; r3--; ) {
        if (e16 === t3 || t3 !== null && e16 === t3.alternate) return e16;
        e16 = n2(e16), t3 = n2(t3);
      }
      return null;
    }
    var D2 = Object.assign, O3 = /* @__PURE__ */ Symbol.for(`react.element`), k2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), ee = /* @__PURE__ */ Symbol.for(`react.portal`), te3 = /* @__PURE__ */ Symbol.for(`react.fragment`), ne3 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), re3 = /* @__PURE__ */ Symbol.for(`react.profiler`), ie3 = /* @__PURE__ */ Symbol.for(`react.consumer`), ae3 = /* @__PURE__ */ Symbol.for(`react.context`), oe3 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), se2 = /* @__PURE__ */ Symbol.for(`react.suspense`), ce3 = /* @__PURE__ */ Symbol.for(`react.suspense_list`), le2 = /* @__PURE__ */ Symbol.for(`react.memo`), ue2 = /* @__PURE__ */ Symbol.for(`react.lazy`), de3 = /* @__PURE__ */ Symbol.for(`react.activity`), fe2 = /* @__PURE__ */ Symbol.for(`react.legacy_hidden`), pe3 = /* @__PURE__ */ Symbol.for(`react.memo_cache_sentinel`), me3 = /* @__PURE__ */ Symbol.for(`react.view_transition`), he3 = /* @__PURE__ */ Symbol.for(`react.recoverable`), ge3 = Symbol.iterator;
    function _e3(e16) {
      return typeof e16 != `object` || !e16 ? null : (e16 = ge3 && e16[ge3] || e16[`@@iterator`], typeof e16 == `function` ? e16 : null);
    }
    var ve3 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
    function ye3(e16) {
      if (e16 == null) return null;
      if (typeof e16 == `function`) return e16.$$typeof === ve3 ? null : e16.displayName || e16.name || null;
      if (typeof e16 == `string`) return e16;
      switch (e16) {
        case te3:
          return `Fragment`;
        case re3:
          return `Profiler`;
        case ne3:
          return `StrictMode`;
        case se2:
          return `Suspense`;
        case ce3:
          return `SuspenseList`;
        case de3:
          return `Activity`;
        case me3:
          return `ViewTransition`;
      }
      if (typeof e16 == `object`) switch (e16.$$typeof) {
        case ee:
          return `Portal`;
        case ae3:
          return e16.displayName || `Context`;
        case ie3:
          return (e16._context.displayName || `Context`) + `.Consumer`;
        case oe3:
          var t3 = e16.render;
          return e16 = e16.displayName, e16 ||= (e16 = t3.displayName || t3.name || ``, e16 === `` ? `ForwardRef` : `ForwardRef(` + e16 + `)`), e16;
        case le2:
          return t3 = e16.displayName || null, t3 === null ? ye3(e16.type) || `Memo` : t3;
        case ue2:
          t3 = e16._payload, e16 = e16._init;
          try {
            return ye3(e16(t3));
          } catch {
          }
      }
      return null;
    }
    var be3 = Array.isArray, A3 = r2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j3 = a2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xe3 = { pending: false, data: null, method: null, action: null }, M3 = [], Se3 = -1;
    function Ce3(e16) {
      return { current: e16 };
    }
    function we3(e16) {
      0 > Se3 || (e16.current = M3[Se3], M3[Se3] = null, Se3--);
    }
    function N3(e16, t3) {
      Se3++, M3[Se3] = e16.current, e16.current = t3;
    }
    var Te3 = Ce3(null), Ee3 = Ce3(null), P3 = Ce3(null), F3 = Ce3(null);
    function De3(e16, t3) {
      switch (N3(P3, t3), N3(Ee3, e16), N3(Te3, null), t3.nodeType) {
        case 9:
        case 11:
          e16 = (e16 = t3.documentElement) && (e16 = e16.namespaceURI) ? up(e16) : 0;
          break;
        default:
          if (e16 = t3.tagName, t3 = t3.namespaceURI) t3 = up(t3), e16 = dp(t3, e16);
          else switch (e16) {
            case `svg`:
              e16 = 1;
              break;
            case `math`:
              e16 = 2;
              break;
            default:
              e16 = 0;
          }
      }
      we3(Te3), N3(Te3, e16);
    }
    function Oe3() {
      we3(Te3), we3(Ee3), we3(P3);
    }
    function ke3(e16) {
      var t3 = e16.memoizedState;
      t3 !== null && (sh._currentValue = t3.memoizedState, N3(F3, e16)), t3 = Te3.current;
      var n2 = dp(t3, e16.type);
      t3 !== n2 && (N3(Ee3, e16), N3(Te3, n2));
    }
    function Ae3(e16) {
      Ee3.current === e16 && (we3(Te3), we3(Ee3)), F3.current === e16 && (we3(F3), sh._currentValue = xe3);
    }
    var je3, Me3;
    function Ne3(e16) {
      if (je3 === void 0) try {
        throw Error();
      } catch (e17) {
        var t3 = e17.stack.trim().match(/\n( *(at )?)/);
        je3 = t3 && t3[1] || ``, Me3 = -1 < e17.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e17.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
      }
      return `
` + je3 + e16 + Me3;
    }
    var Pe3 = false;
    function Fe3(e16, t3) {
      if (!e16 || Pe3) return ``;
      Pe3 = true;
      var n2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r3 = { DetermineComponentFrameRoot: function() {
          try {
            if (t3) {
              var n3 = function() {
                throw Error();
              };
              if (Object.defineProperty(n3.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(n3, []);
                } catch (e17) {
                  var r4 = e17;
                }
                Reflect.construct(e16, [], n3);
              } else {
                try {
                  n3.call();
                } catch (e17) {
                  r4 = e17;
                }
                n3 = false;
                try {
                  var i3 = Object.getOwnPropertyDescriptor(e16.prototype, `props`);
                  Object.defineProperty(e16.prototype, "props", { configurable: true, set: function() {
                    throw Error();
                  } }), n3 = true, new e16();
                } finally {
                  n3 && (i3 === void 0 ? delete e16.prototype.props : Object.defineProperty(e16.prototype, "props", i3));
                }
              }
            } else {
              try {
                throw Error();
              } catch (e17) {
                r4 = e17;
              }
              (n3 = e16()) && typeof n3.catch == `function` && n3.catch(function() {
              });
            }
          } catch (e17) {
            if (e17 && r4 && typeof e17.stack == `string`) return [e17.stack, r4.stack];
          }
          return [null, null];
        } };
        r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i2 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
        i2 && i2.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
        var a3 = r3.DetermineComponentFrameRoot(), o2 = a3[0], s3 = a3[1];
        if (o2 && s3) {
          var c3 = o2.split(`
`), l3 = s3.split(`
`);
          for (i2 = r3 = 0; r3 < c3.length && !c3[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
          for (; i2 < l3.length && !l3[i2].includes(`DetermineComponentFrameRoot`); ) i2++;
          if (r3 === c3.length || i2 === l3.length) for (r3 = c3.length - 1, i2 = l3.length - 1; 1 <= r3 && 0 <= i2 && c3[r3] !== l3[i2]; ) i2--;
          for (; 1 <= r3 && 0 <= i2; r3--, i2--) if (c3[r3] !== l3[i2]) {
            if (r3 !== 1 || i2 !== 1) do
              if (r3--, i2--, 0 > i2 || c3[r3] !== l3[i2]) {
                var u3 = `
` + c3[r3].replace(` at new `, ` at `);
                return e16.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e16.displayName)), u3;
              }
            while (1 <= r3 && 0 <= i2);
            break;
          }
        }
      } finally {
        Pe3 = false, Error.prepareStackTrace = n2;
      }
      return (n2 = e16 ? e16.displayName || e16.name : ``) ? Ne3(n2) : ``;
    }
    function Ie3(e16, t3) {
      switch (e16.tag) {
        case 26:
        case 27:
        case 5:
          return Ne3(e16.type);
        case 16:
          return Ne3(`Lazy`);
        case 13:
          return e16.child !== t3 && t3 !== null ? Ne3(`Suspense Fallback`) : Ne3(`Suspense`);
        case 19:
          return Ne3(`SuspenseList`);
        case 0:
        case 15:
          return Fe3(e16.type, false);
        case 11:
          return Fe3(e16.type.render, false);
        case 1:
          return Fe3(e16.type, true);
        case 31:
          return Ne3(`Activity`);
        case 30:
          return Ne3(`ViewTransition`);
        default:
          return ``;
      }
    }
    function Le3(e16) {
      try {
        var t3 = ``, n2 = null;
        do
          t3 += Ie3(e16, n2), n2 = e16, e16 = e16.return;
        while (e16);
        return t3;
      } catch (e17) {
        return `
Error generating stack: ` + e17.message + `
` + e17.stack;
      }
    }
    var Re3 = Object.prototype.hasOwnProperty, ze3 = t2.unstable_scheduleCallback, Be3 = t2.unstable_cancelCallback, Ve3 = t2.unstable_shouldYield, He3 = t2.unstable_requestPaint, Ue3 = t2.unstable_now, We3 = t2.unstable_getCurrentPriorityLevel, Ge3 = t2.unstable_ImmediatePriority, Ke3 = t2.unstable_UserBlockingPriority, qe3 = t2.unstable_NormalPriority, Je3 = t2.unstable_LowPriority, Ye3 = t2.unstable_IdlePriority, Xe3 = t2.log, Ze3 = t2.unstable_setDisableYieldValue, Qe3 = null, $e3 = null;
    function et3(e16) {
      if (typeof Xe3 == `function` && Ze3(e16), $e3 && typeof $e3.setStrictMode == `function`) try {
        $e3.setStrictMode(Qe3, e16);
      } catch {
      }
    }
    var tt3 = Math.clz32 ? Math.clz32 : it3, nt3 = Math.log, rt3 = Math.LN2;
    function it3(e16) {
      return e16 >>>= 0, e16 === 0 ? 32 : 31 - (nt3(e16) / rt3 | 0) | 0;
    }
    var at3 = 256, ot3 = 262144, st3 = 4194304;
    function ct3(e16) {
      var t3 = e16 & 42;
      if (t3 !== 0) return t3;
      switch (e16 & -e16) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e16 & -e16;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e16 & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e16 & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e16;
      }
    }
    function lt3(e16, t3, n2) {
      var r3 = e16.pendingLanes;
      if (r3 === 0) return 0;
      var i2 = 0, a3 = e16.suspendedLanes, o2 = e16.pingedLanes;
      e16 = e16.warmLanes;
      var s3 = r3 & 134217727;
      return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o2 === 0 ? n2 || (n2 = r3 & ~e16, n2 !== 0 && (i2 = ct3(n2))) : i2 = ct3(o2) : i2 = ct3(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o2 &= s3, o2 === 0 ? n2 || (n2 = s3 & ~e16, n2 !== 0 && (i2 = ct3(n2))) : i2 = ct3(o2)) : i2 = ct3(r3)), i2 === 0 ? 0 : t3 !== 0 && t3 !== i2 && (t3 & a3) === 0 && (a3 = i2 & -i2, n2 = t3 & -t3, a3 >= n2 || a3 === 32 && n2 & 4194048) ? t3 : i2;
    }
    function ut3(e16, t3) {
      return (e16.pendingLanes & ~(e16.suspendedLanes & ~e16.pingedLanes) & t3) === 0;
    }
    function dt3(e16, t3) {
      t3 & 8 && (t3 |= t3 & 32);
      var n2 = e16.entangledLanes;
      if (n2 !== 0) for (e16 = e16.entanglements, n2 &= t3; 0 < n2; ) {
        var r3 = 31 - tt3(n2), i2 = 1 << r3;
        t3 |= e16[r3], n2 &= ~i2;
      }
      return t3;
    }
    function ft3(e16, t3) {
      switch (e16) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t3 + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t3 + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function pt3() {
      var e16 = st3;
      return st3 <<= 1, !(st3 & 62914560) && (st3 = 4194304), e16;
    }
    function mt3(e16) {
      for (var t3 = [], n2 = 0; 31 > n2; n2++) t3.push(e16);
      return t3;
    }
    function ht3(e16, t3) {
      e16.pendingLanes |= t3, t3 !== 268435456 && (e16.suspendedLanes = 0, e16.pingedLanes = 0, e16.warmLanes = 0);
    }
    function gt3(e16, t3, n2, r3, i2, a3) {
      var o2 = e16.pendingLanes;
      e16.pendingLanes = n2, e16.suspendedLanes = 0, e16.pingedLanes = 0, e16.warmLanes = 0, e16.expiredLanes &= n2, e16.entangledLanes &= n2, e16.errorRecoveryDisabledLanes &= n2, e16.shellSuspendCounter = 0;
      var s3 = e16.entanglements, c3 = e16.expirationTimes, l3 = e16.hiddenUpdates;
      for (n2 = o2 & ~n2; 0 < n2; ) {
        var u3 = 31 - tt3(n2), d3 = 1 << u3;
        s3[u3] = 0, c3[u3] = -1;
        var f2 = l3[u3];
        if (f2 !== null) for (l3[u3] = null, u3 = 0; u3 < f2.length; u3++) {
          var p3 = f2[u3];
          p3 !== null && (p3.lane &= -536870913);
        }
        n2 &= ~d3;
      }
      r3 !== 0 && _t3(e16, r3, 0), a3 !== 0 && i2 === 0 && e16.tag !== 0 && (e16.suspendedLanes |= a3 & ~(o2 & ~t3));
    }
    function _t3(e16, t3, n2) {
      e16.pendingLanes |= t3, e16.suspendedLanes &= ~t3;
      var r3 = 31 - tt3(t3);
      e16.entangledLanes |= t3, e16.entanglements[r3] = e16.entanglements[r3] | 1073741824 | n2 & 261930;
    }
    function vt3(e16, t3) {
      var n2 = e16.entangledLanes |= t3;
      for (e16 = e16.entanglements; n2; ) {
        var r3 = 31 - tt3(n2), i2 = 1 << r3;
        i2 & t3 | e16[r3] & t3 && (e16[r3] |= t3), n2 &= ~i2;
      }
    }
    function yt3(e16, t3) {
      var n2 = t3 & -t3;
      return n2 = n2 & 42 ? 1 : bt3(n2), (n2 & (e16.suspendedLanes | t3)) === 0 ? n2 : 0;
    }
    function bt3(e16) {
      switch (e16) {
        case 2:
          e16 = 1;
          break;
        case 8:
          e16 = 4;
          break;
        case 32:
          e16 = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e16 = 128;
          break;
        case 268435456:
          e16 = 134217728;
          break;
        default:
          e16 = 0;
      }
      return e16;
    }
    function xt3(e16) {
      return e16 &= -e16, 2 < e16 ? 8 < e16 ? e16 & 134217727 ? 32 : 268435456 : 8 : 2;
    }
    function St3() {
      var e16 = j3.p;
      return e16 === 0 ? (e16 = window.event, e16 === void 0 ? 32 : Ch(e16.type)) : e16;
    }
    function Ct3(e16, t3) {
      var n2 = j3.p;
      try {
        return j3.p = e16, t3();
      } finally {
        j3.p = n2;
      }
    }
    var wt3 = Math.random().toString(36).slice(2), Tt3 = `__reactFiber$` + wt3, Et3 = `__reactProps$` + wt3, Dt3 = `__reactContainer$` + wt3, Ot3 = `__reactEvents$` + wt3, kt3 = `__reactListeners$` + wt3, At3 = `__reactHandles$` + wt3, jt3 = `__reactResources$` + wt3, Mt3 = `__reactMarker$` + wt3, Nt3 = `__reactLoad$` + wt3;
    function Pt3(e16) {
      delete e16[Tt3], delete e16[Et3], delete e16[kt3], delete e16[At3];
    }
    function Ft3(e16) {
      var t3;
      if (t3 = e16[Tt3]) return t3;
      for (var n2 = e16.parentNode; n2; ) {
        if (t3 = n2[Dt3] || n2[Tt3]) {
          if (n2 = t3.alternate, t3.child !== null || n2 !== null && n2.child !== null) for (e16 = fm(e16); e16 !== null; ) {
            if (n2 = e16[Tt3]) return n2;
            e16 = fm(e16);
          }
          return t3;
        }
        e16 = n2, n2 = e16.parentNode;
      }
      return null;
    }
    function It3(e16) {
      if (e16 = e16[Tt3] || e16[Dt3]) {
        var t3 = e16.tag;
        if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3) return e16;
      }
      return null;
    }
    function Lt3(e16) {
      var t3 = e16.tag;
      if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e16.stateNode;
      throw Error(s2(33));
    }
    function Rt3(e16) {
      var t3 = e16[jt3];
      return t3 ||= e16[jt3] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }, t3;
    }
    function zt3(e16) {
      e16[Mt3] = true;
    }
    function Bt3(e16) {
      e16[Nt3] = void 0;
    }
    var Vt3 = /* @__PURE__ */ new Set(), Ht3 = {};
    function Ut3(e16, t3) {
      Wt3(e16, t3), Wt3(e16 + `Capture`, t3);
    }
    function Wt3(e16, t3) {
      for (Ht3[e16] = t3, e16 = 0; e16 < t3.length; e16++) Vt3.add(t3[e16]);
    }
    var Gt3 = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), Kt3 = {}, qt3 = {};
    function Jt3(e16) {
      return Re3.call(qt3, e16) ? true : Re3.call(Kt3, e16) ? false : Gt3.test(e16) ? qt3[e16] = true : (Kt3[e16] = true, false);
    }
    var I3 = false;
    function Yt3() {
      var e16 = I3;
      return I3 = false, e16;
    }
    function Xt3(e16, t3, n2) {
      if (Jt3(t3)) if (n2 === null) e16.removeAttribute(t3);
      else {
        switch (typeof n2) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e16.removeAttribute(t3);
            return;
          case `boolean`:
            var r3 = t3.toLowerCase().slice(0, 5);
            if (r3 !== `data-` && r3 !== `aria-`) {
              e16.removeAttribute(t3);
              return;
            }
        }
        e16.setAttribute(t3, n2);
      }
    }
    function Zt3(e16, t3, n2) {
      if (n2 === null) e16.removeAttribute(t3);
      else {
        switch (typeof n2) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e16.removeAttribute(t3);
            return;
        }
        e16.setAttribute(t3, n2);
      }
    }
    function Qt3(e16, t3, n2, r3) {
      if (r3 === null) e16.removeAttribute(n2);
      else {
        switch (typeof r3) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e16.removeAttribute(n2);
            return;
        }
        e16.setAttributeNS(t3, n2, r3);
      }
    }
    function $t3(e16) {
      switch (typeof e16) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e16;
        case `object`:
          return e16;
        default:
          return ``;
      }
    }
    function en3(e16) {
      var t3 = e16.type;
      return (e16 = e16.nodeName) && e16.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
    }
    function tn3(e16, t3, n2) {
      var r3 = Object.getOwnPropertyDescriptor(e16.constructor.prototype, t3);
      if (!e16.hasOwnProperty(t3) && r3 !== void 0 && typeof r3.get == `function` && typeof r3.set == `function`) {
        var i2 = r3.get, a3 = r3.set;
        return Object.defineProperty(e16, t3, { configurable: true, get: function() {
          return i2.call(this);
        }, set: function(e17) {
          n2 = `` + e17, a3.call(this, e17);
        } }), Object.defineProperty(e16, t3, { enumerable: r3.enumerable }), { getValue: function() {
          return n2;
        }, setValue: function(e17) {
          n2 = `` + e17;
        }, stopTracking: function() {
          e16._valueTracker = null, delete e16[t3];
        } };
      }
    }
    function nn2(e16) {
      if (!e16._valueTracker) {
        var t3 = en3(e16) ? `checked` : `value`;
        e16._valueTracker = tn3(e16, t3, `` + e16[t3]);
      }
    }
    function rn2(e16) {
      if (!e16) return false;
      var t3 = e16._valueTracker;
      if (!t3) return true;
      var n2 = t3.getValue(), r3 = ``;
      return e16 && (r3 = en3(e16) ? e16.checked ? `true` : `false` : e16.value), e16 = r3, e16 === n2 ? false : (t3.setValue(e16), true);
    }
    var an2 = /[\n"\\]/g;
    function on2(e16) {
      return e16.replace(an2, function(e17) {
        return `\\` + e17.charCodeAt(0).toString(16) + ` `;
      });
    }
    function sn2(e16, t3, n2, r3, i2, a3, o2, s3) {
      e16.name = ``, o2 != null && typeof o2 != `function` && typeof o2 != `symbol` && typeof o2 != `boolean` ? e16.type = o2 : e16.removeAttribute(`type`), t3 == null ? o2 !== `submit` && o2 !== `reset` || e16.removeAttribute(`value`) : o2 === `number` ? (t3 === 0 && e16.value === `` || e16.value != t3) && (e16.value = `` + $t3(t3)) : e16.value !== `` + $t3(t3) && (e16.value = `` + $t3(t3)), t3 == null ? n2 == null ? r3 != null && e16.removeAttribute(`value`) : ln2(e16, $t3(n2)) : o2 === `number` && e16.value == t3 ? ln2(e16, $t3(e16.value)) : ln2(e16, $t3(t3)), i2 == null && a3 != null && (e16.defaultChecked = !!a3), i2 != null && (e16.checked = i2 && typeof i2 != `function` && typeof i2 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e16.name = `` + $t3(s3) : e16.removeAttribute(`name`);
    }
    function cn2(e16, t3, n2, r3, i2, a3, o2, s3) {
      if (a3 != null && typeof a3 != `function` && typeof a3 != `symbol` && typeof a3 != `boolean` && (e16.type = a3), t3 != null || n2 != null) {
        if (!(a3 !== `submit` && a3 !== `reset` || t3 != null)) {
          nn2(e16);
          return;
        }
        n2 = n2 == null ? `` : `` + $t3(n2), t3 = t3 == null ? n2 : `` + $t3(t3), s3 || t3 === e16.value || (e16.value = t3), e16.defaultValue = t3;
      }
      r3 ??= i2, r3 = typeof r3 != `function` && typeof r3 != `symbol` && !!r3, e16.checked = s3 ? e16.checked : !!r3, e16.defaultChecked = !!r3, o2 != null && typeof o2 != `function` && typeof o2 != `symbol` && typeof o2 != `boolean` && (e16.name = o2), nn2(e16);
    }
    function ln2(e16, t3) {
      e16.defaultValue !== `` + t3 && (e16.defaultValue = `` + t3);
    }
    function un2(e16, t3, n2, r3) {
      if (e16 = e16.options, t3) {
        t3 = {};
        for (var i2 = 0; i2 < n2.length; i2++) t3[`$` + n2[i2]] = true;
        for (n2 = 0; n2 < e16.length; n2++) i2 = t3.hasOwnProperty(`$` + e16[n2].value), e16[n2].selected !== i2 && (e16[n2].selected = i2), i2 && r3 && (e16[n2].defaultSelected = true);
      } else {
        for (n2 = `` + $t3(n2), t3 = null, i2 = 0; i2 < e16.length; i2++) {
          if (e16[i2].value === n2) {
            e16[i2].selected = true, r3 && (e16[i2].defaultSelected = true);
            return;
          }
          t3 !== null || e16[i2].disabled || (t3 = e16[i2]);
        }
        t3 !== null && (t3.selected = true);
      }
    }
    function dn2(e16, t3, n2) {
      if (t3 != null && (t3 = `` + $t3(t3), t3 !== e16.value && (e16.value = t3), n2 == null)) {
        e16.defaultValue !== t3 && (e16.defaultValue = t3);
        return;
      }
      e16.defaultValue = n2 == null ? `` : `` + $t3(n2);
    }
    function fn2(e16, t3, n2, r3) {
      if (t3 == null) {
        if (r3 != null) {
          if (n2 != null) throw Error(s2(92));
          if (be3(r3)) {
            if (1 < r3.length) throw Error(s2(93));
            r3 = r3[0];
          }
          n2 = r3;
        }
        n2 ??= ``, t3 = n2;
      }
      n2 = $t3(t3), e16.defaultValue = n2, r3 = e16.textContent, r3 === n2 && r3 !== `` && r3 !== null && (e16.value = r3), nn2(e16);
    }
    function pn2(e16, t3) {
      if (t3) {
        var n2 = e16.firstChild;
        if (n2 && n2 === e16.lastChild && n2.nodeType === 3) {
          n2.nodeValue = t3;
          return;
        }
      }
      e16.textContent = t3;
    }
    var mn2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
    function hn2(e16, t3, n2) {
      var r3 = t3.indexOf(`--`) === 0;
      n2 == null || typeof n2 == `boolean` || n2 === `` ? r3 ? e16.setProperty(t3, ``) : t3 === `float` ? e16.cssFloat = `` : e16[t3] = `` : r3 ? e16.setProperty(t3, n2) : typeof n2 != `number` || n2 === 0 || mn2.has(t3) ? t3 === `float` ? e16.cssFloat = n2 : e16[t3] = (`` + n2).trim() : e16[t3] = n2 + `px`;
    }
    function gn2(e16, t3, n2) {
      if (t3 != null && typeof t3 != `object`) throw Error(s2(62));
      if (e16 = e16.style, n2 != null) {
        for (var r3 in n2) !n2.hasOwnProperty(r3) || t3 != null && t3.hasOwnProperty(r3) || (r3.indexOf(`--`) === 0 ? e16.setProperty(r3, ``) : r3 === `float` ? e16.cssFloat = `` : e16[r3] = ``, I3 = true);
        for (var i2 in t3) r3 = t3[i2], t3.hasOwnProperty(i2) && n2[i2] !== r3 && (hn2(e16, i2, r3), I3 = true);
      } else for (var a3 in t3) t3.hasOwnProperty(a3) && hn2(e16, a3, t3[a3]);
    }
    function _n2(e16) {
      if (e16.indexOf(`-`) === -1) return false;
      switch (e16) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return false;
        default:
          return true;
      }
    }
    var vn2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), yn2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function bn2(e16) {
      return yn2.test(`` + e16) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e16;
    }
    function xn2() {
    }
    var Sn2 = null;
    function Cn2(e16) {
      return e16 = e16.target || e16.srcElement || window, e16.correspondingUseElement && (e16 = e16.correspondingUseElement), e16.nodeType === 3 ? e16.parentNode : e16;
    }
    var wn2 = null, Tn2 = null;
    function En2(e16) {
      var t3 = It3(e16);
      if (t3 && (e16 = t3.stateNode)) {
        var n2 = e16[Et3] || null;
        a: switch (e16 = t3.stateNode, t3.type) {
          case `input`:
            if (sn2(e16, n2.value, n2.defaultValue, n2.defaultValue, n2.checked, n2.defaultChecked, n2.type, n2.name), t3 = n2.name, n2.type === `radio` && t3 != null) {
              for (n2 = e16; n2.parentNode; ) n2 = n2.parentNode;
              for (n2 = n2.querySelectorAll(`input[name="` + on2(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n2.length; t3++) {
                var r3 = n2[t3];
                if (r3 !== e16 && r3.form === e16.form) {
                  var i2 = r3[Et3] || null;
                  if (!i2) throw Error(s2(90));
                  sn2(r3, i2.value, i2.defaultValue, i2.defaultValue, i2.checked, i2.defaultChecked, i2.type, i2.name);
                }
              }
              for (t3 = 0; t3 < n2.length; t3++) r3 = n2[t3], r3.form === e16.form && rn2(r3);
            }
            break a;
          case `textarea`:
            dn2(e16, n2.value, n2.defaultValue);
            break a;
          case `select`:
            t3 = n2.value, t3 != null && un2(e16, !!n2.multiple, t3, false);
        }
      }
    }
    var Dn2 = false;
    function On2(e16, t3, n2) {
      if (Dn2) return e16(t3, n2);
      Dn2 = true;
      try {
        return e16(t3);
      } finally {
        if (Dn2 = false, (wn2 !== null || Tn2 !== null) && (zd(), wn2 && (t3 = wn2, e16 = Tn2, Tn2 = wn2 = null, En2(t3), e16))) for (t3 = 0; t3 < e16.length; t3++) En2(e16[t3]);
      }
    }
    function kn2(e16, t3) {
      var n2 = e16.stateNode;
      if (n2 === null) return null;
      var r3 = n2[Et3] || null;
      if (r3 === null) return null;
      n2 = r3[t3];
      a: switch (t3) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r3 = !r3.disabled) || (e16 = e16.type, r3 = !(e16 === `button` || e16 === `input` || e16 === `select` || e16 === `textarea`)), e16 = !r3;
          break a;
        default:
          e16 = false;
      }
      if (e16) return null;
      if (n2 && typeof n2 != `function`) throw Error(s2(231, t3, typeof n2));
      return n2;
    }
    var An2 = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), jn2 = false;
    if (An2) try {
      var Mn2 = {};
      Object.defineProperty(Mn2, "passive", { get: function() {
        jn2 = true;
      } }), window.addEventListener(`test`, Mn2, Mn2), window.removeEventListener(`test`, Mn2, Mn2);
    } catch {
      jn2 = false;
    }
    var Nn2 = null, L3 = null, Pn2 = null;
    function Fn2() {
      if (Pn2) return Pn2;
      var e16, t3 = L3, n2 = t3.length, r3, i2 = `value` in Nn2 ? Nn2.value : Nn2.textContent, a3 = i2.length;
      for (e16 = 0; e16 < n2 && t3[e16] === i2[e16]; e16++) ;
      var o2 = n2 - e16;
      for (r3 = 1; r3 <= o2 && t3[n2 - r3] === i2[a3 - r3]; r3++) ;
      return Pn2 = i2.slice(e16, 1 < r3 ? 1 - r3 : void 0);
    }
    function In2(e16) {
      var t3 = e16.keyCode;
      return `charCode` in e16 ? (e16 = e16.charCode, e16 === 0 && t3 === 13 && (e16 = 13)) : e16 = t3, e16 === 10 && (e16 = 13), 32 <= e16 || e16 === 13 ? e16 : 0;
    }
    function Ln2() {
      return true;
    }
    function Rn2() {
      return false;
    }
    function zn2(e16) {
      function t3(t4, n2, r3, i2, a3) {
        for (var o2 in this._reactName = t4, this._targetInst = r3, this.type = n2, this.nativeEvent = i2, this.target = a3, this.currentTarget = null, e16) e16.hasOwnProperty(o2) && (t4 = e16[o2], this[o2] = t4 ? t4(i2) : i2[o2]);
        return this.isDefaultPrevented = (i2.defaultPrevented == null ? false === i2.returnValue : i2.defaultPrevented) ? Ln2 : Rn2, this.isPropagationStopped = Rn2, this;
      }
      return D2(t3.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var e17 = this.nativeEvent;
        e17 && (e17.preventDefault ? e17.preventDefault() : typeof e17.returnValue != `unknown` && (e17.returnValue = false), this.isDefaultPrevented = Ln2);
      }, stopPropagation: function() {
        var e17 = this.nativeEvent;
        e17 && (e17.stopPropagation ? e17.stopPropagation() : typeof e17.cancelBubble != `unknown` && (e17.cancelBubble = true), this.isPropagationStopped = Ln2);
      }, persist: function() {
      }, isPersistent: Ln2 }), t3;
    }
    var Bn2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e16) {
      return e16.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Vn2 = zn2(Bn2), Hn2 = D2({}, Bn2, { view: 0, detail: 0 }), Un2 = zn2(Hn2), Wn2, R3, Gn2, Kn2 = D2({}, Hn2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rr2, button: 0, buttons: 0, relatedTarget: function(e16) {
      return e16.relatedTarget === void 0 ? e16.fromElement === e16.srcElement ? e16.toElement : e16.fromElement : e16.relatedTarget;
    }, movementX: function(e16) {
      return `movementX` in e16 ? e16.movementX : (e16 !== Gn2 && (Gn2 && e16.type === `mousemove` ? (Wn2 = e16.screenX - Gn2.screenX, R3 = e16.screenY - Gn2.screenY) : R3 = Wn2 = 0, Gn2 = e16), Wn2);
    }, movementY: function(e16) {
      return `movementY` in e16 ? e16.movementY : R3;
    } }), qn2 = zn2(Kn2), Jn2 = zn2(D2({}, Kn2, { dataTransfer: 0 })), Yn2 = zn2(D2({}, Hn2, { relatedTarget: 0 })), Xn2 = zn2(D2({}, Bn2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), Zn2 = zn2(D2({}, Bn2, { clipboardData: function(e16) {
      return `clipboardData` in e16 ? e16.clipboardData : window.clipboardData;
    } })), Qn2 = zn2(D2({}, Bn2, { data: 0 })), $n2 = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, er2 = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, tr2 = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function nr2(e16) {
      var t3 = this.nativeEvent;
      return t3.getModifierState ? t3.getModifierState(e16) : (e16 = tr2[e16]) ? !!t3[e16] : false;
    }
    function rr2() {
      return nr2;
    }
    var ir2 = zn2(D2({}, Hn2, { key: function(e16) {
      if (e16.key) {
        var t3 = $n2[e16.key] || e16.key;
        if (t3 !== `Unidentified`) return t3;
      }
      return e16.type === `keypress` ? (e16 = In2(e16), e16 === 13 ? `Enter` : String.fromCharCode(e16)) : e16.type === `keydown` || e16.type === `keyup` ? er2[e16.keyCode] || `Unidentified` : ``;
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rr2, charCode: function(e16) {
      return e16.type === `keypress` ? In2(e16) : 0;
    }, keyCode: function(e16) {
      return e16.type === `keydown` || e16.type === `keyup` ? e16.keyCode : 0;
    }, which: function(e16) {
      return e16.type === `keypress` ? In2(e16) : e16.type === `keydown` || e16.type === `keyup` ? e16.keyCode : 0;
    } })), ar2 = zn2(D2({}, Kn2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), or2 = zn2(D2({}, Bn2, { submitter: 0 })), sr2 = zn2(D2({}, Hn2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rr2 })), cr2 = zn2(D2({}, Bn2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), lr2 = zn2(D2({}, Kn2, { deltaX: function(e16) {
      return `deltaX` in e16 ? e16.deltaX : `wheelDeltaX` in e16 ? -e16.wheelDeltaX : 0;
    }, deltaY: function(e16) {
      return `deltaY` in e16 ? e16.deltaY : `wheelDeltaY` in e16 ? -e16.wheelDeltaY : `wheelDelta` in e16 ? -e16.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 })), ur2 = zn2(D2({}, Bn2, { newState: 0, oldState: 0, source: 0 })), dr2 = [9, 13, 27, 32], fr2 = An2 && `CompositionEvent` in window, pr2 = null;
    An2 && `documentMode` in document && (pr2 = document.documentMode);
    var mr2 = An2 && `TextEvent` in window && !pr2, hr2 = An2 && (!fr2 || pr2 && 8 < pr2 && 11 >= pr2), gr2 = ` `, _r2 = false;
    function vr2(e16, t3) {
      switch (e16) {
        case `keyup`:
          return dr2.indexOf(t3.keyCode) !== -1;
        case `keydown`:
          return t3.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return true;
        default:
          return false;
      }
    }
    function yr2(e16) {
      return e16 = e16.detail, typeof e16 == `object` && `data` in e16 ? e16.data : null;
    }
    var br2 = false;
    function xr2(e16, t3) {
      switch (e16) {
        case `compositionend`:
          return yr2(t3);
        case `keypress`:
          return t3.which === 32 ? (_r2 = true, gr2) : null;
        case `textInput`:
          return e16 = t3.data, e16 === gr2 && _r2 ? null : e16;
        default:
          return null;
      }
    }
    function Sr2(e16, t3) {
      if (br2) return e16 === `compositionend` || !fr2 && vr2(e16, t3) ? (e16 = Fn2(), Pn2 = L3 = Nn2 = null, br2 = false, e16) : null;
      switch (e16) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
            if (t3.char && 1 < t3.char.length) return t3.char;
            if (t3.which) return String.fromCharCode(t3.which);
          }
          return null;
        case `compositionend`:
          return hr2 && t3.locale !== `ko` ? null : t3.data;
        default:
          return null;
      }
    }
    var Cr2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function wr2(e16) {
      var t3 = e16 && e16.nodeName && e16.nodeName.toLowerCase();
      return t3 === `input` ? !!Cr2[e16.type] : t3 === `textarea`;
    }
    function Tr2(e16, t3, n2, r3) {
      wn2 ? Tn2 ? Tn2.push(r3) : Tn2 = [r3] : wn2 = r3, t3 = Jf(t3, `onChange`), 0 < t3.length && (n2 = new Vn2(`onChange`, `change`, null, n2, r3), e16.push({ event: n2, listeners: t3 }));
    }
    var Er2 = null, Dr2 = null;
    function Or2(e16) {
      Vf(e16, 0);
    }
    function kr2(e16) {
      if (rn2(Lt3(e16))) return e16;
    }
    function Ar2(e16, t3) {
      if (e16 === `change`) return t3;
    }
    var jr2 = false;
    if (An2) {
      var Mr2;
      if (An2) {
        var Nr2 = `oninput` in document;
        if (!Nr2) {
          var Pr2 = document.createElement(`div`);
          Pr2.setAttribute(`oninput`, `return;`), Nr2 = typeof Pr2.oninput == `function`;
        }
        Mr2 = Nr2;
      } else Mr2 = false;
      jr2 = Mr2 && (!document.documentMode || 9 < document.documentMode);
    }
    function Fr2() {
      Er2 && (Er2.detachEvent(`onpropertychange`, Ir2), Dr2 = Er2 = null);
    }
    function Ir2(e16) {
      if (e16.propertyName === `value` && kr2(Dr2)) {
        var t3 = [];
        Tr2(t3, Dr2, e16, Cn2(e16)), On2(Or2, t3);
      }
    }
    function Lr2(e16, t3, n2) {
      e16 === `focusin` ? (Fr2(), Er2 = t3, Dr2 = n2, Er2.attachEvent(`onpropertychange`, Ir2)) : e16 === `focusout` && Fr2();
    }
    function Rr2(e16) {
      if (e16 === `selectionchange` || e16 === `keyup` || e16 === `keydown`) return kr2(Dr2);
    }
    function zr2(e16, t3) {
      if (e16 === `click`) return kr2(t3);
    }
    function Br2(e16, t3) {
      if (e16 === `input` || e16 === `change`) return kr2(t3);
    }
    function Vr2(e16, t3) {
      return e16 === t3 && (e16 !== 0 || 1 / e16 == 1 / t3) || e16 !== e16 && t3 !== t3;
    }
    var Hr2 = typeof Object.is == `function` ? Object.is : Vr2;
    function Ur2(e16, t3) {
      if (Hr2(e16, t3)) return true;
      if (typeof e16 != `object` || !e16 || typeof t3 != `object` || !t3) return false;
      var n2 = Object.keys(e16), r3 = Object.keys(t3);
      if (n2.length !== r3.length) return false;
      for (r3 = 0; r3 < n2.length; r3++) {
        var i2 = n2[r3];
        if (!Re3.call(t3, i2) || !Hr2(e16[i2], t3[i2])) return false;
      }
      return true;
    }
    function Wr2(e16) {
      if (e16 ||= typeof document < `u` ? document : void 0, e16 === void 0) return null;
      try {
        return e16.activeElement || e16.body;
      } catch {
        return e16.body;
      }
    }
    function Gr2(e16) {
      for (; e16 && e16.firstChild; ) e16 = e16.firstChild;
      return e16;
    }
    function Kr2(e16, t3) {
      var n2 = Gr2(e16);
      e16 = 0;
      for (var r3; n2; ) {
        if (n2.nodeType === 3) {
          if (r3 = e16 + n2.textContent.length, e16 <= t3 && r3 >= t3) return { node: n2, offset: t3 - e16 };
          e16 = r3;
        }
        a: {
          for (; n2; ) {
            if (n2.nextSibling) {
              n2 = n2.nextSibling;
              break a;
            }
            n2 = n2.parentNode;
          }
          n2 = void 0;
        }
        n2 = Gr2(n2);
      }
    }
    function qr2(e16, t3) {
      return e16 && t3 ? e16 === t3 ? true : e16 && e16.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? qr2(e16, t3.parentNode) : `contains` in e16 ? e16.contains(t3) : e16.compareDocumentPosition ? !!(e16.compareDocumentPosition(t3) & 16) : false : false;
    }
    function Jr2(e16) {
      e16 = e16 != null && e16.ownerDocument != null && e16.ownerDocument.defaultView != null ? e16.ownerDocument.defaultView : window;
      for (var t3 = Wr2(e16.document); t3 instanceof e16.HTMLIFrameElement; ) {
        try {
          var n2 = typeof t3.contentWindow.location.href == `string`;
        } catch {
          n2 = false;
        }
        if (n2) e16 = t3.contentWindow;
        else break;
        t3 = Wr2(e16.document);
      }
      return t3;
    }
    function Yr2(e16) {
      var t3 = e16 && e16.nodeName && e16.nodeName.toLowerCase();
      return t3 && (t3 === `input` && (e16.type === `text` || e16.type === `search` || e16.type === `tel` || e16.type === `url` || e16.type === `password`) || t3 === `textarea` || e16.contentEditable === `true`);
    }
    var Xr2 = An2 && `documentMode` in document && 11 >= document.documentMode, Zr2 = null, Qr2 = null, $r2 = null, ei2 = false;
    function ti2(e16, t3, n2) {
      var r3 = n2.window === n2 ? n2.document : n2.nodeType === 9 ? n2 : n2.ownerDocument;
      ei2 || Zr2 == null || Zr2 !== Wr2(r3) || (r3 = Zr2, `selectionStart` in r3 && Yr2(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), $r2 && Ur2($r2, r3) || ($r2 = r3, r3 = Jf(Qr2, `onSelect`), 0 < r3.length && (t3 = new Vn2(`onSelect`, `select`, null, t3, n2), e16.push({ event: t3, listeners: r3 }), t3.target = Zr2)));
    }
    function ni2(e16, t3) {
      var n2 = {};
      return n2[e16.toLowerCase()] = t3.toLowerCase(), n2[`Webkit` + e16] = `webkit` + t3, n2[`Moz` + e16] = `moz` + t3, n2;
    }
    var ri2 = { animationend: ni2(`Animation`, `AnimationEnd`), animationiteration: ni2(`Animation`, `AnimationIteration`), animationstart: ni2(`Animation`, `AnimationStart`), transitionrun: ni2(`Transition`, `TransitionRun`), transitionstart: ni2(`Transition`, `TransitionStart`), transitioncancel: ni2(`Transition`, `TransitionCancel`), transitionend: ni2(`Transition`, `TransitionEnd`) }, ii2 = {}, ai2 = {};
    An2 && (ai2 = document.createElement(`div`).style, `AnimationEvent` in window || (delete ri2.animationend.animation, delete ri2.animationiteration.animation, delete ri2.animationstart.animation), `TransitionEvent` in window || delete ri2.transitionend.transition);
    function oi2(e16) {
      if (ii2[e16]) return ii2[e16];
      if (!ri2[e16]) return e16;
      var t3 = ri2[e16], n2;
      for (n2 in t3) if (t3.hasOwnProperty(n2) && n2 in ai2) return ii2[e16] = t3[n2];
      return e16;
    }
    var si2 = oi2(`animationend`), ci2 = oi2(`animationiteration`), li2 = oi2(`animationstart`), ui2 = oi2(`transitionrun`), di2 = oi2(`transitionstart`), fi2 = oi2(`transitioncancel`), pi2 = oi2(`transitionend`), mi2 = /* @__PURE__ */ new Map(), hi2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
    hi2.push(`scrollEnd`);
    function gi2(e16, t3) {
      mi2.set(e16, t3), Ut3(t3, [e16]);
    }
    var _i2 = 0;
    function vi2(e16, t3) {
      if (e16.name != null && e16.name !== `auto`) return e16.name;
      if (t3.autoName !== null) return t3.autoName;
      e16 = bd.identifierPrefix;
      var n2 = _i2++;
      return e16 = `_` + e16 + `t_` + n2.toString(32) + `_`, t3.autoName = e16;
    }
    function yi2(e16) {
      if (e16 == null || typeof e16 == `string`) return e16;
      var t3 = null, n2 = Od;
      if (n2 !== null) for (var r3 = 0; r3 < n2.length; r3++) {
        var i2 = e16[n2[r3]];
        if (i2 != null) {
          if (i2 === `none`) return `none`;
          t3 = t3 == null ? i2 : t3 + (` ` + i2);
        }
      }
      return t3 ?? e16.default;
    }
    function bi2(e16, t3) {
      return e16 = yi2(e16), t3 = yi2(t3), t3 == null ? e16 === `auto` ? null : e16 : t3 === `auto` ? null : t3;
    }
    var xi2 = typeof reportError == `function` ? reportError : function(e16) {
      if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
        var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e16 == `object` && e16 && typeof e16.message == `string` ? String(e16.message) : String(e16), error: e16 });
        if (!window.dispatchEvent(t3)) return;
      } else if (typeof process == `object` && typeof process.emit == `function`) {
        process.emit(`uncaughtException`, e16);
        return;
      }
      console.error(e16);
    }, Si2 = [], z3 = 0, Ci2 = 0;
    function wi2() {
      for (var e16 = z3, t3 = Ci2 = z3 = 0; t3 < e16; ) {
        var n2 = Si2[t3];
        Si2[t3++] = null;
        var r3 = Si2[t3];
        Si2[t3++] = null;
        var i2 = Si2[t3];
        Si2[t3++] = null;
        var a3 = Si2[t3];
        if (Si2[t3++] = null, r3 !== null && i2 !== null) {
          var o2 = r3.pending;
          o2 === null ? i2.next = i2 : (i2.next = o2.next, o2.next = i2), r3.pending = i2;
        }
        a3 !== 0 && Oi2(n2, i2, a3);
      }
    }
    function Ti2(e16, t3, n2, r3) {
      Si2[z3++] = e16, Si2[z3++] = t3, Si2[z3++] = n2, Si2[z3++] = r3, Ci2 |= r3, e16.lanes |= r3, e16 = e16.alternate, e16 !== null && (e16.lanes |= r3);
    }
    function Ei2(e16, t3, n2, r3) {
      return Ti2(e16, t3, n2, r3), ki2(e16);
    }
    function Di2(e16, t3) {
      return Ti2(e16, null, null, t3), ki2(e16);
    }
    function Oi2(e16, t3, n2) {
      e16.lanes |= n2;
      var r3 = e16.alternate;
      r3 !== null && (r3.lanes |= n2);
      for (var i2 = false, a3 = e16.return; a3 !== null; ) a3.childLanes |= n2, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n2), a3.tag === 22 && (e16 = a3.stateNode, e16 === null || e16._visibility & 1 || (i2 = true)), e16 = a3, a3 = a3.return;
      return e16.tag === 3 ? (a3 = e16.stateNode, i2 && t3 !== null && (i2 = 31 - tt3(n2), e16 = a3.hiddenUpdates, r3 = e16[i2], r3 === null ? e16[i2] = [t3] : r3.push(t3), t3.lane = n2 | 536870912), a3) : null;
    }
    function ki2(e16) {
      if (50 < kd) throw kd = 0, Ad = null, Error(s2(185));
      for (var t3 = e16.return; t3 !== null; ) e16 = t3, t3 = e16.return;
      return e16.tag === 3 ? e16.stateNode : null;
    }
    var Ai2 = {};
    function ji2(e16, t3, n2, r3) {
      this.tag = e16, this.key = n2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Mi2(e16, t3, n2, r3) {
      return new ji2(e16, t3, n2, r3);
    }
    function Ni2(e16) {
      return e16 = e16.prototype, !(!e16 || !e16.isReactComponent);
    }
    function Pi2(e16, t3) {
      var n2 = e16.alternate;
      return n2 === null ? (n2 = Mi2(e16.tag, t3, e16.key, e16.mode), n2.elementType = e16.elementType, n2.type = e16.type, n2.stateNode = e16.stateNode, n2.alternate = e16, e16.alternate = n2) : (n2.pendingProps = t3, n2.type = e16.type, n2.flags = 0, n2.subtreeFlags = 0, n2.deletions = null), n2.flags = e16.flags & 1206910976, n2.childLanes = e16.childLanes, n2.lanes = e16.lanes, n2.child = e16.child, n2.memoizedProps = e16.memoizedProps, n2.memoizedState = e16.memoizedState, n2.updateQueue = e16.updateQueue, t3 = e16.dependencies, n2.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n2.sibling = e16.sibling, n2.index = e16.index, n2.ref = e16.ref, n2.refCleanup = e16.refCleanup, n2;
    }
    function Fi2(e16, t3) {
      e16.flags &= 1206910978;
      var n2 = e16.alternate;
      return n2 === null ? (e16.childLanes = 0, e16.lanes = t3, e16.child = null, e16.subtreeFlags = 0, e16.memoizedProps = null, e16.memoizedState = null, e16.updateQueue = null, e16.dependencies = null, e16.stateNode = null) : (e16.childLanes = n2.childLanes, e16.lanes = n2.lanes, e16.child = n2.child, e16.subtreeFlags = 0, e16.deletions = null, e16.memoizedProps = n2.memoizedProps, e16.memoizedState = n2.memoizedState, e16.updateQueue = n2.updateQueue, e16.type = n2.type, t3 = n2.dependencies, e16.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e16;
    }
    function Ii2(e16, t3, n2, r3, i2, a3) {
      var o2 = 0;
      if (r3 = e16, typeof r3 == `function`) Ni2(r3) && (o2 = 1);
      else if (typeof r3 == `string`) o2 = qm(e16, n2, Te3.current) ? 26 : e16 === `html` || e16 === `head` || e16 === `body` ? 27 : 5;
      else a: switch (r3) {
        case de3:
          return e16 = Mi2(31, n2, t3, i2), e16.elementType = de3, e16.lanes = a3, e16;
        case te3:
          return Li2(n2.children, i2, a3, t3);
        case ne3:
          o2 = 8, i2 |= 24;
          break;
        case re3:
          return e16 = Mi2(12, n2, t3, i2 | 2), e16.elementType = re3, e16.lanes = a3, e16;
        case se2:
          return e16 = Mi2(13, n2, t3, i2), e16.elementType = se2, e16.lanes = a3, e16;
        case ce3:
          return e16 = Mi2(19, n2, t3, i2), e16.elementType = ce3, e16.lanes = a3, e16;
        case fe2:
        case me3:
          return e16 = i2 | 32, e16 = Mi2(30, n2, t3, e16), e16.elementType = me3, e16.lanes = a3, e16.stateNode = { autoName: null, paired: null, clones: null, ref: null }, e16;
        default:
          if (typeof r3 == `object` && r3) switch (r3.$$typeof) {
            case ae3:
              o2 = 10;
              break a;
            case ie3:
              o2 = 9;
              break a;
            case oe3:
              o2 = 11;
              break a;
            case le2:
              o2 = 14;
              break a;
            case ue2:
              o2 = 16, r3 = null;
              break a;
          }
          o2 = 29, n2 = Error(s2(130, e16 === null ? `null` : typeof e16, ``)), r3 = null;
      }
      return t3 = Mi2(o2, n2, t3, i2), t3.elementType = e16, t3.type = r3, t3.lanes = a3, t3;
    }
    function Li2(e16, t3, n2, r3) {
      return e16 = Mi2(7, e16, r3, t3), e16.lanes = n2, e16;
    }
    function Ri2(e16, t3, n2) {
      return e16 = Mi2(6, e16, null, t3), e16.lanes = n2, e16;
    }
    function zi2(e16) {
      var t3 = Mi2(18, null, null, 0);
      return t3.stateNode = e16, t3;
    }
    function Bi2(e16, t3, n2) {
      return t3 = Mi2(4, e16.children === null ? [] : e16.children, e16.key, t3), t3.lanes = n2, t3.stateNode = { containerInfo: e16.containerInfo, pendingChildren: null, implementation: e16.implementation }, t3;
    }
    var Vi2 = /* @__PURE__ */ new WeakMap();
    function Hi2(e16, t3) {
      if (typeof e16 == `object` && e16) {
        var n2 = Vi2.get(e16);
        return n2 === void 0 ? (t3 = { value: e16, source: t3, stack: Le3(t3) }, Vi2.set(e16, t3), t3) : n2;
      }
      return { value: e16, source: t3, stack: Le3(t3) };
    }
    var Ui2 = [], Wi2 = 0, Gi2 = null, Ki2 = 0, qi2 = [], Ji2 = 0, Yi2 = null, Xi2 = 1, Zi2 = ``;
    function Qi2(e16, t3) {
      Ui2[Wi2++] = Ki2, Ui2[Wi2++] = Gi2, Gi2 = e16, Ki2 = t3;
    }
    function $i2(e16, t3, n2) {
      qi2[Ji2++] = Xi2, qi2[Ji2++] = Zi2, qi2[Ji2++] = Yi2, Yi2 = e16;
      var r3 = Xi2;
      e16 = Zi2;
      var i2 = 32 - tt3(r3) - 1;
      r3 &= ~(1 << i2), n2 += 1;
      var a3 = 32 - tt3(t3) + i2;
      if (30 < a3) {
        var o2 = i2 - i2 % 5;
        a3 = (r3 & (1 << o2) - 1).toString(32), r3 >>= o2, i2 -= o2, Xi2 = 1 << 32 - tt3(t3) + i2 | n2 << i2 | r3, Zi2 = a3 + e16;
      } else Xi2 = 1 << a3 | n2 << i2 | r3, Zi2 = e16;
    }
    function ea2(e16) {
      e16.return !== null && (Qi2(e16, 1), $i2(e16, 1, 0));
    }
    function ta2(e16) {
      for (; e16 === Gi2; ) Gi2 = Ui2[--Wi2], Ui2[Wi2] = null, Ki2 = Ui2[--Wi2], Ui2[Wi2] = null;
      for (; e16 === Yi2; ) Yi2 = qi2[--Ji2], qi2[Ji2] = null, Zi2 = qi2[--Ji2], qi2[Ji2] = null, Xi2 = qi2[--Ji2], qi2[Ji2] = null;
    }
    function na2(e16, t3) {
      qi2[Ji2++] = Xi2, qi2[Ji2++] = Zi2, qi2[Ji2++] = Yi2, Xi2 = t3.id, Zi2 = t3.overflow, Yi2 = e16;
    }
    var ra2 = null, B3 = null, V3 = false, ia2 = null, aa2 = false, oa2 = Error(s2(519));
    function sa2(e16) {
      throw pa2(Hi2(Error(s2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e16)), oa2;
    }
    function ca2(e16) {
      var t3 = e16.stateNode, n2 = e16.type, r3 = e16.memoizedProps;
      switch (t3[Tt3] = e16, t3[Et3] = r3, n2) {
        case `dialog`:
          Q2(`cancel`, t3), Q2(`close`, t3);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q2(`load`, t3);
          break;
        case `video`:
        case `audio`:
          for (n2 = 0; n2 < zf.length; n2++) Q2(zf[n2], t3);
          break;
        case `source`:
          Q2(`error`, t3);
          break;
        case `img`:
        case `image`:
        case `link`:
          Q2(`error`, t3), Q2(`load`, t3);
          break;
        case `details`:
          Q2(`toggle`, t3);
          break;
        case `input`:
          Q2(`invalid`, t3), cn2(t3, r3.value, r3.defaultValue, r3.checked, r3.defaultChecked, r3.type, r3.name, true);
          break;
        case `select`:
          Q2(`invalid`, t3);
          break;
        case `textarea`:
          Q2(`invalid`, t3), fn2(t3, r3.value, r3.defaultValue, r3.children);
      }
      n2 = r3.children, typeof n2 != `string` && typeof n2 != `number` && typeof n2 != `bigint` || t3.textContent === `` + n2 || true === r3.suppressHydrationWarning || ep(t3.textContent, n2) ? (r3.popover != null && (Q2(`beforetoggle`, t3), Q2(`toggle`, t3)), r3.onScroll != null && Q2(`scroll`, t3), r3.onScrollEnd != null && Q2(`scrollend`, t3), r3.onClick != null && (t3.onclick = xn2), t3 = true) : t3 = false, t3 || sa2(e16, true);
    }
    function la2(e16) {
      for (ra2 = e16.return; ra2; ) switch (ra2.tag) {
        case 5:
        case 31:
        case 13:
          aa2 = false;
          return;
        case 27:
        case 3:
          aa2 = true;
          return;
        default:
          ra2 = ra2.return;
      }
    }
    function ua2(e16) {
      if (e16 !== ra2) return false;
      if (!V3) return la2(e16), V3 = true, false;
      var t3 = e16.tag, n2;
      if ((n2 = t3 !== 3 && t3 !== 27) && ((n2 = t3 === 5) && (n2 = e16.type, n2 = !(n2 !== `form` && n2 !== `button`) || pp(e16.type, e16.memoizedProps)), n2 = !n2), n2 && B3 && sa2(e16), la2(e16), t3 === 13) {
        if (e16 = e16.memoizedState, e16 = e16 === null ? null : e16.dehydrated, !e16) throw Error(s2(317));
        B3 = dm(e16);
      } else if (t3 === 31) {
        if (e16 = e16.memoizedState, e16 = e16 === null ? null : e16.dehydrated, !e16) throw Error(s2(317));
        B3 = dm(e16);
      } else t3 === 27 ? (t3 = B3, Sp(e16.type) ? (e16 = um, um = null, B3 = e16) : B3 = t3) : B3 = ra2 ? lm(e16.stateNode.nextSibling) : null;
      return true;
    }
    function da2() {
      B3 = ra2 = null, V3 = false;
    }
    function fa2() {
      var e16 = ia2;
      return e16 !== null && (fd === null ? fd = e16 : fd.push.apply(fd, e16), ia2 = null), e16;
    }
    function pa2(e16) {
      ia2 === null ? ia2 = [e16] : ia2.push(e16);
    }
    var ma2 = Ce3(null), ha2 = null, ga2 = null;
    function _a(e16, t3, n2) {
      N3(ma2, t3._currentValue), t3._currentValue = n2;
    }
    function va(e16) {
      e16._currentValue = ma2.current, we3(ma2);
    }
    function ya(e16, t3, n2) {
      for (; e16 !== null; ) {
        var r3 = e16.alternate;
        if ((e16.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e16.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e16 === n2) break;
        e16 = e16.return;
      }
    }
    function ba(e16, t3, n2, r3) {
      var i2 = e16.child;
      for (i2 !== null && (i2.return = e16); i2 !== null; ) {
        var a3 = i2.dependencies;
        if (a3 !== null) {
          var o2 = i2.child;
          a3 = a3.firstContext;
          a: for (; a3 !== null; ) {
            var c3 = a3;
            a3 = i2;
            for (var l3 = 0; l3 < t3.length; l3++) if (c3.context === t3[l3]) {
              a3.lanes |= n2, c3 = a3.alternate, c3 !== null && (c3.lanes |= n2), ya(a3.return, n2, e16), r3 || (o2 = null);
              break a;
            }
            a3 = c3.next;
          }
        } else if (i2.tag === 18) {
          if (o2 = i2.return, o2 === null) throw Error(s2(341));
          o2.lanes |= n2, a3 = o2.alternate, a3 !== null && (a3.lanes |= n2), ya(o2, n2, e16), o2 = null;
        } else i2.tag === 13 && i2.memoizedState !== null && i2.memoizedState.dehydrated === null ? (i2.lanes |= n2, o2 = i2.alternate, o2 !== null && (o2.lanes |= n2), ya(i2.return, n2, e16), o2 = i2.child, o2 = o2 === null ? null : o2.sibling) : o2 = i2.child;
        if (o2 !== null) o2.return = i2;
        else for (o2 = i2; o2 !== null; ) {
          if (o2 === e16) {
            o2 = null;
            break;
          }
          if (i2 = o2.sibling, i2 !== null) {
            i2.return = o2.return, o2 = i2;
            break;
          }
          o2 = o2.return;
        }
        i2 = o2;
      }
    }
    function xa(e16, t3, n2, r3) {
      e16 = null;
      for (var i2 = t3, a3 = false; i2 !== null; ) {
        if (!a3) {
          if (i2.flags & 524288) a3 = true;
          else if (i2.flags & 262144) break;
        }
        if (i2.tag === 10) {
          var o2 = i2.alternate;
          if (o2 === null) throw Error(s2(387));
          if (o2 = o2.memoizedProps, o2 !== null) {
            var c3 = i2.type;
            Hr2(i2.pendingProps.value, o2.value) || (e16 === null ? e16 = [c3] : e16.push(c3));
          }
        } else if (i2 === F3.current) {
          if (o2 = i2.alternate, o2 === null) throw Error(s2(387));
          o2.memoizedState.memoizedState !== i2.memoizedState.memoizedState && (e16 === null ? e16 = [sh] : e16.push(sh));
        }
        i2 = i2.return;
      }
      return e16 !== null && ba(t3, e16, n2, r3), t3.flags |= 262144, e16 !== null;
    }
    function Sa(e16) {
      for (e16 = e16.firstContext; e16 !== null; ) {
        if (!Hr2(e16.context._currentValue, e16.memoizedValue)) return true;
        e16 = e16.next;
      }
      return false;
    }
    function Ca(e16) {
      ha2 = e16, ga2 = null, e16 = e16.dependencies, e16 !== null && (e16.firstContext = null);
    }
    function wa(e16) {
      return Ea(ha2, e16);
    }
    function Ta(e16, t3) {
      return ha2 === null && Ca(e16), Ea(e16, t3);
    }
    function Ea(e16, t3) {
      var n2 = t3._currentValue;
      if (t3 = { context: t3, memoizedValue: n2, next: null }, ga2 === null) {
        if (e16 === null) throw Error(s2(308));
        ga2 = t3, e16.dependencies = { lanes: 0, firstContext: t3 }, e16.flags |= 524288;
      } else ga2 = ga2.next = t3;
      return n2;
    }
    var Da = typeof AbortController < `u` ? AbortController : function() {
      var e16 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n2) {
        e16.push(n2);
      } };
      this.abort = function() {
        t3.aborted = true, e16.forEach(function(e17) {
          return e17();
        });
      };
    }, Oa = t2.unstable_scheduleCallback, ka = t2.unstable_NormalPriority, Aa = { $$typeof: ae3, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function ja() {
      return { controller: new Da(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function Ma(e16) {
      e16.refCount--, e16.refCount === 0 && Oa(ka, function() {
        e16.controller.abort();
      });
    }
    function Na(e16, t3) {
      if (e16.pendingLanes & 4194048) {
        var n2 = e16.transitionTypes;
        for (n2 === null && (n2 = e16.transitionTypes = []), e16 = 0; e16 < t3.length; e16++) {
          var r3 = t3[e16];
          n2.indexOf(r3) === -1 && n2.push(r3);
        }
      }
    }
    var Pa = null;
    function Fa(e16) {
      var t3 = e16.transitionTypes;
      return e16.transitionTypes = null, t3;
    }
    var Ia = null, La = 0, Ra = 0, za = null;
    function Ba(e16, t3) {
      if (Ia === null) {
        var n2 = Ia = [];
        La = 0, Ra = Pf(), za = { status: `pending`, value: void 0, then: function(e17) {
          n2.push(e17);
        } };
      }
      return La++, t3.then(Va, Va), t3;
    }
    function Va() {
      if (--La === 0 && (Pa = null, Ia !== null)) {
        za !== null && (za.status = `fulfilled`);
        var e16 = Ia;
        Ia = null, Ra = 0, za = null;
        for (var t3 = 0; t3 < e16.length; t3++) (0, e16[t3])();
      }
    }
    function Ha(e16, t3) {
      var n2 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e17) {
        n2.push(e17);
      } };
      return e16.then(function() {
        r3.status = `fulfilled`, r3.value = t3;
        for (var e17 = 0; e17 < n2.length; e17++) (0, n2[e17])(t3);
      }, function(e17) {
        for (r3.status = `rejected`, r3.reason = e17, e17 = 0; e17 < n2.length; e17++) (0, n2[e17])(void 0);
      }), r3;
    }
    var Ua = A3.S;
    A3.S = function(e16, t3) {
      if (hd = Ue3(), typeof t3 == `object` && t3 && typeof t3.then == `function` && Ba(e16, t3), Pa !== null) for (var n2 = bf; n2 !== null; ) Na(n2, Pa), n2 = n2.next;
      if (n2 = e16.types, n2 !== null) {
        for (var r3 = bf; r3 !== null; ) Na(r3, n2), r3 = r3.next;
        if (Ra !== 0) {
          r3 = Pa, r3 === null && (r3 = Pa = []);
          for (var i2 = 0; i2 < n2.length; i2++) {
            var a3 = n2[i2];
            r3.indexOf(a3) === -1 && r3.push(a3);
          }
        }
      }
      Ua !== null && Ua(e16, t3);
    };
    var Wa = Ce3(null);
    function Ga() {
      var e16 = Wa.current;
      return e16 === null ? q2.pooledCache : e16;
    }
    function Ka(e16, t3) {
      t3 === null ? N3(Wa, Wa.current) : N3(Wa, t3.pool);
    }
    function qa() {
      var e16 = Ga();
      return e16 === null ? null : { parent: Aa._currentValue, pool: e16 };
    }
    var Ja = Error(s2(460)), Ya = Error(s2(474)), Xa = Error(s2(542)), Za = { then: function() {
    } };
    function Qa(e16) {
      return e16 = e16.status, e16 === `fulfilled` || e16 === `rejected`;
    }
    function $a(e16, t3, n2) {
      switch (n2 = e16[n2], n2 === void 0 ? e16.push(t3) : n2 !== t3 && (t3.then(xn2, xn2), t3 = n2), t3.status) {
        case `fulfilled`:
          return t3.value;
        case `rejected`:
          throw e16 = t3.reason, ro(e16), e16 === void 0 && !(`reason` in t3) ? Error(s2(600)) : e16;
        default:
          if (typeof t3.status == `string`) t3.then(xn2, xn2);
          else {
            if (e16 = q2, e16 !== null && 100 < e16.shellSuspendCounter) throw Error(s2(482));
            e16 = t3, e16.status = `pending`, e16.then(function(e17) {
              if (t3.status === `pending`) {
                var n3 = t3;
                n3.status = `fulfilled`, n3.value = e17;
              }
            }, function(e17) {
              if (t3.status === `pending`) {
                var n3 = t3;
                n3.status = `rejected`, n3.reason = e17;
              }
            });
          }
          switch (t3.status) {
            case `fulfilled`:
              return t3.value;
            case `rejected`:
              throw e16 = t3.reason, ro(e16), e16;
          }
          throw to = t3, Ja;
      }
    }
    function eo(e16) {
      try {
        var t3 = e16._init;
        return t3(e16._payload);
      } catch (e17) {
        throw typeof e17 == `object` && e17 && typeof e17.then == `function` ? (to = e17, Ja) : e17;
      }
    }
    var to = null;
    function no() {
      if (to === null) throw Error(s2(459));
      var e16 = to;
      return to = null, e16;
    }
    function ro(e16) {
      if (e16 === Ja || e16 === Xa) throw Error(s2(483));
    }
    var io = null, ao = 0;
    function oo(e16) {
      var t3 = ao;
      return ao += 1, io === null && (io = []), $a(io, e16, t3);
    }
    function so(e16, t3) {
      t3 = t3.props.ref, e16.ref = t3 === void 0 ? null : t3;
    }
    function co(e16, t3) {
      throw t3.$$typeof === O3 ? Error(s2(525)) : (e16 = Object.prototype.toString.call(t3), Error(s2(31, e16 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e16)));
    }
    function lo(e16) {
      function t3(t4, n3) {
        if (e16) {
          var r4 = t4.deletions;
          r4 === null ? (t4.deletions = [n3], t4.flags |= 16) : r4.push(n3);
        }
      }
      function n2(n3, r4) {
        if (!e16) return null;
        for (; r4 !== null; ) t3(n3, r4), r4 = r4.sibling;
        return null;
      }
      function r3(e17) {
        for (var t4 = /* @__PURE__ */ new Map(); e17 !== null; ) e17.key === null ? t4.set(e17.index, e17) : t4.set(e17.key, e17), e17 = e17.sibling;
        return t4;
      }
      function i2(e17, t4) {
        return e17 = Pi2(e17, t4), e17.index = 0, e17.sibling = null, e17;
      }
      function a3(t4, n3, r4) {
        return t4.index = r4, e16 ? (r4 = t4.alternate, r4 === null ? (t4.flags |= 134217730, n3) : (r4 = r4.index, r4 < n3 ? (t4.flags |= 2, n3) : r4)) : (t4.flags |= 1048576, n3);
      }
      function o2(t4) {
        return e16 && t4.alternate === null && (t4.flags |= 134217730), t4;
      }
      function c3(e17, t4, n3, r4) {
        return t4 === null || t4.tag !== 6 ? (t4 = Ri2(n3, e17.mode, r4), t4.return = e17, t4) : (t4 = i2(t4, n3), t4.return = e17, t4);
      }
      function l3(e17, t4, n3, r4) {
        var a4 = n3.type;
        return a4 === te3 ? (e17 = d3(e17, t4, n3.props.children, r4, n3.key), so(e17, n3), e17) : t4 !== null && (t4.elementType === a4 || typeof a4 == `object` && a4 && a4.$$typeof === ue2 && eo(a4) === t4.type) ? (t4 = i2(t4, n3.props), so(t4, n3), t4.return = e17, t4) : (t4 = Ii2(n3.type, n3.key, n3.props, null, e17.mode, r4), so(t4, n3), t4.return = e17, t4);
      }
      function u3(e17, t4, n3, r4) {
        return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n3.containerInfo || t4.stateNode.implementation !== n3.implementation ? (t4 = Bi2(n3, e17.mode, r4), t4.return = e17, t4) : (t4 = i2(t4, n3.children || []), t4.return = e17, t4);
      }
      function d3(e17, t4, n3, r4, a4) {
        return t4 === null || t4.tag !== 7 ? (t4 = Li2(n3, e17.mode, r4, a4), t4.return = e17, t4) : (t4 = i2(t4, n3), t4.return = e17, t4);
      }
      function f2(e17, t4, n3) {
        if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`) return t4 = Ri2(`` + t4, e17.mode, n3), t4.return = e17, t4;
        if (typeof t4 == `object` && t4) {
          switch (t4.$$typeof) {
            case k2:
              return n3 = Ii2(t4.type, t4.key, t4.props, null, e17.mode, n3), so(n3, t4), n3.return = e17, n3;
            case ee:
              return t4 = Bi2(t4, e17.mode, n3), t4.return = e17, t4;
            case ue2:
              return t4 = eo(t4), f2(e17, t4, n3);
          }
          if (be3(t4) || _e3(t4)) return t4 = Li2(t4, e17.mode, n3, null), t4.return = e17, t4;
          if (typeof t4.then == `function`) return f2(e17, oo(t4), n3);
          if (t4.$$typeof === ae3) return f2(e17, Ta(e17, t4), n3);
          co(e17, t4);
        }
        return null;
      }
      function p3(e17, t4, n3, r4) {
        var i3 = t4 === null ? null : t4.key;
        if (typeof n3 == `string` && n3 !== `` || typeof n3 == `number` || typeof n3 == `bigint`) return i3 === null ? c3(e17, t4, `` + n3, r4) : null;
        if (typeof n3 == `object` && n3) {
          switch (n3.$$typeof) {
            case k2:
              return n3.key === i3 ? l3(e17, t4, n3, r4) : null;
            case ee:
              return n3.key === i3 ? u3(e17, t4, n3, r4) : null;
            case ue2:
              return n3 = eo(n3), p3(e17, t4, n3, r4);
          }
          if (be3(n3) || _e3(n3)) return i3 === null ? d3(e17, t4, n3, r4, null) : null;
          if (typeof n3.then == `function`) return p3(e17, t4, oo(n3), r4);
          if (n3.$$typeof === ae3) return p3(e17, t4, Ta(e17, n3), r4);
          co(e17, n3);
        }
        return null;
      }
      function m2(e17, t4, n3, r4, i3) {
        if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number` || typeof r4 == `bigint`) return e17 = e17.get(n3) || null, c3(t4, e17, `` + r4, i3);
        if (typeof r4 == `object` && r4) {
          switch (r4.$$typeof) {
            case k2:
              return e17 = e17.get(r4.key === null ? n3 : r4.key) || null, l3(t4, e17, r4, i3);
            case ee:
              return e17 = e17.get(r4.key === null ? n3 : r4.key) || null, u3(t4, e17, r4, i3);
            case ue2:
              return r4 = eo(r4), m2(e17, t4, n3, r4, i3);
          }
          if (be3(r4) || _e3(r4)) return e17 = e17.get(n3) || null, d3(t4, e17, r4, i3, null);
          if (typeof r4.then == `function`) return m2(e17, t4, n3, oo(r4), i3);
          if (r4.$$typeof === ae3) return m2(e17, t4, n3, Ta(t4, r4), i3);
          co(t4, r4);
        }
        return null;
      }
      function h3(i3, o3, s3, c4) {
        for (var l4 = null, u4 = null, d4 = o3, h4 = o3 = 0, g4 = null; d4 !== null && h4 < s3.length; h4++) {
          d4.index > h4 ? (g4 = d4, d4 = null) : g4 = d4.sibling;
          var _5 = p3(i3, d4, s3[h4], c4);
          if (_5 === null) {
            d4 === null && (d4 = g4);
            break;
          }
          e16 && d4 && _5.alternate === null && t3(i3, d4), o3 = a3(_5, o3, h4), u4 === null ? l4 = _5 : u4.sibling = _5, u4 = _5, d4 = g4;
        }
        if (h4 === s3.length) return n2(i3, d4), V3 && Qi2(i3, h4), l4;
        if (d4 === null) {
          for (; h4 < s3.length; h4++) d4 = f2(i3, s3[h4], c4), d4 !== null && (o3 = a3(d4, o3, h4), u4 === null ? l4 = d4 : u4.sibling = d4, u4 = d4);
          return V3 && Qi2(i3, h4), l4;
        }
        for (d4 = r3(d4); h4 < s3.length; h4++) g4 = m2(d4, i3, h4, s3[h4], c4), g4 !== null && (e16 && (_5 = g4.alternate, _5 !== null && d4.delete(_5.key === null ? h4 : _5.key)), o3 = a3(g4, o3, h4), u4 === null ? l4 = g4 : u4.sibling = g4, u4 = g4);
        return e16 && d4.forEach(function(e17) {
          return t3(i3, e17);
        }), V3 && Qi2(i3, h4), l4;
      }
      function g3(i3, o3, c4, l4) {
        if (c4 == null) throw Error(s2(151));
        for (var u4 = null, d4 = null, h4 = o3, g4 = o3 = 0, _5 = null, v4 = c4.next(); h4 !== null && !v4.done; g4++, v4 = c4.next()) {
          h4.index > g4 ? (_5 = h4, h4 = null) : _5 = h4.sibling;
          var y4 = p3(i3, h4, v4.value, l4);
          if (y4 === null) {
            h4 === null && (h4 = _5);
            break;
          }
          e16 && h4 && y4.alternate === null && t3(i3, h4), o3 = a3(y4, o3, g4), d4 === null ? u4 = y4 : d4.sibling = y4, d4 = y4, h4 = _5;
        }
        if (v4.done) return n2(i3, h4), V3 && Qi2(i3, g4), u4;
        if (h4 === null) {
          for (; !v4.done; g4++, v4 = c4.next()) v4 = f2(i3, v4.value, l4), v4 !== null && (o3 = a3(v4, o3, g4), d4 === null ? u4 = v4 : d4.sibling = v4, d4 = v4);
          return V3 && Qi2(i3, g4), u4;
        }
        for (h4 = r3(h4); !v4.done; g4++, v4 = c4.next()) v4 = m2(h4, i3, g4, v4.value, l4), v4 !== null && (e16 && (_5 = v4.alternate, _5 !== null && h4.delete(_5.key === null ? g4 : _5.key)), o3 = a3(v4, o3, g4), d4 === null ? u4 = v4 : d4.sibling = v4, d4 = v4);
        return e16 && h4.forEach(function(e17) {
          return t3(i3, e17);
        }), V3 && Qi2(i3, g4), u4;
      }
      function _4(e17, r4, a4, c4) {
        if (typeof a4 == `object` && a4 && a4.type === te3 && a4.key === null && a4.props.ref === void 0 && (a4 = a4.props.children), typeof a4 == `object` && a4) {
          switch (a4.$$typeof) {
            case k2:
              a: {
                for (var l4 = a4.key; r4 !== null; ) {
                  if (r4.key === l4) {
                    if (l4 = a4.type, l4 === te3) {
                      if (r4.tag === 7) {
                        n2(e17, r4.sibling), c4 = i2(r4, a4.props.children), so(c4, a4), c4.return = e17, e17 = c4;
                        break a;
                      }
                    } else if (r4.elementType === l4 || typeof l4 == `object` && l4 && l4.$$typeof === ue2 && eo(l4) === r4.type) {
                      n2(e17, r4.sibling), c4 = i2(r4, a4.props), so(c4, a4), c4.return = e17, e17 = c4;
                      break a;
                    }
                    n2(e17, r4);
                    break;
                  } else t3(e17, r4);
                  r4 = r4.sibling;
                }
                a4.type === te3 ? (c4 = Li2(a4.props.children, e17.mode, c4, a4.key), so(c4, a4), c4.return = e17, e17 = c4) : (c4 = Ii2(a4.type, a4.key, a4.props, null, e17.mode, c4), so(c4, a4), c4.return = e17, e17 = c4);
              }
              return o2(e17);
            case ee:
              a: {
                for (l4 = a4.key; r4 !== null; ) {
                  if (r4.key === l4) if (r4.tag === 4 && r4.stateNode.containerInfo === a4.containerInfo && r4.stateNode.implementation === a4.implementation) {
                    n2(e17, r4.sibling), c4 = i2(r4, a4.children || []), c4.return = e17, e17 = c4;
                    break a;
                  } else {
                    n2(e17, r4);
                    break;
                  }
                  else t3(e17, r4);
                  r4 = r4.sibling;
                }
                c4 = Bi2(a4, e17.mode, c4), c4.return = e17, e17 = c4;
              }
              return o2(e17);
            case ue2:
              return a4 = eo(a4), _4(e17, r4, a4, c4);
          }
          if (be3(a4)) return h3(e17, r4, a4, c4);
          if (_e3(a4)) {
            if (l4 = _e3(a4), typeof l4 != `function`) throw Error(s2(150));
            return a4 = l4.call(a4), g3(e17, r4, a4, c4);
          }
          if (typeof a4.then == `function`) return _4(e17, r4, oo(a4), c4);
          if (a4.$$typeof === ae3) return _4(e17, r4, Ta(e17, a4), c4);
          co(e17, a4);
        }
        return typeof a4 == `string` && a4 !== `` || typeof a4 == `number` || typeof a4 == `bigint` ? (a4 = `` + a4, r4 !== null && r4.tag === 6 ? (n2(e17, r4.sibling), c4 = i2(r4, a4), c4.return = e17, e17 = c4) : (n2(e17, r4), c4 = Ri2(a4, e17.mode, c4), c4.return = e17, e17 = c4), o2(e17)) : n2(e17, r4);
      }
      return function(e17, t4, n3, r4) {
        try {
          ao = 0;
          var i3 = _4(e17, t4, n3, r4);
          return io = null, i3;
        } catch (t5) {
          if (t5 === Ja || t5 === Xa) throw t5;
          var a4 = Mi2(29, t5, null, e17.mode);
          return a4.lanes = r4, a4.return = e17, a4;
        }
      };
    }
    var uo = lo(true), fo = lo(false), po = false;
    function mo(e16) {
      e16.updateQueue = { baseState: e16.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function ho(e16, t3) {
      e16 = e16.updateQueue, t3.updateQueue === e16 && (t3.updateQueue = { baseState: e16.baseState, firstBaseUpdate: e16.firstBaseUpdate, lastBaseUpdate: e16.lastBaseUpdate, shared: e16.shared, callbacks: null });
    }
    function go(e16) {
      return { lane: e16, tag: 0, payload: null, callback: null, next: null };
    }
    function _o(e16, t3, n2) {
      var r3 = e16.updateQueue;
      if (r3 === null) return null;
      if (r3 = r3.shared, K2 & 2) {
        var i2 = r3.pending;
        return i2 === null ? t3.next = t3 : (t3.next = i2.next, i2.next = t3), r3.pending = t3, t3 = ki2(e16), Oi2(e16, null, n2), t3;
      }
      return Ti2(e16, r3, t3, n2), ki2(e16);
    }
    function vo(e16, t3, n2) {
      if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n2 & 4194048)) {
        var r3 = t3.lanes;
        r3 &= e16.pendingLanes, n2 |= r3, t3.lanes = n2, vt3(e16, n2);
      }
    }
    function yo(e16, t3) {
      var n2 = e16.updateQueue, r3 = e16.alternate;
      if (r3 !== null && (r3 = r3.updateQueue, n2 === r3)) {
        var i2 = null, a3 = null;
        if (n2 = n2.firstBaseUpdate, n2 !== null) {
          do {
            var o2 = { lane: n2.lane, tag: n2.tag, payload: n2.payload, callback: null, next: null };
            a3 === null ? i2 = a3 = o2 : a3 = a3.next = o2, n2 = n2.next;
          } while (n2 !== null);
          a3 === null ? i2 = a3 = t3 : a3 = a3.next = t3;
        } else i2 = a3 = t3;
        n2 = { baseState: r3.baseState, firstBaseUpdate: i2, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e16.updateQueue = n2;
        return;
      }
      e16 = n2.lastBaseUpdate, e16 === null ? n2.firstBaseUpdate = t3 : e16.next = t3, n2.lastBaseUpdate = t3;
    }
    var bo = false;
    function xo() {
      if (bo) {
        var e16 = za;
        if (e16 !== null) throw e16;
      }
    }
    function So(e16, t3, n2, r3) {
      bo = false;
      var i2 = e16.updateQueue;
      po = false;
      var a3 = i2.firstBaseUpdate, o2 = i2.lastBaseUpdate, s3 = i2.shared.pending;
      if (s3 !== null) {
        i2.shared.pending = null;
        var c3 = s3, l3 = c3.next;
        c3.next = null, o2 === null ? a3 = l3 : o2.next = l3, o2 = c3;
        var u3 = e16.alternate;
        u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o2 && (s3 === null ? u3.firstBaseUpdate = l3 : s3.next = l3, u3.lastBaseUpdate = c3));
      }
      if (a3 !== null) {
        var d3 = i2.baseState;
        o2 = 0, u3 = l3 = c3 = null, s3 = a3;
        do {
          var f2 = s3.lane & -536870913, p3 = f2 !== s3.lane;
          if (p3 ? (Y2 & f2) === f2 : (r3 & f2) === f2) {
            f2 !== 0 && f2 === Ra && (bo = true), u3 !== null && (u3 = u3.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
            a: {
              var m2 = e16, h3 = s3;
              f2 = t3;
              var g3 = n2;
              switch (h3.tag) {
                case 1:
                  if (m2 = h3.payload, typeof m2 == `function`) {
                    d3 = m2.call(g3, d3, f2);
                    break a;
                  }
                  d3 = m2;
                  break a;
                case 3:
                  m2.flags = m2.flags & -65537 | 128;
                case 0:
                  if (m2 = h3.payload, f2 = typeof m2 == `function` ? m2.call(g3, d3, f2) : m2, f2 == null) break a;
                  d3 = D2({}, d3, f2);
                  break a;
                case 2:
                  po = true;
              }
            }
            f2 = s3.callback, f2 !== null && (e16.flags |= 64, p3 && (e16.flags |= 8192), p3 = i2.callbacks, p3 === null ? i2.callbacks = [f2] : p3.push(f2));
          } else p3 = { lane: f2, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u3 === null ? (l3 = u3 = p3, c3 = d3) : u3 = u3.next = p3, o2 |= f2;
          if (s3 = s3.next, s3 === null) {
            if (s3 = i2.shared.pending, s3 === null) break;
            p3 = s3, s3 = p3.next, p3.next = null, i2.lastBaseUpdate = p3, i2.shared.pending = null;
          }
        } while (1);
        u3 === null && (c3 = d3), i2.baseState = c3, i2.firstBaseUpdate = l3, i2.lastBaseUpdate = u3, a3 === null && (i2.shared.lanes = 0), od |= o2, e16.lanes = o2, e16.memoizedState = d3;
      }
    }
    function Co(e16, t3) {
      if (typeof e16 != `function`) throw Error(s2(191, e16));
      e16.call(t3);
    }
    function wo(e16, t3) {
      var n2 = e16.callbacks;
      if (n2 !== null) for (e16.callbacks = null, e16 = 0; e16 < n2.length; e16++) Co(n2[e16], t3);
    }
    var To = Ce3(null), Eo = Ce3(0);
    function Do(e16, t3) {
      e16 = id, N3(Eo, e16), N3(To, t3), id = e16 | t3.baseLanes;
    }
    function Oo() {
      N3(Eo, id), N3(To, To.current);
    }
    function ko() {
      id = Eo.current, we3(To), we3(Eo);
    }
    var Ao = Ce3(null), jo = null;
    function Mo(e16) {
      var t3 = e16.alternate;
      N3(Lo, Lo.current & 1), N3(Ao, e16), jo === null && (t3 === null || To.current !== null || t3.memoizedState !== null) && (jo = e16);
    }
    function No(e16) {
      N3(Lo, Lo.current), N3(Ao, e16), jo === null && (jo = e16);
    }
    function Po(e16) {
      e16.tag === 22 ? (N3(Lo, Lo.current), N3(Ao, e16), jo === null && (jo = e16)) : Fo();
    }
    function Fo() {
      N3(Lo, Lo.current), N3(Ao, Ao.current);
    }
    function Io(e16) {
      we3(Ao), jo === e16 && (jo = null), we3(Lo);
    }
    var Lo = Ce3(0);
    function Ro(e16, t3) {
      N3(Ao, Ao.current), N3(Lo, t3);
    }
    function zo(e16) {
      we3(Lo), we3(Ao), jo === e16 && (jo = null);
    }
    function Bo(e16) {
      for (var t3 = e16; t3 !== null; ) {
        if (t3.tag === 13) {
          var n2 = t3.memoizedState;
          if (n2 !== null && (n2 = n2.dehydrated, n2 === null || om(n2) || sm(n2))) return t3;
        } else if (t3.tag === 19 && t3.memoizedProps.revealOrder !== `independent`) {
          if (t3.flags & 128) return t3;
        } else if (t3.child !== null) {
          t3.child.return = t3, t3 = t3.child;
          continue;
        }
        if (t3 === e16) break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e16) return null;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
      return null;
    }
    var Vo = 0, H2 = null, U2 = null, Ho = null, Uo = false, Wo = false, Go = false, Ko = 0, qo = 0, Jo = null, Yo = 0;
    function Xo() {
      throw Error(s2(321));
    }
    function Zo(e16, t3) {
      if (t3 === null) return false;
      for (var n2 = 0; n2 < t3.length && n2 < e16.length; n2++) if (!Hr2(e16[n2], t3[n2])) return false;
      return true;
    }
    function Qo(e16, t3, n2, r3, i2, a3) {
      return Vo = a3, H2 = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, A3.H = e16 === null || e16.memoizedState === null ? hc : gc, Go = false, a3 = n2(r3, i2), Go = false, Wo && (a3 = es(t3, n2, r3, i2)), $o(e16), a3;
    }
    function $o(e16) {
      A3.H = mc;
      var t3 = U2 !== null && U2.next !== null;
      if (Vo = 0, Ho = U2 = H2 = null, Uo = false, qo = 0, Jo = null, t3) throw Error(s2(300));
      e16 === null || Nc || (e16 = e16.dependencies, e16 !== null && Sa(e16) && (Nc = true));
    }
    function es(e16, t3, n2, r3) {
      H2 = e16;
      var i2 = 0;
      do {
        if (Wo && (Jo = null), qo = 0, Wo = false, 25 <= i2) throw Error(s2(301));
        if (i2 += 1, Ho = U2 = null, e16.updateQueue != null) {
          var a3 = e16.updateQueue;
          a3.lastEffect = null, a3.events = null, a3.stores = null, a3.memoCache != null && (a3.memoCache.index = 0);
        }
        A3.H = _c, a3 = t3(n2, r3);
      } while (Wo);
      return a3;
    }
    function ts() {
      var e16 = A3.H, t3 = e16.useState()[0];
      return t3 = typeof t3.then == `function` ? cs(t3) : t3, e16 = e16.useState()[0], (U2 === null ? null : U2.memoizedState) !== e16 && (H2.flags |= 1024), t3;
    }
    function ns() {
      var e16 = Ko !== 0;
      return Ko = 0, e16;
    }
    function rs(e16, t3, n2) {
      t3.updateQueue = e16.updateQueue, t3.flags &= -2053, e16.lanes &= ~n2;
    }
    function is(e16) {
      if (Uo) {
        for (e16 = e16.memoizedState; e16 !== null; ) {
          var t3 = e16.queue;
          t3 !== null && (t3.pending = null), e16 = e16.next;
        }
        Uo = false;
      }
      Vo = 0, Ho = U2 = H2 = null, Wo = false, qo = Ko = 0, Jo = null;
    }
    function as() {
      var e16 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Ho === null ? H2.memoizedState = Ho = e16 : Ho = Ho.next = e16, Ho;
    }
    function os() {
      if (U2 === null) {
        var e16 = H2.alternate;
        e16 = e16 === null ? null : e16.memoizedState;
      } else e16 = U2.next;
      var t3 = Ho === null ? H2.memoizedState : Ho.next;
      if (t3 !== null) Ho = t3, U2 = e16;
      else {
        if (e16 === null) throw H2.alternate === null ? Error(s2(467)) : Error(s2(310));
        U2 = e16, e16 = { memoizedState: U2.memoizedState, baseState: U2.baseState, baseQueue: U2.baseQueue, queue: U2.queue, next: null }, Ho === null ? H2.memoizedState = Ho = e16 : Ho = Ho.next = e16;
      }
      return Ho;
    }
    function ss() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function cs(e16) {
      var t3 = qo;
      return qo += 1, Jo === null && (Jo = []), e16 = $a(Jo, e16, t3), t3 = H2, (Ho === null ? t3.memoizedState : Ho.next) === null && (t3 = t3.alternate, A3.H = t3 === null || t3.memoizedState === null ? hc : gc), e16;
    }
    function ls(e16) {
      if (typeof e16 == `object` && e16) {
        if (typeof e16.then == `function`) return cs(e16);
        if (e16.$$typeof === he3) return;
        if (e16.$$typeof === ae3) return wa(e16);
      }
      throw Error(s2(438, String(e16)));
    }
    function us(e16) {
      var t3 = null, n2 = H2.updateQueue;
      if (n2 !== null && (t3 = n2.memoCache), t3 == null) {
        var r3 = H2.alternate;
        r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e17) {
          return e17.slice();
        }), index: 0 })));
      }
      if (t3 ??= { data: [], index: 0 }, n2 === null && (n2 = ss(), H2.updateQueue = n2), n2.memoCache = t3, n2 = t3.data[t3.index], n2 === void 0) for (n2 = t3.data[t3.index] = Array(e16), r3 = 0; r3 < e16; r3++) n2[r3] = pe3;
      return t3.index++, n2;
    }
    function ds(e16, t3) {
      return typeof t3 == `function` ? t3(e16) : t3;
    }
    function fs(e16) {
      return ps(os(), U2, e16);
    }
    function ps(e16, t3, n2) {
      var r3 = e16.queue;
      if (r3 === null) throw Error(s2(311));
      r3.lastRenderedReducer = n2;
      var i2 = e16.baseQueue, a3 = r3.pending;
      if (a3 !== null) {
        if (i2 !== null) {
          var o2 = i2.next;
          i2.next = a3.next, a3.next = o2;
        }
        t3.baseQueue = i2 = a3, r3.pending = null;
      }
      if (a3 = e16.baseState, i2 === null) e16.memoizedState = a3;
      else {
        t3 = i2.next;
        var c3 = o2 = null, l3 = null, u3 = t3, d3 = false;
        do {
          var f2 = u3.lane & -536870913;
          if (f2 === u3.lane ? (Vo & f2) === f2 : (Y2 & f2) === f2) {
            var p3 = u3.revertLane;
            if (p3 === 0) l3 !== null && (l3 = l3.next = { lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }), f2 === Ra && (d3 = true);
            else if ((Vo & p3) === p3) {
              u3 = u3.next, p3 === Ra && (d3 = true);
              continue;
            } else f2 = { lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = f2, o2 = a3) : l3 = l3.next = f2, H2.lanes |= p3, od |= p3;
            f2 = u3.action, Go && n2(a3, f2), a3 = u3.hasEagerState ? u3.eagerState : n2(a3, f2);
          } else p3 = { lane: f2, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l3 === null ? (c3 = l3 = p3, o2 = a3) : l3 = l3.next = p3, H2.lanes |= f2, od |= f2;
          u3 = u3.next;
        } while (u3 !== null && u3 !== t3);
        if (l3 === null ? o2 = a3 : l3.next = c3, !Hr2(a3, e16.memoizedState) && (Nc = true, d3 && (n2 = za, n2 !== null))) throw n2;
        e16.memoizedState = a3, e16.baseState = o2, e16.baseQueue = l3, r3.lastRenderedState = a3;
      }
      return i2 === null && (r3.lanes = 0), [e16.memoizedState, r3.dispatch];
    }
    function ms(e16) {
      var t3 = os(), n2 = t3.queue;
      if (n2 === null) throw Error(s2(311));
      n2.lastRenderedReducer = e16;
      var r3 = n2.dispatch, i2 = n2.pending, a3 = t3.memoizedState;
      if (i2 !== null) {
        n2.pending = null;
        var o2 = i2 = i2.next;
        do
          a3 = e16(a3, o2.action), o2 = o2.next;
        while (o2 !== i2);
        Hr2(a3, t3.memoizedState) || (Nc = true), t3.memoizedState = a3, t3.baseQueue === null && (t3.baseState = a3), n2.lastRenderedState = a3;
      }
      return [a3, r3];
    }
    function hs(e16, t3, n2) {
      var r3 = H2, i2 = os(), a3 = V3;
      if (a3) {
        if (n2 === void 0) throw Error(s2(407));
        n2 = n2();
      } else n2 = t3();
      var o2 = !Hr2((U2 || i2).memoizedState, n2);
      if (o2 && (i2.memoizedState = n2, Nc = true), i2 = i2.queue, Bs(vs.bind(null, r3, i2, e16), [e16]), e16 = i2.getSnapshot !== t3 || o2 || Ho !== null && (Ho.memoizedState.tag & 1) != 0, Fs(e16 ? 9 : 8, { destroy: void 0 }, _s.bind(null, r3, i2, n2, t3), null), e16) {
        if (r3.flags |= 2048, q2 === null) throw Error(s2(349));
        a3 || Vo & 127 || gs(r3, t3, n2);
      }
      return n2;
    }
    function gs(e16, t3, n2) {
      e16.flags |= 16384, e16 = { getSnapshot: t3, value: n2 }, t3 = H2.updateQueue, t3 === null ? (t3 = ss(), H2.updateQueue = t3, t3.stores = [e16]) : (n2 = t3.stores, n2 === null ? t3.stores = [e16] : n2.push(e16));
    }
    function _s(e16, t3, n2, r3) {
      t3.value = n2, t3.getSnapshot = r3, ys(t3) && bs(e16);
    }
    function vs(e16, t3, n2) {
      return n2(function() {
        ys(t3) && bs(e16);
      });
    }
    function ys(e16) {
      var t3 = e16.getSnapshot;
      e16 = e16.value;
      try {
        var n2 = t3();
        return !Hr2(e16, n2);
      } catch {
        return true;
      }
    }
    function bs(e16) {
      var t3 = Di2(e16, 2);
      t3 !== null && Pd(t3, e16, 2);
    }
    function xs(e16) {
      var t3 = as();
      if (typeof e16 == `function`) {
        var n2 = e16;
        if (e16 = n2(), Go) {
          et3(true);
          try {
            n2();
          } finally {
            et3(false);
          }
        }
      }
      return t3.memoizedState = t3.baseState = e16, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ds, lastRenderedState: e16 }, t3;
    }
    function Ss(e16, t3, n2, r3) {
      return e16.baseState = n2, ps(e16, U2, typeof r3 == `function` ? r3 : ds);
    }
    function Cs(e16, t3, n2, r3, i2) {
      if (dc(e16)) throw Error(s2(485));
      if (e16 = t3.action, e16 !== null) {
        var a3 = { payload: i2, action: e16, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e17) {
          a3.listeners.push(e17);
        } };
        A3.T === null ? a3.isTransition = false : n2(true), r3(a3), n2 = t3.pending, n2 === null ? (a3.next = t3.pending = a3, ws(t3, a3)) : (a3.next = n2.next, t3.pending = n2.next = a3);
      }
    }
    function ws(e16, t3) {
      var n2 = t3.action, r3 = t3.payload, i2 = e16.state;
      if (t3.isTransition) {
        var a3 = A3.T, o2 = {};
        o2.types = a3 === null ? null : a3.types, A3.T = o2;
        try {
          var s3 = n2(i2, r3), c3 = A3.S;
          c3 !== null && c3(o2, s3), Ts(e16, t3, s3);
        } catch (n3) {
          Ds(e16, t3, n3);
        } finally {
          a3 !== null && o2.types !== null && (a3.types = o2.types), A3.T = a3;
        }
      } else try {
        a3 = n2(i2, r3), Ts(e16, t3, a3);
      } catch (n3) {
        Ds(e16, t3, n3);
      }
    }
    function Ts(e16, t3, n2) {
      typeof n2 == `object` && n2 && typeof n2.then == `function` ? n2.then(function(n3) {
        Es(e16, t3, n3);
      }, function(n3) {
        return Ds(e16, t3, n3);
      }) : Es(e16, t3, n2);
    }
    function Es(e16, t3, n2) {
      t3.status = `fulfilled`, t3.value = n2, Os(t3), e16.state = n2, t3 = e16.pending, t3 !== null && (n2 = t3.next, n2 === t3 ? e16.pending = null : (n2 = n2.next, t3.next = n2, ws(e16, n2)));
    }
    function Ds(e16, t3, n2) {
      var r3 = e16.pending;
      if (e16.pending = null, r3 !== null) {
        r3 = r3.next;
        do
          t3.status = `rejected`, t3.reason = n2, Os(t3), t3 = t3.next;
        while (t3 !== r3);
      }
      e16.action = null;
    }
    function Os(e16) {
      e16 = e16.listeners;
      for (var t3 = 0; t3 < e16.length; t3++) (0, e16[t3])();
    }
    function ks(e16, t3) {
      return t3;
    }
    function As(e16, t3) {
      if (V3) {
        var n2 = q2.formState;
        if (n2 !== null) {
          a: {
            var r3 = H2;
            if (V3) {
              if (B3) {
                b: {
                  for (var i2 = B3, a3 = aa2; i2.nodeType !== 8; ) {
                    if (!a3) {
                      i2 = null;
                      break b;
                    }
                    if (i2 = lm(i2.nextSibling), i2 === null) {
                      i2 = null;
                      break b;
                    }
                  }
                  a3 = i2.data, i2 = a3 === `F!` || a3 === `F` ? i2 : null;
                }
                if (i2) {
                  B3 = lm(i2.nextSibling), r3 = i2.data === `F!`;
                  break a;
                }
              }
              sa2(r3);
            }
            r3 = false;
          }
          r3 && (t3 = n2[0]);
        }
      }
      return n2 = as(), n2.memoizedState = n2.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ks, lastRenderedState: t3 }, n2.queue = r3, n2 = cc.bind(null, H2, r3), r3.dispatch = n2, r3 = xs(false), a3 = uc.bind(null, H2, false, r3.queue), r3 = as(), i2 = { state: t3, dispatch: null, action: e16, pending: null }, r3.queue = i2, n2 = Cs.bind(null, H2, i2, a3, n2), i2.dispatch = n2, r3.memoizedState = e16, [t3, n2, false];
    }
    function js(e16) {
      return Ms(os(), U2, e16);
    }
    function Ms(e16, t3, n2) {
      if (t3 = ps(e16, t3, ks)[0], e16 = fs(ds)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
        var r3 = cs(t3);
      } catch (e17) {
        throw e17 === Ja ? Xa : e17;
      }
      else r3 = t3;
      t3 = os();
      var i2 = t3.queue, a3 = i2.dispatch;
      return n2 !== t3.memoizedState && (H2.flags |= 2048, Fs(9, { destroy: void 0 }, Ns.bind(null, i2, n2), null)), [r3, a3, e16];
    }
    function Ns(e16, t3) {
      e16.action = t3;
    }
    function Ps(e16) {
      var t3 = os(), n2 = U2;
      if (n2 !== null) return Ms(t3, n2, e16);
      os(), t3 = t3.memoizedState, n2 = os();
      var r3 = n2.queue.dispatch;
      return n2.memoizedState = e16, [t3, r3, false];
    }
    function Fs(e16, t3, n2, r3) {
      return e16 = { tag: e16, create: n2, deps: r3, inst: t3, next: null }, t3 = H2.updateQueue, t3 === null && (t3 = ss(), H2.updateQueue = t3), n2 = t3.lastEffect, n2 === null ? t3.lastEffect = e16.next = e16 : (r3 = n2.next, n2.next = e16, e16.next = r3, t3.lastEffect = e16), e16;
    }
    function Is() {
      return os().memoizedState;
    }
    function Ls(e16, t3, n2, r3) {
      var i2 = as();
      H2.flags |= e16, i2.memoizedState = Fs(1 | t3, { destroy: void 0 }, n2, r3 === void 0 ? null : r3);
    }
    function Rs(e16, t3, n2, r3) {
      var i2 = os();
      r3 = r3 === void 0 ? null : r3;
      var a3 = i2.memoizedState.inst;
      U2 !== null && r3 !== null && Zo(r3, U2.memoizedState.deps) ? i2.memoizedState = Fs(t3, a3, n2, r3) : (H2.flags |= e16, i2.memoizedState = Fs(1 | t3, a3, n2, r3));
    }
    function zs(e16, t3) {
      Ls(8390656, 8, e16, t3);
    }
    function Bs(e16, t3) {
      Rs(2048, 8, e16, t3);
    }
    function Vs(e16) {
      H2.flags |= 4;
      var t3 = H2.updateQueue;
      if (t3 === null) t3 = ss(), H2.updateQueue = t3, t3.events = [e16];
      else {
        var n2 = t3.events;
        n2 === null ? t3.events = [e16] : n2.push(e16);
      }
    }
    function Hs(e16) {
      var t3 = os().memoizedState;
      return Vs({ ref: t3, nextImpl: e16 }), function() {
        if (K2 & 2) throw Error(s2(440));
        return t3.impl.apply(void 0, arguments);
      };
    }
    function Us(e16, t3) {
      return Rs(4, 2, e16, t3);
    }
    function Ws(e16, t3) {
      return Rs(4, 4, e16, t3);
    }
    function Gs(e16, t3) {
      if (typeof t3 == `function`) {
        e16 = e16();
        var n2 = t3(e16);
        return function() {
          typeof n2 == `function` ? n2() : t3(null);
        };
      }
      if (t3 != null) return e16 = e16(), t3.current = e16, function() {
        t3.current = null;
      };
    }
    function Ks(e16, t3, n2) {
      n2 = n2 == null ? null : n2.concat([e16]), Rs(4, 4, Gs.bind(null, t3, e16), n2);
    }
    function qs() {
    }
    function Js(e16, t3) {
      var n2 = os();
      t3 = t3 === void 0 ? null : t3;
      var r3 = n2.memoizedState;
      return t3 !== null && Zo(t3, r3[1]) ? r3[0] : (n2.memoizedState = [e16, t3], e16);
    }
    function Ys(e16, t3) {
      var n2 = os();
      t3 = t3 === void 0 ? null : t3;
      var r3 = n2.memoizedState;
      if (t3 !== null && Zo(t3, r3[1])) return r3[0];
      if (r3 = e16(), Go) {
        et3(true);
        try {
          e16();
        } finally {
          et3(false);
        }
      }
      return n2.memoizedState = [r3, t3], r3;
    }
    function Xs(e16, t3, n2) {
      return n2 === void 0 || Vo & 1073741824 && !(Y2 & 261930) ? e16.memoizedState = t3 : (e16.memoizedState = n2, e16 = Md(), H2.lanes |= e16, od |= e16, n2);
    }
    function Zs(e16, t3, n2, r3) {
      return Hr2(n2, t3) ? n2 : To.current === null ? !(Vo & 106) || Vo & 1073741824 && !(Y2 & 261930) ? (Nc = true, e16.memoizedState = n2) : (e16 = Md(), H2.lanes |= e16, od |= e16, t3) : (e16 = Xs(e16, n2, r3), Hr2(e16, t3) || (Nc = true), e16);
    }
    function Qs(e16, t3, n2, r3, i2) {
      var a3 = j3.p;
      j3.p = a3 !== 0 && 8 > a3 ? a3 : 8;
      var o2 = A3.T, s3 = {};
      s3.types = o2 === null ? null : o2.types, A3.T = s3, uc(e16, false, t3, n2);
      try {
        var c3 = i2(), l3 = A3.S;
        l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? lc(e16, t3, Ha(c3, r3), jd(e16)) : lc(e16, t3, r3, jd(e16));
      } catch (n3) {
        lc(e16, t3, { then: function() {
        }, status: `rejected`, reason: n3 }, jd());
      } finally {
        j3.p = a3, o2 !== null && s3.types !== null && (o2.types = s3.types), A3.T = o2;
      }
    }
    function $s() {
    }
    function ec(e16, t3, n2, r3) {
      if (e16.tag !== 5) throw Error(s2(476));
      var i2 = tc(e16).queue;
      Qs(e16, i2, t3, xe3, n2 === null ? $s : function() {
        return nc(e16), n2(r3);
      });
    }
    function tc(e16) {
      var t3 = e16.memoizedState;
      if (t3 !== null) return t3;
      t3 = { memoizedState: xe3, baseState: xe3, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ds, lastRenderedState: xe3 }, next: null };
      var n2 = {};
      return t3.next = { memoizedState: n2, baseState: n2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ds, lastRenderedState: n2 }, next: null }, e16.memoizedState = t3, e16 = e16.alternate, e16 !== null && (e16.memoizedState = t3), t3;
    }
    function nc(e16) {
      var t3 = tc(e16);
      t3.next === null && (t3 = e16.alternate.memoizedState), lc(e16, t3.next.queue, {}, jd());
    }
    function rc() {
      return wa(sh);
    }
    function ic() {
      return os().memoizedState;
    }
    function ac() {
      return os().memoizedState;
    }
    function oc(e16) {
      for (var t3 = e16.return; t3 !== null; ) {
        switch (t3.tag) {
          case 24:
          case 3:
            var n2 = jd();
            e16 = go(n2);
            var r3 = _o(t3, e16, n2);
            r3 !== null && (Pd(r3, t3, n2), vo(r3, t3, n2)), t3 = { cache: ja() }, e16.payload = t3;
            return;
        }
        t3 = t3.return;
      }
    }
    function sc(e16, t3, n2) {
      var r3 = jd();
      n2 = { lane: r3, revertLane: 0, gesture: null, action: n2, hasEagerState: false, eagerState: null, next: null }, dc(e16) ? fc(t3, n2) : (n2 = Ei2(e16, t3, n2, r3), n2 !== null && (Pd(n2, e16, r3), pc(n2, t3, r3)));
    }
    function cc(e16, t3, n2) {
      lc(e16, t3, n2, jd());
    }
    function lc(e16, t3, n2, r3) {
      var i2 = { lane: r3, revertLane: 0, gesture: null, action: n2, hasEagerState: false, eagerState: null, next: null };
      if (dc(e16)) fc(t3, i2);
      else {
        var a3 = e16.alternate;
        if (e16.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
          var o2 = t3.lastRenderedState, s3 = a3(o2, n2);
          if (i2.hasEagerState = true, i2.eagerState = s3, Hr2(s3, o2)) return Ti2(e16, t3, i2, 0), q2 === null && wi2(), false;
        } catch {
        }
        if (n2 = Ei2(e16, t3, i2, r3), n2 !== null) return Pd(n2, e16, r3), pc(n2, t3, r3), true;
      }
      return false;
    }
    function uc(e16, t3, n2, r3) {
      if (r3 = { lane: 2, revertLane: Pf(), gesture: null, action: r3, hasEagerState: false, eagerState: null, next: null }, dc(e16)) {
        if (t3) throw Error(s2(479));
      } else t3 = Ei2(e16, n2, r3, 2), t3 !== null && Pd(t3, e16, 2);
    }
    function dc(e16) {
      var t3 = e16.alternate;
      return e16 === H2 || t3 !== null && t3 === H2;
    }
    function fc(e16, t3) {
      Wo = Uo = true;
      var n2 = e16.pending;
      n2 === null ? t3.next = t3 : (t3.next = n2.next, n2.next = t3), e16.pending = t3;
    }
    function pc(e16, t3, n2) {
      if (n2 & 4194048) {
        var r3 = t3.lanes;
        r3 &= e16.pendingLanes, n2 |= r3, t3.lanes = n2, vt3(e16, n2);
      }
    }
    var mc = { readContext: wa, use: ls, useCallback: Xo, useContext: Xo, useEffect: Xo, useImperativeHandle: Xo, useLayoutEffect: Xo, useInsertionEffect: Xo, useMemo: Xo, useReducer: Xo, useRef: Xo, useState: Xo, useDebugValue: Xo, useDeferredValue: Xo, useTransition: Xo, useSyncExternalStore: Xo, useId: Xo, useHostTransitionStatus: Xo, useFormState: Xo, useActionState: Xo, useOptimistic: Xo, useMemoCache: Xo, useCacheRefresh: Xo, useEffectEvent: Xo }, hc = { readContext: wa, use: ls, useCallback: function(e16, t3) {
      return as().memoizedState = [e16, t3 === void 0 ? null : t3], e16;
    }, useContext: wa, useEffect: zs, useImperativeHandle: function(e16, t3, n2) {
      n2 = n2 == null ? null : n2.concat([e16]), Ls(4194308, 4, Gs.bind(null, t3, e16), n2);
    }, useLayoutEffect: function(e16, t3) {
      return Ls(4194308, 4, e16, t3);
    }, useInsertionEffect: function(e16, t3) {
      Ls(4, 2, e16, t3);
    }, useMemo: function(e16, t3) {
      var n2 = as();
      t3 = t3 === void 0 ? null : t3;
      var r3 = e16();
      if (Go) {
        et3(true);
        try {
          e16();
        } finally {
          et3(false);
        }
      }
      return n2.memoizedState = [r3, t3], r3;
    }, useReducer: function(e16, t3, n2) {
      var r3 = as();
      if (n2 !== void 0) {
        var i2 = n2(t3);
        if (Go) {
          et3(true);
          try {
            n2(t3);
          } finally {
            et3(false);
          }
        }
      } else i2 = t3;
      return r3.memoizedState = r3.baseState = i2, e16 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e16, lastRenderedState: i2 }, r3.queue = e16, e16 = e16.dispatch = sc.bind(null, H2, e16), [r3.memoizedState, e16];
    }, useRef: function(e16) {
      var t3 = as();
      return e16 = { current: e16 }, t3.memoizedState = e16;
    }, useState: function(e16) {
      e16 = xs(e16);
      var t3 = e16.queue, n2 = cc.bind(null, H2, t3);
      return t3.dispatch = n2, [e16.memoizedState, n2];
    }, useDebugValue: qs, useDeferredValue: function(e16, t3) {
      return Xs(as(), e16, t3);
    }, useTransition: function() {
      var e16 = xs(false);
      return e16 = Qs.bind(null, H2, e16.queue, true, false), as().memoizedState = e16, [false, e16];
    }, useSyncExternalStore: function(e16, t3, n2) {
      var r3 = H2, i2 = as();
      if (V3) {
        if (n2 === void 0) throw Error(s2(407));
        n2 = n2();
      } else {
        if (n2 = t3(), q2 === null) throw Error(s2(349));
        Y2 & 127 || gs(r3, t3, n2);
      }
      i2.memoizedState = n2;
      var a3 = { value: n2, getSnapshot: t3 };
      return i2.queue = a3, zs(vs.bind(null, r3, a3, e16), [e16]), r3.flags |= 2048, Fs(9, { destroy: void 0 }, _s.bind(null, r3, a3, n2, t3), null), n2;
    }, useId: function() {
      var e16 = as(), t3 = q2.identifierPrefix;
      if (V3) {
        var n2 = Zi2, r3 = Xi2;
        n2 = (r3 & ~(1 << 32 - tt3(r3) - 1)).toString(32) + n2, t3 = `_` + t3 + `R_` + n2, n2 = Ko++, 0 < n2 && (t3 += `H` + n2.toString(32)), t3 += `_`;
      } else n2 = Yo++, t3 = `_` + t3 + `r_` + n2.toString(32) + `_`;
      return e16.memoizedState = t3;
    }, useHostTransitionStatus: rc, useFormState: As, useActionState: As, useOptimistic: function(e16) {
      var t3 = as();
      t3.memoizedState = t3.baseState = e16;
      var n2 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return t3.queue = n2, t3 = uc.bind(null, H2, true, n2), n2.dispatch = t3, [e16, t3];
    }, useMemoCache: us, useCacheRefresh: function() {
      return as().memoizedState = oc.bind(null, H2);
    }, useEffectEvent: function(e16) {
      var t3 = as(), n2 = { impl: e16 };
      return t3.memoizedState = n2, function() {
        if (K2 & 2) throw Error(s2(440));
        return n2.impl.apply(void 0, arguments);
      };
    } }, gc = { readContext: wa, use: ls, useCallback: Js, useContext: wa, useEffect: Bs, useImperativeHandle: Ks, useInsertionEffect: Us, useLayoutEffect: Ws, useMemo: Ys, useReducer: fs, useRef: Is, useState: function() {
      return fs(ds);
    }, useDebugValue: qs, useDeferredValue: function(e16, t3) {
      return Zs(os(), U2.memoizedState, e16, t3);
    }, useTransition: function() {
      var e16 = fs(ds)[0], t3 = os().memoizedState;
      return [typeof e16 == `boolean` ? e16 : cs(e16), t3];
    }, useSyncExternalStore: hs, useId: ic, useHostTransitionStatus: rc, useFormState: js, useActionState: js, useOptimistic: function(e16, t3) {
      return Ss(os(), U2, e16, t3);
    }, useMemoCache: us, useCacheRefresh: ac, useEffectEvent: Hs }, _c = { readContext: wa, use: ls, useCallback: Js, useContext: wa, useEffect: Bs, useImperativeHandle: Ks, useInsertionEffect: Us, useLayoutEffect: Ws, useMemo: Ys, useReducer: ms, useRef: Is, useState: function() {
      return ms(ds);
    }, useDebugValue: qs, useDeferredValue: function(e16, t3) {
      var n2 = os();
      return U2 === null ? Xs(n2, e16, t3) : Zs(n2, U2.memoizedState, e16, t3);
    }, useTransition: function() {
      var e16 = ms(ds)[0], t3 = os().memoizedState;
      return [typeof e16 == `boolean` ? e16 : cs(e16), t3];
    }, useSyncExternalStore: hs, useId: ic, useHostTransitionStatus: rc, useFormState: Ps, useActionState: Ps, useOptimistic: function(e16, t3) {
      var n2 = os();
      return U2 === null ? (n2.baseState = e16, [e16, n2.queue.dispatch]) : Ss(n2, U2, e16, t3);
    }, useMemoCache: us, useCacheRefresh: ac, useEffectEvent: Hs };
    function vc(e16, t3, n2, r3) {
      t3 = e16.memoizedState, n2 = n2(r3, t3), n2 = n2 == null ? t3 : D2({}, t3, n2), e16.memoizedState = n2, e16.lanes === 0 && (e16.updateQueue.baseState = n2);
    }
    var yc = { enqueueSetState: function(e16, t3, n2) {
      e16 = e16._reactInternals;
      var r3 = jd(), i2 = go(r3);
      i2.payload = t3, n2 != null && (i2.callback = n2), t3 = _o(e16, i2, r3), t3 !== null && (Pd(t3, e16, r3), vo(t3, e16, r3));
    }, enqueueReplaceState: function(e16, t3, n2) {
      e16 = e16._reactInternals;
      var r3 = jd(), i2 = go(r3);
      i2.tag = 1, i2.payload = t3, n2 != null && (i2.callback = n2), t3 = _o(e16, i2, r3), t3 !== null && (Pd(t3, e16, r3), vo(t3, e16, r3));
    }, enqueueForceUpdate: function(e16, t3) {
      e16 = e16._reactInternals;
      var n2 = jd(), r3 = go(n2);
      r3.tag = 2, t3 != null && (r3.callback = t3), t3 = _o(e16, r3, n2), t3 !== null && (Pd(t3, e16, n2), vo(t3, e16, n2));
    } };
    function bc(e16, t3, n2, r3, i2, a3, o2) {
      return e16 = e16.stateNode, typeof e16.shouldComponentUpdate == `function` ? e16.shouldComponentUpdate(r3, a3, o2) : t3.prototype && t3.prototype.isPureReactComponent ? !Ur2(n2, r3) || !Ur2(i2, a3) : true;
    }
    function xc(e16, t3, n2, r3) {
      e16 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n2, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n2, r3), t3.state !== e16 && yc.enqueueReplaceState(t3, t3.state, null);
    }
    function Sc(e16, t3) {
      var n2 = t3;
      if (`ref` in t3) for (var r3 in n2 = {}, t3) r3 !== `ref` && (n2[r3] = t3[r3]);
      if (e16 = e16.defaultProps) for (var i2 in n2 === t3 && (n2 = D2({}, n2)), e16) n2[i2] === void 0 && (n2[i2] = e16[i2]);
      return n2;
    }
    function Cc(e16) {
      xi2(e16);
    }
    function wc(e16) {
      console.error(e16);
    }
    function Tc(e16) {
      xi2(e16);
    }
    function Ec(e16, t3) {
      try {
        var n2 = e16.onUncaughtError;
        n2(t3.value, { componentStack: t3.stack });
      } catch (e17) {
        setTimeout(function() {
          throw e17;
        });
      }
    }
    function Dc(e16, t3, n2) {
      try {
        var r3 = e16.onCaughtError;
        r3(n2.value, { componentStack: n2.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
      } catch (e17) {
        setTimeout(function() {
          throw e17;
        });
      }
    }
    function Oc(e16, t3, n2) {
      return n2 = go(n2), n2.tag = 3, n2.payload = { element: null }, n2.callback = function() {
        Ec(e16, t3);
      }, n2;
    }
    function kc(e16) {
      return e16 = go(e16), e16.tag = 3, e16;
    }
    function Ac(e16, t3, n2, r3) {
      var i2 = n2.type.getDerivedStateFromError;
      if (typeof i2 == `function`) {
        var a3 = r3.value;
        e16.payload = function() {
          return i2(a3);
        }, e16.callback = function() {
          Dc(t3, n2, r3);
        };
      }
      var o2 = n2.stateNode;
      o2 !== null && typeof o2.componentDidCatch == `function` && (e16.callback = function() {
        Dc(t3, n2, r3), typeof i2 != `function` && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
        var e17 = r3.stack;
        this.componentDidCatch(r3.value, { componentStack: e17 === null ? `` : e17 });
      });
    }
    function jc(e16, t3, n2, r3, i2) {
      if (n2.flags |= 32768, typeof r3 == `object` && r3 && typeof r3.then == `function`) {
        if (t3 = n2.alternate, t3 !== null && xa(t3, n2, i2, true), n2 = Ao.current, n2 !== null) {
          switch (n2.tag) {
            case 31:
            case 13:
            case 19:
              return jo === null ? Kd() : n2.alternate === null && ad === 0 && (ad = 3), n2.flags &= -257, n2.flags |= 65536, n2.lanes = i2, r3 === Za ? n2.flags |= 16384 : (t3 = n2.updateQueue, t3 === null ? n2.updateQueue = /* @__PURE__ */ new Set([r3]) : t3.add(r3), mf(e16, r3, i2)), false;
            case 22:
              return n2.flags |= 65536, r3 === Za ? n2.flags |= 16384 : (t3 = n2.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r3]) }, n2.updateQueue = t3) : (n2 = t3.retryQueue, n2 === null ? t3.retryQueue = /* @__PURE__ */ new Set([r3]) : n2.add(r3)), mf(e16, r3, i2)), false;
          }
          throw Error(s2(435, n2.tag));
        }
        return mf(e16, r3, i2), Kd(), false;
      }
      if (V3) return t3 = Ao.current, t3 === null ? (r3 !== oa2 && (t3 = Error(s2(423), { cause: r3 }), pa2(Hi2(t3, n2))), e16 = e16.current.alternate, e16.flags |= 65536, i2 &= -i2, e16.lanes |= i2, r3 = Hi2(r3, n2), i2 = Oc(e16.stateNode, r3, i2), yo(e16, i2), ad !== 4 && (ad = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = i2, r3 !== oa2 && (e16 = Error(s2(422), { cause: r3 }), pa2(Hi2(e16, n2)))), false;
      var a3 = Error(s2(520), { cause: r3 });
      if (a3 = Hi2(a3, n2), dd === null ? dd = [a3] : dd.push(a3), ad !== 4 && (ad = 2), t3 === null) return true;
      r3 = Hi2(r3, n2), n2 = t3;
      do {
        switch (n2.tag) {
          case 3:
            return n2.flags |= 65536, e16 = i2 & -i2, n2.lanes |= e16, e16 = Oc(n2.stateNode, r3, e16), yo(n2, e16), false;
          case 1:
            if (t3 = n2.type, a3 = n2.stateNode, !(n2.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || a3 !== null && typeof a3.componentDidCatch == `function` && (vd === null || !vd.has(a3)))) return n2.flags |= 65536, i2 &= -i2, n2.lanes |= i2, i2 = kc(i2), Ac(i2, e16, n2, r3), yo(n2, i2), false;
            break;
          case 22:
            if (n2.memoizedState !== null) return n2.flags |= 65536, false;
        }
        n2 = n2.return;
      } while (n2 !== null);
      return false;
    }
    var Mc = Error(s2(461)), Nc = false;
    function Pc(e16, t3, n2, r3) {
      t3.child = e16 === null ? fo(t3, null, n2, r3) : uo(t3, e16.child, n2, r3);
    }
    function Fc(e16, t3, n2, r3, i2) {
      n2 = n2.render;
      var a3 = t3.ref;
      if (`ref` in r3) {
        var o2 = {};
        for (var s3 in r3) s3 !== `ref` && (o2[s3] = r3[s3]);
      } else o2 = r3;
      return Ca(t3), r3 = Qo(e16, t3, n2, o2, a3, i2), s3 = ns(), e16 !== null && !Nc ? (rs(e16, t3, i2), ll(e16, t3, i2)) : (V3 && s3 && ea2(t3), t3.flags |= 1, Pc(e16, t3, r3, i2), t3.child);
    }
    function Ic(e16, t3, n2, r3, i2) {
      if (e16 === null) {
        var a3 = n2.type;
        return typeof a3 == `function` && !Ni2(a3) && a3.defaultProps === void 0 && n2.compare === null ? (t3.tag = 15, t3.type = a3, Lc(e16, t3, a3, r3, i2)) : (e16 = Ii2(n2.type, null, r3, t3, t3.mode, i2), e16.ref = t3.ref, e16.return = t3, t3.child = e16);
      }
      if (a3 = e16.child, !ul(e16, i2)) {
        var o2 = a3.memoizedProps;
        if (n2 = n2.compare, n2 = n2 === null ? Ur2 : n2, n2(o2, r3) && e16.ref === t3.ref) return ll(e16, t3, i2);
      }
      return t3.flags |= 1, e16 = Pi2(a3, r3), e16.ref = t3.ref, e16.return = t3, t3.child = e16;
    }
    function Lc(e16, t3, n2, r3, i2) {
      if (e16 !== null) {
        var a3 = e16.memoizedProps;
        if (Ur2(a3, r3) && e16.ref === t3.ref) if (Nc = false, t3.pendingProps = r3 = a3, ul(e16, i2)) e16.flags & 131072 && (Nc = true);
        else return t3.lanes = e16.lanes, ll(e16, t3, i2);
      }
      return Gc(e16, t3, n2, r3, i2);
    }
    function Rc(e16, t3, n2, r3) {
      var i2 = r3.children, a3 = e16 === null ? null : e16.memoizedState;
      if (e16 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
        if (t3.flags & 128) {
          if (a3 = a3 === null ? n2 : a3.baseLanes | n2, e16 !== null) {
            for (r3 = t3.child = e16.child, i2 = 0; r3 !== null; ) i2 = i2 | r3.lanes | r3.childLanes, r3 = r3.sibling;
            r3 = i2 & ~a3;
          } else r3 = 0, t3.child = null;
          return Bc(e16, t3, a3, n2, r3);
        }
        if (n2 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e16 !== null && Ka(t3, a3 === null ? null : a3.cachePool), a3 === null ? Oo() : Do(t3, a3), Po(t3);
        else return r3 = t3.lanes = 536870912, Bc(e16, t3, a3 === null ? n2 : a3.baseLanes | n2, n2, r3);
      } else a3 === null ? (e16 !== null && Ka(t3, null), Oo(), Fo()) : (Ka(t3, a3.cachePool), Do(t3, a3), Fo(), t3.memoizedState = null);
      return Pc(e16, t3, i2, n2), t3.child;
    }
    function zc(e16, t3) {
      return e16 !== null && e16.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
    }
    function Bc(e16, t3, n2, r3, i2) {
      var a3 = Ga();
      return a3 = a3 === null ? null : { parent: Aa._currentValue, pool: a3 }, t3.memoizedState = { baseLanes: n2, cachePool: a3 }, e16 !== null && Ka(t3, null), Oo(), Po(t3), e16 !== null && xa(e16, t3, r3, true), t3.childLanes = i2, null;
    }
    function Vc(e16, t3) {
      return t3 = el({ mode: t3.mode, children: t3.children }, e16.mode), t3.ref = e16.ref, e16.child = t3, t3.return = e16, t3;
    }
    function Hc(e16, t3, n2) {
      return uo(t3, e16.child, null, n2), e16 = Vc(t3, t3.pendingProps), e16.flags |= 2, Io(t3), t3.memoizedState = null, e16;
    }
    function Uc(e16, t3, n2) {
      var r3 = t3.pendingProps, i2 = (t3.flags & 128) != 0;
      if (t3.flags &= -129, e16 === null) {
        if (V3) {
          if (r3.mode === `hidden`) return e16 = Vc(t3, r3), t3.lanes = 536870912, e16.memoizedState = { baseLanes: 0, cachePool: null }, zc(null, e16);
          if (No(t3), (e16 = B3) ? (e16 = am(e16, aa2), e16 = e16 !== null && e16.data === `&` ? e16 : null, e16 !== null && (t3.memoizedState = { dehydrated: e16, treeContext: Yi2 === null ? null : { id: Xi2, overflow: Zi2 }, retryLane: 536870912, hydrationErrors: null }, n2 = zi2(e16), n2.return = t3, t3.child = n2, ra2 = t3, B3 = null)) : e16 = null, e16 === null) throw sa2(t3);
          return t3.lanes = 536870912, null;
        }
        return Vc(t3, r3);
      }
      var a3 = e16.memoizedState;
      if (a3 !== null) {
        var o2 = a3.dehydrated;
        if (No(t3), i2) if (t3.flags & 256) t3.flags &= -257, t3 = Hc(e16, t3, n2);
        else if (t3.memoizedState !== null) t3.child = e16.child, t3.flags |= 128, t3 = null;
        else throw Error(s2(558));
        else if (Nc || xa(e16, t3, n2, false), i2 = (n2 & e16.childLanes) !== 0, Nc || i2) {
          if (To.current === null) {
            if (r3 = q2, r3 !== null && (o2 = yt3(r3, n2), o2 !== 0 && o2 !== a3.retryLane)) throw a3.retryLane = o2, Di2(e16, o2), Pd(r3, e16, o2), Mc;
            Kd();
          }
          t3 = Hc(e16, t3, n2);
        } else e16 = a3.treeContext, B3 = lm(o2.nextSibling), ra2 = t3, V3 = true, ia2 = null, aa2 = false, e16 !== null && na2(t3, e16), t3 = Vc(t3, r3), t3.flags |= 134221824;
        return t3;
      }
      return e16 = Pi2(e16.child, { mode: r3.mode, children: r3.children }), e16.ref = t3.ref, t3.child = e16, e16.return = t3, e16;
    }
    function Wc(e16, t3) {
      var n2 = t3.ref;
      if (n2 === null) e16 !== null && e16.ref !== null && (t3.flags |= 4194816);
      else {
        if (typeof n2 != `function` && typeof n2 != `object`) throw Error(s2(284));
        (e16 === null || e16.ref !== n2) && (t3.flags |= 4194816);
      }
    }
    function Gc(e16, t3, n2, r3, i2) {
      return Ca(t3), n2 = Qo(e16, t3, n2, r3, void 0, i2), r3 = ns(), e16 !== null && !Nc ? (rs(e16, t3, i2), ll(e16, t3, i2)) : (V3 && r3 && ea2(t3), t3.flags |= 1, Pc(e16, t3, n2, i2), t3.child);
    }
    function Kc(e16, t3, n2, r3, i2, a3) {
      return Ca(t3), t3.updateQueue = null, n2 = es(t3, r3, n2, i2), $o(e16), r3 = ns(), e16 !== null && !Nc ? (rs(e16, t3, a3), ll(e16, t3, a3)) : (V3 && r3 && ea2(t3), t3.flags |= 1, Pc(e16, t3, n2, a3), t3.child);
    }
    function qc(e16, t3, n2, r3, i2) {
      if (Ca(t3), t3.stateNode === null) {
        var a3 = Ai2, o2 = n2.contextType;
        typeof o2 == `object` && o2 && (a3 = wa(o2)), a3 = new n2(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = yc, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, mo(t3), o2 = n2.contextType, a3.context = typeof o2 == `object` && o2 ? wa(o2) : Ai2, a3.state = t3.memoizedState, o2 = n2.getDerivedStateFromProps, typeof o2 == `function` && (vc(t3, n2, o2, r3), a3.state = t3.memoizedState), typeof n2.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o2 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o2 !== a3.state && yc.enqueueReplaceState(a3, a3.state, null), So(t3, r3, a3, i2), xo(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
      } else if (e16 === null) {
        a3 = t3.stateNode;
        var s3 = t3.memoizedProps, c3 = Sc(n2, s3);
        a3.props = c3;
        var l3 = a3.context, u3 = n2.contextType;
        o2 = Ai2, typeof u3 == `object` && u3 && (o2 = wa(u3));
        var d3 = n2.getDerivedStateFromProps;
        u3 = typeof d3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u3 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l3 !== o2) && xc(t3, a3, r3, o2), po = false;
        var f2 = t3.memoizedState;
        a3.state = f2, So(t3, r3, a3, i2), xo(), l3 = t3.memoizedState, s3 || f2 !== l3 || po ? (typeof d3 == `function` && (vc(t3, n2, d3, r3), l3 = t3.memoizedState), (c3 = po || bc(t3, n2, c3, r3, f2, l3, o2)) ? (u3 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l3), a3.props = r3, a3.state = l3, a3.context = o2, r3 = c3) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
      } else {
        a3 = t3.stateNode, ho(e16, t3), o2 = t3.memoizedProps, u3 = Sc(n2, o2), a3.props = u3, d3 = t3.pendingProps, f2 = a3.context, l3 = n2.contextType, c3 = Ai2, typeof l3 == `object` && l3 && (c3 = wa(l3)), s3 = n2.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o2 !== d3 || f2 !== c3) && xc(t3, a3, r3, c3), po = false, f2 = t3.memoizedState, a3.state = f2, So(t3, r3, a3, i2), xo();
        var p3 = t3.memoizedState;
        o2 !== d3 || f2 !== p3 || po || e16 !== null && e16.dependencies !== null && Sa(e16.dependencies) ? (typeof s3 == `function` && (vc(t3, n2, s3, r3), p3 = t3.memoizedState), (u3 = po || bc(t3, n2, u3, r3, f2, p3, c3) || e16 !== null && e16.dependencies !== null && Sa(e16.dependencies)) ? (l3 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p3, c3), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p3, c3)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o2 === e16.memoizedProps && f2 === e16.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o2 === e16.memoizedProps && f2 === e16.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p3), a3.props = r3, a3.state = p3, a3.context = c3, r3 = u3) : (typeof a3.componentDidUpdate != `function` || o2 === e16.memoizedProps && f2 === e16.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o2 === e16.memoizedProps && f2 === e16.memoizedState || (t3.flags |= 1024), r3 = false);
      }
      return a3 = r3, Wc(e16, t3), r3 = (t3.flags & 128) != 0, a3 || r3 ? (a3 = t3.stateNode, n2 = r3 && typeof n2.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e16 !== null && r3 ? (t3.child = uo(t3, e16.child, null, i2), t3.child = uo(t3, null, n2, i2)) : Pc(e16, t3, n2, i2), t3.memoizedState = a3.state, e16 = t3.child) : e16 = ll(e16, t3, i2), e16;
    }
    function Jc(e16, t3, n2, r3) {
      return da2(), t3.flags |= 256, Pc(e16, t3, n2, r3), t3.child;
    }
    var Yc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Xc(e16) {
      return { baseLanes: e16, cachePool: qa() };
    }
    function Zc(e16, t3, n2) {
      return e16 = e16 === null ? 0 : e16.childLanes & ~n2, t3 && (e16 |= ld), e16;
    }
    function Qc(e16, t3, n2) {
      var r3 = t3.pendingProps, i2 = false, a3 = (t3.flags & 128) != 0, o2;
      if ((o2 = a3) || (o2 = e16 !== null && e16.memoizedState === null ? false : (Lo.current & 2) != 0), o2 && (i2 = true, t3.flags &= -129), o2 = (t3.flags & 32) != 0, t3.flags &= -33, e16 === null) {
        if (V3) {
          if (i2 ? Mo(t3) : Fo(), (e16 = B3) ? (e16 = am(e16, aa2), e16 = e16 !== null && e16.data !== `&` ? e16 : null, e16 !== null && (t3.memoizedState = { dehydrated: e16, treeContext: Yi2 === null ? null : { id: Xi2, overflow: Zi2 }, retryLane: 536870912, hydrationErrors: null }, n2 = zi2(e16), n2.return = t3, t3.child = n2, ra2 = t3, B3 = null)) : e16 = null, e16 === null) throw sa2(t3);
          return sm(e16) ? t3.lanes = 32 : t3.lanes = 536870912, null;
        }
        return a3 = r3.children, r3 = r3.fallback, i2 ? (Fo(), i2 = t3.mode, a3 = el({ mode: `hidden`, children: a3 }, i2), r3 = Li2(r3, i2, n2, null), a3.return = t3, r3.return = t3, a3.sibling = r3, t3.child = a3, r3 = t3.child, r3.memoizedState = Xc(n2), r3.childLanes = Zc(e16, o2, n2), t3.memoizedState = Yc, zc(null, r3)) : (Mo(t3), $c(t3, a3));
      }
      var s3 = e16.memoizedState;
      if (s3 !== null) {
        var c3 = s3.dehydrated;
        if (c3 !== null) return nl(e16, t3, a3, o2, r3, c3, s3, n2);
      }
      return i2 ? (Fo(), i2 = r3.fallback, a3 = t3.mode, s3 = e16.child, c3 = s3.sibling, r3 = Pi2(s3, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = s3.subtreeFlags & 1206910976, c3 === null ? (i2 = Li2(i2, a3, n2, null), i2.flags |= 2) : i2 = Pi2(c3, i2), i2.return = t3, r3.return = t3, r3.sibling = i2, t3.child = r3, zc(null, r3), r3 = t3.child, i2 = e16.child.memoizedState, i2 === null ? i2 = Xc(n2) : (a3 = i2.cachePool, a3 === null ? a3 = qa() : (s3 = Aa._currentValue, a3 = a3.parent === s3 ? a3 : { parent: s3, pool: s3 }), i2 = { baseLanes: i2.baseLanes | n2, cachePool: a3 }), r3.memoizedState = i2, r3.childLanes = Zc(e16, o2, n2), t3.memoizedState = Yc, zc(e16.child, r3)) : (Mo(t3), n2 = e16.child, e16 = n2.sibling, n2 = Pi2(n2, { mode: `visible`, children: r3.children }), n2.return = t3, n2.sibling = null, e16 !== null && (o2 = t3.deletions, o2 === null ? (t3.deletions = [e16], t3.flags |= 16) : o2.push(e16)), t3.child = n2, t3.memoizedState = null, n2);
    }
    function $c(e16, t3) {
      return t3 = el({ mode: `visible`, children: t3 }, e16.mode), t3.return = e16, e16.child = t3;
    }
    function el(e16, t3) {
      return e16 = Mi2(22, e16, null, t3), e16.lanes = 0, e16;
    }
    function tl(e16, t3, n2) {
      return uo(t3, e16.child, null, n2), e16 = $c(t3, t3.pendingProps.children), e16.flags |= 2, t3.memoizedState = null, e16;
    }
    function nl(e16, t3, n2, r3, i2, a3, o2, c3) {
      if (n2) return t3.flags & 256 ? (Mo(t3), t3.flags &= -257, tl(e16, t3, c3)) : t3.memoizedState === null ? (Fo(), a3 = i2.fallback, o2 = t3.mode, i2 = el({ mode: `visible`, children: i2.children }, o2), a3 = Li2(a3, o2, c3, null), a3.flags |= 2, i2.return = t3, a3.return = t3, i2.sibling = a3, t3.child = i2, uo(t3, e16.child, null, c3), i2 = t3.child, i2.memoizedState = Xc(c3), i2.childLanes = Zc(e16, r3, c3), t3.memoizedState = Yc, zc(null, i2)) : (Fo(), t3.child = e16.child, t3.flags |= 128, null);
      if (Mo(t3), sm(a3)) {
        if (r3 = a3.nextSibling && a3.nextSibling.dataset, r3) var l3 = r3.dgst;
        return r3 = l3, r3 !== `` && (i2 = Error(s2(419)), i2.stack = ``, i2.digest = r3, pa2({ value: i2, source: null, stack: null })), tl(e16, t3, c3);
      }
      if (Nc || xa(e16, t3, c3, false), r3 = (c3 & e16.childLanes) !== 0, Nc || r3) {
        if (To.current !== null) return tl(e16, t3, c3);
        if (r3 = q2, r3 !== null && (i2 = yt3(r3, c3), i2 !== 0 && i2 !== o2.retryLane)) throw o2.retryLane = i2, Di2(e16, i2), Pd(r3, e16, i2), Mc;
        return om(a3) || Kd(), tl(e16, t3, c3);
      }
      return om(a3) ? (t3.flags |= 192, t3.child = e16.child, null) : (e16 = o2.treeContext, B3 = lm(a3.nextSibling), ra2 = t3, V3 = true, ia2 = null, aa2 = false, e16 !== null && na2(t3, e16), t3 = $c(t3, i2.children), t3.flags |= 134221824, t3);
    }
    function rl(e16, t3, n2) {
      e16.lanes |= t3;
      var r3 = e16.alternate;
      r3 !== null && (r3.lanes |= t3), ya(e16.return, t3, n2);
    }
    function il(e16) {
      for (var t3 = null; e16 !== null; ) {
        var n2 = e16.alternate;
        n2 !== null && Bo(n2) === null && (t3 = e16), e16 = e16.sibling;
      }
      return t3;
    }
    function al(e16, t3, n2, r3, i2, a3) {
      var o2 = e16.memoizedState;
      o2 === null ? e16.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n2, tailMode: i2, treeForkCount: a3 } : (o2.isBackwards = t3, o2.rendering = null, o2.renderingStartTime = 0, o2.last = r3, o2.tail = n2, o2.tailMode = i2, o2.treeForkCount = a3);
    }
    function ol(e16) {
      var t3 = e16.child;
      for (e16.child = null; t3 !== null; ) {
        var n2 = t3.sibling;
        t3.sibling = e16.child, e16.child = t3, t3 = n2;
      }
    }
    function sl(e16, t3, n2) {
      var r3 = t3.pendingProps, i2 = r3.revealOrder, a3 = r3.tail;
      r3 = r3.children;
      var o2 = Lo.current;
      if (t3.flags & 128) return Ro(t3, o2), null;
      var s3 = (o2 & 2) != 0;
      if (s3 ? (o2 = o2 & 1 | 2, t3.flags |= 128) : o2 &= 1, Ro(t3, o2), i2 === `backwards` && e16 !== null ? (ol(e16), Pc(e16, t3, r3, n2), ol(e16)) : Pc(e16, t3, r3, n2), r3 = V3 ? Ki2 : 0, !s3 && e16 !== null && e16.flags & 128) a: for (e16 = t3.child; e16 !== null; ) {
        if (e16.tag === 13) e16.memoizedState !== null && rl(e16, n2, t3);
        else if (e16.tag === 19) rl(e16, n2, t3);
        else if (e16.child !== null) {
          e16.child.return = e16, e16 = e16.child;
          continue;
        }
        if (e16 === t3) break a;
        for (; e16.sibling === null; ) {
          if (e16.return === null || e16.return === t3) break a;
          e16 = e16.return;
        }
        e16.sibling.return = e16.return, e16 = e16.sibling;
      }
      switch (i2) {
        case `backwards`:
          n2 = il(t3.child), n2 === null ? (i2 = t3.child, t3.child = null) : (i2 = n2.sibling, n2.sibling = null, ol(t3)), al(t3, true, i2, null, a3, r3);
          break;
        case `unstable_legacy-backwards`:
          for (n2 = null, i2 = t3.child, t3.child = null; i2 !== null; ) {
            if (e16 = i2.alternate, e16 !== null && Bo(e16) === null) {
              t3.child = i2;
              break;
            }
            e16 = i2.sibling, i2.sibling = n2, n2 = i2, i2 = e16;
          }
          al(t3, true, n2, null, a3, r3);
          break;
        case `together`:
          al(t3, false, null, null, void 0, r3);
          break;
        case `independent`:
          t3.memoizedState = null;
          break;
        default:
          n2 = il(t3.child), n2 === null ? (i2 = t3.child, t3.child = null) : (i2 = n2.sibling, n2.sibling = null), al(t3, false, i2, n2, a3, r3);
      }
      return t3.child;
    }
    function cl(e16, t3, n2) {
      var r3 = t3.pendingProps;
      return _a(t3, t3.type, r3.value), Pc(e16, t3, r3.children, n2), t3.child;
    }
    function ll(e16, t3, n2) {
      if (e16 !== null && (t3.dependencies = e16.dependencies), od |= t3.lanes, (n2 & t3.childLanes) === 0) if (e16 !== null) {
        if (xa(e16, t3, n2, false), (n2 & t3.childLanes) === 0) return null;
      } else return null;
      if (e16 !== null && t3.child !== e16.child) throw Error(s2(153));
      if (t3.child !== null) {
        for (e16 = t3.child, n2 = Pi2(e16, e16.pendingProps), t3.child = n2, n2.return = t3; e16.sibling !== null; ) e16 = e16.sibling, n2 = n2.sibling = Pi2(e16, e16.pendingProps), n2.return = t3;
        n2.sibling = null;
      }
      return t3.child;
    }
    function ul(e16, t3) {
      return (e16.lanes & t3) === 0 ? (e16 = e16.dependencies, !!(e16 !== null && Sa(e16))) : true;
    }
    function dl(e16, t3, n2) {
      switch (t3.tag) {
        case 3:
          De3(t3, t3.stateNode.containerInfo), _a(t3, Aa, e16.memoizedState.cache), da2();
          break;
        case 27:
        case 5:
          ke3(t3);
          break;
        case 4:
          De3(t3, t3.stateNode.containerInfo);
          break;
        case 10:
          _a(t3, t3.type, t3.memoizedProps.value);
          break;
        case 31:
          if (t3.memoizedState !== null) return t3.flags |= 128, No(t3), null;
          break;
        case 13:
          var r3 = t3.memoizedState;
          if (r3 !== null) {
            if (r3.dehydrated !== null) return Mo(t3), t3.flags |= 128, null;
            r3 = xa(e16, t3, n2, false);
            var i2 = t3.child.childLanes;
            return r3 || (n2 & i2) !== 0 ? Qc(e16, t3, n2) : (Mo(t3), e16 = ll(e16, t3, n2), e16 === null ? null : e16.sibling);
          }
          Mo(t3);
          break;
        case 19:
          if (t3.flags & 128) return sl(e16, t3, n2);
          if (i2 = (e16.flags & 128) != 0, r3 = (n2 & t3.childLanes) !== 0, r3 ||= (xa(e16, t3, n2, false), (n2 & t3.childLanes) !== 0), i2) {
            if (r3) return sl(e16, t3, n2);
            t3.flags |= 128;
          }
          if (i2 = t3.memoizedState, i2 !== null && (i2.rendering = null, i2.tail = null, i2.lastEffect = null), Ro(t3, Lo.current), r3) break;
          return null;
        case 22:
          return t3.lanes = 0, Rc(e16, t3, n2, t3.pendingProps);
        case 24:
          _a(t3, Aa, e16.memoizedState.cache);
      }
      return ll(e16, t3, n2);
    }
    function fl(e16, t3, n2) {
      if (e16 !== null) if (e16.memoizedProps !== t3.pendingProps) Nc = true;
      else {
        if (!ul(e16, n2) && !(t3.flags & 128)) return Nc = false, dl(e16, t3, n2);
        Nc = !!(e16.flags & 131072);
      }
      else Nc = false, V3 && t3.flags & 1048576 && $i2(t3, Ki2, t3.index);
      switch (t3.lanes = 0, t3.tag) {
        case 16:
          a: {
            var r3 = t3.pendingProps;
            if (e16 = eo(t3.elementType), t3.type = e16, typeof e16 == `function`) Ni2(e16) ? (r3 = Sc(e16, r3), t3.tag = 1, t3 = qc(null, t3, e16, r3, n2)) : (t3.tag = 0, t3 = Gc(null, t3, e16, r3, n2));
            else {
              if (e16 != null) {
                var i2 = e16.$$typeof;
                if (i2 === oe3) {
                  t3.tag = 11, t3 = Fc(null, t3, e16, r3, n2);
                  break a;
                } else if (i2 === le2) {
                  t3.tag = 14, t3 = Ic(null, t3, e16, r3, n2);
                  break a;
                } else if (i2 === ae3) {
                  t3.tag = 10, t3.type = e16, t3 = cl(null, t3, n2);
                  break a;
                }
              }
              throw t3 = ye3(e16) || e16, Error(s2(306, t3, ``));
            }
          }
          return t3;
        case 0:
          return Gc(e16, t3, t3.type, t3.pendingProps, n2);
        case 1:
          return r3 = t3.type, i2 = Sc(r3, t3.pendingProps), qc(e16, t3, r3, i2, n2);
        case 3:
          a: {
            if (De3(t3, t3.stateNode.containerInfo), e16 === null) throw Error(s2(387));
            r3 = t3.pendingProps;
            var a3 = t3.memoizedState;
            i2 = a3.element, ho(e16, t3), So(t3, r3, null, n2);
            var o2 = t3.memoizedState;
            if (r3 = o2.cache, _a(t3, Aa, r3), r3 !== a3.cache && ba(t3, [Aa], n2, true), xo(), r3 = o2.element, a3.isDehydrated) if (a3 = { element: r3, isDehydrated: false, cache: o2.cache }, t3.updateQueue.baseState = a3, t3.memoizedState = a3, t3.flags & 256) {
              t3 = Jc(e16, t3, r3, n2);
              break a;
            } else if (r3 !== i2) {
              i2 = Hi2(Error(s2(424)), t3), pa2(i2), t3 = Jc(e16, t3, r3, n2);
              break a;
            } else {
              switch (e16 = t3.stateNode.containerInfo, e16.nodeType) {
                case 9:
                  e16 = e16.body;
                  break;
                default:
                  e16 = e16.nodeName === `HTML` ? e16.ownerDocument.body : e16;
              }
              for (B3 = lm(e16.firstChild), ra2 = t3, V3 = true, ia2 = null, aa2 = true, n2 = fo(t3, null, r3, n2), t3.child = n2; n2; ) n2.flags = n2.flags & -3 | 134221824, n2 = n2.sibling;
            }
            else {
              if (da2(), r3 === i2) {
                t3 = ll(e16, t3, n2);
                break a;
              }
              Pc(e16, t3, r3, n2);
            }
            t3 = t3.child;
          }
          return t3;
        case 26:
          return Wc(e16, t3), e16 === null ? (n2 = Nm(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n2 : V3 || (t3.stateNode = fp(t3.type, t3.pendingProps, P3.current, t3)) : t3.memoizedState = Nm(t3.type, e16.memoizedProps, t3.pendingProps, e16.memoizedState), null;
        case 27:
          return ke3(t3), e16 === null && V3 && (r3 = t3.stateNode = hm(t3.type, t3.pendingProps, P3.current), ra2 = t3, aa2 = true, i2 = B3, Sp(t3.type) ? (um = i2, B3 = lm(r3.firstChild)) : B3 = i2), Pc(e16, t3, t3.pendingProps.children, n2), Wc(e16, t3), e16 === null && (t3.flags |= 4194304), t3.child;
        case 5:
          return e16 === null && V3 && ((i2 = r3 = B3) && (r3 = rm(r3, t3.type, t3.pendingProps, aa2), r3 === null ? i2 = false : (t3.stateNode = r3, ra2 = t3, B3 = lm(r3.firstChild), aa2 = false, i2 = true)), i2 || sa2(t3)), ke3(t3), i2 = t3.type, a3 = t3.pendingProps, o2 = e16 === null ? null : e16.memoizedProps, r3 = a3.children, pp(i2, a3) ? r3 = null : o2 !== null && pp(i2, o2) && (t3.flags |= 32), t3.memoizedState !== null && (i2 = Qo(e16, t3, ts, null, null, n2), sh._currentValue = i2), Wc(e16, t3), Pc(e16, t3, r3, n2), t3.child;
        case 6:
          return e16 === null && V3 && ((e16 = n2 = B3) && (n2 = im(n2, t3.pendingProps, aa2), n2 === null ? e16 = false : (t3.stateNode = n2, ra2 = t3, B3 = null, e16 = true)), e16 || sa2(t3)), null;
        case 13:
          return Qc(e16, t3, n2);
        case 4:
          return De3(t3, t3.stateNode.containerInfo), r3 = t3.pendingProps, e16 === null ? t3.child = uo(t3, null, r3, n2) : Pc(e16, t3, r3, n2), t3.child;
        case 11:
          return Fc(e16, t3, t3.type, t3.pendingProps, n2);
        case 7:
          return r3 = t3.pendingProps, Wc(e16, t3), Pc(e16, t3, r3, n2), t3.child;
        case 8:
          return Pc(e16, t3, t3.pendingProps.children, n2), t3.child;
        case 12:
          return Pc(e16, t3, t3.pendingProps.children, n2), t3.child;
        case 10:
          return cl(e16, t3, n2);
        case 9:
          return i2 = t3.type._context, r3 = t3.pendingProps.children, Ca(t3), i2 = wa(i2), r3 = r3(i2), t3.flags |= 1, Pc(e16, t3, r3, n2), t3.child;
        case 14:
          return Ic(e16, t3, t3.type, t3.pendingProps, n2);
        case 15:
          return Lc(e16, t3, t3.type, t3.pendingProps, n2);
        case 19:
          return sl(e16, t3, n2);
        case 31:
          return Uc(e16, t3, n2);
        case 22:
          return Rc(e16, t3, n2, t3.pendingProps);
        case 24:
          return Ca(t3), r3 = wa(Aa), e16 === null ? (i2 = Ga(), i2 === null && (i2 = q2, a3 = ja(), i2.pooledCache = a3, a3.refCount++, a3 !== null && (i2.pooledCacheLanes |= n2), i2 = a3), t3.memoizedState = { parent: r3, cache: i2 }, mo(t3), _a(t3, Aa, i2)) : ((e16.lanes & n2) !== 0 && (ho(e16, t3), So(t3, null, null, n2), xo()), i2 = e16.memoizedState, a3 = t3.memoizedState, i2.parent === r3 ? (r3 = a3.cache, _a(t3, Aa, r3), r3 !== i2.cache && ba(t3, [Aa], n2, true)) : (i2 = { parent: r3, cache: r3 }, t3.memoizedState = i2, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = i2), _a(t3, Aa, r3))), Pc(e16, t3, t3.pendingProps.children, n2), t3.child;
        case 30:
          return t3.stateNode === null && (t3.stateNode = { autoName: null, paired: null, clones: null, ref: null }), r3 = t3.pendingProps, r3.name != null && r3.name !== `auto` ? t3.flags |= e16 === null ? 18882560 : 18874368 : V3 && ea2(t3), e16 !== null && e16.memoizedProps.name !== r3.name ? t3.flags |= 4194816 : Wc(e16, t3), Pc(e16, t3, r3.children, n2), t3.child;
        case 29:
          throw t3.pendingProps;
      }
      throw Error(s2(156, t3.tag));
    }
    function pl(e16) {
      e16.flags |= 4;
    }
    function ml(e16, t3, n2, r3, i2) {
      var a3;
      if ((a3 = (e16.mode & 32) != 0) && (a3 = n2 === null ? Jm(t3, r3) : Jm(t3, r3) && (r3.src !== n2.src || r3.srcSet !== n2.srcSet)), a3) {
        if (e16.flags |= 16777216, (i2 & 335544128) === i2) if (e16.stateNode.complete) e16.flags |= 8192;
        else if (Ud()) e16.flags |= 8192;
        else throw to = Za, Ya;
      } else e16.flags &= -16777217;
    }
    function hl(e16, t3) {
      if (t3.type !== `stylesheet` || t3.state.loading & 4) e16.flags &= -16777217;
      else if (e16.flags |= 16777216, !Ym(t3)) if (Ud()) e16.flags |= 8192;
      else throw to = Za, Ya;
    }
    function gl(e16, t3) {
      t3 !== null && (e16.flags |= 4), e16.flags & 16384 && (t3 = e16.tag === 22 ? 536870912 : pt3(), e16.lanes |= t3, ud |= t3);
    }
    function _l(e16, t3) {
      if (!V3) switch (e16.tailMode) {
        case `visible`:
          break;
        case `collapsed`:
          for (var n2 = e16.tail, r3 = null; n2 !== null; ) n2.alternate !== null && (r3 = n2), n2 = n2.sibling;
          r3 === null ? t3 || e16.tail === null ? e16.tail = null : e16.tail.sibling = null : r3.sibling = null;
          break;
        default:
          for (t3 = e16.tail, n2 = null; t3 !== null; ) t3.alternate !== null && (n2 = t3), t3 = t3.sibling;
          n2 === null ? e16.tail = null : n2.sibling = null;
      }
    }
    function W2(e16) {
      var t3 = e16.alternate !== null && e16.alternate.child === e16.child, n2 = 0, r3 = 0;
      if (t3) for (var i2 = e16.child; i2 !== null; ) n2 |= i2.lanes | i2.childLanes, r3 |= i2.subtreeFlags & 1206910976, r3 |= i2.flags & 1206910976, i2.return = e16, i2 = i2.sibling;
      else for (i2 = e16.child; i2 !== null; ) n2 |= i2.lanes | i2.childLanes, r3 |= i2.subtreeFlags, r3 |= i2.flags, i2.return = e16, i2 = i2.sibling;
      return e16.subtreeFlags |= r3, e16.childLanes = n2, t3;
    }
    function vl(e16, t3, n2) {
      var r3 = t3.pendingProps;
      switch (ta2(t3), t3.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return W2(t3), null;
        case 1:
          return W2(t3), null;
        case 3:
          return n2 = t3.stateNode, r3 = null, e16 !== null && (r3 = e16.memoizedState.cache), t3.memoizedState.cache !== r3 && (t3.flags |= 2048), va(Aa), Oe3(), n2.pendingContext && (n2.context = n2.pendingContext, n2.pendingContext = null), (e16 === null || e16.child === null) && (ua2(t3) ? pl(t3) : e16 === null || e16.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, fa2())), W2(t3), null;
        case 26:
          var i2 = t3.type, a3 = t3.memoizedState;
          return e16 === null ? (pl(t3), a3 === null ? (W2(t3), ml(t3, i2, null, r3, n2)) : (W2(t3), hl(t3, a3))) : a3 ? a3 === e16.memoizedState ? (W2(t3), t3.flags &= -16777217) : (pl(t3), W2(t3), hl(t3, a3)) : (e16 = e16.memoizedProps, e16 !== r3 && pl(t3), W2(t3), ml(t3, i2, e16, r3, n2)), null;
        case 27:
          if (Ae3(t3), n2 = P3.current, i2 = t3.type, e16 !== null && t3.stateNode != null) e16.memoizedProps !== r3 && pl(t3);
          else {
            if (!r3) {
              if (t3.stateNode === null) throw Error(s2(166));
              return W2(t3), t3.subtreeFlags &= -33554433, null;
            }
            e16 = Te3.current, ua2(t3) ? ca2(t3, e16) : (e16 = hm(i2, r3, n2), t3.stateNode = e16, pl(t3));
          }
          return W2(t3), t3.subtreeFlags &= -33554433, null;
        case 5:
          if (Ae3(t3), i2 = t3.type, e16 !== null && t3.stateNode != null) e16.memoizedProps !== r3 && pl(t3);
          else {
            if (!r3) {
              if (t3.stateNode === null) throw Error(s2(166));
              return W2(t3), t3.subtreeFlags &= -33554433, null;
            }
            if (a3 = Te3.current, ua2(t3)) ca2(t3, a3);
            else {
              var o2 = lp(P3.current);
              switch (a3) {
                case 1:
                  a3 = o2.createElementNS(`http://www.w3.org/2000/svg`, i2);
                  break;
                case 2:
                  a3 = o2.createElementNS(`http://www.w3.org/1998/Math/MathML`, i2);
                  break;
                default:
                  switch (i2) {
                    case `svg`:
                      a3 = o2.createElementNS(`http://www.w3.org/2000/svg`, i2);
                      break;
                    case `math`:
                      a3 = o2.createElementNS(`http://www.w3.org/1998/Math/MathML`, i2);
                      break;
                    case `script`:
                      a3 = o2.createElement(`div`), a3.innerHTML = `<script><\/script>`, a3 = a3.removeChild(a3.firstChild);
                      break;
                    case `select`:
                      a3 = typeof r3.is == `string` ? o2.createElement(`select`, { is: r3.is }) : o2.createElement(`select`), r3.multiple ? a3.multiple = true : r3.size && (a3.size = r3.size);
                      break;
                    default:
                      a3 = typeof r3.is == `string` ? o2.createElement(i2, { is: r3.is }) : o2.createElement(i2);
                  }
              }
              a3[Tt3] = t3, a3[Et3] = r3;
              a: for (o2 = t3.child; o2 !== null; ) {
                if (o2.tag === 5 || o2.tag === 6) a3.appendChild(o2.stateNode);
                else if (o2.tag !== 4 && o2.tag !== 27 && o2.child !== null) {
                  o2.child.return = o2, o2 = o2.child;
                  continue;
                }
                if (o2 === t3) break a;
                for (; o2.sibling === null; ) {
                  if (o2.return === null || o2.return === t3) break a;
                  o2 = o2.return;
                }
                o2.sibling.return = o2.return, o2 = o2.sibling;
              }
              t3.stateNode = a3;
              a: switch (np(a3, i2, r3), i2) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r3 = !!r3.autoFocus;
                  break a;
                case `img`:
                  r3 = true;
                  break a;
                default:
                  r3 = false;
              }
              r3 && pl(t3);
            }
          }
          return W2(t3), t3.subtreeFlags &= -33554433, ml(t3, t3.type, e16 === null ? null : e16.memoizedProps, t3.pendingProps, n2), null;
        case 6:
          if (e16 && t3.stateNode != null) e16.memoizedProps !== r3 && pl(t3);
          else {
            if (typeof r3 != `string` && t3.stateNode === null) throw Error(s2(166));
            if (e16 = P3.current, ua2(t3)) {
              if (e16 = t3.stateNode, n2 = t3.memoizedProps, r3 = null, i2 = ra2, i2 !== null) switch (i2.tag) {
                case 27:
                case 5:
                  r3 = i2.memoizedProps;
              }
              e16[Tt3] = t3, e16 = !!(e16.nodeValue === n2 || r3 !== null && true === r3.suppressHydrationWarning || ep(e16.nodeValue, n2)), e16 || sa2(t3, true);
            } else e16 = lp(e16).createTextNode(r3), e16[Tt3] = t3, t3.stateNode = e16;
          }
          return W2(t3), null;
        case 31:
          if (n2 = t3.memoizedState, e16 === null || e16.memoizedState !== null) {
            if (r3 = ua2(t3), n2 !== null) {
              if (e16 === null) {
                if (!r3) throw Error(s2(318));
                if (e16 = t3.memoizedState, e16 = e16 === null ? null : e16.dehydrated, !e16) throw Error(s2(557));
                e16[Tt3] = t3;
              } else da2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
              W2(t3), e16 = false;
            } else n2 = fa2(), e16 !== null && e16.memoizedState !== null && (e16.memoizedState.hydrationErrors = n2), e16 = true;
            if (!e16) return t3.flags & 256 ? (Io(t3), t3) : (Io(t3), null);
            if (t3.flags & 128) throw Error(s2(558));
          }
          return W2(t3), null;
        case 13:
          if (r3 = t3.memoizedState, e16 === null || e16.memoizedState !== null && e16.memoizedState.dehydrated !== null) {
            if (i2 = ua2(t3), r3 !== null && r3.dehydrated !== null) {
              if (e16 === null) {
                if (!i2) throw Error(s2(318));
                if (i2 = t3.memoizedState, i2 = i2 === null ? null : i2.dehydrated, !i2) throw Error(s2(317));
                i2[Tt3] = t3;
              } else da2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
              W2(t3), i2 = false;
            } else i2 = fa2(), e16 !== null && e16.memoizedState !== null && (e16.memoizedState.hydrationErrors = i2), i2 = true;
            if (!i2) return t3.flags & 256 ? (Io(t3), t3) : (Io(t3), null);
          }
          return Io(t3), t3.flags & 128 ? (t3.lanes = n2, t3) : (n2 = r3 !== null, e16 = e16 !== null && e16.memoizedState !== null, n2 && (r3 = t3.child, i2 = null, r3.alternate !== null && r3.alternate.memoizedState !== null && r3.alternate.memoizedState.cachePool !== null && (i2 = r3.alternate.memoizedState.cachePool.pool), a3 = null, r3.memoizedState !== null && r3.memoizedState.cachePool !== null && (a3 = r3.memoizedState.cachePool.pool), a3 !== i2 && (r3.flags |= 2048)), n2 !== e16 && n2 && (t3.child.flags |= 8192), gl(t3, t3.updateQueue), W2(t3), null);
        case 4:
          return Oe3(), e16 === null && Wf(t3.stateNode.containerInfo), t3.flags |= 67108864, W2(t3), null;
        case 10:
          return va(t3.type), W2(t3), null;
        case 19:
          if (zo(t3), r3 = t3.memoizedState, r3 === null) return W2(t3), null;
          if (i2 = (t3.flags & 128) != 0, a3 = r3.rendering, a3 === null) if (i2) _l(r3, false);
          else {
            if (ad !== 0 || e16 !== null && e16.flags & 128) for (e16 = t3.child; e16 !== null; ) {
              if (a3 = Bo(e16), a3 !== null) {
                for (t3.flags |= 128, _l(r3, false), e16 = a3.updateQueue, t3.updateQueue = e16, gl(t3, e16), t3.subtreeFlags = 0, e16 = n2, n2 = t3.child; n2 !== null; ) Fi2(n2, e16), n2 = n2.sibling;
                return Ro(t3, Lo.current & 1 | 2), V3 && Qi2(t3, r3.treeForkCount), t3.child;
              }
              e16 = e16.sibling;
            }
            r3.tail !== null && Ue3() > gd && (t3.flags |= 128, i2 = true, _l(r3, false), t3.lanes = 4194304);
          }
          else {
            if (!i2) if (e16 = Bo(a3), e16 !== null) {
              if (t3.flags |= 128, i2 = true, e16 = e16.updateQueue, t3.updateQueue = e16, gl(t3, e16), _l(r3, true), r3.tail === null && r3.tailMode !== `collapsed` && r3.tailMode !== `visible` && !a3.alternate && !V3) return W2(t3), null;
            } else 2 * Ue3() - r3.renderingStartTime > gd && n2 !== 536870912 && (t3.flags |= 128, i2 = true, _l(r3, false), t3.lanes = 4194304);
            r3.isBackwards ? (a3.sibling = t3.child, t3.child = a3) : (e16 = r3.last, e16 === null ? t3.child = a3 : e16.sibling = a3, r3.last = a3);
          }
          if (r3.tail !== null) {
            e16 = r3.tail;
            a: {
              for (n2 = e16; n2 !== null; ) {
                if (n2.alternate !== null) {
                  n2 = false;
                  break a;
                }
                n2 = n2.sibling;
              }
              n2 = true;
            }
            return r3.rendering = e16, r3.tail = e16.sibling, r3.renderingStartTime = Ue3(), e16.sibling = null, a3 = Lo.current, a3 = i2 ? a3 & 1 | 2 : a3 & 1, r3.tailMode === `visible` || r3.tailMode === `collapsed` || !n2 || V3 ? Ro(t3, a3) : (n2 = a3, N3(Ao, t3), N3(Lo, n2), jo === null && (jo = t3)), V3 && Qi2(t3, r3.treeForkCount), e16;
          }
          return W2(t3), null;
        case 22:
        case 23:
          return Io(t3), ko(), r3 = t3.memoizedState !== null, e16 === null ? r3 && (t3.flags |= 8192) : e16.memoizedState !== null !== r3 && (t3.flags |= 8192), r3 ? n2 & 536870912 && !(t3.flags & 128) && (W2(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : W2(t3), n2 = t3.updateQueue, n2 !== null && gl(t3, n2.retryQueue), n2 = null, e16 !== null && e16.memoizedState !== null && e16.memoizedState.cachePool !== null && (n2 = e16.memoizedState.cachePool.pool), r3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r3 = t3.memoizedState.cachePool.pool), r3 !== n2 && (t3.flags |= 2048), e16 !== null && we3(Wa), null;
        case 24:
          return n2 = null, e16 !== null && (n2 = e16.memoizedState.cache), t3.memoizedState.cache !== n2 && (t3.flags |= 2048), va(Aa), W2(t3), null;
        case 25:
          return null;
        case 30:
          return t3.flags |= 33554432, W2(t3), null;
      }
      throw Error(s2(156, t3.tag));
    }
    function yl(e16, t3) {
      switch (ta2(t3), t3.tag) {
        case 1:
          return e16 = t3.flags, e16 & 65536 ? (t3.flags = e16 & -65537 | 128, t3) : null;
        case 3:
          return va(Aa), Oe3(), e16 = t3.flags, e16 & 65536 && !(e16 & 128) ? (t3.flags = e16 & -65537 | 128, t3) : null;
        case 26:
        case 27:
        case 5:
          return Ae3(t3), null;
        case 31:
          if (t3.memoizedState !== null) {
            if (Io(t3), t3.alternate === null) throw Error(s2(340));
            da2();
          }
          return e16 = t3.flags, e16 & 65536 ? (t3.flags = e16 & -65537 | 128, t3) : null;
        case 13:
          if (Io(t3), e16 = t3.memoizedState, e16 !== null && e16.dehydrated !== null) {
            if (t3.alternate === null) throw Error(s2(340));
            da2();
          }
          return e16 = t3.flags, e16 & 65536 ? (t3.flags = e16 & -65537 | 128, t3) : null;
        case 19:
          return zo(t3), e16 = t3.flags, e16 & 65536 ? (t3.flags = e16 & -65537 | 128, e16 = t3.memoizedState, e16 !== null && (e16.rendering = null, e16.tail = null), t3.flags |= 4, t3) : null;
        case 4:
          return Oe3(), null;
        case 10:
          return va(t3.type), null;
        case 22:
        case 23:
          return Io(t3), ko(), e16 !== null && we3(Wa), e16 = t3.flags, e16 & 65536 ? (t3.flags = e16 & -65537 | 128, t3) : null;
        case 24:
          return va(Aa), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function bl(e16, t3) {
      switch (ta2(t3), t3.tag) {
        case 3:
          va(Aa), Oe3();
          break;
        case 26:
        case 27:
        case 5:
          Ae3(t3);
          break;
        case 4:
          Oe3();
          break;
        case 31:
          t3.memoizedState !== null && Io(t3);
          break;
        case 13:
          Io(t3);
          break;
        case 19:
          zo(t3);
          break;
        case 10:
          va(t3.type);
          break;
        case 22:
        case 23:
          Io(t3), ko(), e16 !== null && we3(Wa);
          break;
        case 24:
          va(Aa);
      }
    }
    function xl(e16, t3) {
      try {
        var n2 = t3.updateQueue, r3 = n2 === null ? null : n2.lastEffect;
        if (r3 !== null) {
          var i2 = r3.next;
          n2 = i2;
          do {
            if ((n2.tag & e16) === e16) {
              r3 = void 0;
              var a3 = n2.create, o2 = n2.inst;
              r3 = a3(), o2.destroy = r3;
            }
            n2 = n2.next;
          } while (n2 !== i2);
        }
      } catch (e17) {
        Z2(t3, t3.return, e17);
      }
    }
    function Sl(e16, t3, n2) {
      try {
        var r3 = t3.updateQueue, i2 = r3 === null ? null : r3.lastEffect;
        if (i2 !== null) {
          var a3 = i2.next;
          r3 = a3;
          do {
            if ((r3.tag & e16) === e16) {
              var o2 = r3.inst, s3 = o2.destroy;
              if (s3 !== void 0) {
                o2.destroy = void 0, i2 = t3;
                var c3 = n2, l3 = s3;
                try {
                  l3();
                } catch (e17) {
                  Z2(i2, c3, e17);
                }
              }
            }
            r3 = r3.next;
          } while (r3 !== a3);
        }
      } catch (e17) {
        Z2(t3, t3.return, e17);
      }
    }
    function Cl(e16) {
      var t3 = e16.updateQueue;
      if (t3 !== null) {
        var n2 = e16.stateNode;
        try {
          wo(t3, n2);
        } catch (t4) {
          Z2(e16, e16.return, t4);
        }
      }
    }
    function wl(e16, t3, n2) {
      n2.props = Sc(e16.type, e16.memoizedProps), n2.state = e16.memoizedState;
      try {
        n2.componentWillUnmount();
      } catch (n3) {
        Z2(e16, t3, n3);
      }
    }
    function Tl(e16, t3) {
      try {
        var n2 = e16.ref;
        if (n2 !== null) {
          switch (e16.tag) {
            case 26:
            case 27:
            case 5:
              var r3 = e16.stateNode;
              break;
            case 30:
              var i2 = e16.stateNode, a3 = vi2(e16.memoizedProps, i2);
              (i2.ref === null || i2.ref.name !== a3) && (i2.ref = Pp(a3)), r3 = i2.ref;
              break;
            case 7:
              if (e16.stateNode === null) {
                var o2 = new Fp(e16);
                h2(e16.child, false, Qp, o2, void 0, void 0), e16.stateNode = o2;
              }
              r3 = e16.stateNode;
              break;
            default:
              r3 = e16.stateNode;
          }
          typeof n2 == `function` ? e16.refCleanup = n2(r3) : n2.current = r3;
        }
      } catch (n3) {
        Z2(e16, t3, n3);
      }
    }
    function El(e16, t3) {
      var n2 = e16.ref, r3 = e16.refCleanup;
      if (n2 !== null) if (typeof r3 == `function`) try {
        r3();
      } catch (n3) {
        Z2(e16, t3, n3);
      } finally {
        e16.refCleanup = null, e16 = e16.alternate, e16 != null && (e16.refCleanup = null);
      }
      else if (typeof n2 == `function`) try {
        n2(null);
      } catch (n3) {
        Z2(e16, t3, n3);
      }
      else n2.current = null;
    }
    function Dl(e16, t3) {
      if ((e16.tag === 5 || e16.tag === 27 || e16.tag === 6) && e16.alternate === null && t3 !== null) for (var n2 = 0; n2 < t3.length; n2++) em(e16.stateNode, t3[n2]);
    }
    function Ol(e16) {
      for (var t3 = e16.return; t3 !== null && (jl(t3) && em(e16.stateNode, t3.stateNode), !Al(t3)); ) t3 = t3.return;
    }
    function kl(e16) {
      for (var t3 = e16.return; t3 !== null && (jl(t3) && tm(e16.stateNode, t3.stateNode), !Al(t3)); ) t3 = t3.return;
    }
    function Al(e16) {
      return e16.tag === 5 || e16.tag === 3 || e16.tag === 27;
    }
    function jl(e16) {
      return e16 && e16.tag === 7 && e16.stateNode !== null;
    }
    function Ml(e16) {
      var t3 = e16.type, n2 = e16.memoizedProps, r3 = e16.stateNode;
      try {
        a: switch (t3) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n2.autoFocus && r3.focus();
            break a;
          case `img`:
            n2.src ? r3.src = n2.src : n2.srcSet && (r3.srcset = n2.srcSet);
        }
      } catch (t4) {
        Z2(e16, e16.return, t4);
      }
    }
    function Nl(e16, t3, n2) {
      try {
        var r3 = e16.stateNode;
        ip(r3, e16.type, n2, t3), r3[Et3] = t3;
      } catch (t4) {
        Z2(e16, e16.return, t4);
      }
    }
    function Pl(e16) {
      return e16.tag === 5 || e16.tag === 3 || e16.tag === 26 || e16.tag === 27 && Sp(e16.type) || e16.tag === 4;
    }
    function Fl(e16) {
      a: for (; ; ) {
        for (; e16.sibling === null; ) {
          if (e16.return === null || Pl(e16.return)) return null;
          e16 = e16.return;
        }
        for (e16.sibling.return = e16.return, e16 = e16.sibling; e16.tag !== 5 && e16.tag !== 6 && e16.tag !== 18; ) {
          if (e16.tag === 27 && Sp(e16.type) || e16.flags & 2 || e16.child === null || e16.tag === 4) continue a;
          e16.child.return = e16, e16 = e16.child;
        }
        if (!(e16.flags & 2)) return e16.stateNode;
      }
    }
    function Il(e16, t3, n2, r3) {
      var i2 = e16.tag;
      if (i2 === 5 || i2 === 6) i2 = e16.stateNode, t3 ? (n2.nodeType === 9 ? n2.body : n2.nodeName === `HTML` ? n2.ownerDocument.body : n2).insertBefore(i2, t3) : (t3 = n2.nodeType === 9 ? n2.body : n2.nodeName === `HTML` ? n2.ownerDocument.body : n2, t3.appendChild(i2), n2 = n2._reactRootContainer, n2 != null || t3.onclick !== null || (t3.onclick = xn2)), Dl(e16, r3), I3 = true;
      else if (i2 !== 4 && (i2 === 27 && (Dl(e16, r3), r3 = null, Sp(e16.type) && (n2 = e16.stateNode, t3 = null)), e16 = e16.child, e16 !== null)) for (Il(e16, t3, n2, r3), e16 = e16.sibling; e16 !== null; ) Il(e16, t3, n2, r3), e16 = e16.sibling;
    }
    function Ll(e16, t3, n2, r3) {
      var i2 = e16.tag;
      if (i2 === 5 || i2 === 6) i2 = e16.stateNode, t3 ? n2.insertBefore(i2, t3) : n2.appendChild(i2), Dl(e16, r3), I3 = true;
      else if (i2 !== 4 && (i2 === 27 && (Dl(e16, r3), r3 = null, Sp(e16.type) && (n2 = e16.stateNode)), e16 = e16.child, e16 !== null)) for (Ll(e16, t3, n2, r3), e16 = e16.sibling; e16 !== null; ) Ll(e16, t3, n2, r3), e16 = e16.sibling;
    }
    function Rl(e16) {
      var t3 = e16.stateNode, n2 = e16.memoizedProps;
      try {
        for (var r3 = e16.type, i2 = t3.attributes; i2.length; ) t3.removeAttributeNode(i2[0]);
        np(t3, r3, n2), t3[Tt3] = e16, t3[Et3] = n2;
      } catch (t4) {
        Z2(e16, e16.return, t4);
      }
    }
    var zl = false, Bl = null;
    function Vl(e16) {
      (e16.tag === 30 || e16.subtreeFlags & 33554432) && (zl = true);
    }
    var Hl = null;
    function Ul() {
      var e16 = Hl;
      return Hl = null, e16;
    }
    var Wl = 0;
    function Gl(e16, t3, n2, r3, i2) {
      return Wl = 0, Kl(e16.child, t3, n2, r3, i2);
    }
    function Kl(e16, t3, n2, r3, i2) {
      for (var a3 = false; e16 !== null; ) {
        if (e16.tag === 5) {
          var o2 = e16.stateNode;
          if (r3 !== null) {
            var s3 = Op(o2);
            r3.push(s3), s3.view && (a3 = true);
          } else a3 || Op(o2).view && (a3 = true);
          zl = true, Tp(o2, Wl === 0 ? t3 : t3 + `_` + Wl, n2), Wl++;
        } else (e16.tag !== 22 || e16.memoizedState === null) && (e16.tag === 30 && i2 || Kl(e16.child, t3, n2, r3, i2) && (a3 = true));
        e16 = e16.sibling;
      }
      return a3;
    }
    function ql(e16, t3) {
      for (; e16 !== null; ) e16.tag === 5 ? Ep(e16.stateNode, e16.memoizedProps) : (e16.tag !== 22 || e16.memoizedState === null) && (e16.tag === 30 && t3 || ql(e16.child, t3)), e16 = e16.sibling;
    }
    function Jl(e16) {
      if (e16.subtreeFlags & 18874368) for (e16 = e16.child; e16 !== null; ) {
        if ((e16.tag !== 22 || e16.memoizedState === null) && (Jl(e16), e16.tag === 30 && e16.flags & 18874368 && e16.stateNode.paired)) {
          var t3 = e16.memoizedProps;
          if (t3.name == null || t3.name === `auto`) throw Error(s2(544));
          var n2 = t3.name;
          t3 = bi2(t3.default, t3.share), t3 !== `none` && (Gl(e16, n2, t3, null, false) || ql(e16.child, false));
        }
        e16 = e16.sibling;
      }
    }
    function Yl(e16, t3) {
      if (e16.tag === 30) {
        var n2 = e16.stateNode, r3 = e16.memoizedProps, i2 = vi2(r3, n2), a3 = bi2(r3.default, n2.paired ? r3.share : r3.enter);
        a3 === `none` ? Jl(e16) : Gl(e16, i2, a3, null, false) ? (Jl(e16), n2.paired || t3 || Nd(e16, r3.onEnter)) : ql(e16.child, false);
      } else if (e16.subtreeFlags & 33554432) for (e16 = e16.child; e16 !== null; ) Yl(e16, t3), e16 = e16.sibling;
      else Jl(e16);
    }
    function Xl(e16) {
      if (Bl !== null && Bl.size !== 0) {
        var t3 = Bl;
        if (e16.subtreeFlags & 18874368) for (e16 = e16.child; e16 !== null; ) {
          if (e16.tag !== 22 || e16.memoizedState === null) {
            if (e16.tag === 30 && e16.flags & 18874368) {
              var n2 = e16.memoizedProps, r3 = n2.name;
              if (r3 != null && r3 !== `auto`) {
                var i2 = t3.get(r3);
                if (i2 !== void 0) {
                  var a3 = bi2(n2.default, n2.share);
                  if (a3 !== `none` && (Gl(e16, r3, a3, null, false) ? (a3 = e16.stateNode, i2.paired = a3, a3.paired = i2, Nd(e16, n2.onShare)) : ql(e16.child, false)), t3.delete(r3), t3.size === 0) break;
                }
              }
            }
            Xl(e16);
          }
          e16 = e16.sibling;
        }
      }
    }
    function Zl(e16) {
      if (e16.tag === 30) {
        var t3 = e16.memoizedProps, n2 = vi2(t3, e16.stateNode), r3 = Bl === null ? void 0 : Bl.get(n2), i2 = bi2(t3.default, r3 === void 0 ? t3.exit : t3.share);
        i2 !== `none` && (Gl(e16, n2, i2, null, false) ? r3 === void 0 ? Nd(e16, t3.onExit) : (i2 = e16.stateNode, r3.paired = i2, i2.paired = r3, Bl.delete(n2), Nd(e16, t3.onShare)) : ql(e16.child, false)), Bl !== null && Xl(e16);
      } else if (e16.subtreeFlags & 33554432) for (e16 = e16.child; e16 !== null; ) Zl(e16), e16 = e16.sibling;
      else Bl !== null && Xl(e16);
    }
    function Ql(e16) {
      for (e16 = e16.child; e16 !== null; ) {
        if (e16.tag === 30) {
          var t3 = e16.memoizedProps, n2 = vi2(t3, e16.stateNode);
          t3 = bi2(t3.default, t3.update), e16.flags &= -5, t3 !== `none` && Gl(e16, n2, t3, e16.memoizedState = [], false);
        } else e16.subtreeFlags & 33554432 && Ql(e16);
        e16 = e16.sibling;
      }
    }
    function $l(e16) {
      if (e16.subtreeFlags & 18874368) for (e16 = e16.child; e16 !== null; ) {
        if (e16.tag !== 22 || e16.memoizedState === null) {
          if (e16.tag === 30 && e16.flags & 18874368) {
            var t3 = e16.stateNode;
            t3.paired !== null && (t3.paired = null, ql(e16.child, false));
          }
          $l(e16);
        }
        e16 = e16.sibling;
      }
    }
    function eu(e16) {
      if (e16.tag === 30) e16.stateNode.paired = null, ql(e16.child, false), $l(e16);
      else if (e16.subtreeFlags & 33554432) for (e16 = e16.child; e16 !== null; ) eu(e16), e16 = e16.sibling;
      else $l(e16);
    }
    function tu(e16) {
      for (e16 = e16.child; e16 !== null; ) e16.tag === 30 ? ql(e16.child, false) : e16.subtreeFlags & 33554432 && tu(e16), e16 = e16.sibling;
    }
    function nu(e16, t3, n2, r3, i2, a3, o2) {
      for (var s3 = false; t3 !== null; ) {
        if (t3.tag === 5) {
          var c3 = t3.stateNode;
          if (a3 !== null && Wl < a3.length) {
            var l3 = a3[Wl], u3 = Op(c3);
            (l3.view || u3.view) && (s3 = true);
            var d3;
            if (d3 = (e16.flags & 4) == 0) if (u3.clip) d3 = true;
            else {
              d3 = l3.rect;
              var f2 = u3.rect;
              d3 = d3.y !== f2.y || d3.x !== f2.x || d3.height !== f2.height || d3.width !== f2.width;
            }
            d3 && (e16.flags |= 4), u3.abs ? u3 = !l3.abs : (l3 = l3.rect, u3 = u3.rect, u3 = l3.height !== u3.height || l3.width !== u3.width), u3 && (e16.flags |= 32);
          } else e16.flags |= 32;
          e16.flags & 4 && Tp(c3, Wl === 0 ? n2 : n2 + `_` + Wl, i2), s3 && e16.flags & 4 || (Hl === null && (Hl = []), Hl.push(c3, Wl === 0 ? r3 : r3 + `_` + Wl, t3.memoizedProps)), Wl++;
        } else (t3.tag !== 22 || t3.memoizedState === null) && (t3.tag === 30 && o2 ? e16.flags |= t3.flags & 32 : nu(e16, t3.child, n2, r3, i2, a3, o2) && (s3 = true));
        t3 = t3.sibling;
      }
      return s3;
    }
    function ru(e16, t3) {
      for (e16 = e16.child; e16 !== null; ) {
        if (e16.tag === 30) {
          var n2 = e16.memoizedProps, r3 = e16.stateNode, i2 = vi2(n2, r3), a3 = bi2(n2.default, n2.update);
          if (t3) {
            r3 = r3.clones;
            var o2 = r3 === null ? null : r3.map(kp);
          } else o2 = e16.memoizedState, e16.memoizedState = null;
          r3 = e16;
          var s3 = e16.child;
          Wl = 0, i2 = nu(r3, s3, i2, i2, a3, o2, false), e16.flags & 4 && i2 && (t3 || Nd(e16, n2.onUpdate));
        } else e16.subtreeFlags & 33554432 && ru(e16, t3);
        e16 = e16.sibling;
      }
    }
    var iu = false, G2 = false, au = false, ou = false, su = typeof WeakSet == `function` ? WeakSet : Set, cu = null, lu = false, uu = false, du = false, fu = false;
    function pu(e16, t3, n2) {
      if (e16 = e16.containerInfo, sp = gh, e16 = Jr2(e16), Yr2(e16)) {
        if (`selectionStart` in e16) var r3 = { start: e16.selectionStart, end: e16.selectionEnd };
        else a: {
          r3 = (r3 = e16.ownerDocument) && r3.defaultView || window;
          var i2 = r3.getSelection && r3.getSelection();
          if (i2 && i2.rangeCount !== 0) {
            r3 = i2.anchorNode;
            var a3 = i2.anchorOffset, o2 = i2.focusNode;
            i2 = i2.focusOffset;
            try {
              r3.nodeType, o2.nodeType;
            } catch {
              r3 = null;
              break a;
            }
            var s3 = 0, c3 = -1, l3 = -1, u3 = 0, d3 = 0, f2 = e16, p3 = null;
            b: for (; ; ) {
              for (var m2; f2 !== r3 || a3 !== 0 && f2.nodeType !== 3 || (c3 = s3 + a3), f2 !== o2 || i2 !== 0 && f2.nodeType !== 3 || (l3 = s3 + i2), f2.nodeType === 3 && (s3 += f2.nodeValue.length), (m2 = f2.firstChild) !== null; ) p3 = f2, f2 = m2;
              for (; ; ) {
                if (f2 === e16) break b;
                if (p3 === r3 && ++u3 === a3 && (c3 = s3), p3 === o2 && ++d3 === i2 && (l3 = s3), (m2 = f2.nextSibling) !== null) break;
                f2 = p3, p3 = f2.parentNode;
              }
              f2 = m2;
            }
            r3 = c3 === -1 || l3 === -1 ? null : { start: c3, end: l3 };
          } else r3 = null;
        }
        r3 ||= { start: 0, end: 0 };
      } else r3 = null;
      for (cp = { focusedElem: e16, selectionRange: r3 }, gh = false, n2 = (n2 & 335544064) === n2, cu = t3, t3 = n2 ? 9270 : 1024; cu !== null; ) {
        if (e16 = cu, n2 && (r3 = e16.deletions, r3 !== null)) for (a3 = 0; a3 < r3.length; a3++) n2 && Zl(r3[a3]);
        if (e16.alternate === null && e16.flags & 2) n2 && Vl(e16), mu(n2);
        else {
          if (e16.tag === 22) {
            if (r3 = e16.alternate, e16.memoizedState !== null) {
              r3 !== null && r3.memoizedState === null && n2 && Zl(r3), mu(n2);
              continue;
            } else if (r3 !== null && r3.memoizedState !== null) {
              n2 && Vl(e16), mu(n2);
              continue;
            }
          }
          r3 = e16.child, (e16.subtreeFlags & t3) !== 0 && r3 !== null ? (r3.return = e16, cu = r3) : (n2 && Ql(e16), mu(n2));
        }
      }
      Bl = null;
    }
    function mu(e16) {
      for (; cu !== null; ) {
        var t3 = cu, n2 = e16, r3 = t3.alternate, i2 = t3.flags;
        switch (t3.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (i2 & 1024 && r3 !== null) {
              n2 = void 0, i2 = r3.memoizedProps, r3 = r3.memoizedState;
              var a3 = t3.stateNode;
              try {
                var o2 = Sc(t3.type, i2);
                n2 = a3.getSnapshotBeforeUpdate(o2, r3), a3.__reactInternalSnapshotBeforeUpdate = n2;
              } catch (e17) {
                Z2(t3, t3.return, e17);
              }
            }
            break;
          case 3:
            if (i2 & 1024) {
              if (r3 = t3.stateNode.containerInfo, n2 = r3.nodeType, n2 === 9) nm(r3);
              else if (n2 === 1) switch (r3.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  nm(r3);
                  break;
                default:
                  r3.textContent = ``;
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            n2 && r3 !== null && (n2 = vi2(r3.memoizedProps, r3.stateNode), i2 = t3.memoizedProps, i2 = bi2(i2.default, i2.update), i2 !== `none` && Gl(r3, n2, i2, r3.memoizedState = [], true));
            break;
          default:
            if (i2 & 1024) throw Error(s2(163));
        }
        if (r3 = t3.sibling, r3 !== null) {
          r3.return = t3.return, cu = r3;
          break;
        }
        cu = t3.return;
      }
    }
    function hu(e16, t3, n2) {
      var r3 = n2.flags;
      switch (n2.tag) {
        case 0:
        case 11:
        case 15:
          Fu(e16, n2), r3 & 4 && xl(5, n2);
          break;
        case 1:
          if (Fu(e16, n2), r3 & 4) if (e16 = n2.stateNode, t3 === null) try {
            e16.componentDidMount();
          } catch (e17) {
            Z2(n2, n2.return, e17);
          }
          else {
            var i2 = Sc(n2.type, t3.memoizedProps);
            t3 = t3.memoizedState;
            try {
              e16.componentDidUpdate(i2, t3, e16.__reactInternalSnapshotBeforeUpdate);
            } catch (e17) {
              Z2(n2, n2.return, e17);
            }
          }
          r3 & 64 && Cl(n2), r3 & 512 && Tl(n2, n2.return);
          break;
        case 3:
          if (Fu(e16, n2), r3 & 64 && (e16 = n2.updateQueue, e16 !== null)) {
            if (t3 = null, n2.child !== null) switch (n2.child.tag) {
              case 27:
              case 5:
                t3 = n2.child.stateNode;
                break;
              case 1:
                t3 = n2.child.stateNode;
            }
            try {
              wo(e16, t3);
            } catch (e17) {
              Z2(n2, n2.return, e17);
            }
          }
          break;
        case 27:
          t3 === null && r3 & 4 && Rl(n2);
        case 26:
        case 5:
          Fu(e16, n2), t3 === null && r3 & 4 && Ml(n2), r3 & 512 && Tl(n2, n2.return);
          break;
        case 12:
          Fu(e16, n2);
          break;
        case 31:
          Fu(e16, n2), r3 & 4 && wu(e16, n2);
          break;
        case 13:
          Fu(e16, n2), r3 & 4 && Tu(e16, n2), r3 & 64 && (e16 = n2.memoizedState, e16 !== null && (e16 = e16.dehydrated, e16 !== null && (n2 = _f.bind(null, n2), cm(e16, n2))));
          break;
        case 22:
          if (r3 = n2.memoizedState !== null || iu, !r3) {
            var a3 = t3 !== null && t3.memoizedState !== null || G2;
            t3 = iu, i2 = G2, iu = r3, (G2 = a3) && !i2 ? (r3 = 2, n2.subtreeFlags & 8772 && (r3 |= 1), Lu(e16, n2, r3)) : Fu(e16, n2), iu = t3, G2 = i2;
          }
          break;
        case 30:
          Fu(e16, n2), r3 & 512 && Tl(n2, n2.return);
          break;
        case 7:
          r3 & 512 && Tl(n2, n2.return);
        default:
          Fu(e16, n2);
      }
    }
    function gu(e16, t3) {
      for (e16 = e16.child; e16 !== null; ) _u(e16, t3), e16 = e16.sibling;
    }
    function _u(e16, t3) {
      switch (e16.tag) {
        case 5:
        case 26:
          try {
            var n2 = e16.stateNode;
            if (t3) {
              var r3 = n2.style;
              typeof r3.setProperty == `function` ? r3.setProperty(`display`, `none`, `important`) : r3.display = `none`;
            } else {
              var i2 = e16.stateNode, a3 = e16.memoizedProps.style, o2 = a3 != null && a3.hasOwnProperty(`display`) ? a3.display : null;
              i2.style.display = o2 == null || typeof o2 == `boolean` ? `` : (`` + o2).trim();
            }
          } catch (t4) {
            Z2(e16, e16.return, t4);
          }
          vu(e16, t3);
          break;
        case 6:
          try {
            e16.stateNode.nodeValue = t3 ? `` : e16.memoizedProps, I3 = true;
          } catch (t4) {
            Z2(e16, e16.return, t4);
          }
          break;
        case 18:
          try {
            var s3 = e16.stateNode;
            t3 ? wp(s3, true) : wp(e16.stateNode, false);
          } catch (t4) {
            Z2(e16, e16.return, t4);
          }
          break;
        case 22:
        case 23:
          e16.memoizedState === null && gu(e16, t3);
          break;
        default:
          gu(e16, t3);
      }
    }
    function vu(e16, t3) {
      if (e16.subtreeFlags & 67108864) for (e16 = e16.child; e16 !== null; ) {
        a: {
          var n2 = e16, r3 = t3;
          switch (n2.tag) {
            case 4:
              _u(n2, r3);
              break a;
            case 22:
              n2.memoizedState === null && vu(n2, r3);
              break a;
            default:
              vu(n2, r3);
          }
        }
        e16 = e16.sibling;
      }
    }
    function yu(e16) {
      var t3 = e16.alternate;
      t3 !== null && (e16.alternate = null, yu(t3)), e16.child = null, e16.deletions = null, e16.sibling = null, e16.tag === 5 && (t3 = e16.stateNode, t3 !== null && Pt3(t3)), e16.stateNode = null, e16.return = null, e16.dependencies = null, e16.memoizedProps = null, e16.memoizedState = null, e16.pendingProps = null, e16.stateNode = null, e16.updateQueue = null;
    }
    var bu = null, xu = false;
    function Su(e16, t3, n2) {
      for (n2 = n2.child; n2 !== null; ) Cu(e16, t3, n2), n2 = n2.sibling;
    }
    function Cu(e16, t3, n2) {
      if ($e3 && typeof $e3.onCommitFiberUnmount == `function`) try {
        $e3.onCommitFiberUnmount(Qe3, n2);
      } catch {
      }
      switch (n2.tag) {
        case 26:
          G2 || El(n2, t3), Su(e16, t3, n2), n2.memoizedState ? n2.memoizedState.count-- : n2.stateNode && !G2 && (n2 = n2.stateNode, n2.parentNode.removeChild(n2));
          break;
        case 27:
          G2 || El(n2, t3), kl(n2);
          var r3 = bu, i2 = xu;
          Sp(n2.type) && (bu = n2.stateNode, xu = false), Su(e16, t3, n2), gm(n2.stateNode, n2.type, n2.memoizedProps), bu = r3, xu = i2;
          break;
        case 5:
          G2 || El(n2, t3), kl(n2);
        case 6:
          if (n2.tag === 6 && kl(n2), r3 = bu, i2 = xu, bu = null, Su(e16, t3, n2), bu = r3, xu = i2, bu !== null) if (xu) try {
            (bu.nodeType === 9 ? bu.body : bu.nodeName === `HTML` ? bu.ownerDocument.body : bu).removeChild(n2.stateNode), I3 = true;
          } catch (e17) {
            Z2(n2, t3, e17);
          }
          else try {
            bu.removeChild(n2.stateNode), I3 = true;
          } catch (e17) {
            Z2(n2, t3, e17);
          }
          break;
        case 18:
          bu !== null && (xu ? (e16 = bu, Cp(e16.nodeType === 9 ? e16.body : e16.nodeName === `HTML` ? e16.ownerDocument.body : e16, n2.stateNode), Hh(e16)) : Cp(bu, n2.stateNode));
          break;
        case 4:
          r3 = bu, i2 = xu, bu = n2.stateNode.containerInfo, xu = true, Su(e16, t3, n2), bu = r3, xu = i2;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(2, n2, t3), G2 || Sl(4, n2, t3), Su(e16, t3, n2);
          break;
        case 1:
          G2 || (El(n2, t3), r3 = n2.stateNode, typeof r3.componentWillUnmount == `function` && wl(n2, t3, r3)), Su(e16, t3, n2);
          break;
        case 21:
          Su(e16, t3, n2);
          break;
        case 22:
          G2 = (r3 = G2) || n2.memoizedState !== null, Su(e16, t3, n2), G2 = r3;
          break;
        case 30:
          El(n2, t3), Su(e16, t3, n2);
          break;
        case 7:
          G2 || El(n2, t3), Su(e16, t3, n2);
          break;
        default:
          Su(e16, t3, n2);
      }
    }
    function wu(e16, t3) {
      if (t3.memoizedState === null && (e16 = t3.alternate, e16 !== null && (e16 = e16.memoizedState, e16 !== null))) {
        e16 = e16.dehydrated;
        try {
          Hh(e16);
        } catch (e17) {
          Z2(t3, t3.return, e17);
        }
      }
    }
    function Tu(e16, t3) {
      if (t3.memoizedState === null && (e16 = t3.alternate, e16 !== null && (e16 = e16.memoizedState, e16 !== null && (e16 = e16.dehydrated, e16 !== null)))) try {
        Hh(e16);
      } catch (e17) {
        Z2(t3, t3.return, e17);
      }
    }
    function Eu(e16) {
      switch (e16.tag) {
        case 31:
        case 13:
        case 19:
          var t3 = e16.stateNode;
          return t3 === null && (t3 = e16.stateNode = new su()), t3;
        case 22:
          return e16 = e16.stateNode, t3 = e16._retryCache, t3 === null && (t3 = e16._retryCache = new su()), t3;
        default:
          throw Error(s2(435, e16.tag));
      }
    }
    function Du(e16, t3) {
      var n2 = Eu(e16);
      t3.forEach(function(t4) {
        if (!n2.has(t4)) {
          n2.add(t4);
          var r3 = vf.bind(null, e16, t4);
          t4.then(r3, r3);
        }
      });
    }
    function Ou(e16, t3, n2) {
      var r3 = t3.deletions;
      if (r3 !== null) for (var i2 = 0; i2 < r3.length; i2++) {
        var a3 = r3[i2], o2 = e16, c3 = t3, l3 = c3;
        a: for (; l3 !== null; ) {
          switch (l3.tag) {
            case 27:
              if (Sp(l3.type)) {
                bu = l3.stateNode, xu = false;
                break a;
              }
              break;
            case 5:
              bu = l3.stateNode, xu = false;
              break a;
            case 3:
            case 4:
              bu = l3.stateNode.containerInfo, xu = true;
              break a;
          }
          l3 = l3.return;
        }
        if (bu === null) throw Error(s2(160));
        Cu(o2, c3, a3), bu = null, xu = false, o2 = a3.alternate, o2 !== null && (o2.return = null), a3.return = null;
      }
      if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) Au(t3, e16, n2), t3 = t3.sibling;
    }
    var ku = null;
    function Au(e16, t3, n2) {
      var r3 = e16.alternate, i2 = e16.flags;
      switch (e16.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (i2 & 4 && (r3 = e16.updateQueue, r3 = r3 === null ? null : r3.events, r3 !== null)) for (var a3 = 0; a3 < r3.length; a3++) {
            var o2 = r3[a3];
            o2.ref.impl = o2.nextImpl;
          }
          Ou(t3, e16, n2), ju(e16), i2 & 4 && (Sl(3, e16, e16.return), xl(3, e16), Sl(5, e16, e16.return));
          break;
        case 1:
          Ou(t3, e16, n2), ju(e16), i2 & 512 && (G2 || r3 === null || El(r3, r3.return)), i2 & 64 && iu && (e16 = e16.updateQueue, e16 !== null && (t3 = e16.callbacks, t3 !== null && (n2 = e16.shared.hiddenCallbacks, e16.shared.hiddenCallbacks = n2 === null ? t3 : n2.concat(t3))));
          break;
        case 26:
          if (a3 = ku, Ou(t3, e16, n2), ju(e16), i2 & 512 && (G2 || r3 === null || El(r3, r3.return)), i2 & 4) if (i2 = r3 === null ? null : r3.memoizedState, n2 = e16.memoizedState, r3 === null) if (n2 === null) if (e16.stateNode === null) if (iu) e16.stateNode = fp(e16.type, e16.memoizedProps, t3.containerInfo, e16);
          else {
            a: {
              t3 = e16.type, n2 = e16.memoizedProps, i2 = a3.ownerDocument || a3;
              b: switch (t3) {
                case `title`:
                  r3 = i2.getElementsByTagName(`title`)[0], (!r3 || r3[Mt3] || r3[Tt3] || r3.namespaceURI === `http://www.w3.org/2000/svg` || r3.hasAttribute(`itemprop`)) && (r3 = i2.createElement(t3), i2.head.insertBefore(r3, i2.querySelector(`head > title`))), np(r3, t3, n2), r3[Tt3] = e16, zt3(r3), t3 = r3;
                  break a;
                case `link`:
                  if (a3 = Gm(`link`, `href`, i2).get(t3 + (n2.href || ``))) {
                    for (o2 = 0; o2 < a3.length; o2++) if (r3 = a3[o2], r3.getAttribute(`href`) === (n2.href == null || n2.href === `` ? null : n2.href) && r3.getAttribute(`rel`) === (n2.rel == null ? null : n2.rel) && r3.getAttribute(`title`) === (n2.title == null ? null : n2.title) && r3.getAttribute(`crossorigin`) === (n2.crossOrigin == null ? null : n2.crossOrigin)) {
                      a3.splice(o2, 1);
                      break b;
                    }
                  }
                  r3 = i2.createElement(t3), np(r3, t3, n2), i2.head.appendChild(r3);
                  break;
                case `meta`:
                  if (a3 = Gm(`meta`, `content`, i2).get(t3 + (n2.content || ``))) {
                    for (o2 = 0; o2 < a3.length; o2++) if (r3 = a3[o2], r3.getAttribute(`content`) === (n2.content == null ? null : `` + n2.content) && r3.getAttribute(`name`) === (n2.name == null ? null : n2.name) && r3.getAttribute(`property`) === (n2.property == null ? null : n2.property) && r3.getAttribute(`http-equiv`) === (n2.httpEquiv == null ? null : n2.httpEquiv) && r3.getAttribute(`charset`) === (n2.charSet == null ? null : n2.charSet)) {
                      a3.splice(o2, 1);
                      break b;
                    }
                  }
                  r3 = i2.createElement(t3), np(r3, t3, n2), i2.head.appendChild(r3);
                  break;
                default:
                  throw Error(s2(468, t3));
              }
              r3[Tt3] = e16, zt3(r3), t3 = r3;
            }
            e16.stateNode = t3;
          }
          else iu || Km(a3, e16.type, e16.stateNode);
          else e16.stateNode = Bm(a3, n2, e16.memoizedProps);
          else i2 === n2 ? n2 === null && e16.stateNode !== null && Nl(e16, e16.memoizedProps, r3.memoizedProps) : (i2 === null ? (t3 = r3.stateNode, t3 === null || G2 || t3.parentNode.removeChild(t3)) : i2.count--, n2 === null ? iu || Km(a3, e16.type, e16.stateNode) : Bm(a3, n2, e16.memoizedProps));
          break;
        case 27:
          Ou(t3, e16, n2), ju(e16), i2 & 512 && (G2 || r3 === null || El(r3, r3.return)), r3 !== null && i2 & 4 && Nl(e16, e16.memoizedProps, r3.memoizedProps);
          break;
        case 5:
          if (a3 = au, au = false, Ou(t3, e16, n2), au = a3, ju(e16), i2 & 512 && (G2 || r3 === null || El(r3, r3.return)), e16.flags & 32) {
            t3 = e16.stateNode;
            try {
              pn2(t3, ``), I3 = true;
            } catch (t4) {
              Z2(e16, e16.return, t4);
            }
          }
          i2 & 4 && e16.stateNode != null && (t3 = e16.memoizedProps, Nl(e16, t3, r3 === null ? t3 : r3.memoizedProps)), i2 & 1024 && (ou = true);
          break;
        case 6:
          if (Ou(t3, e16, n2), ju(e16), i2 & 4) {
            if (e16.stateNode === null) throw Error(s2(162));
            t3 = e16.memoizedProps, n2 = e16.stateNode;
            try {
              n2.nodeValue = t3, I3 = true;
            } catch (t4) {
              Z2(e16, e16.return, t4);
            }
          }
          break;
        case 3:
          if (I3 = false, Wm = null, a3 = ku, ku = bm(t3.containerInfo), Ou(t3, e16, n2), ku = a3, ju(e16), i2 & 4 && r3 !== null && r3.memoizedState.isDehydrated) try {
            Hh(t3.containerInfo);
          } catch (t4) {
            Z2(e16, e16.return, t4);
          }
          ou && (ou = false, Mu(e16)), I3 = false;
          break;
        case 4:
          i2 = au, au = iu, r3 = Yt3(), a3 = ku, ku = bm(e16.stateNode.containerInfo), Ou(t3, e16, n2), ju(e16), ku = a3, I3 && uu && (du = true), I3 = r3, au = i2;
          break;
        case 12:
          Ou(t3, e16, n2), ju(e16);
          break;
        case 31:
          Ou(t3, e16, n2), ju(e16), i2 & 4 && (t3 = e16.updateQueue, t3 !== null && (e16.updateQueue = null, Du(e16, t3)));
          break;
        case 13:
          Ou(t3, e16, n2), ju(e16), e16.child.flags & 8192 && e16.memoizedState !== null != (r3 !== null && r3.memoizedState !== null) && (md = Ue3()), i2 & 4 && (t3 = e16.updateQueue, t3 !== null && (e16.updateQueue = null, Du(e16, t3)));
          break;
        case 22:
          a3 = e16.memoizedState !== null, o2 = r3 !== null && r3.memoizedState !== null;
          var c3 = iu, l3 = G2, u3 = au;
          iu = c3 || a3, au = u3 || a3, G2 = l3 || o2, Ou(t3, e16, n2), G2 = l3, au = u3, iu = c3, ju(e16), i2 & 8192 && (t3 = e16.stateNode, t3._visibility = a3 ? t3._visibility & -2 : t3._visibility | 1, !a3 || r3 === null || o2 || iu || G2 || (t3 = o2 || G2, n2 = iu, r3 = G2, iu = a3 || iu, G2 = t3, Iu(e16, 2), iu = n2, G2 = r3), !a3 && au || gu(e16, a3)), i2 & 4 && (t3 = e16.updateQueue, t3 !== null && (n2 = t3.retryQueue, n2 !== null && (t3.retryQueue = null, Du(e16, n2))));
          break;
        case 19:
          Ou(t3, e16, n2), ju(e16), i2 & 4 && (t3 = e16.updateQueue, t3 !== null && (e16.updateQueue = null, Du(e16, t3)));
          break;
        case 30:
          i2 & 512 && (G2 || r3 === null || El(r3, r3.return)), i2 = Yt3(), a3 = uu, o2 = (n2 & 335544064) === n2, c3 = e16.memoizedProps, uu = o2 && bi2(c3.default, c3.update) !== `none`, Ou(t3, e16, n2), ju(e16), o2 && r3 !== null && I3 && (e16.flags |= 4), uu = a3, I3 = i2;
          break;
        case 21:
          break;
        case 7:
          i2 & 512 && (G2 || r3 === null || El(r3, r3.return)), r3 && r3.stateNode !== null && (r3.stateNode._fragmentFiber = e16);
        default:
          Ou(t3, e16, n2), ju(e16);
      }
    }
    function ju(e16) {
      var t3 = e16.flags;
      if (t3 & 2) {
        try {
          for (var n2, r3 = e16.return; r3 !== null; ) {
            if (Pl(r3)) {
              n2 = r3;
              break;
            }
            r3 = r3.return;
          }
          r3 = null;
          for (var i2 = e16.return; i2 !== null; ) {
            if (jl(i2)) {
              var a3 = i2.stateNode;
              r3 === null ? r3 = [a3] : r3.push(a3);
            }
            if (Al(i2)) break;
            i2 = i2.return;
          }
          var o2 = r3;
          if (n2 == null) throw Error(s2(160));
          switch (n2.tag) {
            case 27:
              var c3 = n2.stateNode;
              Ll(e16, Fl(e16), c3, o2);
              break;
            case 5:
              var l3 = n2.stateNode;
              n2.flags & 32 && (pn2(l3, ``), n2.flags &= -33), Ll(e16, Fl(e16), l3, o2);
              break;
            case 3:
            case 4:
              var u3 = n2.stateNode.containerInfo;
              Il(e16, Fl(e16), u3, o2);
              break;
            default:
              throw Error(s2(161));
          }
        } catch (t4) {
          Z2(e16, e16.return, t4);
        }
        e16.flags &= -3;
      }
      t3 & 4096 && (e16.flags &= -4097);
    }
    function Mu(e16) {
      if (e16.subtreeFlags & 1024) for (e16 = e16.child; e16 !== null; ) {
        var t3 = e16;
        Mu(t3), t3.tag === 5 && t3.flags & 1024 && (t3 = t3.stateNode, gh = true, t3.reset(), gh = false), e16 = e16.sibling;
      }
    }
    function Nu(e16, t3) {
      if (t3.subtreeFlags & 9270) for (t3 = t3.child; t3 !== null; ) Pu(t3, e16), t3 = t3.sibling;
      else ru(t3, false);
    }
    function Pu(e16, t3) {
      var n2 = e16.alternate;
      if (n2 === null) Yl(e16, false);
      else switch (e16.tag) {
        case 3:
          if (fu = lu = false, Ul(), Nu(t3, e16), !lu && !du) {
            if (e16 = Hl, e16 !== null) for (var r3 = 0; r3 < e16.length; r3 += 3) {
              n2 = e16[r3];
              var i2 = e16[r3 + 1];
              Ep(n2, e16[r3 + 2]), n2 = n2.ownerDocument.documentElement, n2 !== null && n2.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(` + i2 + `)` });
            }
            e16 = t3.containerInfo, e16 = e16.nodeType === 9 ? e16.documentElement : e16.ownerDocument.documentElement, e16 !== null && e16.style.viewTransitionName === `` && (e16.style.viewTransitionName = `none`, e16.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(root)` }), e16.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition` })), fu = true;
          }
          Hl = null;
          break;
        case 5:
          Nu(t3, e16);
          break;
        case 4:
          r3 = lu, lu = false, Nu(t3, e16), lu && (du = true), lu = r3;
          break;
        case 22:
          e16.memoizedState === null && (n2.memoizedState === null ? Nu(t3, e16) : Yl(e16, false));
          break;
        case 30:
          r3 = lu, i2 = Ul(), lu = false, Nu(t3, e16), lu && (e16.flags |= 4);
          var a3 = e16.memoizedProps, o2 = e16.stateNode;
          t3 = vi2(a3, o2), o2 = vi2(n2.memoizedProps, o2);
          var s3 = bi2(a3.default, a3.update);
          s3 === `none` ? t3 = false : (a3 = n2.memoizedState, n2.memoizedState = null, n2 = e16.child, Wl = 0, t3 = nu(e16, n2, t3, o2, s3, a3, true), Wl !== (a3 === null ? 0 : a3.length) && (e16.flags |= 32)), e16.flags & 4 && t3 ? (Nd(e16, e16.memoizedProps.onUpdate), Hl = i2) : i2 !== null && (i2.push.apply(i2, Hl), Hl = i2), lu = e16.flags & 32 ? true : r3;
          break;
        default:
          Nu(t3, e16);
      }
    }
    function Fu(e16, t3) {
      if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) hu(e16, t3.alternate, t3), t3 = t3.sibling;
    }
    function Iu(e16, t3) {
      for (e16 = e16.child; e16 !== null; ) {
        var n2 = e16, r3 = t3;
        switch (n2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Sl(4, n2, n2.return), Iu(n2, r3);
            break;
          case 1:
            El(n2, n2.return);
            var i2 = n2.stateNode;
            typeof i2.componentWillUnmount == `function` && wl(n2, n2.return, i2), Iu(n2, r3);
            break;
          case 27:
            r3 & 2 && gm(n2.stateNode, n2.type, n2.memoizedProps);
          case 5:
            El(n2, n2.return), n2.tag !== 5 && n2.tag !== 27 || kl(n2), Iu(n2, r3);
            break;
          case 6:
            kl(n2);
            break;
          case 26:
            El(n2, n2.return), i2 = n2.stateNode, n2.memoizedState !== null || i2 === null || G2 || i2.parentNode.removeChild(i2), Iu(n2, r3);
            break;
          case 22:
            n2.memoizedState === null && Iu(n2, r3);
            break;
          case 30:
            El(n2, n2.return), Iu(n2, r3);
            break;
          case 7:
            El(n2, n2.return);
          default:
            Iu(n2, r3);
        }
        e16 = e16.sibling;
      }
    }
    function Lu(e16, t3, n2) {
      for (n2 = t3.subtreeFlags & 8772 ? n2 : n2 & -2, t3 = t3.child; t3 !== null; ) {
        var r3 = t3.alternate, i2 = e16, a3 = t3, o2 = a3.flags, s3 = (n2 & 1) != 0;
        switch (a3.tag) {
          case 0:
          case 11:
          case 15:
            Lu(i2, a3, n2), xl(4, a3);
            break;
          case 1:
            if (Lu(i2, a3, n2), r3 = a3, i2 = r3.stateNode, typeof i2.componentDidMount == `function`) try {
              i2.componentDidMount();
            } catch (e17) {
              Z2(r3, r3.return, e17);
            }
            if (r3 = a3, i2 = r3.updateQueue, i2 !== null) {
              var c3 = r3.stateNode;
              try {
                var l3 = i2.shared.hiddenCallbacks;
                if (l3 !== null) for (i2.shared.hiddenCallbacks = null, i2 = 0; i2 < l3.length; i2++) Co(l3[i2], c3);
              } catch (e17) {
                Z2(r3, r3.return, e17);
              }
            }
            s3 && o2 & 64 && Cl(a3), Tl(a3, a3.return);
            break;
          case 27:
            n2 & 2 && Rl(a3);
          case 5:
            a3.tag !== 5 && a3.tag !== 27 || Ol(a3), Lu(i2, a3, n2), s3 && r3 === null && o2 & 4 && Ml(a3), Tl(a3, a3.return);
            break;
          case 6:
            Ol(a3);
            break;
          case 26:
            c3 = a3.stateNode, a3.memoizedState !== null || c3 === null || iu || Km(bm(c3.ownerDocument), a3.type, c3), Lu(i2, a3, n2), s3 && r3 === null && o2 & 4 && Ml(a3), Tl(a3, a3.return);
            break;
          case 12:
            Lu(i2, a3, n2);
            break;
          case 31:
            Lu(i2, a3, n2), s3 && o2 & 4 && wu(i2, a3);
            break;
          case 13:
            Lu(i2, a3, n2), s3 && o2 & 4 && Tu(i2, a3);
            break;
          case 22:
            a3.memoizedState === null && Lu(i2, a3, n2), Tl(a3, a3.return);
            break;
          case 30:
            Lu(i2, a3, n2), Tl(a3, a3.return);
            break;
          case 7:
            Tl(a3, a3.return);
          default:
            Lu(i2, a3, n2);
        }
        t3 = t3.sibling;
      }
    }
    function Ru(e16, t3) {
      var n2 = null;
      e16 !== null && e16.memoizedState !== null && e16.memoizedState.cachePool !== null && (n2 = e16.memoizedState.cachePool.pool), e16 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e16 = t3.memoizedState.cachePool.pool), e16 !== n2 && (e16 != null && e16.refCount++, n2 != null && Ma(n2));
    }
    function zu(e16, t3) {
      e16 = null, t3.alternate !== null && (e16 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e16 && (t3.refCount++, e16 != null && Ma(e16));
    }
    function Bu(e16, t3, n2, r3) {
      var i2 = (n2 & 335544064) === n2;
      if (t3.subtreeFlags & (i2 ? 10262 : 10256)) for (t3 = t3.child; t3 !== null; ) Vu(e16, t3, n2, r3), t3 = t3.sibling;
      else i2 && tu(t3);
    }
    function Vu(e16, t3, n2, r3) {
      var i2 = (n2 & 335544064) === n2;
      i2 && t3.alternate === null && t3.return !== null && t3.return.alternate !== null && eu(t3);
      var a3 = t3.flags;
      switch (t3.tag) {
        case 0:
        case 11:
        case 15:
          Bu(e16, t3, n2, r3), a3 & 2048 && xl(9, t3);
          break;
        case 1:
          Bu(e16, t3, n2, r3);
          break;
        case 3:
          Bu(e16, t3, n2, r3), i2 && fu && (e16 = e16.containerInfo, e16 = e16.nodeType === 9 ? e16.body : e16.nodeName === `HTML` ? e16.ownerDocument.body : e16, e16.style.viewTransitionName === `root` && (e16.style.viewTransitionName = ``), e16 = e16.ownerDocument.documentElement, e16 !== null && e16.style.viewTransitionName === `none` && (e16.style.viewTransitionName = ``)), a3 & 2048 && (a3 = null, t3.alternate !== null && (a3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== a3 && (t3.refCount++, a3 != null && Ma(a3)));
          break;
        case 12:
          if (a3 & 2048) {
            Bu(e16, t3, n2, r3), a3 = t3.stateNode;
            try {
              var o2 = t3.memoizedProps, s3 = o2.id, c3 = o2.onPostCommit;
              typeof c3 == `function` && c3(s3, t3.alternate === null ? `mount` : `update`, a3.passiveEffectDuration, -0);
            } catch (e17) {
              Z2(t3, t3.return, e17);
            }
          } else Bu(e16, t3, n2, r3);
          break;
        case 31:
          Bu(e16, t3, n2, r3);
          break;
        case 13:
          Bu(e16, t3, n2, r3);
          break;
        case 23:
          break;
        case 22:
          o2 = t3.stateNode, s3 = t3.alternate, t3.memoizedState === null ? (i2 && s3 !== null && s3.memoizedState !== null && eu(t3), o2._visibility & 2 ? Bu(e16, t3, n2, r3) : (o2._visibility |= 2, Hu(e16, t3, n2, r3, (t3.subtreeFlags & 10256) != 0 || false))) : (i2 && s3 !== null && s3.memoizedState === null && eu(s3), o2._visibility & 2 ? Bu(e16, t3, n2, r3) : Uu(e16, t3)), a3 & 2048 && Ru(s3, t3);
          break;
        case 24:
          Bu(e16, t3, n2, r3), a3 & 2048 && zu(t3.alternate, t3);
          break;
        case 30:
          i2 && (a3 = t3.alternate, a3 !== null && (ql(a3.child, true), ql(t3.child, true))), Bu(e16, t3, n2, r3);
          break;
        default:
          Bu(e16, t3, n2, r3);
      }
    }
    function Hu(e16, t3, n2, r3, i2) {
      for (i2 &&= (t3.subtreeFlags & 10256) != 0 || false, t3 = t3.child; t3 !== null; ) {
        var a3 = e16, o2 = t3, s3 = n2, c3 = r3, l3 = o2.flags;
        switch (o2.tag) {
          case 0:
          case 11:
          case 15:
            Hu(a3, o2, s3, c3, i2), xl(8, o2);
            break;
          case 23:
            break;
          case 22:
            var u3 = o2.stateNode;
            o2.memoizedState === null ? (u3._visibility |= 2, Hu(a3, o2, s3, c3, i2)) : u3._visibility & 2 ? Hu(a3, o2, s3, c3, i2) : Uu(a3, o2), i2 && l3 & 2048 && Ru(o2.alternate, o2);
            break;
          case 24:
            Hu(a3, o2, s3, c3, i2), i2 && l3 & 2048 && zu(o2.alternate, o2);
            break;
          default:
            Hu(a3, o2, s3, c3, i2);
        }
        t3 = t3.sibling;
      }
    }
    function Uu(e16, t3) {
      if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
        var n2 = e16, r3 = t3, i2 = r3.flags;
        switch (r3.tag) {
          case 22:
            Uu(n2, r3), i2 & 2048 && Ru(r3.alternate, r3);
            break;
          case 24:
            Uu(n2, r3), i2 & 2048 && zu(r3.alternate, r3);
            break;
          default:
            Uu(n2, r3);
        }
        t3 = t3.sibling;
      }
    }
    var Wu = 8192;
    function Gu(e16, t3, n2) {
      if (e16.subtreeFlags & Wu) for (e16 = e16.child; e16 !== null; ) Ku(e16, t3, n2), e16 = e16.sibling;
    }
    function Ku(e16, t3, n2) {
      switch (e16.tag) {
        case 26:
          Gu(e16, t3, n2), e16.flags & Wu && (e16.memoizedState === null ? (e16 = e16.stateNode, (t3 & 335544128) === t3 && Zm(n2, e16)) : Qm(n2, ku, e16.memoizedState, e16.memoizedProps));
          break;
        case 5:
          Gu(e16, t3, n2), e16.flags & Wu && (e16 = e16.stateNode, (t3 & 335544128) === t3 && Zm(n2, e16));
          break;
        case 3:
        case 4:
          var r3 = ku;
          ku = bm(e16.stateNode.containerInfo), Gu(e16, t3, n2), ku = r3;
          break;
        case 22:
          e16.memoizedState === null && (r3 = e16.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = Wu, Wu = 16777216, Gu(e16, t3, n2), Wu = r3) : Gu(e16, t3, n2));
          break;
        case 30:
          if ((e16.flags & Wu) !== 0 && (r3 = e16.memoizedProps.name, r3 != null && r3 !== `auto`)) {
            var i2 = e16.stateNode;
            i2.paired = null, Bl === null && (Bl = /* @__PURE__ */ new Map()), Bl.set(r3, i2);
          }
          Gu(e16, t3, n2);
          break;
        default:
          Gu(e16, t3, n2);
      }
    }
    function qu(e16) {
      var t3 = e16.alternate;
      if (t3 !== null && (e16 = t3.child, e16 !== null)) {
        t3.child = null;
        do
          t3 = e16.sibling, e16.sibling = null, e16 = t3;
        while (e16 !== null);
      }
    }
    function Ju(e16) {
      var t3 = e16.deletions;
      if (e16.flags & 16) {
        if (t3 !== null) for (var n2 = 0; n2 < t3.length; n2++) {
          var r3 = t3[n2];
          cu = r3, Zu(r3, e16);
        }
        qu(e16);
      }
      if (e16.subtreeFlags & 10256) for (e16 = e16.child; e16 !== null; ) Yu(e16), e16 = e16.sibling;
    }
    function Yu(e16) {
      switch (e16.tag) {
        case 0:
        case 11:
        case 15:
          Ju(e16), e16.flags & 2048 && Sl(9, e16, e16.return);
          break;
        case 3:
          Ju(e16);
          break;
        case 12:
          Ju(e16);
          break;
        case 22:
          var t3 = e16.stateNode;
          e16.memoizedState !== null && t3._visibility & 2 && (e16.return === null || e16.return.tag !== 13) ? (t3._visibility &= -3, Xu(e16)) : Ju(e16);
          break;
        default:
          Ju(e16);
      }
    }
    function Xu(e16) {
      var t3 = e16.deletions;
      if (e16.flags & 16) {
        if (t3 !== null) for (var n2 = 0; n2 < t3.length; n2++) {
          var r3 = t3[n2];
          cu = r3, Zu(r3, e16);
        }
        qu(e16);
      }
      for (e16 = e16.child; e16 !== null; ) {
        switch (t3 = e16, t3.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, t3, t3.return), Xu(t3);
            break;
          case 22:
            n2 = t3.stateNode, n2._visibility & 2 && (n2._visibility &= -3, Xu(t3));
            break;
          default:
            Xu(t3);
        }
        e16 = e16.sibling;
      }
    }
    function Zu(e16, t3) {
      for (; cu !== null; ) {
        var n2 = cu;
        switch (n2.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, n2, t3);
            break;
          case 23:
          case 22:
            if (n2.memoizedState !== null && n2.memoizedState.cachePool !== null) {
              var r3 = n2.memoizedState.cachePool.pool;
              r3 != null && r3.refCount++;
            }
            break;
          case 24:
            Ma(n2.memoizedState.cache);
        }
        if (r3 = n2.child, r3 !== null) r3.return = n2, cu = r3;
        else a: for (n2 = e16; cu !== null; ) {
          r3 = cu;
          var i2 = r3.sibling, a3 = r3.return;
          if (yu(r3), r3 === n2) {
            cu = null;
            break a;
          }
          if (i2 !== null) {
            i2.return = a3, cu = i2;
            break a;
          }
          cu = a3;
        }
      }
    }
    var Qu = { getCacheForType: function(e16) {
      var t3 = wa(Aa), n2 = t3.data.get(e16);
      return n2 === void 0 && (n2 = e16(), t3.data.set(e16, n2)), n2;
    }, cacheSignal: function() {
      return wa(Aa).controller.signal;
    } }, $u = typeof WeakMap == `function` ? WeakMap : Map, K2 = 0, q2 = null, J2 = null, Y2 = 0, X2 = 0, ed = null, td = false, nd = false, rd = false, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = false, md = 0, hd = 0, gd = 1 / 0, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
    function jd() {
      return K2 & 2 && Y2 !== 0 ? Y2 & -Y2 : A3.T === null ? St3() : Pf();
    }
    function Md() {
      if (ld === 0) if (!(Y2 & 536870912) || V3) {
        var e16 = ot3;
        ot3 <<= 1, !(ot3 & 3932160) && (ot3 = 262144), ld = e16;
      } else ld = 536870912;
      return e16 = Ao.current, e16 !== null && (e16.flags |= 32), ld;
    }
    function Nd(e16, t3) {
      if (t3 != null) {
        var n2 = e16.stateNode, r3 = n2.ref;
        r3 === null && (r3 = n2.ref = Pp(vi2(e16.memoizedProps, n2))), Dd === null && (Dd = []), Dd.push(t3.bind(null, r3));
      }
    }
    function Pd(e16, t3, n2) {
      (e16 === q2 && (X2 === 2 || X2 === 9) || e16.cancelPendingCommit !== null) && (Vd(e16, 0), Rd(e16, Y2, ld, false)), ht3(e16, n2), (!(K2 & 2) || e16 !== q2) && (e16 === q2 && (!(K2 & 2) && (sd |= n2), ad === 4 && Rd(e16, Y2, ld, false)), Ef(e16));
    }
    function Fd(e16, t3, n2) {
      if (K2 & 6) throw Error(s2(327));
      var r3 = !n2 && (t3 & 127) == 0 && (t3 & e16.expiredLanes) === 0 || ut3(e16, t3), i2 = r3 ? Yd(e16, t3) : qd(e16, t3, true), a3 = r3;
      do {
        if (i2 === 0) {
          nd && !r3 && Rd(e16, t3, 0, false);
          break;
        } else {
          if (n2 = e16.current.alternate, a3 && !Ld(n2)) {
            i2 = qd(e16, t3, false), a3 = false;
            continue;
          }
          if (i2 === 2) {
            if (a3 = t3, e16.errorRecoveryDisabledLanes & a3) var o2 = 0;
            else o2 = e16.pendingLanes & -536870913, o2 = o2 === 0 ? o2 & 536870912 ? 536870912 : 0 : o2;
            if (o2 !== 0) {
              t3 = o2;
              a: {
                var c3 = e16;
                i2 = dd;
                var l3 = c3.current.memoizedState.isDehydrated;
                if (l3 && (Vd(c3, o2).flags |= 256), o2 = qd(c3, o2, false), o2 !== 2 && o2 !== 6) {
                  if (rd && !l3) {
                    c3.errorRecoveryDisabledLanes |= a3, sd |= a3, i2 = 4;
                    break a;
                  }
                  a3 = fd, fd = i2, a3 !== null && (fd === null ? fd = a3 : fd.push.apply(fd, a3));
                }
                i2 = o2;
              }
              if (a3 = false, i2 !== 2) continue;
            }
          }
          if (i2 === 1) {
            Vd(e16, 0), Rd(e16, t3, 0, true);
            break;
          }
          a: {
            switch (r3 = e16, a3 = i2, a3) {
              case 0:
              case 1:
                throw Error(s2(345));
              case 4:
                if ((t3 & 4194048) !== t3 && (t3 & 62914560) !== t3) break;
              case 6:
                Rd(r3, t3, ld, !td);
                break a;
              case 2:
                fd = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(s2(329));
            }
            if ((t3 & 62914560) === t3 && (i2 = md + 300 - Ue3(), 10 < i2)) {
              if (Rd(r3, t3, ld, !td), lt3(r3, 0, true) !== 0) break a;
              Sd = t3, r3.timeoutHandle = gp(Id.bind(null, r3, n2, fd, _d, pd, t3, ld, sd, ud, td, a3, `Throttled`, -0, 0), i2);
              break a;
            }
            Id(r3, n2, fd, _d, pd, t3, ld, sd, ud, td, a3, null, -0, 0);
          }
        }
        break;
      } while (1);
      Ef(e16);
    }
    function Id(e16, t3, n2, r3, i2, a3, o2, s3, c3, l3, u3, d3, f2, p3) {
      e16.timeoutHandle = -1;
      var m2 = t3.subtreeFlags, h3 = (a3 & 335544064) === a3;
      if (d3 = null, (h3 || m2 & 8192 || (m2 & 16785408) == 16785408) && (d3 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: xn2 }, Bl = null, Ku(t3, a3, d3), h3 && (m2 = d3, h3 = e16.containerInfo, h3 = (h3.nodeType === 9 ? h3 : h3.ownerDocument).__reactViewTransition, h3 != null && (m2.count++, m2.waitingForViewTransition = true, m2 = nh.bind(m2), h3.finished.then(m2, m2))), m2 = (a3 & 62914560) === a3 ? md - Ue3() : (a3 & 4194048) === a3 ? hd - Ue3() : 0, m2 = eh(d3, m2), m2 !== null)) {
        Sd = a3, e16.cancelPendingCommit = m2(nf.bind(null, e16, t3, a3, n2, r3, i2, o2, s3, c3, l3, u3, d3, null, f2, p3)), Rd(e16, a3, o2, !l3);
        return;
      }
      nf(e16, t3, a3, n2, r3, i2, o2, s3, c3, l3, u3, d3);
    }
    function Ld(e16) {
      for (var t3 = e16; ; ) {
        var n2 = t3.tag;
        if ((n2 === 0 || n2 === 11 || n2 === 15) && t3.flags & 16384 && (n2 = t3.updateQueue, n2 !== null && (n2 = n2.stores, n2 !== null))) for (var r3 = 0; r3 < n2.length; r3++) {
          var i2 = n2[r3], a3 = i2.getSnapshot;
          i2 = i2.value;
          try {
            if (!Hr2(a3(), i2)) return false;
          } catch {
            return false;
          }
        }
        if (n2 = t3.child, t3.subtreeFlags & 16384 && n2 !== null) n2.return = t3, t3 = n2;
        else {
          if (t3 === e16) break;
          for (; t3.sibling === null; ) {
            if (t3.return === null || t3.return === e16) return true;
            t3 = t3.return;
          }
          t3.sibling.return = t3.return, t3 = t3.sibling;
        }
      }
      return true;
    }
    function Rd(e16, t3, n2, r3) {
      t3 = dt3(e16, t3), t3 &= ~cd, t3 &= ~sd, e16.suspendedLanes |= t3, e16.pingedLanes &= ~t3, r3 && (e16.warmLanes |= t3), r3 = e16.expirationTimes;
      for (var i2 = t3; 0 < i2; ) {
        var a3 = 31 - tt3(i2), o2 = 1 << a3;
        r3[a3] = -1, i2 &= ~o2;
      }
      n2 !== 0 && _t3(e16, n2, t3);
    }
    function zd() {
      return K2 & 6 ? true : (Df(0, false), false);
    }
    function Bd() {
      if (J2 !== null) {
        if (X2 === 0) var e16 = J2.return;
        else e16 = J2, ga2 = ha2 = null, is(e16), io = null, ao = 0, e16 = J2;
        for (; e16 !== null; ) bl(e16.alternate, e16), e16 = e16.return;
        J2 = null;
      }
    }
    function Vd(e16, t3) {
      var n2 = e16.timeoutHandle;
      return n2 !== -1 && (e16.timeoutHandle = -1, _p(n2)), n2 = e16.cancelPendingCommit, n2 !== null && (e16.cancelPendingCommit = null, n2()), Sd = 0, Bd(), q2 = e16, J2 = n2 = Pi2(e16.current, null), Y2 = t3, X2 = 0, ed = null, td = false, nd = ut3(e16, t3), rd = false, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = false, id = dt3(e16, t3), wi2(), n2;
    }
    function Hd(e16, t3) {
      H2 = null, A3.H = mc, t3 === Ja || t3 === Xa ? (t3 = no(), X2 = 3) : t3 === Ya ? (t3 = no(), X2 = 4) : X2 = t3 === Mc ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, ed = t3, J2 === null && (ad = 1, Ec(e16, Hi2(t3, e16.current)));
    }
    function Ud() {
      var e16 = Ao.current;
      return e16 === null ? true : (Y2 & 4194048) === Y2 ? jo === null : (Y2 & 62914560) === Y2 || Y2 & 536870912 ? e16 === jo : false;
    }
    function Wd() {
      var e16 = A3.H;
      return A3.H = mc, e16 === null ? mc : e16;
    }
    function Gd() {
      var e16 = A3.A;
      return A3.A = Qu, e16;
    }
    function Kd() {
      ad = 4, td || (Y2 & 4194048) !== Y2 && Ao.current !== null || (nd = true), !(od & 134217727) && !(sd & 134217727) || q2 === null || Rd(q2, Y2, ld, false);
    }
    function qd(e16, t3, n2) {
      var r3 = K2;
      K2 |= 2;
      var i2 = Wd(), a3 = Gd();
      (q2 !== e16 || Y2 !== t3) && (_d = null, Vd(e16, t3)), t3 = false;
      var o2 = ad;
      a: do
        try {
          if (X2 !== 0 && J2 !== null) {
            var s3 = J2, c3 = ed;
            switch (X2) {
              case 8:
                Bd(), o2 = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Ao.current === null && (t3 = true);
                var l3 = X2;
                if (X2 = 0, ed = null, $d(e16, s3, c3, l3), n2 && nd) {
                  o2 = 0;
                  break a;
                }
                break;
              default:
                l3 = X2, X2 = 0, ed = null, $d(e16, s3, c3, l3);
            }
          }
          Jd(), o2 = ad;
          break;
        } catch (t4) {
          Hd(e16, t4);
        }
      while (1);
      return t3 && e16.shellSuspendCounter++, ga2 = ha2 = null, K2 = r3, A3.H = i2, A3.A = a3, J2 === null && (q2 = null, Y2 = 0, wi2()), o2;
    }
    function Jd() {
      for (; J2 !== null; ) Zd(J2);
    }
    function Yd(e16, t3) {
      var n2 = K2;
      K2 |= 2;
      var r3 = Wd(), i2 = Gd();
      q2 !== e16 || Y2 !== t3 ? (_d = null, gd = Ue3() + 500, Vd(e16, t3)) : nd = ut3(e16, t3);
      a: do
        try {
          if (X2 !== 0 && J2 !== null) {
            t3 = J2;
            var a3 = ed;
            b: switch (X2) {
              case 1:
                X2 = 0, ed = null, $d(e16, t3, a3, 1);
                break;
              case 2:
              case 9:
                if (Qa(a3)) {
                  X2 = 0, ed = null, Qd(t3);
                  break;
                }
                t3 = function() {
                  X2 !== 2 && X2 !== 9 || q2 !== e16 || (X2 = 7), Ef(e16);
                }, a3.then(t3, t3);
                break a;
              case 3:
                X2 = 7;
                break a;
              case 4:
                X2 = 5;
                break a;
              case 7:
                Qa(a3) ? (X2 = 0, ed = null, Qd(t3)) : (X2 = 0, ed = null, $d(e16, t3, a3, 7));
                break;
              case 5:
                var o2 = null;
                switch (J2.tag) {
                  case 26:
                    o2 = J2.memoizedState;
                  case 5:
                  case 27:
                    var c3 = J2;
                    if (o2 ? Ym(o2) : c3.stateNode.complete) {
                      X2 = 0, ed = null;
                      var l3 = c3.sibling;
                      if (l3 !== null) J2 = l3;
                      else {
                        var u3 = c3.return;
                        u3 === null ? J2 = null : (J2 = u3, ef(u3));
                      }
                      break b;
                    }
                }
                X2 = 0, ed = null, $d(e16, t3, a3, 5);
                break;
              case 6:
                X2 = 0, ed = null, $d(e16, t3, a3, 6);
                break;
              case 8:
                Bd(), ad = 6;
                break a;
              default:
                throw Error(s2(462));
            }
          }
          Xd();
          break;
        } catch (t4) {
          Hd(e16, t4);
        }
      while (1);
      return ga2 = ha2 = null, A3.H = r3, A3.A = i2, K2 = n2, J2 === null ? (q2 = null, Y2 = 0, wi2(), ad) : 0;
    }
    function Xd() {
      for (; J2 !== null && !Ve3(); ) Zd(J2);
    }
    function Zd(e16) {
      var t3 = fl(e16.alternate, e16, id);
      e16.memoizedProps = e16.pendingProps, t3 === null ? ef(e16) : J2 = t3;
    }
    function Qd(e16) {
      var t3 = e16, n2 = t3.alternate;
      switch (t3.tag) {
        case 15:
        case 0:
          t3 = Kc(n2, t3, t3.pendingProps, t3.type, void 0, Y2);
          break;
        case 11:
          t3 = Kc(n2, t3, t3.pendingProps, t3.type.render, t3.ref, Y2);
          break;
        case 5:
          is(t3);
          var r3 = t3;
          r3 === ra2 && (V3 ? (la2(r3), r3.tag === 5 && r3.stateNode != null && (B3 = r3.stateNode)) : (la2(r3), V3 = true));
        default:
          bl(n2, t3), t3 = J2 = Fi2(t3, id), t3 = fl(n2, t3, id);
      }
      e16.memoizedProps = e16.pendingProps, t3 === null ? ef(e16) : J2 = t3;
    }
    function $d(e16, t3, n2, r3) {
      ga2 = ha2 = null, is(t3), io = null, ao = 0;
      var i2 = t3.return;
      try {
        if (jc(e16, i2, t3, n2, Y2)) {
          ad = 1, Ec(e16, Hi2(n2, e16.current)), J2 = null;
          return;
        }
      } catch (t4) {
        if (i2 !== null) throw J2 = i2, t4;
        ad = 1, Ec(e16, Hi2(n2, e16.current)), J2 = null;
        return;
      }
      t3.flags & 32768 ? (V3 || r3 === 1 ? e16 = true : nd || Y2 & 536870912 ? e16 = false : (td = e16 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = Ao.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), tf(t3, e16)) : ef(t3);
    }
    function ef(e16) {
      var t3 = e16;
      do {
        if (t3.flags & 32768) {
          tf(t3, td);
          return;
        }
        e16 = t3.return;
        var n2 = vl(t3.alternate, t3, id);
        if (n2 !== null) {
          J2 = n2;
          return;
        }
        if (t3 = t3.sibling, t3 !== null) {
          J2 = t3;
          return;
        }
        J2 = t3 = e16;
      } while (t3 !== null);
      ad === 0 && (ad = 5);
    }
    function tf(e16, t3) {
      do {
        var n2 = yl(e16.alternate, e16);
        if (n2 !== null) {
          n2.flags &= 32767, J2 = n2;
          return;
        }
        if (n2 = e16.return, n2 !== null && (n2.flags |= 32768, n2.subtreeFlags = 0, n2.deletions = null), !t3 && (e16 = e16.sibling, e16 !== null)) {
          J2 = e16;
          return;
        }
        J2 = e16 = n2;
      } while (e16 !== null);
      ad = 6, J2 = null;
    }
    function nf(e16, t3, n2, r3, i2, a3, o2, c3, l3, u3, d3, f2) {
      e16.cancelPendingCommit = null;
      do
        df();
      while (yd !== 0);
      if (K2 & 6) throw Error(s2(327));
      if (t3 !== null) {
        if (t3 === e16.current) throw Error(s2(177));
        e16 === q2 && (J2 = q2 = null, Y2 = 0), xd = t3, bd = e16, Sd = n2, wd = i2, Td = r3, rf(e16, t3, n2, o2, c3, l3, f2);
      }
    }
    function rf(e16, t3, n2, r3, i2, a3, o2) {
      var s3 = t3.lanes | t3.childLanes;
      if (Cd = s3, s3 |= Ci2, gt3(e16, n2, s3, r3, i2, a3), Dd = null, (n2 & 335544064) === n2 ? (Od = Fa(e16), r3 = 10262) : (Od = null, r3 = 10256), (t3.subtreeFlags & r3) !== 0 || (t3.flags & r3) !== 0 ? (e16.callbackNode = null, e16.callbackPriority = 0, yf(qe3, function() {
        return ff(), null;
      })) : (e16.callbackNode = null, e16.callbackPriority = 0), zl = false, r3 = (t3.flags & 13878) != 0, t3.subtreeFlags & 13878 || r3) {
        r3 = A3.T, A3.T = null, i2 = j3.p, j3.p = 2, a3 = K2, K2 |= 4;
        try {
          pu(e16, t3, n2);
        } finally {
          K2 = a3, j3.p = i2, A3.T = r3;
        }
      }
      yd = 1, zl ? Ed = Mp(o2, e16.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
    }
    function af(e16) {
      if (yd !== 0) {
        var t3 = bd.onRecoverableError;
        t3(e16, { componentStack: null });
      }
    }
    function of() {
      yd === 3 && (yd = 0, Pu(xd, bd), yd = 4);
    }
    function sf() {
      if (yd === 1) {
        yd = 0;
        var e16 = bd, t3 = xd, n2 = Sd, r3 = (t3.flags & 13878) != 0;
        if (t3.subtreeFlags & 13878 || r3) {
          r3 = A3.T, A3.T = null;
          var i2 = j3.p;
          j3.p = 2;
          var a3 = K2;
          K2 |= 4;
          try {
            uu = du = false, Au(t3, e16, n2), n2 = cp;
            var o2 = Jr2(e16.containerInfo), s3 = n2.focusedElem, c3 = n2.selectionRange;
            if (o2 !== s3 && s3 && s3.ownerDocument && qr2(s3.ownerDocument.documentElement, s3)) {
              if (c3 !== null && Yr2(s3)) {
                var l3 = c3.start, u3 = c3.end;
                if (u3 === void 0 && (u3 = l3), `selectionStart` in s3) s3.selectionStart = l3, s3.selectionEnd = Math.min(u3, s3.value.length);
                else {
                  var d3 = s3.ownerDocument || document, f2 = d3 && d3.defaultView || window;
                  if (f2.getSelection) {
                    var p3 = f2.getSelection(), m2 = s3.textContent.length, h3 = Math.min(c3.start, m2), g3 = c3.end === void 0 ? h3 : Math.min(c3.end, m2);
                    !p3.extend && h3 > g3 && (o2 = g3, g3 = h3, h3 = o2);
                    var _4 = Kr2(s3, h3), v4 = Kr2(s3, g3);
                    if (_4 && v4 && (p3.rangeCount !== 1 || p3.anchorNode !== _4.node || p3.anchorOffset !== _4.offset || p3.focusNode !== v4.node || p3.focusOffset !== v4.offset)) {
                      var y4 = d3.createRange();
                      y4.setStart(_4.node, _4.offset), p3.removeAllRanges(), h3 > g3 ? (p3.addRange(y4), p3.extend(v4.node, v4.offset)) : (y4.setEnd(v4.node, v4.offset), p3.addRange(y4));
                    }
                  }
                }
              }
              for (d3 = [], p3 = s3; p3 = p3.parentNode; ) p3.nodeType === 1 && d3.push({ element: p3, left: p3.scrollLeft, top: p3.scrollTop });
              for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d3.length; s3++) {
                var b4 = d3[s3];
                b4.element.scrollLeft = b4.left, b4.element.scrollTop = b4.top;
              }
            }
            gh = !!sp, cp = sp = null;
          } finally {
            K2 = a3, j3.p = i2, A3.T = r3;
          }
        }
        e16.current = t3, yd = 2;
      }
    }
    function cf() {
      if (yd === 2) {
        yd = 0;
        var e16 = bd, t3 = xd, n2 = (t3.flags & 8772) != 0;
        if (t3.subtreeFlags & 8772 || n2) {
          n2 = A3.T, A3.T = null;
          var r3 = j3.p;
          j3.p = 2;
          var i2 = K2;
          K2 |= 4;
          try {
            hu(e16, t3.alternate, t3);
          } finally {
            K2 = i2, j3.p = r3, A3.T = n2;
          }
        }
        yd = 3;
      }
    }
    function lf() {
      if (yd === 4 || yd === 3) {
        yd = 0;
        var e16 = Ed;
        Ed = null, He3();
        var t3 = bd, n2 = xd, r3 = Sd, i2 = Td, a3 = (r3 & 335544064) === r3 ? 10262 : 10256;
        if ((n2.subtreeFlags & a3) !== 0 || (n2.flags & a3) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t3, t3.pendingLanes)), a3 = t3.pendingLanes, a3 === 0 && (vd = null), xt3(r3), n2 = n2.stateNode, $e3 && typeof $e3.onCommitFiberRoot == `function`) try {
          $e3.onCommitFiberRoot(Qe3, n2, void 0, (n2.current.flags & 128) == 128);
        } catch {
        }
        if (i2 !== null) {
          n2 = A3.T, a3 = j3.p, j3.p = 2, A3.T = null;
          try {
            for (var o2 = t3.onRecoverableError, s3 = 0; s3 < i2.length; s3++) {
              var c3 = i2[s3];
              o2(c3.value, { componentStack: c3.stack });
            }
          } finally {
            A3.T = n2, j3.p = a3;
          }
        }
        if (i2 = Dd, o2 = Od, Od = null, i2 !== null && (Dd = null, o2 === null && (o2 = []), e16 !== null)) for (c3 = 0; c3 < i2.length; c3++) n2 = (0, i2[c3])(o2), n2 !== void 0 && e16.finished.finally(n2);
        Sd & 3 && df(), Ef(t3), a3 = t3.pendingLanes, r3 & 261930 && a3 & 42 ? t3 === Ad ? kd++ : (kd = 0, Ad = t3) : (kd = 0, Ad = null), Df(0, false);
      }
    }
    function uf(e16, t3) {
      (e16.pooledCacheLanes &= t3) === 0 && (t3 = e16.pooledCache, t3 != null && (e16.pooledCache = null, Ma(t3)));
    }
    function df() {
      return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
    }
    function ff() {
      if (yd !== 5) return false;
      var e16 = bd, t3 = Cd;
      Cd = 0;
      var n2 = xt3(Sd), r3 = A3.T, i2 = j3.p;
      try {
        j3.p = 32 > n2 ? 32 : n2, A3.T = null, n2 = wd, wd = null;
        var a3 = bd, o2 = Sd;
        if (yd = 0, xd = bd = null, Sd = 0, K2 & 6) throw Error(s2(331));
        var c3 = K2;
        if (K2 |= 4, Yu(a3.current), Vu(a3, a3.current, o2, n2), K2 = c3, Df(0, false), $e3 && typeof $e3.onPostCommitFiberRoot == `function`) try {
          $e3.onPostCommitFiberRoot(Qe3, a3);
        } catch {
        }
        return true;
      } finally {
        j3.p = i2, A3.T = r3, uf(e16, t3);
      }
    }
    function pf(e16, t3, n2) {
      t3 = Hi2(n2, t3), t3 = Oc(e16.stateNode, t3, 2), e16 = _o(e16, t3, 2), e16 !== null && (ht3(e16, 2), Ef(e16));
    }
    function Z2(e16, t3, n2) {
      if (e16.tag === 3) pf(e16, e16, n2);
      else for (; t3 !== null; ) {
        if (t3.tag === 3) {
          pf(t3, e16, n2);
          break;
        } else if (t3.tag === 1) {
          var r3 = t3.stateNode;
          if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (vd === null || !vd.has(r3))) {
            e16 = Hi2(n2, e16), n2 = kc(2), r3 = _o(t3, n2, 2), r3 !== null && (Ac(n2, r3, t3, e16), ht3(r3, 2), Ef(r3));
            break;
          }
        }
        t3 = t3.return;
      }
    }
    function mf(e16, t3, n2) {
      var r3 = e16.pingCache;
      if (r3 === null) {
        r3 = e16.pingCache = new $u();
        var i2 = /* @__PURE__ */ new Set();
        r3.set(t3, i2);
      } else i2 = r3.get(t3), i2 === void 0 && (i2 = /* @__PURE__ */ new Set(), r3.set(t3, i2));
      i2.has(n2) || (rd = true, i2.add(n2), e16 = hf.bind(null, e16, t3, n2), t3.then(e16, e16));
    }
    function hf(e16, t3, n2) {
      var r3 = e16.pingCache;
      r3 !== null && r3.delete(t3), e16.pingedLanes |= e16.suspendedLanes & n2, e16.warmLanes &= ~n2, q2 === e16 && (Y2 & n2) === n2 && (ad === 4 || ad === 3 && (Y2 & 62914560) === Y2 && 300 > Ue3() - md ? K2 & 2 ? cd |= n2 : Vd(e16, 0) : cd |= n2, ud === Y2 && (ud = 0)), Ef(e16);
    }
    function gf(e16, t3) {
      t3 === 0 && (t3 = pt3()), e16 = Di2(e16, t3), e16 !== null && (ht3(e16, t3), Ef(e16));
    }
    function _f(e16) {
      var t3 = e16.memoizedState, n2 = 0;
      t3 !== null && (n2 = t3.retryLane), gf(e16, n2);
    }
    function vf(e16, t3) {
      var n2 = 0;
      switch (e16.tag) {
        case 31:
        case 13:
          var r3 = e16.stateNode, i2 = e16.memoizedState;
          i2 !== null && (n2 = i2.retryLane);
          break;
        case 19:
          r3 = e16.stateNode;
          break;
        case 22:
          r3 = e16.stateNode._retryCache;
          break;
        default:
          throw Error(s2(314));
      }
      r3 !== null && r3.delete(t3), gf(e16, n2);
    }
    function yf(e16, t3) {
      return ze3(e16, t3);
    }
    var bf = null, xf = null, Sf = false, Cf = false, wf = false, Tf = 0;
    function Ef(e16) {
      e16 !== xf && e16.next === null && (xf === null ? bf = xf = e16 : xf = xf.next = e16), Cf = true, Sf || (Sf = true, Nf());
    }
    function Df(e16, t3) {
      if (!wf && Cf) {
        wf = true;
        do
          for (var n2 = false, r3 = bf; r3 !== null; ) {
            if (!t3) if (e16 !== 0) {
              var i2 = r3.pendingLanes;
              if (i2 === 0) var a3 = 0;
              else {
                var o2 = r3.suspendedLanes, s3 = r3.pingedLanes;
                a3 = (1 << 31 - tt3(42 | e16) + 1) - 1, a3 &= i2 & ~(o2 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
              }
              a3 !== 0 && (n2 = true, Mf(r3, a3));
            } else a3 = Y2, a3 = lt3(r3, r3 === q2 ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== -1), !(a3 & 3) || ut3(r3, a3) || (n2 = true, Mf(r3, a3));
            r3 = r3.next;
          }
        while (n2);
        wf = false;
      }
    }
    function Of() {
      kf();
    }
    function kf() {
      Cf = Sf = false;
      var e16 = 0;
      Tf !== 0 && hp() && (e16 = Tf);
      for (var t3 = Ue3(), n2 = null, r3 = bf; r3 !== null; ) {
        var i2 = r3.next, a3 = Af(r3, t3);
        a3 === 0 ? (r3.next = null, n2 === null ? bf = i2 : n2.next = i2, i2 === null && (xf = n2)) : (n2 = r3, (e16 !== 0 || a3 & 3) && (Cf = true)), r3 = i2;
      }
      yd !== 0 && yd !== 5 || Df(e16, false), Tf !== 0 && (Tf = 0);
    }
    function Af(e16, t3) {
      for (var n2 = e16.suspendedLanes, r3 = e16.pingedLanes, i2 = e16.expirationTimes, a3 = e16.pendingLanes & -62914561; 0 < a3; ) {
        var o2 = 31 - tt3(a3), s3 = 1 << o2, c3 = i2[o2];
        c3 === -1 ? ((s3 & n2) === 0 || (s3 & r3) !== 0) && (i2[o2] = ft3(s3, t3)) : c3 <= t3 && (e16.expiredLanes |= s3), a3 &= ~s3;
      }
      if (t3 = q2, n2 = Y2, n2 = lt3(e16, e16 === t3 ? n2 : 0, e16.cancelPendingCommit !== null || e16.timeoutHandle !== -1), r3 = e16.callbackNode, n2 === 0 || e16 === t3 && (X2 === 2 || X2 === 9) || e16.cancelPendingCommit !== null) return r3 !== null && r3 !== null && Be3(r3), e16.callbackNode = null, e16.callbackPriority = 0;
      if (!(n2 & 3) || ut3(e16, n2)) {
        if (t3 = n2 & -n2, t3 === e16.callbackPriority) return t3;
        switch (r3 !== null && Be3(r3), xt3(n2)) {
          case 2:
          case 8:
            n2 = Ke3;
            break;
          case 32:
            n2 = qe3;
            break;
          case 268435456:
            n2 = Ye3;
            break;
          default:
            n2 = qe3;
        }
        return r3 = jf.bind(null, e16), n2 = ze3(n2, r3), e16.callbackPriority = t3, e16.callbackNode = n2, t3;
      }
      return r3 !== null && r3 !== null && Be3(r3), e16.callbackPriority = 2, e16.callbackNode = null, 2;
    }
    function jf(e16, t3) {
      if (yd !== 0 && yd !== 5) return e16.callbackNode = null, e16.callbackPriority = 0, null;
      var n2 = e16.callbackNode;
      if (df() && e16.callbackNode !== n2) return null;
      var r3 = Y2;
      return r3 = lt3(e16, e16 === q2 ? r3 : 0, e16.cancelPendingCommit !== null || e16.timeoutHandle !== -1), r3 === 0 ? null : (Fd(e16, r3, t3), Af(e16, Ue3()), e16.callbackNode != null && e16.callbackNode === n2 ? jf.bind(null, e16) : null);
    }
    function Mf(e16, t3) {
      if (df()) return null;
      Fd(e16, t3, true);
    }
    function Nf() {
      bp(function() {
        K2 & 6 ? ze3(Ge3, Of) : kf();
      });
    }
    function Pf() {
      if (Tf === 0) {
        var e16 = Ra;
        e16 === 0 && (e16 = at3, at3 <<= 1, !(at3 & 261888) && (at3 = 256)), Tf = e16;
      }
      return Tf;
    }
    function Ff(e16) {
      return e16 == null || typeof e16 == `symbol` || typeof e16 == `boolean` ? null : typeof e16 == `function` ? e16 : bn2(e16);
    }
    function If(e16, t3, n2, r3, i2) {
      if (t3 === `submit` && n2 && n2.stateNode === i2) {
        var a3 = Ff((i2[Et3] || null).action), o2 = r3.submitter;
        o2 && (t3 = (t3 = o2[Et3] || null) ? Ff(t3.formAction) : o2.getAttribute(`formAction`), t3 !== null && (a3 = t3, o2 = null));
        var s3 = new Vn2(`action`, `action`, null, r3, i2);
        e16.push({ event: s3, listeners: [{ instance: null, listener: function() {
          if (r3.defaultPrevented) {
            if (Tf !== 0) {
              var e17 = new FormData(i2, o2);
              ec(n2, { pending: true, data: e17, method: i2.method, action: a3 }, null, e17);
            }
          } else typeof a3 == `function` && (s3.preventDefault(), e17 = new FormData(i2, o2), ec(n2, { pending: true, data: e17, method: i2.method, action: a3 }, a3, e17));
        }, currentTarget: i2 }] });
      }
    }
    for (var Lf = 0; Lf < hi2.length; Lf++) {
      var Rf = hi2[Lf];
      gi2(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
    }
    gi2(si2, `onAnimationEnd`), gi2(ci2, `onAnimationIteration`), gi2(li2, `onAnimationStart`), gi2(`dblclick`, `onDoubleClick`), gi2(`focusin`, `onFocus`), gi2(`focusout`, `onBlur`), gi2(ui2, `onTransitionRun`), gi2(di2, `onTransitionStart`), gi2(fi2, `onTransitionCancel`), gi2(pi2, `onTransitionEnd`), Wt3(`onMouseEnter`, [`mouseout`, `mouseover`]), Wt3(`onMouseLeave`, [`mouseout`, `mouseover`]), Wt3(`onPointerEnter`, [`pointerout`, `pointerover`]), Wt3(`onPointerLeave`, [`pointerout`, `pointerover`]), Ut3(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), Ut3(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), Ut3(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), Ut3(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), Ut3(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), Ut3(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
    var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
    function Vf(e16, t3) {
      t3 = (t3 & 4) != 0;
      for (var n2 = 0; n2 < e16.length; n2++) {
        var r3 = e16[n2], i2 = r3.event;
        r3 = r3.listeners;
        a: {
          var a3 = void 0;
          if (t3) for (var o2 = r3.length - 1; 0 <= o2; o2--) {
            var s3 = r3[o2], c3 = s3.instance, l3 = s3.currentTarget;
            if (s3 = s3.listener, c3 !== a3 && i2.isPropagationStopped()) break a;
            a3 = s3, i2.currentTarget = l3;
            try {
              a3(i2);
            } catch (e17) {
              xi2(e17);
            }
            i2.currentTarget = null, a3 = c3;
          }
          else for (o2 = 0; o2 < r3.length; o2++) {
            if (s3 = r3[o2], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a3 && i2.isPropagationStopped()) break a;
            a3 = s3, i2.currentTarget = l3;
            try {
              a3(i2);
            } catch (e17) {
              xi2(e17);
            }
            i2.currentTarget = null, a3 = c3;
          }
        }
      }
    }
    function Q2(e16, t3) {
      var n2 = t3[Ot3];
      n2 === void 0 && (n2 = t3[Ot3] = /* @__PURE__ */ new Set());
      var r3 = e16 + `__bubble`;
      n2.has(r3) || (Gf(t3, e16, 2, false), n2.add(r3));
    }
    function Hf(e16, t3, n2) {
      var r3 = 0;
      t3 && (r3 |= 4), Gf(n2, e16, r3, t3);
    }
    var Uf = `_reactListening` + Math.random().toString(36).slice(2);
    function Wf(e16) {
      if (!e16[Uf]) {
        e16[Uf] = true, Vt3.forEach(function(t4) {
          t4 !== `selectionchange` && (Bf.has(t4) || Hf(t4, false, e16), Hf(t4, true, e16));
        });
        var t3 = e16.nodeType === 9 ? e16 : e16.ownerDocument;
        t3 === null || t3[Uf] || (t3[Uf] = true, Hf(`selectionchange`, false, t3));
      }
    }
    function Gf(e16, t3, n2, r3) {
      switch (Ch(t3)) {
        case 2:
          var i2 = _h;
          break;
        case 8:
          i2 = vh;
          break;
        default:
          i2 = yh;
      }
      n2 = i2.bind(null, t3, n2, e16), i2 = void 0, !jn2 || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i2 = true), r3 ? i2 === void 0 ? e16.addEventListener(t3, n2, true) : e16.addEventListener(t3, n2, { capture: true, passive: i2 }) : i2 === void 0 ? e16.addEventListener(t3, n2, false) : e16.addEventListener(t3, n2, { passive: i2 });
    }
    function Kf(e16, t3, n2, r3, i2) {
      var a3 = r3;
      if (!(t3 & 1) && !(t3 & 2) && r3 !== null) a: for (; ; ) {
        if (r3 === null) return;
        var o2 = r3.tag;
        if (o2 === 3 || o2 === 4) {
          var s3 = r3.stateNode.containerInfo;
          if (s3 === i2) break;
          if (o2 === 4) for (o2 = r3.return; o2 !== null; ) {
            var c3 = o2.tag;
            if ((c3 === 3 || c3 === 4) && o2.stateNode.containerInfo === i2) return;
            o2 = o2.return;
          }
          for (; s3 !== null; ) {
            if (o2 = Ft3(s3), o2 === null) return;
            if (c3 = o2.tag, c3 === 5 || c3 === 6 || c3 === 26 || c3 === 27) {
              r3 = a3 = o2;
              continue a;
            }
            s3 = s3.parentNode;
          }
        }
        r3 = r3.return;
      }
      On2(function() {
        var r4 = a3, i3 = Cn2(n2), o3 = [];
        a: {
          var s4 = mi2.get(e16);
          if (s4 !== void 0) {
            var c4 = Vn2, u3 = e16;
            switch (e16) {
              case `keypress`:
                if (In2(n2) === 0) break a;
              case `keydown`:
              case `keyup`:
                c4 = ir2;
                break;
              case `focusin`:
                u3 = `focus`, c4 = Yn2;
                break;
              case `focusout`:
                u3 = `blur`, c4 = Yn2;
                break;
              case `beforeblur`:
              case `afterblur`:
                c4 = Yn2;
                break;
              case `click`:
                if (n2.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c4 = qn2;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c4 = Jn2;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c4 = sr2;
                break;
              case si2:
              case ci2:
              case li2:
                c4 = Xn2;
                break;
              case pi2:
                c4 = cr2;
                break;
              case `scroll`:
              case `scrollend`:
                c4 = Un2;
                break;
              case `wheel`:
                c4 = lr2;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c4 = Zn2;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c4 = ar2;
                break;
              case `submit`:
                c4 = or2;
                break;
              case `toggle`:
              case `beforetoggle`:
                c4 = ur2;
            }
            var d3 = (t3 & 4) != 0, f2 = !d3 && (e16 === `scroll` || e16 === `scrollend`), p3 = d3 ? s4 === null ? null : s4 + `Capture` : s4;
            d3 = [];
            for (var m2 = r4, h3; m2 !== null; ) {
              var g3 = m2;
              if (h3 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h3 === null || p3 === null || (g3 = kn2(m2, p3), g3 != null && d3.push(qf(m2, g3, h3))), f2) break;
              m2 = m2.return;
            }
            0 < d3.length && (s4 = new c4(s4, u3, null, n2, i3), o3.push({ event: s4, listeners: d3 }));
          }
        }
        if (!(t3 & 7)) {
          a: {
            if (c4 = e16 === `mouseover` || e16 === `pointerover`, s4 = e16 === `mouseout` || e16 === `pointerout`, c4 && n2 !== Sn2 && (u3 = n2.relatedTarget || n2.fromElement) && (Ft3(u3) || u3[Dt3])) break a;
            (s4 || c4) && (u3 = i3.window === i3 ? i3 : (c4 = i3.ownerDocument) ? c4.defaultView || c4.parentWindow : window, s4 ? (c4 = n2.relatedTarget || n2.toElement, s4 = r4, c4 = c4 ? Ft3(c4) : null, c4 !== null && (f2 = l2(c4), d3 = c4.tag, c4 !== f2 || d3 !== 5 && d3 !== 27 && d3 !== 6) && (c4 = null)) : (s4 = null, c4 = r4), s4 !== c4 && (d3 = qn2, g3 = `onMouseLeave`, p3 = `onMouseEnter`, m2 = `mouse`, (e16 === `pointerout` || e16 === `pointerover`) && (d3 = ar2, g3 = `onPointerLeave`, p3 = `onPointerEnter`, m2 = `pointer`), f2 = s4 == null ? u3 : Lt3(s4), h3 = c4 == null ? u3 : Lt3(c4), u3 = new d3(g3, m2 + `leave`, s4, n2, i3), u3.target = f2, u3.relatedTarget = h3, g3 = null, Ft3(i3) === r4 && (d3 = new d3(p3, m2 + `enter`, c4, n2, i3), d3.target = h3, d3.relatedTarget = f2, g3 = d3), f2 = g3, d3 = s4 && c4 ? E3(s4, c4, Yf) : null, s4 !== null && Xf(o3, u3, s4, d3, false), c4 !== null && f2 !== null && Xf(o3, f2, c4, d3, true)));
          }
          a: {
            if (s4 = r4 ? Lt3(r4) : window, c4 = s4.nodeName && s4.nodeName.toLowerCase(), c4 === `select` || c4 === `input` && s4.type === `file`) var _4 = Ar2;
            else if (wr2(s4)) if (jr2) _4 = Br2;
            else {
              _4 = Rr2;
              var v4 = Lr2;
            }
            else c4 = s4.nodeName, !c4 || c4.toLowerCase() !== `input` || s4.type !== `checkbox` && s4.type !== `radio` ? r4 && _n2(r4.elementType) && (_4 = Ar2) : _4 = zr2;
            if (_4 &&= _4(e16, r4)) {
              Tr2(o3, _4, n2, i3);
              break a;
            }
            v4 && v4(e16, s4, r4);
          }
          switch (v4 = r4 ? Lt3(r4) : window, e16) {
            case `focusin`:
              (wr2(v4) || v4.contentEditable === `true`) && (Zr2 = v4, Qr2 = r4, $r2 = null);
              break;
            case `focusout`:
              $r2 = Qr2 = Zr2 = null;
              break;
            case `mousedown`:
              ei2 = true;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ei2 = false, ti2(o3, n2, i3);
              break;
            case `selectionchange`:
              if (Xr2) break;
            case `keydown`:
            case `keyup`:
              ti2(o3, n2, i3);
          }
          var y4;
          if (fr2) b: {
            switch (e16) {
              case `compositionstart`:
                var b4 = `onCompositionStart`;
                break b;
              case `compositionend`:
                b4 = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                b4 = `onCompositionUpdate`;
                break b;
            }
            b4 = void 0;
          }
          else br2 ? vr2(e16, n2) && (b4 = `onCompositionEnd`) : e16 === `keydown` && n2.keyCode === 229 && (b4 = `onCompositionStart`);
          b4 && (hr2 && n2.locale !== `ko` && (br2 || b4 !== `onCompositionStart` ? b4 === `onCompositionEnd` && br2 && (y4 = Fn2()) : (Nn2 = i3, L3 = `value` in Nn2 ? Nn2.value : Nn2.textContent, br2 = true)), v4 = Jf(r4, b4), 0 < v4.length && (b4 = new Qn2(b4, e16, null, n2, i3), o3.push({ event: b4, listeners: v4 }), y4 ? b4.data = y4 : (y4 = yr2(n2), y4 !== null && (b4.data = y4)))), (y4 = mr2 ? xr2(e16, n2) : Sr2(e16, n2)) && (b4 = Jf(r4, `onBeforeInput`), 0 < b4.length && (v4 = new Qn2(`onBeforeInput`, `beforeinput`, null, n2, i3), o3.push({ event: v4, listeners: b4 }), v4.data = y4)), If(o3, e16, r4, n2, i3);
        }
        Vf(o3, t3);
      });
    }
    function qf(e16, t3, n2) {
      return { instance: e16, listener: t3, currentTarget: n2 };
    }
    function Jf(e16, t3) {
      for (var n2 = t3 + `Capture`, r3 = []; e16 !== null; ) {
        var i2 = e16, a3 = i2.stateNode;
        if (i2 = i2.tag, i2 !== 5 && i2 !== 26 && i2 !== 27 || a3 === null || (i2 = kn2(e16, n2), i2 != null && r3.unshift(qf(e16, i2, a3)), i2 = kn2(e16, t3), i2 != null && r3.push(qf(e16, i2, a3))), e16.tag === 3) return r3;
        e16 = e16.return;
      }
      return [];
    }
    function Yf(e16) {
      if (e16 === null) return null;
      do
        e16 = e16.return;
      while (e16 && e16.tag !== 5 && e16.tag !== 27);
      return e16 || null;
    }
    function Xf(e16, t3, n2, r3, i2) {
      for (var a3 = t3._reactName, o2 = []; n2 !== null && n2 !== r3; ) {
        var s3 = n2, c3 = s3.alternate, l3 = s3.stateNode;
        if (s3 = s3.tag, c3 !== null && c3 === r3) break;
        s3 !== 5 && s3 !== 26 && s3 !== 27 || l3 === null || (c3 = l3, i2 ? (l3 = kn2(n2, a3), l3 != null && o2.unshift(qf(n2, l3, c3))) : i2 || (l3 = kn2(n2, a3), l3 != null && o2.push(qf(n2, l3, c3)))), n2 = n2.return;
      }
      o2.length !== 0 && e16.push({ event: t3, listeners: o2 });
    }
    var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
    function $f(e16) {
      return (typeof e16 == `string` ? e16 : `` + e16).replace(Zf, `
`).replace(Qf, ``);
    }
    function ep(e16, t3) {
      return t3 = $f(t3), $f(e16) === t3;
    }
    function $2(e16, t3, n2, r3, i2, a3) {
      switch (n2) {
        case `children`:
          if (typeof r3 == `string`) t3 === `body` || t3 === `textarea` && r3 === `` || pn2(e16, r3);
          else if (typeof r3 == `number` || typeof r3 == `bigint`) t3 !== `body` && pn2(e16, `` + r3);
          else return;
          break;
        case `className`:
          Zt3(e16, `class`, r3);
          break;
        case `tabIndex`:
          Zt3(e16, `tabindex`, r3);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Zt3(e16, n2, r3);
          break;
        case `style`:
          gn2(e16, r3, a3);
          return;
        case `data`:
          if (t3 !== `object`) {
            Zt3(e16, `data`, r3);
            break;
          }
        case `src`:
        case `href`:
          if (r3 === `` && (t3 !== `a` || n2 !== `href`)) {
            e16.removeAttribute(n2);
            break;
          }
          if (r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || typeof r3 == `boolean`) {
            e16.removeAttribute(n2);
            break;
          }
          r3 = bn2(r3), e16.setAttribute(n2, r3);
          break;
        case `action`:
        case `formAction`:
          if (typeof r3 == `function`) {
            e16.setAttribute(n2, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
            break;
          } else typeof a3 == `function` && (n2 === `formAction` ? (t3 !== `input` && $2(e16, t3, `name`, i2.name, i2, null), $2(e16, t3, `formEncType`, i2.formEncType, i2, null), $2(e16, t3, `formMethod`, i2.formMethod, i2, null), $2(e16, t3, `formTarget`, i2.formTarget, i2, null)) : ($2(e16, t3, `encType`, i2.encType, i2, null), $2(e16, t3, `method`, i2.method, i2, null), $2(e16, t3, `target`, i2.target, i2, null)));
          if (r3 == null || typeof r3 == `symbol` || typeof r3 == `boolean`) {
            e16.removeAttribute(n2);
            break;
          }
          r3 = bn2(r3), e16.setAttribute(n2, r3);
          break;
        case `onClick`:
          r3 != null && (e16.onclick = xn2);
          return;
        case `onScroll`:
          r3 != null && Q2(`scroll`, e16);
          return;
        case `onScrollEnd`:
          r3 != null && Q2(`scrollend`, e16);
          return;
        case `dangerouslySetInnerHTML`:
          if (r3 != null) {
            if (typeof r3 != `object` || !(`__html` in r3)) throw Error(s2(61));
            if (n2 = r3.__html, n2 != null) {
              if (i2.children != null) throw Error(s2(60));
              a3?.__html !== n2 && (e16.innerHTML = n2);
            }
          }
          break;
        case `multiple`:
          e16.multiple = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
          break;
        case `muted`:
          e16.muted = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (r3 == null || typeof r3 == `function` || typeof r3 == `boolean` || typeof r3 == `symbol`) {
            e16.removeAttribute(`xlink:href`);
            break;
          }
          n2 = bn2(r3), e16.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n2);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e16.setAttribute(n2, r3) : e16.removeAttribute(n2);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r3 && typeof r3 != `function` && typeof r3 != `symbol` ? e16.setAttribute(n2, ``) : e16.removeAttribute(n2);
          break;
        case `capture`:
        case `download`:
          true === r3 ? e16.setAttribute(n2, ``) : false !== r3 && r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e16.setAttribute(n2, r3) : e16.removeAttribute(n2);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r3 != null && typeof r3 != `function` && typeof r3 != `symbol` && !isNaN(r3) && 1 <= r3 ? e16.setAttribute(n2, r3) : e16.removeAttribute(n2);
          break;
        case `rowSpan`:
        case `start`:
          r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || isNaN(r3) ? e16.removeAttribute(n2) : e16.setAttribute(n2, r3);
          break;
        case `popover`:
          Q2(`beforetoggle`, e16), Q2(`toggle`, e16), Xt3(e16, `popover`, r3);
          break;
        case `xlinkActuate`:
          Qt3(e16, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r3);
          break;
        case `xlinkArcrole`:
          Qt3(e16, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r3);
          break;
        case `xlinkRole`:
          Qt3(e16, `http://www.w3.org/1999/xlink`, `xlink:role`, r3);
          break;
        case `xlinkShow`:
          Qt3(e16, `http://www.w3.org/1999/xlink`, `xlink:show`, r3);
          break;
        case `xlinkTitle`:
          Qt3(e16, `http://www.w3.org/1999/xlink`, `xlink:title`, r3);
          break;
        case `xlinkType`:
          Qt3(e16, `http://www.w3.org/1999/xlink`, `xlink:type`, r3);
          break;
        case `xmlBase`:
          Qt3(e16, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r3);
          break;
        case `xmlLang`:
          Qt3(e16, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r3);
          break;
        case `xmlSpace`:
          Qt3(e16, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r3);
          break;
        case `is`:
          Xt3(e16, `is`, r3);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!(2 < n2.length) || n2[0] !== `o` && n2[0] !== `O` || n2[1] !== `n` && n2[1] !== `N`) n2 = vn2.get(n2) || n2, Xt3(e16, n2, r3);
          else return;
      }
      I3 = true;
    }
    function tp(e16, t3, n2, r3, i2, a3) {
      switch (n2) {
        case `style`:
          gn2(e16, r3, a3);
          return;
        case `dangerouslySetInnerHTML`:
          if (r3 != null) {
            if (typeof r3 != `object` || !(`__html` in r3)) throw Error(s2(61));
            if (n2 = r3.__html, n2 != null) {
              if (i2.children != null) throw Error(s2(60));
              a3?.__html !== n2 && (e16.innerHTML = n2);
            }
          }
          break;
        case `children`:
          if (typeof r3 == `string`) pn2(e16, r3);
          else if (typeof r3 == `number` || typeof r3 == `bigint`) pn2(e16, `` + r3);
          else return;
          break;
        case `onScroll`:
          r3 != null && Q2(`scroll`, e16);
          return;
        case `onScrollEnd`:
          r3 != null && Q2(`scrollend`, e16);
          return;
        case `onClick`:
          r3 != null && (e16.onclick = xn2);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!Ht3.hasOwnProperty(n2)) a: {
            if (n2[0] === `o` && n2[1] === `n` && (i2 = n2.endsWith(`Capture`), a3 = n2.slice(2, i2 ? n2.length - 7 : void 0), t3 = e16[Et3] || null, t3 = t3 == null ? null : t3[n2], typeof t3 == `function` && e16.removeEventListener(a3, t3, i2), typeof r3 == `function`)) {
              typeof t3 != `function` && t3 !== null && (n2 in e16 ? e16[n2] = null : e16.hasAttribute(n2) && e16.removeAttribute(n2)), e16.addEventListener(a3, r3, i2);
              break a;
            }
            I3 = true, n2 in e16 ? e16[n2] = r3 : true === r3 ? e16.setAttribute(n2, ``) : Xt3(e16, n2, r3);
          }
          return;
      }
      I3 = true;
    }
    function np(e16, t3, n2) {
      switch (t3) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          Q2(`error`, e16), Q2(`load`, e16);
          var r3 = false, i2 = false, a3;
          for (a3 in n2) if (n2.hasOwnProperty(a3)) {
            var o2 = n2[a3];
            if (o2 != null) switch (a3) {
              case `src`:
                r3 = true;
                break;
              case `srcSet`:
                i2 = true;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(s2(137, t3));
              default:
                $2(e16, t3, a3, o2, n2, null);
            }
          }
          i2 && $2(e16, t3, `srcSet`, n2.srcSet, n2, null), r3 && $2(e16, t3, `src`, n2.src, n2, null);
          return;
        case `input`:
          Q2(`invalid`, e16);
          var c3 = a3 = o2 = i2 = null, l3 = null, u3 = null;
          for (r3 in n2) if (n2.hasOwnProperty(r3)) {
            var d3 = n2[r3];
            if (d3 != null) switch (r3) {
              case `name`:
                i2 = d3;
                break;
              case `type`:
                o2 = d3;
                break;
              case `checked`:
                l3 = d3;
                break;
              case `defaultChecked`:
                u3 = d3;
                break;
              case `value`:
                a3 = d3;
                break;
              case `defaultValue`:
                c3 = d3;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (d3 != null) throw Error(s2(137, t3));
                break;
              default:
                $2(e16, t3, r3, d3, n2, null);
            }
          }
          cn2(e16, a3, c3, l3, u3, o2, i2, false);
          return;
        case `select`:
          for (i2 in Q2(`invalid`, e16), r3 = o2 = a3 = null, n2) if (n2.hasOwnProperty(i2) && (c3 = n2[i2], c3 != null)) switch (i2) {
            case `value`:
              a3 = c3;
              break;
            case `defaultValue`:
              o2 = c3;
              break;
            case `multiple`:
              r3 = c3;
            default:
              $2(e16, t3, i2, c3, n2, null);
          }
          t3 = a3, n2 = o2, e16.multiple = !!r3, t3 == null ? n2 != null && un2(e16, !!r3, n2, true) : un2(e16, !!r3, t3, false);
          return;
        case `textarea`:
          for (o2 in Q2(`invalid`, e16), a3 = i2 = r3 = null, n2) if (n2.hasOwnProperty(o2) && (c3 = n2[o2], c3 != null)) switch (o2) {
            case `value`:
              r3 = c3;
              break;
            case `defaultValue`:
              i2 = c3;
              break;
            case `children`:
              a3 = c3;
              break;
            case `dangerouslySetInnerHTML`:
              if (c3 != null) throw Error(s2(91));
              break;
            default:
              $2(e16, t3, o2, c3, n2, null);
          }
          fn2(e16, r3, i2, a3);
          return;
        case `option`:
          for (l3 in n2) if (n2.hasOwnProperty(l3) && (r3 = n2[l3], r3 != null)) switch (l3) {
            case `selected`:
              e16.selected = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
              break;
            default:
              $2(e16, t3, l3, r3, n2, null);
          }
          return;
        case `dialog`:
          Q2(`beforetoggle`, e16), Q2(`toggle`, e16), Q2(`cancel`, e16), Q2(`close`, e16);
          break;
        case `iframe`:
        case `object`:
          Q2(`load`, e16);
          break;
        case `video`:
        case `audio`:
          for (r3 = 0; r3 < zf.length; r3++) Q2(zf[r3], e16);
          break;
        case `image`:
          Q2(`error`, e16), Q2(`load`, e16);
          break;
        case `details`:
          Q2(`toggle`, e16);
          break;
        case `embed`:
        case `source`:
        case `link`:
          Q2(`error`, e16), Q2(`load`, e16);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u3 in n2) if (n2.hasOwnProperty(u3) && (r3 = n2[u3], r3 != null)) switch (u3) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(s2(137, t3));
            default:
              $2(e16, t3, u3, r3, n2, null);
          }
          return;
        default:
          if (_n2(t3)) {
            for (d3 in n2) n2.hasOwnProperty(d3) && (r3 = n2[d3], r3 !== void 0 && tp(e16, t3, d3, r3, n2, void 0));
            return;
          }
      }
      for (c3 in n2) n2.hasOwnProperty(c3) && (r3 = n2[c3], r3 != null && $2(e16, t3, c3, r3, n2, null));
    }
    var rp = {};
    function ip(e16, t3, n2, r3) {
      switch (t3) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i2 = null, a3 = null, o2 = null, c3 = null, l3 = null, u3 = null, d3 = null;
          for (m2 in n2) {
            var f2 = n2[m2];
            if (n2.hasOwnProperty(m2) && f2 != null) switch (m2) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l3 = f2;
              default:
                r3.hasOwnProperty(m2) || $2(e16, t3, m2, null, r3, f2);
            }
          }
          for (var p3 in r3) {
            var m2 = r3[p3];
            if (f2 = n2[p3], r3.hasOwnProperty(p3) && (m2 != null || f2 != null)) switch (p3) {
              case `type`:
                m2 !== f2 && (I3 = true), a3 = m2;
                break;
              case `name`:
                m2 !== f2 && (I3 = true), i2 = m2;
                break;
              case `checked`:
                m2 !== f2 && (I3 = true), u3 = m2;
                break;
              case `defaultChecked`:
                m2 !== f2 && (I3 = true), d3 = m2;
                break;
              case `value`:
                m2 !== f2 && (I3 = true), o2 = m2;
                break;
              case `defaultValue`:
                m2 !== f2 && (I3 = true), c3 = m2;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m2 != null) throw Error(s2(137, t3));
                break;
              default:
                m2 !== f2 && $2(e16, t3, p3, m2, r3, f2);
            }
          }
          sn2(e16, o2, c3, l3, u3, d3, a3, i2);
          return;
        case `select`:
          for (a3 in m2 = o2 = c3 = p3 = null, n2) if (l3 = n2[a3], n2.hasOwnProperty(a3) && l3 != null) switch (a3) {
            case `value`:
              break;
            case `multiple`:
              m2 = l3;
            default:
              r3.hasOwnProperty(a3) || $2(e16, t3, a3, null, r3, l3);
          }
          for (i2 in r3) if (a3 = r3[i2], l3 = n2[i2], r3.hasOwnProperty(i2) && (a3 != null || l3 != null)) switch (i2) {
            case `value`:
              a3 !== l3 && (I3 = true), p3 = a3;
              break;
            case `defaultValue`:
              a3 !== l3 && (I3 = true), c3 = a3;
              break;
            case `multiple`:
              a3 !== l3 && (I3 = true), o2 = a3;
            default:
              a3 !== l3 && $2(e16, t3, i2, a3, r3, l3);
          }
          t3 = c3, n2 = o2, r3 = m2, p3 == null ? !!r3 != !!n2 && (t3 == null ? un2(e16, !!n2, n2 ? [] : ``, false) : un2(e16, !!n2, t3, true)) : un2(e16, !!n2, p3, false);
          return;
        case `textarea`:
          for (c3 in m2 = p3 = null, n2) if (i2 = n2[c3], n2.hasOwnProperty(c3) && i2 != null && !r3.hasOwnProperty(c3)) switch (c3) {
            case `value`:
              break;
            case `children`:
              break;
            default:
              $2(e16, t3, c3, null, r3, i2);
          }
          for (o2 in r3) if (i2 = r3[o2], a3 = n2[o2], r3.hasOwnProperty(o2) && (i2 != null || a3 != null)) switch (o2) {
            case `value`:
              i2 !== a3 && (I3 = true), p3 = i2;
              break;
            case `defaultValue`:
              i2 !== a3 && (I3 = true), m2 = i2;
              break;
            case `children`:
              break;
            case `dangerouslySetInnerHTML`:
              if (i2 != null) throw Error(s2(91));
              break;
            default:
              i2 !== a3 && $2(e16, t3, o2, i2, r3, a3);
          }
          dn2(e16, p3, m2);
          return;
        case `option`:
          for (var h3 in n2) if (p3 = n2[h3], n2.hasOwnProperty(h3) && p3 != null && !r3.hasOwnProperty(h3)) switch (h3) {
            case `selected`:
              e16.selected = false;
              break;
            default:
              $2(e16, t3, h3, null, r3, p3);
          }
          for (l3 in r3) if (p3 = r3[l3], m2 = n2[l3], r3.hasOwnProperty(l3) && p3 !== m2 && (p3 != null || m2 != null)) switch (l3) {
            case `selected`:
              p3 !== m2 && (I3 = true), e16.selected = p3 && typeof p3 != `function` && typeof p3 != `symbol`;
              break;
            default:
              $2(e16, t3, l3, p3, r3, m2);
          }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g3 in n2) p3 = n2[g3], n2.hasOwnProperty(g3) && p3 != null && !r3.hasOwnProperty(g3) && $2(e16, t3, g3, null, r3, p3);
          for (u3 in r3) if (p3 = r3[u3], m2 = n2[u3], r3.hasOwnProperty(u3) && p3 !== m2 && (p3 != null || m2 != null)) switch (u3) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (p3 != null) throw Error(s2(137, t3));
              break;
            default:
              $2(e16, t3, u3, p3, r3, m2);
          }
          return;
        default:
          if (_n2(t3)) {
            for (var _4 in n2) p3 = n2[_4], n2.hasOwnProperty(_4) && p3 !== void 0 && !r3.hasOwnProperty(_4) && tp(e16, t3, _4, void 0, r3, p3);
            for (d3 in r3) p3 = r3[d3], m2 = n2[d3], !r3.hasOwnProperty(d3) || p3 === m2 || p3 === void 0 && m2 === void 0 || tp(e16, t3, d3, p3, r3, m2);
            return;
          }
      }
      for (var v4 in n2) p3 = n2[v4], n2.hasOwnProperty(v4) && p3 != null && !r3.hasOwnProperty(v4) && $2(e16, t3, v4, null, r3, p3);
      for (f2 in r3) p3 = r3[f2], m2 = n2[f2], !r3.hasOwnProperty(f2) || p3 === m2 || p3 == null && m2 == null || $2(e16, t3, f2, p3, r3, m2);
    }
    function ap(e16) {
      switch (e16) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return true;
        default:
          return false;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (var e16 = 0, t3 = 0, n2 = performance.getEntriesByType(`resource`), r3 = 0; r3 < n2.length; r3++) {
          var i2 = n2[r3], a3 = i2.transferSize, o2 = i2.initiatorType, s3 = i2.duration;
          if (a3 && s3 && ap(o2)) {
            for (o2 = 0, s3 = i2.responseEnd, r3 += 1; r3 < n2.length; r3++) {
              var c3 = n2[r3], l3 = c3.startTime;
              if (l3 > s3) break;
              var u3 = c3.transferSize, d3 = c3.initiatorType;
              u3 && ap(d3) && (c3 = c3.responseEnd, o2 += u3 * (c3 < s3 ? 1 : (s3 - l3) / (c3 - l3)));
            }
            if (--r3, t3 += 8 * (a3 + o2) / (i2.duration / 1e3), e16++, 10 < e16) break;
          }
        }
        if (0 < e16) return t3 / e16 / 1e6;
      }
      return navigator.connection && (e16 = navigator.connection.downlink, typeof e16 == `number`) ? e16 : 5;
    }
    var sp = null, cp = null;
    function lp(e16) {
      return e16.nodeType === 9 ? e16 : e16.ownerDocument;
    }
    function up(e16) {
      switch (e16) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e16, t3) {
      if (e16 === 0) switch (t3) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
      return e16 === 1 && t3 === `foreignObject` ? 0 : e16;
    }
    function fp(e16, t3, n2, r3) {
      return n2 = lp(n2).createElement(e16), n2[Tt3] = r3, n2[Et3] = t3, np(n2, e16, t3), zt3(n2), n2;
    }
    function pp(e16, t3) {
      return e16 === `textarea` || e16 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
    }
    var mp = null;
    function hp() {
      var e16 = window.event;
      return e16 && e16.type === `popstate` ? e16 === mp ? false : (mp = e16, true) : (mp = null, false);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : void 0, _p = typeof clearTimeout == `function` ? clearTimeout : void 0, vp = typeof Promise == `function` ? Promise : void 0, yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp, bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === void 0 ? gp : function(e16) {
      return vp.resolve(null).then(e16).catch(xp);
    };
    function xp(e16) {
      setTimeout(function() {
        throw e16;
      });
    }
    function Sp(e16) {
      return e16 === `head`;
    }
    function Cp(e16, t3) {
      var n2 = t3, r3 = 0;
      do {
        var i2 = n2.nextSibling;
        if (e16.removeChild(n2), i2 && i2.nodeType === 8) if (n2 = i2.data, n2 === `/$` || n2 === `/&`) {
          if (r3 === 0) {
            e16.removeChild(i2), Hh(t3);
            return;
          }
          r3--;
        } else if (n2 === `$` || n2 === `$?` || n2 === `$~` || n2 === `$!` || n2 === `&`) r3++;
        else if (n2 === `html`) _m(e16.ownerDocument.documentElement);
        else if (n2 === `head`) {
          n2 = e16.ownerDocument.head, _m(n2);
          for (var a3 = n2.firstChild; a3; ) {
            var o2 = a3.nextSibling, s3 = a3.nodeName;
            a3[Mt3] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a3.rel.toLowerCase() === `stylesheet` || n2.removeChild(a3), a3 = o2;
          }
        } else n2 === `body` && _m(e16.ownerDocument.body);
        n2 = i2;
      } while (n2);
      Hh(t3);
    }
    function wp(e16, t3) {
      var n2 = e16;
      e16 = 0;
      do {
        var r3 = n2.nextSibling;
        if (n2.nodeType === 1 ? t3 ? (n2._stashedDisplay = n2.style.display, n2.style.display = `none`) : (n2.style.display = n2._stashedDisplay || ``, n2.getAttribute(`style`) === `` && n2.removeAttribute(`style`)) : n2.nodeType === 3 && (t3 ? (n2._stashedText = n2.nodeValue, n2.nodeValue = ``) : n2.nodeValue = n2._stashedText || ``), r3 && r3.nodeType === 8) if (n2 = r3.data, n2 === `/$`) {
          if (e16 === 0) break;
          e16--;
        } else n2 !== `$` && n2 !== `$?` && n2 !== `$~` && n2 !== `$!` || e16++;
        n2 = r3;
      } while (n2);
    }
    function Tp(e16, t3, n2) {
      if (t3 = CSS.escape(t3) === t3 ? t3 : `r-` + btoa(t3).replace(/=/g, ``), e16.style.viewTransitionName = t3, n2 != null && (e16.style.viewTransitionClass = n2), n2 = getComputedStyle(e16), n2.display === `inline`) {
        if (t3 = e16.getClientRects(), t3.length === 1) var r3 = 1;
        else for (var i2 = r3 = 0; i2 < t3.length; i2++) {
          var a3 = t3[i2];
          0 < a3.width && 0 < a3.height && r3++;
        }
        r3 === 1 && (e16 = e16.style, e16.display = t3.length === 1 ? `inline-block` : `block`, e16.marginTop = `-` + n2.paddingTop, e16.marginBottom = `-` + n2.paddingBottom);
      }
    }
    function Ep(e16, t3) {
      e16 = e16.style, t3 = t3.style;
      var n2 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionName`) ? t3.viewTransitionName : t3.hasOwnProperty(`view-transition-name`) ? t3[`view-transition-name`] : null;
      e16.viewTransitionName = n2 == null || typeof n2 == `boolean` ? `` : (`` + n2).trim(), n2 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionClass`) ? t3.viewTransitionClass : t3.hasOwnProperty(`view-transition-class`) ? t3[`view-transition-class`] : null, e16.viewTransitionClass = n2 == null || typeof n2 == `boolean` ? `` : (`` + n2).trim(), e16.display === `inline-block` && (t3 == null ? e16.display = e16.margin = `` : (n2 = t3.display, e16.display = n2 == null || typeof n2 == `boolean` ? `` : n2, n2 = t3.margin, n2 == null ? (n2 = t3.hasOwnProperty(`marginTop`) ? t3.marginTop : t3[`margin-top`], e16.marginTop = n2 == null || typeof n2 == `boolean` ? `` : n2, t3 = t3.hasOwnProperty(`marginBottom`) ? t3.marginBottom : t3[`margin-bottom`], e16.marginBottom = t3 == null || typeof t3 == `boolean` ? `` : t3) : e16.margin = n2));
    }
    function Dp(e16, t3, n2) {
      return n2 = n2.ownerDocument.defaultView, { rect: e16, abs: t3.position === `absolute` || t3.position === `fixed`, clip: t3.clipPath !== `none` || t3.overflow !== `visible` || t3.filter !== `none` || t3.mask !== `none` || t3.mask !== `none` || t3.borderRadius !== `0px`, view: 0 <= e16.bottom && 0 <= e16.right && e16.top <= n2.innerHeight && e16.left <= n2.innerWidth };
    }
    function Op(e16) {
      return Dp(e16.getBoundingClientRect(), getComputedStyle(e16), e16);
    }
    function kp(e16) {
      var t3 = e16.getBoundingClientRect();
      t3 = new DOMRect(t3.x + 2e4, t3.y + 2e4, t3.width, t3.height);
      var n2 = getComputedStyle(e16);
      return Dp(t3, n2, e16);
    }
    function Ap(e16) {
      return e16.documentElement.clientHeight;
    }
    function jp(e16) {
      this.addEventListener(`load`, e16), this.addEventListener(`error`, e16);
    }
    function Mp(e16, t3, n2, r3, i2, a3, o2, s3, c3) {
      var l3 = t3.nodeType === 9 ? t3 : t3.ownerDocument;
      try {
        var u3 = l3.startViewTransition({ update: function() {
          var t4 = l3.defaultView, n3 = t4.navigation && t4.navigation.transition, o3 = l3.fonts.status;
          r3();
          var s4 = [];
          if (o3 === `loaded` && (Ap(l3), l3.fonts.status === `loading` && s4.push(l3.fonts.ready)), o3 = s4.length, e16 !== null) for (var c4 = e16.suspenseyImages, u4 = 0, d4 = 0; d4 < c4.length; d4++) {
            var f2 = c4[d4];
            if (!f2.complete) {
              var p3 = f2.getBoundingClientRect();
              if (0 < p3.bottom && 0 < p3.right && p3.top < t4.innerHeight && p3.left < t4.innerWidth) {
                if (u4 += Xm(f2), u4 > $m) {
                  s4.length = o3;
                  break;
                }
                f2 = new Promise(jp.bind(f2)), s4.push(f2);
              }
            }
          }
          if (0 < s4.length) return t4 = Promise.race([Promise.all(s4), new Promise(function(e17) {
            return setTimeout(e17, 500);
          })]).then(i2, i2), (n3 ? Promise.allSettled([n3.finished, t4]) : t4).then(a3, a3);
          if (i2(), n3) return n3.finished.then(a3, a3);
          a3();
        }, types: n2 });
        l3.__reactViewTransition = u3;
        var d3 = [];
        return u3.ready.then(function() {
          for (var e17 = l3.documentElement.getAnimations({ subtree: true }), t4 = 0; t4 < e17.length; t4++) {
            var n3 = e17[t4], r4 = n3.effect, i3 = r4.pseudoElement;
            if (i3 != null && i3.startsWith(`::view-transition`)) {
              d3.push(n3), n3 = r4.getKeyframes();
              for (var a4 = i3 = void 0, s4 = true, c4 = 0; c4 < n3.length; c4++) {
                var u4 = n3[c4], f2 = u4.width;
                if (i3 === void 0) i3 = f2;
                else if (i3 !== f2) {
                  s4 = false;
                  break;
                }
                if (f2 = u4.height, a4 === void 0) a4 = f2;
                else if (a4 !== f2) {
                  s4 = false;
                  break;
                }
                delete u4.width, delete u4.height, u4.transform === `none` && delete u4.transform;
              }
              s4 && i3 !== void 0 && a4 !== void 0 && (r4.setKeyframes(n3), s4 = getComputedStyle(r4.target, r4.pseudoElement), s4.width !== i3 || s4.height !== a4) && (s4 = n3[0], s4.width = i3, s4.height = a4, s4 = n3[n3.length - 1], s4.width = i3, s4.height = a4, r4.setKeyframes(n3));
            }
          }
          o2();
        }, function(e17) {
          l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null);
          try {
            if (typeof e17 == `object` && e17) switch (e17.name) {
              case `InvalidStateError`:
                (e17.message === `View transition was skipped because document visibility state is hidden.` || e17.message === `Skipping view transition because document visibility state has become hidden.` || e17.message === `Skipping view transition because viewport size changed.` || e17.message === `Transition was aborted because of invalid state`) && (e17 = null);
            }
            e17 !== null && c3(e17);
          } finally {
            r3(), i2(), o2();
          }
        }), u3.finished.finally(function() {
          for (var e17 = 0; e17 < d3.length; e17++) d3[e17].cancel();
          l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null), s3();
        }), u3;
      } catch {
        return r3(), i2(), o2(), null;
      }
    }
    function Np(e16, t3) {
      this._scope = document.documentElement, this._selector = `::view-transition-` + e16 + `(` + t3 + `)`;
    }
    Np.prototype.animate = function(e16, t3) {
      return t3 = typeof t3 == `number` ? { duration: t3 } : D2({}, t3), t3.pseudoElement = this._selector, this._scope.animate(e16, t3);
    }, Np.prototype.getAnimations = function() {
      for (var e16 = this._scope, t3 = this._selector, n2 = e16.getAnimations({ subtree: true }), r3 = [], i2 = 0; i2 < n2.length; i2++) {
        var a3 = n2[i2].effect;
        a3 !== null && a3.target === e16 && a3.pseudoElement === t3 && r3.push(n2[i2]);
      }
      return r3;
    }, Np.prototype.getComputedStyle = function() {
      return getComputedStyle(this._scope, this._selector);
    };
    function Pp(e16) {
      return { name: e16, group: new Np(`group`, e16), imagePair: new Np(`image-pair`, e16), old: new Np(`old`, e16), new: new Np(`new`, e16) };
    }
    function Fp(e16) {
      this._fragmentFiber = e16, this._observers = this._eventListeners = null;
    }
    Fp.prototype.addEventListener = function(e16, t3, n2) {
      var r3 = null, i2 = null;
      if (!(n2 != null && typeof n2 != `boolean` && (r3 = n2.signal || null, r3 !== null && r3.aborted))) {
        this._eventListeners === null && (this._eventListeners = []);
        var a3 = this._eventListeners;
        if (Bp(a3, e16, t3, n2) === -1) {
          var o2 = this, s3 = t3;
          n2 != null && typeof n2 != `boolean` && true === n2.once && (s3 = function(r4) {
            o2.removeEventListener(e16, t3, n2), typeof t3 == `function` ? t3.call(this, r4) : t3.handleEvent(r4);
          }), r3 !== null && (i2 = o2.removeEventListener.bind(o2, e16, t3, n2), r3.addEventListener(`abort`, i2, { once: true }), i2 = r3.removeEventListener.bind(r3, `abort`, i2)), r3 = Rp(n2), a3.push({ type: e16, listener: t3, optionsOrUseCapture: n2, attachedListener: s3, cleanup: i2 }), h2(this._fragmentFiber.child, false, Ip, e16, s3, r3);
        }
        this._eventListeners = a3;
      }
    };
    function Ip(e16, t3, n2, r3) {
      return b3(e16).addEventListener(t3, n2, r3), false;
    }
    Fp.prototype.removeEventListener = function(e16, t3, n2) {
      var r3 = this._eventListeners;
      if (r3 !== null && (t3 = Bp(r3, e16, t3, n2), t3 !== -1)) {
        var i2 = r3[t3];
        n2 = i2.attachedListener;
        var a3 = i2.cleanup;
        i2 = Rp(i2.optionsOrUseCapture), h2(this._fragmentFiber.child, false, Lp, e16, n2, i2), r3.splice(t3, 1), a3 !== null && a3();
      }
    };
    function Lp(e16, t3, n2, r3) {
      return b3(e16).removeEventListener(t3, n2, r3), false;
    }
    function Rp(e16) {
      return e16 != null && typeof e16 != `boolean` && (true === e16.once || e16.signal instanceof AbortSignal) ? { capture: e16.capture, passive: e16.passive } : e16;
    }
    function zp(e16) {
      return e16 == null ? `c=0` : typeof e16 == `boolean` ? `c=` + (e16 ? `1` : `0`) : `c=` + (e16.capture ? `1` : `0`);
    }
    function Bp(e16, t3, n2, r3) {
      if (e16.length === 0) return -1;
      r3 = zp(r3);
      for (var i2 = 0; i2 < e16.length; i2++) {
        var a3 = e16[i2];
        if (a3.type === t3 && a3.listener === n2 && zp(a3.optionsOrUseCapture) === r3) return i2;
      }
      return -1;
    }
    Fp.prototype.dispatchEvent = function(e16) {
      var t3 = g2(this._fragmentFiber);
      if (t3 === null) return true;
      t3 = b3(t3);
      var n2 = this._eventListeners;
      if (n2 !== null && 0 < n2.length || !e16.bubbles) {
        var r3 = t3.nodeType === 9 ? t3.createComment(``) : document.createTextNode(``);
        if (n2) for (var i2 = 0; i2 < n2.length; i2++) {
          var a3 = n2[i2];
          r3.addEventListener(a3.type, a3.attachedListener, Rp(a3.optionsOrUseCapture));
        }
        if (t3.appendChild(r3), e16 = r3.dispatchEvent(e16), n2) for (i2 = 0; i2 < n2.length; i2++) a3 = n2[i2], r3.removeEventListener(a3.type, a3.attachedListener, Rp(a3.optionsOrUseCapture));
        return t3.removeChild(r3), e16;
      }
      return t3.dispatchEvent(e16);
    }, Fp.prototype.focus = function(e16) {
      h2(this._fragmentFiber.child, true, Vp, e16, void 0, void 0);
    };
    function Vp(e16, t3) {
      return e16.tag === 6 ? false : (e16 = b3(e16), pm(e16, t3));
    }
    Fp.prototype.focusLast = function(e16) {
      var t3 = [];
      h2(this._fragmentFiber.child, true, Hp, t3, void 0, void 0);
      for (var n2 = t3.length - 1; 0 <= n2 && !Vp(t3[n2], e16); n2--) ;
    };
    function Hp(e16, t3) {
      return t3.push(e16), false;
    }
    Fp.prototype.blur = function() {
      var e16 = g2(this._fragmentFiber);
      e16 !== null && (e16 = b3(e16), e16 = lp(e16).activeElement, e16 !== null && h2(this._fragmentFiber.child, false, Up, e16, void 0, void 0));
    };
    function Up(e16, t3) {
      return e16.tag === 6 ? false : (e16 = b3(e16), e16 === t3 || e16.contains(t3) ? (t3.blur(), true) : false);
    }
    Fp.prototype.observeUsing = function(e16) {
      this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e16), h2(this._fragmentFiber.child, false, Wp, e16, void 0, void 0);
    };
    function Wp(e16, t3) {
      return e16.tag === 6 ? false : (e16 = b3(e16), t3.observe(e16), false);
    }
    Fp.prototype.unobserveUsing = function(e16) {
      var t3 = this._observers;
      if (t3 !== null && t3.has(e16)) {
        t3.delete(e16), h2(this._fragmentFiber.child, false, Gp, e16, void 0, void 0);
        for (var n2 = t3 = 0; n2 < Kp.length; n2++) {
          var r3 = Kp[n2];
          r3.fragmentInstance === this && r3.observer === e16 ? e16.unobserve(r3.instance) : Kp[t3++] = r3;
        }
        Kp.length = t3;
      }
    };
    function Gp(e16, t3) {
      return e16.tag === 6 ? false : (e16 = b3(e16), t3.unobserve(e16), false);
    }
    var Kp = [], qp = false;
    function Jp(e16, t3, n2) {
      Kp.push({ fragmentInstance: e16, observer: t3, instance: n2 }), qp || (qp = true, mm(function() {
        qp = false;
        var e17 = Kp;
        Kp = [];
        for (var t4 = 0; t4 < e17.length; t4++) {
          var n3 = e17[t4];
          n3.observer.unobserve(n3.instance);
        }
      }));
    }
    Fp.prototype.getClientRects = function() {
      var e16 = [];
      return h2(this._fragmentFiber.child, false, Yp, e16, void 0, void 0), e16;
    };
    function Yp(e16, t3) {
      if (e16.tag === 6) {
        e16 = e16.stateNode;
        var n2 = e16.ownerDocument.createRange();
        n2.selectNodeContents(e16), t3.push.apply(t3, n2.getClientRects());
      } else e16 = b3(e16), t3.push.apply(t3, e16.getClientRects());
      return false;
    }
    Fp.prototype.getRootNode = function(e16) {
      var t3 = g2(this._fragmentFiber);
      return t3 === null ? this : b3(t3).getRootNode(e16);
    }, Fp.prototype.compareDocumentPosition = function(e16) {
      var t3 = g2(this._fragmentFiber);
      if (t3 === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var n2 = [];
      h2(this._fragmentFiber.child, false, Hp, n2, void 0, void 0);
      var r3 = b3(t3);
      if (n2.length === 0) {
        if (n2 = r3, _3(this._fragmentFiber)) {
          a: {
            for (t3 = this._fragmentFiber.return; t3 !== null; ) {
              if (t3.tag === 4) {
                t3 = t3.stateNode.containerInfo;
                break a;
              }
              if (t3.tag === 3 || t3.tag === 5 || t3.tag === 27) break;
              t3 = t3.return;
            }
            t3 = null;
          }
          t3 != null && (n2 = t3);
        }
        t3 = this._fragmentFiber;
        var i2 = r3 = n2.compareDocumentPosition(e16);
        return n2 === e16 ? i2 = Node.DOCUMENT_POSITION_CONTAINS : r3 & Node.DOCUMENT_POSITION_CONTAINED_BY && (n2 = v3(t3)[1], n2 === null ? i2 = Node.DOCUMENT_POSITION_PRECEDING : (e16 = b3(n2).compareDocumentPosition(e16), i2 = e16 === 0 || e16 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i2 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
      }
      t3 = b3(n2[0]), i2 = b3(n2[n2.length - 1]);
      var a3 = _3(this._fragmentFiber) ? t3.parentElement : r3;
      if (a3 == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      r3 = a3.compareDocumentPosition(t3) & Node.DOCUMENT_POSITION_CONTAINED_BY, a3 = a3.compareDocumentPosition(i2) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      var o2 = t3.compareDocumentPosition(e16), s3 = i2.compareDocumentPosition(e16), c3 = o2 & Node.DOCUMENT_POSITION_CONTAINED_BY || s3 & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return s3 = r3 && a3 && o2 & Node.DOCUMENT_POSITION_FOLLOWING && s3 & Node.DOCUMENT_POSITION_PRECEDING, t3 = r3 && t3 === e16 || a3 && i2 === e16 || c3 || s3 ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r3 && t3 === e16 || !a3 && i2 === e16 ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o2, t3 & Node.DOCUMENT_POSITION_DISCONNECTED || t3 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t3, this._fragmentFiber, n2[0], n2[n2.length - 1], e16) ? t3 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    };
    function Xp(e16, t3, n2, r3, i2) {
      var a3 = Ft3(i2);
      if (e16 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if (n2 = !!a3) a: {
          for (; a3 !== null; ) {
            if (a3.tag === 7 && (a3 === t3 || a3.alternate === t3)) {
              n2 = true;
              break a;
            }
            a3 = a3.return;
          }
          n2 = false;
        }
        return n2;
      }
      if (e16 & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a3 === null) return a3 = i2.ownerDocument, i2 === a3 || i2 === a3.documentElement || i2 === a3.body;
        a: {
          for (a3 = t3, t3 = g2(t3); a3 !== null; ) {
            if (!(a3.tag !== 5 && a3.tag !== 3 && a3.tag !== 27 || a3 !== t3 && a3.alternate !== t3)) {
              a3 = true;
              break a;
            }
            a3 = a3.return;
          }
          a3 = false;
        }
        return a3;
      }
      return e16 & Node.DOCUMENT_POSITION_PRECEDING ? ((t3 = !!a3) && !(t3 = a3 === n2) && (t3 = E3(n2, a3, T2), t3 === null ? t3 = false : (h2(t3, true, C2, a3, n2), a3 = x2, x2 = null, t3 = a3 !== null)), t3) : e16 & Node.DOCUMENT_POSITION_FOLLOWING ? ((t3 = !!a3) && !(t3 = a3 === r3) && (t3 = E3(r3, a3, T2), t3 === null ? t3 = false : (h2(t3, true, w2, a3, r3), a3 = x2, S2 = x2 = null, t3 = a3 !== null)), t3) : false;
    }
    function Zp(e16, t3) {
      var n2 = e16.ownerDocument.createRange();
      n2.selectNodeContents(e16), e16 = n2.getBoundingClientRect(), window.scrollTo(window.scrollX + e16.left, t3 ? window.scrollY + e16.top : window.scrollY + e16.bottom - window.innerHeight);
    }
    Fp.prototype.scrollIntoView = function(e16) {
      if (typeof e16 == `object`) throw Error(s2(566));
      var t3 = [];
      h2(this._fragmentFiber.child, false, Hp, t3, void 0, void 0);
      var n2 = false !== e16;
      if (t3.length === 0) {
        var r3 = v3(this._fragmentFiber);
        if (r3 = n2 ? r3[1] || r3[0] || g2(this._fragmentFiber) : r3[0] || r3[1], r3 === null) return;
        if (r3.tag === 6) {
          e16 = b3(r3), Zp(e16, n2);
          return;
        }
        if (r3 = b3(r3), r3.nodeType !== 9) {
          if (r3.nodeType === 11) {
            n2 = `host` in r3 ? r3.host : null, n2 !== null && n2.scrollIntoView(e16);
            return;
          }
          r3.scrollIntoView(e16);
        }
      }
      for (r3 = n2 ? t3.length - 1 : 0; r3 !== (n2 ? -1 : t3.length); ) {
        var i2 = t3[r3];
        i2.tag === 6 ? (i2 = b3(i2), Zp(i2, n2)) : b3(i2).scrollIntoView(e16), r3 += n2 ? -1 : 1;
      }
    };
    function Qp(e16, t3) {
      return e16 = b3(e16), $p(e16, t3), false;
    }
    function $p(e16, t3) {
      e16.reactFragments ??= /* @__PURE__ */ new Set(), e16.reactFragments.add(t3);
    }
    function em(e16, t3) {
      var n2 = t3._eventListeners;
      if (n2 !== null) for (var r3 = 0; r3 < n2.length; r3++) {
        var i2 = n2[r3];
        e16.addEventListener(i2.type, i2.attachedListener, Rp(i2.optionsOrUseCapture));
      }
      e16.nodeType !== 3 && (n2 = t3._observers, n2 !== null && n2.forEach(function(n3) {
        for (var r4 = 0, i3 = 0; i3 < Kp.length; i3++) {
          var a3 = Kp[i3];
          (a3.fragmentInstance !== t3 || a3.observer !== n3 || a3.instance !== e16) && (Kp[r4++] = a3);
        }
        Kp.length = r4, n3.observe(e16);
      }), $p(e16, t3));
    }
    function tm(e16, t3) {
      var n2 = t3._eventListeners;
      if (n2 !== null) for (var r3 = 0; r3 < n2.length; r3++) {
        var i2 = n2[r3];
        e16.removeEventListener(i2.type, i2.attachedListener, Rp(i2.optionsOrUseCapture));
      }
      e16.nodeType !== 3 && (n2 = t3._observers, n2 !== null && n2.forEach(function(n3) {
        typeof n3.rootMargin == `string` ? Jp(t3, n3, e16) : n3.unobserve(e16);
      }), e16.reactFragments != null && e16.reactFragments.delete(t3));
    }
    function nm(e16) {
      var t3 = e16.firstChild;
      for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
        var n2 = t3;
        switch (t3 = t3.nextSibling, n2.nodeName) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            nm(n2), Pt3(n2);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n2.rel.toLowerCase() === `stylesheet`) continue;
        }
        e16.removeChild(n2);
      }
    }
    function rm(e16, t3, n2, r3) {
      for (; e16.nodeType === 1; ) {
        var i2 = n2;
        if (e16.nodeName.toLowerCase() !== t3.toLowerCase()) {
          if (!r3 && (e16.nodeName !== `INPUT` || e16.type !== `hidden`)) break;
        } else if (!r3) if (t3 === `input` && e16.type === `hidden`) {
          var a3 = i2.name == null ? null : `` + i2.name;
          if (i2.type === `hidden` && e16.getAttribute(`name`) === a3) return e16;
        } else return e16;
        else if (!e16[Mt3]) switch (t3) {
          case `meta`:
            if (!e16.hasAttribute(`itemprop`)) break;
            return e16;
          case `link`:
            if (a3 = e16.getAttribute(`rel`), a3 === `stylesheet` && e16.hasAttribute(`data-precedence`) || a3 !== i2.rel || e16.getAttribute(`href`) !== (i2.href == null || i2.href === `` ? null : i2.href) || e16.getAttribute(`crossorigin`) !== (i2.crossOrigin == null ? null : i2.crossOrigin) || e16.getAttribute(`title`) !== (i2.title == null ? null : i2.title)) break;
            return e16;
          case `style`:
            if (e16.hasAttribute(`data-precedence`)) break;
            return e16;
          case `script`:
            if (a3 = e16.getAttribute(`src`), (a3 !== (i2.src == null ? null : i2.src) || e16.getAttribute(`type`) !== (i2.type == null ? null : i2.type) || e16.getAttribute(`crossorigin`) !== (i2.crossOrigin == null ? null : i2.crossOrigin)) && a3 && e16.hasAttribute(`async`) && !e16.hasAttribute(`itemprop`)) break;
            return e16;
          default:
            return e16;
        }
        if (e16 = lm(e16.nextSibling), e16 === null) break;
      }
      return null;
    }
    function im(e16, t3, n2) {
      if (t3 === ``) return null;
      for (; e16.nodeType !== 3; ) if ((e16.nodeType !== 1 || e16.nodeName !== `INPUT` || e16.type !== `hidden`) && !n2 || (e16 = lm(e16.nextSibling), e16 === null)) return null;
      return e16;
    }
    function am(e16, t3) {
      for (; e16.nodeType !== 8; ) if ((e16.nodeType !== 1 || e16.nodeName !== `INPUT` || e16.type !== `hidden`) && !t3 || (e16 = lm(e16.nextSibling), e16 === null)) return null;
      return e16;
    }
    function om(e16) {
      return e16.data === `$?` || e16.data === `$~`;
    }
    function sm(e16) {
      return e16.data === `$!` || e16.data === `$?` && e16.ownerDocument.readyState !== `loading`;
    }
    function cm(e16, t3) {
      var n2 = e16.ownerDocument;
      if (e16.data === `$~`) e16._reactRetry = t3;
      else if (e16.data !== `$?` || n2.readyState !== `loading`) t3();
      else {
        var r3 = function() {
          t3(), n2.removeEventListener(`DOMContentLoaded`, r3);
        };
        n2.addEventListener(`DOMContentLoaded`, r3), e16._reactRetry = r3;
      }
    }
    function lm(e16) {
      for (; e16 != null; e16 = e16.nextSibling) {
        var t3 = e16.nodeType;
        if (t3 === 1 || t3 === 3) break;
        if (t3 === 8) {
          if (t3 = e16.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`) break;
          if (t3 === `/$` || t3 === `/&`) return null;
        }
      }
      return e16;
    }
    var um = null;
    function dm(e16) {
      e16 = e16.nextSibling;
      for (var t3 = 0; e16; ) {
        if (e16.nodeType === 8) {
          var n2 = e16.data;
          if (n2 === `/$` || n2 === `/&`) {
            if (t3 === 0) return lm(e16.nextSibling);
            t3--;
          } else n2 !== `$` && n2 !== `$!` && n2 !== `$?` && n2 !== `$~` && n2 !== `&` || t3++;
        }
        e16 = e16.nextSibling;
      }
      return null;
    }
    function fm(e16) {
      e16 = e16.previousSibling;
      for (var t3 = 0; e16; ) {
        if (e16.nodeType === 8) {
          var n2 = e16.data;
          if (n2 === `$` || n2 === `$!` || n2 === `$?` || n2 === `$~` || n2 === `&`) {
            if (t3 === 0) return e16;
            t3--;
          } else n2 !== `/$` && n2 !== `/&` || t3++;
        }
        e16 = e16.previousSibling;
      }
      return null;
    }
    function pm(e16, t3) {
      function n2() {
        r3 = true;
      }
      if (e16.ownerDocument.activeElement === e16) return true;
      var r3 = false;
      try {
        e16.ownerDocument.addEventListener(`focus`, n2, true), (e16.focus || HTMLElement.prototype.focus).call(e16, t3);
      } finally {
        e16.ownerDocument.removeEventListener(`focus`, n2, true);
      }
      return r3;
    }
    function mm(e16) {
      yp(function() {
        yp(function(t3) {
          return e16(t3);
        });
      });
    }
    function hm(e16, t3, n2) {
      switch (t3 = lp(n2), e16) {
        case `html`:
          if (e16 = t3.documentElement, !e16) throw Error(s2(452));
          return e16;
        case `head`:
          if (e16 = t3.head, !e16) throw Error(s2(453));
          return e16;
        case `body`:
          if (e16 = t3.body, !e16) throw Error(s2(454));
          return e16;
        default:
          throw Error(s2(451));
      }
    }
    function gm(e16, t3, n2) {
      for (var r3 in n2) {
        var i2 = n2[r3];
        n2.hasOwnProperty(r3) && i2 != null && $2(e16, t3, r3, null, rp, i2);
      }
      n2.dangerouslySetInnerHTML != null && (e16.textContent = ``), e16.onclick === xn2 && (e16.onclick = null), Pt3(e16);
    }
    function _m(e16) {
      for (var t3 = e16.attributes; t3.length; ) e16.removeAttributeNode(t3[0]);
      Pt3(e16);
    }
    var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
    function bm(e16) {
      if (typeof e16.getRootNode == `function`) {
        var t3 = e16.getRootNode();
        if (t3.nodeType === 9 || t3.nodeType === 11) return t3;
      }
      return e16.nodeType === 9 ? e16 : e16.ownerDocument;
    }
    var xm = j3.d;
    j3.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
    function Sm() {
      var e16 = xm.f(), t3 = zd();
      return e16 || t3;
    }
    function Cm(e16) {
      var t3 = It3(e16);
      t3 !== null && t3.tag === 5 && t3.type === `form` ? nc(t3) : xm.r(e16);
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e16, t3, n2) {
      var r3 = wm;
      if (r3 && typeof t3 == `string` && t3) {
        var i2 = on2(t3);
        i2 = `link[rel="` + e16 + `"][href="` + i2 + `"]`, typeof n2 == `string` && (i2 += `[crossorigin="` + n2 + `"]`), ym.has(i2) || (ym.add(i2), e16 = { rel: e16, crossOrigin: n2, href: t3 }, r3.querySelector(i2) === null && (t3 = r3.createElement(`link`), np(t3, `link`, e16), zt3(t3), r3.head.appendChild(t3)));
      }
    }
    function Em(e16) {
      xm.D(e16), Tm(`dns-prefetch`, e16, null);
    }
    function Dm(e16, t3) {
      xm.C(e16, t3), Tm(`preconnect`, e16, t3);
    }
    function Om(e16, t3, n2) {
      xm.L(e16, t3, n2);
      var r3 = wm;
      if (r3 && e16 && t3) {
        var i2 = `link[rel="preload"][as="` + on2(t3) + `"]`;
        t3 === `image` && n2 && n2.imageSrcSet ? (i2 += `[imagesrcset="` + on2(n2.imageSrcSet) + `"]`, typeof n2.imageSizes == `string` && (i2 += `[imagesizes="` + on2(n2.imageSizes) + `"]`)) : i2 += `[href="` + on2(e16) + `"]`;
        var a3 = i2;
        switch (t3) {
          case `style`:
            a3 = Pm(e16);
            break;
          case `script`:
            a3 = Rm(e16);
        }
        if (!(vm.has(a3) || (e16 = D2({ rel: `preload`, href: t3 === `image` && n2 && n2.imageSrcSet ? void 0 : e16, as: t3 }, n2), vm.set(a3, e16), r3.querySelector(i2) !== null || t3 === `style` && r3.querySelector(Fm(a3)) || t3 === `script` && r3.querySelector(zm(a3))))) {
          var o2 = r3.createElement(`link`);
          np(o2, `link`, e16), t3 === `style` && (o2[Nt3] = true, o2.onload = o2.onerror = function() {
            Bt3(o2);
          }), zt3(o2), r3.head.appendChild(o2);
        }
      }
    }
    function km(e16, t3) {
      xm.m(e16, t3);
      var n2 = wm;
      if (n2 && e16) {
        var r3 = t3 && typeof t3.as == `string` ? t3.as : `script`, i2 = `link[rel="modulepreload"][as="` + on2(r3) + `"][href="` + on2(e16) + `"]`, a3 = i2;
        switch (r3) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a3 = Rm(e16);
        }
        if (!vm.has(a3) && (e16 = D2({ rel: `modulepreload`, href: e16 }, t3), vm.set(a3, e16), n2.querySelector(i2) === null)) {
          switch (r3) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n2.querySelector(zm(a3))) return;
          }
          r3 = n2.createElement(`link`), np(r3, `link`, e16), zt3(r3), n2.head.appendChild(r3);
        }
      }
    }
    function Am(e16, t3, n2) {
      xm.S(e16, t3, n2);
      var r3 = wm;
      if (r3 && e16) {
        var i2 = Rt3(r3).hoistableStyles, a3 = Pm(e16);
        t3 ||= `default`;
        var o2 = i2.get(a3);
        if (!o2) {
          var s3 = { loading: 0, preload: null };
          if (o2 = r3.querySelector(Fm(a3))) s3.loading = 5;
          else {
            e16 = D2({ rel: `stylesheet`, href: e16, "data-precedence": t3 }, n2), (n2 = vm.get(a3)) && Hm(e16, n2);
            var c3 = o2 = r3.createElement(`link`);
            zt3(c3), np(c3, `link`, e16), c3._p = new Promise(function(e17, t4) {
              c3.onload = e17, c3.onerror = t4;
            }), c3.addEventListener(`load`, function() {
              s3.loading |= 1;
            }), c3.addEventListener(`error`, function() {
              s3.loading |= 2;
            }), s3.loading |= 4, Vm(o2, t3, r3);
          }
          o2 = { type: `stylesheet`, instance: o2, count: 1, state: s3 }, i2.set(a3, o2);
        }
      }
    }
    function jm(e16, t3) {
      xm.X(e16, t3);
      var n2 = wm;
      if (n2 && e16) {
        var r3 = Rt3(n2).hoistableScripts, i2 = Rm(e16), a3 = r3.get(i2);
        a3 || (a3 = n2.querySelector(zm(i2)), a3 || (e16 = D2({ src: e16, async: true }, t3), (t3 = vm.get(i2)) && Um(e16, t3), a3 = n2.createElement(`script`), zt3(a3), np(a3, `link`, e16), n2.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i2, a3));
      }
    }
    function Mm(e16, t3) {
      xm.M(e16, t3);
      var n2 = wm;
      if (n2 && e16) {
        var r3 = Rt3(n2).hoistableScripts, i2 = Rm(e16), a3 = r3.get(i2);
        a3 || (a3 = n2.querySelector(zm(i2)), a3 || (e16 = D2({ src: e16, async: true, type: `module` }, t3), (t3 = vm.get(i2)) && Um(e16, t3), a3 = n2.createElement(`script`), zt3(a3), np(a3, `link`, e16), n2.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i2, a3));
      }
    }
    function Nm(e16, t3, n2, r3) {
      var i2 = (i2 = P3.current) ? bm(i2) : null;
      if (!i2) throw Error(s2(446));
      switch (e16) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n2.precedence == `string` && typeof n2.href == `string` ? (n2 = Pm(n2.href), t3 = Rt3(i2).hoistableStyles, r3 = t3.get(n2), r3 || (r3 = { type: `style`, instance: null, count: 0, state: null }, t3.set(n2, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (n2.rel === `stylesheet` && typeof n2.href == `string` && typeof n2.precedence == `string`) {
            e16 = Pm(n2.href);
            var a3 = Rt3(i2).hoistableStyles, o2 = a3.get(e16);
            if (o2 || (i2 = i2.ownerDocument || i2, o2 = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, a3.set(e16, o2), (a3 = i2.querySelector(Fm(e16))) ? a3._p || (o2.instance = a3, o2.state.loading = 5) : (a3 = vm.get(e16), a3 || (a3 = { rel: `preload`, as: `style`, href: n2.href, crossOrigin: n2.crossOrigin, integrity: n2.integrity, media: n2.media, hrefLang: n2.hrefLang, referrerPolicy: n2.referrerPolicy }, vm.set(e16, a3)), Lm(i2, e16, a3, o2.state))), t3 && r3 === null) throw Error(s2(528, ``));
            return o2;
          }
          if (t3 && r3 !== null) throw Error(s2(529, ``));
          return null;
        case `script`:
          return t3 = n2.async, n2 = n2.src, typeof n2 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (n2 = Rm(n2), t3 = Rt3(i2).hoistableScripts, r3 = t3.get(n2), r3 || (r3 = { type: `script`, instance: null, count: 0, state: null }, t3.set(n2, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
        default:
          throw Error(s2(444, e16));
      }
    }
    function Pm(e16) {
      return `href="` + on2(e16) + `"`;
    }
    function Fm(e16) {
      return `link[rel="stylesheet"][` + e16 + `]`;
    }
    function Im(e16) {
      return D2({}, e16, { "data-precedence": e16.precedence, precedence: null });
    }
    function Lm(e16, t3, n2, r3) {
      if (t3 = e16.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`)) {
        if (true !== t3[Nt3]) {
          r3.loading = 1;
          return;
        }
      } else t3 = e16.createElement(`link`), t3[Nt3] = true, t3.onload = t3.onerror = Bt3.bind(null, t3), np(t3, `link`, n2), zt3(t3), e16.head.appendChild(t3);
      r3.preload = t3, t3.addEventListener(`load`, function() {
        return r3.loading |= 1;
      }), t3.addEventListener(`error`, function() {
        return r3.loading |= 2;
      });
    }
    function Rm(e16) {
      return `[src="` + on2(e16) + `"]`;
    }
    function zm(e16) {
      return `script[async]` + e16;
    }
    function Bm(e16, t3, n2) {
      if (t3.count++, t3.instance === null) switch (t3.type) {
        case `style`:
          var r3 = e16.querySelector(`style[data-href~="` + on2(n2.href) + `"]`);
          if (r3) return t3.instance = r3, zt3(r3), r3;
          var i2 = D2({}, n2, { "data-href": n2.href, "data-precedence": n2.precedence, href: null, precedence: null });
          return r3 = (e16.ownerDocument || e16).createElement(`style`), zt3(r3), np(r3, `style`, i2), Vm(r3, n2.precedence, e16), t3.instance = r3;
        case `stylesheet`:
          i2 = Pm(n2.href);
          var a3 = e16.querySelector(Fm(i2));
          if (a3) return t3.state.loading |= 4, t3.instance = a3, zt3(a3), a3;
          r3 = Im(n2), (i2 = vm.get(i2)) && Hm(r3, i2), a3 = (e16.ownerDocument || e16).createElement(`link`), zt3(a3);
          var o2 = a3;
          return o2._p = new Promise(function(e17, t4) {
            o2.onload = e17, o2.onerror = t4;
          }), np(a3, `link`, r3), t3.state.loading |= 4, Vm(a3, n2.precedence, e16), t3.instance = a3;
        case `script`:
          return a3 = Rm(n2.src), (i2 = e16.querySelector(zm(a3))) ? (t3.instance = i2, zt3(i2), i2) : (r3 = n2, (i2 = vm.get(a3)) && (r3 = D2({}, n2), Um(r3, i2)), e16 = e16.ownerDocument || e16, i2 = e16.createElement(`script`), zt3(i2), np(i2, `link`, r3), e16.head.appendChild(i2), t3.instance = i2);
        case `void`:
          return null;
        default:
          throw Error(s2(443, t3.type));
      }
      else t3.type === `stylesheet` && !(t3.state.loading & 4) && (r3 = t3.instance, t3.state.loading |= 4, Vm(r3, n2.precedence, e16));
      return t3.instance;
    }
    function Vm(e16, t3, n2) {
      for (var r3 = n2.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i2 = r3.length ? r3[r3.length - 1] : null, a3 = i2, o2 = 0; o2 < r3.length; o2++) {
        var s3 = r3[o2];
        if (s3.dataset.precedence === t3) a3 = s3;
        else if (a3 !== i2) break;
      }
      a3 ? a3.parentNode.insertBefore(e16, a3.nextSibling) : (t3 = n2.nodeType === 9 ? n2.head : n2, t3.insertBefore(e16, t3.firstChild));
    }
    function Hm(e16, t3) {
      e16.crossOrigin ??= t3.crossOrigin, e16.referrerPolicy ??= t3.referrerPolicy, e16.title ??= t3.title;
    }
    function Um(e16, t3) {
      e16.crossOrigin ??= t3.crossOrigin, e16.referrerPolicy ??= t3.referrerPolicy, e16.integrity ??= t3.integrity;
    }
    var Wm = null;
    function Gm(e16, t3, n2) {
      if (Wm === null) {
        var r3 = /* @__PURE__ */ new Map(), i2 = Wm = /* @__PURE__ */ new Map();
        i2.set(n2, r3);
      } else i2 = Wm, r3 = i2.get(n2), r3 || (r3 = /* @__PURE__ */ new Map(), i2.set(n2, r3));
      if (r3.has(e16)) return r3;
      for (r3.set(e16, null), n2 = n2.getElementsByTagName(e16), i2 = 0; i2 < n2.length; i2++) {
        var a3 = n2[i2];
        if (!(a3[Mt3] || a3[Tt3] || e16 === `link` && a3.getAttribute(`rel`) === `stylesheet`) && a3.namespaceURI !== `http://www.w3.org/2000/svg`) {
          var o2 = a3.getAttribute(t3) || ``;
          o2 = e16 + o2;
          var s3 = r3.get(o2);
          s3 ? s3.push(a3) : r3.set(o2, [a3]);
        }
      }
      return r3;
    }
    function Km(e16, t3, n2) {
      e16 = e16.ownerDocument || e16, e16.head.insertBefore(n2, t3 === `title` ? e16.querySelector(`head > title`) : null);
    }
    function qm(e16, t3, n2) {
      if (n2 === 1 || t3.itemProp != null) return false;
      switch (e16) {
        case `meta`:
        case `title`:
          return true;
        case `style`:
          if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``) break;
          return true;
        case `link`:
          if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError) break;
          switch (t3.rel) {
            case `stylesheet`:
              return e16 = t3.disabled, typeof t3.precedence == `string` && e16 == null;
            default:
              return true;
          }
        case `script`:
          if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`) return true;
      }
      return false;
    }
    function Jm(e16, t3) {
      return e16 === `img` && t3.src != null && t3.src !== `` && t3.onLoad == null && t3.loading !== `lazy`;
    }
    function Ym(e16) {
      return !(e16.type === `stylesheet` && !(e16.state.loading & 3));
    }
    function Xm(e16) {
      return (e16.width || 100) * (e16.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
    }
    function Zm(e16, t3) {
      typeof t3.decode == `function` && (e16.imgCount++, t3.complete || (e16.imgBytes += Xm(t3), e16.suspenseyImages.push(t3)), e16 = rh.bind(e16), t3.decode().then(e16, e16));
    }
    function Qm(e16, t3, n2, r3) {
      if (n2.type === `stylesheet` && (typeof r3.media != `string` || false !== matchMedia(r3.media).matches) && !(n2.state.loading & 4)) {
        if (n2.instance === null) {
          var i2 = Pm(r3.href), a3 = t3.querySelector(Fm(i2));
          if (a3) {
            t3 = a3._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e16.count++, e16 = nh.bind(e16), t3.then(e16, e16)), n2.state.loading |= 4, n2.instance = a3, zt3(a3);
            return;
          }
          a3 = t3.ownerDocument || t3, r3 = Im(r3), (i2 = vm.get(i2)) && Hm(r3, i2), a3 = a3.createElement(`link`), zt3(a3);
          var o2 = a3;
          o2._p = new Promise(function(e17, t4) {
            o2.onload = e17, o2.onerror = t4;
          }), np(a3, `link`, r3), n2.instance = a3;
        }
        e16.stylesheets === null && (e16.stylesheets = /* @__PURE__ */ new Map()), e16.stylesheets.set(n2, t3), (t3 = n2.state.preload) && !(n2.state.loading & 3) && (e16.count++, n2 = nh.bind(e16), t3.addEventListener(`load`, n2), t3.addEventListener(`error`, n2));
      }
    }
    var $m = 0;
    function eh(e16, t3) {
      return e16.stylesheets && e16.count === 0 && ah(e16, e16.stylesheets), 0 < e16.count || 0 < e16.imgCount ? function(n2) {
        var r3 = setTimeout(function() {
          if (e16.stylesheets && ah(e16, e16.stylesheets), e16.unsuspend) {
            var t4 = e16.unsuspend;
            e16.unsuspend = null, t4();
          }
        }, 6e4 + t3);
        0 < e16.imgBytes && $m === 0 && ($m = 62500 * op());
        var i2 = setTimeout(function() {
          if (e16.waitingForImages = false, e16.count === 0 && (e16.stylesheets && ah(e16, e16.stylesheets), e16.unsuspend)) {
            var t4 = e16.unsuspend;
            e16.unsuspend = null, t4();
          }
        }, (e16.imgBytes > $m ? 50 : 800) + t3);
        return e16.unsuspend = n2, function() {
          e16.unsuspend = null, clearTimeout(r3), clearTimeout(i2);
        };
      } : null;
    }
    function th(e16) {
      if (e16.count === 0 && (e16.imgCount === 0 || !e16.waitingForImages)) {
        if (e16.stylesheets) ah(e16, e16.stylesheets);
        else if (e16.unsuspend) {
          var t3 = e16.unsuspend;
          e16.unsuspend = null, t3();
        }
      }
    }
    function nh() {
      this.count--, th(this);
    }
    function rh() {
      this.imgCount--, th(this);
    }
    var ih = null;
    function ah(e16, t3) {
      e16.stylesheets = null, e16.unsuspend !== null && (e16.count++, ih = /* @__PURE__ */ new Map(), t3.forEach(oh, e16), ih = null, nh.call(e16));
    }
    function oh(e16, t3) {
      if (!(t3.state.loading & 4)) {
        var n2 = ih.get(e16);
        if (n2) var r3 = n2.get(null);
        else {
          n2 = /* @__PURE__ */ new Map(), ih.set(e16, n2);
          for (var i2 = e16.querySelectorAll(`link[data-precedence],style[data-precedence]`), a3 = 0; a3 < i2.length; a3++) {
            var o2 = i2[a3];
            (o2.nodeName === `LINK` || o2.getAttribute(`media`) !== `not all`) && (n2.set(o2.dataset.precedence, o2), r3 = o2);
          }
          r3 && n2.set(null, r3);
        }
        i2 = t3.instance, o2 = i2.getAttribute(`data-precedence`), a3 = n2.get(o2) || r3, a3 === r3 && n2.set(null, i2), n2.set(o2, i2), this.count++, r3 = nh.bind(this), i2.addEventListener(`load`, r3), i2.addEventListener(`error`, r3), a3 ? a3.parentNode.insertBefore(i2, a3.nextSibling) : (e16 = e16.nodeType === 9 ? e16.head : e16, e16.insertBefore(i2, e16.firstChild)), t3.state.loading |= 4;
      }
    }
    var sh = { $$typeof: ae3, Provider: null, Consumer: null, _currentValue: xe3, _currentValue2: xe3, _threadCount: 0 };
    function ch(e16, t3, n2, r3, i2, a3, o2, s3, c3) {
      this.tag = 1, this.containerInfo = e16, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mt3(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mt3(0), this.hiddenUpdates = mt3(null), this.identifierPrefix = r3, this.onUncaughtError = i2, this.onCaughtError = a3, this.onRecoverableError = o2, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function lh(e16, t3, n2, r3, i2, a3, o2, s3, c3, l3, u3, d3) {
      return e16 = new ch(e16, t3, n2, o2, c3, l3, u3, d3, s3), t3 = 1, true === a3 && (t3 |= 24), a3 = Mi2(3, null, null, t3), e16.current = a3, a3.stateNode = e16, t3 = ja(), t3.refCount++, e16.pooledCache = t3, t3.refCount++, a3.memoizedState = { element: r3, isDehydrated: n2, cache: t3 }, mo(a3), e16;
    }
    function uh(e16) {
      return e16 ? (e16 = Ai2, e16) : Ai2;
    }
    function dh(e16, t3, n2, r3, i2, a3) {
      i2 = uh(i2), r3.context === null ? r3.context = i2 : r3.pendingContext = i2, r3 = go(t3), r3.payload = { element: n2 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n2 = _o(e16, r3, t3), n2 !== null && (Pd(n2, e16, t3), vo(n2, e16, t3));
    }
    function fh(e16, t3) {
      if (e16 = e16.memoizedState, e16 !== null && e16.dehydrated !== null) {
        var n2 = e16.retryLane;
        e16.retryLane = n2 !== 0 && n2 < t3 ? n2 : t3;
      }
    }
    function ph(e16, t3) {
      fh(e16, t3), (e16 = e16.alternate) && fh(e16, t3);
    }
    function mh(e16) {
      if (e16.tag === 13 || e16.tag === 31) {
        var t3 = Di2(e16, 67108864);
        t3 !== null && Pd(t3, e16, 67108864), ph(e16, 67108864);
      }
    }
    function hh(e16) {
      if (e16.tag === 13 || e16.tag === 31) {
        var t3 = jd();
        t3 = bt3(t3);
        var n2 = Di2(e16, t3);
        n2 !== null && Pd(n2, e16, t3), ph(e16, t3);
      }
    }
    var gh = true;
    function _h(e16, t3, n2, r3) {
      var i2 = A3.T;
      A3.T = null;
      var a3 = j3.p;
      try {
        j3.p = 2, yh(e16, t3, n2, r3);
      } finally {
        j3.p = a3, A3.T = i2;
      }
    }
    function vh(e16, t3, n2, r3) {
      var i2 = A3.T;
      A3.T = null;
      var a3 = j3.p;
      try {
        j3.p = 8, yh(e16, t3, n2, r3);
      } finally {
        j3.p = a3, A3.T = i2;
      }
    }
    function yh(e16, t3, n2, r3) {
      if (gh) {
        var i2 = bh(r3);
        if (i2 === null) Kf(e16, t3, r3, xh, n2), Mh(e16, r3);
        else if (Ph(i2, e16, t3, n2, r3)) r3.stopPropagation();
        else if (Mh(e16, r3), t3 & 4 && -1 < jh.indexOf(e16)) {
          for (; i2 !== null; ) {
            var a3 = It3(i2);
            if (a3 !== null) switch (a3.tag) {
              case 3:
                if (a3 = a3.stateNode, a3.current.memoizedState.isDehydrated) {
                  var o2 = ct3(a3.pendingLanes);
                  if (o2 !== 0) {
                    var s3 = a3;
                    for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o2; ) {
                      var c3 = 1 << 31 - tt3(o2);
                      s3.entanglements[1] |= c3, o2 &= ~c3;
                    }
                    Ef(a3), !(K2 & 6) && (gd = Ue3() + 500, Df(0, false));
                  }
                }
                break;
              case 31:
              case 13:
                s3 = Di2(a3, 2), s3 !== null && Pd(s3, a3, 2), zd(), ph(a3, 2);
            }
            if (a3 = bh(r3), a3 === null && Kf(e16, t3, r3, xh, n2), a3 === i2) break;
            i2 = a3;
          }
          i2 !== null && r3.stopPropagation();
        } else Kf(e16, t3, r3, null, n2);
      }
    }
    function bh(e16) {
      return e16 = Cn2(e16), Sh(e16);
    }
    var xh = null;
    function Sh(e16) {
      if (xh = null, e16 = Ft3(e16), e16 !== null) {
        var t3 = l2(e16);
        if (t3 === null) e16 = null;
        else {
          var n2 = t3.tag;
          if (n2 === 13) {
            if (e16 = u2(t3), e16 !== null) return e16;
            e16 = null;
          } else if (n2 === 31) {
            if (e16 = d2(t3), e16 !== null) return e16;
            e16 = null;
          } else if (n2 === 3) {
            if (t3.stateNode.current.memoizedState.isDehydrated) return t3.tag === 3 ? t3.stateNode.containerInfo : null;
            e16 = null;
          } else t3 !== e16 && (e16 = null);
        }
      }
      return xh = e16, null;
    }
    function Ch(e16) {
      switch (e16) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (We3()) {
            case Ge3:
              return 2;
            case Ke3:
              return 8;
            case qe3:
            case Je3:
              return 32;
            case Ye3:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = false, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
    function Mh(e16, t3) {
      switch (e16) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t3.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t3.pointerId);
      }
    }
    function Nh(e16, t3, n2, r3, i2, a3) {
      return e16 === null || e16.nativeEvent !== a3 ? (e16 = { blockedOn: t3, domEventName: n2, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i2] }, t3 !== null && (t3 = It3(t3), t3 !== null && mh(t3)), e16) : (e16.eventSystemFlags |= r3, t3 = e16.targetContainers, i2 !== null && t3.indexOf(i2) === -1 && t3.push(i2), e16);
    }
    function Ph(e16, t3, n2, r3, i2) {
      switch (t3) {
        case `focusin`:
          return Th = Nh(Th, e16, t3, n2, r3, i2), true;
        case `dragenter`:
          return Eh = Nh(Eh, e16, t3, n2, r3, i2), true;
        case `mouseover`:
          return Dh = Nh(Dh, e16, t3, n2, r3, i2), true;
        case `pointerover`:
          var a3 = i2.pointerId;
          return Oh.set(a3, Nh(Oh.get(a3) || null, e16, t3, n2, r3, i2)), true;
        case `gotpointercapture`:
          return a3 = i2.pointerId, kh.set(a3, Nh(kh.get(a3) || null, e16, t3, n2, r3, i2)), true;
      }
      return false;
    }
    function Fh(e16) {
      var t3 = Ft3(e16.target);
      if (t3 !== null) {
        var n2 = l2(t3);
        if (n2 !== null) {
          if (t3 = n2.tag, t3 === 13) {
            if (t3 = u2(n2), t3 !== null) {
              e16.blockedOn = t3, Ct3(e16.priority, function() {
                hh(n2);
              });
              return;
            }
          } else if (t3 === 31) {
            if (t3 = d2(n2), t3 !== null) {
              e16.blockedOn = t3, Ct3(e16.priority, function() {
                hh(n2);
              });
              return;
            }
          } else if (t3 === 3 && n2.stateNode.current.memoizedState.isDehydrated) {
            e16.blockedOn = n2.tag === 3 ? n2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e16.blockedOn = null;
    }
    function Ih(e16) {
      if (e16.blockedOn !== null) return false;
      for (var t3 = e16.targetContainers; 0 < t3.length; ) {
        var n2 = bh(e16.nativeEvent);
        if (n2 === null) {
          n2 = e16.nativeEvent;
          var r3 = new n2.constructor(n2.type, n2);
          Sn2 = r3, n2.target.dispatchEvent(r3), Sn2 = null;
        } else return t3 = It3(n2), t3 !== null && mh(t3), e16.blockedOn = n2, false;
        t3.shift();
      }
      return true;
    }
    function Lh(e16, t3, n2) {
      Ih(e16) && n2.delete(t3);
    }
    function Rh() {
      wh = false, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
    }
    function zh(e16, n2) {
      e16.blockedOn === n2 && (e16.blockedOn = null, wh || (wh = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e16) {
      Bh !== e16 && (Bh = e16, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
        Bh === e16 && (Bh = null);
        for (var t3 = 0; t3 < e16.length; t3 += 3) {
          var n2 = e16[t3], r3 = e16[t3 + 1], i2 = e16[t3 + 2];
          if (typeof r3 != `function`) {
            if (Sh(r3 || n2) === null) continue;
            break;
          }
          var a3 = It3(n2);
          a3 !== null && (e16.splice(t3, 3), t3 -= 3, ec(a3, { pending: true, data: i2, method: n2.method, action: r3 }, r3, i2));
        }
      }));
    }
    function Hh(e16) {
      function t3(t4) {
        return zh(t4, e16);
      }
      Th !== null && zh(Th, e16), Eh !== null && zh(Eh, e16), Dh !== null && zh(Dh, e16), Oh.forEach(t3), kh.forEach(t3);
      for (var n2 = 0; n2 < Ah.length; n2++) {
        var r3 = Ah[n2];
        r3.blockedOn === e16 && (r3.blockedOn = null);
      }
      for (; 0 < Ah.length && (n2 = Ah[0], n2.blockedOn === null); ) Fh(n2), n2.blockedOn === null && Ah.shift();
      if (n2 = (e16.ownerDocument || e16).$$reactFormReplay, n2 != null) for (r3 = 0; r3 < n2.length; r3 += 3) {
        var i2 = n2[r3], a3 = n2[r3 + 1], o2 = i2[Et3] || null;
        if (typeof a3 == `function`) o2 || Vh(n2);
        else if (o2) {
          var s3 = null;
          if (a3 && a3.hasAttribute(`formAction`)) {
            if (i2 = a3, o2 = a3[Et3] || null) s3 = o2.formAction;
            else if (Sh(i2) !== null) continue;
          } else s3 = o2.action;
          typeof s3 == `function` ? n2[r3 + 1] = s3 : (n2.splice(r3, 3), r3 -= 3), Vh(n2);
        }
      }
    }
    function Uh() {
      function e16(e17) {
        e17.canIntercept && e17.info === `react-transition` && e17.intercept({ handler: function() {
          return new Promise(function(e18) {
            return i2 = e18;
          });
        }, focusReset: `manual`, scroll: `manual` });
      }
      function t3() {
        i2 !== null && (i2(), i2 = null), r3 || setTimeout(n2, 20);
      }
      function n2() {
        if (!r3 && !navigation.transition) {
          var e17 = navigation.currentEntry;
          e17 && e17.url != null && navigation.navigate(e17.url, { state: e17.getState(), info: `react-transition`, history: `replace` });
        }
      }
      if (typeof navigation == `object`) {
        var r3 = false, i2 = null;
        return navigation.addEventListener(`navigate`, e16), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n2, 100), function() {
          r3 = true, navigation.removeEventListener(`navigate`, e16), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i2 !== null && (i2(), i2 = null);
        };
      }
    }
    function Wh(e16) {
      this._internalRoot = e16;
    }
    Gh.prototype.render = Wh.prototype.render = function(e16) {
      var t3 = this._internalRoot;
      if (t3 === null) throw Error(s2(409));
      var n2 = t3.current;
      dh(n2, jd(), e16, t3, null, null);
    }, Gh.prototype.unmount = Wh.prototype.unmount = function() {
      var e16 = this._internalRoot;
      if (e16 !== null) {
        this._internalRoot = null;
        var t3 = e16.containerInfo;
        dh(e16.current, 2, null, e16, null, null), zd(), t3[Dt3] = null;
      }
    };
    function Gh(e16) {
      this._internalRoot = e16;
    }
    Gh.prototype.unstable_scheduleHydration = function(e16) {
      if (e16) {
        var t3 = St3();
        e16 = { blockedOn: null, target: e16, priority: t3 };
        for (var n2 = 0; n2 < Ah.length && t3 !== 0 && t3 < Ah[n2].priority; n2++) ;
        Ah.splice(n2, 0, e16), n2 === 0 && Fh(e16);
      }
    };
    var Kh = r2.version;
    if (Kh !== `19.3.0`) throw Error(s2(527, Kh, `19.3.0`));
    j3.findDOMNode = function(e16) {
      var t3 = e16._reactInternals;
      if (t3 === void 0) throw typeof e16.render == `function` ? Error(s2(188)) : (e16 = Object.keys(e16).join(`,`), Error(s2(268, e16)));
      return e16 = p2(t3), e16 = e16 === null ? null : m(e16), e16 = e16 === null ? null : e16.stateNode, e16;
    };
    var qh = { bundleType: 0, version: `19.3.0`, rendererPackageName: `react-dom`, currentDispatcherRef: A3, reconcilerVersion: `19.3.0` };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber) try {
        Qe3 = Jh.inject(qh), $e3 = Jh;
      } catch {
      }
    }
    e15.createRoot = function(e16, t3) {
      if (!c2(e16)) throw Error(s2(299));
      var n2 = false, r3 = ``, i2 = Cc, a3 = wc, o2 = Tc;
      return t3 != null && (true === t3.unstable_strictMode && (n2 = true), t3.identifierPrefix !== void 0 && (r3 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (i2 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (a3 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (o2 = t3.onRecoverableError)), t3 = lh(e16, 1, false, null, null, n2, r3, null, i2, a3, o2, Uh), e16[Dt3] = t3.current, Wf(e16), new Wh(t3);
    };
  }));
  var c = e(((e15, t2) => {
    function n2() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e16) {
        console.error(e16);
      }
    }
    n2(), t2.exports = s();
  }));
  var l = `https://demo.codeandchill.store/raye/photos/220-raye/`;
  var u = (e15, t2, n2 = 1200, r2 = 1600) => ({ src: l + e15, w: n2, h: r2, n: t2 });
  var d = { hero: u(`hero.jpg`, 1, 1600, 1600), flex: u(`flex.jpg`, 8), weekend: u(`mood-weekend.jpg`, 9, 1200, 1200), studio: u(`mood-studio.jpg`, 10, 900, 1200), dockside: u(`mood-dockside.jpg`, 11, 900, 1200), feel: u(`feel.jpg`, 12, 1600, 900), hands: u(`journal-weave.jpg`, 39, 1600, 1200), loom: u(`about-loom.jpg`, 36, 1600, 900), team: u(`about-team.jpg`, 37, 1600, 1200) };
  var p = [`XS`, `S`, `M`, `L`, `XL`, `XXL`];
  var h = { short: `Short sleeve`, long: `Long sleeve`, oversized: `Oversized` };
  var _ = (e15) => Object.fromEntries(e15.split(`,`).map((e16, t2) => [p[t2], Number(e16)]));
  var v = (e15, t2, n2) => ({ img: u(`shirt-${e15}.jpg`, t2), model: u(`shirt-${e15}-model.jpg`, n2) });
  var y = [{ slug: `sunday`, name: `Sunday Stripe`, cat: `short`, price: 2890, rating: 4.6, reviews: 214, tag: `Popular`, family: `Coral`, added: 9, colours: [{ name: `Coral / Cream`, hex: `#ff6b4a` }, { name: `Teal / Cream`, hex: `#0e4f4b` }], stock: _(`4,9,14,11,6,0`), ...v(`sunday`, 2, 18), blurb: `Our signature camp-collar shirt in wide coral-and-cream stripes. Boxy, breezy, made for long lunches.`, details: [`Camp collar`, `Relaxed boxy fit`, `Straight hem, wear it out`, `Real shell buttons`], fabric: `55% linen, 45% cotton \xB7 140 GSM \xB7 yarn-dyed` }, { slug: `lido`, name: `Lido Stripe`, cat: `short`, price: 2890, rating: 4.9, reviews: 168, tag: `New`, family: `Teal`, added: 12, colours: [{ name: `Teal / White`, hex: `#0e4f4b` }, { name: `Coral / White`, hex: `#ff6b4a` }], stock: _(`2,6,10,8,5,3`), img: u(`shirt-lido.jpg`, 17), model: u(`shirt-lido-model.jpg`, 3), blurb: `Candy stripes in deep teal, cut short in the sleeve and easy everywhere else. Throw it open over a tee.`, details: [`Camp collar`, `Relaxed fit`, `Side vents`, `Real shell buttons`], fabric: `55% linen, 45% cotton \xB7 140 GSM \xB7 yarn-dyed` }, { slug: `harbour`, name: `Harbour Stripe`, cat: `long`, price: 2690, rating: 4.5, reviews: 97, family: `Blue`, added: 6, colours: [{ name: `Navy / White`, hex: `#1f2f4f` }, { name: `Sky / White`, hex: `#9fc3e0` }], stock: _(`3,8,12,10,6,2`), ...v(`harbour`, 4, 19), blurb: `A fine navy pinstripe that goes to the office and stays out after. Roll the sleeves once and you\u2019re done.`, details: [`Button-down collar`, `Regular fit`, `Curved hem`, `Single chest pocket`], fabric: `100% cotton poplin \xB7 120 GSM \xB7 yarn-dyed` }, { slug: `clay`, name: `Clay Stripe`, cat: `long`, price: 2690, rating: 4.3, reviews: 64, tag: `New`, family: `Earth`, added: 11, colours: [{ name: `Terracotta / Sand`, hex: `#b8553a` }], stock: _(`0,4,7,9,5,2`), ...v(`clay`, 5, 20), blurb: `Terracotta and sand, the colours of a sun-baked roof. Relaxed through the body with one useful pocket.`, details: [`Point collar`, `Relaxed fit`, `Chest pocket`, `Dropped shoulder`], fabric: `60% linen, 40% cotton \xB7 150 GSM \xB7 yarn-dyed` }, { slug: `butter`, name: `Butter Stripe`, cat: `short`, price: 2590, rating: 4.7, reviews: 131, family: `Yellow`, added: 7, colours: [{ name: `Butter / Cream`, hex: `#ffd66b` }], stock: _(`5,10,13,12,7,4`), ...v(`butter`, 6, 21), blurb: `Soft butter-yellow candy stripes that look like a good mood. The easiest shirt in the drawer.`, details: [`Camp collar`, `Relaxed boxy fit`, `Straight hem`, `Real shell buttons`], fabric: `55% linen, 45% cotton \xB7 140 GSM \xB7 yarn-dyed` }, { slug: `ink`, name: `Ink Stripe`, cat: `oversized`, price: 2790, rating: 4.8, reviews: 88, family: `Mono`, added: 8, colours: [{ name: `Charcoal / Ecru`, hex: `#2a2724` }], stock: _(`3,6,9,8,4,2`), ...v(`ink`, 7, 22), blurb: `Charcoal bengal stripes on an oversized body. Wear it as a shirt, a jacket, or a beach cover-up.`, details: [`Point collar`, `Oversized fit`, `Chest pocket`, `Long back hem`], fabric: `100% cotton \xB7 160 GSM \xB7 yarn-dyed` }, { slug: `marina`, name: `Marina Stripe`, cat: `short`, price: 2590, was: 2890, rating: 4.4, reviews: 52, tag: `Sale`, family: `Blue`, added: 4, colours: [{ name: `Sky / White`, hex: `#7fb3dd` }], stock: _(`2,5,6,4,3,1`), img: u(`shirt-marina.jpg`, 23), blurb: `Wide sky-blue stripes for the days you can smell the sea. Light enough to forget about.`, details: [`Camp collar`, `Relaxed fit`, `Straight hem`, `Coconut buttons`], fabric: `55% linen, 45% cotton \xB7 140 GSM \xB7 yarn-dyed` }, { slug: `pistachio`, name: `Pistachio Stripe`, cat: `long`, price: 2790, rating: 4.6, reviews: 41, tag: `New`, family: `Green`, added: 10, colours: [{ name: `Pistachio / Cream`, hex: `#a9c79a` }], stock: _(`3,7,9,8,5,2`), ...v(`pistachio`, 25, 26), blurb: `Pale pistachio stripes on a soft long-sleeve. Cool in the morning, rolled up by noon.`, details: [`Band collar`, `Regular fit`, `Curved hem`, `Real shell buttons`], fabric: `60% linen, 40% cotton \xB7 150 GSM \xB7 yarn-dyed` }, { slug: `rust`, name: `Rust Bengal`, cat: `oversized`, price: 3190, rating: 5, reviews: 23, tag: `Limited`, family: `Earth`, added: 13, colours: [{ name: `Rust / Navy`, hex: `#b5482a` }], stock: _(`1,3,4,3,2,0`), ...v(`rust`, 27, 28), blurb: `Drop 03: rust and navy bengal stripes, woven in one small batch. When it\u2019s gone, it\u2019s gone.`, details: [`Point collar`, `Oversized fit`, `Two chest pockets`, `Numbered inside label`], fabric: `100% cotton \xB7 160 GSM \xB7 yarn-dyed` }, { slug: `seafoam`, name: `Seafoam Stripe`, cat: `short`, price: 2590, rating: 4.5, reviews: 76, family: `Teal`, added: 5, colours: [{ name: `Seafoam / Sand`, hex: `#8fcfc0` }], stock: _(`4,8,11,9,5,3`), img: u(`shirt-seafoam-model.jpg`, 30), blurb: `Seafoam and sand in a relaxed camp-collar. Pairs with linen trousers and nothing to do.`, details: [`Camp collar`, `Relaxed fit`, `Side vents`, `Coconut buttons`], fabric: `55% linen, 45% cotton \xB7 140 GSM \xB7 yarn-dyed` }, { slug: `midnight`, name: `Midnight Pinstripe`, cat: `long`, price: 2890, rating: 4.7, reviews: 58, family: `Mono`, added: 3, colours: [{ name: `Midnight / Cream`, hex: `#1b2230` }], stock: _(`2,6,8,7,4,2`), ...v(`midnight`, 31, 32), blurb: `Deep midnight with a whisper of cream pinstripe. The one for dinners and first dates.`, details: [`Point collar`, `Regular fit`, `Curved hem`, `Mother-of-pearl buttons`], fabric: `100% cotton poplin \xB7 120 GSM \xB7 yarn-dyed` }, { slug: `tangerine`, name: `Tangerine Candy`, cat: `oversized`, price: 2790, was: 3090, rating: 4.6, reviews: 39, tag: `Sale`, family: `Coral`, added: 2, colours: [{ name: `Tangerine / White`, hex: `#ff8a3d` }], stock: _(`2,4,7,6,3,1`), img: u(`shirt-sunday.jpg`, 33), model: u(`shirt-sunday-model.jpg`, 34), blurb: `Tangerine candy stripes, oversized and loud in the best way. Bring sunglasses.`, details: [`Camp collar`, `Oversized fit`, `Straight hem`, `Real shell buttons`], fabric: `55% linen, 45% cotton \xB7 140 GSM \xB7 yarn-dyed` }];
  var b = (e15) => y.find((t2) => t2.slug === e15);
  var E = [{ img: d.weekend, title: `Weekend picnic`, body: `Picnic plans, maximum stripe energy.`, href: `#/product/butter` }, { img: d.studio, title: `Studio, but easy`, body: `Calls at ten, lunch outside at one.`, href: `#/product/harbour` }, { img: d.dockside, title: `Dockside`, body: `Golden hour, salt in the air.`, href: `#/product/clay` }];
  var O = [{ quote: `Bought the Sunday Stripe for a wedding and got asked about it all night.`, name: `Tahsin R.`, via: `Instagram`, img: u(`avatar-1.jpg`, 13, 240, 240) }, { quote: `Finally a linen shirt that doesn\u2019t look like a crumpled napkin by lunch.`, name: `Maliha K.`, via: `Google`, img: u(`avatar-2.jpg`, 14, 240, 240) }, { quote: `The colours are even better in person. I now own four. Send help.`, name: `Arif H.`, via: `TikTok`, img: u(`avatar-3.jpg`, 15, 240, 240) }];
  var te = [`Free delivery on orders over \u09F33,000`, `Cash on delivery across Bangladesh`, `Use RAYE10 for 10% off your first order`];
  var ne = (/* @__PURE__ */ new Date(`2026-11-21T18:00:00+06:00`)).getTime();
  var re = 3e3;
  var ie = [{ id: `dhaka`, label: `Inside Dhaka`, note: `1\u20132 working days`, fee: 80 }, { id: `outside`, label: `Outside Dhaka`, note: `3\u20135 working days`, fee: 150 }, { id: `express`, label: `Express, Dhaka`, note: `Next day before 8 pm`, fee: 250 }];
  var ae = [{ id: `cod`, label: `Cash on delivery`, note: `Pay when it arrives` }, { id: `bkash`, label: `bKash`, note: `You\u2019ll get a payment request` }, { id: `nagad`, label: `Nagad`, note: `You\u2019ll get a payment request` }, { id: `card`, label: `Card`, note: `Visa, Mastercard, Amex` }];
  var oe = { RAYE10: { kind: `pct`, value: 10, label: `10% off` }, SALTAIR: { kind: `ship`, value: 0, label: `Free delivery` } };
  var ce = [{ slug: `stripes-in-35-degrees`, title: `How to wear stripes in 35\xB0C`, tag: `Style notes`, date: `18 Oct 2026`, read: 4, dek: `Three rules for looking sharp when the city is melting.`, cover: u(`journal-heat.jpg`, 38, 1600, 1200), body: [`Dhaka in May does not care about your plans. The trick to looking put-together in real heat is not wearing less; it is wearing the right thing, loosely.`, `Rule one: choose cotton-linen over pure cotton. Linen lets air through and dries fast, and the cotton keeps it from creasing into a paper bag by noon.`, `Rule two: go a size relaxed, not a size up. A boxy cut leaves a gap between shirt and skin, and that gap is your air conditioning.`, `Rule three: let the stripe do the talking. A bold stripe with plain trousers and clean sneakers reads as a decision, not an accident. Leave the patterns at one.`] }, { slug: `inside-the-weave`, title: `Inside the weave: how a Ray\xE9 stripe is made`, tag: `Behind the seams`, date: `2 Oct 2026`, read: 6, dek: `From dyed yarn to finished shirt, in a workshop outside Narayanganj.`, cover: u(`journal-weave.jpg`, 39, 1600, 1200), body: [`Most striped shirts are printed: the colour sits on top of white fabric and fades from the outside in. Ours are yarn-dyed, which means every thread is coloured before it is woven.`, `The stripes are set on the loom one thread at a time. A wide stripe on the Sunday shirt is 48 threads of coral, then 48 of cream, repeated across the width of the cloth.`, `After weaving, each bolt is washed once before cutting, so the shirt you get has already done its shrinking. That is why we can promise a true fit.`, `Then the cut and the sew: double-stitched side seams, a back yoke that sits flat, and buttons fitted by hand. Eleven pairs of hands touch every shirt.`] }, { slug: `one-shirt-five-ways`, title: `One shirt, five ways`, tag: `Style notes`, date: `21 Sep 2026`, read: 3, dek: `The Ink Stripe from Monday to the beach on Saturday.`, cover: u(`journal-five.jpg`, 40, 1600, 1200), body: [`Monday: buttoned up, tucked into pleated trousers. Tuesday: open over a white tee with wide jeans. Wednesday: sleeves rolled twice, worn with shorts for a long lunch.`, `Thursday: thrown over a knit as a light jacket when the AC is winning. Saturday: unbuttoned at the beach, over your swimsuit, with nowhere to be.`, `An oversized cut is what makes this work: it hangs like a shirt when it is closed and like a jacket when it is open.`] }];
  var de = [[`XS`, 100, 68, 44], [`S`, 106, 70, 46], [`M`, 112, 72, 48], [`L`, 118, 74, 50], [`XL`, 124, 76, 52], [`XXL`, 130, 78, 54]];
  var pe = `raye:admin:v1`;
  var me = { products: y.map((e15) => ({ slug: e15.slug, price: e15.price, stock: { ...e15.stock } })), promos: { ...oe } };
  var he = ae.map((e15) => e15.id);
  try {
    let e15 = /[?&]record\b/.test(location.search) ? null : JSON.parse(localStorage.getItem(`raye:admin:v1`) || `null`);
    for (let t3 of y) e15?.stock?.[t3.slug] && Object.assign(t3.stock, e15.stock[t3.slug]), e15?.price?.[t3.slug] && (t3.price = e15.price[t3.slug]);
    let t2 = he.filter((t3) => e15?.settings?.[t3] !== false);
    t2.length && he.splice(0, he.length, ...t2);
    for (let [t3, n2] of Object.entries(e15?.promos ?? {})) n2.active ? oe[t3] = { kind: n2.kind, value: n2.value, label: n2.label } : delete oe[t3];
  } catch {
  }
  function ge(e15) {
    if (e15 === void 0) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e15;
  }
  function _e(e15, t2) {
    e15.prototype = Object.create(t2.prototype), e15.prototype.constructor = e15, e15.__proto__ = t2;
  }
  var ve = { autoSleep: 120, force3D: `auto`, nullTargetWarn: 1, units: { lineHeight: `` } };
  var ye = { duration: 0.5, overwrite: false, delay: 0 };
  var be;
  var A;
  var j;
  var xe = 1e8;
  var M = 1 / xe;
  var Se = Math.PI * 2;
  var Ce = Se / 4;
  var we = 0;
  var N = Math.sqrt;
  var Te = Math.cos;
  var Ee = Math.sin;
  var P = function(e15) {
    return typeof e15 == `string`;
  };
  var F = function(e15) {
    return typeof e15 == `function`;
  };
  var De = function(e15) {
    return typeof e15 == `number`;
  };
  var Oe = function(e15) {
    return e15 === void 0;
  };
  var ke = function(e15) {
    return typeof e15 == `object`;
  };
  var Ae = function(e15) {
    return e15 !== false;
  };
  var je = function() {
    return typeof window < `u`;
  };
  var Me = function(e15) {
    return F(e15) || P(e15);
  };
  var Ne = typeof ArrayBuffer == `function` && ArrayBuffer.isView || function() {
  };
  var Pe = Array.isArray;
  var Fe = /random\([^)]+\)/g;
  var Ie = /,\s*/g;
  var Le = /(?:-?\.?\d|\.)+/gi;
  var Re = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var ze = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var Be = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var Ve = /[+-]=-?[.\d]+/;
  var He = /[^,'"\[\]\s]+/gi;
  var Ue = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var We;
  var Ge;
  var Ke;
  var qe;
  var Je = {};
  var Ye = {};
  var Xe;
  var Ze = function(e15) {
    return (Ye = kt(e15, Je)) && Kr;
  };
  var Qe = function(e15, t2) {
    return console.warn(`Invalid property`, e15, `set to`, t2, `Missing plugin? gsap.registerPlugin()`);
  };
  var $e = function(e15, t2) {
    return !t2 && console.warn(e15);
  };
  var et = function(e15, t2) {
    return e15 && (Je[e15] = t2) && Ye && (Ye[e15] = t2) || Je;
  };
  var tt = function() {
    return 0;
  };
  var nt = { suppressEvents: true, isStart: true, kill: false };
  var rt = { suppressEvents: true, kill: false };
  var it = { suppressEvents: true };
  var at = {};
  var ot = [];
  var st = {};
  var ct;
  var lt = {};
  var ut = {};
  var dt = 30;
  var ft = [];
  var pt = ``;
  var mt = function(e15) {
    var t2 = e15[0], n2, r2;
    if (ke(t2) || F(t2) || (e15 = [e15]), !(n2 = (t2._gsap || {}).harness)) {
      for (r2 = ft.length; r2-- && !ft[r2].targetTest(t2); ) ;
      n2 = ft[r2];
    }
    for (r2 = e15.length; r2--; ) e15[r2] && (e15[r2]._gsap || (e15[r2]._gsap = new nr(e15[r2], n2))) || e15.splice(r2, 1);
    return e15;
  };
  var ht = function(e15) {
    return e15._gsap || mt(fn(e15))[0]._gsap;
  };
  var gt = function(e15, t2, n2) {
    return (n2 = e15[t2]) && F(n2) ? e15[t2]() : Oe(n2) && e15.getAttribute && e15.getAttribute(t2) || n2;
  };
  var _t = function(e15, t2) {
    return (e15 = e15.split(`,`)).forEach(t2) || e15;
  };
  var vt = function(e15) {
    return Math.round(e15 * 1e5) / 1e5 || 0;
  };
  var yt = function(e15) {
    return Math.round(e15 * 1e7) / 1e7 || 0;
  };
  var bt = function(e15, t2) {
    var n2 = t2.charAt(0), r2 = parseFloat(t2.substr(2));
    return e15 = parseFloat(e15), n2 === `+` ? e15 + r2 : n2 === `-` ? e15 - r2 : n2 === `*` ? e15 * r2 : e15 / r2;
  };
  var xt = function(e15, t2) {
    for (var n2 = t2.length, r2 = 0; e15.indexOf(t2[r2]) < 0 && ++r2 < n2; ) ;
    return r2 < n2;
  };
  var St = function() {
    var e15 = ot.length, t2 = ot.slice(0), n2, r2;
    for (st = {}, ot.length = 0, n2 = 0; n2 < e15; n2++) r2 = t2[n2], r2 && r2._lazy && (r2.render(r2._lazy[0], r2._lazy[1], true)._lazy = 0);
  };
  var Ct = function(e15) {
    return !!(e15._initted || e15._startAt || e15.add);
  };
  var wt = function(e15, t2, n2, r2) {
    ot.length && !A && St(), e15.render(t2, n2, r2 || !!(A && t2 < 0 && Ct(e15))), ot.length && !A && St();
  };
  var Tt = function(e15) {
    var t2 = parseFloat(e15);
    return (t2 || t2 === 0) && (e15 + ``).match(He).length < 2 ? t2 : P(e15) ? e15.trim() : e15;
  };
  var Et = function(e15) {
    return e15;
  };
  var Dt = function(e15, t2) {
    for (var n2 in t2) n2 in e15 || (e15[n2] = t2[n2]);
    return e15;
  };
  var Ot = function(e15) {
    return function(t2, n2) {
      for (var r2 in n2) r2 in t2 || r2 === `duration` && e15 || r2 === `ease` || (t2[r2] = n2[r2]);
    };
  };
  var kt = function(e15, t2) {
    for (var n2 in t2) e15[n2] = t2[n2];
    return e15;
  };
  var At = function e2(t2, n2) {
    for (var r2 in n2) r2 !== `__proto__` && r2 !== `constructor` && r2 !== `prototype` && (t2[r2] = ke(n2[r2]) ? e2(t2[r2] || (t2[r2] = {}), n2[r2]) : n2[r2]);
    return t2;
  };
  var jt = function(e15, t2) {
    var n2 = {}, r2;
    for (r2 in e15) r2 in t2 || (n2[r2] = e15[r2]);
    return n2;
  };
  var Mt = function(e15) {
    var t2 = e15.parent || We, n2 = e15.keyframes ? Ot(Pe(e15.keyframes)) : Dt;
    if (Ae(e15.inherit)) for (; t2; ) n2(e15, t2.vars.defaults), t2 = t2.parent || t2._dp;
    return e15;
  };
  var Nt = function(e15, t2) {
    for (var n2 = e15.length, r2 = n2 === t2.length; r2 && n2-- && e15[n2] === t2[n2]; ) ;
    return n2 < 0;
  };
  var Pt = function(e15, t2, n2, r2, i2) {
    n2 === void 0 && (n2 = `_first`), r2 === void 0 && (r2 = `_last`);
    var a2 = e15[r2], o2;
    if (i2) for (o2 = t2[i2]; a2 && a2[i2] > o2; ) a2 = a2._prev;
    return a2 ? (t2._next = a2._next, a2._next = t2) : (t2._next = e15[n2], e15[n2] = t2), t2._next ? t2._next._prev = t2 : e15[r2] = t2, t2._prev = a2, t2.parent = t2._dp = e15, t2;
  };
  var Ft = function(e15, t2, n2, r2) {
    n2 === void 0 && (n2 = `_first`), r2 === void 0 && (r2 = `_last`);
    var i2 = t2._prev, a2 = t2._next;
    i2 ? i2._next = a2 : e15[n2] === t2 && (e15[n2] = a2), a2 ? a2._prev = i2 : e15[r2] === t2 && (e15[r2] = i2), t2._next = t2._prev = t2.parent = null;
  };
  var It = function(e15, t2) {
    e15.parent && (!t2 || e15.parent.autoRemoveChildren) && e15.parent.remove && e15.parent.remove(e15), e15._act = 0;
  };
  var Lt = function(e15, t2) {
    if (e15 && (!t2 || t2._end > e15._dur || t2._start < 0)) for (var n2 = e15; n2; ) n2._dirty = 1, n2 = n2.parent;
    return e15;
  };
  var Rt = function(e15) {
    for (var t2 = e15.parent; t2 && t2.parent; ) t2._dirty = 1, t2.totalDuration(), t2 = t2.parent;
    return e15;
  };
  var zt = function(e15, t2, n2, r2) {
    return e15._startAt && (A ? e15._startAt.revert(rt) : e15.vars.immediateRender && !e15.vars.autoRevert || e15._startAt.render(t2, true, r2));
  };
  var Bt = function e3(t2) {
    return !t2 || t2._ts && e3(t2.parent);
  };
  var Vt = function(e15) {
    return e15._repeat ? Ht(e15._tTime, e15 = e15.duration() + e15._rDelay) * e15 : 0;
  };
  var Ht = function(e15, t2) {
    var n2 = Math.floor(e15 = yt(e15 / t2));
    return e15 && n2 === e15 ? n2 - 1 : n2;
  };
  var Ut = function(e15, t2) {
    return (e15 - t2._start) * t2._ts + (t2._ts >= 0 ? 0 : t2._dirty ? t2.totalDuration() : t2._tDur);
  };
  var Wt = function(e15) {
    return e15._end = yt(e15._start + (e15._tDur / Math.abs(e15._ts || e15._rts || M) || 0));
  };
  var Gt = function(e15, t2) {
    var n2 = e15._dp;
    return n2 && n2.smoothChildTiming && e15._ts && (e15._start = yt(n2._time - (e15._ts > 0 ? t2 / e15._ts : ((e15._dirty ? e15.totalDuration() : e15._tDur) - t2) / -e15._ts)), Wt(e15), n2._dirty || Lt(n2, e15)), e15;
  };
  var Kt = function(e15, t2) {
    var n2;
    if ((t2._time || !t2._dur && t2._initted || t2._start < e15._time && (t2._dur || !t2.add)) && (n2 = Ut(e15.rawTime(), t2), (!t2._dur || on(0, t2.totalDuration(), n2) - t2._tTime > M) && t2.render(n2, true)), Lt(e15, t2)._dp && e15._initted && e15._time >= e15._dur && e15._ts) {
      if (e15._dur < e15.duration()) for (n2 = e15; n2._dp; ) n2.rawTime() >= 0 && n2.totalTime(n2._tTime), n2 = n2._dp;
      e15._zTime = -M;
    }
  };
  var qt = function(e15, t2, n2, r2) {
    return t2.parent && It(t2), t2._start = yt((De(n2) ? n2 : n2 || e15 !== We ? nn(e15, n2, t2) : e15._time) + t2._delay), t2._end = yt(t2._start + (t2.totalDuration() / Math.abs(t2.timeScale()) || 0)), Pt(e15, t2, `_first`, `_last`, e15._sort ? `_start` : 0), Xt(t2) || (e15._recent = t2), r2 || Kt(e15, t2), e15._ts < 0 && Gt(e15, e15._tTime), e15;
  };
  var Jt = function(e15, t2) {
    return (Je.ScrollTrigger || Qe(`scrollTrigger`, t2)) && Je.ScrollTrigger.create(t2, e15);
  };
  var I = function(e15, t2, n2, r2, i2) {
    if (dr(e15, t2, i2), !e15._initted) return 1;
    if (!n2 && e15._pt && !A && (e15._dur && e15.vars.lazy !== false || !e15._dur && e15.vars.lazy) && ct !== Un.frame) return ot.push(e15), e15._lazy = [i2, r2], 1;
  };
  var Yt = function e4(t2) {
    var n2 = t2.parent;
    return n2 && n2._ts && n2._initted && !n2._lock && (n2.rawTime() < 0 || e4(n2));
  };
  var Xt = function(e15) {
    var t2 = e15.data;
    return t2 === `isFromStart` || t2 === `isStart`;
  };
  var Zt = function(e15, t2, n2, r2) {
    var i2 = e15.ratio, a2 = t2 < 0 || !t2 && (!e15._start && Yt(e15) && !(!e15._initted && Xt(e15)) || (e15._ts < 0 || e15._dp._ts < 0) && !Xt(e15)) ? 0 : 1, o2 = e15._rDelay, s2 = 0, c2, l2, u2;
    if (o2 && e15._repeat && (s2 = on(0, e15._tDur, t2), l2 = Ht(s2, o2), e15._yoyo && l2 & 1 && (a2 = 1 - a2), l2 !== Ht(e15._tTime, o2) && (i2 = 1 - a2, e15.vars.repeatRefresh && e15._initted && e15.invalidate())), a2 !== i2 || A || r2 || e15._zTime === M || !t2 && e15._zTime) {
      if (!e15._initted && I(e15, t2, r2, n2, s2)) return;
      for (u2 = e15._zTime, e15._zTime = t2 || (n2 ? M : 0), n2 ||= t2 && !u2, e15.ratio = a2, e15._from && (a2 = 1 - a2), e15._time = 0, e15._tTime = s2, c2 = e15._pt; c2; ) c2.r(a2, c2.d), c2 = c2._next;
      t2 < 0 && zt(e15, t2, n2, true), e15._onUpdate && !n2 && kn(e15, `onUpdate`), s2 && e15._repeat && !n2 && e15.parent && kn(e15, `onRepeat`), (t2 >= e15._tDur || t2 < 0) && e15.ratio === a2 && (a2 && It(e15, 1), !n2 && !A && (kn(e15, a2 ? `onComplete` : `onReverseComplete`, true), e15._prom && e15._prom()));
    } else e15._zTime ||= t2;
  };
  var Qt = function(e15, t2, n2) {
    var r2;
    if (n2 > t2) for (r2 = e15._first; r2 && r2._start <= n2; ) {
      if (r2.data === `isPause` && r2._start > t2) return r2;
      r2 = r2._next;
    }
    else for (r2 = e15._last; r2 && r2._start >= n2; ) {
      if (r2.data === `isPause` && r2._start < t2) return r2;
      r2 = r2._prev;
    }
  };
  var $t = function(e15, t2, n2, r2) {
    var i2 = e15._repeat, a2 = yt(t2) || 0, o2 = e15._tTime / e15._tDur;
    return o2 && !r2 && (e15._time *= a2 / e15._dur), e15._dur = a2, e15._tDur = i2 ? i2 < 0 ? 1e10 : yt(a2 * (i2 + 1) + e15._rDelay * i2) : a2, o2 > 0 && !r2 && Gt(e15, e15._tTime = e15._tDur * o2), e15.parent && Wt(e15), n2 || Lt(e15.parent, e15), e15;
  };
  var en = function(e15) {
    return e15 instanceof ir ? Lt(e15) : $t(e15, e15._dur);
  };
  var tn = { _start: 0, endTime: tt, totalDuration: tt };
  var nn = function e5(t2, n2, r2) {
    var i2 = t2.labels, a2 = t2._recent || tn, o2 = t2.duration() >= xe ? a2.endTime(false) : t2._dur, s2, c2, l2;
    return P(n2) && (isNaN(n2) || n2 in i2) ? (c2 = n2.charAt(0), l2 = n2.substr(-1) === `%`, s2 = n2.indexOf(`=`), c2 === `<` || c2 === `>` ? (s2 >= 0 && (n2 = n2.replace(/=/, ``)), (c2 === `<` ? a2._start : a2.endTime(a2._repeat >= 0)) + (parseFloat(n2.substr(1)) || 0) * (l2 ? (s2 < 0 ? a2 : r2).totalDuration() / 100 : 1)) : s2 < 0 ? (n2 in i2 || (i2[n2] = o2), i2[n2]) : (c2 = parseFloat(n2.charAt(s2 - 1) + n2.substr(s2 + 1)), l2 && r2 && (c2 = c2 / 100 * (Pe(r2) ? r2[0] : r2).totalDuration()), s2 > 1 ? e5(t2, n2.substr(0, s2 - 1), r2) + c2 : o2 + c2)) : n2 == null ? o2 : +n2;
  };
  var rn = function(e15, t2, n2) {
    var r2 = De(t2[1]), i2 = (r2 ? 2 : 1) + (e15 < 2 ? 0 : 1), a2 = t2[i2], o2, s2;
    if (r2 && (a2.duration = t2[1]), a2.parent = n2, e15) {
      for (o2 = a2, s2 = n2; s2 && !(`immediateRender` in o2); ) o2 = s2.vars.defaults || {}, s2 = Ae(s2.vars.inherit) && s2.parent;
      a2.immediateRender = Ae(o2.immediateRender), e15 < 2 ? a2.runBackwards = 1 : a2.startAt = t2[i2 - 1];
    }
    return new vr(t2[0], a2, t2[i2 + 1]);
  };
  var an = function(e15, t2) {
    return e15 || e15 === 0 ? t2(e15) : t2;
  };
  var on = function(e15, t2, n2) {
    return n2 < e15 ? e15 : n2 > t2 ? t2 : n2;
  };
  var sn = function(e15, t2) {
    return !P(e15) || !(t2 = Ue.exec(e15)) ? `` : t2[1];
  };
  var cn = function(e15, t2, n2) {
    return an(n2, function(n3) {
      return on(e15, t2, n3);
    });
  };
  var ln = [].slice;
  var un = function(e15, t2) {
    return e15 && ke(e15) && `length` in e15 && (!t2 && !e15.length || e15.length - 1 in e15 && ke(e15[0])) && !e15.nodeType && e15 !== Ge;
  };
  var dn = function(e15, t2, n2) {
    return n2 === void 0 && (n2 = []), e15.forEach(function(e16) {
      var r2;
      return P(e16) && !t2 || un(e16, 1) ? (r2 = n2).push.apply(r2, fn(e16)) : n2.push(e16);
    }) || n2;
  };
  var fn = function(e15, t2, n2) {
    return j && !t2 && j.selector ? j.selector(e15) : P(e15) && !n2 && (Ke || !Wn()) ? ln.call((t2 || qe).querySelectorAll(e15), 0) : Pe(e15) ? dn(e15, n2) : un(e15) ? ln.call(e15, 0) : e15 ? [e15] : [];
  };
  var pn = function(e15) {
    return e15 = fn(e15)[0] || $e(`Invalid scope`) || {}, function(t2) {
      var n2 = e15.current || e15.nativeElement || e15;
      return fn(t2, n2.querySelectorAll ? n2 : n2 === e15 ? $e(`Invalid scope`) || qe.createElement(`div`) : e15);
    };
  };
  var mn = function(e15) {
    return e15.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var hn = function(e15) {
    if (F(e15)) return e15;
    var t2 = ke(e15) ? e15 : { each: e15 }, n2 = Zn(t2.ease), r2 = t2.from || 0, i2 = parseFloat(t2.base) || 0, a2 = {}, o2 = r2 > 0 && r2 < 1, s2 = isNaN(r2) || o2, c2 = t2.axis, l2 = r2, u2 = r2;
    return P(r2) ? l2 = u2 = { center: 0.5, edges: 0.5, end: 1 }[r2] || 0 : !o2 && s2 && (l2 = r2[0], u2 = r2[1]), function(e16, o3, d2) {
      var f = (d2 || t2).length, p2 = a2[f], m, h2, g2, _3, v3, y3, b3, x2, S2;
      if (!p2) {
        if (S2 = t2.grid === `auto` ? 0 : (t2.grid || [1, xe])[1], !S2) {
          for (b3 = -xe; b3 < (b3 = d2[S2++].getBoundingClientRect().left) && S2 < f; ) ;
          S2 < f && S2--;
        }
        for (p2 = a2[f] = [], m = s2 ? Math.min(S2, f) * l2 - 0.5 : r2 % S2, h2 = S2 === xe ? 0 : s2 ? f * u2 / S2 - 0.5 : r2 / S2 | 0, b3 = 0, x2 = xe, y3 = 0; y3 < f; y3++) g2 = y3 % S2 - m, _3 = h2 - (y3 / S2 | 0), p2[y3] = v3 = c2 ? Math.abs(c2 === `y` ? _3 : g2) : N(g2 * g2 + _3 * _3), v3 > b3 && (b3 = v3), v3 < x2 && (x2 = v3);
        r2 === `random` && mn(p2), p2.max = b3 - x2, p2.min = x2, p2.v = f = (parseFloat(t2.amount) || parseFloat(t2.each) * (S2 > f ? f - 1 : c2 ? c2 === `y` ? f / S2 : S2 : Math.max(S2, f / S2)) || 0) * (r2 === `edges` ? -1 : 1), p2.b = f < 0 ? i2 - f : i2, p2.u = sn(t2.amount || t2.each) || 0, n2 = n2 && f < 0 ? Xn(n2) : n2;
      }
      return f = (p2[e16] - p2.min) / p2.max || 0, yt(p2.b + (n2 ? n2(f) : f) * p2.v) + p2.u;
    };
  };
  var gn = function(e15) {
    var t2 = 10 ** ((e15 + ``).split(`.`)[1] || ``).length;
    return function(n2) {
      var r2 = yt(Math.round(parseFloat(n2) / e15) * e15 * t2);
      return (r2 - r2 % 1) / t2 + (De(n2) ? 0 : sn(n2));
    };
  };
  var _n = function(e15, t2) {
    var n2 = Pe(e15), r2, i2;
    return !n2 && ke(e15) && (r2 = n2 = e15.radius || xe, e15.values ? (e15 = fn(e15.values), (i2 = !De(e15[0])) && (r2 *= r2)) : e15 = gn(e15.increment)), an(t2, n2 ? F(e15) ? function(t3) {
      return i2 = e15(t3), Math.abs(i2 - t3) <= r2 ? i2 : t3;
    } : function(t3) {
      for (var n3 = parseFloat(i2 ? t3.x : t3), a2 = parseFloat(i2 ? t3.y : 0), o2 = xe, s2 = 0, c2 = e15.length, l2, u2; c2--; ) i2 ? (l2 = e15[c2].x - n3, u2 = e15[c2].y - a2, l2 = l2 * l2 + u2 * u2) : l2 = Math.abs(e15[c2] - n3), l2 < o2 && (o2 = l2, s2 = c2);
      return s2 = !r2 || o2 <= r2 ? e15[s2] : t3, i2 || s2 === t3 || De(t3) ? s2 : s2 + sn(t3);
    } : gn(e15));
  };
  var vn = function(e15, t2, n2, r2) {
    return an(Pe(e15) ? !t2 : n2 === true ? !!(n2 = 0) : !r2, function() {
      return Pe(e15) ? e15[~~(Math.random() * e15.length)] : (n2 ||= 1e-5) && (r2 = n2 < 1 ? 10 ** ((n2 + ``).length - 2) : 1) && Math.floor(Math.round((e15 - n2 / 2 + Math.random() * (t2 - e15 + n2 * 0.99)) / n2) * n2 * r2) / r2;
    });
  };
  var yn = function() {
    var e15 = [...arguments];
    return function(t2) {
      return e15.reduce(function(e16, t3) {
        return t3(e16);
      }, t2);
    };
  };
  var bn = function(e15, t2) {
    return function(n2) {
      return e15(parseFloat(n2)) + (t2 || sn(n2));
    };
  };
  var xn = function(e15, t2, n2) {
    return En(e15, t2, 0, 1, n2);
  };
  var Sn = function(e15, t2, n2) {
    return an(n2, function(n3) {
      return e15[~~t2(n3)];
    });
  };
  var Cn = function e6(t2, n2, r2) {
    var i2 = n2 - t2;
    return Pe(t2) ? Sn(t2, e6(0, t2.length), n2) : an(r2, function(e15) {
      return (i2 + (e15 - t2) % i2) % i2 + t2;
    });
  };
  var wn = function e7(t2, n2, r2) {
    var i2 = n2 - t2, a2 = i2 * 2;
    return Pe(t2) ? Sn(t2, e7(0, t2.length - 1), n2) : an(r2, function(e15) {
      return e15 = (a2 + (e15 - t2) % a2) % a2 || 0, t2 + (e15 > i2 ? a2 - e15 : e15);
    });
  };
  var Tn = function(e15) {
    return e15.replace(Fe, function(e16) {
      var t2 = e16.indexOf(`[`) + 1, n2 = e16.substring(t2 || 7, t2 ? e16.indexOf(`]`) : e16.length - 1).split(Ie);
      return vn(t2 ? n2 : +n2[0], t2 ? 0 : +n2[1], +n2[2] || 1e-5);
    });
  };
  var En = function(e15, t2, n2, r2, i2) {
    var a2 = t2 - e15, o2 = r2 - n2;
    return an(i2, function(t3) {
      return n2 + ((t3 - e15) / a2 * o2 || 0);
    });
  };
  var Dn = function e8(t2, n2, r2, i2) {
    var a2 = isNaN(t2 + n2) ? 0 : function(e15) {
      return (1 - e15) * t2 + e15 * n2;
    };
    if (!a2) {
      var o2 = P(t2), s2 = {}, c2, l2, u2, d2, f;
      if (r2 === true && (i2 = 1) && (r2 = null), o2) t2 = { p: t2 }, n2 = { p: n2 };
      else if (Pe(t2) && !Pe(n2)) {
        for (u2 = [], d2 = t2.length, f = d2 - 2, l2 = 1; l2 < d2; l2++) u2.push(e8(t2[l2 - 1], t2[l2]));
        d2--, a2 = function(e15) {
          e15 *= d2;
          var t3 = Math.min(f, ~~e15);
          return u2[t3](e15 - t3);
        }, r2 = n2;
      } else i2 || (t2 = kt(Pe(t2) ? [] : {}, t2));
      if (!u2) {
        for (c2 in n2) or.call(s2, t2, c2, `get`, n2[c2]);
        a2 = function(e15) {
          return Dr(e15, s2) || (o2 ? t2.p : t2);
        };
      }
    }
    return an(r2, a2);
  };
  var On = function(e15, t2, n2) {
    var r2 = e15.labels, i2 = xe, a2, o2, s2;
    for (a2 in r2) o2 = r2[a2] - t2, o2 < 0 == !!n2 && o2 && i2 > (o2 = Math.abs(o2)) && (s2 = a2, i2 = o2);
    return s2;
  };
  var kn = function(e15, t2, n2) {
    var r2 = e15.vars, i2 = r2[t2], a2 = j, o2 = e15._ctx, s2, c2, l2;
    if (i2) return s2 = r2[t2 + `Params`], c2 = r2.callbackScope || e15, n2 && ot.length && St(), o2 && (j = o2), l2 = s2 ? i2.apply(c2, s2) : i2.call(c2), j = a2, l2;
  };
  var An = function(e15) {
    return It(e15), e15.scrollTrigger && e15.scrollTrigger.kill(!!A), e15.progress() < 1 && kn(e15, `onInterrupt`), e15;
  };
  var jn;
  var Mn = [];
  var Nn = function(e15) {
    if (e15) if (e15 = !e15.name && e15.default || e15, je() || e15.headless) {
      var t2 = e15.name, n2 = F(e15), r2 = t2 && !n2 && e15.init ? function() {
        this._props = [];
      } : e15, i2 = { init: tt, render: Dr, add: or, kill: kr, modifier: Or, rawVars: 0 }, a2 = { targetTest: 0, get: 0, getSetter: Cr, aliases: {}, register: 0 };
      if (Wn(), e15 !== r2) {
        if (lt[t2]) return;
        Dt(r2, Dt(jt(e15, i2), a2)), kt(r2.prototype, kt(i2, jt(e15, a2))), lt[r2.prop = t2] = r2, e15.targetTest && (ft.push(r2), at[t2] = 1), t2 = (t2 === `css` ? `CSS` : t2.charAt(0).toUpperCase() + t2.substr(1)) + `Plugin`;
      }
      et(t2, r2), e15.register && e15.register(Kr, r2, Mr);
    } else Mn.push(e15);
  };
  var L = 255;
  var Pn = { aqua: [0, L, L], lime: [0, L, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, L], navy: [0, 0, 128], white: [L, L, L], olive: [128, 128, 0], yellow: [L, L, 0], orange: [L, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [L, 0, 0], pink: [L, 192, 203], cyan: [0, L, L], transparent: [L, L, L, 0] };
  var Fn = function(e15, t2, n2) {
    return e15 += e15 < 0 ? 1 : e15 > 1 ? -1 : 0, (e15 * 6 < 1 ? t2 + (n2 - t2) * e15 * 6 : e15 < 0.5 ? n2 : e15 * 3 < 2 ? t2 + (n2 - t2) * (2 / 3 - e15) * 6 : t2) * L + 0.5 | 0;
  };
  var In = function(e15, t2, n2) {
    var r2 = e15 ? De(e15) ? [e15 >> 16, e15 >> 8 & L, e15 & L] : 0 : Pn.black, i2, a2, o2, s2, c2, l2, u2, d2, f, p2;
    if (!r2) {
      if (e15.substr(-1) === `,` && (e15 = e15.substr(0, e15.length - 1)), Pn[e15]) r2 = Pn[e15];
      else if (e15.charAt(0) === `#`) {
        if (e15.length < 6 && (i2 = e15.charAt(1), a2 = e15.charAt(2), o2 = e15.charAt(3), e15 = `#` + i2 + i2 + a2 + a2 + o2 + o2 + (e15.length === 5 ? e15.charAt(4) + e15.charAt(4) : ``)), e15.length === 9) return r2 = parseInt(e15.substr(1, 6), 16), [r2 >> 16, r2 >> 8 & L, r2 & L, parseInt(e15.substr(7), 16) / 255];
        e15 = parseInt(e15.substr(1), 16), r2 = [e15 >> 16, e15 >> 8 & L, e15 & L];
      } else if (e15.substr(0, 3) === `hsl`) {
        if (r2 = p2 = e15.match(Le), !t2) s2 = r2[0] % 360 / 360, c2 = r2[1] / 100, l2 = r2[2] / 100, a2 = l2 <= 0.5 ? l2 * (c2 + 1) : l2 + c2 - l2 * c2, i2 = l2 * 2 - a2, r2.length > 3 && (r2[3] *= 1), r2[0] = Fn(s2 + 1 / 3, i2, a2), r2[1] = Fn(s2, i2, a2), r2[2] = Fn(s2 - 1 / 3, i2, a2);
        else if (~e15.indexOf(`=`)) return r2 = e15.match(Re), n2 && r2.length < 4 && (r2[3] = 1), r2;
      } else r2 = e15.match(Le) || Pn.transparent;
      r2 = r2.map(Number);
    }
    return t2 && !p2 && (i2 = r2[0] / L, a2 = r2[1] / L, o2 = r2[2] / L, u2 = Math.max(i2, a2, o2), d2 = Math.min(i2, a2, o2), l2 = (u2 + d2) / 2, u2 === d2 ? s2 = c2 = 0 : (f = u2 - d2, c2 = l2 > 0.5 ? f / (2 - u2 - d2) : f / (u2 + d2), s2 = u2 === i2 ? (a2 - o2) / f + (a2 < o2 ? 6 : 0) : u2 === a2 ? (o2 - i2) / f + 2 : (i2 - a2) / f + 4, s2 *= 60), r2[0] = ~~(s2 + 0.5), r2[1] = ~~(c2 * 100 + 0.5), r2[2] = ~~(l2 * 100 + 0.5)), n2 && r2.length < 4 && (r2[3] = 1), r2;
  };
  var Ln = function(e15) {
    var t2 = [], n2 = [], r2 = -1;
    return e15.split(zn).forEach(function(e16) {
      var i2 = e16.match(ze) || [];
      t2.push.apply(t2, i2), n2.push(r2 += i2.length + 1);
    }), t2.c = n2, t2;
  };
  var Rn = function(e15, t2, n2) {
    var r2 = ``, i2 = (e15 + r2).match(zn), a2 = t2 ? `hsla(` : `rgba(`, o2 = 0, s2, c2, l2, u2;
    if (!i2) return e15;
    if (i2 = i2.map(function(e16) {
      return (e16 = In(e16, t2, 1)) && a2 + (t2 ? e16[0] + `,` + e16[1] + `%,` + e16[2] + `%,` + e16[3] : e16.join(`,`)) + `)`;
    }), n2 && (l2 = Ln(e15), s2 = n2.c, s2.join(r2) !== l2.c.join(r2))) for (c2 = e15.replace(zn, `1`).split(ze), u2 = c2.length - 1; o2 < u2; o2++) r2 += c2[o2] + (~s2.indexOf(o2) ? i2.shift() || a2 + `0,0,0,0)` : (l2.length ? l2 : i2.length ? i2 : n2).shift());
    if (!c2) for (c2 = e15.split(zn), u2 = c2.length - 1; o2 < u2; o2++) r2 += c2[o2] + i2[o2];
    return r2 + c2[u2];
  };
  var zn = (function() {
    var e15 = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`, t2;
    for (t2 in Pn) e15 += `|` + t2 + `\\b`;
    return RegExp(e15 + `)`, `gi`);
  })();
  var Bn = /hsl[a]?\(/;
  var Vn = function(e15) {
    var t2 = e15.join(` `), n2;
    if (zn.lastIndex = 0, zn.test(t2)) return n2 = Bn.test(t2), e15[1] = Rn(e15[1], n2), e15[0] = Rn(e15[0], n2, Ln(e15[1])), true;
  };
  var Hn;
  var Un = (function() {
    var e15 = Date.now, t2 = 500, n2 = 33, r2 = e15(), i2 = r2, a2 = 1e3 / 240, o2 = a2, s2 = [], c2, l2, u2, d2, f, p2, m = function u3(m2) {
      var h2 = e15() - i2, g2 = m2 === true, _3, v3, y3, b3;
      if ((h2 > t2 || h2 < 0) && (r2 += h2 - n2), i2 += h2, y3 = i2 - r2, _3 = y3 - o2, (_3 > 0 || g2) && (b3 = ++d2.frame, f = y3 - d2.time * 1e3, d2.time = y3 /= 1e3, o2 += _3 + (_3 >= a2 ? 4 : a2 - _3), v3 = 1), g2 || (c2 = l2(u3)), v3) for (p2 = 0; p2 < s2.length; p2++) s2[p2](y3, f, b3, m2);
    };
    return d2 = { time: 0, frame: 0, tick: function() {
      m(true);
    }, deltaRatio: function(e16) {
      return f / (1e3 / (e16 || 60));
    }, wake: function() {
      Xe && (!Ke && je() && (Ge = Ke = window, qe = Ge.document || {}, Je.gsap = Kr, (Ge.gsapVersions ||= []).push(Kr.version), Ze(Ye || Ge.GreenSockGlobals || !Ge.gsap && Ge || {}), Mn.forEach(Nn)), u2 = typeof requestAnimationFrame < `u` && requestAnimationFrame, c2 && d2.sleep(), l2 = u2 || function(e16) {
        return setTimeout(e16, o2 - d2.time * 1e3 + 1 | 0);
      }, Hn = 1, m(2));
    }, sleep: function() {
      (u2 ? cancelAnimationFrame : clearTimeout)(c2), Hn = 0, l2 = tt;
    }, lagSmoothing: function(e16, r3) {
      t2 = e16 || 1 / 0, n2 = Math.min(r3 || 33, t2);
    }, fps: function(e16) {
      a2 = 1e3 / (e16 || 240), o2 = d2.time * 1e3 + a2;
    }, add: function(e16, t3, n3) {
      var r3 = t3 ? function(t4, n4, i3, a3) {
        e16(t4, n4, i3, a3), d2.remove(r3);
      } : e16;
      return d2.remove(e16), s2[n3 ? `unshift` : `push`](r3), Wn(), r3;
    }, remove: function(e16, t3) {
      ~(t3 = s2.indexOf(e16)) && s2.splice(t3, 1) && p2 >= t3 && p2--;
    }, _listeners: s2 }, d2;
  })();
  var Wn = function() {
    return !Hn && Un.wake();
  };
  var R = {};
  var Gn = /^[\d.\-M][\d.\-,\s]/;
  var Kn = /["']/g;
  var qn = function(e15) {
    for (var t2 = {}, n2 = e15.substr(1, e15.length - 3).split(`:`), r2 = n2[0], i2 = 1, a2 = n2.length, o2, s2, c2; i2 < a2; i2++) s2 = n2[i2], o2 = i2 === a2 - 1 ? s2.length : s2.lastIndexOf(`,`), c2 = s2.substr(0, o2), t2[r2] = isNaN(c2) ? c2.replace(Kn, ``).trim() : +c2, r2 = s2.substr(o2 + 1).trim();
    return t2;
  };
  var Jn = function(e15) {
    var t2 = e15.indexOf(`(`) + 1, n2 = e15.indexOf(`)`), r2 = e15.indexOf(`(`, t2);
    return e15.substring(t2, ~r2 && r2 < n2 ? e15.indexOf(`)`, n2 + 1) : n2);
  };
  var Yn = function(e15) {
    var t2 = (e15 + ``).split(`(`), n2 = R[t2[0]];
    return n2 && t2.length > 1 && n2.config ? n2.config.apply(null, ~e15.indexOf(`{`) ? [qn(t2[1])] : Jn(e15).split(`,`).map(Tt)) : R._CE && Gn.test(e15) ? R._CE(``, e15) : n2;
  };
  var Xn = function(e15) {
    return function(t2) {
      return 1 - e15(1 - t2);
    };
  };
  var Zn = function(e15, t2) {
    return e15 && (F(e15) ? e15 : R[e15] || Yn(e15)) || t2;
  };
  var Qn = function(e15, t2, n2, r2) {
    n2 === void 0 && (n2 = function(e16) {
      return 1 - t2(1 - e16);
    }), r2 === void 0 && (r2 = function(e16) {
      return e16 < 0.5 ? t2(e16 * 2) / 2 : 1 - t2((1 - e16) * 2) / 2;
    });
    var i2 = { easeIn: t2, easeOut: n2, easeInOut: r2 }, a2;
    return _t(e15, function(e16) {
      for (var t3 in R[e16] = Je[e16] = i2, R[a2 = e16.toLowerCase()] = n2, i2) R[a2 + (t3 === `easeIn` ? `.in` : t3 === `easeOut` ? `.out` : `.inOut`)] = R[e16 + `.` + t3] = i2[t3];
    }), i2;
  };
  var $n = function(e15) {
    return function(t2) {
      return t2 < 0.5 ? (1 - e15(1 - t2 * 2)) / 2 : 0.5 + e15((t2 - 0.5) * 2) / 2;
    };
  };
  var er = function e9(t2, n2, r2) {
    var i2 = n2 >= 1 ? n2 : 1, a2 = (r2 || (t2 ? 0.3 : 0.45)) / (n2 < 1 ? n2 : 1), o2 = a2 / Se * (Math.asin(1 / i2) || 0), s2 = function(e15) {
      return e15 === 1 ? 1 : i2 * 2 ** (-10 * e15) * Ee((e15 - o2) * a2) + 1;
    }, c2 = t2 === `out` ? s2 : t2 === `in` ? function(e15) {
      return 1 - s2(1 - e15);
    } : $n(s2);
    return a2 = Se / a2, c2.config = function(n3, r3) {
      return e9(t2, n3, r3);
    }, c2;
  };
  var tr = function e10(t2, n2) {
    n2 === void 0 && (n2 = 1.70158);
    var r2 = function(e15) {
      return e15 ? --e15 * e15 * ((n2 + 1) * e15 + n2) + 1 : 0;
    }, i2 = t2 === `out` ? r2 : t2 === `in` ? function(e15) {
      return 1 - r2(1 - e15);
    } : $n(r2);
    return i2.config = function(n3) {
      return e10(t2, n3);
    }, i2;
  };
  _t(`Linear,Quad,Cubic,Quart,Quint,Strong`, function(e15, t2) {
    var n2 = t2 < 5 ? t2 + 1 : t2;
    Qn(e15 + `,Power` + (n2 - 1), t2 ? function(e16) {
      return e16 ** +n2;
    } : function(e16) {
      return e16;
    }, function(e16) {
      return 1 - (1 - e16) ** n2;
    }, function(e16) {
      return e16 < 0.5 ? (e16 * 2) ** n2 / 2 : 1 - ((1 - e16) * 2) ** n2 / 2;
    });
  }), R.Linear.easeNone = R.none = R.Linear.easeIn, Qn(`Elastic`, er(`in`), er(`out`), er()), (function(e15, t2) {
    var n2 = 1 / t2, r2 = 2 * n2, i2 = 2.5 * n2, a2 = function(a3) {
      return a3 < n2 ? e15 * a3 * a3 : a3 < r2 ? e15 * (a3 - 1.5 / t2) ** 2 + 0.75 : a3 < i2 ? e15 * (a3 -= 2.25 / t2) * a3 + 0.9375 : e15 * (a3 - 2.625 / t2) ** 2 + 0.984375;
    };
    Qn(`Bounce`, function(e16) {
      return 1 - a2(1 - e16);
    }, a2);
  })(7.5625, 2.75), Qn(`Expo`, function(e15) {
    return 2 ** (10 * (e15 - 1)) * e15 + e15 * e15 * e15 * e15 * e15 * e15 * (1 - e15);
  }), Qn(`Circ`, function(e15) {
    return -(N(1 - e15 * e15) - 1);
  }), Qn(`Sine`, function(e15) {
    return e15 === 1 ? 1 : -Te(e15 * Ce) + 1;
  }), Qn(`Back`, tr(`in`), tr(`out`), tr()), R.SteppedEase = R.steps = Je.SteppedEase = { config: function(e15, t2) {
    e15 === void 0 && (e15 = 1);
    var n2 = 1 / e15, r2 = e15 + +!t2, i2 = +!!t2, a2 = 1 - M;
    return function(e16) {
      return ((r2 * on(0, a2, e16) | 0) + i2) * n2;
    };
  } }, ye.ease = R[`quad.out`], _t(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function(e15) {
    return pt += e15 + `,` + e15 + `Params,`;
  });
  var nr = function(e15, t2) {
    this.id = we++, e15._gsap = this, this.target = e15, this.harness = t2, this.get = t2 ? t2.get : gt, this.set = t2 ? t2.getSetter : Cr;
  };
  var rr = (function() {
    function e15(e16) {
      this.vars = e16, this._delay = +e16.delay || 0, (this._repeat = e16.repeat === 1 / 0 ? -2 : e16.repeat || 0) && (this._rDelay = e16.repeatDelay || 0, this._yoyo = !!e16.yoyo || !!e16.yoyoEase), this._ts = 1, $t(this, +e16.duration, 1, 1), this.data = e16.data, j && (this._ctx = j, j.data.push(this)), Hn || Un.wake();
    }
    var t2 = e15.prototype;
    return t2.delay = function(e16) {
      return e16 || e16 === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e16 - this._delay), this._delay = e16, this) : this._delay;
    }, t2.duration = function(e16) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? e16 + (e16 + this._rDelay) * this._repeat : e16) : this.totalDuration() && this._dur;
    }, t2.totalDuration = function(e16) {
      return arguments.length ? (this._dirty = 0, $t(this, this._repeat < 0 ? e16 : (e16 - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, t2.totalTime = function(e16, t3) {
      if (Wn(), !arguments.length) return this._tTime;
      var n2 = this._dp;
      if (n2 && n2.smoothChildTiming && this._ts) {
        for (Gt(this, e16), !n2._dp || n2.parent || Kt(n2, this); n2 && n2.parent; ) n2.parent._time !== n2._start + (n2._ts >= 0 ? n2._tTime / n2._ts : (n2.totalDuration() - n2._tTime) / -n2._ts) && n2.totalTime(n2._tTime, true), n2 = n2.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e16 < this._tDur || this._ts < 0 && e16 > 0 || !this._tDur && !e16) && qt(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== e16 || !this._dur && !t3 || this._initted && Math.abs(this._zTime) === M || !this._initted && this._dur && e16 || !e16 && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e16), wt(this, e16, t3)), this;
    }, t2.time = function(e16, t3) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e16 + Vt(this)) % (this._dur + this._rDelay) || (e16 ? this._dur : 0), t3) : this._time;
    }, t2.totalProgress = function(e16, t3) {
      return arguments.length ? this.totalTime(this.totalDuration() * e16, t3) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    }, t2.progress = function(e16, t3) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e16 : e16) + Vt(this), t3) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0);
    }, t2.iteration = function(e16, t3) {
      var n2 = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (e16 - 1) * n2, t3) : this._repeat ? Ht(this._tTime, n2) + 1 : 1;
    }, t2.timeScale = function(e16, t3) {
      if (!arguments.length) return this._rts === -M ? 0 : this._rts;
      if (this._rts === e16) return this;
      var n2 = this.parent && this._ts ? Ut(this.parent._time, this) : this._tTime;
      return this._rts = +e16 || 0, this._ts = this._ps || e16 === -M ? 0 : this._rts, this.totalTime(on(-Math.abs(this._delay), this.totalDuration(), n2), t3 !== false), Wt(this), Rt(this);
    }, t2.paused = function(e16) {
      return arguments.length ? (this._ps !== e16 && (this._ps = e16, e16 ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Wn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== M && (this._tTime -= M)))), this) : this._ps;
    }, t2.startTime = function(e16) {
      if (arguments.length) {
        this._start = yt(e16);
        var t3 = this.parent || this._dp;
        return t3 && (t3._sort || !this.parent) && qt(t3, this, this._start - this._delay), this;
      }
      return this._start;
    }, t2.endTime = function(e16) {
      return this._start + (Ae(e16) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, t2.rawTime = function(e16) {
      var t3 = this.parent || this._dp;
      return t3 ? e16 && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ut(t3.rawTime(e16), this) : this._tTime : this._tTime;
    }, t2.revert = function(e16) {
      e16 === void 0 && (e16 = it);
      var t3 = A;
      return A = e16, Ct(this) && (this.timeline && this.timeline.revert(e16), this.totalTime(-0.01, e16.suppressEvents)), this.data !== `nested` && e16.kill !== false && this.kill(), A = t3, this;
    }, t2.globalTime = function(e16) {
      for (var t3 = this, n2 = arguments.length ? e16 : t3.rawTime(); t3; ) n2 = t3._start + n2 / (Math.abs(t3._ts) || 1), t3 = t3._dp;
      return !this.parent && this._sat ? this._sat.globalTime(e16) : n2;
    }, t2.repeat = function(e16) {
      return arguments.length ? (this._repeat = e16 === 1 / 0 ? -2 : e16, en(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
    }, t2.repeatDelay = function(e16) {
      if (arguments.length) {
        var t3 = this._time;
        return this._rDelay = e16, en(this), t3 ? this.time(t3) : this;
      }
      return this._rDelay;
    }, t2.yoyo = function(e16) {
      return arguments.length ? (this._yoyo = e16, this) : this._yoyo;
    }, t2.seek = function(e16, t3) {
      return this.totalTime(nn(this, e16), Ae(t3));
    }, t2.restart = function(e16, t3) {
      return this.play().totalTime(e16 ? -this._delay : 0, Ae(t3)), this._dur || (this._zTime = -M), this;
    }, t2.play = function(e16, t3) {
      return e16 != null && this.seek(e16, t3), this.reversed(false).paused(false);
    }, t2.reverse = function(e16, t3) {
      return e16 != null && this.seek(e16 || this.totalDuration(), t3), this.reversed(true).paused(false);
    }, t2.pause = function(e16, t3) {
      return e16 != null && this.seek(e16, t3), this.paused(true);
    }, t2.resume = function() {
      return this.paused(false);
    }, t2.reversed = function(e16) {
      return arguments.length ? (!!e16 !== this.reversed() && this.timeScale(-this._rts || (e16 ? -M : 0)), this) : this._rts < 0;
    }, t2.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -M, this;
    }, t2.isActive = function() {
      var e16 = this.parent || this._dp, t3 = this._start, n2;
      return !!(!e16 || this._ts && this._initted && e16.isActive() && (n2 = e16.rawTime(true)) >= t3 && n2 < this.endTime(true) - M);
    }, t2.eventCallback = function(e16, t3, n2) {
      var r2 = this.vars;
      return arguments.length > 1 ? (t3 ? (r2[e16] = t3, n2 && (r2[e16 + `Params`] = n2), e16 === `onUpdate` && (this._onUpdate = t3)) : delete r2[e16], this) : r2[e16];
    }, t2.then = function(e16) {
      var t3 = this, n2 = t3._prom;
      return new Promise(function(r2) {
        var i2 = F(e16) ? e16 : Et, a2 = function() {
          var e17 = t3.then;
          t3.then = null, n2 && n2(), F(i2) && (i2 = i2(t3)) && (i2.then || i2 === t3) && (t3.then = e17), r2(i2), t3.then = e17;
        };
        t3._initted && t3.totalProgress() === 1 && t3._ts >= 0 || !t3._tTime && t3._ts < 0 ? a2() : t3._prom = a2;
      });
    }, t2.kill = function() {
      An(this);
    }, e15;
  })();
  Dt(rr.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -M, _prom: 0, _ps: false, _rts: 1 });
  var ir = (function(e15) {
    _e(t2, e15);
    function t2(t3, n3) {
      var r2;
      return t3 === void 0 && (t3 = {}), r2 = e15.call(this, t3) || this, r2.labels = {}, r2.smoothChildTiming = !!t3.smoothChildTiming, r2.autoRemoveChildren = !!t3.autoRemoveChildren, r2._sort = Ae(t3.sortChildren), We && qt(t3.parent || We, ge(r2), n3), t3.reversed && r2.reverse(), t3.paused && r2.paused(true), t3.scrollTrigger && Jt(ge(r2), t3.scrollTrigger), r2;
    }
    var n2 = t2.prototype;
    return n2.to = function(e16, t3, n3) {
      return rn(0, arguments, this), this;
    }, n2.from = function(e16, t3, n3) {
      return rn(1, arguments, this), this;
    }, n2.fromTo = function(e16, t3, n3, r2) {
      return rn(2, arguments, this), this;
    }, n2.set = function(e16, t3, n3) {
      return t3.duration = 0, t3.parent = this, Mt(t3).repeatDelay || (t3.repeat = 0), t3.immediateRender = !!t3.immediateRender, new vr(e16, t3, nn(this, n3), 1), this;
    }, n2.call = function(e16, t3, n3) {
      return qt(this, vr.delayedCall(0, e16, t3), n3);
    }, n2.staggerTo = function(e16, t3, n3, r2, i2, a2, o2) {
      return n3.duration = t3, n3.stagger = n3.stagger || r2, n3.onComplete = a2, n3.onCompleteParams = o2, n3.parent = this, new vr(e16, n3, nn(this, i2)), this;
    }, n2.staggerFrom = function(e16, t3, n3, r2, i2, a2, o2) {
      return n3.runBackwards = 1, Mt(n3).immediateRender = Ae(n3.immediateRender), this.staggerTo(e16, t3, n3, r2, i2, a2, o2);
    }, n2.staggerFromTo = function(e16, t3, n3, r2, i2, a2, o2, s2) {
      return r2.startAt = n3, Mt(r2).immediateRender = Ae(r2.immediateRender), this.staggerTo(e16, t3, r2, i2, a2, o2, s2);
    }, n2.render = function(e16, t3, n3) {
      var r2 = this._time, i2 = this._dirty ? this.totalDuration() : this._tDur, a2 = this._dur, o2 = e16 <= 0 ? 0 : yt(e16), s2 = this._zTime < 0 != e16 < 0 && (this._initted || !a2), c2, l2, u2, d2, f, p2, m, h2, g2, _3, v3, y3;
      if (this !== We && o2 > i2 && e16 >= 0 && (o2 = i2), o2 !== this._tTime || n3 || s2) {
        if (r2 !== this._time && a2 && (o2 += this._time - r2, e16 += this._time - r2), c2 = o2, g2 = this._start, h2 = this._ts, p2 = !h2, s2 && (a2 || (r2 = this._zTime), (e16 || !t3) && (this._zTime = e16)), this._repeat) {
          if (v3 = this._yoyo, f = a2 + this._rDelay, this._repeat < -1 && e16 < 0) return this.totalTime(f * 100 + e16, t3, n3);
          if (c2 = yt(o2 % f), o2 === i2 ? (d2 = this._repeat, c2 = a2) : (_3 = yt(o2 / f), d2 = ~~_3, d2 && d2 === _3 && (c2 = a2, d2--), c2 > a2 && (c2 = a2)), _3 = Ht(this._tTime, f), !r2 && this._tTime && _3 !== d2 && this._tTime - _3 * f - this._dur <= 0 && (_3 = d2), v3 && d2 & 1 && (c2 = a2 - c2, y3 = 1), d2 !== _3 && !this._lock) {
            var b3 = v3 && _3 & 1, x2 = b3 === (v3 && d2 & 1);
            if (d2 < _3 && (b3 = !b3), r2 = b3 ? 0 : o2 % a2 ? a2 : o2, this._lock = 1, this.render(r2 || (y3 ? 0 : yt(d2 * f)), t3, !a2)._lock = 0, this._tTime = o2, !t3 && this.parent && kn(this, `onRepeat`), this.vars.repeatRefresh && !y3 && (this.invalidate()._lock = 1, _3 = d2), r2 && r2 !== this._time || p2 !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (a2 = this._dur, i2 = this._tDur, x2 && (this._lock = 2, r2 = b3 ? a2 : -1e-4, this.render(r2, true), this.vars.repeatRefresh && !y3 && this.invalidate()), this._lock = 0, !this._ts && !p2)) return this;
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (m = Qt(this, yt(r2), yt(c2)), m && (o2 -= c2 - (c2 = m._start))), this._tTime = o2, this._time = c2, this._act = !!h2, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e16, r2 = 0), !r2 && o2 && a2 && !t3 && !_3 && (kn(this, `onStart`), this._tTime !== o2)) return this;
        if (c2 >= r2 && e16 >= 0) for (l2 = this._first; l2; ) {
          if (u2 = l2._next, (l2._act || c2 >= l2._start) && l2._ts && m !== l2) {
            if (l2.parent !== this) return this.render(e16, t3, n3);
            if (l2.render(l2._ts > 0 ? (c2 - l2._start) * l2._ts : (l2._dirty ? l2.totalDuration() : l2._tDur) + (c2 - l2._start) * l2._ts, t3, n3), c2 !== this._time || !this._ts && !p2) {
              m = 0, u2 && (o2 += this._zTime = -M);
              break;
            }
          }
          l2 = u2;
        }
        else {
          l2 = this._last;
          for (var S2 = e16 < 0 ? e16 : c2; l2; ) {
            if (u2 = l2._prev, (l2._act || S2 <= l2._end) && l2._ts && m !== l2) {
              if (l2.parent !== this) return this.render(e16, t3, n3);
              if (l2.render(l2._ts > 0 ? (S2 - l2._start) * l2._ts : (l2._dirty ? l2.totalDuration() : l2._tDur) + (S2 - l2._start) * l2._ts, t3, n3 || A && Ct(l2)), c2 !== this._time || !this._ts && !p2) {
                m = 0, u2 && (o2 += this._zTime = S2 ? -M : M);
                break;
              }
            }
            l2 = u2;
          }
        }
        if (m && !t3 && (this.pause(), m.render(c2 >= r2 ? 0 : -M)._zTime = c2 >= r2 ? 1 : -1, this._ts)) return this._start = g2, Wt(this), this.render(e16, t3, n3);
        this._onUpdate && !t3 && kn(this, `onUpdate`, true), (o2 === i2 && this._tTime >= this.totalDuration() || !o2 && r2) && (g2 === this._start || Math.abs(h2) !== Math.abs(this._ts)) && (this._lock || ((e16 || !a2) && (o2 === i2 && this._ts > 0 || !o2 && this._ts < 0) && It(this, 1), !t3 && !(e16 < 0 && !r2) && (o2 || r2 || !i2) && (kn(this, o2 === i2 && e16 >= 0 ? `onComplete` : `onReverseComplete`, true), this._prom && !(o2 < i2 && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, n2.add = function(e16, t3) {
      var n3 = this;
      if (De(t3) || (t3 = nn(this, t3, e16)), !(e16 instanceof rr)) {
        if (Pe(e16)) return e16.forEach(function(e17) {
          return n3.add(e17, t3);
        }), this;
        if (P(e16)) return this.addLabel(e16, t3);
        if (F(e16)) e16 = vr.delayedCall(0, e16);
        else return this;
      }
      return this === e16 ? this : qt(this, e16, t3);
    }, n2.getChildren = function(e16, t3, n3, r2) {
      e16 === void 0 && (e16 = true), t3 === void 0 && (t3 = true), n3 === void 0 && (n3 = true), r2 === void 0 && (r2 = -xe);
      for (var i2 = [], a2 = this._first; a2; ) a2._start >= r2 && (a2 instanceof vr ? t3 && i2.push(a2) : (n3 && i2.push(a2), e16 && i2.push.apply(i2, a2.getChildren(true, t3, n3)))), a2 = a2._next;
      return i2;
    }, n2.getById = function(e16) {
      for (var t3 = this.getChildren(1, 1, 1), n3 = t3.length; n3--; ) if (t3[n3].vars.id === e16) return t3[n3];
    }, n2.remove = function(e16) {
      return P(e16) ? this.removeLabel(e16) : F(e16) ? this.killTweensOf(e16) : (e16.parent === this && Ft(this, e16), e16 === this._recent && (this._recent = this._last), Lt(this));
    }, n2.totalTime = function(t3, n3) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = yt(Un.time - (this._ts > 0 ? t3 / this._ts : (this.totalDuration() - t3) / -this._ts))), e15.prototype.totalTime.call(this, t3, n3), this._forcing = 0, this) : this._tTime;
    }, n2.addLabel = function(e16, t3) {
      return this.labels[e16] = nn(this, t3), this;
    }, n2.removeLabel = function(e16) {
      return delete this.labels[e16], this;
    }, n2.addPause = function(e16, t3, n3) {
      var r2 = vr.delayedCall(0, t3 || tt, n3);
      return r2.data = `isPause`, this._hasPause = 1, qt(this, r2, nn(this, e16));
    }, n2.removePause = function(e16) {
      var t3 = this._first;
      for (e16 = nn(this, e16); t3; ) t3._start === e16 && t3.data === `isPause` && It(t3), t3 = t3._next;
    }, n2.killTweensOf = function(e16, t3, n3) {
      for (var r2 = this.getTweensOf(e16, n3), i2 = r2.length; i2--; ) lr !== r2[i2] && r2[i2].kill(e16, t3);
      return this;
    }, n2.getTweensOf = function(e16, t3) {
      for (var n3 = [], r2 = fn(e16), i2 = this._first, a2 = De(t3), o2; i2; ) i2 instanceof vr ? xt(i2._targets, r2) && (a2 ? (!lr || i2._initted && i2._ts) && i2.globalTime(0) <= t3 && i2.globalTime(i2.totalDuration()) > t3 : !t3 || i2.isActive()) && n3.push(i2) : (o2 = i2.getTweensOf(r2, t3)).length && n3.push.apply(n3, o2), i2 = i2._next;
      return n3;
    }, n2.tweenTo = function(e16, t3) {
      t3 ||= {};
      var n3 = this, r2 = nn(n3, e16), i2 = t3, a2 = i2.startAt, o2 = i2.onStart, s2 = i2.onStartParams, c2 = i2.immediateRender, l2, u2 = vr.to(n3, Dt({ ease: t3.ease || `none`, lazy: false, immediateRender: false, time: r2, overwrite: `auto`, duration: t3.duration || Math.abs((r2 - (a2 && `time` in a2 ? a2.time : n3._time)) / n3.timeScale()) || M, onStart: function() {
        if (n3.pause(), !l2) {
          var e17 = t3.duration || Math.abs((r2 - (a2 && `time` in a2 ? a2.time : n3._time)) / n3.timeScale());
          u2._dur !== e17 && $t(u2, e17, 0, 1).render(u2._time, true, true), l2 = 1;
        }
        o2 && o2.apply(u2, s2 || []);
      } }, t3));
      return c2 ? u2.render(0) : u2;
    }, n2.tweenFromTo = function(e16, t3, n3) {
      return this.tweenTo(t3, Dt({ startAt: { time: nn(this, e16) } }, n3));
    }, n2.recent = function() {
      return this._recent;
    }, n2.nextLabel = function(e16) {
      return e16 === void 0 && (e16 = this._time), On(this, nn(this, e16));
    }, n2.previousLabel = function(e16) {
      return e16 === void 0 && (e16 = this._time), On(this, nn(this, e16), 1);
    }, n2.currentLabel = function(e16) {
      return arguments.length ? this.seek(e16, true) : this.previousLabel(this._time + M);
    }, n2.shiftChildren = function(e16, t3, n3) {
      n3 === void 0 && (n3 = 0);
      var r2 = this._first, i2 = this.labels, a2;
      for (e16 = yt(e16); r2; ) r2._start >= n3 && (r2._start += e16, r2._end += e16), r2 = r2._next;
      if (t3) for (a2 in i2) i2[a2] >= n3 && (i2[a2] += e16);
      return Lt(this);
    }, n2.invalidate = function(t3) {
      var n3 = this._first;
      for (this._lock = 0; n3; ) n3.invalidate(t3), n3 = n3._next;
      return e15.prototype.invalidate.call(this, t3);
    }, n2.clear = function(e16) {
      e16 === void 0 && (e16 = true);
      for (var t3 = this._first, n3; t3; ) n3 = t3._next, this.remove(t3), t3 = n3;
      return this._dp && (this._time = this._tTime = this._pTime = 0), e16 && (this.labels = {}), Lt(this);
    }, n2.totalDuration = function(e16) {
      var t3 = 0, n3 = this, r2 = n3._last, i2 = xe, a2, o2, s2;
      if (arguments.length) return n3.timeScale((n3._repeat < 0 ? n3.duration() : n3.totalDuration()) / (n3.reversed() ? -e16 : e16));
      if (n3._dirty) {
        for (s2 = n3.parent; r2; ) a2 = r2._prev, r2._dirty && r2.totalDuration(), o2 = r2._start, o2 > i2 && n3._sort && r2._ts && !n3._lock ? (n3._lock = 1, qt(n3, r2, o2 - r2._delay, 1)._lock = 0) : i2 = o2, o2 < 0 && r2._ts && (t3 -= o2, (!s2 && !n3._dp || s2 && s2.smoothChildTiming) && (n3._start += yt(o2 / n3._ts), n3._time -= o2, n3._tTime -= o2), n3.shiftChildren(-o2, false, -1 / 0), i2 = 0), r2._end > t3 && r2._ts && (t3 = r2._end), r2 = a2;
        $t(n3, n3 === We && n3._time > t3 ? n3._time : t3, 1, 1), n3._dirty = 0;
      }
      return n3._tDur;
    }, t2.updateRoot = function(e16) {
      if (We._ts && (wt(We, Ut(e16, We)), ct = Un.frame), Un.frame >= dt) {
        dt += ve.autoSleep || 120;
        var t3 = We._first;
        if ((!t3 || !t3._ts) && ve.autoSleep && Un._listeners.length < 2) {
          for (; t3 && !t3._ts; ) t3 = t3._next;
          t3 || Un.sleep();
        }
      }
    }, t2;
  })(rr);
  Dt(ir.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var ar = function(e15, t2, n2, r2, i2, a2, o2) {
    var s2 = new Mr(this._pt, e15, t2, 0, 1, Er, null, i2), c2 = 0, l2 = 0, u2, d2, f, p2, m, h2, g2, _3;
    for (s2.b = n2, s2.e = r2, n2 += ``, r2 += ``, (g2 = ~r2.indexOf(`random(`)) && (r2 = Tn(r2)), a2 && (_3 = [n2, r2], a2(_3, e15, t2), n2 = _3[0], r2 = _3[1]), d2 = n2.match(Be) || []; u2 = Be.exec(r2); ) p2 = u2[0], m = r2.substring(c2, u2.index), f ? f = (f + 1) % 5 : m.substr(-5) === `rgba(` && (f = 1), p2 !== d2[l2++] && (h2 = parseFloat(d2[l2 - 1]) || 0, s2._pt = { _next: s2._pt, p: m || l2 === 1 ? m : `,`, s: h2, c: p2.charAt(1) === `=` ? bt(h2, p2) - h2 : parseFloat(p2) - h2, m: f && f < 4 ? Math.round : 0 }, c2 = Be.lastIndex);
    return s2.c = c2 < r2.length ? r2.substring(c2, r2.length) : ``, s2.fp = o2, (Ve.test(r2) || g2) && (s2.e = 0), this._pt = s2, s2;
  };
  var or = function(e15, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    F(r2) && (r2 = r2(i2 || 0, e15, a2));
    var u2 = e15[t2], d2 = n2 === `get` ? F(u2) ? c2 ? e15[t2.indexOf(`set`) || !F(e15[`get` + t2.substr(3)]) ? t2 : `get` + t2.substr(3)](c2) : e15[t2]() : u2 : n2, f = F(u2) ? c2 ? xr : br : yr, p2;
    if (P(r2) && (~r2.indexOf(`random(`) && (r2 = Tn(r2)), r2.charAt(1) === `=` && (p2 = bt(d2, r2) + (sn(d2) || 0), (p2 || p2 === 0) && (r2 = p2))), !l2 || d2 !== r2 || ur) return !isNaN(d2 * r2) && r2 !== `` ? (p2 = new Mr(this._pt, e15, t2, +d2 || 0, r2 - (d2 || 0), typeof u2 == `boolean` ? Tr : wr, 0, f), c2 && (p2.fp = c2), o2 && p2.modifier(o2, this, e15), this._pt = p2) : (!u2 && !(t2 in e15) && Qe(t2, r2), ar.call(this, e15, t2, d2, r2, f, s2 || ve.stringFilter, c2));
  };
  var sr = function(e15, t2, n2, r2, i2) {
    if (F(e15) && (e15 = hr(e15, i2, t2, n2, r2)), !ke(e15) || e15.style && e15.nodeType || Pe(e15) || Ne(e15)) return P(e15) ? hr(e15, i2, t2, n2, r2) : e15;
    var a2 = {}, o2;
    for (o2 in e15) a2[o2] = hr(e15[o2], i2, t2, n2, r2);
    return a2;
  };
  var cr = function(e15, t2, n2, r2, i2, a2) {
    var o2, s2, c2, l2;
    if (lt[e15] && (o2 = new lt[e15]()).init(i2, o2.rawVars ? t2[e15] : sr(t2[e15], r2, i2, a2, n2), n2, r2, a2) !== false && (n2._pt = s2 = new Mr(n2._pt, i2, e15, 0, 1, o2.render, o2, 0, o2.priority), n2 !== jn)) for (c2 = n2._ptLookup[n2._targets.indexOf(i2)], l2 = o2._props.length; l2--; ) c2[o2._props[l2]] = s2;
    return o2;
  };
  var lr;
  var ur;
  var dr = function e11(t2, n2, r2) {
    var i2 = t2.vars, a2 = i2.ease, o2 = i2.startAt, s2 = i2.immediateRender, c2 = i2.lazy, l2 = i2.onUpdate, u2 = i2.runBackwards, d2 = i2.yoyoEase, f = i2.keyframes, p2 = i2.autoRevert, m = t2._dur, h2 = t2._startAt, g2 = t2._targets, _3 = t2.parent, v3 = _3 && _3.data === `nested` ? _3.vars.targets : g2, y3 = t2._overwrite === `auto` && !be, b3 = t2.timeline, x2 = i2.easeReverse || d2, S2, C2, w2, T2, E3, D2, O3, k2, ee, te3, ne3, re3, ie3;
    if (b3 && (!f || !a2) && (a2 = `none`), t2._ease = Zn(a2, ye.ease), t2._rEase = x2 && (Zn(x2) || t2._ease), t2._from = !b3 && !!i2.runBackwards, t2._from && (t2.ratio = 1), !b3 || f && !i2.stagger) {
      if (k2 = g2[0] ? ht(g2[0]).harness : 0, re3 = k2 && i2[k2.prop], S2 = jt(i2, at), h2 && (h2._zTime < 0 && h2.progress(1), n2 < 0 && u2 && s2 && !p2 ? h2.render(-1, true) : h2.revert(u2 && m ? rt : nt), h2._lazy = 0), o2) {
        if (It(t2._startAt = vr.set(g2, Dt({ data: `isStart`, overwrite: false, parent: _3, immediateRender: true, lazy: !h2 && Ae(c2), startAt: null, delay: 0, onUpdate: l2 && function() {
          return kn(t2, `onUpdate`);
        }, stagger: 0 }, o2))), t2._startAt._dp = 0, t2._startAt._sat = t2, n2 < 0 && (A || !s2 && !p2) && t2._startAt.revert(rt), s2 && m && n2 <= 0 && r2 <= 0) {
          n2 && (t2._zTime = n2);
          return;
        }
      } else if (u2 && m && !h2) {
        if (n2 && (s2 = false), w2 = Dt({ overwrite: false, data: `isFromStart`, lazy: s2 && !h2 && Ae(c2), immediateRender: s2, stagger: 0, parent: _3 }, S2), re3 && (w2[k2.prop] = re3), It(t2._startAt = vr.set(g2, w2)), t2._startAt._dp = 0, t2._startAt._sat = t2, n2 < 0 && (A ? t2._startAt.revert(rt) : t2._startAt.render(-1, true)), t2._zTime = n2, !s2) e11(t2._startAt, M, M);
        else if (!n2) return;
      }
      for (t2._pt = t2._ptCache = 0, c2 = m && Ae(c2) || c2 && !m, C2 = 0; C2 < g2.length; C2++) {
        if (E3 = g2[C2], O3 = E3._gsap || mt(g2)[C2]._gsap, t2._ptLookup[C2] = te3 = {}, st[O3.id] && ot.length && St(), ne3 = v3 === g2 ? C2 : v3.indexOf(E3), k2 && (ee = new k2()).init(E3, re3 || S2, t2, ne3, v3) !== false && (t2._pt = T2 = new Mr(t2._pt, E3, ee.name, 0, 1, ee.render, ee, 0, ee.priority), ee._props.forEach(function(e15) {
          te3[e15] = T2;
        }), ee.priority && (D2 = 1)), !k2 || re3) for (w2 in S2) lt[w2] && (ee = cr(w2, S2, t2, ne3, E3, v3)) ? ee.priority && (D2 = 1) : te3[w2] = T2 = or.call(t2, E3, w2, `get`, S2[w2], ne3, v3, 0, i2.stringFilter);
        t2._op && t2._op[C2] && t2.kill(E3, t2._op[C2]), y3 && t2._pt && (lr = t2, We.killTweensOf(E3, te3, t2.globalTime(n2)), ie3 = !t2.parent, lr = 0), t2._pt && c2 && (st[O3.id] = 1);
      }
      D2 && jr(t2), t2._onInit && t2._onInit(t2);
    }
    t2._onUpdate = l2, t2._initted = (!t2._op || t2._pt) && !ie3, f && n2 <= 0 && b3.render(xe, true, true);
  };
  var fr = function(e15, t2, n2, r2, i2, a2, o2, s2) {
    var c2 = (e15._pt && e15._ptCache || (e15._ptCache = {}))[t2], l2, u2, d2, f;
    if (!c2) for (c2 = e15._ptCache[t2] = [], d2 = e15._ptLookup, f = e15._targets.length; f--; ) {
      if (l2 = d2[f][t2], l2 && l2.d && l2.d._pt) for (l2 = l2.d._pt; l2 && l2.p !== t2 && l2.fp !== t2; ) l2 = l2._next;
      if (!l2) return ur = 1, e15.vars[t2] = `+=0`, dr(e15, o2), ur = 0, s2 ? $e(t2 + ` not eligible for reset. Try splitting into individual properties`) : 1;
      c2.push(l2);
    }
    for (f = c2.length; f--; ) u2 = c2[f], l2 = u2._pt || u2, l2.s = (r2 || r2 === 0) && !i2 ? r2 : l2.s + (r2 || 0) + a2 * l2.c, l2.c = n2 - l2.s, u2.e &&= vt(n2) + sn(u2.e), u2.b &&= l2.s + sn(u2.b);
  };
  var pr = function(e15, t2) {
    var n2 = e15[0] ? ht(e15[0]).harness : 0, r2 = n2 && n2.aliases, i2, a2, o2, s2;
    if (!r2) return t2;
    for (a2 in i2 = kt({}, t2), r2) if (a2 in i2) for (s2 = r2[a2].split(`,`), o2 = s2.length; o2--; ) i2[s2[o2]] = i2[a2];
    return i2;
  };
  var mr = function(e15, t2, n2, r2) {
    var i2 = t2.ease || r2 || `power1.inOut`, a2, o2;
    if (Pe(t2)) o2 = n2[e15] || (n2[e15] = []), t2.forEach(function(e16, n3) {
      return o2.push({ t: n3 / (t2.length - 1) * 100, v: e16, e: i2 });
    });
    else for (a2 in t2) o2 = n2[a2] || (n2[a2] = []), a2 === `ease` || o2.push({ t: parseFloat(e15), v: t2[a2], e: i2 });
  };
  var hr = function(e15, t2, n2, r2, i2) {
    return F(e15) ? e15.call(t2, n2, r2, i2) : P(e15) && ~e15.indexOf(`random(`) ? Tn(e15) : e15;
  };
  var gr = pt + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`;
  var _r = {};
  _t(gr + `,id,stagger,delay,duration,paused,scrollTrigger`, function(e15) {
    return _r[e15] = 1;
  });
  var vr = (function(e15) {
    _e(t2, e15);
    function t2(t3, n3, r2, i2) {
      var a2;
      typeof n3 == `number` && (r2.duration = n3, n3 = r2, r2 = null), a2 = e15.call(this, i2 ? n3 : Mt(n3)) || this;
      var o2 = a2.vars, s2 = o2.duration, c2 = o2.delay, l2 = o2.immediateRender, u2 = o2.stagger, d2 = o2.overwrite, f = o2.keyframes, p2 = o2.defaults, m = o2.scrollTrigger, h2 = n3.parent || We, g2 = (Pe(t3) || Ne(t3) ? De(t3[0]) : `length` in n3) ? [t3] : fn(t3), _3, v3, y3, b3, x2, S2, C2, w2;
      if (a2._targets = g2.length ? mt(g2) : $e(`GSAP target ` + t3 + ` not found. https://gsap.com`, !ve.nullTargetWarn) || [], a2._ptLookup = [], a2._overwrite = d2, f || u2 || Me(s2) || Me(c2)) {
        n3 = a2.vars;
        var T2 = n3.easeReverse || n3.yoyoEase;
        if (_3 = a2.timeline = new ir({ data: `nested`, defaults: p2 || {}, targets: h2 && h2.data === `nested` ? h2.vars.targets : g2 }), _3.kill(), _3.parent = _3._dp = ge(a2), _3._start = 0, u2 || Me(s2) || Me(c2)) {
          if (b3 = g2.length, C2 = u2 && hn(u2), ke(u2)) for (x2 in u2) ~gr.indexOf(x2) && (w2 ||= {}, w2[x2] = u2[x2]);
          for (v3 = 0; v3 < b3; v3++) y3 = jt(n3, _r), y3.stagger = 0, T2 && (y3.easeReverse = T2), w2 && kt(y3, w2), S2 = g2[v3], y3.duration = +hr(s2, ge(a2), v3, S2, g2), y3.delay = (+hr(c2, ge(a2), v3, S2, g2) || 0) - a2._delay, !u2 && b3 === 1 && y3.delay && (a2._delay = c2 = y3.delay, a2._start += c2, y3.delay = 0), _3.to(S2, y3, C2 ? C2(v3, S2, g2) : 0), _3._ease = R.none;
          _3.duration() ? s2 = c2 = 0 : a2.timeline = 0;
        } else if (f) {
          Mt(Dt(_3.vars.defaults, { ease: `none` })), _3._ease = Zn(f.ease || n3.ease || `none`);
          var E3 = 0, D2, O3, k2;
          if (Pe(f)) f.forEach(function(e16) {
            return _3.to(g2, e16, `>`);
          }), _3.duration();
          else {
            for (x2 in y3 = {}, f) x2 === `ease` || x2 === `easeEach` || mr(x2, f[x2], y3, f.easeEach);
            for (x2 in y3) for (D2 = y3[x2].sort(function(e16, t4) {
              return e16.t - t4.t;
            }), E3 = 0, v3 = 0; v3 < D2.length; v3++) O3 = D2[v3], k2 = { ease: O3.e, duration: (O3.t - (v3 ? D2[v3 - 1].t : 0)) / 100 * s2 }, k2[x2] = O3.v, _3.to(g2, k2, E3), E3 += k2.duration;
            _3.duration() < s2 && _3.to({}, { duration: s2 - _3.duration() });
          }
        }
        s2 || a2.duration(s2 = _3.duration());
      } else a2.timeline = 0;
      return d2 === true && !be && (lr = ge(a2), We.killTweensOf(g2), lr = 0), qt(h2, ge(a2), r2), n3.reversed && a2.reverse(), n3.paused && a2.paused(true), (l2 || !s2 && !f && a2._start === yt(h2._time) && Ae(l2) && Bt(ge(a2)) && h2.data !== `nested`) && (a2._tTime = -M, a2.render(Math.max(0, -c2) || 0)), m && Jt(ge(a2), m), a2;
    }
    var n2 = t2.prototype;
    return n2.render = function(e16, t3, n3) {
      var r2 = this._time, i2 = this._tDur, a2 = this._dur, o2 = e16 < 0, s2 = e16 > i2 - M && !o2 ? i2 : e16 < M ? 0 : e16, c2, l2, u2, d2, f, p2, m, h2;
      if (!a2) Zt(this, e16, t3, n3);
      else if (s2 !== this._tTime || !e16 || n3 || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o2 || this._lazy) {
        if (c2 = s2, h2 = this.timeline, this._repeat) {
          if (d2 = a2 + this._rDelay, this._repeat < -1 && o2) return this.totalTime(d2 * 100 + e16, t3, n3);
          if (c2 = yt(s2 % d2), s2 === i2 ? (u2 = this._repeat, c2 = a2) : (f = yt(s2 / d2), u2 = ~~f, u2 && u2 === f ? (c2 = a2, u2--) : c2 > a2 && (c2 = a2)), p2 = this._yoyo && u2 & 1, p2 && (c2 = a2 - c2), f = Ht(this._tTime, d2), c2 === r2 && !n3 && this._initted && u2 === f) return this._tTime = s2, this;
          u2 !== f && this.vars.repeatRefresh && !p2 && !this._lock && c2 !== d2 && this._initted && (this._lock = n3 = 1, this.render(yt(d2 * u2), true).invalidate()._lock = 0);
        }
        if (!this._initted) {
          if (I(this, o2 ? e16 : c2, n3, t3, s2)) return this._tTime = 0, this;
          if (r2 !== this._time && !(n3 && this.vars.repeatRefresh && u2 !== f)) return this;
          if (a2 !== this._dur) return this.render(e16, t3, n3);
        }
        if (this._rEase) {
          var g2 = c2 < r2;
          if (g2 !== this._inv) {
            var _3 = g2 ? r2 : a2 - r2;
            this._inv = g2, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = r2, this._invRecip = _3 ? (g2 ? -1 : 1) / _3 : 0, this._invScale = g2 ? -this.ratio : 1 - this.ratio, this._invEase = g2 ? this._rEase : this._ease;
          }
          this.ratio = m = this._invRatio + this._invScale * this._invEase((c2 - this._invTime) * this._invRecip);
        } else this.ratio = m = this._ease(c2 / a2);
        if (this._from && (this.ratio = m = 1 - m), this._tTime = s2, this._time = c2, !this._act && this._ts && (this._act = 1, this._lazy = 0), !r2 && s2 && !t3 && !f && (kn(this, `onStart`), this._tTime !== s2)) return this;
        for (l2 = this._pt; l2; ) l2.r(m, l2.d), l2 = l2._next;
        h2 && h2.render(e16 < 0 ? e16 : h2._dur * h2._ease(c2 / this._dur), t3, n3) || this._startAt && (this._zTime = e16), this._onUpdate && !t3 && (o2 && zt(this, e16, t3, n3), kn(this, `onUpdate`)), this._repeat && u2 !== f && this.vars.onRepeat && !t3 && this.parent && kn(this, `onRepeat`), (s2 === this._tDur || !s2) && this._tTime === s2 && (o2 && !this._onUpdate && zt(this, e16, true, true), (e16 || !a2) && (s2 === this._tDur && this._ts > 0 || !s2 && this._ts < 0) && It(this, 1), !t3 && !(o2 && !r2) && (s2 || r2 || p2) && (kn(this, s2 === i2 ? `onComplete` : `onReverseComplete`, true), this._prom && !(s2 < i2 && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, n2.targets = function() {
      return this._targets;
    }, n2.invalidate = function(t3) {
      return (!t3 || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t3), e15.prototype.invalidate.call(this, t3);
    }, n2.resetTo = function(e16, t3, n3, r2, i2) {
      Hn || Un.wake(), this._ts || this.play();
      var a2 = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o2;
      return this._initted || dr(this, a2), o2 = this._ease(a2 / this._dur), fr(this, e16, t3, n3, r2, o2, a2, i2) ? this.resetTo(e16, t3, n3, r2, 1) : (Gt(this, 0), this.parent || Pt(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0), this.render(0));
    }, n2.kill = function(e16, t3) {
      if (t3 === void 0 && (t3 = `all`), !e16 && (!t3 || t3 === `all`)) return this._lazy = this._pt = 0, this.parent ? An(this) : this.scrollTrigger && this.scrollTrigger.kill(!!A), this;
      if (this.timeline) {
        var n3 = this.timeline.totalDuration();
        return this.timeline.killTweensOf(e16, t3, lr && lr.vars.overwrite !== true)._first || An(this), this.parent && n3 !== this.timeline.totalDuration() && $t(this, this._dur * this.timeline._tDur / n3, 0, 1), this;
      }
      var r2 = this._targets, i2 = e16 ? fn(e16) : r2, a2 = this._ptLookup, o2 = this._pt, s2, c2, l2, u2, d2, f, p2;
      if ((!t3 || t3 === `all`) && Nt(r2, i2)) return t3 === `all` && (this._pt = 0), An(this);
      for (s2 = this._op = this._op || [], t3 !== `all` && (P(t3) && (d2 = {}, _t(t3, function(e17) {
        return d2[e17] = 1;
      }), t3 = d2), t3 = pr(r2, t3)), p2 = r2.length; p2--; ) if (~i2.indexOf(r2[p2])) for (d2 in c2 = a2[p2], t3 === `all` ? (s2[p2] = t3, u2 = c2, l2 = {}) : (l2 = s2[p2] = s2[p2] || {}, u2 = t3), u2) f = c2 && c2[d2], f && ((!(`kill` in f.d) || f.d.kill(d2) === true) && Ft(this, f, `_pt`), delete c2[d2]), l2 !== `all` && (l2[d2] = 1);
      return this._initted && !this._pt && o2 && An(this), this;
    }, t2.to = function(e16, n3) {
      return new t2(e16, n3, arguments[2]);
    }, t2.from = function(e16, t3) {
      return rn(1, arguments);
    }, t2.delayedCall = function(e16, n3, r2, i2) {
      return new t2(n3, 0, { immediateRender: false, lazy: false, overwrite: false, delay: e16, onComplete: n3, onReverseComplete: n3, onCompleteParams: r2, onReverseCompleteParams: r2, callbackScope: i2 });
    }, t2.fromTo = function(e16, t3, n3) {
      return rn(2, arguments);
    }, t2.set = function(e16, n3) {
      return n3.duration = 0, n3.repeatDelay || (n3.repeat = 0), new t2(e16, n3);
    }, t2.killTweensOf = function(e16, t3, n3) {
      return We.killTweensOf(e16, t3, n3);
    }, t2;
  })(rr);
  Dt(vr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), _t(`staggerTo,staggerFrom,staggerFromTo`, function(e15) {
    vr[e15] = function() {
      var t2 = new ir(), n2 = ln.call(arguments, 0);
      return n2.splice(e15 === `staggerFromTo` ? 5 : 4, 0, 0), t2[e15].apply(t2, n2);
    };
  });
  var yr = function(e15, t2, n2) {
    return e15[t2] = n2;
  };
  var br = function(e15, t2, n2) {
    return e15[t2](n2);
  };
  var xr = function(e15, t2, n2, r2) {
    return e15[t2](r2.fp, n2);
  };
  var Sr = function(e15, t2, n2) {
    return e15.setAttribute(t2, n2);
  };
  var Cr = function(e15, t2) {
    return F(e15[t2]) ? br : Oe(e15[t2]) && e15.setAttribute ? Sr : yr;
  };
  var wr = function(e15, t2) {
    return t2.set(t2.t, t2.p, Math.round((t2.s + t2.c * e15) * 1e6) / 1e6, t2);
  };
  var Tr = function(e15, t2) {
    return t2.set(t2.t, t2.p, !!(t2.s + t2.c * e15), t2);
  };
  var Er = function(e15, t2) {
    var n2 = t2._pt, r2 = ``;
    if (!e15 && t2.b) r2 = t2.b;
    else if (e15 === 1 && t2.e) r2 = t2.e;
    else {
      for (; n2; ) r2 = n2.p + (n2.m ? n2.m(n2.s + n2.c * e15) : Math.round((n2.s + n2.c * e15) * 1e4) / 1e4) + r2, n2 = n2._next;
      r2 += t2.c;
    }
    t2.set(t2.t, t2.p, r2, t2);
  };
  var Dr = function(e15, t2) {
    for (var n2 = t2._pt; n2; ) n2.r(e15, n2.d), n2 = n2._next;
  };
  var Or = function(e15, t2, n2, r2) {
    for (var i2 = this._pt, a2; i2; ) a2 = i2._next, i2.p === r2 && i2.modifier(e15, t2, n2), i2 = a2;
  };
  var kr = function(e15) {
    for (var t2 = this._pt, n2, r2; t2; ) r2 = t2._next, t2.p === e15 && !t2.op || t2.op === e15 ? Ft(this, t2, `_pt`) : t2.dep || (n2 = 1), t2 = r2;
    return !n2;
  };
  var Ar = function(e15, t2, n2, r2) {
    r2.mSet(e15, t2, r2.m.call(r2.tween, n2, r2.mt), r2);
  };
  var jr = function(e15) {
    for (var t2 = e15._pt, n2, r2, i2, a2; t2; ) {
      for (n2 = t2._next, r2 = i2; r2 && r2.pr > t2.pr; ) r2 = r2._next;
      (t2._prev = r2 ? r2._prev : a2) ? t2._prev._next = t2 : i2 = t2, (t2._next = r2) ? r2._prev = t2 : a2 = t2, t2 = n2;
    }
    e15._pt = i2;
  };
  var Mr = (function() {
    function e15(e16, t3, n2, r2, i2, a2, o2, s2, c2) {
      this.t = t3, this.s = r2, this.c = i2, this.p = n2, this.r = a2 || wr, this.d = o2 || this, this.set = s2 || yr, this.pr = c2 || 0, this._next = e16, e16 && (e16._prev = this);
    }
    var t2 = e15.prototype;
    return t2.modifier = function(e16, t3, n2) {
      this.mSet = this.mSet || this.set, this.set = Ar, this.m = e16, this.mt = n2, this.tween = t3;
    }, e15;
  })();
  _t(pt + `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`, function(e15) {
    return at[e15] = 1;
  }), Je.TweenMax = Je.TweenLite = vr, Je.TimelineLite = Je.TimelineMax = ir, We = new ir({ sortChildren: false, defaults: ye, autoRemoveChildren: true, id: `root`, smoothChildTiming: true }), ve.stringFilter = Vn;
  var Nr = [];
  var Pr = {};
  var Fr = [];
  var Ir = 0;
  var Lr = 0;
  var Rr = function(e15) {
    return (Pr[e15] || Fr).map(function(e16) {
      return e16();
    });
  };
  var zr = function() {
    var e15 = Date.now(), t2 = [];
    e15 - Ir > 2 && (Rr(`matchMediaInit`), Nr.forEach(function(e16) {
      var n2 = e16.queries, r2 = e16.conditions, i2, a2, o2, s2;
      for (a2 in n2) i2 = Ge.matchMedia(n2[a2]).matches, i2 && (o2 = 1), i2 !== r2[a2] && (r2[a2] = i2, s2 = 1);
      s2 && (e16.revert(), o2 && t2.push(e16));
    }), Rr(`matchMediaRevert`), t2.forEach(function(e16) {
      return e16.onMatch(e16, function(t3) {
        return e16.add(null, t3);
      });
    }), Ir = e15, Rr(`matchMedia`));
  };
  var Br = (function() {
    function e15(e16, t3) {
      this.selector = t3 && pn(t3), this.data = [], this._r = [], this.isReverted = false, this.id = Lr++, e16 && this.add(e16);
    }
    var t2 = e15.prototype;
    return t2.add = function(e16, t3, n2) {
      F(e16) && (n2 = t3, t3 = e16, e16 = F);
      var r2 = this, i2 = function() {
        var e17 = j, i3 = r2.selector, a2;
        return e17 && e17 !== r2 && e17.data.push(r2), n2 && (r2.selector = pn(n2)), j = r2, a2 = t3.apply(r2, arguments), F(a2) && r2._r.push(a2), j = e17, r2.selector = i3, r2.isReverted = false, a2;
      };
      return r2.last = i2, e16 === F ? i2(r2, function(e17) {
        return r2.add(null, e17);
      }) : e16 ? r2[e16] = i2 : i2;
    }, t2.ignore = function(e16) {
      var t3 = j;
      j = null, e16(this), j = t3;
    }, t2.getTweens = function() {
      var t3 = [];
      return this.data.forEach(function(n2) {
        return n2 instanceof e15 ? t3.push.apply(t3, n2.getTweens()) : n2 instanceof vr && !(n2.parent && n2.parent.data === `nested`) && t3.push(n2);
      }), t3;
    }, t2.clear = function() {
      this._r.length = this.data.length = 0;
    }, t2.kill = function(e16, t3) {
      var n2 = this;
      if (e16 ? (function() {
        for (var t4 = n2.getTweens(), r3 = n2.data.length, i2; r3--; ) i2 = n2.data[r3], i2.data === `isFlip` && (i2.revert(), i2.getChildren(true, true, false).forEach(function(e17) {
          return t4.splice(t4.indexOf(e17), 1);
        }));
        for (t4.map(function(e17) {
          return { g: e17._dur || e17._delay || e17._sat && !e17._sat.vars.immediateRender ? e17.globalTime(0) : -1 / 0, t: e17 };
        }).sort(function(e17, t5) {
          return t5.g - e17.g || -1 / 0;
        }).forEach(function(t5) {
          return t5.t.revert(e16);
        }), r3 = n2.data.length; r3--; ) i2 = n2.data[r3], i2 instanceof ir ? i2.data !== `nested` && (i2.scrollTrigger && i2.scrollTrigger.revert(), i2.kill()) : !(i2 instanceof vr) && i2.revert && i2.revert(e16);
        n2._r.forEach(function(t5) {
          return t5(e16, n2);
        }), n2.isReverted = true;
      })() : this.data.forEach(function(e17) {
        return e17.kill && e17.kill();
      }), this.clear(), t3) for (var r2 = Nr.length; r2--; ) Nr[r2].id === this.id && Nr.splice(r2, 1);
    }, t2.revert = function(e16) {
      this.kill(e16 || {});
    }, e15;
  })();
  var Vr = (function() {
    function e15(e16) {
      this.contexts = [], this.scope = e16, j && j.data.push(this);
    }
    var t2 = e15.prototype;
    return t2.add = function(e16, t3, n2) {
      ke(e16) || (e16 = { matches: e16 });
      var r2 = new Br(0, n2 || this.scope), i2 = r2.conditions = {}, a2, o2, s2;
      for (o2 in j && !r2.selector && (r2.selector = j.selector), this.contexts.push(r2), t3 = r2.add(`onMatch`, t3), r2.queries = e16, e16) o2 === `all` ? s2 = 1 : (a2 = Ge.matchMedia(e16[o2]), a2 && (Nr.indexOf(r2) < 0 && Nr.push(r2), (i2[o2] = a2.matches) && (s2 = 1), a2.addListener ? a2.addListener(zr) : a2.addEventListener(`change`, zr)));
      return s2 && t3(r2, function(e17) {
        return r2.add(null, e17);
      }), this;
    }, t2.revert = function(e16) {
      this.kill(e16 || {});
    }, t2.kill = function(e16) {
      this.contexts.forEach(function(t3) {
        return t3.kill(e16, true);
      });
    }, e15;
  })();
  var Hr = { registerPlugin: function() {
    [...arguments].forEach(function(e15) {
      return Nn(e15);
    });
  }, timeline: function(e15) {
    return new ir(e15);
  }, getTweensOf: function(e15, t2) {
    return We.getTweensOf(e15, t2);
  }, getProperty: function(e15, t2, n2, r2) {
    P(e15) && (e15 = fn(e15)[0]);
    var i2 = ht(e15 || {}).get, a2 = n2 ? Et : Tt;
    return n2 === `native` && (n2 = ``), e15 && (t2 ? a2((lt[t2] && lt[t2].get || i2)(e15, t2, n2, r2)) : function(t3, n3, r3) {
      return a2((lt[t3] && lt[t3].get || i2)(e15, t3, n3, r3));
    });
  }, quickSetter: function(e15, t2, n2) {
    if (e15 = fn(e15), e15.length > 1) {
      var r2 = e15.map(function(e16) {
        return Kr.quickSetter(e16, t2, n2);
      }), i2 = r2.length;
      return function(e16) {
        for (var t3 = i2; t3--; ) r2[t3](e16);
      };
    }
    e15 = e15[0] || {};
    var a2 = lt[t2], o2 = ht(e15), s2 = o2.harness && (o2.harness.aliases || {})[t2] || t2, c2 = a2 ? function(t3) {
      var r3 = new a2();
      jn._pt = 0, r3.init(e15, n2 ? t3 + n2 : t3, jn, 0, [e15]), r3.render(1, r3), jn._pt && Dr(1, jn);
    } : o2.set(e15, s2);
    return a2 ? c2 : function(t3) {
      return c2(e15, s2, n2 ? t3 + n2 : t3, o2, 1);
    };
  }, quickTo: function(e15, t2, n2) {
    var r2, i2 = Kr.to(e15, Dt((r2 = {}, r2[t2] = `+=0.1`, r2.paused = true, r2.stagger = 0, r2), n2 || {})), a2 = function(e16, n3, r3) {
      return i2.resetTo(t2, e16, n3, r3);
    };
    return a2.tween = i2, a2;
  }, isTweening: function(e15) {
    return We.getTweensOf(e15, true).length > 0;
  }, defaults: function(e15) {
    return e15 && e15.ease && (e15.ease = Zn(e15.ease, ye.ease)), At(ye, e15 || {});
  }, config: function(e15) {
    return At(ve, e15 || {});
  }, registerEffect: function(e15) {
    var t2 = e15.name, n2 = e15.effect, r2 = e15.plugins, i2 = e15.defaults, a2 = e15.extendTimeline;
    (r2 || ``).split(`,`).forEach(function(e16) {
      return e16 && !lt[e16] && !Je[e16] && $e(t2 + ` effect requires ` + e16 + ` plugin.`);
    }), ut[t2] = function(e16, t3, r3) {
      return n2(fn(e16), Dt(t3 || {}, i2), r3);
    }, a2 && (ir.prototype[t2] = function(e16, n3, r3) {
      return this.add(ut[t2](e16, ke(n3) ? n3 : (r3 = n3) && {}, this), r3);
    });
  }, registerEase: function(e15, t2) {
    R[e15] = Zn(t2);
  }, parseEase: function(e15, t2) {
    return arguments.length ? Zn(e15, t2) : R;
  }, getById: function(e15) {
    return We.getById(e15);
  }, exportRoot: function(e15, t2) {
    e15 === void 0 && (e15 = {});
    var n2 = new ir(e15), r2, i2;
    for (n2.smoothChildTiming = Ae(e15.smoothChildTiming), We.remove(n2), n2._dp = 0, n2._time = n2._tTime = We._time, r2 = We._first; r2; ) i2 = r2._next, (t2 || !(!r2._dur && r2 instanceof vr && r2.vars.onComplete === r2._targets[0])) && qt(n2, r2, r2._start - r2._delay), r2 = i2;
    return qt(We, n2, 0), n2;
  }, context: function(e15, t2) {
    return e15 ? new Br(e15, t2) : j;
  }, matchMedia: function(e15) {
    return new Vr(e15);
  }, matchMediaRefresh: function() {
    return Nr.forEach(function(e15) {
      var t2 = e15.conditions, n2, r2;
      for (r2 in t2) t2[r2] && (t2[r2] = false, n2 = 1);
      n2 && e15.revert();
    }) || zr();
  }, addEventListener: function(e15, t2) {
    var n2 = Pr[e15] || (Pr[e15] = []);
    ~n2.indexOf(t2) || n2.push(t2);
  }, removeEventListener: function(e15, t2) {
    var n2 = Pr[e15], r2 = n2 && n2.indexOf(t2);
    r2 >= 0 && n2.splice(r2, 1);
  }, utils: { wrap: Cn, wrapYoyo: wn, distribute: hn, random: vn, snap: _n, normalize: xn, getUnit: sn, clamp: cn, splitColor: In, toArray: fn, selector: pn, mapRange: En, pipe: yn, unitize: bn, interpolate: Dn, shuffle: mn }, install: Ze, effects: ut, ticker: Un, updateRoot: ir.updateRoot, plugins: lt, globalTimeline: We, core: { PropTween: Mr, globals: et, Tween: vr, Timeline: ir, Animation: rr, getCache: ht, _removeLinkedListItem: Ft, reverting: function() {
    return A;
  }, context: function(e15) {
    return e15 && j && (j.data.push(e15), e15._ctx = j), j;
  }, suppressOverwrites: function(e15) {
    return be = e15;
  } } };
  _t(`to,from,fromTo,delayedCall,set,killTweensOf`, function(e15) {
    return Hr[e15] = vr[e15];
  }), Un.add(ir.updateRoot), jn = Hr.to({}, { duration: 0 });
  var Ur = function(e15, t2) {
    for (var n2 = e15._pt; n2 && n2.p !== t2 && n2.op !== t2 && n2.fp !== t2; ) n2 = n2._next;
    return n2;
  };
  var Wr = function(e15, t2) {
    var n2 = e15._targets, r2, i2, a2;
    for (r2 in t2) for (i2 = n2.length; i2--; ) a2 = e15._ptLookup[i2][r2], (a2 &&= a2.d) && (a2._pt && (a2 = Ur(a2, r2)), a2 && a2.modifier && a2.modifier(t2[r2], e15, n2[i2], r2));
  };
  var Gr = function(e15, t2) {
    return { name: e15, headless: 1, rawVars: 1, init: function(e16, n2, r2) {
      r2._onInit = function(e17) {
        var r3, i2;
        if (P(n2) && (r3 = {}, _t(n2, function(e18) {
          return r3[e18] = 1;
        }), n2 = r3), t2) {
          for (i2 in r3 = {}, n2) r3[i2] = t2(n2[i2]);
          n2 = r3;
        }
        Wr(e17, n2);
      };
    } };
  };
  var Kr = Hr.registerPlugin({ name: `attr`, init: function(e15, t2, n2, r2, i2) {
    var a2, o2, s2;
    for (a2 in this.tween = n2, t2) s2 = e15.getAttribute(a2) || ``, o2 = this.add(e15, `setAttribute`, (s2 || 0) + ``, t2[a2], r2, i2, 0, 0, a2), o2.op = a2, o2.b = s2, this._props.push(a2);
  }, render: function(e15, t2) {
    for (var n2 = t2._pt; n2; ) A ? n2.set(n2.t, n2.p, n2.b, n2) : n2.r(e15, n2.d), n2 = n2._next;
  } }, { name: `endArray`, headless: 1, init: function(e15, t2) {
    for (var n2 = t2.length; n2--; ) this.add(e15, n2, e15[n2] || 0, t2[n2], 0, 0, 0, 0, 0, 1);
  } }, Gr(`roundProps`, gn), Gr(`modifiers`), Gr(`snap`, _n)) || Hr;
  vr.version = ir.version = Kr.version = `3.15.0`, Xe = 1, je() && Wn(), R.Power0, R.Power1, R.Power2, R.Power3, R.Power4, R.Linear, R.Quad, R.Cubic, R.Quart, R.Quint, R.Strong, R.Elastic, R.Back, R.SteppedEase, R.Bounce, R.Sine, R.Expo, R.Circ;
  var qr;
  var Jr;
  var Yr;
  var Xr;
  var Zr;
  var Qr;
  var $r;
  var ei = function() {
    return typeof window < `u`;
  };
  var ti = {};
  var ni = 180 / Math.PI;
  var ri = Math.PI / 180;
  var ii = Math.atan2;
  var ai = 1e8;
  var oi = /([A-Z])/g;
  var si = /(left|right|width|margin|padding|x)/i;
  var ci = /[\s,\(]\S/;
  var li = { autoAlpha: `opacity,visibility`, scale: `scaleX,scaleY`, alpha: `opacity` };
  var ui = function(e15, t2) {
    return t2.set(t2.t, t2.p, Math.round((t2.s + t2.c * e15) * 1e4) / 1e4 + t2.u, t2);
  };
  var di = function(e15, t2) {
    return t2.set(t2.t, t2.p, e15 === 1 ? t2.e : Math.round((t2.s + t2.c * e15) * 1e4) / 1e4 + t2.u, t2);
  };
  var fi = function(e15, t2) {
    return t2.set(t2.t, t2.p, e15 ? Math.round((t2.s + t2.c * e15) * 1e4) / 1e4 + t2.u : t2.b, t2);
  };
  var pi = function(e15, t2) {
    return t2.set(t2.t, t2.p, e15 === 1 ? t2.e : e15 ? Math.round((t2.s + t2.c * e15) * 1e4) / 1e4 + t2.u : t2.b, t2);
  };
  var mi = function(e15, t2) {
    var n2 = t2.s + t2.c * e15;
    t2.set(t2.t, t2.p, ~~(n2 + (n2 < 0 ? -0.5 : 0.5)) + t2.u, t2);
  };
  var hi = function(e15, t2) {
    return t2.set(t2.t, t2.p, e15 ? t2.e : t2.b, t2);
  };
  var gi = function(e15, t2) {
    return t2.set(t2.t, t2.p, e15 === 1 ? t2.e : t2.b, t2);
  };
  var _i = function(e15, t2, n2) {
    return e15.style[t2] = n2;
  };
  var vi = function(e15, t2, n2) {
    return e15.style.setProperty(t2, n2);
  };
  var yi = function(e15, t2, n2) {
    return e15._gsap[t2] = n2;
  };
  var bi = function(e15, t2, n2) {
    return e15._gsap.scaleX = e15._gsap.scaleY = n2;
  };
  var xi = function(e15, t2, n2, r2, i2) {
    var a2 = e15._gsap;
    a2.scaleX = a2.scaleY = n2, a2.renderTransform(i2, a2);
  };
  var Si = function(e15, t2, n2, r2, i2) {
    var a2 = e15._gsap;
    a2[t2] = n2, a2.renderTransform(i2, a2);
  };
  var z = `transform`;
  var Ci = z + `Origin`;
  var wi = function e12(t2, n2) {
    var r2 = this, i2 = this.target, a2 = i2.style, o2 = i2._gsap;
    if (t2 in ti && a2) {
      if (this.tfm = this.tfm || {}, t2 !== `transform`) t2 = li[t2] || t2, ~t2.indexOf(`,`) ? t2.split(`,`).forEach(function(e15) {
        return r2.tfm[e15] = Ui(i2, e15);
      }) : this.tfm[t2] = o2.x ? o2[t2] : Ui(i2, t2), t2 === Ci && (this.tfm.zOrigin = o2.zOrigin);
      else return li.transform.split(`,`).forEach(function(t3) {
        return e12.call(r2, t3, n2);
      });
      if (this.props.indexOf(z) >= 0) return;
      o2.svg && (this.svgo = i2.getAttribute(`data-svg-origin`), this.props.push(Ci, n2, ``)), t2 = z;
    }
    (a2 || n2) && this.props.push(t2, n2, a2[t2]);
  };
  var Ti = function(e15) {
    e15.translate && (e15.removeProperty(`translate`), e15.removeProperty(`scale`), e15.removeProperty(`rotate`));
  };
  var Ei = function() {
    var e15 = this.props, t2 = this.target, n2 = t2.style, r2 = t2._gsap, i2, a2;
    for (i2 = 0; i2 < e15.length; i2 += 3) e15[i2 + 1] ? e15[i2 + 1] === 2 ? t2[e15[i2]](e15[i2 + 2]) : t2[e15[i2]] = e15[i2 + 2] : e15[i2 + 2] ? n2[e15[i2]] = e15[i2 + 2] : n2.removeProperty(e15[i2].substr(0, 2) === `--` ? e15[i2] : e15[i2].replace(oi, `-$1`).toLowerCase());
    if (this.tfm) {
      for (a2 in this.tfm) r2[a2] = this.tfm[a2];
      r2.svg && (r2.renderTransform(), t2.setAttribute(`data-svg-origin`, this.svgo || ``)), i2 = $r(), (!i2 || !i2.isStart) && !n2[z] && (Ti(n2), r2.zOrigin && n2[Ci] && (n2[Ci] += ` ` + r2.zOrigin + `px`, r2.zOrigin = 0, r2.renderTransform()), r2.uncache = 1);
    }
  };
  var Di = function(e15, t2) {
    var n2 = { target: e15, props: [], revert: Ei, save: wi };
    return e15._gsap || Kr.core.getCache(e15), t2 && e15.style && e15.nodeType && t2.split(`,`).forEach(function(e16) {
      return n2.save(e16);
    }), n2;
  };
  var Oi;
  var ki = function(e15, t2) {
    var n2 = Jr.createElementNS ? Jr.createElementNS((t2 || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e15) : Jr.createElement(e15);
    return n2 && n2.style ? n2 : Jr.createElement(e15);
  };
  var Ai = function e13(t2, n2, r2) {
    var i2 = getComputedStyle(t2);
    return i2[n2] || i2.getPropertyValue(n2.replace(oi, `-$1`).toLowerCase()) || i2.getPropertyValue(n2) || !r2 && e13(t2, Mi(n2) || n2, 1) || ``;
  };
  var ji = `O,Moz,ms,Ms,Webkit`.split(`,`);
  var Mi = function(e15, t2, n2) {
    var r2 = (t2 || Zr).style, i2 = 5;
    if (e15 in r2 && !n2) return e15;
    for (e15 = e15.charAt(0).toUpperCase() + e15.substr(1); i2-- && !(ji[i2] + e15 in r2); ) ;
    return i2 < 0 ? null : (i2 === 3 ? `ms` : i2 >= 0 ? ji[i2] : ``) + e15;
  };
  var Ni = function() {
    ei() && window.document && (qr = window, Jr = qr.document, Yr = Jr.documentElement, Zr = ki(`div`) || { style: {} }, ki(`div`), z = Mi(z), Ci = z + `Origin`, Zr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`, Oi = !!Mi(`perspective`), $r = Kr.core.reverting, Xr = 1);
  };
  var Pi = function(e15) {
    var t2 = e15.ownerSVGElement, n2 = ki(`svg`, t2 && t2.getAttribute(`xmlns`) || `http://www.w3.org/2000/svg`), r2 = e15.cloneNode(true), i2;
    r2.style.display = `block`, n2.appendChild(r2), Yr.appendChild(n2);
    try {
      i2 = r2.getBBox();
    } catch {
    }
    return n2.removeChild(r2), Yr.removeChild(n2), i2;
  };
  var Fi = function(e15, t2) {
    for (var n2 = t2.length; n2--; ) if (e15.hasAttribute(t2[n2])) return e15.getAttribute(t2[n2]);
  };
  var Ii = function(e15) {
    var t2, n2;
    try {
      t2 = e15.getBBox();
    } catch {
      t2 = Pi(e15), n2 = 1;
    }
    return t2 && (t2.width || t2.height) || n2 || (t2 = Pi(e15)), t2 && !t2.width && !t2.x && !t2.y ? { x: +Fi(e15, [`x`, `cx`, `x1`]) || 0, y: +Fi(e15, [`y`, `cy`, `y1`]) || 0, width: 0, height: 0 } : t2;
  };
  var Li = function(e15) {
    return !!(e15.getCTM && (!e15.parentNode || e15.ownerSVGElement) && Ii(e15));
  };
  var Ri = function(e15, t2) {
    if (t2) {
      var n2 = e15.style, r2;
      t2 in ti && t2 !== Ci && (t2 = z), n2.removeProperty ? (r2 = t2.substr(0, 2), (r2 === `ms` || t2.substr(0, 6) === `webkit`) && (t2 = `-` + t2), n2.removeProperty(r2 === `--` ? t2 : t2.replace(oi, `-$1`).toLowerCase())) : n2.removeAttribute(t2);
    }
  };
  var zi = function(e15, t2, n2, r2, i2, a2) {
    var o2 = new Mr(e15._pt, t2, n2, 0, 1, a2 ? gi : hi);
    return e15._pt = o2, o2.b = r2, o2.e = i2, e15._props.push(n2), o2;
  };
  var Bi = { deg: 1, rad: 1, turn: 1 };
  var Vi = { grid: 1, flex: 1 };
  var Hi = function e14(t2, n2, r2, i2) {
    var a2 = parseFloat(r2) || 0, o2 = (r2 + ``).trim().substr((a2 + ``).length) || `px`, s2 = Zr.style, c2 = si.test(n2), l2 = t2.tagName.toLowerCase() === `svg`, u2 = (l2 ? `client` : `offset`) + (c2 ? `Width` : `Height`), d2 = 100, f = i2 === `px`, p2 = i2 === `%`, m, h2, g2, _3;
    if (i2 === o2 || !a2 || Bi[i2] || Bi[o2]) return a2;
    if (o2 !== `px` && !f && (a2 = e14(t2, n2, r2, `px`)), _3 = t2.getCTM && Li(t2), (p2 || o2 === `%`) && (ti[n2] || ~n2.indexOf(`adius`))) return m = _3 ? t2.getBBox()[c2 ? `width` : `height`] : t2[u2], vt(p2 ? a2 / m * d2 : a2 / 100 * m);
    if (s2[c2 ? `width` : `height`] = d2 + (f ? o2 : i2), h2 = i2 !== `rem` && ~n2.indexOf(`adius`) || i2 === `em` && t2.appendChild && !l2 ? t2 : t2.parentNode, _3 && (h2 = (t2.ownerSVGElement || {}).parentNode), (!h2 || h2 === Jr || !h2.appendChild) && (h2 = Jr.body), g2 = h2._gsap, g2 && p2 && g2.width && c2 && g2.time === Un.time && !g2.uncache) return vt(a2 / g2.width * d2);
    if (p2 && (n2 === `height` || n2 === `width`)) {
      var v3 = t2.style[n2];
      t2.style[n2] = d2 + i2, m = t2[u2], v3 ? t2.style[n2] = v3 : Ri(t2, n2);
    } else (p2 || o2 === `%`) && !Vi[Ai(h2, `display`)] && (s2.position = Ai(t2, `position`)), h2 === t2 && (s2.position = `static`), h2.appendChild(Zr), m = Zr[u2], h2.removeChild(Zr), s2.position = `absolute`;
    return c2 && p2 && (g2 = ht(h2), g2.time = Un.time, g2.width = h2[u2]), vt(f ? m * a2 / d2 : m && a2 ? d2 / m * a2 : 0);
  };
  var Ui = function(e15, t2, n2, r2) {
    var i2;
    return Xr || Ni(), t2 in li && t2 !== `transform` && (t2 = li[t2], ~t2.indexOf(`,`) && (t2 = t2.split(`,`)[0])), ti[t2] && t2 !== `transform` ? (i2 = ta(e15, r2), i2 = t2 === `transformOrigin` ? i2.svg ? i2.origin : na(Ai(e15, Ci)) + ` ` + i2.zOrigin + `px` : i2[t2]) : (i2 = e15.style[t2], (!i2 || i2 === `auto` || r2 || ~(i2 + ``).indexOf(`calc(`)) && (i2 = Ji[t2] && Ji[t2](e15, t2, n2) || Ai(e15, t2) || gt(e15, t2) || +(t2 === `opacity`))), n2 && !~(i2 + ``).trim().indexOf(` `) ? Hi(e15, t2, i2, n2) + n2 : i2;
  };
  var Wi = function(e15, t2, n2, r2) {
    if (!n2 || n2 === `none`) {
      var i2 = Mi(t2, e15, 1), a2 = i2 && Ai(e15, i2, 1);
      a2 && a2 !== n2 ? (t2 = i2, n2 = a2) : t2 === `borderColor` && (n2 = Ai(e15, `borderTopColor`));
    }
    var o2 = new Mr(this._pt, e15.style, t2, 0, 1, Er), s2 = 0, c2 = 0, l2, u2, d2, f, p2, m, h2, g2, _3, v3, y3, b3;
    if (o2.b = n2, o2.e = r2, n2 += ``, r2 += ``, r2.substring(0, 6) === `var(--` && (r2 = Ai(e15, r2.substring(4, r2.indexOf(`)`)))), r2 === `auto` && (m = e15.style[t2], e15.style[t2] = r2, r2 = Ai(e15, t2) || r2, m ? e15.style[t2] = m : Ri(e15, t2)), l2 = [n2, r2], Vn(l2), n2 = l2[0], r2 = l2[1], d2 = n2.match(ze) || [], b3 = r2.match(ze) || [], b3.length) {
      for (; u2 = ze.exec(r2); ) h2 = u2[0], _3 = r2.substring(s2, u2.index), p2 ? p2 = (p2 + 1) % 5 : (_3.substr(-5) === `rgba(` || _3.substr(-5) === `hsla(`) && (p2 = 1), h2 !== (m = d2[c2++] || ``) && (f = parseFloat(m) || 0, y3 = m.substr((f + ``).length), h2.charAt(1) === `=` && (h2 = bt(f, h2) + y3), g2 = parseFloat(h2), v3 = h2.substr((g2 + ``).length), s2 = ze.lastIndex - v3.length, v3 || (v3 = v3 || ve.units[t2] || y3, s2 === r2.length && (r2 += v3, o2.e += v3)), y3 !== v3 && (f = Hi(e15, t2, m, v3) || 0), o2._pt = { _next: o2._pt, p: _3 || c2 === 1 ? _3 : `,`, s: f, c: g2 - f, m: p2 && p2 < 4 || t2 === `zIndex` ? Math.round : 0 });
      o2.c = s2 < r2.length ? r2.substring(s2, r2.length) : ``;
    } else o2.r = t2 === `display` && r2 === `none` ? gi : hi;
    return Ve.test(r2) && (o2.e = 0), this._pt = o2, o2;
  };
  var Gi = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` };
  var Ki = function(e15) {
    var t2 = e15.split(` `), n2 = t2[0], r2 = t2[1] || `50%`;
    return (n2 === `top` || n2 === `bottom` || r2 === `left` || r2 === `right`) && (e15 = n2, n2 = r2, r2 = e15), t2[0] = Gi[n2] || n2, t2[1] = Gi[r2] || r2, t2.join(` `);
  };
  var qi = function(e15, t2) {
    if (t2.tween && t2.tween._time === t2.tween._dur) {
      var n2 = t2.t, r2 = n2.style, i2 = t2.u, a2 = n2._gsap, o2, s2, c2;
      if (i2 === `all` || i2 === true) r2.cssText = ``, s2 = 1;
      else for (i2 = i2.split(`,`), c2 = i2.length; --c2 > -1; ) o2 = i2[c2], ti[o2] && (s2 = 1, o2 = o2 === `transformOrigin` ? Ci : z), Ri(n2, o2);
      s2 && (Ri(n2, z), a2 && (a2.svg && n2.removeAttribute(`transform`), r2.scale = r2.rotate = r2.translate = `none`, ta(n2, 1), a2.uncache = 1, Ti(r2)));
    }
  };
  var Ji = { clearProps: function(e15, t2, n2, r2, i2) {
    if (i2.data !== `isFromStart`) {
      var a2 = e15._pt = new Mr(e15._pt, t2, n2, 0, 0, qi);
      return a2.u = r2, a2.pr = -10, a2.tween = i2, e15._props.push(n2), 1;
    }
  } };
  var Yi = [1, 0, 0, 1, 0, 0];
  var Xi = {};
  var Zi = function(e15) {
    return e15 === `matrix(1, 0, 0, 1, 0, 0)` || e15 === `none` || !e15;
  };
  var Qi = function(e15) {
    var t2 = Ai(e15, z);
    return Zi(t2) ? Yi : t2.substr(7).match(Re).map(vt);
  };
  var $i = function(e15, t2) {
    var n2 = e15._gsap || ht(e15), r2 = e15.style, i2 = Qi(e15), a2, o2, s2, c2;
    return n2.svg && e15.getAttribute(`transform`) ? (s2 = e15.transform.baseVal.consolidate().matrix, i2 = [s2.a, s2.b, s2.c, s2.d, s2.e, s2.f], i2.join(`,`) === `1,0,0,1,0,0` ? Yi : i2) : (i2 === Yi && !e15.offsetParent && e15 !== Yr && !n2.svg && (s2 = r2.display, r2.display = `block`, a2 = e15.parentNode, (!a2 || !e15.offsetParent && !e15.getBoundingClientRect().width) && (c2 = 1, o2 = e15.nextElementSibling, Yr.appendChild(e15)), i2 = Qi(e15), s2 ? r2.display = s2 : Ri(e15, `display`), c2 && (o2 ? a2.insertBefore(e15, o2) : a2 ? a2.appendChild(e15) : Yr.removeChild(e15))), t2 && i2.length > 6 ? [i2[0], i2[1], i2[4], i2[5], i2[12], i2[13]] : i2);
  };
  var ea = function(e15, t2, n2, r2, i2, a2) {
    var o2 = e15._gsap, s2 = i2 || $i(e15, true), c2 = o2.xOrigin || 0, l2 = o2.yOrigin || 0, u2 = o2.xOffset || 0, d2 = o2.yOffset || 0, f = s2[0], p2 = s2[1], m = s2[2], h2 = s2[3], g2 = s2[4], _3 = s2[5], v3 = t2.split(` `), y3 = parseFloat(v3[0]) || 0, b3 = parseFloat(v3[1]) || 0, x2, S2, C2, w2;
    n2 ? s2 !== Yi && (S2 = f * h2 - p2 * m) && (C2 = h2 / S2 * y3 + b3 * (-m / S2) + (m * _3 - h2 * g2) / S2, w2 = y3 * (-p2 / S2) + f / S2 * b3 - (f * _3 - p2 * g2) / S2, y3 = C2, b3 = w2) : (x2 = Ii(e15), y3 = x2.x + (~v3[0].indexOf(`%`) ? y3 / 100 * x2.width : y3), b3 = x2.y + (~(v3[1] || v3[0]).indexOf(`%`) ? b3 / 100 * x2.height : b3)), r2 || r2 !== false && o2.smooth ? (g2 = y3 - c2, _3 = b3 - l2, o2.xOffset = u2 + (g2 * f + _3 * m) - g2, o2.yOffset = d2 + (g2 * p2 + _3 * h2) - _3) : o2.xOffset = o2.yOffset = 0, o2.xOrigin = y3, o2.yOrigin = b3, o2.smooth = !!r2, o2.origin = t2, o2.originIsAbsolute = !!n2, e15.style[Ci] = `0px 0px`, a2 && (zi(a2, o2, `xOrigin`, c2, y3), zi(a2, o2, `yOrigin`, l2, b3), zi(a2, o2, `xOffset`, u2, o2.xOffset), zi(a2, o2, `yOffset`, d2, o2.yOffset)), e15.setAttribute(`data-svg-origin`, y3 + ` ` + b3);
  };
  var ta = function(e15, t2) {
    var n2 = e15._gsap || new nr(e15);
    if (`x` in n2 && !t2 && !n2.uncache) return n2;
    var r2 = e15.style, i2 = n2.scaleX < 0, a2 = `px`, o2 = `deg`, s2 = getComputedStyle(e15), c2 = Ai(e15, Ci) || `0`, l2 = u2 = d2 = m = h2 = g2 = _3 = v3 = y3 = 0, u2, d2, f = p2 = 1, p2, m, h2, g2, _3, v3, y3, b3, x2, S2, C2, w2, T2, E3, D2, O3, k2, ee, te3, ne3, re3, ie3, ae3, oe3, se2, ce3, le2, ue2;
    return n2.svg = !!(e15.getCTM && Li(e15)), s2.translate && ((s2.translate !== `none` || s2.scale !== `none` || s2.rotate !== `none`) && (r2[z] = (s2.translate === `none` ? `` : `translate3d(` + (s2.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) + `) `) + (s2.rotate === `none` ? `` : `rotate(` + s2.rotate + `) `) + (s2.scale === `none` ? `` : `scale(` + s2.scale.split(` `).join(`,`) + `) `) + (s2[z] === `none` ? `` : s2[z])), r2.scale = r2.rotate = r2.translate = `none`), S2 = $i(e15, n2.svg), n2.svg && (n2.uncache ? (re3 = e15.getBBox(), c2 = n2.xOrigin - re3.x + `px ` + (n2.yOrigin - re3.y) + `px`, ne3 = ``) : ne3 = !t2 && e15.getAttribute(`data-svg-origin`), ea(e15, ne3 || c2, !!ne3 || n2.originIsAbsolute, n2.smooth !== false, S2)), b3 = n2.xOrigin || 0, x2 = n2.yOrigin || 0, S2 !== Yi && (E3 = S2[0], D2 = S2[1], O3 = S2[2], k2 = S2[3], l2 = ee = S2[4], u2 = te3 = S2[5], S2.length === 6 ? (f = Math.sqrt(E3 * E3 + D2 * D2), p2 = Math.sqrt(k2 * k2 + O3 * O3), m = E3 || D2 ? ii(D2, E3) * ni : 0, _3 = O3 || k2 ? ii(O3, k2) * ni + m : 0, _3 && (p2 *= Math.abs(Math.cos(_3 * ri))), n2.svg && (l2 -= b3 - (b3 * E3 + x2 * O3), u2 -= x2 - (b3 * D2 + x2 * k2))) : (ue2 = S2[6], ce3 = S2[7], ae3 = S2[8], oe3 = S2[9], se2 = S2[10], le2 = S2[11], l2 = S2[12], u2 = S2[13], d2 = S2[14], C2 = ii(ue2, se2), h2 = C2 * ni, C2 && (w2 = Math.cos(-C2), T2 = Math.sin(-C2), ne3 = ee * w2 + ae3 * T2, re3 = te3 * w2 + oe3 * T2, ie3 = ue2 * w2 + se2 * T2, ae3 = ee * -T2 + ae3 * w2, oe3 = te3 * -T2 + oe3 * w2, se2 = ue2 * -T2 + se2 * w2, le2 = ce3 * -T2 + le2 * w2, ee = ne3, te3 = re3, ue2 = ie3), C2 = ii(-O3, se2), g2 = C2 * ni, C2 && (w2 = Math.cos(-C2), T2 = Math.sin(-C2), ne3 = E3 * w2 - ae3 * T2, re3 = D2 * w2 - oe3 * T2, ie3 = O3 * w2 - se2 * T2, le2 = k2 * T2 + le2 * w2, E3 = ne3, D2 = re3, O3 = ie3), C2 = ii(D2, E3), m = C2 * ni, C2 && (w2 = Math.cos(C2), T2 = Math.sin(C2), ne3 = E3 * w2 + D2 * T2, re3 = ee * w2 + te3 * T2, D2 = D2 * w2 - E3 * T2, te3 = te3 * w2 - ee * T2, E3 = ne3, ee = re3), h2 && Math.abs(h2) + Math.abs(m) > 359.9 && (h2 = m = 0, g2 = 180 - g2), f = vt(Math.sqrt(E3 * E3 + D2 * D2 + O3 * O3)), p2 = vt(Math.sqrt(te3 * te3 + ue2 * ue2)), C2 = ii(ee, te3), _3 = Math.abs(C2) > 2e-4 ? C2 * ni : 0, y3 = le2 ? 1 / (le2 < 0 ? -le2 : le2) : 0), n2.svg && (ne3 = e15.getAttribute(`transform`), n2.forceCSS = e15.setAttribute(`transform`, ``) || !Zi(Ai(e15, z)), ne3 && e15.setAttribute(`transform`, ne3))), Math.abs(_3) > 90 && Math.abs(_3) < 270 && (i2 ? (f *= -1, _3 += m <= 0 ? 180 : -180, m += m <= 0 ? 180 : -180) : (p2 *= -1, _3 += _3 <= 0 ? 180 : -180)), t2 ||= n2.uncache, n2.x = l2 - ((n2.xPercent = l2 && (!t2 && n2.xPercent || (Math.round(e15.offsetWidth / 2) === Math.round(-l2) ? -50 : 0))) ? e15.offsetWidth * n2.xPercent / 100 : 0) + a2, n2.y = u2 - ((n2.yPercent = u2 && (!t2 && n2.yPercent || (Math.round(e15.offsetHeight / 2) === Math.round(-u2) ? -50 : 0))) ? e15.offsetHeight * n2.yPercent / 100 : 0) + a2, n2.z = d2 + a2, n2.scaleX = vt(f), n2.scaleY = vt(p2), n2.rotation = vt(m) + o2, n2.rotationX = vt(h2) + o2, n2.rotationY = vt(g2) + o2, n2.skewX = _3 + o2, n2.skewY = v3 + o2, n2.transformPerspective = y3 + a2, (n2.zOrigin = parseFloat(c2.split(` `)[2]) || !t2 && n2.zOrigin || 0) && (r2[Ci] = na(c2)), n2.xOffset = n2.yOffset = 0, n2.force3D = ve.force3D, n2.renderTransform = n2.svg ? sa : Oi ? oa : B, n2.uncache = 0, n2;
  };
  var na = function(e15) {
    return (e15 = e15.split(` `))[0] + ` ` + e15[1];
  };
  var ra = function(e15, t2, n2) {
    var r2 = sn(t2);
    return vt(parseFloat(t2) + parseFloat(Hi(e15, `x`, n2 + `px`, r2))) + r2;
  };
  var B = function(e15, t2) {
    t2.z = `0px`, t2.rotationY = t2.rotationX = `0deg`, t2.force3D = 0, oa(e15, t2);
  };
  var V = `0deg`;
  var ia = `0px`;
  var aa = `) `;
  var oa = function(e15, t2) {
    var n2 = t2 || this, r2 = n2.xPercent, i2 = n2.yPercent, a2 = n2.x, o2 = n2.y, s2 = n2.z, c2 = n2.rotation, l2 = n2.rotationY, u2 = n2.rotationX, d2 = n2.skewX, f = n2.skewY, p2 = n2.scaleX, m = n2.scaleY, h2 = n2.transformPerspective, g2 = n2.force3D, _3 = n2.target, v3 = n2.zOrigin, y3 = ``, b3 = g2 === `auto` && e15 && e15 !== 1 || g2 === true;
    if (v3 && (u2 !== V || l2 !== V)) {
      var x2 = parseFloat(l2) * ri, S2 = Math.sin(x2), C2 = Math.cos(x2), w2;
      x2 = parseFloat(u2) * ri, w2 = Math.cos(x2), a2 = ra(_3, a2, S2 * w2 * -v3), o2 = ra(_3, o2, -Math.sin(x2) * -v3), s2 = ra(_3, s2, C2 * w2 * -v3 + v3);
    }
    h2 !== ia && (y3 += `perspective(` + h2 + aa), (r2 || i2) && (y3 += `translate(` + r2 + `%, ` + i2 + `%) `), (b3 || a2 !== ia || o2 !== ia || s2 !== ia) && (y3 += s2 !== ia || b3 ? `translate3d(` + a2 + `, ` + o2 + `, ` + s2 + `) ` : `translate(` + a2 + `, ` + o2 + aa), c2 !== V && (y3 += `rotate(` + c2 + aa), l2 !== V && (y3 += `rotateY(` + l2 + aa), u2 !== V && (y3 += `rotateX(` + u2 + aa), (d2 !== V || f !== V) && (y3 += `skew(` + d2 + `, ` + f + aa), (p2 !== 1 || m !== 1) && (y3 += `scale(` + p2 + `, ` + m + aa), _3.style[z] = y3 || `translate(0, 0)`;
  };
  var sa = function(e15, t2) {
    var n2 = t2 || this, r2 = n2.xPercent, i2 = n2.yPercent, a2 = n2.x, o2 = n2.y, s2 = n2.rotation, c2 = n2.skewX, l2 = n2.skewY, u2 = n2.scaleX, d2 = n2.scaleY, f = n2.target, p2 = n2.xOrigin, m = n2.yOrigin, h2 = n2.xOffset, g2 = n2.yOffset, _3 = n2.forceCSS, v3 = parseFloat(a2), y3 = parseFloat(o2), b3, x2, S2, C2, w2;
    s2 = parseFloat(s2), c2 = parseFloat(c2), l2 = parseFloat(l2), l2 && (l2 = parseFloat(l2), c2 += l2, s2 += l2), s2 || c2 ? (s2 *= ri, c2 *= ri, b3 = Math.cos(s2) * u2, x2 = Math.sin(s2) * u2, S2 = Math.sin(s2 - c2) * -d2, C2 = Math.cos(s2 - c2) * d2, c2 && (l2 *= ri, w2 = Math.tan(c2 - l2), w2 = Math.sqrt(1 + w2 * w2), S2 *= w2, C2 *= w2, l2 && (w2 = Math.tan(l2), w2 = Math.sqrt(1 + w2 * w2), b3 *= w2, x2 *= w2)), b3 = vt(b3), x2 = vt(x2), S2 = vt(S2), C2 = vt(C2)) : (b3 = u2, C2 = d2, x2 = S2 = 0), (v3 && !~(a2 + ``).indexOf(`px`) || y3 && !~(o2 + ``).indexOf(`px`)) && (v3 = Hi(f, `x`, a2, `px`), y3 = Hi(f, `y`, o2, `px`)), (p2 || m || h2 || g2) && (v3 = vt(v3 + p2 - (p2 * b3 + m * S2) + h2), y3 = vt(y3 + m - (p2 * x2 + m * C2) + g2)), (r2 || i2) && (w2 = f.getBBox(), v3 = vt(v3 + r2 / 100 * w2.width), y3 = vt(y3 + i2 / 100 * w2.height)), w2 = `matrix(` + b3 + `,` + x2 + `,` + S2 + `,` + C2 + `,` + v3 + `,` + y3 + `)`, f.setAttribute(`transform`, w2), _3 && (f.style[z] = w2);
  };
  var ca = function(e15, t2, n2, r2, i2) {
    var a2 = 360, o2 = P(i2), s2 = parseFloat(i2) * (o2 && ~i2.indexOf(`rad`) ? ni : 1) - r2, c2 = r2 + s2 + `deg`, l2, u2;
    return o2 && (l2 = i2.split(`_`)[1], l2 === `short` && (s2 %= a2, s2 !== s2 % (a2 / 2) && (s2 += s2 < 0 ? a2 : -a2)), l2 === `cw` && s2 < 0 ? s2 = (s2 + a2 * ai) % a2 - ~~(s2 / a2) * a2 : l2 === `ccw` && s2 > 0 && (s2 = (s2 - a2 * ai) % a2 - ~~(s2 / a2) * a2)), e15._pt = u2 = new Mr(e15._pt, t2, n2, r2, s2, di), u2.e = c2, u2.u = `deg`, e15._props.push(n2), u2;
  };
  var la = function(e15, t2) {
    for (var n2 in t2) e15[n2] = t2[n2];
    return e15;
  };
  var ua = function(e15, t2, n2) {
    var r2 = la({}, n2._gsap), i2 = `perspective,force3D,transformOrigin,svgOrigin`, a2 = n2.style, o2, s2, c2, l2, u2, d2, f, p2;
    for (s2 in r2.svg ? (c2 = n2.getAttribute(`transform`), n2.setAttribute(`transform`, ``), a2[z] = t2, o2 = ta(n2, 1), Ri(n2, z), n2.setAttribute(`transform`, c2)) : (c2 = getComputedStyle(n2)[z], a2[z] = t2, o2 = ta(n2, 1), a2[z] = c2), ti) c2 = r2[s2], l2 = o2[s2], c2 !== l2 && i2.indexOf(s2) < 0 && (f = sn(c2), p2 = sn(l2), u2 = f === p2 ? parseFloat(c2) : Hi(n2, s2, c2, p2), d2 = parseFloat(l2), e15._pt = new Mr(e15._pt, o2, s2, u2, d2 - u2, ui), e15._pt.u = p2 || 0, e15._props.push(s2));
    la(o2, r2);
  };
  _t(`padding,margin,Width,Radius`, function(e15, t2) {
    var n2 = `Top`, r2 = `Right`, i2 = `Bottom`, a2 = `Left`, o2 = (t2 < 3 ? [n2, r2, i2, a2] : [n2 + a2, n2 + r2, i2 + r2, i2 + a2]).map(function(n3) {
      return t2 < 2 ? e15 + n3 : `border` + n3 + e15;
    });
    Ji[t2 > 1 ? `border` + e15 : e15] = function(e16, t3, n3, r3, i3) {
      var a3, s2;
      if (arguments.length < 4) return a3 = o2.map(function(t4) {
        return Ui(e16, t4, n3);
      }), s2 = a3.join(` `), s2.split(a3[0]).length === 5 ? a3[0] : s2;
      a3 = (r3 + ``).split(` `), s2 = {}, o2.forEach(function(e17, t4) {
        return s2[e17] = a3[t4] = a3[t4] || a3[(t4 - 1) / 2 | 0];
      }), e16.init(t3, s2, i3);
    };
  });
  var da = { name: `css`, register: Ni, targetTest: function(e15) {
    return e15.style && e15.nodeType;
  }, init: function(e15, t2, n2, r2, i2) {
    var a2 = this._props, o2 = e15.style, s2 = n2.vars.startAt, c2, l2, u2, d2, f, p2, m, h2, g2, _3, v3, y3, b3, x2, S2, C2, w2;
    for (m in Xr || Ni(), this.styles = this.styles || Di(e15), C2 = this.styles.props, this.tween = n2, t2) if (m !== `autoRound` && (l2 = t2[m], !(lt[m] && cr(m, t2, n2, r2, e15, i2)))) {
      if (f = typeof l2, p2 = Ji[m], f === `function` && (l2 = l2.call(n2, r2, e15, i2), f = typeof l2), f === `string` && ~l2.indexOf(`random(`) && (l2 = Tn(l2)), p2) p2(this, e15, m, l2, n2) && (S2 = 1);
      else if (m.substr(0, 2) === `--`) c2 = (getComputedStyle(e15).getPropertyValue(m) + ``).trim(), l2 += ``, zn.lastIndex = 0, zn.test(c2) || (h2 = sn(c2), g2 = sn(l2), g2 ? h2 !== g2 && (c2 = Hi(e15, m, c2, g2) + g2) : h2 && (l2 += h2)), this.add(o2, `setProperty`, c2, l2, r2, i2, 0, 0, m), a2.push(m), C2.push(m, 0, o2[m]);
      else if (f !== `undefined`) {
        if (s2 && m in s2 ? (c2 = typeof s2[m] == `function` ? s2[m].call(n2, r2, e15, i2) : s2[m], P(c2) && ~c2.indexOf(`random(`) && (c2 = Tn(c2)), sn(c2 + ``) || c2 === `auto` || (c2 += ve.units[m] || sn(Ui(e15, m)) || ``), (c2 + ``).charAt(1) === `=` && (c2 = Ui(e15, m))) : c2 = Ui(e15, m), d2 = parseFloat(c2), _3 = f === `string` && l2.charAt(1) === `=` && l2.substr(0, 2), _3 && (l2 = l2.substr(2)), u2 = parseFloat(l2), m in li && (m === `autoAlpha` && (d2 === 1 && Ui(e15, `visibility`) === `hidden` && u2 && (d2 = 0), C2.push(`visibility`, 0, o2.visibility), zi(this, o2, `visibility`, d2 ? `inherit` : `hidden`, u2 ? `inherit` : `hidden`, !u2)), m !== `scale` && m !== `transform` && (m = li[m], ~m.indexOf(`,`) && (m = m.split(`,`)[0]))), v3 = m in ti, v3) {
          if (this.styles.save(m), w2 = l2, f === `string` && l2.substring(0, 6) === `var(--`) {
            if (l2 = Ai(e15, l2.substring(4, l2.indexOf(`)`))), l2.substring(0, 5) === `calc(`) {
              var T2 = e15.style.perspective;
              e15.style.perspective = l2, l2 = Ai(e15, `perspective`), T2 ? e15.style.perspective = T2 : Ri(e15, `perspective`);
            }
            u2 = parseFloat(l2);
          }
          if (y3 || (b3 = e15._gsap, b3.renderTransform && !t2.parseTransform || ta(e15, t2.parseTransform), x2 = t2.smoothOrigin !== false && b3.smooth, y3 = this._pt = new Mr(this._pt, o2, z, 0, 1, b3.renderTransform, b3, 0, -1), y3.dep = 1), m === `scale`) this._pt = new Mr(this._pt, b3, `scaleY`, b3.scaleY, (_3 ? bt(b3.scaleY, _3 + u2) : u2) - b3.scaleY || 0, ui), this._pt.u = 0, a2.push(`scaleY`, m), m += `X`;
          else if (m === `transformOrigin`) {
            C2.push(Ci, 0, o2[Ci]), l2 = Ki(l2), b3.svg ? ea(e15, l2, 0, x2, 0, this) : (g2 = parseFloat(l2.split(` `)[2]) || 0, g2 !== b3.zOrigin && zi(this, b3, `zOrigin`, b3.zOrigin, g2), zi(this, o2, m, na(c2), na(l2)));
            continue;
          } else if (m === `svgOrigin`) {
            ea(e15, l2, 1, x2, 0, this);
            continue;
          } else if (m in Xi) {
            ca(this, b3, m, d2, _3 ? bt(d2, _3 + l2) : l2);
            continue;
          } else if (m === `smoothOrigin`) {
            zi(this, b3, `smooth`, b3.smooth, l2);
            continue;
          } else if (m === `force3D`) {
            b3[m] = l2;
            continue;
          } else if (m === `transform`) {
            ua(this, l2, e15);
            continue;
          }
        } else m in o2 || (m = Mi(m) || m);
        if (v3 || (u2 || u2 === 0) && (d2 || d2 === 0) && !ci.test(l2) && m in o2) h2 = (c2 + ``).substr((d2 + ``).length), u2 ||= 0, g2 = sn(l2) || (m in ve.units ? ve.units[m] : h2), h2 !== g2 && (d2 = Hi(e15, m, c2, g2)), this._pt = new Mr(this._pt, v3 ? b3 : o2, m, d2, (_3 ? bt(d2, _3 + u2) : u2) - d2, !v3 && (g2 === `px` || m === `zIndex`) && t2.autoRound !== false ? mi : ui), this._pt.u = g2 || 0, v3 && w2 !== l2 ? (this._pt.b = c2, this._pt.e = w2, this._pt.r = pi) : h2 !== g2 && g2 !== `%` && (this._pt.b = c2, this._pt.r = fi);
        else if (m in o2) Wi.call(this, e15, m, c2, _3 ? _3 + l2 : l2);
        else if (m in e15) this.add(e15, m, c2 || e15[m], _3 ? _3 + l2 : l2, r2, i2);
        else if (m !== `parseTransform`) {
          Qe(m, l2);
          continue;
        }
        v3 || (m in o2 ? C2.push(m, 0, o2[m]) : typeof e15[m] == `function` ? C2.push(m, 2, e15[m]()) : C2.push(m, 1, c2 || e15[m])), a2.push(m);
      }
    }
    S2 && jr(this);
  }, render: function(e15, t2) {
    if (t2.tween._time || !$r()) for (var n2 = t2._pt; n2; ) n2.r(e15, n2.d), n2 = n2._next;
    else t2.styles.revert();
  }, get: Ui, aliases: li, getSetter: function(e15, t2, n2) {
    var r2 = li[t2];
    return r2 && r2.indexOf(`,`) < 0 && (t2 = r2), t2 in ti && t2 !== Ci && (e15._gsap.x || Ui(e15, `x`)) ? n2 && Qr === n2 ? t2 === `scale` ? bi : yi : (Qr = n2 || {}) && (t2 === `scale` ? xi : Si) : e15.style && !Oe(e15.style[t2]) ? _i : ~t2.indexOf(`-`) ? vi : Cr(e15, t2);
  }, core: { _removeProperty: Ri, _getMatrix: $i } };
  Kr.utils.checkPrefix = Mi, Kr.core.getStyleSaver = Di, (function(e15, t2, n2, r2) {
    var i2 = _t(e15 + `,` + t2 + `,` + n2, function(e16) {
      ti[e16] = 1;
    });
    _t(t2, function(e16) {
      ve.units[e16] = `deg`, Xi[e16] = 1;
    }), li[i2[13]] = e15 + `,` + t2, _t(r2, function(e16) {
      var t3 = e16.split(`:`);
      li[t3[1]] = i2[t3[0]];
    });
  })(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`, `rotation,rotationX,rotationY,skewX,skewY`, `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`, `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`), _t(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`, function(e15) {
    ve.units[e15] = `px`;
  }), Kr.registerPlugin(da);
  var fa = Kr.registerPlugin(da) || Kr;
  fa.core.Tween;
  var pa = e(((e15) => {
    var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.fragment`);
    function r2(e16, n3, r3) {
      var i2 = null;
      if (r3 !== void 0 && (i2 = `` + r3), n3.key !== void 0 && (i2 = `` + n3.key), `key` in n3) for (var a2 in r3 = {}, n3) a2 !== `key` && (r3[a2] = n3[a2]);
      else r3 = n3;
      return n3 = r3.ref, { $$typeof: t2, type: e16, key: i2, ref: n3 === void 0 ? null : n3, props: r3 };
    }
    e15.Fragment = n2, e15.jsx = r2, e15.jsxs = r2;
  }));
  var ma = e(((e15, t2) => {
    t2.exports = pa();
  }));
  var ha = 14;
  function ga(e15, t2, n2) {
    let r2 = 0.3 * e15 + 0.55 * t2 + 5, i2 = r2 + ha, a2 = de.findIndex(([, e16]) => e16 >= i2 - 2);
    a2 < 0 && (a2 = p.length - 1);
    let o2 = de.findIndex(([, , t3]) => t3 >= e15 * 0.39);
    return o2 > 0 && (a2 = Math.max(a2, o2 - 1)), a2 = Math.min(p.length - 1, Math.max(0, a2 + n2)), { size: p[a2], chest: Math.round(r2), garment: de[a2][1] };
  }

  // admin_index.js
  var g = i();
  var _2 = c();
  var v2 = () => matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  function y2(e15) {
    if (v2()) return;
    let t2 = e15.querySelectorAll(`.head__title .w > span`), n2 = e15.querySelectorAll(`.stat`), r2 = e15.querySelectorAll(`[data-in]`);
    fa.timeline({ defaults: { ease: `expo.out` } }).fromTo(t2, { yPercent: 105 }, { yPercent: 0, duration: 0.9, stagger: 0.06, clearProps: `transform` }, 0).fromTo(n2, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, clearProps: `transform,opacity` }, 0.12).fromTo(r2, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, clearProps: `transform,opacity` }, 0.16);
  }
  function te2(e15, t2, n2, r2 = 0.15) {
    if (v2()) {
      e15.textContent = n2(t2);
      return;
    }
    let i2 = { v: 0 };
    fa.to(i2, { v: t2, duration: 1.2, delay: r2, ease: `power3.out`, onUpdate: () => {
      e15.textContent = n2(i2.v);
    } });
  }
  function ne2(e15) {
    !e15 || v2() || fa.fromTo(e15, { scale: 0.94 }, { scale: 1, duration: 0.6, ease: `back.out(2.4)`, clearProps: `transform` });
  }
  function b2(e15, t2) {
    let n2 = document;
    if (!n2.startViewTransition || v2()) {
      t2();
      return;
    }
    let r2 = e15?.getBoundingClientRect(), i2 = r2 ? r2.left + r2.width / 2 : innerWidth / 2, a2 = r2 ? r2.top + r2.height / 2 : 0, o2 = Math.hypot(Math.max(i2, innerWidth - i2), Math.max(a2, innerHeight - a2));
    n2.startViewTransition(t2).ready.then(() => {
      document.documentElement.animate({ clipPath: [`circle(0px at ${i2}px ${a2}px)`, `circle(${o2}px at ${i2}px ${a2}px)`] }, { duration: 520, easing: `cubic-bezier(.2,.8,.2,1)`, pseudoElement: `::view-transition-new(root)` });
    }).catch(() => {
    });
  }
  var re2 = [`overview`, `orders`, `products`, `customers`, `fit`, `promos`, `settings`];
  var ie2 = [{ id: `overview`, label: `Overview` }, { id: `orders`, label: `Orders` }, { id: `products`, label: `Products` }, { id: `customers`, label: `Customers` }, { id: `fit`, label: `Fit` }, { id: `promos`, label: `Promotions` }];
  function ae2() {
    let [e15 = ``, t2 = ``] = location.hash.replace(/^#\/?/, ``).split(`?`), n2 = e15.split(`/`).filter(Boolean).map(decodeURIComponent), r2 = n2[0];
    return { page: r2 && re2.includes(r2) ? r2 : `overview`, params: n2.slice(1), query: new URLSearchParams(t2) };
  }
  var oe2 = ae2();
  var x = /* @__PURE__ */ new Set();
  addEventListener(`hashchange`, () => {
    oe2 = ae2(), x.forEach((e15) => e15());
  });
  var se = () => (0, g.useSyncExternalStore)((e15) => (x.add(e15), () => x.delete(e15)), () => oe2);
  var S = (e15) => {
    location.hash = `#/${e15.replace(/^[#/]+/, ``)}`;
  };
  var C = (/* @__PURE__ */ new Date(`2026-11-01T18:30:00+06:00`)).getTime();
  var ce2 = 864e5;
  function le(e15) {
    return () => {
      e15 |= 0, e15 = e15 + 1831565813 | 0;
      let t2 = Math.imul(e15 ^ e15 >>> 15, 1 | e15);
      return t2 = t2 + Math.imul(t2 ^ t2 >>> 7, 61 | t2) ^ t2, ((t2 ^ t2 >>> 14) >>> 0) / 4294967296;
    };
  }
  var w = le(220);
  var T = (e15) => e15[Math.floor(w() * e15.length)];
  var ue = () => (w() + w() + w() + w() - 2) / 2;
  var de2 = `Nabila.Rafi.Sumaiya.Imran.Tasnia.Fahim.Maliha.Arif.Tahsin.Nusrat.Sadia.Ayaan.Rumana.Zarif.Mehnaz.Tanvir.Farhana.Shafin.Anika.Rakib.Lamia.Sabbir.Orin.Nafis.Ishrat.Junaid.Prova.Siam.Tasfia.Hasan.Raisa.Mahir.Afsana.Ehsan.Nadia.Rezwan`.split(`.`);
  var fe = [`Sultana`, `Ahmed`, `Tabassum`, `Khan`, `Rahman`, `Hossain`, `Karim`, `Haque`, `Chowdhury`, `Islam`, `Siddiqui`, `Akter`, `Kabir`, `Mahmud`, `Nahar`, `Alam`];
  var pe2 = [`Dhaka`, `Dhaka`, `Dhaka`, `Dhaka`, `Chattogram`, `Chattogram`, `Sylhet`, `Gazipur`, `Narayanganj`, `Khulna`, `Rajshahi`, `Cox\u2019s Bazar`, `Cumilla`, `Mymensingh`];
  var E2 = de2.map((e15, t2) => {
    let n2 = fe[t2 * 7 % fe.length];
    return { id: `c${t2 + 1}`, name: `${e15} ${n2}`, email: `${e15.toLowerCase()}.${n2.toLowerCase()}@${T([`gmail.com`, `yahoo.com`, `outlook.com`, `proton.me`])}`, phone: `01${T([`3`, `5`, `7`, `8`, `9`])}${String(Math.floor(w() * 1e8)).padStart(8, `0`)}`, district: pe2[t2 % pe2.length], since: C - Math.floor(30 + w() * 600) * ce2, tier: `new`, tone: t2 % 4 };
  });
  var D = [{ id: `new`, label: `New`, tone: `sky` }, { id: `packing`, label: `Packing`, tone: `coral` }, { id: `shipped`, label: `Shipped`, tone: `teal` }, { id: `delivered`, label: `Delivered`, tone: `navy` }];
  var me2 = [`XS`, `S`, `S`, `M`, `M`, `M`, `L`, `L`, `L`, `XL`, `XL`, `XXL`];
  var he2 = y.flatMap((e15) => Array(Math.max(1, Math.round(e15.reviews / 40))).fill(e15.slug));
  function ge2(e15, t2) {
    let n2 = E2[Math.floor(w() * E2.length)], r2 = [], i2 = w() < 0.62 ? 1 : w() < 0.75 ? 2 : 3;
    for (let e16 = 0; e16 < i2; e16++) {
      let e17 = T(he2), t3 = y.find((t4) => t4.slug === e17), n3 = T(me2);
      t3.stock[n3] === 0 && (n3 = `M`);
      let i3 = r2.find((t4) => t4.slug === e17 && t4.size === n3);
      i3 ? i3.qty++ : r2.push({ slug: e17, size: n3, qty: 1, price: t3.price });
    }
    let a2 = r2.reduce((e16, t3) => e16 + t3.price * t3.qty, 0), o2 = n2.district === `Dhaka` ? w() < 0.18 ? `express` : `dhaka` : `outside`, s2 = w() < 0.22 ? w() < 0.7 ? `RAYE10` : `SALTAIR` : null, c2 = s2 === `RAYE10` ? Math.round(a2 * 0.1) : 0, l2 = ie.find((e16) => e16.id === o2).fee, d2 = s2 === `SALTAIR` || o2 !== `express` && a2 >= 3e3 ? 0 : l2, f = (C - t2) / ce2, p2 = f < 0.9 ? `new` : f < 2 ? `packing` : f < 4.5 ? `shipped` : w() < 0.06 ? `returned` : `delivered`;
    return { id: `RY-${(48211 + e15 * 37) % 1e6}`, t: t2, customer: n2.id, lines: r2, subtotal: a2, discount: c2, shipping: d2, total: a2 - c2 + d2, delivery: o2, payment: T([`cod`, `cod`, `cod`, `bkash`, `bkash`, `nagad`, `card`]), promo: s2, status: p2 };
  }
  var _e2 = (() => {
    let e15 = [], t2 = C - 25 * 6e4;
    for (let n2 = 0; n2 < 78; n2++) e15.push(ge2(78 - n2, t2)), t2 -= (n2 < 8 ? 1.4 : 5.5 + w() * 4) * 36e5;
    return e15;
  })();
  for (let e15 of E2) {
    let t2 = _e2.filter((t3) => t3.customer === e15.id && t3.status !== `returned`).reduce((e16, t3) => e16 + t3.total, 0);
    e15.tier = t2 > 16e3 ? `vip` : t2 > 6e3 ? `regular` : `new`;
  }
  var ve2 = [`Nov`, `Dec`, `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`];
  var O2 = [0.58, 0.66, 0.52, 0.61, 0.84, 1.08, 1.26, 1.32, 1.18, 1.04, 0.9, 0.96].map((e15, t2) => Math.round((56e4 * e15 * (1 + t2 * 0.025) + ue() * 22e3) / 10) * 10);
  O2.map((e15) => Math.round(e15 / (2950 + w() * 300)));
  var ye2 = 65e4;
  var be2 = { short: 0.54, long: 0.28, oversized: 0.18 };
  var k = Array.from({ length: 420 }, () => {
    let e15 = w() < 0.62, t2 = Math.round(Math.min(198, Math.max(150, (e15 ? 172 : 160) + ue() * 14))), n2 = Math.round(Math.min(116, Math.max(46, (e15 ? 72 : 58) + (t2 - (e15 ? 172 : 160)) * 0.55 + ue() * 14)));
    return { h: t2, w: n2, size: ga(t2, n2, w() < 0.7 ? 0 : w() < 0.5 ? -1 : 1).size, added: w() < 0.41 };
  });
  var A2 = { with: 0.047, without: 0.118 };
  var xe2 = [[`Too big`, 0.41], [`Too small`, 0.29], [`Colour not as pictured`, 0.14], [`Changed my mind`, 0.11], [`Arrived damaged`, 0.05]];
  var j2 = [182, 204, 231, 226, 248, 271, 263, 289, 312, 305, 334, 352];
  var Se2 = { RAYE10: 318, SALTAIR: 142 };
  var M2 = { slug: `rust`, batch: 60 };
  var Ce2 = [{ id: `n1`, icon: `alert`, title: `Rust Bengal is nearly gone`, body: `Size S has 3 left and XXL is sold out.`, t: C - 40 * 6e4, href: `#/products?q=rust` }, { id: `n2`, icon: `return`, title: `Return requested`, body: `A Clay Stripe in L is coming back from Sylhet.`, t: C - 3 * 36e5, href: `#/orders` }, { id: `n3`, icon: `tag`, title: `RAYE10 passed 300 uses`, body: `Your first-order code is your best performer.`, t: C - 26 * 36e5, href: `#/promos` }];
  var we2 = Object.fromEntries(ae.map((e15) => [e15.id, e15.label]));
  var Te2 = Object.fromEntries(ie.map((e15) => [e15.id, e15.label]));
  var Ee2 = { storeName: `Ray\xE9`, email: `hello@raye.example`, phone: `01700 000 220`, lowStock: 3, cod: true, bkash: true, nagad: true, card: true, notifyOrders: true, notifyStock: true, notifyReturns: false };
  var N2 = /[?&]record\b/.test(location.search);
  function De2() {
    return { status: {}, notes: {}, promoUses: { ...Se2 }, promoAdded: [], settings: { ...Ee2 }, theme: `light`, read: [] };
  }
  function Oe2() {
    if (N2) return De2();
    try {
      let e15 = localStorage.getItem(pe);
      return e15 ? { ...De2(), ...JSON.parse(e15) } : De2();
    } catch {
      return De2();
    }
  }
  var P2 = Oe2();
  var ke2 = 0;
  var Ae2 = /* @__PURE__ */ new Set();
  function F2(e15) {
    if (e15(P2), ke2++, !N2) try {
      localStorage.setItem(pe, JSON.stringify(P2));
    } catch {
    }
    Ae2.forEach((e16) => e16());
  }
  function I2() {
    return (0, g.useSyncExternalStore)((e15) => (Ae2.add(e15), () => Ae2.delete(e15)), () => ke2), P2;
  }
  function je2() {
    if (N2) return [];
    try {
      return JSON.parse(localStorage.getItem(`raye:v1`) || `{}`).orders ?? [];
    } catch {
      return [];
    }
  }
  function Me2() {
    let e15 = je2().filter((e16) => !E2.some((t2) => t2.email === e16.email)).map((e16, t2) => ({ id: `s-${e16.email}`, name: e16.name, email: e16.email, phone: e16.phone, district: e16.district, since: e16.t, tier: `new`, tone: t2 % 4 }));
    return [...e15.filter((t2, n2) => e15.findIndex((e16) => e16.id === t2.id) === n2), ...E2];
  }
  function L2() {
    return [...je2().map((e15) => ({ id: e15.id, t: e15.t, customer: E2.find((t2) => t2.email === e15.email)?.id ?? `s-${e15.email}`, lines: e15.lines.map((e16) => ({ slug: e16.slug, size: e16.size, qty: e16.qty, price: e16.price })), subtotal: e15.subtotal, discount: e15.discount, shipping: e15.shipping, total: e15.total, delivery: e15.delivery, payment: e15.payment, promo: e15.promo, status: `new`, fromShop: true })), ..._e2].map((e15) => ({ ...e15, status: P2.status[e15.id] ?? e15.status })).sort((e15, t2) => t2.t - e15.t);
  }
  var R2 = (e15) => Me2().find((t2) => t2.id === e15);
  function z2(e15, t2) {
    let n2 = L2().find((t3) => t3.id === e15);
    !n2 || n2.status === t2 || F2((r2) => {
      if (r2.status[e15] = t2, t2 === `returned`) for (let e16 of n2.lines) Pe2(r2, e16.slug, e16.size, e16.qty);
    });
  }
  function Ne2(e15, t2) {
    F2((n2) => {
      n2.notes[e15] = [...n2.notes[e15] ?? [], t2];
    });
  }
  var B2 = (e15) => P2.stock?.[e15] ?? me.products.find((t2) => t2.slug === e15).stock;
  var V2 = (e15) => P2.price?.[e15] ?? me.products.find((t2) => t2.slug === e15).price;
  var H = (t2) => p.reduce((e15, n2) => e15 + B2(t2)[n2], 0);
  function Pe2(e15, t2, n2, i2) {
    let a2 = { ...B2(t2) };
    a2[n2] = Math.max(0, a2[n2] + i2), e15.stock = { ...e15.stock, [t2]: a2 }, Object.assign(b(t2).stock, a2);
  }
  function Fe2(e15, t2, n2) {
    F2((r2) => Pe2(r2, e15, t2, Math.max(0, Math.min(999, n2)) - B2(e15)[t2]));
  }
  function Ie2(t2, n2) {
    F2((r2) => {
      for (let i2 of p) Pe2(r2, t2, i2, n2);
    });
  }
  function Le2(e15, t2) {
    let n2 = Math.max(100, Math.round(t2 / 10) * 10);
    F2((t3) => {
      t3.price = { ...t3.price, [e15]: n2 }, b(e15).price = n2;
    });
  }
  var Re2 = (t2) => p.filter((e15) => B2(t2)[e15] > 0 && B2(t2)[e15] <= P2.settings.lowStock);
  var ze2 = (t2) => p.filter((e15) => B2(t2)[e15] === 0);
  function Be2() {
    return [...Object.keys(me.promos), ...P2.promoAdded].map((e15) => {
      let t2 = P2.promos?.[e15], n2 = me.promos[e15];
      return { code: e15, kind: t2?.kind ?? n2.kind, value: t2?.value ?? n2.value, label: t2?.label ?? n2.label, active: t2?.active ?? true, uses: P2.promoUses[e15] ?? 0, custom: !n2 };
    });
  }
  function Ve2(e15, t2) {
    F2((n2) => {
      n2.promos = { ...n2.promos, [e15]: t2 }, !me.promos[e15] && !n2.promoAdded.includes(e15) && (n2.promoAdded = [...n2.promoAdded, e15]), t2.active ? oe[e15] = { kind: t2.kind, value: t2.value, label: t2.label } : delete oe[e15];
    });
  }
  function He2(e15) {
    F2((t2) => {
      t2.promoAdded = t2.promoAdded.filter((t3) => t3 !== e15);
      let { [e15]: n2, ...r2 } = t2.promos ?? {};
      t2.promos = r2, delete oe[e15];
    });
  }
  var Ue2 = (e15) => F2((t2) => {
    t2.settings = { ...t2.settings, ...e15 };
  });
  var We2 = (e15) => F2((t2) => {
    t2.theme = e15;
  });
  var Ge2 = (e15) => F2((t2) => {
    t2.read = [.../* @__PURE__ */ new Set([...t2.read, ...e15])];
  });
  function Ke2() {
    F2((e15) => Object.assign(e15, De2(), { theme: e15.theme }));
    for (let e15 of me.products) {
      let t2 = b(e15.slug);
      t2.price = e15.price, Object.assign(t2.stock, e15.stock);
    }
    for (let e15 of Object.keys(oe)) delete oe[e15];
    Object.assign(oe, me.promos);
  }
  var U = [];
  var qe2 = 0;
  var Je2 = 0;
  var Ye2 = /* @__PURE__ */ new Set();
  function W(e15) {
    let t2 = ++Je2;
    U = [...U.slice(-2), { id: t2, text: e15 }], qe2++, Ye2.forEach((e16) => e16()), setTimeout(() => {
      U = U.filter((e16) => e16.id !== t2), qe2++, Ye2.forEach((e16) => e16());
    }, 3200);
  }
  function Xe2() {
    return (0, g.useSyncExternalStore)((e15) => (Ye2.add(e15), () => Ye2.delete(e15)), () => qe2), U;
  }
  function Ze2() {
    let e15 = me.products.find((e16) => e16.slug === M2.slug), t2 = e15 ? Object.values(e15.stock).reduce((e16, t3) => e16 + t3, 0) : M2.batch;
    return Math.min(M2.batch, Math.max(0, M2.batch - t2));
  }
  var G = ma();
  var Qe2 = { search: `M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm5 11.5 4 4`, plus: `M12 5v14M5 12h14`, minus: `M5 12h14`, bag: `M6 8h12l-1 12H7zm3 0V6.5a3 3 0 0 1 6 0V8`, box: `M4 8 12 4l8 4v8l-8 4-8-4zm0 0 8 4 8-4m-8 4v8`, truck: `M3 6.5h11v9H3zm11 3h4l3 3v3h-7m-9 2.5a1.8 1.8 0 1 0 0-.1m11 .1a1.8 1.8 0 1 0 0-.1`, check: `M5 12.5l4.5 4.5L19 7.5`, users: `M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-6 9a6 6 0 0 1 12 0m1-9a3 3 0 1 0 0-6m2 15h3a5 5 0 0 0-4-5`, ruler: `M3 15 15 3l6 6L9 21l-6-6zm4-2 2 2m1-5 2 2m1-5 2 2`, tag: `M3.5 12.5V4h8.5l8.5 8.5-8.5 8.5zM8 8.5h.01`, gear: `M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-6.2 2 2.1 2.9-.4.7 2.8 2.6 1.4-1 2.8 1 2.8-2.6 1.4-.7 2.8-2.9-.4-2 2.1-2-2.1-2.9.4-.7-2.8-2.6-1.4 1-2.8-1-2.8 2.6-1.4.7-2.8 2.9.4z`, sun: `M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-5.5v2m0 15v2M4.6 4.6 6 6m12 12 1.4 1.4M2.5 12h2m15 0h2M4.6 19.4 6 18M18 6l1.4-1.4`, moon: `M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z`, bell: `M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15zm4 4.5a2 2 0 0 0 4 0`, store: `M4 9.5 5.5 4h13L20 9.5M4 9.5h16M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0M5.5 12.5V20h13v-7.5M10 20v-4.5h4V20`, out: `M8 16 16 8m-6 0h6v6`, dots: `M5.5 12h.01M12 12h.01M18.5 12h.01`, close: `M6 6l12 12M18 6 6 18`, alert: `M12 4 2.8 19.5h18.4zm0 6v4m0 3h.01`, return: `M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3`, trend: `M3.5 16.5 9 11l4 4 7.5-7.5M15 7.5h5.5V13`, grid: `M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z`, list: `M8.5 6.5h12m-12 5.5h12m-12 5.5h12M4 6.5h.01M4 12h.01M4 17.5h.01`, download: `M12 4v11.5M7 10.5l5 5 5-5M5 19.5h14`, clock: `M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5V12l3 2`, cash: `M3 6.5h18v11H3zm9 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6 9.5h.01M18 14.5h.01`, sparkle: `M12 3.5 13.8 10.2 20.5 12l-6.7 1.8L12 20.5l-1.8-6.7L3.5 12l6.7-1.8z`, shirt: `M8.5 3.5 4 6l1.5 4.5L8 9.6V20.5h8V9.6l2.5.9L20 6l-4.5-2.5a3.5 3.5 0 0 1-7 0z`, home: `M4 10.5 12 4l8 6.5V20h-5.5v-5.5h-5V20H4z`, note: `M5 4h14v16H5zm4 5h6m-6 4h6m-6 4h3`, undo: `M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3`, arrowR: `M5 12h14m-6-6 6 6-6 6`, menu: `M4 7h16M4 12h16M4 17h16`, calendar: `M3.5 5h17v15.5h-17zm0 5h17M8 3v4m8-4v4` };
  function K({ name: e15, size: t2 = 18, className: n2 = `` }) {
    return (0, G.jsx)(`svg`, { className: `ico ${n2}`, viewBox: `0 0 24 24`, width: t2, height: t2, "aria-hidden": `true`, children: (0, G.jsx)(`path`, { d: Qe2[e15] ?? Qe2.dots }) });
  }
  var q = (e15) => `\u09F3` + Math.round(e15).toLocaleString(`en-IN`);
  var $e2 = (e15) => e15 >= 1e5 ? `\u09F3${(e15 / 1e5).toFixed(e15 >= 1e6 ? 1 : 2)}L` : e15 >= 1e3 ? `\u09F3${(e15 / 1e3).toFixed(1)}K` : q(e15);
  var et2 = (e15) => new Date(e15).toLocaleString(`en-GB`, { day: `numeric`, month: `short`, hour: `2-digit`, minute: `2-digit`, timeZone: `Asia/Dhaka` });
  var tt2 = (e15) => new Date(e15).toLocaleDateString(`en-GB`, { day: `numeric`, month: `short`, year: `numeric`, timeZone: `Asia/Dhaka` });
  var J = (e15, t2, n2 = t2 + `s`) => `${e15.toLocaleString(`en-IN`)} ${e15 === 1 ? t2 : n2}`;
  function Y({ title: e15, stats: t2, actions: n2 }) {
    return (0, G.jsxs)(`header`, { className: `head`, children: [(0, G.jsx)(`h1`, { className: `head__title`, tabIndex: -1, children: e15.map((e16) => (0, G.jsx)(`span`, { className: `w`, children: (0, G.jsx)(`span`, { children: e16 }) }, e16)) }), (0, G.jsx)(`div`, { className: `head__stats`, children: t2 }), n2 && (0, G.jsx)(`div`, { className: `head__actions`, children: n2 })] });
  }
  function X({ icon: e15, value: t2, label: n2, badge: r2, fmt: i2 }) {
    return (0, G.jsxs)(`div`, { className: `stat`, children: [(0, G.jsx)(`span`, { className: `stat__ico`, children: (0, G.jsx)(K, { name: e15 }) }), (0, G.jsxs)(`span`, { children: [(0, G.jsxs)(`span`, { className: `stat__value`, children: [(0, G.jsx)(nt2, { value: t2, fmt: i2 }), r2] }), (0, G.jsx)(`span`, { className: `stat__label`, children: n2 })] })] });
  }
  function nt2({ value: e15, fmt: t2, className: n2 = `` }) {
    let r2 = (0, g.useRef)(null), i2 = (0, g.useRef)(false);
    return (0, g.useLayoutEffect)(() => {
      if (r2.current) {
        if (i2.current) {
          r2.current.textContent = t2(e15);
          return;
        }
        i2.current = true, te2(r2.current, e15, t2);
      }
    }, [e15]), (0, G.jsx)(`b`, { ref: r2, className: `num ${n2}`, children: t2(0) });
  }
  function Z({ title: e15, sub: t2, tools: n2, className: r2 = ``, children: i2, tone: a2 }) {
    return (0, G.jsxs)(`section`, { className: `card${a2 ? ` card--${a2}` : ``} ${r2}`, "data-in": true, children: [(e15 || n2) && (0, G.jsxs)(`div`, { className: `card__head`, children: [(0, G.jsxs)(`div`, { children: [(0, G.jsx)(`h2`, { className: `card__title`, children: e15 }), t2 && (0, G.jsx)(`p`, { className: `card__sub`, children: t2 })] }), n2 && (0, G.jsx)(`div`, { className: `card__tools`, children: n2 })] }), i2] });
  }
  function rt2({ value: e15, options: t2, onChange: n2, label: r2 }) {
    let i2 = (0, g.useRef)(null), a2 = Math.max(0, t2.findIndex((t3) => t3.id === e15)), o2 = (0, g.useRef)(true);
    return (0, g.useLayoutEffect)(() => {
      let e16 = i2.current;
      if (!e16) return;
      let t3 = `${a2 * 100}%`;
      if (o2.current || v2()) {
        fa.set(e16, { x: t3 }), o2.current = false;
        return;
      }
      fa.to(e16, { x: t3, duration: 0.45, ease: `expo.out` });
    }, [a2]), (0, G.jsxs)(`div`, { className: `seg`, role: `group`, "aria-label": r2, style: { "--n": t2.length }, children: [(0, G.jsx)(`span`, { className: `seg__thumb`, ref: i2, "aria-hidden": `true` }), t2.map((t3) => (0, G.jsx)(`button`, { type: `button`, className: `seg__btn`, "aria-pressed": t3.id === e15, onClick: () => n2(t3.id), children: t3.label }, t3.id))] });
  }
  function it2(e15, t2) {
    let n2 = (0, g.useRef)(null);
    return (0, g.useEffect)(() => {
      let t3 = n2.current;
      if (t3) {
        if (e15 && !t3.open) {
          t3.showModal();
          let e16 = t3.firstElementChild;
          if (e16 && !v2()) {
            let n3 = matchMedia(`(max-width: 720px)`).matches, r2 = t3.classList.contains(`drawer`);
            fa.fromTo(e16, r2 ? n3 ? { yPercent: 100 } : { xPercent: 100 } : { opacity: 0, y: 18, scale: 0.97 }, { xPercent: 0, yPercent: 0, opacity: 1, y: 0, scale: 1, duration: 0.55, ease: `expo.out`, clearProps: `transform,opacity` });
          }
        }
        !e15 && t3.open && t3.close();
      }
    }, [e15]), (0, g.useEffect)(() => {
      let e16 = n2.current;
      if (!e16) return;
      let r2 = (e17) => {
        e17.preventDefault(), t2();
      }, i2 = (n3) => {
        n3.target === e16 && t2();
      };
      return e16.addEventListener(`cancel`, r2), e16.addEventListener(`click`, i2), () => {
        e16.removeEventListener(`cancel`, r2), e16.removeEventListener(`click`, i2);
      };
    }, [t2]), n2;
  }
  function at2({ open: e15, onClose: t2, title: n2, sub: r2, children: i2, foot: a2 }) {
    return (0, G.jsx)(`dialog`, { className: `drawer`, ref: it2(e15, t2), "aria-label": typeof n2 == `string` ? n2 : void 0, children: (0, G.jsxs)(`div`, { className: `drawer__panel`, children: [(0, G.jsxs)(`header`, { className: `drawer__head`, children: [(0, G.jsxs)(`div`, { children: [(0, G.jsx)(`h2`, { className: `drawer__title`, children: n2 }), r2 && (0, G.jsx)(`p`, { className: `card__sub`, children: r2 })] }), (0, G.jsx)(`button`, { type: `button`, className: `ibtn`, onClick: t2, "aria-label": `Close`, children: (0, G.jsx)(K, { name: `close` }) })] }), (0, G.jsx)(`div`, { className: `drawer__body`, children: e15 && i2 }), a2 && (0, G.jsx)(`footer`, { className: `drawer__foot`, children: a2 })] }) });
  }
  function ot2({ open: e15, onClose: t2, title: n2, children: r2 }) {
    return (0, G.jsx)(`dialog`, { className: `modal`, ref: it2(e15, t2), "aria-label": n2, children: (0, G.jsxs)(`div`, { className: `modal__panel`, children: [(0, G.jsxs)(`header`, { className: `drawer__head`, children: [(0, G.jsx)(`h2`, { className: `modal__title`, children: n2 }), (0, G.jsx)(`button`, { type: `button`, className: `ibtn`, onClick: t2, "aria-label": `Close`, children: (0, G.jsx)(K, { name: `close` }) })] }), e15 && r2] }) });
  }
  function st2({ label: e15, icon: t2 = `dots`, items: n2, className: r2 = `ibtn ibtn--sm`, align: i2 = `end`, children: a2 }) {
    let [o2, s2] = (0, g.useState)(false), c2 = (0, g.useRef)(null), l2 = (0, g.useRef)(null);
    return (0, g.useEffect)(() => {
      if (!o2) return;
      l2.current && !v2() && fa.fromTo(l2.current, { opacity: 0, y: -6, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: `expo.out`, clearProps: `transform,opacity` }), l2.current?.querySelector(`[role=menuitem]`)?.focus();
      let e16 = (e17) => {
        c2.current?.contains(e17.target) || s2(false);
      }, t3 = (e17) => {
        if (e17.key === `Escape` && (s2(false), c2.current?.querySelector(`button`)?.focus()), e17.key === `ArrowDown` || e17.key === `ArrowUp`) {
          e17.preventDefault();
          let t4 = [...l2.current?.querySelectorAll(`[role=menuitem]`) ?? []];
          t4[(t4.indexOf(document.activeElement) + (e17.key === `ArrowDown` ? 1 : -1) + t4.length) % t4.length]?.focus();
        }
      };
      return addEventListener(`pointerdown`, e16), addEventListener(`keydown`, t3), () => {
        removeEventListener(`pointerdown`, e16), removeEventListener(`keydown`, t3);
      };
    }, [o2]), (0, G.jsxs)(`div`, { className: `menu`, ref: c2, children: [(0, G.jsx)(`button`, { type: `button`, className: r2, "aria-label": e15, title: e15, "aria-haspopup": `menu`, "aria-expanded": o2, onClick: (e16) => {
      e16.stopPropagation(), s2((e17) => !e17);
    }, children: a2 ?? (0, G.jsx)(K, { name: t2 }) }), o2 && (0, G.jsx)(`div`, { className: `pop pop--${i2}`, role: `menu`, ref: l2, onClick: (e16) => e16.stopPropagation(), children: n2.map((e16, t3) => e16 === `sep` ? (0, G.jsx)(`hr`, {}, t3) : (0, G.jsxs)(`button`, { type: `button`, role: `menuitem`, className: `menu__item${e16.danger ? ` is-danger` : ``}`, onClick: () => {
      s2(false), e16.onSelect();
    }, children: [e16.icon && (0, G.jsx)(K, { name: e16.icon, size: 16 }), e16.label] }, e16.label)) })] });
  }
  function ct2() {
    let e15 = Xe2(), t2 = (0, g.useRef)(null), n2 = (0, g.useRef)(/* @__PURE__ */ new Set());
    return (0, g.useLayoutEffect)(() => {
      for (let e16 of t2.current?.querySelectorAll(`.toast`) ?? []) {
        let t3 = Number(e16.dataset.id);
        n2.current.has(t3) || (n2.current.add(t3), v2() || fa.fromTo(e16, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: `expo.out`, clearProps: `transform,opacity` }));
      }
    }, [e15]), (0, G.jsx)(`div`, { className: `toasts`, ref: t2, role: `status`, "aria-live": `polite`, children: e15.map((e16) => (0, G.jsxs)(`p`, { className: `toast`, "data-id": e16.id, children: [(0, G.jsx)(K, { name: `check`, size: 16 }), e16.text] }, e16.id)) });
  }
  var lt2 = (e15) => e15.split(` `).map((e16) => e16[0]).slice(0, 2).join(``);
  function ut2({ name: e15, tone: t2 = 0, size: n2 = `md` }) {
    return (0, G.jsx)(`span`, { className: `av av--${n2} av--t${t2}`, "aria-hidden": `true`, children: lt2(e15) });
  }
  function dt2({ s: e15 }) {
    let t2 = D.find((t3) => t3.id === e15);
    return (0, G.jsxs)(`span`, { className: `spill spill--${t2?.tone ?? `lost`}`, children: [(0, G.jsx)(`i`, {}), t2?.label ?? `Returned`] });
  }
  function ft2({ on: e15, onChange: t2, label: n2 }) {
    return (0, G.jsx)(`button`, { type: `button`, role: `switch`, className: `switch`, "aria-checked": e15, "aria-label": n2, onClick: () => t2(!e15) });
  }
  function pt2({ img: e15, size: t2 = 44 }) {
    return (0, G.jsx)(`img`, { className: `thumb`, src: e15.src, width: t2, height: Math.round(t2 * 1.25), alt: ``, loading: `lazy`, decoding: `async` });
  }
  function mt2({ icon: e15, title: t2, text: n2 }) {
    return (0, G.jsxs)(`div`, { className: `empty`, children: [(0, G.jsx)(K, { name: e15, size: 28 }), (0, G.jsx)(`p`, { className: `empty__title`, children: t2 }), (0, G.jsx)(`p`, { className: `empty__text`, children: n2 })] });
  }
  function ht2(e15) {
    if (e15.length < 2) return ``;
    let t2 = e15.length, n2 = [], r2 = [];
    for (let r3 = 0; r3 < t2 - 1; r3++) n2.push((e15[r3 + 1][1] - e15[r3][1]) / (e15[r3 + 1][0] - e15[r3][0]));
    r2.push(n2[0]);
    for (let e16 = 1; e16 < t2 - 1; e16++) r2.push(n2[e16 - 1] * n2[e16] <= 0 ? 0 : (n2[e16 - 1] + n2[e16]) / 2);
    r2.push(n2[t2 - 2]);
    let i2 = `M${e15[0][0]},${e15[0][1]}`;
    for (let n3 = 0; n3 < t2 - 1; n3++) {
      let [t3, a2] = e15[n3], [o2, s2] = e15[n3 + 1], c2 = (o2 - t3) / 3;
      i2 += ` C${t3 + c2},${a2 + r2[n3] * c2} ${o2 - c2},${s2 - r2[n3 + 1] * c2} ${o2},${s2}`;
    }
    return i2;
  }
  function gt2({ labels: e15, series: t2, height: n2 = 240, fmt: r2, axis: i2 }) {
    let a2 = (0, g.useId)().replace(/:/g, ``), o2 = (0, g.useRef)(null), s2 = (0, g.useRef)(null), [c2, l2] = (0, g.useState)(640), [u2, d2] = (0, g.useState)(null);
    (0, g.useLayoutEffect)(() => {
      let e16 = o2.current, t3 = new ResizeObserver(() => l2(Math.max(260, e16.clientWidth)));
      return t3.observe(e16), () => t3.disconnect();
    }, []), (0, g.useLayoutEffect)(() => {
      !s2.current || v2() || fa.fromTo(s2.current, { scaleX: 0 }, { scaleX: 1, duration: 1.3, ease: `power3.inOut`, svgOrigin: `0 0` });
    }, [e15.join() + t2.map((e16) => e16.values.join()).join(`|`)]);
    let f = Math.max(...t2.flatMap((e16) => e16.values)) * 1.12, m = 10 ** Math.floor(Math.log10(f / 3)), h2 = Math.ceil(f / 3 / m) * m, ee = h2 * 3, _3 = (t3) => 46 + t3 * (c2 - 46 - 12) / Math.max(1, e15.length - 1), y3 = (e16) => 12 + (1 - e16 / ee) * (n2 - 12 - 26), te3 = (t3) => Math.max(0, Math.min(e15.length - 1, Math.round((t3 - 46) / (c2 - 46 - 12) * (e15.length - 1))));
    return (0, G.jsxs)(`div`, { className: `chart`, ref: o2, tabIndex: 0, role: `img`, "aria-label": t2.map((t3) => `${t3.label}: ${e15.map((e16, n3) => `${e16} ${r2(t3.values[n3])}`).join(`, `)}`).join(`. `), onPointerMove: (e16) => d2(te3(e16.clientX - o2.current.getBoundingClientRect().left)), onPointerLeave: () => d2(null), onKeyDown: (t3) => {
      (t3.key === `ArrowRight` || t3.key === `ArrowLeft`) && d2((n3) => Math.max(0, Math.min(e15.length - 1, (n3 ?? e15.length - 1) + (t3.key === `ArrowRight` ? 1 : -1))));
    }, onBlur: () => d2(null), children: [(0, G.jsxs)(`svg`, { className: `chart__svg`, width: c2, height: n2, viewBox: `0 0 ${c2} ${n2}`, children: [(0, G.jsxs)(`defs`, { children: [(0, G.jsx)(`clipPath`, { id: `c${a2}`, children: (0, G.jsx)(`rect`, { ref: s2, x: `0`, y: `0`, width: c2, height: n2 }) }), t2.filter((e16) => e16.area).map((e16) => (0, G.jsxs)(`linearGradient`, { id: `g${a2}${e16.tone}`, x1: `0`, y1: `0`, x2: `0`, y2: `1`, children: [(0, G.jsx)(`stop`, { offset: `0`, className: `stop stop--${e16.tone}`, stopOpacity: `.24` }), (0, G.jsx)(`stop`, { offset: `1`, className: `stop stop--${e16.tone}`, stopOpacity: `0` })] }, e16.label))] }), (0, G.jsx)(`g`, { className: `chart__grid`, children: [0, 1, 2, 3].map((e16) => (0, G.jsxs)(`g`, { children: [(0, G.jsx)(`line`, { x1: 46, x2: c2 - 12, y1: y3(h2 * e16), y2: y3(h2 * e16) }), (0, G.jsx)(`text`, { x: 36, y: y3(h2 * e16) + 4, textAnchor: `end`, children: i2(h2 * e16) })] }, e16)) }), (0, G.jsx)(`g`, { className: `chart__x`, children: e15.map((e16, t3) => (0, G.jsx)(`text`, { x: _3(t3), y: n2 - 6, textAnchor: `middle`, children: e16 }, e16 + t3)) }), (0, G.jsx)(`g`, { clipPath: `url(#c${a2})`, children: t2.map((t3) => {
      let n3 = t3.values.map((e16, t4) => [_3(t4), y3(e16)]), r3 = t3.dashed ? `M${n3.map((e16) => e16.join(`,`)).join(` L`)}` : ht2(n3);
      return (0, G.jsxs)(`g`, { children: [t3.area && (0, G.jsx)(`path`, { d: `${r3} L${_3(e15.length - 1)},${y3(0)} L${_3(0)},${y3(0)} Z`, fill: `url(#g${a2}${t3.tone})` }), (0, G.jsx)(`path`, { className: `chart__line chart__line--${t3.tone}${t3.dashed ? ` is-dashed` : ``}`, d: r3 })] }, t3.label);
    }) }), u2 !== null && (0, G.jsxs)(`g`, { children: [(0, G.jsx)(`line`, { className: `chart__cross`, x1: _3(u2), x2: _3(u2), y1: 12, y2: n2 - 26 }), t2.filter((e16) => !e16.dashed).map((e16) => (0, G.jsx)(`circle`, { className: `chart__dot chart__dot--${e16.tone}`, cx: _3(u2), cy: y3(e16.values[u2]), r: `5` }, e16.label))] })] }), u2 !== null && (0, G.jsxs)(`div`, { className: `chart__tip`, style: { transform: `translate(${Math.min(c2 - 170, Math.max(0, _3(u2) - 80))}px, ${Math.max(0, y3(Math.max(...t2.map((e16) => e16.values[u2]))) - 74)}px)` }, children: [(0, G.jsx)(`b`, { children: e15[u2] }), t2.map((e16) => (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`i`, { className: `tone--${e16.tone}` }), e16.label, (0, G.jsx)(`strong`, { children: r2(e16.values[u2]) })] }, e16.label))] })] });
  }
  function _t2({ value: e15, size: t2 = 168, tone: n2 = `coral`, children: r2 }) {
    let i2 = (0, g.useRef)(null), a2 = 2 * Math.PI * 42;
    return (0, g.useLayoutEffect)(() => {
      let t3 = i2.current;
      if (!t3) return;
      t3.style.strokeDasharray = `${a2 * e15} ${a2}`;
      let n3 = t3.ownerSVGElement;
      v2() ? fa.set(n3, { rotation: -90 }) : fa.fromTo(n3, { rotation: -200, opacity: 0 }, { rotation: -90, opacity: 1, duration: 1.3, ease: `expo.out` });
    }, [e15]), (0, G.jsxs)(`div`, { className: `ring`, style: { width: t2, height: t2 }, children: [(0, G.jsxs)(`svg`, { viewBox: `0 0 100 100`, "aria-hidden": `true`, children: [(0, G.jsx)(`circle`, { className: `ring__track`, cx: `50`, cy: `50`, r: 42 }), (0, G.jsx)(`circle`, { ref: i2, className: `ring__arc tone-stroke--${n2}`, cx: `50`, cy: `50`, r: 42 })] }), (0, G.jsx)(`div`, { className: `ring__mid`, children: r2 })] });
  }
  function vt2({ data: e15, tone: t2 = `teal`, hi: n2, fmt: r2 }) {
    let i2 = (0, g.useRef)(null), a2 = Math.max(...e15.map((e16) => e16.value), 1);
    return (0, g.useLayoutEffect)(() => {
      v2() || fa.fromTo(i2.current.querySelectorAll(`.bars__bar`), { scaleY: 0 }, { scaleY: 1, duration: 0.9, ease: `expo.out`, stagger: 0.04, transformOrigin: `50% 100%`, clearProps: `transform` });
    }, [e15.map((e16) => e16.value).join()]), (0, G.jsx)(`div`, { className: `bars`, ref: i2, role: `img`, "aria-label": e15.map((e16) => `${e16.label} ${r2(e16.value)}`).join(`, `), children: e15.map((e16, i3) => (0, G.jsxs)(`div`, { className: `bars__col${i3 === n2 ? ` is-hi` : ``}`, children: [(0, G.jsx)(`span`, { className: `bars__val`, children: r2(e16.value) }), (0, G.jsx)(`div`, { className: `bars__track`, children: (0, G.jsx)(`span`, { className: `bars__bar tone--${e16.tone ?? t2}`, style: { height: `${e16.value / a2 * 100}%` } }) }), (0, G.jsx)(`span`, { className: `bars__lab`, children: e16.label })] }, e16.label)) });
  }
  function yt2(e15 = 3e4) {
    let [t2, n2] = (0, g.useState)(Date.now());
    return (0, g.useEffect)(() => {
      let t3 = setInterval(() => n2(Date.now()), e15);
      return () => clearInterval(t3);
    }, [e15]), t2;
  }
  function bt2() {
    I2();
    let [t2, n2] = (0, g.useState)(`12`), i2 = L2(), a2 = i2.filter((e15) => e15.status === `new` || e15.status === `packing`), o2 = O2[O2.length - 1], c2 = O2[O2.length - 2], l2 = Math.round((o2 - c2) / c2 * 100), u2 = i2.filter((e15) => e15.status !== `returned`), d2 = u2.reduce((e15, t3) => e15 + t3.total, 0) / Math.max(1, u2.length), f = t2 === `6` ? 6 : 12, p2 = ve2.slice(-f), m = O2.slice(-f), ee = m.filter((e15) => e15 >= ye2).length, _3 = (0, g.useMemo)(() => {
      let e15 = {};
      for (let t3 of u2) for (let n3 of t3.lines) {
        let t4 = e15[n3.slug] ??= { units: 0, rev: 0 };
        t4.units += n3.qty, t4.rev += n3.qty * n3.price;
      }
      return Object.entries(e15).sort((e16, t3) => t3[1].units - e16[1].units).slice(0, 5);
    }, [u2.length]), v3 = _3[0]?.[1].units ?? 1, y3 = b(M2.slug), te3 = Ze2(), ne3 = yt2(), b3 = Math.max(0, ne - ne3), re3 = Math.floor(b3 / 864e5), ie3 = Math.floor(b3 / 36e5 % 24), ae3 = Math.floor(b3 / 6e4 % 60), oe3 = y.filter((e15) => Re2(e15.slug).length || ze2(e15.slug).length).slice(0, 5), x2 = [{ id: `short`, label: `Short sleeve`, tone: `coral`, share: be2.short }, { id: `long`, label: `Long sleeve`, tone: `teal`, share: be2.long }, { id: `oversized`, label: `Oversized`, tone: `navy`, share: be2.oversized }];
    return (0, G.jsxs)(`div`, { className: `view view--overview`, children: [(0, G.jsx)(Y, { title: [`Shop`, `Overview`], stats: (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(X, { icon: `trend`, value: o2, fmt: q, label: `Sales in October`, badge: (0, G.jsxs)(`span`, { className: `badge badge--${l2 >= 0 ? `teal` : `coral`}`, children: [l2 >= 0 ? `+` : ``, l2, `% vs September`] }) }), (0, G.jsx)(X, { icon: `bag`, value: a2.length, fmt: (e15) => String(Math.round(e15)), label: `Orders to pack` }), (0, G.jsx)(X, { icon: `cash`, value: d2, fmt: q, label: `Average order` })] }) }), (0, G.jsxs)(`div`, { className: `ov`, children: [(0, G.jsxs)(Z, { className: `ov__sales`, title: `Sales`, tools: (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(rt2, { label: `Range`, value: t2, onChange: n2, options: [{ id: `6`, label: `6M` }, { id: `12`, label: `12M` }] }), (0, G.jsx)(`a`, { className: `ibtn`, href: `#/customers`, "aria-label": `Customers`, title: `Customers`, children: (0, G.jsx)(K, { name: `out` }) })] }), children: [(0, G.jsxs)(`p`, { className: `big`, children: [(0, G.jsx)(nt2, { value: m.reduce((e15, t3) => e15 + t3, 0), fmt: q }), (0, G.jsxs)(`span`, { children: [`in `, f, ` months \xB7 `, (0, G.jsx)(`b`, { children: ee }), ` of `, f, ` months at target`] })] }), (0, G.jsxs)(`div`, { className: `legend`, children: [(0, G.jsxs)(`span`, { children: [(0, G.jsx)(`i`, { className: `tone--coral` }), `Sales`] }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`i`, { className: `tone--navy dash` }), `Monthly target \xB7 `, $e2(ye2)] })] }), (0, G.jsx)(gt2, { labels: p2, height: 250, fmt: q, axis: (e15) => e15 ? `\u09F3${+(e15 / 1e5).toFixed(1)}L` : `0`, series: [{ label: `Sales`, values: m, tone: `coral`, area: true }, { label: `Target`, values: p2.map(() => ye2), tone: `navy`, dashed: true }] })] }), (0, G.jsx)(Z, { className: `ov__pack`, title: `To pack`, sub: `${J(a2.length, `order`)} waiting`, tools: (0, G.jsx)(`a`, { className: `ibtn`, href: `#/orders`, "aria-label": `All orders`, title: `All orders`, children: (0, G.jsx)(K, { name: `out` }) }), children: (0, G.jsx)(`div`, { className: `blocks`, children: [...a2.filter((e15) => e15.status === `new`).slice(0, 2), ...a2.filter((e15) => e15.status === `packing`).slice(0, 2)].map((e15) => {
      let t3 = R2(e15.customer), n3 = D.find((t4) => t4.id === e15.status).tone, i3 = e15.lines.reduce((e16, t4) => e16 + t4.qty, 0);
      return (0, G.jsxs)(`a`, { className: `block block--${n3}`, href: `#/orders/${e15.id}`, children: [(0, G.jsxs)(`span`, { className: `block__meta`, children: [e15.status === `new` ? `New` : `Packing`, ` \xB7 `, et2(e15.t)] }), (0, G.jsx)(`b`, { className: `block__title`, children: t3?.name ?? `Shop customer` }), (0, G.jsxs)(`span`, { className: `block__sub`, children: [J(i3, `shirt`), ` \xB7 `, t3?.district] }), (0, G.jsx)(`span`, { className: `block__lines`, children: e15.lines.map((e16) => (0, G.jsxs)(`span`, { children: [b(e16.slug).name, (0, G.jsxs)(`b`, { children: [e16.size, e16.qty > 1 ? ` \xD7${e16.qty}` : ``] })] }, e16.slug + e16.size)) }), (0, G.jsxs)(`span`, { className: `block__foot`, children: [(0, G.jsx)(`b`, { className: `block__fig`, children: q(e15.total) }), (0, G.jsx)(`span`, { className: `block__thumbs`, children: e15.lines.slice(0, 3).map((e16) => (0, G.jsx)(pt2, { img: b(e16.slug).img, size: 26 }, e16.slug + e16.size)) })] })] }, e15.id);
    }) }) }), (0, G.jsx)(Z, { className: `ov__drop`, tone: `teal`, title: `Drop 03 \xB7 Rust Bengal`, tools: (0, G.jsx)(`a`, { className: `ibtn ibtn--on-dark`, href: `#/products/rust`, "aria-label": `Open Rust Bengal`, title: `Open Rust Bengal`, children: (0, G.jsx)(K, { name: `out` }) }), children: (0, G.jsxs)(`div`, { className: `drop`, children: [(0, G.jsxs)(_t2, { value: te3 / M2.batch, tone: `sand`, children: [(0, G.jsxs)(`b`, { children: [Math.round(te3 / M2.batch * 100), `%`] }), (0, G.jsx)(`span`, { children: `sold through` })] }), (0, G.jsxs)(`dl`, { className: `drop__figs`, children: [(0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Sold` }), (0, G.jsxs)(`dd`, { children: [te3, ` of `, M2.batch] })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Left` }), (0, G.jsx)(`dd`, { children: H(y3.slug) })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Closes in` }), (0, G.jsxs)(`dd`, { className: `num`, children: [re3, `d `, ie3, `h `, ae3, `m`] })] })] })] }) }), (0, G.jsxs)(Z, { className: `ov__mix`, title: `Sales by cut`, sub: `Share of October sales`, children: [(0, G.jsxs)(`p`, { className: `big big--sm`, children: [(0, G.jsx)(nt2, { value: o2, fmt: q }), (0, G.jsxs)(`span`, { children: [`across `, J(y.length, `shirt`)] })] }), (0, G.jsx)(`div`, { className: `mix`, children: x2.map((e15) => (0, G.jsx)(`span`, { className: `mix__bar tone--${e15.tone}`, style: { flexGrow: e15.share }, title: e15.label }, e15.id)) }), (0, G.jsx)(`ul`, { className: `rows`, children: x2.map((e15) => (0, G.jsxs)(`li`, { children: [(0, G.jsxs)(`span`, { className: `rows__name`, children: [(0, G.jsx)(`i`, { className: `tone--${e15.tone}` }), e15.label] }), (0, G.jsx)(`span`, { className: `num`, children: q(o2 * e15.share) }), (0, G.jsxs)(`span`, { className: `muted num`, children: [Math.round(e15.share * 100), `%`] })] }, e15.id)) })] }), (0, G.jsx)(Z, { className: `ov__best`, title: `Best sellers`, sub: `Last three weeks`, children: (0, G.jsx)(`ol`, { className: `best`, children: _3.map(([e15, t3], n3) => {
      let i3 = b(e15);
      return (0, G.jsxs)(`li`, { children: [(0, G.jsx)(`span`, { className: `best__rank`, children: n3 + 1 }), (0, G.jsx)(pt2, { img: i3.img, size: 40 }), (0, G.jsxs)(`span`, { className: `best__name`, children: [(0, G.jsx)(`b`, { children: i3.name }), (0, G.jsx)(`span`, { className: `meter`, children: (0, G.jsx)(`span`, { className: `meter__fill tone--teal`, style: { transform: `scaleX(${t3.units / v3})` } }) })] }), (0, G.jsxs)(`span`, { className: `best__fig`, children: [(0, G.jsx)(`b`, { className: `num`, children: t3.units }), (0, G.jsx)(`small`, { children: $e2(t3.rev) })] })] }, e15);
    }) }) }), (0, G.jsx)(Z, { className: `ov__stock`, title: `Running low`, sub: `Sizes at ${P2.settings.lowStock} or fewer`, tools: (0, G.jsx)(`a`, { className: `btn btn--ghost btn--sm`, href: `#/products?filter=low`, children: `All stock` }), children: (0, G.jsx)(`ul`, { className: `alerts`, children: oe3.map((t3) => (0, G.jsxs)(`li`, { children: [(0, G.jsx)(pt2, { img: t3.img, size: 36 }), (0, G.jsxs)(`a`, { className: `alerts__name`, href: `#/products/${t3.slug}`, children: [(0, G.jsx)(`b`, { children: t3.name }), (0, G.jsxs)(`small`, { children: [H(t3.slug), ` in stock`] })] }), (0, G.jsx)(`span`, { className: `sizes-mini`, children: p.map((e15) => {
      let n3 = B2(t3.slug)[e15];
      return (0, G.jsx)(`i`, { className: n3 === 0 ? `is-out` : n3 <= P2.settings.lowStock ? `is-low` : ``, title: `${e15}: ${n3}`, children: e15 }, e15);
    }) }), (0, G.jsx)(`button`, { type: `button`, className: `btn btn--ghost btn--sm`, onClick: () => {
      Ie2(t3.slug, 10), W(`${t3.name}: 10 more in every size`);
    }, children: `Restock` })] }, t3.slug)) }) })] })] });
  }
  var xt2 = { new: [`packing`, `Start packing`], packing: [`shipped`, `Mark shipped`], shipped: [`delivered`, `Mark delivered`] };
  var St2 = (e15) => e15.lines.reduce((e16, t2) => e16 + t2.qty, 0);
  function Ct2(e15) {
    let t2 = [[`Order`, `Placed`, `Customer`, `District`, `Shirts`, `Payment`, `Status`, `Total (BDT)`], ...e15.map((e16) => {
      let t3 = R2(e16.customer);
      return [e16.id, new Date(e16.t).toISOString(), t3?.name ?? ``, t3?.district ?? ``, String(St2(e16)), we2[e16.payment], e16.status, String(e16.total)];
    })], n2 = new Blob([t2.map((e16) => e16.map((e17) => `"${e17.replace(/"/g, `""`)}"`).join(`,`)).join(`
`)], { type: `text/csv` }), r2 = Object.assign(document.createElement(`a`), { href: URL.createObjectURL(n2), download: `raye-orders.csv` });
    r2.click(), URL.revokeObjectURL(r2.href);
  }
  function wt2({ o: e15, tone: t2, onGrab: n2 }) {
    let i2 = R2(e15.customer);
    return (0, G.jsxs)(`article`, { className: `block block--${t2} ocard`, "data-id": e15.id, onPointerDown: (t3) => n2(t3, e15), children: [(0, G.jsxs)(`span`, { className: `block__meta`, children: [et2(e15.t), e15.fromShop && (0, G.jsx)(`span`, { className: `badge badge--plain`, children: `Shop` })] }), (0, G.jsx)(st2, { label: `Actions for ${e15.id}`, className: `ibtn ibtn--sm ibtn--on-dark ocard__menu`, items: [{ label: `Open order`, icon: `out`, onSelect: () => S(`orders/${e15.id}`) }, `sep`, ...D.filter((t3) => t3.id !== e15.status).map((t3) => ({ label: `Move to ${t3.label}`, icon: `arrowR`, onSelect: () => {
      z2(e15.id, t3.id), W(`${e15.id} moved to ${t3.label}`);
    } })), ...e15.status === `returned` ? [] : [`sep`, { label: `Return and restock`, icon: `return`, danger: true, onSelect: () => {
      z2(e15.id, `returned`), W(`${e15.id} returned, shirts back in stock`);
    } }]] }), (0, G.jsx)(`a`, { className: `block__title`, href: `#/orders/${e15.id}`, draggable: false, children: i2?.name ?? `Shop customer` }), (0, G.jsxs)(`span`, { className: `block__sub`, children: [e15.id, ` \xB7 `, i2?.district] }), (0, G.jsxs)(`span`, { className: `block__foot`, children: [(0, G.jsx)(`b`, { className: `block__fig num`, children: q(e15.total) }), (0, G.jsx)(`span`, { className: `block__thumbs`, children: e15.lines.slice(0, 3).map((e16) => (0, G.jsx)(pt2, { img: b(e16.slug).img, size: 24 }, e16.slug + e16.size)) })] })] });
  }
  function Tt2({ list: e15 }) {
    let t2 = (0, g.useRef)(null), [n2, r2] = (0, g.useState)(null), i2 = (0, g.useRef)(null);
    (0, g.useLayoutEffect)(() => {
      i2.current &&= (ne2(t2.current?.querySelector(`[data-id="${i2.current}"]`) ?? null), null);
    });
    let a2 = (e16, t3) => {
      if (e16.button !== 0 || e16.target.closest(`button, .menu`)) return;
      let n3 = e16.currentTarget, a3 = n3.getBoundingClientRect(), o3 = e16.clientX, s2 = e16.clientY, c2 = e16.pointerType === `touch`, l2 = null, u2 = null, d2 = false, f = (e17) => {
        if (Math.hypot(e17.clientX - o3, e17.clientY - s2) >= 6 && (d2 = true), !c2) {
          if (!l2) {
            if (!d2) return;
            l2 = n3.cloneNode(true), Object.assign(l2.style, { position: `fixed`, left: `${a3.left}px`, top: `${a3.top}px`, width: `${a3.width}px`, height: `${a3.height}px`, margin: `0`, zIndex: `90`, pointerEvents: `none` }), l2.classList.add(`is-ghost`), document.body.appendChild(l2), n3.classList.add(`is-lifted`), v2() || fa.to(l2, { rotation: -2.5, scale: 1.03, duration: 0.25, ease: `power2.out` });
          }
          fa.set(l2, { x: e17.clientX - o3, y: e17.clientY - s2 }), u2 = document.elementsFromPoint(e17.clientX, e17.clientY).map((e18) => e18.closest(`[data-col]`)).find(Boolean)?.dataset.col ?? null, r2(u2 && u2 !== t3.status ? u2 : null);
        }
      }, m = (a4) => {
        if (removeEventListener(`pointermove`, f), removeEventListener(`pointerup`, m), removeEventListener(`pointercancel`, m), r2(null), !l2) {
          !d2 && a4.type === `pointerup` && !e16.target.closest(`a, button, .menu`) && S(`orders/${t3.id}`);
          return;
        }
        l2.remove(), n3.classList.remove(`is-lifted`);
        let o4 = (e17) => {
          e17.preventDefault(), e17.stopPropagation();
        };
        n3.addEventListener(`click`, o4, { capture: true, once: true }), setTimeout(() => n3.removeEventListener(`click`, o4, { capture: true }), 0), u2 && u2 !== t3.status && (i2.current = t3.id, z2(t3.id, u2), W(u2 === `returned` ? `${t3.id} returned, shirts back in stock` : `${t3.id} moved to ${D.find((e17) => e17.id === u2).label}`));
      };
      addEventListener(`pointermove`, f), addEventListener(`pointerup`, m), addEventListener(`pointercancel`, m);
    }, o2 = e15.filter((e16) => e16.status === `returned`);
    return (0, G.jsxs)(`div`, { className: `board`, ref: t2, children: [D.map((t3) => {
      let r3 = e15.filter((e16) => e16.status === t3.id), i3 = t3.id === `delivered` ? r3.slice(0, 10) : r3;
      return (0, G.jsxs)(`section`, { className: `col${n2 === t3.id ? ` is-over` : ``}`, "data-col": t3.id, "data-in": true, "aria-label": `${t3.label}, ${J(r3.length, `order`)}`, children: [(0, G.jsxs)(`header`, { className: `col__head`, children: [(0, G.jsxs)(`span`, { className: `spill spill--${t3.tone}`, children: [(0, G.jsx)(`i`, {}), t3.label] }), (0, G.jsx)(`span`, { className: `col__count num`, children: r3.length }), (0, G.jsx)(`span`, { className: `col__sum num`, children: $e2(r3.reduce((e16, t4) => e16 + t4.total, 0)) })] }), (0, G.jsxs)(`div`, { className: `col__list`, children: [i3.map((e16) => (0, G.jsx)(wt2, { o: e16, tone: t3.tone, onGrab: a2 }, e16.id)), !r3.length && (0, G.jsx)(`p`, { className: `col__empty`, children: `Drop an order here` }), r3.length > i3.length && (0, G.jsxs)(`a`, { className: `col__more`, href: `#/orders?view=list`, children: [`and `, r3.length - i3.length, ` more in the list`] })] })] }, t3.id);
    }), (0, G.jsxs)(`section`, { className: `col col--slot${n2 === `returned` ? ` is-over` : ``}`, "data-col": `returned`, "data-in": true, "aria-label": `Returns`, children: [(0, G.jsx)(`span`, { className: `slot__ico`, children: (0, G.jsx)(K, { name: `return`, size: 20 }) }), (0, G.jsx)(`b`, { children: `Returns` }), (0, G.jsxs)(`small`, { children: [J(o2.length, `order`), ` \xB7 drop here to take one back and restock it`] })] })] });
  }
  function Et2({ list: e15 }) {
    let [t2, n2] = (0, g.useState)({ by: `t`, dir: -1 }), r2 = [...e15].sort((e16, n3) => (e16[t2.by] - n3[t2.by]) * t2.dir), i2 = (e16, r3, i3 = ``) => (0, G.jsx)(`th`, { className: i3, "aria-sort": t2.by === e16 ? t2.dir === 1 ? `ascending` : `descending` : void 0, children: (0, G.jsxs)(`button`, { type: `button`, onClick: () => n2((t3) => ({ by: e16, dir: t3.by === e16 ? t3.dir === 1 ? -1 : 1 : -1 })), children: [r3, t2.by === e16 && (t2.dir === 1 ? ` \u2191` : ` \u2193`)] }) });
    return (0, G.jsxs)(Z, { className: `olist`, children: [(0, G.jsx)(`div`, { className: `table-wrap`, children: (0, G.jsxs)(`table`, { className: `table table--stack`, children: [(0, G.jsx)(`thead`, { children: (0, G.jsxs)(`tr`, { children: [(0, G.jsx)(`th`, { children: `Order` }), (0, G.jsx)(`th`, { children: `Customer` }), i2(`t`, `Placed`), (0, G.jsx)(`th`, { children: `Shirts` }), (0, G.jsx)(`th`, { children: `Payment` }), (0, G.jsx)(`th`, { children: `Status` }), i2(`total`, `Total`, `r`)] }) }), (0, G.jsx)(`tbody`, { children: r2.slice(0, 60).map((e16) => {
      let t3 = R2(e16.customer);
      return (0, G.jsxs)(`tr`, { onClick: () => S(`orders/${e16.id}`), children: [(0, G.jsx)(`td`, { children: (0, G.jsx)(`a`, { href: `#/orders/${e16.id}`, onClick: (e17) => e17.stopPropagation(), children: (0, G.jsx)(`b`, { children: e16.id }) }) }), (0, G.jsx)(`td`, { children: (0, G.jsxs)(`span`, { className: `cell-person`, children: [(0, G.jsx)(ut2, { name: t3?.name ?? `?`, tone: t3?.tone, size: `sm` }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`b`, { children: t3?.name }), (0, G.jsx)(`small`, { children: t3?.district })] })] }) }), (0, G.jsx)(`td`, { className: `num`, children: et2(e16.t) }), (0, G.jsx)(`td`, { className: `num`, children: St2(e16) }), (0, G.jsx)(`td`, { children: we2[e16.payment] }), (0, G.jsx)(`td`, { children: (0, G.jsx)(dt2, { s: e16.status }) }), (0, G.jsx)(`td`, { className: `r num`, children: (0, G.jsx)(`b`, { children: q(e16.total) }) })] }, e16.id);
    }) })] }) }), !r2.length && (0, G.jsx)(mt2, { icon: `bag`, title: `No orders match`, text: `Try another payment method or clear the search.` })] });
  }
  var Dt2 = [`new`, `packing`, `shipped`, `delivered`];
  function Ot2({ o: e15, onClose: t2 }) {
    let [n2, i2] = (0, g.useState)(``), a2 = e15 && R2(e15.customer), o2 = e15 ? Dt2.indexOf(e15.status) : -1, s2 = e15 && xt2[e15.status];
    return (0, G.jsx)(at2, { open: !!e15, onClose: t2, title: e15?.id ?? ``, sub: e15 && `${et2(e15.t)} \xB7 ${Te2[e15.delivery]}`, foot: e15 && (0, G.jsxs)(G.Fragment, { children: [e15.status !== `returned` && e15.status !== `new` && (0, G.jsxs)(`button`, { type: `button`, className: `btn btn--ghost`, onClick: () => {
      z2(e15.id, `returned`), W(`${e15.id} returned, shirts back in stock`);
    }, children: [(0, G.jsx)(K, { name: `return`, size: 16 }), `Return`] }), s2 ? (0, G.jsxs)(`button`, { type: `button`, className: `btn btn--ink grow`, onClick: () => {
      z2(e15.id, s2[0]), W(`${e15.id}: ${D.find((e16) => e16.id === s2[0]).label}`);
    }, children: [s2[1], (0, G.jsx)(K, { name: `arrowR`, size: 16 })] }) : (0, G.jsx)(`span`, { className: `drawer__done`, children: (0, G.jsx)(dt2, { s: e15.status }) })] }), children: e15 && (0, G.jsxs)(`div`, { className: `od`, children: [(0, G.jsx)(`ol`, { className: `track${e15.status === `returned` ? ` is-returned` : ``}`, style: { "--at": Math.max(0, o2) / 3 }, children: Dt2.map((e16, t3) => (0, G.jsxs)(`li`, { className: t3 <= o2 ? `is-done` : ``, children: [(0, G.jsx)(`i`, {}), (0, G.jsx)(`span`, { children: D[t3].label })] }, e16)) }), e15.status === `returned` && (0, G.jsxs)(`p`, { className: `od__note`, children: [(0, G.jsx)(K, { name: `return`, size: 16 }), `Returned. The shirts are back in stock.`] }), (0, G.jsxs)(`a`, { className: `od__who`, href: `#/customers/${a2?.id}`, children: [(0, G.jsx)(ut2, { name: a2?.name ?? `?`, tone: a2?.tone, size: `lg` }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`b`, { children: a2?.name }), (0, G.jsx)(`small`, { children: a2?.email }), (0, G.jsxs)(`small`, { children: [a2?.phone, ` \xB7 `, a2?.district] })] }), (0, G.jsx)(K, { name: `out` })] }), (0, G.jsx)(`ul`, { className: `od__lines`, children: e15.lines.map((e16) => {
      let t3 = b(e16.slug);
      return (0, G.jsxs)(`li`, { children: [(0, G.jsx)(pt2, { img: t3.img, size: 48 }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`b`, { children: t3.name }), (0, G.jsxs)(`small`, { children: [`Size `, e16.size, ` \xB7 `, e16.qty, ` \xD7 `, q(e16.price)] })] }), (0, G.jsx)(`b`, { className: `num`, children: q(e16.qty * e16.price) })] }, e16.slug + e16.size);
    }) }), (0, G.jsxs)(`dl`, { className: `od__sum`, children: [(0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Subtotal` }), (0, G.jsx)(`dd`, { children: q(e15.subtotal) })] }), e15.discount > 0 && (0, G.jsxs)(`div`, { children: [(0, G.jsxs)(`dt`, { children: [`Code `, e15.promo] }), (0, G.jsxs)(`dd`, { children: [`\u2212`, q(e15.discount)] })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsxs)(`dt`, { children: [`Delivery`, e15.promo === `SALTAIR` ? ` (SALTAIR)` : ``] }), (0, G.jsx)(`dd`, { children: e15.shipping ? q(e15.shipping) : `Free` })] }), (0, G.jsxs)(`div`, { className: `od__total`, children: [(0, G.jsx)(`dt`, { children: `Total` }), (0, G.jsx)(`dd`, { children: q(e15.total) })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Payment` }), (0, G.jsx)(`dd`, { children: we2[e15.payment] })] })] }), (0, G.jsxs)(`section`, { className: `notes`, children: [(0, G.jsx)(`h3`, { className: `card__title`, children: `Notes` }), (P2.notes[e15.id] ?? []).map((e16, t3) => (0, G.jsx)(`p`, { className: `notes__item`, children: e16 }, t3)), (0, G.jsxs)(`form`, { onSubmit: (t3) => {
      t3.preventDefault(), n2.trim() && (Ne2(e15.id, n2.trim()), i2(``));
    }, children: [(0, G.jsx)(`label`, { className: `sr`, htmlFor: `o-note`, children: `Add a note` }), (0, G.jsx)(`input`, { id: `o-note`, className: `input`, value: n2, onChange: (e16) => i2(e16.target.value), placeholder: `Gift wrap, call before delivery\u2026` }), (0, G.jsx)(`button`, { className: `btn btn--ghost`, type: `submit`, children: `Add` })] })] })] }) });
  }
  function kt2() {
    I2();
    let e15 = se(), [t2, n2] = (0, g.useState)(``), [r2, i2] = (0, g.useState)(`all`), a2 = e15.query.get(`view`) === `list` ? `list` : `board`, o2 = L2(), s2 = (0, g.useMemo)(() => o2.filter((e16) => (r2 === `all` || e16.payment === r2) && (!t2 || `${e16.id} ${R2(e16.customer)?.name}`.toLowerCase().includes(t2.toLowerCase()))), [o2, t2, r2]), c2 = o2.find((t3) => t3.id === e15.params[0]), l2 = (e16) => o2.filter((t3) => t3.status === e16).length;
    return (0, G.jsxs)(`div`, { className: `view view--orders`, children: [(0, G.jsx)(Y, { title: [`Orders`, `Board`], stats: (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(X, { icon: `bag`, value: l2(`new`) + l2(`packing`), fmt: (e16) => String(Math.round(e16)), label: `To pack and send` }), (0, G.jsx)(X, { icon: `truck`, value: l2(`shipped`), fmt: (e16) => String(Math.round(e16)), label: `On the road` }), (0, G.jsx)(X, { icon: `return`, value: l2(`returned`), fmt: (e16) => String(Math.round(e16)), label: `Returned` })] }) }), (0, G.jsxs)(`div`, { className: `toolbar`, "data-in": true, children: [(0, G.jsxs)(`label`, { className: `search`, children: [(0, G.jsx)(K, { name: `search`, size: 16 }), (0, G.jsx)(`span`, { className: `sr`, children: `Search orders` }), (0, G.jsx)(`input`, { value: t2, onChange: (e16) => n2(e16.target.value), placeholder: `Search orders or customers` })] }), (0, G.jsx)(`div`, { className: `chips`, role: `group`, "aria-label": `Payment`, children: [{ id: `all`, label: `All` }, ...ae].map((e16) => (0, G.jsx)(`button`, { type: `button`, className: `chip`, "aria-pressed": r2 === e16.id, onClick: () => i2(e16.id), children: e16.label }, e16.id)) }), (0, G.jsx)(`span`, { className: `toolbar__spacer` }), (0, G.jsx)(rt2, { label: `View`, value: a2, onChange: (e16) => S(e16 === `list` ? `orders?view=list` : `orders`), options: [{ id: `board`, label: `Board` }, { id: `list`, label: `List` }] }), (0, G.jsx)(`button`, { type: `button`, className: `ibtn ibtn--glass`, "aria-label": `Export orders as CSV`, title: `Export CSV`, onClick: () => {
      Ct2(s2), W(`${J(s2.length, `order`)} exported`);
    }, children: (0, G.jsx)(K, { name: `download` }) })] }), a2 === `board` ? (0, G.jsx)(Tt2, { list: s2 }) : (0, G.jsx)(Et2, { list: s2 }), (0, G.jsx)(Ot2, { o: c2, onClose: () => S(`orders${a2 === `list` ? `?view=list` : ``}`) })] });
  }
  var At2 = [{ id: `all`, label: `All shirts` }, { id: `short`, label: `Short sleeve` }, { id: `long`, label: `Long sleeve` }, { id: `oversized`, label: `Oversized` }, { id: `low`, label: `Running low` }];
  function jt2({ slug: t2 }) {
    let n2 = B2(t2);
    return (0, G.jsx)(`span`, { className: `cells`, "aria-label": p.map((e15) => `${e15} ${n2[e15]}`).join(`, `), children: p.map((e15) => (0, G.jsxs)(`span`, { className: `cell${n2[e15] === 0 ? ` is-out` : n2[e15] <= P2.settings.lowStock ? ` is-low` : ``}`, children: [(0, G.jsx)(`small`, { children: e15 }), (0, G.jsx)(`b`, { className: `num`, children: n2[e15] })] }, e15)) });
  }
  function Mt2({ p: e15 }) {
    let t2 = Re2(e15.slug).length, n2 = ze2(e15.slug).length;
    return (0, G.jsxs)(`a`, { className: `pcard card`, href: `#/products/${e15.slug}`, "data-in": true, children: [(0, G.jsxs)(`span`, { className: `pcard__img`, children: [(0, G.jsx)(`img`, { src: e15.img.src, width: e15.img.w, height: e15.img.h, alt: ``, loading: `lazy`, decoding: `async` }), e15.tag && (0, G.jsx)(`span`, { className: `badge badge--${e15.tag === `Limited` ? `navy` : e15.tag === `Sale` ? `coral` : `plain`}`, children: e15.tag })] }), (0, G.jsxs)(`span`, { className: `pcard__body`, children: [(0, G.jsxs)(`span`, { className: `pcard__row`, children: [(0, G.jsx)(`b`, { className: `pcard__name`, children: e15.name }), (0, G.jsx)(`b`, { className: `num`, children: q(V2(e15.slug)) })] }), (0, G.jsxs)(`span`, { className: `pcard__row muted`, children: [(0, G.jsxs)(`span`, { children: [h[e15.cat], ` \xB7 `, e15.family] }), (0, G.jsxs)(`span`, { className: `num`, children: [H(e15.slug), ` in stock`] })] }), (0, G.jsx)(jt2, { slug: e15.slug }), (t2 > 0 || n2 > 0) && (0, G.jsxs)(`span`, { className: `pcard__warn`, children: [n2 > 0 && `${J(n2, `size`)} sold out`, n2 > 0 && t2 > 0 && ` \xB7 `, t2 > 0 && `${t2} running low`] })] })] });
  }
  function Nt2({ slug: e15, size: t2 }) {
    let n2 = B2(e15)[t2], r2 = (0, g.useRef)(null), i2 = (n3) => {
      Fe2(e15, t2, n3), ne2(r2.current);
    };
    return (0, G.jsxs)(`div`, { className: `stepper${n2 === 0 ? ` is-out` : n2 <= P2.settings.lowStock ? ` is-low` : ``}`, children: [(0, G.jsx)(`span`, { className: `stepper__size`, children: t2 }), (0, G.jsx)(`button`, { type: `button`, className: `ibtn ibtn--sm`, "aria-label": `One fewer in ${t2}`, disabled: n2 === 0, onClick: () => i2(n2 - 1), children: (0, G.jsx)(K, { name: `minus`, size: 14 }) }), (0, G.jsx)(`b`, { className: `num stepper__n`, ref: r2, "aria-live": `polite`, children: n2 }), (0, G.jsx)(`button`, { type: `button`, className: `ibtn ibtn--sm`, "aria-label": `One more in ${t2}`, onClick: () => i2(n2 + 1), children: (0, G.jsx)(K, { name: `plus`, size: 14 }) })] });
  }
  function Pt2({ p: t2, onClose: n2 }) {
    let [r2, i2] = (0, g.useState)(``);
    (0, g.useEffect)(() => {
      t2 && i2(String(V2(t2.slug)));
    }, [t2?.slug]);
    let a2 = t2 ? L2().filter((e15) => e15.status !== `returned`).flatMap((e15) => e15.lines).filter((e15) => e15.slug === t2.slug).reduce((e15, t3) => e15 + t3.qty, 0) : 0;
    return (0, G.jsx)(at2, { open: !!t2, onClose: n2, title: t2?.name ?? ``, sub: t2 && `${h[t2.cat]} \xB7 ${t2.colours.map((e15) => e15.name).join(`, `)}`, foot: t2 && (0, G.jsxs)(`a`, { className: `btn btn--ghost grow`, href: `../#/product/${t2.slug}`, target: `_blank`, rel: `noopener`, children: [`See it in the shop`, (0, G.jsx)(K, { name: `out`, size: 16 })] }), children: t2 && (0, G.jsxs)(`div`, { className: `pd`, children: [(0, G.jsxs)(`div`, { className: `pd__hero`, children: [(0, G.jsx)(`img`, { src: (t2.model ?? t2.img).src, width: t2.img.w, height: t2.img.h, alt: `${t2.name}` }), (0, G.jsxs)(`dl`, { children: [(0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `In stock` }), (0, G.jsx)(`dd`, { className: `num`, children: H(t2.slug) })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Sold, 3 weeks` }), (0, G.jsx)(`dd`, { className: `num`, children: a2 })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Rating` }), (0, G.jsxs)(`dd`, { children: [t2.rating.toFixed(1), ` \xB7 `, t2.reviews] })] })] })] }), (0, G.jsxs)(`form`, { className: `pd__price`, onSubmit: (e15) => {
      e15.preventDefault();
      let n3 = Number(r2);
      n3 && (Le2(t2.slug, n3), i2(String(V2(t2.slug))), W(`${t2.name} now ${q(V2(t2.slug))}`));
    }, children: [(0, G.jsx)(`label`, { htmlFor: `pd-price`, className: `field__label`, children: `Price` }), (0, G.jsxs)(`span`, { className: `input input--prefix`, children: [(0, G.jsx)(`span`, { children: `\u09F3` }), (0, G.jsx)(`input`, { id: `pd-price`, inputMode: `numeric`, value: r2, onChange: (e15) => i2(e15.target.value.replace(/\D/g, ``)) })] }), (0, G.jsx)(`button`, { type: `submit`, className: `btn btn--ink`, disabled: Number(r2) === V2(t2.slug), children: `Save` }), t2.was && (0, G.jsxs)(`small`, { className: `muted`, children: [`Was `, q(t2.was), ` before the sale`] })] }), (0, G.jsxs)(`section`, { children: [(0, G.jsxs)(`div`, { className: `card__head`, children: [(0, G.jsx)(`h3`, { className: `card__title`, children: `Stock by size` }), (0, G.jsxs)(`button`, { type: `button`, className: `btn btn--ghost btn--sm`, onClick: () => {
      Ie2(t2.slug, 10), W(`${t2.name}: 10 more in every size`);
    }, children: [(0, G.jsx)(K, { name: `plus`, size: 15 }), `10 in every size`] })] }), (0, G.jsx)(`div`, { className: `steppers`, children: p.map((e15) => (0, G.jsx)(Nt2, { slug: t2.slug, size: e15 }, e15)) }), (0, G.jsxs)(`p`, { className: `muted pd__hint`, children: [(0, G.jsx)(K, { name: `store`, size: 15 }), `The shop shows these straight away: a size at 0 is struck through and can\u2019t be picked.`] })] })] }) });
  }
  function Ft2() {
    I2();
    let e15 = se(), [t2, n2] = (0, g.useState)(e15.query.get(`q`) ?? ``), [i2, a2] = (0, g.useState)(e15.query.get(`filter`) || `all`), o2 = y.filter((e16) => (i2 === `all` || (i2 === `low` ? Re2(e16.slug).length + ze2(e16.slug).length > 0 : e16.cat === i2)) && (!t2 || `${e16.name} ${e16.family}`.toLowerCase().includes(t2.toLowerCase()))), s2 = y.reduce((e16, t3) => e16 + H(t3.slug), 0), c2 = y.reduce((e16, t3) => e16 + H(t3.slug) * V2(t3.slug), 0), l2 = y.reduce((e16, t3) => e16 + Re2(t3.slug).length + ze2(t3.slug).length, 0), u2 = b(e15.params[0] ?? ``);
    return (0, G.jsxs)(`div`, { className: `view view--products`, children: [(0, G.jsx)(Y, { title: [`Stock`, `& prices`], stats: (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(X, { icon: `shirt`, value: s2, fmt: (e16) => Math.round(e16).toLocaleString(`en-IN`), label: `Shirts on the shelf` }), (0, G.jsx)(X, { icon: `cash`, value: c2, fmt: (e16) => $e2(e16), label: `Stock value at full price` }), (0, G.jsx)(X, { icon: `alert`, value: l2, fmt: (e16) => String(Math.round(e16)), label: `Sizes low or sold out` })] }) }), (0, G.jsxs)(`div`, { className: `toolbar`, "data-in": true, children: [(0, G.jsxs)(`label`, { className: `search`, children: [(0, G.jsx)(K, { name: `search`, size: 16 }), (0, G.jsx)(`span`, { className: `sr`, children: `Search shirts` }), (0, G.jsx)(`input`, { value: t2, onChange: (e16) => n2(e16.target.value), placeholder: `Search shirts` })] }), (0, G.jsx)(`div`, { className: `chips`, role: `group`, "aria-label": `Filter`, children: At2.map((e16) => (0, G.jsx)(`button`, { type: `button`, className: `chip`, "aria-pressed": i2 === e16.id, onClick: () => a2(e16.id), children: e16.label }, e16.id)) })] }), (0, G.jsx)(`div`, { className: `pgrid`, children: o2.map((e16) => (0, G.jsx)(Mt2, { p: e16 }, e16.slug)) }), !o2.length && (0, G.jsx)(Z, { children: (0, G.jsx)(mt2, { icon: `shirt`, title: `No shirts match`, text: `Clear the search or pick another filter.` }) }), (0, G.jsx)(Pt2, { p: u2, onClose: () => S(`products`) })] });
  }
  var It2 = [{ id: `all`, label: `Everyone` }, { id: `vip`, label: `VIP` }, { id: `regular`, label: `Regular` }, { id: `new`, label: `New` }];
  var Lt2 = { vip: `VIP`, regular: `Regular`, new: `New` };
  function Rt2() {
    let e15 = L2().filter((e16) => e16.status !== `returned`);
    return Me2().map((t2) => {
      let n2 = e15.filter((e16) => e16.customer === t2.id);
      return { ...t2, count: n2.length, spent: n2.reduce((e16, t3) => e16 + t3.total, 0), last: n2[0]?.t ?? 0 };
    });
  }
  function zt2({ c: e15, onClose: t2 }) {
    let [n2, i2] = (0, g.useState)(``), a2 = e15 ? L2().filter((t3) => t3.customer === e15.id) : [], o2 = a2.filter((e16) => e16.status !== `returned`).flatMap((e16) => e16.lines), s2 = (e16) => Object.entries(o2.reduce((t3, n3) => (t3[n3[e16]] = (t3[n3[e16]] ?? 0) + n3.qty, t3), {})).sort((e17, t3) => t3[1] - e17[1])[0]?.[0], c2 = b(s2(`slug`) ?? ``), l2 = s2(`size`);
    return (0, G.jsx)(at2, { open: !!e15, onClose: t2, title: e15?.name ?? ``, sub: e15 && `Customer since ${tt2(e15.since)}`, children: e15 && (0, G.jsxs)(`div`, { className: `cp`, children: [(0, G.jsxs)(`div`, { className: `cp__top`, children: [(0, G.jsx)(ut2, { name: e15.name, tone: e15.tone, size: `xl` }), (0, G.jsx)(`span`, { className: `tier tier--${e15.tier}`, children: Lt2[e15.tier] }), (0, G.jsxs)(`a`, { href: `mailto:${e15.email}`, className: `cp__line`, children: [(0, G.jsx)(K, { name: `note`, size: 15 }), e15.email] }), (0, G.jsxs)(`a`, { href: `tel:${e15.phone}`, className: `cp__line`, children: [(0, G.jsx)(K, { name: `clock`, size: 15 }), e15.phone, ` \xB7 `, e15.district] })] }), (0, G.jsxs)(`dl`, { className: `cp__figs`, children: [(0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Orders` }), (0, G.jsx)(`dd`, { className: `num`, children: e15.count })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Spent` }), (0, G.jsx)(`dd`, { className: `num`, children: q(e15.spent) })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsx)(`dt`, { children: `Usual size` }), (0, G.jsx)(`dd`, { children: l2 ?? `\u2014` })] })] }), c2 && (0, G.jsxs)(`a`, { className: `cp__fav`, href: `#/products/${c2.slug}`, children: [(0, G.jsx)(`img`, { src: c2.img.src, width: c2.img.w, height: c2.img.h, alt: ``, loading: `lazy` }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`small`, { children: `Favourite shirt` }), (0, G.jsx)(`b`, { children: c2.name }), (0, G.jsx)(`small`, { children: q(c2.price) })] })] }), (0, G.jsxs)(`section`, { children: [(0, G.jsx)(`h3`, { className: `card__title`, children: `Orders` }), (0, G.jsxs)(`ul`, { className: `cp__orders`, children: [a2.map((e16) => (0, G.jsx)(`li`, { children: (0, G.jsxs)(`a`, { href: `#/orders/${e16.id}`, children: [(0, G.jsx)(`b`, { children: e16.id }), (0, G.jsx)(`small`, { children: et2(e16.t) }), (0, G.jsx)(dt2, { s: e16.status }), (0, G.jsx)(`b`, { className: `num`, children: q(e16.total) })] }) }, e16.id)), !a2.length && (0, G.jsx)(`li`, { className: `muted`, children: `No orders yet.` })] })] }), (0, G.jsxs)(`section`, { className: `notes`, children: [(0, G.jsx)(`h3`, { className: `card__title`, children: `Notes` }), (P2.notes[e15.id] ?? []).map((e16, t3) => (0, G.jsx)(`p`, { className: `notes__item`, children: e16 }, t3)), (0, G.jsxs)(`form`, { onSubmit: (t3) => {
      t3.preventDefault(), n2.trim() && (Ne2(e15.id, n2.trim()), i2(``));
    }, children: [(0, G.jsx)(`label`, { className: `sr`, htmlFor: `c-note`, children: `Add a note` }), (0, G.jsx)(`input`, { id: `c-note`, className: `input`, value: n2, onChange: (e16) => i2(e16.target.value), placeholder: `Prefers bKash, sizes down in oversized\u2026` }), (0, G.jsx)(`button`, { className: `btn btn--ghost`, type: `submit`, children: `Add` })] })] })] }) });
  }
  function Bt2() {
    I2();
    let e15 = se(), [t2, n2] = (0, g.useState)(``), [r2, i2] = (0, g.useState)(`all`), [a2, o2] = (0, g.useState)({ by: `spent`, dir: -1 }), s2 = (0, g.useMemo)(Rt2, [L2().length]), c2 = s2.filter((e16) => (r2 === `all` || e16.tier === r2) && (!t2 || `${e16.name} ${e16.email} ${e16.district}`.toLowerCase().includes(t2.toLowerCase()))).sort((e16, t3) => (e16[a2.by] - t3[a2.by]) * a2.dir), l2 = s2.filter((e16) => e16.count > 0), u2 = l2.filter((e16) => e16.count > 1).length / Math.max(1, l2.length), d2 = s2.find((t3) => t3.id === e15.params[0]), f = (e16, t3, n3 = ``) => (0, G.jsx)(`th`, { className: n3, "aria-sort": a2.by === e16 ? a2.dir === 1 ? `ascending` : `descending` : void 0, children: (0, G.jsxs)(`button`, { type: `button`, onClick: () => o2((t4) => ({ by: e16, dir: t4.by === e16 ? t4.dir === 1 ? -1 : 1 : -1 })), children: [t3, a2.by === e16 && (a2.dir === 1 ? ` \u2191` : ` \u2193`)] }) });
    return (0, G.jsxs)(`div`, { className: `view view--customers`, children: [(0, G.jsx)(Y, { title: [`Your`, `customers`], stats: (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(X, { icon: `users`, value: s2.length, fmt: (e16) => String(Math.round(e16)), label: `Customers` }), (0, G.jsx)(X, { icon: `return`, value: u2 * 100, fmt: (e16) => `${Math.round(e16)}%`, label: `Came back for another` }), (0, G.jsx)(X, { icon: `sparkle`, value: s2.filter((e16) => e16.tier === `vip`).length, fmt: (e16) => String(Math.round(e16)), label: `VIPs, over \u09F316,000 spent` })] }) }), (0, G.jsxs)(`div`, { className: `toolbar`, "data-in": true, children: [(0, G.jsxs)(`label`, { className: `search`, children: [(0, G.jsx)(K, { name: `search`, size: 16 }), (0, G.jsx)(`span`, { className: `sr`, children: `Search customers` }), (0, G.jsx)(`input`, { value: t2, onChange: (e16) => n2(e16.target.value), placeholder: `Search name, email or district` })] }), (0, G.jsx)(`div`, { className: `chips`, role: `group`, "aria-label": `Tier`, children: It2.map((e16) => (0, G.jsx)(`button`, { type: `button`, className: `chip`, "aria-pressed": r2 === e16.id, onClick: () => i2(e16.id), children: e16.label }, e16.id)) })] }), (0, G.jsxs)(Z, { className: `ctable`, children: [(0, G.jsx)(`div`, { className: `table-wrap`, children: (0, G.jsxs)(`table`, { className: `table table--stack`, children: [(0, G.jsx)(`thead`, { children: (0, G.jsxs)(`tr`, { children: [(0, G.jsx)(`th`, { children: `Customer` }), (0, G.jsx)(`th`, { children: `District` }), f(`count`, `Orders`, `r`), f(`spent`, `Spent`, `r`), f(`last`, `Last order`), (0, G.jsx)(`th`, { children: `Tier` })] }) }), (0, G.jsx)(`tbody`, { children: c2.map((e16) => (0, G.jsxs)(`tr`, { onClick: () => S(`customers/${e16.id}`), children: [(0, G.jsx)(`td`, { children: (0, G.jsxs)(`a`, { className: `cell-person`, href: `#/customers/${e16.id}`, onClick: (e17) => e17.stopPropagation(), children: [(0, G.jsx)(ut2, { name: e16.name, tone: e16.tone, size: `md` }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`b`, { children: e16.name }), (0, G.jsx)(`small`, { children: e16.email })] })] }) }), (0, G.jsx)(`td`, { children: e16.district }), (0, G.jsx)(`td`, { className: `r num`, children: e16.count }), (0, G.jsx)(`td`, { className: `r num`, children: (0, G.jsx)(`b`, { children: q(e16.spent) }) }), (0, G.jsx)(`td`, { className: `num`, children: e16.last ? tt2(e16.last) : `\u2014` }), (0, G.jsx)(`td`, { children: (0, G.jsx)(`span`, { className: `tier tier--${e16.tier}`, children: Lt2[e16.tier] }) })] }, e16.id)) })] }) }), !c2.length && (0, G.jsx)(mt2, { icon: `users`, title: `No customers match`, text: `Clear the search or pick another tier.` }), (0, G.jsx)(`p`, { className: `ctable__foot muted`, children: J(c2.length, `customer`) })] }), (0, G.jsx)(zt2, { c: d2, onClose: () => S(`customers`) })] });
  }
  var Vt2 = { XS: `sky`, S: `sea`, M: `teal`, L: `coral`, XL: `navy`, XXL: `sand` };
  var Q = [148, 198];
  var $ = [40, 110];
  function Ht2() {
    let [t2, n2] = (0, g.useState)(176), [r2, i2] = (0, g.useState)(74), a2 = ga(t2, r2, 0).size, o2 = (e15) => (e15 - Q[0]) / (Q[1] - Q[0]) * 100, s2 = (e15) => 100 - (e15 - $[0]) / ($[1] - $[0]) * 100;
    return (0, G.jsxs)(`div`, { className: `scatter-wrap`, children: [(0, G.jsxs)(`div`, { className: `scatter`, role: `img`, "aria-label": `${k.length} finder sessions plotted by height and weight, coloured by the recommended size`, children: [(0, G.jsx)(`svg`, { viewBox: `0 0 100 100`, preserveAspectRatio: `none`, "aria-hidden": `true`, children: [25, 50, 75].map((e15) => (0, G.jsxs)(`g`, { className: `scatter__grid`, children: [(0, G.jsx)(`line`, { x1: e15, x2: e15, y1: `0`, y2: `100` }), (0, G.jsx)(`line`, { y1: e15, y2: e15, x1: `0`, x2: `100` })] }, e15)) }), k.map((e15, t3) => (0, G.jsx)(`i`, { className: `dot tone--${Vt2[e15.size]}${e15.size === a2 ? ` is-pick` : ``}`, style: { left: `${o2(e15.h)}%`, top: `${s2(e15.w)}%` } }, t3)), (0, G.jsx)(`span`, { className: `scatter__you`, style: { left: `${o2(t2)}%`, top: `${s2(r2)}%` }, children: (0, G.jsx)(`b`, { children: a2 }) }), (0, G.jsxs)(`span`, { className: `scatter__ax scatter__ax--x`, children: [`Height, cm \xB7 `, Q[0], `\u2013`, Q[1]] }), (0, G.jsxs)(`span`, { className: `scatter__ax scatter__ax--y`, children: [`Weight, kg \xB7 `, $[0], `\u2013`, $[1]] })] }), (0, G.jsxs)(`div`, { className: `try`, children: [(0, G.jsx)(`p`, { className: `card__sub`, children: `Try the estimate the shop uses` }), (0, G.jsxs)(`label`, { className: `try__row`, children: [(0, G.jsx)(`span`, { children: `Height` }), (0, G.jsxs)(`b`, { className: `num`, children: [t2, ` cm`] }), (0, G.jsx)(`input`, { type: `range`, className: `range`, min: Q[0], max: Q[1], value: t2, onChange: (e15) => n2(+e15.target.value), style: { "--p": `${o2(t2)}%` } })] }), (0, G.jsxs)(`label`, { className: `try__row`, children: [(0, G.jsx)(`span`, { children: `Weight` }), (0, G.jsxs)(`b`, { className: `num`, children: [r2, ` kg`] }), (0, G.jsx)(`input`, { type: `range`, className: `range`, min: $[0], max: $[1], value: r2, onChange: (e15) => i2(+e15.target.value), style: { "--p": `${100 - s2(r2)}%` } })] }), (0, G.jsxs)(`p`, { className: `try__out`, children: [`Recommends `, (0, G.jsx)(`b`, { className: `tone-text--${Vt2[a2]}`, children: a2 }), `, like `, Math.round(k.filter((e15) => e15.size === a2).length / k.length * 100), `% of shoppers`] }), (0, G.jsx)(`div`, { className: `legend`, children: p.map((e15) => (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`i`, { className: `tone--${Vt2[e15]}` }), e15] }, e15)) })] })] });
  }
  function Ut2() {
    I2();
    let t2 = j2.reduce((e15, t3) => e15 + t3, 0), n2 = k.filter((e15) => e15.added).length / k.length, r2 = p.map((e15) => k.filter((t3) => t3.size === e15).length / k.length), i2 = p.map((e15) => y.reduce((t3, n3) => t3 + B2(n3.slug)[e15], 0)), a2 = i2.reduce((e15, t3) => e15 + t3, 0) || 1, o2 = r2.indexOf(Math.max(...r2)), s2 = p.map((e15, t3) => ({ s: e15, d: r2[t3], k: i2[t3] / a2 })).sort((e15, t3) => t3.d - t3.k - (e15.d - e15.k))[0];
    return (0, G.jsxs)(`div`, { className: `view view--fit`, children: [(0, G.jsx)(Y, { title: [`Fit`, `insights`], stats: (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(X, { icon: `ruler`, value: t2, fmt: (e15) => Math.round(e15).toLocaleString(`en-IN`), label: `Size finder uses, 12 weeks` }), (0, G.jsx)(X, { icon: `bag`, value: n2 * 100, fmt: (e15) => `${Math.round(e15)}%`, label: `Added to bag after` }), (0, G.jsx)(X, { icon: `return`, value: A2.with * 100, fmt: (e15) => `${e15.toFixed(1)}%`, label: `Returns with the finder, ${(A2.without * 100).toFixed(1)}% without` })] }) }), (0, G.jsxs)(`div`, { className: `fitgrid`, children: [(0, G.jsx)(Z, { className: `fit__map`, title: `Who uses the finder`, sub: `${J(k.length, `session`)} this month, by height and weight`, children: (0, G.jsx)(Ht2, {}) }), (0, G.jsxs)(Z, { className: `fit__weeks`, title: `Finder use`, sub: `Sessions a week`, children: [(0, G.jsxs)(`p`, { className: `big`, children: [(0, G.jsx)(nt2, { value: j2[j2.length - 1], fmt: (e15) => Math.round(e15).toLocaleString(`en-IN`) }), (0, G.jsxs)(`span`, { children: [`last week \xB7 up `, Math.round((j2[11] / j2[0] - 1) * 100), `% in 12 weeks`] })] }), (0, G.jsx)(gt2, { labels: j2.map((e15, t3) => `W${t3 + 1}`), height: 190, fmt: (e15) => `${Math.round(e15)} sessions`, axis: (e15) => String(Math.round(e15)), series: [{ label: `Sessions`, values: j2, tone: `teal`, area: true }] })] }), (0, G.jsx)(Z, { className: `fit__sizes`, title: `Sizes it recommends`, sub: `Share of sessions`, children: (0, G.jsx)(vt2, { data: p.map((e15, t3) => ({ label: e15, value: Math.round(r2[t3] * 100), tone: Vt2[e15] })), hi: o2, fmt: (e15) => `${e15}%` }) }), (0, G.jsxs)(Z, { className: `fit__shelf`, title: `Demand against the shelf`, sub: `Recommended share vs share of stock, by size`, children: [(0, G.jsx)(`ul`, { className: `vs`, children: p.map((e15, t3) => (0, G.jsxs)(`li`, { children: [(0, G.jsx)(`b`, { children: e15 }), (0, G.jsxs)(`span`, { className: `vs__bars`, children: [(0, G.jsx)(`span`, { className: `meter`, children: (0, G.jsx)(`span`, { className: `meter__fill tone--${Vt2[e15]}`, style: { transform: `scaleX(${r2[t3] / 0.4})` } }) }), (0, G.jsx)(`span`, { className: `meter meter--ghost`, children: (0, G.jsx)(`span`, { className: `meter__fill tone--ink`, style: { transform: `scaleX(${i2[t3] / a2 / 0.4})` } }) })] }), (0, G.jsxs)(`span`, { className: `num vs__fig`, children: [Math.round(r2[t3] * 100), `% \xB7 `, Math.round(i2[t3] / a2 * 100), `%`] })] }, e15)) }), (0, G.jsxs)(`p`, { className: `vs__tip`, children: [(0, G.jsx)(`b`, { children: s2.s }), ` is `, Math.round(s2.d * 100), `% of what the finder recommends but `, Math.round(s2.k * 100), `% of the shelf. Reorder `, s2.s, ` first.`] }), (0, G.jsxs)(`div`, { className: `legend`, children: [(0, G.jsxs)(`span`, { children: [(0, G.jsx)(`i`, { className: `tone--teal` }), `Recommended`] }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`i`, { className: `tone--ink` }), `On the shelf`] })] })] }), (0, G.jsxs)(Z, { className: `fit__returns`, tone: `navy`, title: `Returns, last 90 days`, children: [(0, G.jsxs)(`div`, { className: `ret`, children: [(0, G.jsxs)(`div`, { children: [(0, G.jsxs)(`b`, { className: `ret__fig num`, children: [(A2.with * 100).toFixed(1), `%`] }), (0, G.jsx)(`span`, { children: `with the finder` }), (0, G.jsx)(`span`, { className: `meter meter--on-dark`, children: (0, G.jsx)(`span`, { className: `meter__fill tone--sand`, style: { transform: `scaleX(${A2.with / A2.without})` } }) })] }), (0, G.jsxs)(`div`, { children: [(0, G.jsxs)(`b`, { className: `ret__fig num`, children: [(A2.without * 100).toFixed(1), `%`] }), (0, G.jsx)(`span`, { children: `without it` }), (0, G.jsx)(`span`, { className: `meter meter--on-dark`, children: (0, G.jsx)(`span`, { className: `meter__fill tone--coral`, style: { transform: `scaleX(1)` } }) })] })] }), (0, G.jsx)(`ul`, { className: `why`, children: xe2.map(([e15, t3]) => (0, G.jsxs)(`li`, { children: [(0, G.jsx)(`span`, { children: e15 }), (0, G.jsx)(`span`, { className: `meter meter--on-dark`, children: (0, G.jsx)(`span`, { className: `meter__fill tone--sky`, style: { transform: `scaleX(${t3 / xe2[0][1]})` } }) }), (0, G.jsxs)(`b`, { className: `num`, children: [Math.round(t3 * 100), `%`] })] }, e15)) }), (0, G.jsxs)(`p`, { className: `ret__note`, children: [`Shoppers who used the finder sent back `, Math.round((1 - A2.with / A2.without) * 100), `% fewer shirts for size.`] })] })] })] });
  }
  var Wt2 = [`coral`, `teal`, `sky`, `navy`];
  function Gt2({ open: e15, onClose: t2, edit: n2 }) {
    let [r2, i2] = (0, g.useState)(``), [a2, o2] = (0, g.useState)(`pct`), [s2, c2] = (0, g.useState)(`15`), [l2, u2] = (0, g.useState)(``);
    return (0, g.useEffect)(() => {
      e15 && (i2(n2?.code ?? ``), o2(n2?.kind ?? `pct`), c2(String(n2?.value || 15)), u2(``));
    }, [e15, n2?.code]), (0, G.jsx)(ot2, { open: e15, onClose: t2, title: n2 ? `Edit ${n2.code}` : `New discount code`, children: (0, G.jsxs)(`form`, { className: `mform`, onSubmit: (e16) => {
      e16.preventDefault();
      let i3 = r2.trim().toUpperCase(), o3 = Number(s2);
      if (!/^[A-Z0-9]{3,16}$/.test(i3)) return u2(`Use 3 to 16 letters or numbers, no spaces.`);
      if (!n2 && Be2().some((e17) => e17.code === i3)) return u2(`${i3} already exists.`);
      if (a2 === `pct` && !(o3 >= 1 && o3 <= 80)) return u2(`Pick a discount between 1% and 80%.`);
      Ve2(i3, { kind: a2, value: a2 === `pct` ? o3 : 0, label: a2 === `pct` ? `${o3}% off` : `Free delivery`, active: n2?.active ?? true }), W(n2 ? `${i3} updated` : `${i3} is live in the shop`), t2();
    }, noValidate: true, children: [(0, G.jsxs)(`label`, { className: `field`, children: [(0, G.jsx)(`span`, { className: `field__label`, children: `Code` }), (0, G.jsx)(`input`, { className: `input input--code`, value: r2, disabled: !!n2, onChange: (e16) => {
      i2(e16.target.value.toUpperCase()), u2(``);
    }, placeholder: `MONSOON15`, autoComplete: `off`, "aria-invalid": !!l2, "aria-describedby": l2 ? `code-err` : void 0 })] }), (0, G.jsxs)(`div`, { className: `field`, children: [(0, G.jsx)(`span`, { className: `field__label`, children: `What it gives` }), (0, G.jsx)(rt2, { label: `Kind`, value: a2, onChange: o2, options: [{ id: `pct`, label: `% off` }, { id: `ship`, label: `Free delivery` }] })] }), a2 === `pct` && (0, G.jsxs)(`label`, { className: `field`, children: [(0, G.jsx)(`span`, { className: `field__label`, children: `Discount` }), (0, G.jsxs)(`span`, { className: `input input--prefix`, children: [(0, G.jsx)(`input`, { inputMode: `numeric`, value: s2, onChange: (e16) => {
      c2(e16.target.value.replace(/\D/g, ``)), u2(``);
    } }), (0, G.jsx)(`span`, { children: `%` })] })] }), l2 && (0, G.jsx)(`p`, { className: `field__err`, id: `code-err`, role: `alert`, children: l2 }), (0, G.jsxs)(`div`, { className: `mform__foot`, children: [(0, G.jsx)(`button`, { type: `button`, className: `btn btn--ghost`, onClick: t2, children: `Cancel` }), (0, G.jsx)(`button`, { type: `submit`, className: `btn btn--ink`, children: n2 ? `Save` : `Create code` })] })] }) });
  }
  function Kt2() {
    I2();
    let t2 = se(), [n2, i2] = (0, g.useState)(), o2 = t2.query.get(`new`) === `1`, c2 = Be2(), l2 = b(M2.slug), [u2, d2] = (0, g.useState)(Date.now());
    (0, g.useEffect)(() => {
      let e15 = setInterval(() => d2(Date.now()), 1e3);
      return () => clearInterval(e15);
    }, []);
    let f = Math.max(0, ne - u2), p2 = [[`days`, Math.floor(f / 864e5)], [`hrs`, Math.floor(f / 36e5 % 24)], [`min`, Math.floor(f / 6e4 % 60)], [`sec`, Math.floor(f / 1e3 % 60)]];
    return (0, G.jsxs)(`div`, { className: `view view--promos`, children: [(0, G.jsx)(Y, { title: [`Discount`, `codes`], stats: (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(X, { icon: `tag`, value: c2.filter((e15) => e15.active).length, fmt: (e15) => String(Math.round(e15)), label: `Codes the shop accepts` }), (0, G.jsx)(X, { icon: `bag`, value: c2.reduce((e15, t3) => e15 + t3.uses, 0), fmt: (e15) => Math.round(e15).toLocaleString(`en-IN`), label: `Times used this year` })] }), actions: (0, G.jsxs)(`button`, { type: `button`, className: `btn btn--ink`, onClick: () => S(`promos?new=1`), children: [(0, G.jsx)(K, { name: `plus`, size: 16 }), `New code`] }) }), (0, G.jsxs)(`div`, { className: `codes`, children: [c2.map((e15, t3) => (0, G.jsxs)(`article`, { className: `block block--${Wt2[t3 % Wt2.length]} code${e15.active ? `` : ` is-off`}`, "data-in": true, children: [(0, G.jsxs)(`span`, { className: `block__meta`, children: [e15.custom ? `Your code` : `Built in`, ` \xB7 `, J(e15.uses, `use`)] }), (0, G.jsx)(st2, { label: `Actions for ${e15.code}`, className: `ibtn ibtn--sm ibtn--on-dark code__menu`, items: [{ label: `Edit`, icon: `note`, onSelect: () => i2(e15) }, { label: `Copy code`, icon: `check`, onSelect: () => {
      navigator.clipboard?.writeText(e15.code).catch(() => {
      }), W(`${e15.code} copied`);
    } }, ...e15.custom ? [`sep`, { label: `Delete`, icon: `close`, danger: true, onSelect: () => {
      He2(e15.code), W(`${e15.code} deleted`);
    } }] : []] }), (0, G.jsx)(`b`, { className: `code__code`, children: e15.code }), (0, G.jsx)(`span`, { className: `block__sub`, children: e15.label }), (0, G.jsxs)(`span`, { className: `block__foot`, children: [(0, G.jsx)(`span`, { className: `code__state`, children: e15.active ? `Live in the shop` : `Switched off` }), (0, G.jsx)(ft2, { on: e15.active, label: `${e15.code} accepted in the shop`, onChange: (t4) => {
      Ve2(e15.code, { kind: e15.kind, value: e15.value, label: e15.label, active: t4 }), W(t4 ? `${e15.code} is live again` : `${e15.code} switched off`);
    } })] })] }, e15.code)), (0, G.jsxs)(`button`, { type: `button`, className: `code code--add`, "data-in": true, onClick: () => S(`promos?new=1`), children: [(0, G.jsx)(K, { name: `plus`, size: 22 }), (0, G.jsx)(`b`, { children: `New code` }), (0, G.jsx)(`small`, { children: `A % off or free delivery` })] })] }), (0, G.jsxs)(`div`, { className: `promo-row`, children: [(0, G.jsxs)(Z, { className: `dropc`, tone: `teal`, title: `Drop 03 \xB7 Rust Bengal`, sub: `${H(l2.slug)} left`, tools: (0, G.jsx)(`a`, { className: `ibtn ibtn--on-dark`, href: `#/products/rust`, "aria-label": `Stock for Rust Bengal`, title: `Stock`, children: (0, G.jsx)(K, { name: `out` }) }), children: [(0, G.jsx)(`div`, { className: `clock`, role: `timer`, "aria-label": `Time until the drop closes`, children: p2.map(([e15, t3]) => (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`b`, { className: `num`, children: String(t3).padStart(2, `0`) }), (0, G.jsx)(`small`, { children: e15 })] }, e15)) }), (0, G.jsxs)(`p`, { className: `dropc__bar`, children: [(0, G.jsxs)(`span`, { children: [`Sold `, Ze2(), ` of `, M2.batch] }), (0, G.jsx)(`span`, { className: `meter meter--on-dark`, children: (0, G.jsx)(`span`, { className: `meter__fill tone--sand`, style: { transform: `scaleX(${Ze2() / M2.batch})` } }) })] }), (0, G.jsx)(`span`, { className: `sizes-mini sizes-mini--dark`, children: p.map((e15) => {
      let t3 = B2(l2.slug)[e15];
      return (0, G.jsxs)(`i`, { className: t3 === 0 ? `is-out` : t3 <= 3 ? `is-low` : ``, children: [e15, ` \xB7 `, t3] }, e15);
    }) })] }), (0, G.jsxs)(Z, { className: `bannerc`, title: `Top bar messages`, sub: `The shop rotates these every few seconds`, children: [(0, G.jsx)(`ol`, { className: `ann`, children: te.map((e15, t3) => (0, G.jsxs)(`li`, { children: [(0, G.jsx)(`span`, { className: `num`, children: t3 + 1 }), e15] }, e15)) }), (0, G.jsxs)(`a`, { className: `btn btn--ghost btn--sm`, href: `../`, target: `_blank`, rel: `noopener`, children: [(0, G.jsx)(K, { name: `store`, size: 15 }), `See it in the shop`] })] })] }), (0, G.jsx)(Gt2, { open: o2 || !!n2, edit: n2, onClose: () => {
      i2(void 0), o2 && S(`promos`);
    } })] });
  }
  var qt2 = [`cod`, `bkash`, `nagad`, `card`];
  function Jt2() {
    let e15 = I2(), [t2, n2] = (0, g.useState)({ storeName: e15.settings.storeName, email: e15.settings.email, phone: e15.settings.phone }), [r2, i2] = (0, g.useState)(``), a2 = (t3, n3) => (0, G.jsxs)(`li`, { className: `setrow`, children: [(0, G.jsx)(`span`, { children: n3 }), (0, G.jsx)(ft2, { on: !!e15.settings[t3], label: n3, onChange: (n4) => {
      if (!n4 && qt2.includes(t3) && qt2.filter((t4) => e15.settings[t4]).length === 1) return W(`Checkout needs at least one way to pay`);
      Ue2({ [t3]: n4 });
    } })] });
    return (0, G.jsxs)(`div`, { className: `view view--settings`, children: [(0, G.jsx)(Y, { title: [`Store`, `settings`], stats: null }), (0, G.jsxs)(`div`, { className: `setgrid`, children: [(0, G.jsx)(Z, { title: `Store details`, sub: `On receipts and the emails customers get`, children: (0, G.jsxs)(`form`, { className: `mform mform--flat`, onSubmit: (e16) => {
      if (e16.preventDefault(), !t2.storeName.trim()) return i2(`The store needs a name.`);
      if (!/^\S+@\S+\.\S+$/.test(t2.email)) return i2(`That email doesn\u2019t look right.`);
      i2(``), Ue2(t2), W(`Store details saved`);
    }, noValidate: true, children: [(0, G.jsxs)(`label`, { className: `field`, children: [(0, G.jsx)(`span`, { className: `field__label`, children: `Store name` }), (0, G.jsx)(`input`, { className: `input`, value: t2.storeName, onChange: (e16) => n2({ ...t2, storeName: e16.target.value }) })] }), (0, G.jsxs)(`label`, { className: `field`, children: [(0, G.jsx)(`span`, { className: `field__label`, children: `Email` }), (0, G.jsx)(`input`, { className: `input`, type: `email`, value: t2.email, onChange: (e16) => n2({ ...t2, email: e16.target.value }) })] }), (0, G.jsxs)(`label`, { className: `field`, children: [(0, G.jsx)(`span`, { className: `field__label`, children: `Phone` }), (0, G.jsx)(`input`, { className: `input`, type: `tel`, value: t2.phone, onChange: (e16) => n2({ ...t2, phone: e16.target.value }) })] }), r2 && (0, G.jsx)(`p`, { className: `field__err`, role: `alert`, children: r2 }), (0, G.jsx)(`div`, { className: `mform__foot`, children: (0, G.jsx)(`button`, { className: `btn btn--ink`, type: `submit`, children: `Save` }) })] }) }), (0, G.jsxs)(Z, { title: `Stock`, sub: `When a size counts as running low`, children: [(0, G.jsxs)(`div`, { className: `lowline`, children: [(0, G.jsx)(`button`, { type: `button`, className: `ibtn`, "aria-label": `Lower`, onClick: () => Ue2({ lowStock: Math.max(1, e15.settings.lowStock - 1) }), children: (0, G.jsx)(K, { name: `minus`, size: 16 }) }), (0, G.jsx)(`b`, { className: `num`, children: e15.settings.lowStock }), (0, G.jsx)(`button`, { type: `button`, className: `ibtn`, "aria-label": `Higher`, onClick: () => Ue2({ lowStock: Math.min(10, e15.settings.lowStock + 1) }), children: (0, G.jsx)(K, { name: `plus`, size: 16 }) }), (0, G.jsx)(`span`, { className: `muted`, children: `or fewer left in a size` })] }), (0, G.jsx)(`h3`, { className: `card__title set__sub`, children: `Delivery` }), (0, G.jsxs)(`ul`, { className: `setlist`, children: [ie.map((e16) => (0, G.jsxs)(`li`, { className: `setrow`, children: [(0, G.jsxs)(`span`, { children: [e16.label, (0, G.jsx)(`small`, { children: e16.note })] }), (0, G.jsx)(`b`, { className: `num`, children: q(e16.fee) })] }, e16.id)), (0, G.jsxs)(`li`, { className: `setrow`, children: [(0, G.jsx)(`span`, { children: `Free delivery over` }), (0, G.jsx)(`b`, { className: `num`, children: q(re) })] })] })] }), (0, G.jsx)(Z, { title: `Payments`, sub: `What the shop\u2019s checkout offers`, children: (0, G.jsxs)(`ul`, { className: `setlist`, children: [a2(`cod`, `Cash on delivery`), a2(`bkash`, `bKash`), a2(`nagad`, `Nagad`), a2(`card`, `Card`)] }) }), (0, G.jsx)(Z, { title: `Notifications`, children: (0, G.jsxs)(`ul`, { className: `setlist`, children: [a2(`notifyOrders`, `Every new order`), a2(`notifyStock`, `A size running low`), a2(`notifyReturns`, `Return requests`)] }) }), (0, G.jsx)(Z, { title: `Appearance`, children: (0, G.jsx)(rt2, { label: `Theme`, value: e15.theme, onChange: (e16) => b2(document.querySelector(`.view--settings .seg`), () => {
      We2(e16), document.documentElement.dataset.theme = e16;
    }), options: [{ id: `light`, label: `Light` }, { id: `dark`, label: `Dark` }] }) }), (0, G.jsx)(Z, { title: `Demo data`, sub: `Statuses, stock, prices, codes and notes are saved in this browser`, children: (0, G.jsxs)(`button`, { type: `button`, className: `btn btn--danger`, onClick: () => {
      Ke2(), n2({ storeName: P2.settings.storeName, email: P2.settings.email, phone: P2.settings.phone }), W(`Demo data reset`);
    }, children: [(0, G.jsx)(K, { name: `undo`, size: 16 }), `Reset everything`] }) })] })] });
  }
  var Yt2 = { overview: bt2, orders: kt2, products: Ft2, customers: Bt2, fit: Ut2, promos: Kt2, settings: Jt2 };
  var Xt2 = { overview: `Overview`, orders: `Orders`, products: `Products`, customers: `Customers`, fit: `Fit insights`, promos: `Promotions`, settings: `Settings` };
  function Zt2({ page: e15 }) {
    let t2 = (0, g.useRef)(null), n2 = (0, g.useRef)(null), r2 = (0, g.useRef)({ l: 0, r: 0, on: false }), i2 = () => {
      let e16 = r2.current, t3 = n2.current;
      t3 && (t3.style.clipPath = `inset(4px ${e16.r}px 4px ${e16.l}px round 999px)`);
    }, a2 = (a3) => {
      let o3 = t2.current, s3 = n2.current;
      if (!o3 || !s3) return;
      let c2 = o3.querySelector(`[data-route="${e15}"]`);
      if (!c2) {
        fa.to(s3, { opacity: 0, duration: 0.25 }), r2.current.on = false;
        return;
      }
      let l2 = c2.offsetLeft, u2 = o3.clientWidth - (c2.offsetLeft + c2.offsetWidth), d2 = r2.current.on;
      if (r2.current.on = true, fa.to(s3, { opacity: 1, duration: 0.25 }), !a3 || !d2 || v2()) {
        fa.killTweensOf(r2.current), Object.assign(r2.current, { l: l2, r: u2 }), i2();
        return;
      }
      let f = l2 > r2.current.l;
      fa.to(r2.current, { l: l2, duration: f ? 0.62 : 0.42, ease: f ? `expo.inOut` : `expo.out`, onUpdate: i2, overwrite: false }), fa.to(r2.current, { r: u2, duration: f ? 0.42 : 0.62, ease: f ? `expo.out` : `expo.inOut`, onUpdate: i2, overwrite: false }), c2.scrollIntoView({ block: `nearest`, inline: `nearest`, behavior: `smooth` });
    };
    (0, g.useLayoutEffect)(() => a2(true), [e15]);
    let o2 = (0, g.useRef)(null), s2 = () => {
      let e16 = o2.current;
      e16 && (e16.classList.toggle(`is-more-l`, e16.scrollLeft > 4), e16.classList.toggle(`is-more-r`, e16.scrollLeft + e16.clientWidth < e16.scrollWidth - 4));
    };
    return (0, g.useEffect)(() => {
      let e16 = new ResizeObserver(() => {
        a2(false), s2();
      });
      return t2.current && e16.observe(t2.current), o2.current && e16.observe(o2.current), () => e16.disconnect();
    }, [e15]), (0, G.jsx)(`nav`, { className: `tabs`, "aria-label": `Main`, ref: o2, onScroll: s2, children: (0, G.jsxs)(`div`, { className: `tabs__track`, ref: t2, children: [ie2.map((t3) => (0, G.jsx)(`a`, { className: `tab`, href: `#/${t3.id}`, "data-route": t3.id, "aria-current": t3.id === e15 ? `page` : void 0, children: t3.label }, t3.id)), (0, G.jsx)(`span`, { className: `tabs__pill`, ref: n2, "aria-hidden": `true`, children: ie2.map((e16) => (0, G.jsx)(`span`, { children: e16.label }, e16.id)) })] }) });
  }
  function Qt2() {
    let e15 = I2(), t2 = Ce2.filter((t3) => !e15.read.includes(t3.id)).length;
    return (0, G.jsxs)(st2, { label: t2 ? `Notifications, ${t2} unread` : `Notifications`, className: `ibtn ibtn--glass`, items: [...Ce2.map((t3) => ({ label: `${e15.read.includes(t3.id) ? `` : `\u25CF `}${t3.title} \u2014 ${t3.body}`, icon: t3.icon, onSelect: () => {
      Ge2([t3.id]), location.hash = t3.href;
    } })), `sep`, { label: `Mark all as read`, icon: `check`, onSelect: () => Ge2(Ce2.map((e16) => e16.id)) }], children: [(0, G.jsx)(K, { name: `bell` }), t2 > 0 && (0, G.jsx)(`span`, { className: `dot-badge` })] });
  }
  function $t2({ open: e15, onClose: t2 }) {
    let [n2, r2] = (0, g.useState)(``), [i2, a2] = (0, g.useState)(0), o2 = (0, g.useMemo)(() => {
      let e16 = n2.trim().toLowerCase(), t3 = [...ie2, { id: `settings`, label: `Settings` }].map((e17) => ({ kind: `Page`, label: e17.label, sub: `Go to page`, href: `#/${e17.id}` }));
      if (!e16) return t3;
      let r3 = Me2();
      return [...t3, ...y.map((e17) => ({ kind: `Shirt`, label: e17.name, sub: `${e17.family} \xB7 ${e17.cat}`, href: `#/products/${e17.slug}` })), ...r3.map((e17) => ({ kind: `Customer`, label: e17.name, sub: `${e17.district} \xB7 ${e17.email}`, href: `#/customers/${e17.id}` })), ...L2().slice(0, 80).map((e17) => ({ kind: `Order`, label: e17.id, sub: r3.find((t4) => t4.id === e17.customer)?.name ?? ``, href: `#/orders/${e17.id}` }))].filter((t4) => `${t4.label} ${t4.sub}`.toLowerCase().includes(e16)).slice(0, 12);
    }, [n2]);
    (0, g.useEffect)(() => {
      a2(0);
    }, [n2]), (0, g.useEffect)(() => {
      e15 && r2(``);
    }, [e15]);
    let s2 = (e16) => {
      e16 && (t2(), location.hash = e16.href);
    };
    return (0, G.jsx)(ot2, { open: e15, onClose: t2, title: `Search`, children: (0, G.jsxs)(`div`, { className: `finder`, children: [(0, G.jsxs)(`label`, { className: `search search--big`, children: [(0, G.jsx)(K, { name: `search` }), (0, G.jsx)(`span`, { className: `sr`, children: `Search` }), (0, G.jsx)(`input`, { autoFocus: true, value: n2, onChange: (e16) => r2(e16.target.value), placeholder: `Orders, shirts, customers, pages\u2026`, onKeyDown: (e16) => {
      e16.key === `ArrowDown` && (e16.preventDefault(), a2((e17) => Math.min(o2.length - 1, e17 + 1))), e16.key === `ArrowUp` && (e16.preventDefault(), a2((e17) => Math.max(0, e17 - 1))), e16.key === `Enter` && s2(o2[i2]);
    } })] }), (0, G.jsxs)(`ul`, { className: `finder__list`, role: `listbox`, "aria-label": `Results`, children: [o2.map((e16, t3) => (0, G.jsx)(`li`, { role: `option`, "aria-selected": t3 === i2, children: (0, G.jsxs)(`button`, { type: `button`, className: `pop__row`, onMouseEnter: () => a2(t3), onClick: () => s2(e16), children: [(0, G.jsx)(`span`, { className: `finder__kind`, children: e16.kind }), (0, G.jsxs)(`span`, { children: [(0, G.jsx)(`b`, { children: e16.label }), (0, G.jsx)(`small`, { children: e16.sub })] })] }) }, e16.kind + e16.href)), !o2.length && (0, G.jsx)(`li`, { className: `empty`, children: (0, G.jsxs)(`p`, { className: `empty__title`, children: [`Nothing matches \u201C`, n2, `\u201D`] }) })] })] }) });
  }
  function en2() {
    let [e15, t2] = (0, g.useState)(!N2);
    return (0, g.useEffect)(() => {
      N2 && (window.RAYE_ADMIN = { enter: () => {
        document.documentElement.classList.add(`is-started`), t2(true);
      }, drive(e16) {
        let t3 = fa.ticker.time, n2 = e16();
        fa.ticker.remove(fa.updateRoot), fa.ticker.add(() => fa.updateRoot(t3 + e16() - n2));
      }, set speed(e16) {
        fa.globalTimeline.timeScale(e16);
      }, get speed() {
        return fa.globalTimeline.timeScale();
      }, get route() {
        return document.documentElement.classList.contains(`is-started`) ? location.hash.replace(/^#\/?/, ``).split(`?`)[0] || `overview` : ``;
      }, get theme() {
        return document.documentElement.dataset.theme ?? ``;
      } });
    }, []), e15 ? (0, G.jsx)(tn2, {}) : null;
  }
  function tn2() {
    let e15 = se(), t2 = I2(), n2 = (0, g.useRef)(null), r2 = (0, g.useRef)(null), [i2, a2] = (0, g.useState)(false), o2 = Yt2[e15.page];
    return (0, g.useLayoutEffect)(() => {
      document.documentElement.dataset.theme = t2.theme;
    }, [t2.theme]), (0, g.useLayoutEffect)(() => {
      document.title = `${Xt2[e15.page]} \u2014 Ray\xE9 admin`, n2.current && y2(n2.current), scrollTo({ top: 0 }), n2.current?.querySelector(`.head__title`)?.focus({ preventScroll: true });
    }, [e15.page]), (0, g.useEffect)(() => {
      document.documentElement.classList.add(`is-ready`);
      let e16 = document.querySelectorAll(`.mesh i`), t3 = v2() ? [] : [...e16].map((e17, t4) => fa.to(e17, { x: t4 % 2 ? -80 : 90, y: t4 ? 60 : -50, duration: 18 + t4 * 4, ease: `sine.inOut`, yoyo: true, repeat: -1 })), n3 = (e17) => {
        ((e17.metaKey || e17.ctrlKey) && e17.key.toLowerCase() === `k` || e17.key === `/` && !(e17.target instanceof HTMLInputElement || e17.target instanceof HTMLTextAreaElement)) && (e17.preventDefault(), a2(true));
      };
      return addEventListener(`keydown`, n3), () => {
        removeEventListener(`keydown`, n3), t3.forEach((e17) => e17.kill());
      };
    }, []), (0, G.jsxs)(G.Fragment, { children: [(0, G.jsx)(`a`, { className: `skip`, href: `#main`, onClick: (e16) => {
      e16.preventDefault(), n2.current?.querySelector(`.head__title`)?.focus();
    }, children: `Skip to content` }), (0, G.jsxs)(`div`, { className: `mesh`, "aria-hidden": `true`, children: [(0, G.jsx)(`i`, { className: `mesh__a` }), (0, G.jsx)(`i`, { className: `mesh__b` }), (0, G.jsx)(`i`, { className: `mesh__c` })] }), (0, G.jsxs)(`div`, { className: `app`, children: [(0, G.jsxs)(`header`, { className: `top`, children: [(0, G.jsxs)(`a`, { className: `brand`, href: `#/overview`, "aria-label": `Ray\xE9 admin \u2014 overview`, children: [(0, G.jsx)(`span`, { className: `brand__mark`, "aria-hidden": `true`, children: `R` }), (0, G.jsxs)(`span`, { className: `brand__name`, children: [`ray\xE9`, (0, G.jsx)(`small`, { children: `admin` })] })] }), (0, G.jsx)(Zt2, { page: e15.page }), (0, G.jsxs)(`div`, { className: `top__tools`, children: [(0, G.jsxs)(`a`, { className: `btn btn--ghost btn--sm top__shop`, href: `../`, children: [(0, G.jsx)(K, { name: `store`, size: 16 }), `View shop`] }), (0, G.jsx)(Qt2, {}), (0, G.jsx)(st2, { label: `Account`, className: `me`, items: [{ label: `View the shop`, icon: `store`, onSelect: () => {
      location.href = `../`;
    } }, { label: `Settings`, icon: `gear`, onSelect: () => S(`settings`) }, `sep`, { label: `Reset demo data`, icon: `undo`, danger: true, onSelect: () => {
      Ke2(), W(`Demo data reset`);
    } }], children: (0, G.jsx)(`span`, { className: `av av--md av--t2`, "aria-hidden": `true`, children: lt2(`Rumana Akter`) }) })] })] }), (0, G.jsxs)(`nav`, { className: `dock`, "aria-label": `Quick actions`, children: [(0, G.jsxs)(`button`, { type: `button`, className: `dock__btn`, onClick: () => a2(true), "aria-label": `Search (\u2318K)`, children: [(0, G.jsx)(K, { name: `search` }), (0, G.jsxs)(`span`, { className: `dock__tip`, children: [`Search `, (0, G.jsx)(`kbd`, { children: `\u2318K` })] })] }), (0, G.jsx)(st2, { label: `Create`, icon: `plus`, className: `dock__btn`, align: `start`, items: [{ label: `New discount code`, icon: `tag`, onSelect: () => S(`promos?new=1`) }, { label: `Restock a shirt`, icon: `box`, onSelect: () => S(`products?filter=low`) }, { label: `Orders to pack`, icon: `bag`, onSelect: () => S(`orders`) }] }), (0, G.jsxs)(`a`, { className: `dock__btn`, href: `#/orders`, "aria-label": `Orders to pack`, children: [(0, G.jsx)(K, { name: `bag` }), (0, G.jsx)(`span`, { className: `dock__tip`, children: `Orders` })] }), (0, G.jsxs)(`a`, { className: `dock__btn`, href: `#/fit`, "aria-label": `Fit insights`, children: [(0, G.jsx)(K, { name: `ruler` }), (0, G.jsx)(`span`, { className: `dock__tip`, children: `Fit insights` })] }), (0, G.jsxs)(`a`, { className: `dock__btn`, href: `../`, "aria-label": `View the shop`, children: [(0, G.jsx)(K, { name: `store` }), (0, G.jsx)(`span`, { className: `dock__tip`, children: `View shop` })] }), (0, G.jsx)(`span`, { className: `dock__sep`, "aria-hidden": `true` }), (0, G.jsxs)(`a`, { className: `dock__btn`, href: `#/settings`, "aria-label": `Settings`, "aria-current": e15.page === `settings` ? `page` : void 0, children: [(0, G.jsx)(K, { name: `gear` }), (0, G.jsx)(`span`, { className: `dock__tip`, children: `Settings` })] }), (0, G.jsxs)(`button`, { type: `button`, ref: r2, className: `dock__btn`, onClick: () => b2(r2.current, () => {
      let e16 = P2.theme === `dark` ? `light` : `dark`;
      We2(e16), document.documentElement.dataset.theme = e16;
    }), "aria-label": t2.theme === `dark` ? `Switch to light theme` : `Switch to dark theme`, children: [(0, G.jsx)(K, { name: t2.theme === `dark` ? `sun` : `moon` }), (0, G.jsxs)(`span`, { className: `dock__tip`, children: [t2.theme === `dark` ? `Light` : `Dark`, ` theme`] })] })] }), (0, G.jsx)(`main`, { className: `main`, id: `main`, ref: n2, children: (0, G.jsx)(o2, {}) }, e15.page)] }), (0, G.jsx)($t2, { open: i2, onClose: () => a2(false) }), (0, G.jsx)(ct2, {})] });
  }
  (0, _2.createRoot)(document.getElementById(`root`)).render((0, G.jsx)(en2, {}));
})();
