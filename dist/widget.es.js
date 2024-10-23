function Gm(o, l) {
  for (var s = 0; s < l.length; s++) {
    const u = l[s];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const d in u)
        if (d !== "default" && !(d in o)) {
          const f = Object.getOwnPropertyDescriptor(u, d);
          f && Object.defineProperty(o, d, f.get ? f : {
            enumerable: !0,
            get: () => u[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
function Wd(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Bd = { exports: {} }, ro = {}, Ls = { exports: {} }, ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function Xm() {
  if (sd)
    return ae;
  sd = 1;
  var o = Symbol.for("react.element"), l = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), E = Symbol.iterator;
  function R(x) {
    return x === null || typeof x != "object" ? null : (x = E && x[E] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, k = {};
  function _(x, z, ie) {
    this.props = x, this.context = z, this.refs = k, this.updater = ie || O;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(x, z) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, z, "setState");
  }, _.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function T() {
  }
  T.prototype = _.prototype;
  function U(x, z, ie) {
    this.props = x, this.context = z, this.refs = k, this.updater = ie || O;
  }
  var B = U.prototype = new T();
  B.constructor = U, A(B, _.prototype), B.isPureReactComponent = !0;
  var F = Array.isArray, $ = Object.prototype.hasOwnProperty, q = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(x, z, ie) {
    var se, fe = {}, pe = null, ge = null;
    if (z != null)
      for (se in z.ref !== void 0 && (ge = z.ref), z.key !== void 0 && (pe = "" + z.key), z)
        $.call(z, se) && !G.hasOwnProperty(se) && (fe[se] = z[se]);
    var ve = arguments.length - 2;
    if (ve === 1)
      fe.children = ie;
    else if (1 < ve) {
      for (var Ee = Array(ve), Qe = 0; Qe < ve; Qe++)
        Ee[Qe] = arguments[Qe + 2];
      fe.children = Ee;
    }
    if (x && x.defaultProps)
      for (se in ve = x.defaultProps, ve)
        fe[se] === void 0 && (fe[se] = ve[se]);
    return { $$typeof: o, type: x, key: pe, ref: ge, props: fe, _owner: q.current };
  }
  function me(x, z) {
    return { $$typeof: o, type: x.type, key: z, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function ce(x) {
    return typeof x == "object" && x !== null && x.$$typeof === o;
  }
  function Se(x) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ie) {
      return z[ie];
    });
  }
  var ne = /\/+/g;
  function we(x, z) {
    return typeof x == "object" && x !== null && x.key != null ? Se("" + x.key) : z.toString(36);
  }
  function ue(x, z, ie, se, fe) {
    var pe = typeof x;
    (pe === "undefined" || pe === "boolean") && (x = null);
    var ge = !1;
    if (x === null)
      ge = !0;
    else
      switch (pe) {
        case "string":
        case "number":
          ge = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case o:
            case l:
              ge = !0;
          }
      }
    if (ge)
      return ge = x, fe = fe(ge), x = se === "" ? "." + we(ge, 0) : se, F(fe) ? (ie = "", x != null && (ie = x.replace(ne, "$&/") + "/"), ue(fe, z, ie, "", function(Qe) {
        return Qe;
      })) : fe != null && (ce(fe) && (fe = me(fe, ie + (!fe.key || ge && ge.key === fe.key ? "" : ("" + fe.key).replace(ne, "$&/") + "/") + x)), z.push(fe)), 1;
    if (ge = 0, se = se === "" ? "." : se + ":", F(x))
      for (var ve = 0; ve < x.length; ve++) {
        pe = x[ve];
        var Ee = se + we(pe, ve);
        ge += ue(pe, z, ie, Ee, fe);
      }
    else if (Ee = R(x), typeof Ee == "function")
      for (x = Ee.call(x), ve = 0; !(pe = x.next()).done; )
        pe = pe.value, Ee = se + we(pe, ve++), ge += ue(pe, z, ie, Ee, fe);
    else if (pe === "object")
      throw z = String(x), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function xe(x, z, ie) {
    if (x == null)
      return x;
    var se = [], fe = 0;
    return ue(x, se, "", "", function(pe) {
      return z.call(ie, pe, fe++);
    }), se;
  }
  function de(x) {
    if (x._status === -1) {
      var z = x._result;
      z = z(), z.then(function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ie);
      }, function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ie);
      }), x._status === -1 && (x._status = 0, x._result = z);
    }
    if (x._status === 1)
      return x._result.default;
    throw x._result;
  }
  var J = { current: null }, j = { transition: null }, V = { ReactCurrentDispatcher: J, ReactCurrentBatchConfig: j, ReactCurrentOwner: q };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ae.Children = { map: xe, forEach: function(x, z, ie) {
    xe(x, function() {
      z.apply(this, arguments);
    }, ie);
  }, count: function(x) {
    var z = 0;
    return xe(x, function() {
      z++;
    }), z;
  }, toArray: function(x) {
    return xe(x, function(z) {
      return z;
    }) || [];
  }, only: function(x) {
    if (!ce(x))
      throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, ae.Component = _, ae.Fragment = s, ae.Profiler = d, ae.PureComponent = U, ae.StrictMode = u, ae.Suspense = v, ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, ae.act = H, ae.cloneElement = function(x, z, ie) {
    if (x == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var se = A({}, x.props), fe = x.key, pe = x.ref, ge = x._owner;
    if (z != null) {
      if (z.ref !== void 0 && (pe = z.ref, ge = q.current), z.key !== void 0 && (fe = "" + z.key), x.type && x.type.defaultProps)
        var ve = x.type.defaultProps;
      for (Ee in z)
        $.call(z, Ee) && !G.hasOwnProperty(Ee) && (se[Ee] = z[Ee] === void 0 && ve !== void 0 ? ve[Ee] : z[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1)
      se.children = ie;
    else if (1 < Ee) {
      ve = Array(Ee);
      for (var Qe = 0; Qe < Ee; Qe++)
        ve[Qe] = arguments[Qe + 2];
      se.children = ve;
    }
    return { $$typeof: o, type: x.type, key: fe, ref: pe, props: se, _owner: ge };
  }, ae.createContext = function(x) {
    return x = { $$typeof: m, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: f, _context: x }, x.Consumer = x;
  }, ae.createElement = oe, ae.createFactory = function(x) {
    var z = oe.bind(null, x);
    return z.type = x, z;
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(x) {
    return { $$typeof: p, render: x };
  }, ae.isValidElement = ce, ae.lazy = function(x) {
    return { $$typeof: N, _payload: { _status: -1, _result: x }, _init: de };
  }, ae.memo = function(x, z) {
    return { $$typeof: y, type: x, compare: z === void 0 ? null : z };
  }, ae.startTransition = function(x) {
    var z = j.transition;
    j.transition = {};
    try {
      x();
    } finally {
      j.transition = z;
    }
  }, ae.unstable_act = H, ae.useCallback = function(x, z) {
    return J.current.useCallback(x, z);
  }, ae.useContext = function(x) {
    return J.current.useContext(x);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(x) {
    return J.current.useDeferredValue(x);
  }, ae.useEffect = function(x, z) {
    return J.current.useEffect(x, z);
  }, ae.useId = function() {
    return J.current.useId();
  }, ae.useImperativeHandle = function(x, z, ie) {
    return J.current.useImperativeHandle(x, z, ie);
  }, ae.useInsertionEffect = function(x, z) {
    return J.current.useInsertionEffect(x, z);
  }, ae.useLayoutEffect = function(x, z) {
    return J.current.useLayoutEffect(x, z);
  }, ae.useMemo = function(x, z) {
    return J.current.useMemo(x, z);
  }, ae.useReducer = function(x, z, ie) {
    return J.current.useReducer(x, z, ie);
  }, ae.useRef = function(x) {
    return J.current.useRef(x);
  }, ae.useState = function(x) {
    return J.current.useState(x);
  }, ae.useSyncExternalStore = function(x, z, ie) {
    return J.current.useSyncExternalStore(x, z, ie);
  }, ae.useTransition = function() {
    return J.current.useTransition();
  }, ae.version = "18.3.1", ae;
}
var ad;
function ta() {
  return ad || (ad = 1, Ls.exports = Xm()), Ls.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ud;
function Zm() {
  if (ud)
    return ro;
  ud = 1;
  var o = ta(), l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(p, v, y) {
    var N, E = {}, R = null, O = null;
    y !== void 0 && (R = "" + y), v.key !== void 0 && (R = "" + v.key), v.ref !== void 0 && (O = v.ref);
    for (N in v)
      u.call(v, N) && !f.hasOwnProperty(N) && (E[N] = v[N]);
    if (p && p.defaultProps)
      for (N in v = p.defaultProps, v)
        E[N] === void 0 && (E[N] = v[N]);
    return { $$typeof: l, type: p, key: R, ref: O, props: E, _owner: d.current };
  }
  return ro.Fragment = s, ro.jsx = m, ro.jsxs = m, ro;
}
Bd.exports = Zm();
var W = Bd.exports, Qs = {}, $d = { exports: {} }, et = {}, Ms = { exports: {} }, js = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function Jm() {
  return cd || (cd = 1, function(o) {
    function l(j, V) {
      var H = j.length;
      j.push(V);
      e:
        for (; 0 < H; ) {
          var x = H - 1 >>> 1, z = j[x];
          if (0 < d(z, V))
            j[x] = V, j[H] = z, H = x;
          else
            break e;
        }
    }
    function s(j) {
      return j.length === 0 ? null : j[0];
    }
    function u(j) {
      if (j.length === 0)
        return null;
      var V = j[0], H = j.pop();
      if (H !== V) {
        j[0] = H;
        e:
          for (var x = 0, z = j.length, ie = z >>> 1; x < ie; ) {
            var se = 2 * (x + 1) - 1, fe = j[se], pe = se + 1, ge = j[pe];
            if (0 > d(fe, H))
              pe < z && 0 > d(ge, fe) ? (j[x] = ge, j[pe] = H, x = pe) : (j[x] = fe, j[se] = H, x = se);
            else if (pe < z && 0 > d(ge, H))
              j[x] = ge, j[pe] = H, x = pe;
            else
              break e;
          }
      }
      return V;
    }
    function d(j, V) {
      var H = j.sortIndex - V.sortIndex;
      return H !== 0 ? H : j.id - V.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      o.unstable_now = function() {
        return f.now();
      };
    } else {
      var m = Date, p = m.now();
      o.unstable_now = function() {
        return m.now() - p;
      };
    }
    var v = [], y = [], N = 1, E = null, R = 3, O = !1, A = !1, k = !1, _ = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(j) {
      for (var V = s(y); V !== null; ) {
        if (V.callback === null)
          u(y);
        else if (V.startTime <= j)
          u(y), V.sortIndex = V.expirationTime, l(v, V);
        else
          break;
        V = s(y);
      }
    }
    function F(j) {
      if (k = !1, B(j), !A)
        if (s(v) !== null)
          A = !0, de($);
        else {
          var V = s(y);
          V !== null && J(F, V.startTime - j);
        }
    }
    function $(j, V) {
      A = !1, k && (k = !1, T(oe), oe = -1), O = !0;
      var H = R;
      try {
        for (B(V), E = s(v); E !== null && (!(E.expirationTime > V) || j && !Se()); ) {
          var x = E.callback;
          if (typeof x == "function") {
            E.callback = null, R = E.priorityLevel;
            var z = x(E.expirationTime <= V);
            V = o.unstable_now(), typeof z == "function" ? E.callback = z : E === s(v) && u(v), B(V);
          } else
            u(v);
          E = s(v);
        }
        if (E !== null)
          var ie = !0;
        else {
          var se = s(y);
          se !== null && J(F, se.startTime - V), ie = !1;
        }
        return ie;
      } finally {
        E = null, R = H, O = !1;
      }
    }
    var q = !1, G = null, oe = -1, me = 5, ce = -1;
    function Se() {
      return !(o.unstable_now() - ce < me);
    }
    function ne() {
      if (G !== null) {
        var j = o.unstable_now();
        ce = j;
        var V = !0;
        try {
          V = G(!0, j);
        } finally {
          V ? we() : (q = !1, G = null);
        }
      } else
        q = !1;
    }
    var we;
    if (typeof U == "function")
      we = function() {
        U(ne);
      };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), xe = ue.port2;
      ue.port1.onmessage = ne, we = function() {
        xe.postMessage(null);
      };
    } else
      we = function() {
        _(ne, 0);
      };
    function de(j) {
      G = j, q || (q = !0, we());
    }
    function J(j, V) {
      oe = _(function() {
        j(o.unstable_now());
      }, V);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, o.unstable_continueExecution = function() {
      A || O || (A = !0, de($));
    }, o.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < j ? Math.floor(1e3 / j) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, o.unstable_getFirstCallbackNode = function() {
      return s(v);
    }, o.unstable_next = function(j) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = R;
      }
      var H = R;
      R = V;
      try {
        return j();
      } finally {
        R = H;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(j, V) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var H = R;
      R = j;
      try {
        return V();
      } finally {
        R = H;
      }
    }, o.unstable_scheduleCallback = function(j, V, H) {
      var x = o.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? x + H : x) : H = x, j) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = H + z, j = { id: N++, callback: V, priorityLevel: j, startTime: H, expirationTime: z, sortIndex: -1 }, H > x ? (j.sortIndex = H, l(y, j), s(v) === null && j === s(y) && (k ? (T(oe), oe = -1) : k = !0, J(F, H - x))) : (j.sortIndex = z, l(v, j), A || O || (A = !0, de($))), j;
    }, o.unstable_shouldYield = Se, o.unstable_wrapCallback = function(j) {
      var V = R;
      return function() {
        var H = R;
        R = V;
        try {
          return j.apply(this, arguments);
        } finally {
          R = H;
        }
      };
    };
  }(js)), js;
}
var dd;
function qm() {
  return dd || (dd = 1, Ms.exports = Jm()), Ms.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fd;
function eh() {
  if (fd)
    return et;
  fd = 1;
  var o = ta(), l = qm();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var u = /* @__PURE__ */ new Set(), d = {};
  function f(e, t) {
    m(e, t), m(e + "Capture", t);
  }
  function m(e, t) {
    for (d[e] = t, e = 0; e < t.length; e++)
      u.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), v = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, E = {};
  function R(e) {
    return v.call(E, e) ? !0 : v.call(N, e) ? !1 : y.test(e) ? E[e] = !0 : (N[e] = !0, !1);
  }
  function O(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function A(e, t, n, r) {
    if (t === null || typeof t > "u" || O(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function k(e, t, n, r, i, a, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = c;
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _[e] = new k(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    _[t] = new k(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _[e] = new k(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _[e] = new k(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _[e] = new k(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _[e] = new k(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    _[e] = new k(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    _[e] = new k(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    _[e] = new k(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      T,
      U
    );
    _[t] = new k(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(T, U);
    _[t] = new k(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(T, U);
    _[t] = new k(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    _[e] = new k(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), _.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    _[e] = new k(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B(e, t, n, r) {
    var i = _.hasOwnProperty(t) ? _[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (A(t, n, i, r) && (n = null), r || i === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var F = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = Symbol.for("react.element"), q = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), me = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), Se = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), xe = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), j = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != "object" ? null : (e = j && e[j] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var H = Object.assign, x;
  function z(e) {
    if (x === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        x = t && t[1] || "";
      }
    return `
` + x + e;
  }
  var ie = !1;
  function se(e, t) {
    if (!e || ie)
      return "";
    ie = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (b) {
            var r = b;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (b) {
            r = b;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (b) {
          r = b;
        }
        e();
      }
    } catch (b) {
      if (b && r && typeof b.stack == "string") {
        for (var i = b.stack.split(`
`), a = r.stack.split(`
`), c = i.length - 1, h = a.length - 1; 1 <= c && 0 <= h && i[c] !== a[h]; )
          h--;
        for (; 1 <= c && 0 <= h; c--, h--)
          if (i[c] !== a[h]) {
            if (c !== 1 || h !== 1)
              do
                if (c--, h--, 0 > h || i[c] !== a[h]) {
                  var g = `
` + i[c].replace(" at new ", " at ");
                  return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), g;
                }
              while (1 <= c && 0 <= h);
            break;
          }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? z(e) : "";
  }
  function fe(e) {
    switch (e.tag) {
      case 5:
        return z(e.type);
      case 16:
        return z("Lazy");
      case 13:
        return z("Suspense");
      case 19:
        return z("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = se(e.type, !1), e;
      case 11:
        return e = se(e.type.render, !1), e;
      case 1:
        return e = se(e.type, !0), e;
      default:
        return "";
    }
  }
  function pe(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case G:
        return "Fragment";
      case q:
        return "Portal";
      case me:
        return "Profiler";
      case oe:
        return "StrictMode";
      case we:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Se:
          return (e.displayName || "Context") + ".Consumer";
        case ce:
          return (e._context.displayName || "Context") + ".Provider";
        case ne:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case xe:
          return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
        case de:
          t = e._payload, e = e._init;
          try {
            return pe(e(t));
          } catch {
          }
      }
    return null;
  }
  function ge(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pe(t);
      case 8:
        return t === oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function ve(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qe(e) {
    var t = Ee(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, a = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(c) {
        r = "" + c, a.call(this, c);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(c) {
        r = "" + c;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Mn(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function po(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ee(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function At(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wi(e, t) {
    var n = t.checked;
    return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ma(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ve(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function ha(e, t) {
    t = t.checked, t != null && B(e, "checked", t, !1);
  }
  function Bi(e, t) {
    ha(e, t);
    var n = ve(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $i(e, t.type, n) : t.hasOwnProperty("defaultValue") && $i(e, t.type, ve(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ga(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function $i(e, t, n) {
    (t !== "number" || At(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var yr = Array.isArray;
  function jn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ve(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(s(91));
    return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function va(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(s(92));
        if (yr(n)) {
          if (1 < n.length)
            throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ve(n) };
  }
  function ya(e, t) {
    var n = ve(t.value), r = ve(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function wa(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function xa(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Hi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var mo, ka = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (mo = mo || document.createElement("div"), mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mo.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function wr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, qf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xr).forEach(function(e) {
    qf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), xr[t] = xr[e];
    });
  });
  function Sa(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px";
  }
  function Ea(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Sa(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
      }
  }
  var ep = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Qi(e, t) {
    if (t) {
      if (ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(s(62));
    }
  }
  function Ki(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yi = null;
  function Gi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xi = null, Dn = null, Fn = null;
  function Ca(e) {
    if (e = Br(e)) {
      if (typeof Xi != "function")
        throw Error(s(280));
      var t = e.stateNode;
      t && (t = Do(t), Xi(e.stateNode, e.type, t));
    }
  }
  function Pa(e) {
    Dn ? Fn ? Fn.push(e) : Fn = [e] : Dn = e;
  }
  function Na() {
    if (Dn) {
      var e = Dn, t = Fn;
      if (Fn = Dn = null, Ca(e), t)
        for (e = 0; e < t.length; e++)
          Ca(t[e]);
    }
  }
  function Ra(e, t) {
    return e(t);
  }
  function ba() {
  }
  var Zi = !1;
  function _a(e, t, n) {
    if (Zi)
      return e(t, n);
    Zi = !0;
    try {
      return Ra(e, t, n);
    } finally {
      Zi = !1, (Dn !== null || Fn !== null) && (ba(), Na());
    }
  }
  function kr(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Do(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(s(231, t, typeof n));
    return n;
  }
  var Ji = !1;
  if (p)
    try {
      var Sr = {};
      Object.defineProperty(Sr, "passive", { get: function() {
        Ji = !0;
      } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
    } catch {
      Ji = !1;
    }
  function tp(e, t, n, r, i, a, c, h, g) {
    var b = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, b);
    } catch (M) {
      this.onError(M);
    }
  }
  var Er = !1, ho = null, go = !1, qi = null, np = { onError: function(e) {
    Er = !0, ho = e;
  } };
  function rp(e, t, n, r, i, a, c, h, g) {
    Er = !1, ho = null, tp.apply(np, arguments);
  }
  function op(e, t, n, r, i, a, c, h, g) {
    if (rp.apply(this, arguments), Er) {
      if (Er) {
        var b = ho;
        Er = !1, ho = null;
      } else
        throw Error(s(198));
      go || (go = !0, qi = b);
    }
  }
  function xn(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Oa(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Aa(e) {
    if (xn(e) !== e)
      throw Error(s(188));
  }
  function ip(e) {
    var t = e.alternate;
    if (!t) {
      if (t = xn(e), t === null)
        throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null)
        break;
      var a = i.alternate;
      if (a === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === a.child) {
        for (a = i.child; a; ) {
          if (a === n)
            return Aa(i), e;
          if (a === r)
            return Aa(i), t;
          a = a.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return)
        n = i, r = a;
      else {
        for (var c = !1, h = i.child; h; ) {
          if (h === n) {
            c = !0, n = i, r = a;
            break;
          }
          if (h === r) {
            c = !0, r = i, n = a;
            break;
          }
          h = h.sibling;
        }
        if (!c) {
          for (h = a.child; h; ) {
            if (h === n) {
              c = !0, n = a, r = i;
              break;
            }
            if (h === r) {
              c = !0, r = a, n = i;
              break;
            }
            h = h.sibling;
          }
          if (!c)
            throw Error(s(189));
        }
      }
      if (n.alternate !== r)
        throw Error(s(190));
    }
    if (n.tag !== 3)
      throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ta(e) {
    return e = ip(e), e !== null ? za(e) : null;
  }
  function za(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = za(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var La = l.unstable_scheduleCallback, Ma = l.unstable_cancelCallback, lp = l.unstable_shouldYield, sp = l.unstable_requestPaint, Te = l.unstable_now, ap = l.unstable_getCurrentPriorityLevel, el = l.unstable_ImmediatePriority, ja = l.unstable_UserBlockingPriority, vo = l.unstable_NormalPriority, up = l.unstable_LowPriority, Da = l.unstable_IdlePriority, yo = null, St = null;
  function cp(e) {
    if (St && typeof St.onCommitFiberRoot == "function")
      try {
        St.onCommitFiberRoot(yo, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : pp, dp = Math.log, fp = Math.LN2;
  function pp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (dp(e) / fp | 0) | 0;
  }
  var wo = 64, xo = 4194304;
  function Cr(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ko(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, i = e.suspendedLanes, a = e.pingedLanes, c = n & 268435455;
    if (c !== 0) {
      var h = c & ~i;
      h !== 0 ? r = Cr(h) : (a &= c, a !== 0 && (r = Cr(a)));
    } else
      c = n & ~i, c !== 0 ? r = Cr(c) : a !== 0 && (r = Cr(a));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, a = t & -t, i >= a || i === 16 && (a & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - pt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function mp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
      var c = 31 - pt(a), h = 1 << c, g = i[c];
      g === -1 ? (!(h & n) || h & r) && (i[c] = mp(h, t)) : g <= t && (e.expiredLanes |= h), a &= ~h;
    }
  }
  function tl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Fa() {
    var e = wo;
    return wo <<= 1, !(wo & 4194240) && (wo = 64), e;
  }
  function nl(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function Pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
  }
  function gp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - pt(n), a = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~a;
    }
  }
  function rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - pt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var ke = 0;
  function Ia(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ua, ol, Wa, Ba, $a, il = !1, So = [], Vt = null, Ht = null, Qt = null, Nr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), Kt = [], vp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Va(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ht = null;
        break;
      case "mouseover":
      case "mouseout":
        Qt = null;
        break;
      case "pointerover":
      case "pointerout":
        Nr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rr.delete(t.pointerId);
    }
  }
  function br(e, t, n, r, i, a) {
    return e === null || e.nativeEvent !== a ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }, t !== null && (t = Br(t), t !== null && ol(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function yp(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return Vt = br(Vt, e, t, n, r, i), !0;
      case "dragenter":
        return Ht = br(Ht, e, t, n, r, i), !0;
      case "mouseover":
        return Qt = br(Qt, e, t, n, r, i), !0;
      case "pointerover":
        var a = i.pointerId;
        return Nr.set(a, br(Nr.get(a) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return a = i.pointerId, Rr.set(a, br(Rr.get(a) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Ha(e) {
    var t = kn(e.target);
    if (t !== null) {
      var n = xn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Oa(n), t !== null) {
            e.blockedOn = t, $a(e.priority, function() {
              Wa(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Eo(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Yi = r, n.target.dispatchEvent(r), Yi = null;
      } else
        return t = Br(n), t !== null && ol(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Qa(e, t, n) {
    Eo(e) && n.delete(t);
  }
  function wp() {
    il = !1, Vt !== null && Eo(Vt) && (Vt = null), Ht !== null && Eo(Ht) && (Ht = null), Qt !== null && Eo(Qt) && (Qt = null), Nr.forEach(Qa), Rr.forEach(Qa);
  }
  function _r(e, t) {
    e.blockedOn === t && (e.blockedOn = null, il || (il = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, wp)));
  }
  function Or(e) {
    function t(i) {
      return _r(i, e);
    }
    if (0 < So.length) {
      _r(So[0], e);
      for (var n = 1; n < So.length; n++) {
        var r = So[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Vt !== null && _r(Vt, e), Ht !== null && _r(Ht, e), Qt !== null && _r(Qt, e), Nr.forEach(t), Rr.forEach(t), n = 0; n < Kt.length; n++)
      r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); )
      Ha(n), n.blockedOn === null && Kt.shift();
  }
  var In = F.ReactCurrentBatchConfig, Co = !0;
  function xp(e, t, n, r) {
    var i = ke, a = In.transition;
    In.transition = null;
    try {
      ke = 1, ll(e, t, n, r);
    } finally {
      ke = i, In.transition = a;
    }
  }
  function kp(e, t, n, r) {
    var i = ke, a = In.transition;
    In.transition = null;
    try {
      ke = 4, ll(e, t, n, r);
    } finally {
      ke = i, In.transition = a;
    }
  }
  function ll(e, t, n, r) {
    if (Co) {
      var i = sl(e, t, n, r);
      if (i === null)
        Cl(e, t, r, Po, n), Va(e, r);
      else if (yp(i, e, t, n, r))
        r.stopPropagation();
      else if (Va(e, r), t & 4 && -1 < vp.indexOf(e)) {
        for (; i !== null; ) {
          var a = Br(i);
          if (a !== null && Ua(a), a = sl(e, t, n, r), a === null && Cl(e, t, r, Po, n), a === i)
            break;
          i = a;
        }
        i !== null && r.stopPropagation();
      } else
        Cl(e, t, r, null, n);
    }
  }
  var Po = null;
  function sl(e, t, n, r) {
    if (Po = null, e = Gi(r), e = kn(e), e !== null)
      if (t = xn(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = Oa(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return Po = e, null;
  }
  function Ka(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ap()) {
          case el:
            return 1;
          case ja:
            return 4;
          case vo:
          case up:
            return 16;
          case Da:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yt = null, al = null, No = null;
  function Ya() {
    if (No)
      return No;
    var e, t = al, n = t.length, r, i = "value" in Yt ? Yt.value : Yt.textContent, a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
      ;
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === i[a - r]; r++)
      ;
    return No = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ro(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function bo() {
    return !0;
  }
  function Ga() {
    return !1;
  }
  function tt(e) {
    function t(n, r, i, a, c) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = a, this.target = c, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(a) : a[h]);
      return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? bo : Ga, this.isPropagationStopped = Ga, this;
    }
    return H(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bo);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bo);
    }, persist: function() {
    }, isPersistent: bo }), t;
  }
  var Un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ul = tt(Un), Ar = H({}, Un, { view: 0, detail: 0 }), Sp = tt(Ar), cl, dl, Tr, _o = H({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Tr && (Tr && e.type === "mousemove" ? (cl = e.screenX - Tr.screenX, dl = e.screenY - Tr.screenY) : dl = cl = 0, Tr = e), cl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : dl;
  } }), Xa = tt(_o), Ep = H({}, _o, { dataTransfer: 0 }), Cp = tt(Ep), Pp = H({}, Ar, { relatedTarget: 0 }), fl = tt(Pp), Np = H({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Rp = tt(Np), bp = H({}, Un, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), _p = tt(bp), Op = H({}, Un, { data: 0 }), Za = tt(Op), Ap = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Tp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Lp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zp[e]) ? !!t[e] : !1;
  }
  function pl() {
    return Lp;
  }
  var Mp = H({}, Ar, { key: function(e) {
    if (e.key) {
      var t = Ap[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = Ro(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Tp[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pl, charCode: function(e) {
    return e.type === "keypress" ? Ro(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), jp = tt(Mp), Dp = H({}, _o, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ja = tt(Dp), Fp = H({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pl }), Ip = tt(Fp), Up = H({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wp = tt(Up), Bp = H({}, _o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $p = tt(Bp), Vp = [9, 13, 27, 32], ml = p && "CompositionEvent" in window, zr = null;
  p && "documentMode" in document && (zr = document.documentMode);
  var Hp = p && "TextEvent" in window && !zr, qa = p && (!ml || zr && 8 < zr && 11 >= zr), eu = String.fromCharCode(32), tu = !1;
  function nu(e, t) {
    switch (e) {
      case "keyup":
        return Vp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ru(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Wn = !1;
  function Qp(e, t) {
    switch (e) {
      case "compositionend":
        return ru(t);
      case "keypress":
        return t.which !== 32 ? null : (tu = !0, eu);
      case "textInput":
        return e = t.data, e === eu && tu ? null : e;
      default:
        return null;
    }
  }
  function Kp(e, t) {
    if (Wn)
      return e === "compositionend" || !ml && nu(e, t) ? (e = Ya(), No = al = Yt = null, Wn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Yp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yp[e.type] : t === "textarea";
  }
  function iu(e, t, n, r) {
    Pa(r), t = Lo(t, "onChange"), 0 < t.length && (n = new ul("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Lr = null, Mr = null;
  function Gp(e) {
    Eu(e, 0);
  }
  function Oo(e) {
    var t = Qn(e);
    if (po(t))
      return e;
  }
  function Xp(e, t) {
    if (e === "change")
      return t;
  }
  var lu = !1;
  if (p) {
    var hl;
    if (p) {
      var gl = "oninput" in document;
      if (!gl) {
        var su = document.createElement("div");
        su.setAttribute("oninput", "return;"), gl = typeof su.oninput == "function";
      }
      hl = gl;
    } else
      hl = !1;
    lu = hl && (!document.documentMode || 9 < document.documentMode);
  }
  function au() {
    Lr && (Lr.detachEvent("onpropertychange", uu), Mr = Lr = null);
  }
  function uu(e) {
    if (e.propertyName === "value" && Oo(Mr)) {
      var t = [];
      iu(t, Mr, e, Gi(e)), _a(Gp, t);
    }
  }
  function Zp(e, t, n) {
    e === "focusin" ? (au(), Lr = t, Mr = n, Lr.attachEvent("onpropertychange", uu)) : e === "focusout" && au();
  }
  function Jp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Oo(Mr);
  }
  function qp(e, t) {
    if (e === "click")
      return Oo(t);
  }
  function em(e, t) {
    if (e === "input" || e === "change")
      return Oo(t);
  }
  function tm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : tm;
  function jr(e, t) {
    if (mt(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!v.call(t, i) || !mt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function cu(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function du(e, t) {
    var n = cu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = cu(n);
    }
  }
  function fu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function pu() {
    for (var e = window, t = At(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = At(e.document);
    }
    return t;
  }
  function vl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function nm(e) {
    var t = pu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && fu(n.ownerDocument.documentElement, n)) {
      if (r !== null && vl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, a = Math.min(r.start, i);
          r = r.end === void 0 ? a : Math.min(r.end, i), !e.extend && a > r && (i = r, r = a, a = i), i = du(n, a);
          var c = du(
            n,
            r
          );
          i && c && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var rm = p && "documentMode" in document && 11 >= document.documentMode, Bn = null, yl = null, Dr = null, wl = !1;
  function mu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl || Bn == null || Bn !== At(r) || (r = Bn, "selectionStart" in r && vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dr && jr(Dr, r) || (Dr = r, r = Lo(yl, "onSelect"), 0 < r.length && (t = new ul("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bn)));
  }
  function Ao(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var $n = { animationend: Ao("Animation", "AnimationEnd"), animationiteration: Ao("Animation", "AnimationIteration"), animationstart: Ao("Animation", "AnimationStart"), transitionend: Ao("Transition", "TransitionEnd") }, xl = {}, hu = {};
  p && (hu = document.createElement("div").style, "AnimationEvent" in window || (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation), "TransitionEvent" in window || delete $n.transitionend.transition);
  function To(e) {
    if (xl[e])
      return xl[e];
    if (!$n[e])
      return e;
    var t = $n[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in hu)
        return xl[e] = t[n];
    return e;
  }
  var gu = To("animationend"), vu = To("animationiteration"), yu = To("animationstart"), wu = To("transitionend"), xu = /* @__PURE__ */ new Map(), ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gt(e, t) {
    xu.set(e, t), f(t, [e]);
  }
  for (var kl = 0; kl < ku.length; kl++) {
    var Sl = ku[kl], om = Sl.toLowerCase(), im = Sl[0].toUpperCase() + Sl.slice(1);
    Gt(om, "on" + im);
  }
  Gt(gu, "onAnimationEnd"), Gt(vu, "onAnimationIteration"), Gt(yu, "onAnimationStart"), Gt("dblclick", "onDoubleClick"), Gt("focusin", "onFocus"), Gt("focusout", "onBlur"), Gt(wu, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
  function Su(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, op(r, t, void 0, e), e.currentTarget = null;
  }
  function Eu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var h = r[c], g = h.instance, b = h.currentTarget;
            if (h = h.listener, g !== a && i.isPropagationStopped())
              break e;
            Su(i, h, b), a = g;
          }
        else
          for (c = 0; c < r.length; c++) {
            if (h = r[c], g = h.instance, b = h.currentTarget, h = h.listener, g !== a && i.isPropagationStopped())
              break e;
            Su(i, h, b), a = g;
          }
      }
    }
    if (go)
      throw e = qi, go = !1, qi = null, e;
  }
  function Pe(e, t) {
    var n = t[Ol];
    n === void 0 && (n = t[Ol] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Cu(t, e, 2, !1), n.add(r));
  }
  function El(e, t, n) {
    var r = 0;
    t && (r |= 4), Cu(n, e, r, t);
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Ir(e) {
    if (!e[zo]) {
      e[zo] = !0, u.forEach(function(n) {
        n !== "selectionchange" && (lm.has(n) || El(n, !1, e), El(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zo] || (t[zo] = !0, El("selectionchange", !1, t));
    }
  }
  function Cu(e, t, n, r) {
    switch (Ka(t)) {
      case 1:
        var i = xp;
        break;
      case 4:
        i = kp;
        break;
      default:
        i = ll;
    }
    n = i.bind(null, t, n, e), i = void 0, !Ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Cl(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var c = r.tag;
          if (c === 3 || c === 4) {
            var h = r.stateNode.containerInfo;
            if (h === i || h.nodeType === 8 && h.parentNode === i)
              break;
            if (c === 4)
              for (c = r.return; c !== null; ) {
                var g = c.tag;
                if ((g === 3 || g === 4) && (g = c.stateNode.containerInfo, g === i || g.nodeType === 8 && g.parentNode === i))
                  return;
                c = c.return;
              }
            for (; h !== null; ) {
              if (c = kn(h), c === null)
                return;
              if (g = c.tag, g === 5 || g === 6) {
                r = a = c;
                continue e;
              }
              h = h.parentNode;
            }
          }
          r = r.return;
        }
    _a(function() {
      var b = a, M = Gi(n), D = [];
      e: {
        var L = xu.get(e);
        if (L !== void 0) {
          var Q = ul, Y = e;
          switch (e) {
            case "keypress":
              if (Ro(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              Q = jp;
              break;
            case "focusin":
              Y = "focus", Q = fl;
              break;
            case "focusout":
              Y = "blur", Q = fl;
              break;
            case "beforeblur":
            case "afterblur":
              Q = fl;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Xa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Cp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Ip;
              break;
            case gu:
            case vu:
            case yu:
              Q = Rp;
              break;
            case wu:
              Q = Wp;
              break;
            case "scroll":
              Q = Sp;
              break;
            case "wheel":
              Q = $p;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = _p;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Ja;
          }
          var X = (t & 4) !== 0, ze = !X && e === "scroll", S = X ? L !== null ? L + "Capture" : null : L;
          X = [];
          for (var w = b, P; w !== null; ) {
            P = w;
            var I = P.stateNode;
            if (P.tag === 5 && I !== null && (P = I, S !== null && (I = kr(w, S), I != null && X.push(Ur(w, I, P)))), ze)
              break;
            w = w.return;
          }
          0 < X.length && (L = new Q(L, Y, null, n, M), D.push({ event: L, listeners: X }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (L = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", L && n !== Yi && (Y = n.relatedTarget || n.fromElement) && (kn(Y) || Y[Tt]))
            break e;
          if ((Q || L) && (L = M.window === M ? M : (L = M.ownerDocument) ? L.defaultView || L.parentWindow : window, Q ? (Y = n.relatedTarget || n.toElement, Q = b, Y = Y ? kn(Y) : null, Y !== null && (ze = xn(Y), Y !== ze || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : (Q = null, Y = b), Q !== Y)) {
            if (X = Xa, I = "onMouseLeave", S = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (X = Ja, I = "onPointerLeave", S = "onPointerEnter", w = "pointer"), ze = Q == null ? L : Qn(Q), P = Y == null ? L : Qn(Y), L = new X(I, w + "leave", Q, n, M), L.target = ze, L.relatedTarget = P, I = null, kn(M) === b && (X = new X(S, w + "enter", Y, n, M), X.target = P, X.relatedTarget = ze, I = X), ze = I, Q && Y)
              t: {
                for (X = Q, S = Y, w = 0, P = X; P; P = Vn(P))
                  w++;
                for (P = 0, I = S; I; I = Vn(I))
                  P++;
                for (; 0 < w - P; )
                  X = Vn(X), w--;
                for (; 0 < P - w; )
                  S = Vn(S), P--;
                for (; w--; ) {
                  if (X === S || S !== null && X === S.alternate)
                    break t;
                  X = Vn(X), S = Vn(S);
                }
                X = null;
              }
            else
              X = null;
            Q !== null && Pu(D, L, Q, X, !1), Y !== null && ze !== null && Pu(D, ze, Y, X, !0);
          }
        }
        e: {
          if (L = b ? Qn(b) : window, Q = L.nodeName && L.nodeName.toLowerCase(), Q === "select" || Q === "input" && L.type === "file")
            var Z = Xp;
          else if (ou(L))
            if (lu)
              Z = em;
            else {
              Z = Jp;
              var ee = Zp;
            }
          else
            (Q = L.nodeName) && Q.toLowerCase() === "input" && (L.type === "checkbox" || L.type === "radio") && (Z = qp);
          if (Z && (Z = Z(e, b))) {
            iu(D, Z, n, M);
            break e;
          }
          ee && ee(e, L, b), e === "focusout" && (ee = L._wrapperState) && ee.controlled && L.type === "number" && $i(L, "number", L.value);
        }
        switch (ee = b ? Qn(b) : window, e) {
          case "focusin":
            (ou(ee) || ee.contentEditable === "true") && (Bn = ee, yl = b, Dr = null);
            break;
          case "focusout":
            Dr = yl = Bn = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wl = !1, mu(D, n, M);
            break;
          case "selectionchange":
            if (rm)
              break;
          case "keydown":
          case "keyup":
            mu(D, n, M);
        }
        var te;
        if (ml)
          e: {
            switch (e) {
              case "compositionstart":
                var re = "onCompositionStart";
                break e;
              case "compositionend":
                re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                re = "onCompositionUpdate";
                break e;
            }
            re = void 0;
          }
        else
          Wn ? nu(e, n) && (re = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (re = "onCompositionStart");
        re && (qa && n.locale !== "ko" && (Wn || re !== "onCompositionStart" ? re === "onCompositionEnd" && Wn && (te = Ya()) : (Yt = M, al = "value" in Yt ? Yt.value : Yt.textContent, Wn = !0)), ee = Lo(b, re), 0 < ee.length && (re = new Za(re, e, null, n, M), D.push({ event: re, listeners: ee }), te ? re.data = te : (te = ru(n), te !== null && (re.data = te)))), (te = Hp ? Qp(e, n) : Kp(e, n)) && (b = Lo(b, "onBeforeInput"), 0 < b.length && (M = new Za("onBeforeInput", "beforeinput", null, n, M), D.push({ event: M, listeners: b }), M.data = te));
      }
      Eu(D, t);
    });
  }
  function Ur(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Lo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, a = i.stateNode;
      i.tag === 5 && a !== null && (i = a, a = kr(e, n), a != null && r.unshift(Ur(e, a, i)), a = kr(e, t), a != null && r.push(Ur(e, a, i))), e = e.return;
    }
    return r;
  }
  function Vn(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Pu(e, t, n, r, i) {
    for (var a = t._reactName, c = []; n !== null && n !== r; ) {
      var h = n, g = h.alternate, b = h.stateNode;
      if (g !== null && g === r)
        break;
      h.tag === 5 && b !== null && (h = b, i ? (g = kr(n, a), g != null && c.unshift(Ur(n, g, h))) : i || (g = kr(n, a), g != null && c.push(Ur(n, g, h)))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var sm = /\r\n?/g, am = /\u0000|\uFFFD/g;
  function Nu(e) {
    return (typeof e == "string" ? e : "" + e).replace(sm, `
`).replace(am, "");
  }
  function Mo(e, t, n) {
    if (t = Nu(t), Nu(e) !== t && n)
      throw Error(s(425));
  }
  function jo() {
  }
  var Pl = null, Nl = null;
  function Rl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var bl = typeof setTimeout == "function" ? setTimeout : void 0, um = typeof clearTimeout == "function" ? clearTimeout : void 0, Ru = typeof Promise == "function" ? Promise : void 0, cm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ru < "u" ? function(e) {
    return Ru.resolve(null).then(e).catch(dm);
  } : bl;
  function dm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function _l(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
          if (r === 0) {
            e.removeChild(i), Or(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Or(t);
  }
  function Xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function bu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Hn = Math.random().toString(36).slice(2), Et = "__reactFiber$" + Hn, Wr = "__reactProps$" + Hn, Tt = "__reactContainer$" + Hn, Ol = "__reactEvents$" + Hn, fm = "__reactListeners$" + Hn, pm = "__reactHandles$" + Hn;
  function kn(e) {
    var t = e[Et];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Tt] || n[Et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = bu(e); e !== null; ) {
            if (n = e[Et])
              return n;
            e = bu(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Br(e) {
    return e = e[Et] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Qn(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(s(33));
  }
  function Do(e) {
    return e[Wr] || null;
  }
  var Al = [], Kn = -1;
  function Zt(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Kn || (e.current = Al[Kn], Al[Kn] = null, Kn--);
  }
  function Ce(e, t) {
    Kn++, Al[Kn] = e.current, e.current = t;
  }
  var Jt = {}, Be = Zt(Jt), Ge = Zt(!1), Sn = Jt;
  function Yn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, a;
    for (a in n)
      i[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Fo() {
    Ne(Ge), Ne(Be);
  }
  function _u(e, t, n) {
    if (Be.current !== Jt)
      throw Error(s(168));
    Ce(Be, t), Ce(Ge, n);
  }
  function Ou(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var i in r)
      if (!(i in t))
        throw Error(s(108, ge(e) || "Unknown", i));
    return H({}, n, r);
  }
  function Io(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, Sn = Be.current, Ce(Be, e), Ce(Ge, Ge.current), !0;
  }
  function Au(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(s(169));
    n ? (e = Ou(e, t, Sn), r.__reactInternalMemoizedMergedChildContext = e, Ne(Ge), Ne(Be), Ce(Be, e)) : Ne(Ge), Ce(Ge, n);
  }
  var zt = null, Uo = !1, Tl = !1;
  function Tu(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  function mm(e) {
    Uo = !0, Tu(e);
  }
  function qt() {
    if (!Tl && zt !== null) {
      Tl = !0;
      var e = 0, t = ke;
      try {
        var n = zt;
        for (ke = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        zt = null, Uo = !1;
      } catch (i) {
        throw zt !== null && (zt = zt.slice(e + 1)), La(el, qt), i;
      } finally {
        ke = t, Tl = !1;
      }
    }
    return null;
  }
  var Gn = [], Xn = 0, Wo = null, Bo = 0, st = [], at = 0, En = null, Lt = 1, Mt = "";
  function Cn(e, t) {
    Gn[Xn++] = Bo, Gn[Xn++] = Wo, Wo = e, Bo = t;
  }
  function zu(e, t, n) {
    st[at++] = Lt, st[at++] = Mt, st[at++] = En, En = e;
    var r = Lt;
    e = Mt;
    var i = 32 - pt(r) - 1;
    r &= ~(1 << i), n += 1;
    var a = 32 - pt(t) + i;
    if (30 < a) {
      var c = i - i % 5;
      a = (r & (1 << c) - 1).toString(32), r >>= c, i -= c, Lt = 1 << 32 - pt(t) + i | n << i | r, Mt = a + e;
    } else
      Lt = 1 << a | n << i | r, Mt = e;
  }
  function zl(e) {
    e.return !== null && (Cn(e, 1), zu(e, 1, 0));
  }
  function Ll(e) {
    for (; e === Wo; )
      Wo = Gn[--Xn], Gn[Xn] = null, Bo = Gn[--Xn], Gn[Xn] = null;
    for (; e === En; )
      En = st[--at], st[at] = null, Mt = st[--at], st[at] = null, Lt = st[--at], st[at] = null;
  }
  var nt = null, rt = null, be = !1, ht = null;
  function Lu(e, t) {
    var n = ft(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Mu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = Xt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Lt, overflow: Mt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ml(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jl(e) {
    if (be) {
      var t = rt;
      if (t) {
        var n = t;
        if (!Mu(e, t)) {
          if (Ml(e))
            throw Error(s(418));
          t = Xt(n.nextSibling);
          var r = nt;
          t && Mu(e, t) ? Lu(r, n) : (e.flags = e.flags & -4097 | 2, be = !1, nt = e);
        }
      } else {
        if (Ml(e))
          throw Error(s(418));
        e.flags = e.flags & -4097 | 2, be = !1, nt = e;
      }
    }
  }
  function ju(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    nt = e;
  }
  function $o(e) {
    if (e !== nt)
      return !1;
    if (!be)
      return ju(e), be = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps)), t && (t = rt)) {
      if (Ml(e))
        throw Du(), Error(s(418));
      for (; t; )
        Lu(e, t), t = Xt(t.nextSibling);
    }
    if (ju(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else
      rt = nt ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Du() {
    for (var e = rt; e; )
      e = Xt(e.nextSibling);
  }
  function Zn() {
    rt = nt = null, be = !1;
  }
  function Dl(e) {
    ht === null ? ht = [e] : ht.push(e);
  }
  var hm = F.ReactCurrentBatchConfig;
  function $r(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(s(147, e));
        var i = r, a = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(c) {
          var h = i.refs;
          c === null ? delete h[a] : h[a] = c;
        }, t._stringRef = a, t);
      }
      if (typeof e != "string")
        throw Error(s(284));
      if (!n._owner)
        throw Error(s(290, e));
    }
    return e;
  }
  function Vo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Fu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Iu(e) {
    function t(S, w) {
      if (e) {
        var P = S.deletions;
        P === null ? (S.deletions = [w], S.flags |= 16) : P.push(w);
      }
    }
    function n(S, w) {
      if (!e)
        return null;
      for (; w !== null; )
        t(S, w), w = w.sibling;
      return null;
    }
    function r(S, w) {
      for (S = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? S.set(w.key, w) : S.set(w.index, w), w = w.sibling;
      return S;
    }
    function i(S, w) {
      return S = an(S, w), S.index = 0, S.sibling = null, S;
    }
    function a(S, w, P) {
      return S.index = P, e ? (P = S.alternate, P !== null ? (P = P.index, P < w ? (S.flags |= 2, w) : P) : (S.flags |= 2, w)) : (S.flags |= 1048576, w);
    }
    function c(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function h(S, w, P, I) {
      return w === null || w.tag !== 6 ? (w = bs(P, S.mode, I), w.return = S, w) : (w = i(w, P), w.return = S, w);
    }
    function g(S, w, P, I) {
      var Z = P.type;
      return Z === G ? M(S, w, P.props.children, I, P.key) : w !== null && (w.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === de && Fu(Z) === w.type) ? (I = i(w, P.props), I.ref = $r(S, w, P), I.return = S, I) : (I = mi(P.type, P.key, P.props, null, S.mode, I), I.ref = $r(S, w, P), I.return = S, I);
    }
    function b(S, w, P, I) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== P.containerInfo || w.stateNode.implementation !== P.implementation ? (w = _s(P, S.mode, I), w.return = S, w) : (w = i(w, P.children || []), w.return = S, w);
    }
    function M(S, w, P, I, Z) {
      return w === null || w.tag !== 7 ? (w = Tn(P, S.mode, I, Z), w.return = S, w) : (w = i(w, P), w.return = S, w);
    }
    function D(S, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return w = bs("" + w, S.mode, P), w.return = S, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case $:
            return P = mi(w.type, w.key, w.props, null, S.mode, P), P.ref = $r(S, null, w), P.return = S, P;
          case q:
            return w = _s(w, S.mode, P), w.return = S, w;
          case de:
            var I = w._init;
            return D(S, I(w._payload), P);
        }
        if (yr(w) || V(w))
          return w = Tn(w, S.mode, P, null), w.return = S, w;
        Vo(S, w);
      }
      return null;
    }
    function L(S, w, P, I) {
      var Z = w !== null ? w.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return Z !== null ? null : h(S, w, "" + P, I);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case $:
            return P.key === Z ? g(S, w, P, I) : null;
          case q:
            return P.key === Z ? b(S, w, P, I) : null;
          case de:
            return Z = P._init, L(
              S,
              w,
              Z(P._payload),
              I
            );
        }
        if (yr(P) || V(P))
          return Z !== null ? null : M(S, w, P, I, null);
        Vo(S, P);
      }
      return null;
    }
    function Q(S, w, P, I, Z) {
      if (typeof I == "string" && I !== "" || typeof I == "number")
        return S = S.get(P) || null, h(w, S, "" + I, Z);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case $:
            return S = S.get(I.key === null ? P : I.key) || null, g(w, S, I, Z);
          case q:
            return S = S.get(I.key === null ? P : I.key) || null, b(w, S, I, Z);
          case de:
            var ee = I._init;
            return Q(S, w, P, ee(I._payload), Z);
        }
        if (yr(I) || V(I))
          return S = S.get(P) || null, M(w, S, I, Z, null);
        Vo(w, I);
      }
      return null;
    }
    function Y(S, w, P, I) {
      for (var Z = null, ee = null, te = w, re = w = 0, Ie = null; te !== null && re < P.length; re++) {
        te.index > re ? (Ie = te, te = null) : Ie = te.sibling;
        var ye = L(S, te, P[re], I);
        if (ye === null) {
          te === null && (te = Ie);
          break;
        }
        e && te && ye.alternate === null && t(S, te), w = a(ye, w, re), ee === null ? Z = ye : ee.sibling = ye, ee = ye, te = Ie;
      }
      if (re === P.length)
        return n(S, te), be && Cn(S, re), Z;
      if (te === null) {
        for (; re < P.length; re++)
          te = D(S, P[re], I), te !== null && (w = a(te, w, re), ee === null ? Z = te : ee.sibling = te, ee = te);
        return be && Cn(S, re), Z;
      }
      for (te = r(S, te); re < P.length; re++)
        Ie = Q(te, S, re, P[re], I), Ie !== null && (e && Ie.alternate !== null && te.delete(Ie.key === null ? re : Ie.key), w = a(Ie, w, re), ee === null ? Z = Ie : ee.sibling = Ie, ee = Ie);
      return e && te.forEach(function(un) {
        return t(S, un);
      }), be && Cn(S, re), Z;
    }
    function X(S, w, P, I) {
      var Z = V(P);
      if (typeof Z != "function")
        throw Error(s(150));
      if (P = Z.call(P), P == null)
        throw Error(s(151));
      for (var ee = Z = null, te = w, re = w = 0, Ie = null, ye = P.next(); te !== null && !ye.done; re++, ye = P.next()) {
        te.index > re ? (Ie = te, te = null) : Ie = te.sibling;
        var un = L(S, te, ye.value, I);
        if (un === null) {
          te === null && (te = Ie);
          break;
        }
        e && te && un.alternate === null && t(S, te), w = a(un, w, re), ee === null ? Z = un : ee.sibling = un, ee = un, te = Ie;
      }
      if (ye.done)
        return n(
          S,
          te
        ), be && Cn(S, re), Z;
      if (te === null) {
        for (; !ye.done; re++, ye = P.next())
          ye = D(S, ye.value, I), ye !== null && (w = a(ye, w, re), ee === null ? Z = ye : ee.sibling = ye, ee = ye);
        return be && Cn(S, re), Z;
      }
      for (te = r(S, te); !ye.done; re++, ye = P.next())
        ye = Q(te, S, re, ye.value, I), ye !== null && (e && ye.alternate !== null && te.delete(ye.key === null ? re : ye.key), w = a(ye, w, re), ee === null ? Z = ye : ee.sibling = ye, ee = ye);
      return e && te.forEach(function(Ym) {
        return t(S, Ym);
      }), be && Cn(S, re), Z;
    }
    function ze(S, w, P, I) {
      if (typeof P == "object" && P !== null && P.type === G && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case $:
            e: {
              for (var Z = P.key, ee = w; ee !== null; ) {
                if (ee.key === Z) {
                  if (Z = P.type, Z === G) {
                    if (ee.tag === 7) {
                      n(S, ee.sibling), w = i(ee, P.props.children), w.return = S, S = w;
                      break e;
                    }
                  } else if (ee.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === de && Fu(Z) === ee.type) {
                    n(S, ee.sibling), w = i(ee, P.props), w.ref = $r(S, ee, P), w.return = S, S = w;
                    break e;
                  }
                  n(S, ee);
                  break;
                } else
                  t(S, ee);
                ee = ee.sibling;
              }
              P.type === G ? (w = Tn(P.props.children, S.mode, I, P.key), w.return = S, S = w) : (I = mi(P.type, P.key, P.props, null, S.mode, I), I.ref = $r(S, w, P), I.return = S, S = I);
            }
            return c(S);
          case q:
            e: {
              for (ee = P.key; w !== null; ) {
                if (w.key === ee)
                  if (w.tag === 4 && w.stateNode.containerInfo === P.containerInfo && w.stateNode.implementation === P.implementation) {
                    n(S, w.sibling), w = i(w, P.children || []), w.return = S, S = w;
                    break e;
                  } else {
                    n(S, w);
                    break;
                  }
                else
                  t(S, w);
                w = w.sibling;
              }
              w = _s(P, S.mode, I), w.return = S, S = w;
            }
            return c(S);
          case de:
            return ee = P._init, ze(S, w, ee(P._payload), I);
        }
        if (yr(P))
          return Y(S, w, P, I);
        if (V(P))
          return X(S, w, P, I);
        Vo(S, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, w !== null && w.tag === 6 ? (n(S, w.sibling), w = i(w, P), w.return = S, S = w) : (n(S, w), w = bs(P, S.mode, I), w.return = S, S = w), c(S)) : n(S, w);
    }
    return ze;
  }
  var Jn = Iu(!0), Uu = Iu(!1), Ho = Zt(null), Qo = null, qn = null, Fl = null;
  function Il() {
    Fl = qn = Qo = null;
  }
  function Ul(e) {
    var t = Ho.current;
    Ne(Ho), e._currentValue = t;
  }
  function Wl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function er(e, t) {
    Qo = e, Fl = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
  }
  function ut(e) {
    var t = e._currentValue;
    if (Fl !== e)
      if (e = { context: e, memoizedValue: t, next: null }, qn === null) {
        if (Qo === null)
          throw Error(s(308));
        qn = e, Qo.dependencies = { lanes: 0, firstContext: e };
      } else
        qn = qn.next = e;
    return t;
  }
  var Pn = null;
  function Bl(e) {
    Pn === null ? Pn = [e] : Pn.push(e);
  }
  function Wu(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Bl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jt(e, r);
  }
  function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var en = !1;
  function $l(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Bu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Dt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, he & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Bl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jt(e, n);
  }
  function Ko(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  function $u(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, a = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          a === null ? i = a = c : a = a.next = c, n = n.next;
        } while (n !== null);
        a === null ? i = a = t : a = a.next = t;
      } else
        i = a = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Yo(e, t, n, r) {
    var i = e.updateQueue;
    en = !1;
    var a = i.firstBaseUpdate, c = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var g = h, b = g.next;
      g.next = null, c === null ? a = b : c.next = b, c = g;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, h = M.lastBaseUpdate, h !== c && (h === null ? M.firstBaseUpdate = b : h.next = b, M.lastBaseUpdate = g));
    }
    if (a !== null) {
      var D = i.baseState;
      c = 0, M = b = g = null, h = a;
      do {
        var L = h.lane, Q = h.eventTime;
        if ((r & L) === L) {
          M !== null && (M = M.next = {
            eventTime: Q,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          e: {
            var Y = e, X = h;
            switch (L = t, Q = n, X.tag) {
              case 1:
                if (Y = X.payload, typeof Y == "function") {
                  D = Y.call(Q, D, L);
                  break e;
                }
                D = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = X.payload, L = typeof Y == "function" ? Y.call(Q, D, L) : Y, L == null)
                  break e;
                D = H({}, D, L);
                break e;
              case 2:
                en = !0;
            }
          }
          h.callback !== null && h.lane !== 0 && (e.flags |= 64, L = i.effects, L === null ? i.effects = [h] : L.push(h));
        } else
          Q = { eventTime: Q, lane: L, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, M === null ? (b = M = Q, g = D) : M = M.next = Q, c |= L;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          L = h, h = L.next, L.next = null, i.lastBaseUpdate = L, i.shared.pending = null;
        }
      } while (1);
      if (M === null && (g = D), i.baseState = g, i.firstBaseUpdate = b, i.lastBaseUpdate = M, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          c |= i.lane, i = i.next;
        while (i !== t);
      } else
        a === null && (i.shared.lanes = 0);
      bn |= c, e.lanes = c, e.memoizedState = D;
    }
  }
  function Vu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
          if (r.callback = null, r = n, typeof i != "function")
            throw Error(s(191, i));
          i.call(r);
        }
      }
  }
  var Vr = {}, Ct = Zt(Vr), Hr = Zt(Vr), Qr = Zt(Vr);
  function Nn(e) {
    if (e === Vr)
      throw Error(s(174));
    return e;
  }
  function Vl(e, t) {
    switch (Ce(Qr, t), Ce(Hr, e), Ce(Ct, Vr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Hi(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hi(t, e);
    }
    Ne(Ct), Ce(Ct, t);
  }
  function tr() {
    Ne(Ct), Ne(Hr), Ne(Qr);
  }
  function Hu(e) {
    Nn(Qr.current);
    var t = Nn(Ct.current), n = Hi(t, e.type);
    t !== n && (Ce(Hr, e), Ce(Ct, n));
  }
  function Hl(e) {
    Hr.current === e && (Ne(Ct), Ne(Hr));
  }
  var _e = Zt(0);
  function Go(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ql = [];
  function Kl() {
    for (var e = 0; e < Ql.length; e++)
      Ql[e]._workInProgressVersionPrimary = null;
    Ql.length = 0;
  }
  var Xo = F.ReactCurrentDispatcher, Yl = F.ReactCurrentBatchConfig, Rn = 0, Oe = null, Me = null, De = null, Zo = !1, Kr = !1, Yr = 0, gm = 0;
  function $e() {
    throw Error(s(321));
  }
  function Gl(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!mt(e[n], t[n]))
        return !1;
    return !0;
  }
  function Xl(e, t, n, r, i, a) {
    if (Rn = a, Oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xo.current = e === null || e.memoizedState === null ? xm : km, e = n(r, i), Kr) {
      a = 0;
      do {
        if (Kr = !1, Yr = 0, 25 <= a)
          throw Error(s(301));
        a += 1, De = Me = null, t.updateQueue = null, Xo.current = Sm, e = n(r, i);
      } while (Kr);
    }
    if (Xo.current = ei, t = Me !== null && Me.next !== null, Rn = 0, De = Me = Oe = null, Zo = !1, t)
      throw Error(s(300));
    return e;
  }
  function Zl() {
    var e = Yr !== 0;
    return Yr = 0, e;
  }
  function Pt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return De === null ? Oe.memoizedState = De = e : De = De.next = e, De;
  }
  function ct() {
    if (Me === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = Me.next;
    var t = De === null ? Oe.memoizedState : De.next;
    if (t !== null)
      De = t, Me = e;
    else {
      if (e === null)
        throw Error(s(310));
      Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, De === null ? Oe.memoizedState = De = e : De = De.next = e;
    }
    return De;
  }
  function Gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Jl(e) {
    var t = ct(), n = t.queue;
    if (n === null)
      throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Me, i = r.baseQueue, a = n.pending;
    if (a !== null) {
      if (i !== null) {
        var c = i.next;
        i.next = a.next, a.next = c;
      }
      r.baseQueue = i = a, n.pending = null;
    }
    if (i !== null) {
      a = i.next, r = r.baseState;
      var h = c = null, g = null, b = a;
      do {
        var M = b.lane;
        if ((Rn & M) === M)
          g !== null && (g = g.next = { lane: 0, action: b.action, hasEagerState: b.hasEagerState, eagerState: b.eagerState, next: null }), r = b.hasEagerState ? b.eagerState : e(r, b.action);
        else {
          var D = {
            lane: M,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          };
          g === null ? (h = g = D, c = r) : g = g.next = D, Oe.lanes |= M, bn |= M;
        }
        b = b.next;
      } while (b !== null && b !== a);
      g === null ? c = r : g.next = h, mt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = c, t.baseQueue = g, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        a = i.lane, Oe.lanes |= a, bn |= a, i = i.next;
      while (i !== e);
    } else
      i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ql(e) {
    var t = ct(), n = t.queue;
    if (n === null)
      throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, a = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var c = i = i.next;
      do
        a = e(a, c.action), c = c.next;
      while (c !== i);
      mt(a, t.memoizedState) || (Ze = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
    }
    return [a, r];
  }
  function Qu() {
  }
  function Ku(e, t) {
    var n = Oe, r = ct(), i = t(), a = !mt(r.memoizedState, i);
    if (a && (r.memoizedState = i, Ze = !0), r = r.queue, es(Xu.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || De !== null && De.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xr(9, Gu.bind(null, n, r, i, t), void 0, null), Fe === null)
        throw Error(s(349));
      Rn & 30 || Yu(n, t, i);
    }
    return i;
  }
  function Yu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Gu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Zu(t) && Ju(e);
  }
  function Xu(e, t, n) {
    return n(function() {
      Zu(t) && Ju(e);
    });
  }
  function Zu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Ju(e) {
    var t = jt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function qu(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = wm.bind(null, Oe, e), [t.memoizedState, e];
  }
  function Xr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ec() {
    return ct().memoizedState;
  }
  function Jo(e, t, n, r) {
    var i = Pt();
    Oe.flags |= e, i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function qo(e, t, n, r) {
    var i = ct();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (Me !== null) {
      var c = Me.memoizedState;
      if (a = c.destroy, r !== null && Gl(r, c.deps)) {
        i.memoizedState = Xr(t, n, a, r);
        return;
      }
    }
    Oe.flags |= e, i.memoizedState = Xr(1 | t, n, a, r);
  }
  function tc(e, t) {
    return Jo(8390656, 8, e, t);
  }
  function es(e, t) {
    return qo(2048, 8, e, t);
  }
  function nc(e, t) {
    return qo(4, 2, e, t);
  }
  function rc(e, t) {
    return qo(4, 4, e, t);
  }
  function oc(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function ic(e, t, n) {
    return n = n != null ? n.concat([e]) : null, qo(4, 4, oc.bind(null, t, e), n);
  }
  function ts() {
  }
  function lc(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function sc(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ac(e, t, n) {
    return Rn & 21 ? (mt(n, t) || (n = Fa(), Oe.lanes |= n, bn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
  }
  function vm(e, t) {
    var n = ke;
    ke = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Yl.transition;
    Yl.transition = {};
    try {
      e(!1), t();
    } finally {
      ke = n, Yl.transition = r;
    }
  }
  function uc() {
    return ct().memoizedState;
  }
  function ym(e, t, n) {
    var r = ln(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cc(e))
      dc(t, n);
    else if (n = Wu(e, t, n, r), n !== null) {
      var i = Ye();
      wt(n, e, r, i), fc(n, t, r);
    }
  }
  function wm(e, t, n) {
    var r = ln(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (cc(e))
      dc(t, i);
    else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null))
        try {
          var c = t.lastRenderedState, h = a(c, n);
          if (i.hasEagerState = !0, i.eagerState = h, mt(h, c)) {
            var g = t.interleaved;
            g === null ? (i.next = i, Bl(t)) : (i.next = g.next, g.next = i), t.interleaved = i;
            return;
          }
        } catch {
        } finally {
        }
      n = Wu(e, t, i, r), n !== null && (i = Ye(), wt(n, e, r, i), fc(n, t, r));
    }
  }
  function cc(e) {
    var t = e.alternate;
    return e === Oe || t !== null && t === Oe;
  }
  function dc(e, t) {
    Kr = Zo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function fc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  var ei = { readContext: ut, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, xm = { readContext: ut, useCallback: function(e, t) {
    return Pt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ut, useEffect: tc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Jo(
      4194308,
      4,
      oc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Jo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Jo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Pt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Pt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ym.bind(null, Oe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Pt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: qu, useDebugValue: ts, useDeferredValue: function(e) {
    return Pt().memoizedState = e;
  }, useTransition: function() {
    var e = qu(!1), t = e[0];
    return e = vm.bind(null, e[1]), Pt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Oe, i = Pt();
    if (be) {
      if (n === void 0)
        throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Fe === null)
        throw Error(s(349));
      Rn & 30 || Yu(r, t, n);
    }
    i.memoizedState = n;
    var a = { value: n, getSnapshot: t };
    return i.queue = a, tc(Xu.bind(
      null,
      r,
      a,
      e
    ), [e]), r.flags |= 2048, Xr(9, Gu.bind(null, r, a, n, t), void 0, null), n;
  }, useId: function() {
    var e = Pt(), t = Fe.identifierPrefix;
    if (be) {
      var n = Mt, r = Lt;
      n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = gm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, km = {
    readContext: ut,
    useCallback: lc,
    useContext: ut,
    useEffect: es,
    useImperativeHandle: ic,
    useInsertionEffect: nc,
    useLayoutEffect: rc,
    useMemo: sc,
    useReducer: Jl,
    useRef: ec,
    useState: function() {
      return Jl(Gr);
    },
    useDebugValue: ts,
    useDeferredValue: function(e) {
      var t = ct();
      return ac(t, Me.memoizedState, e);
    },
    useTransition: function() {
      var e = Jl(Gr)[0], t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Qu,
    useSyncExternalStore: Ku,
    useId: uc,
    unstable_isNewReconciler: !1
  }, Sm = { readContext: ut, useCallback: lc, useContext: ut, useEffect: es, useImperativeHandle: ic, useInsertionEffect: nc, useLayoutEffect: rc, useMemo: sc, useReducer: ql, useRef: ec, useState: function() {
    return ql(Gr);
  }, useDebugValue: ts, useDeferredValue: function(e) {
    var t = ct();
    return Me === null ? t.memoizedState = e : ac(t, Me.memoizedState, e);
  }, useTransition: function() {
    var e = ql(Gr)[0], t = ct().memoizedState;
    return [e, t];
  }, useMutableSource: Qu, useSyncExternalStore: Ku, useId: uc, unstable_isNewReconciler: !1 };
  function gt(e, t) {
    if (e && e.defaultProps) {
      t = H({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ns(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ti = { isMounted: function(e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), i = ln(e), a = Dt(r, i);
    a.payload = t, n != null && (a.callback = n), t = tn(e, a, i), t !== null && (wt(t, e, i, r), Ko(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), i = ln(e), a = Dt(r, i);
    a.tag = 1, a.payload = t, n != null && (a.callback = n), t = tn(e, a, i), t !== null && (wt(t, e, i, r), Ko(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ye(), r = ln(e), i = Dt(n, r);
    i.tag = 2, t != null && (i.callback = t), t = tn(e, i, r), t !== null && (wt(t, e, r, n), Ko(t, e, r));
  } };
  function pc(e, t, n, r, i, a, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, c) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(i, a) : !0;
  }
  function mc(e, t, n) {
    var r = !1, i = Jt, a = t.contextType;
    return typeof a == "object" && a !== null ? a = ut(a) : (i = Xe(t) ? Sn : Be.current, r = t.contextTypes, a = (r = r != null) ? Yn(e, i) : Jt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ti, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t;
  }
  function hc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ti.enqueueReplaceState(t, t.state, null);
  }
  function rs(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, $l(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? i.context = ut(a) : (a = Xe(t) ? Sn : Be.current, i.context = Yn(e, a)), i.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (ns(e, t, a, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ti.enqueueReplaceState(i, i.state, null), Yo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function nr(e, t) {
    try {
      var n = "", r = t;
      do
        n += fe(r), r = r.return;
      while (r);
      var i = n;
    } catch (a) {
      i = `
Error generating stack: ` + a.message + `
` + a.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function os(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function is(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Em = typeof WeakMap == "function" ? WeakMap : Map;
  function gc(e, t, n) {
    n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ai || (ai = !0, xs = r), is(e, t);
    }, n;
  }
  function vc(e, t, n) {
    n = Dt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        is(e, t);
      };
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
      is(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
    }), n;
  }
  function yc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Em();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else
      i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Dm.bind(null, e, t, n), t.then(e, e));
  }
  function wc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function xc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
  }
  var Cm = F.ReactCurrentOwner, Ze = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? Uu(t, null, n, r) : Jn(t, e.child, n, r);
  }
  function kc(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    return er(t, i), r = Xl(e, t, n, r, a, i), n = Zl(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ft(e, t, i)) : (be && n && zl(t), t.flags |= 1, Ke(e, t, r, i), t.child);
  }
  function Sc(e, t, n, r, i) {
    if (e === null) {
      var a = n.type;
      return typeof a == "function" && !Rs(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, Ec(e, t, a, r, i)) : (e = mi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (a = e.child, !(e.lanes & i)) {
      var c = a.memoizedProps;
      if (n = n.compare, n = n !== null ? n : jr, n(c, r) && e.ref === t.ref)
        return Ft(e, t, i);
    }
    return t.flags |= 1, e = an(a, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ec(e, t, n, r, i) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (jr(a, r) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = r = a, (e.lanes & i) !== 0)
          e.flags & 131072 && (Ze = !0);
        else
          return t.lanes = e.lanes, Ft(e, t, i);
    }
    return ls(e, t, n, r, i);
  }
  function Cc(e, t, n) {
    var r = t.pendingProps, i = r.children, a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(or, ot), ot |= n;
      else {
        if (!(n & 1073741824))
          return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(or, ot), ot |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = a !== null ? a.baseLanes : n, Ce(or, ot), ot |= r;
      }
    else
      a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Ce(or, ot), ot |= r;
    return Ke(e, t, i, n), t.child;
  }
  function Pc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ls(e, t, n, r, i) {
    var a = Xe(n) ? Sn : Be.current;
    return a = Yn(t, a), er(t, i), n = Xl(e, t, n, r, a, i), r = Zl(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Ft(e, t, i)) : (be && r && zl(t), t.flags |= 1, Ke(e, t, n, i), t.child);
  }
  function Nc(e, t, n, r, i) {
    if (Xe(n)) {
      var a = !0;
      Io(t);
    } else
      a = !1;
    if (er(t, i), t.stateNode === null)
      ri(e, t), mc(t, n, r), rs(t, n, r, i), r = !0;
    else if (e === null) {
      var c = t.stateNode, h = t.memoizedProps;
      c.props = h;
      var g = c.context, b = n.contextType;
      typeof b == "object" && b !== null ? b = ut(b) : (b = Xe(n) ? Sn : Be.current, b = Yn(t, b));
      var M = n.getDerivedStateFromProps, D = typeof M == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      D || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== r || g !== b) && hc(t, c, r, b), en = !1;
      var L = t.memoizedState;
      c.state = L, Yo(t, r, c, i), g = t.memoizedState, h !== r || L !== g || Ge.current || en ? (typeof M == "function" && (ns(t, n, M, r), g = t.memoizedState), (h = en || pc(t, n, h, r, L, g, b)) ? (D || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = g), c.props = r, c.state = g, c.context = b, r = h) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, Bu(e, t), h = t.memoizedProps, b = t.type === t.elementType ? h : gt(t.type, h), c.props = b, D = t.pendingProps, L = c.context, g = n.contextType, typeof g == "object" && g !== null ? g = ut(g) : (g = Xe(n) ? Sn : Be.current, g = Yn(t, g));
      var Q = n.getDerivedStateFromProps;
      (M = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== D || L !== g) && hc(t, c, r, g), en = !1, L = t.memoizedState, c.state = L, Yo(t, r, c, i);
      var Y = t.memoizedState;
      h !== D || L !== Y || Ge.current || en ? (typeof Q == "function" && (ns(t, n, Q, r), Y = t.memoizedState), (b = en || pc(t, n, b, r, L, Y, g) || !1) ? (M || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, Y, g), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, Y, g)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Y), c.props = r, c.state = Y, c.context = g, r = b) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && L === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ss(e, t, n, r, a, i);
  }
  function ss(e, t, n, r, i, a) {
    Pc(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c)
      return i && Au(t, n, !1), Ft(e, t, a);
    r = t.stateNode, Cm.current = t;
    var h = c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && c ? (t.child = Jn(t, e.child, null, a), t.child = Jn(t, null, h, a)) : Ke(e, t, h, a), t.memoizedState = r.state, i && Au(t, n, !0), t.child;
  }
  function Rc(e) {
    var t = e.stateNode;
    t.pendingContext ? _u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _u(e, t.context, !1), Vl(e, t.containerInfo);
  }
  function bc(e, t, n, r, i) {
    return Zn(), Dl(i), t.flags |= 256, Ke(e, t, n, r), t.child;
  }
  var as = { dehydrated: null, treeContext: null, retryLane: 0 };
  function us(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _c(e, t, n) {
    var r = t.pendingProps, i = _e.current, a = !1, c = (t.flags & 128) !== 0, h;
    if ((h = c) || (h = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), h ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ce(_e, i & 1), e === null)
      return jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, c = { mode: "hidden", children: c }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = c) : a = hi(c, r, 0, null), e = Tn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = us(n), t.memoizedState = as, e) : cs(t, c));
    if (i = e.memoizedState, i !== null && (h = i.dehydrated, h !== null))
      return Pm(e, t, c, r, h, i, n);
    if (a) {
      a = r.fallback, c = t.mode, i = e.child, h = i.sibling;
      var g = { mode: "hidden", children: r.children };
      return !(c & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = g, t.deletions = null) : (r = an(i, g), r.subtreeFlags = i.subtreeFlags & 14680064), h !== null ? a = an(h, a) : (a = Tn(a, c, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, c = e.child.memoizedState, c = c === null ? us(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }, a.memoizedState = c, a.childLanes = e.childLanes & ~n, t.memoizedState = as, r;
    }
    return a = e.child, e = a.sibling, r = an(a, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function cs(e, t) {
    return t = hi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ni(e, t, n, r) {
    return r !== null && Dl(r), Jn(t, e.child, null, n), e = cs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Pm(e, t, n, r, i, a, c) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = os(Error(s(422))), ni(e, t, c, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, i = t.mode, r = hi({ mode: "visible", children: r.children }, i, 0, null), a = Tn(a, i, c, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Jn(t, e.child, null, c), t.child.memoizedState = us(c), t.memoizedState = as, a);
    if (!(t.mode & 1))
      return ni(e, t, c, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r)
        var h = r.dgst;
      return r = h, a = Error(s(419)), r = os(a, r, void 0), ni(e, t, c, r);
    }
    if (h = (c & e.childLanes) !== 0, Ze || h) {
      if (r = Fe, r !== null) {
        switch (c & -c) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | c) ? 0 : i, i !== 0 && i !== a.retryLane && (a.retryLane = i, jt(e, i), wt(r, e, i, -1));
      }
      return Ns(), r = os(Error(s(421))), ni(e, t, c, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fm.bind(null, e), i._reactRetry = t, null) : (e = a.treeContext, rt = Xt(i.nextSibling), nt = t, be = !0, ht = null, e !== null && (st[at++] = Lt, st[at++] = Mt, st[at++] = En, Lt = e.id, Mt = e.overflow, En = t), t = cs(t, r.children), t.flags |= 4096, t);
  }
  function Oc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wl(e.return, t, n);
  }
  function ds(e, t, n, r, i) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i);
  }
  function Ac(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, a = r.tail;
    if (Ke(e, t, r.children, n), r = _e.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Oc(e, n, t);
            else if (e.tag === 19)
              Oc(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (Ce(_e, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            e = n.alternate, e !== null && Go(e) === null && (i = n), n = n.sibling;
          n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ds(t, !1, i, n, a);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (e = i.alternate, e !== null && Go(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling, i.sibling = n, n = i, i = e;
          }
          ds(t, !0, n, null, a);
          break;
        case "together":
          ds(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ri(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ft(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), bn |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Nm(e, t, n) {
    switch (t.tag) {
      case 3:
        Rc(t), Zn();
        break;
      case 5:
        Hu(t);
        break;
      case 1:
        Xe(t.type) && Io(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ce(Ho, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ce(_e, _e.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _c(e, t, n) : (Ce(_e, _e.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
        Ce(_e, _e.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Ac(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ce(_e, _e.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Cc(e, t, n);
    }
    return Ft(e, t, n);
  }
  var Tc, fs, zc, Lc;
  Tc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, fs = function() {
  }, zc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Nn(Ct.current);
      var a = null;
      switch (n) {
        case "input":
          i = Wi(e, i), r = Wi(e, r), a = [];
          break;
        case "select":
          i = H({}, i, { value: void 0 }), r = H({}, r, { value: void 0 }), a = [];
          break;
        case "textarea":
          i = Vi(e, i), r = Vi(e, r), a = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jo);
      }
      Qi(n, r);
      var c;
      n = null;
      for (b in i)
        if (!r.hasOwnProperty(b) && i.hasOwnProperty(b) && i[b] != null)
          if (b === "style") {
            var h = i[b];
            for (c in h)
              h.hasOwnProperty(c) && (n || (n = {}), n[c] = "");
          } else
            b !== "dangerouslySetInnerHTML" && b !== "children" && b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (d.hasOwnProperty(b) ? a || (a = []) : (a = a || []).push(b, null));
      for (b in r) {
        var g = r[b];
        if (h = i?.[b], r.hasOwnProperty(b) && g !== h && (g != null || h != null))
          if (b === "style")
            if (h) {
              for (c in h)
                !h.hasOwnProperty(c) || g && g.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
              for (c in g)
                g.hasOwnProperty(c) && h[c] !== g[c] && (n || (n = {}), n[c] = g[c]);
            } else
              n || (a || (a = []), a.push(
                b,
                n
              )), n = g;
          else
            b === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, h = h ? h.__html : void 0, g != null && h !== g && (a = a || []).push(b, g)) : b === "children" ? typeof g != "string" && typeof g != "number" || (a = a || []).push(b, "" + g) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && (d.hasOwnProperty(b) ? (g != null && b === "onScroll" && Pe("scroll", e), a || h === g || (a = [])) : (a = a || []).push(b, g));
      }
      n && (a = a || []).push("style", n);
      var b = a;
      (t.updateQueue = b) && (t.flags |= 4);
    }
  }, Lc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Zr(e, t) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Rm(e, t, n) {
    var r = t.pendingProps;
    switch (Ll(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Xe(t.type) && Fo(), Ve(t), null;
      case 3:
        return r = t.stateNode, tr(), Ne(Ge), Ne(Be), Kl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($o(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ht !== null && (Es(ht), ht = null))), fs(e, t), Ve(t), null;
      case 5:
        Hl(t);
        var i = Nn(Qr.current);
        if (n = t.type, e !== null && t.stateNode != null)
          zc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ve(t), null;
          }
          if (e = Nn(Ct.current), $o(t)) {
            r = t.stateNode, n = t.type;
            var a = t.memoizedProps;
            switch (r[Et] = t, r[Wr] = a, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Pe("cancel", r), Pe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fr.length; i++)
                  Pe(Fr[i], r);
                break;
              case "source":
                Pe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Pe(
                  "error",
                  r
                ), Pe("load", r);
                break;
              case "details":
                Pe("toggle", r);
                break;
              case "input":
                ma(r, a), Pe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!a.multiple }, Pe("invalid", r);
                break;
              case "textarea":
                va(r, a), Pe("invalid", r);
            }
            Qi(n, a), i = null;
            for (var c in a)
              if (a.hasOwnProperty(c)) {
                var h = a[c];
                c === "children" ? typeof h == "string" ? r.textContent !== h && (a.suppressHydrationWarning !== !0 && Mo(r.textContent, h, e), i = ["children", h]) : typeof h == "number" && r.textContent !== "" + h && (a.suppressHydrationWarning !== !0 && Mo(
                  r.textContent,
                  h,
                  e
                ), i = ["children", "" + h]) : d.hasOwnProperty(c) && h != null && c === "onScroll" && Pe("scroll", r);
              }
            switch (n) {
              case "input":
                Mn(r), ga(r, a, !0);
                break;
              case "textarea":
                Mn(r), wa(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof a.onClick == "function" && (r.onclick = jo);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            c = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Et] = t, e[Wr] = r, Tc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (c = Ki(n, r), n) {
                case "dialog":
                  Pe("cancel", e), Pe("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pe("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Fr.length; i++)
                    Pe(Fr[i], e);
                  i = r;
                  break;
                case "source":
                  Pe("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Pe(
                    "error",
                    e
                  ), Pe("load", e), i = r;
                  break;
                case "details":
                  Pe("toggle", e), i = r;
                  break;
                case "input":
                  ma(e, r), i = Wi(e, r), Pe("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = H({}, r, { value: void 0 }), Pe("invalid", e);
                  break;
                case "textarea":
                  va(e, r), i = Vi(e, r), Pe("invalid", e);
                  break;
                default:
                  i = r;
              }
              Qi(n, i), h = i;
              for (a in h)
                if (h.hasOwnProperty(a)) {
                  var g = h[a];
                  a === "style" ? Ea(e, g) : a === "dangerouslySetInnerHTML" ? (g = g ? g.__html : void 0, g != null && ka(e, g)) : a === "children" ? typeof g == "string" ? (n !== "textarea" || g !== "") && wr(e, g) : typeof g == "number" && wr(e, "" + g) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (d.hasOwnProperty(a) ? g != null && a === "onScroll" && Pe("scroll", e) : g != null && B(e, a, g, c));
                }
              switch (n) {
                case "input":
                  Mn(e), ga(e, r, !1);
                  break;
                case "textarea":
                  Mn(e), wa(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ve(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, a = r.value, a != null ? jn(e, !!r.multiple, a, !1) : r.defaultValue != null && jn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = jo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null)
          Lc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(s(166));
          if (n = Nn(Qr.current), Nn(Ct.current), $o(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Et] = t, (a = r.nodeValue !== n) && (e = nt, e !== null))
              switch (e.tag) {
                case 3:
                  Mo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Mo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            a && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Et] = t, t.stateNode = r;
        }
        return Ve(t), null;
      case 13:
        if (Ne(_e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (be && rt !== null && t.mode & 1 && !(t.flags & 128))
            Du(), Zn(), t.flags |= 98560, a = !1;
          else if (a = $o(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!a)
                throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a)
                throw Error(s(317));
              a[Et] = t;
            } else
              Zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ve(t), a = !1;
          } else
            ht !== null && (Es(ht), ht = null), a = !0;
          if (!a)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || _e.current & 1 ? je === 0 && (je = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
      case 4:
        return tr(), fs(e, t), e === null && Ir(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return Ul(t.type._context), Ve(t), null;
      case 17:
        return Xe(t.type) && Fo(), Ve(t), null;
      case 19:
        if (Ne(_e), a = t.memoizedState, a === null)
          return Ve(t), null;
        if (r = (t.flags & 128) !== 0, c = a.rendering, c === null)
          if (r)
            Zr(a, !1);
          else {
            if (je !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (c = Go(e), c !== null) {
                  for (t.flags |= 128, Zr(a, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    a = n, e = r, a.flags &= 14680066, c = a.alternate, c === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = c.childLanes, a.lanes = c.lanes, a.child = c.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = c.memoizedProps, a.memoizedState = c.memoizedState, a.updateQueue = c.updateQueue, a.type = c.type, e = c.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return Ce(_e, _e.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Te() > ir && (t.flags |= 128, r = !0, Zr(a, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Go(c), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(a, !0), a.tail === null && a.tailMode === "hidden" && !c.alternate && !be)
                return Ve(t), null;
            } else
              2 * Te() - a.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(a, !1), t.lanes = 4194304);
          a.isBackwards ? (c.sibling = t.child, t.child = c) : (n = a.last, n !== null ? n.sibling = c : t.child = c, a.last = c);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Te(), t.sibling = null, n = _e.current, Ce(_e, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
      case 22:
      case 23:
        return Ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ot & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function bm(e, t) {
    switch (Ll(t), t.tag) {
      case 1:
        return Xe(t.type) && Fo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return tr(), Ne(Ge), Ne(Be), Kl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Hl(t), null;
      case 13:
        if (Ne(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Zn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ne(_e), null;
      case 4:
        return tr(), null;
      case 10:
        return Ul(t.type._context), null;
      case 22:
      case 23:
        return Ps(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var oi = !1, He = !1, _m = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function rr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ae(e, t, r);
        }
      else
        n.current = null;
  }
  function ps(e, t, n) {
    try {
      n();
    } catch (r) {
      Ae(e, t, r);
    }
  }
  var Mc = !1;
  function Om(e, t) {
    if (Pl = Co, e = pu(), vl(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset, a = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, a.nodeType;
            } catch {
              n = null;
              break e;
            }
            var c = 0, h = -1, g = -1, b = 0, M = 0, D = e, L = null;
            t:
              for (; ; ) {
                for (var Q; D !== n || i !== 0 && D.nodeType !== 3 || (h = c + i), D !== a || r !== 0 && D.nodeType !== 3 || (g = c + r), D.nodeType === 3 && (c += D.nodeValue.length), (Q = D.firstChild) !== null; )
                  L = D, D = Q;
                for (; ; ) {
                  if (D === e)
                    break t;
                  if (L === n && ++b === i && (h = c), L === a && ++M === r && (g = c), (Q = D.nextSibling) !== null)
                    break;
                  D = L, L = D.parentNode;
                }
                D = Q;
              }
            n = h === -1 || g === -1 ? null : { start: h, end: g };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Nl = { focusedElem: e, selectionRange: n }, Co = !1, K = t; K !== null; )
      if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, K = e;
      else
        for (; K !== null; ) {
          t = K;
          try {
            var Y = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Y !== null) {
                    var X = Y.memoizedProps, ze = Y.memoizedState, S = t.stateNode, w = S.getSnapshotBeforeUpdate(t.elementType === t.type ? X : gt(t.type, X), ze);
                    S.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var P = t.stateNode.containerInfo;
                  P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (I) {
            Ae(t, t.return, I);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, K = e;
            break;
          }
          K = t.return;
        }
    return Y = Mc, Mc = !1, Y;
  }
  function Jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var a = i.destroy;
          i.destroy = void 0, a !== void 0 && ps(t, n, a);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function ii(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ms(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function jc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, jc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Et], delete t[Wr], delete t[Ol], delete t[fm], delete t[pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Fc(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Dc(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function hs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = jo));
    else if (r !== 4 && (e = e.child, e !== null))
      for (hs(e, t, n), e = e.sibling; e !== null; )
        hs(e, t, n), e = e.sibling;
  }
  function gs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (gs(e, t, n), e = e.sibling; e !== null; )
        gs(e, t, n), e = e.sibling;
  }
  var Ue = null, vt = !1;
  function nn(e, t, n) {
    for (n = n.child; n !== null; )
      Ic(e, t, n), n = n.sibling;
  }
  function Ic(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(yo, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        He || rr(n, t);
      case 6:
        var r = Ue, i = vt;
        Ue = null, nn(e, t, n), Ue = r, vt = i, Ue !== null && (vt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null && (vt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? _l(e.parentNode, n) : e.nodeType === 1 && _l(e, n), Or(e)) : _l(Ue, n.stateNode));
        break;
      case 4:
        r = Ue, i = vt, Ue = n.stateNode.containerInfo, vt = !0, nn(e, t, n), Ue = r, vt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!He && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var a = i, c = a.destroy;
            a = a.tag, c !== void 0 && (a & 2 || a & 4) && ps(n, t, c), i = i.next;
          } while (i !== r);
        }
        nn(e, t, n);
        break;
      case 1:
        if (!He && (rr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (h) {
            Ae(n, t, h);
          }
        nn(e, t, n);
        break;
      case 21:
        nn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (He = (r = He) || n.memoizedState !== null, nn(e, t, n), He = r) : nn(e, t, n);
        break;
      default:
        nn(e, t, n);
    }
  }
  function Uc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new _m()), t.forEach(function(r) {
        var i = Im.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var a = e, c = t, h = c;
          e:
            for (; h !== null; ) {
              switch (h.tag) {
                case 5:
                  Ue = h.stateNode, vt = !1;
                  break e;
                case 3:
                  Ue = h.stateNode.containerInfo, vt = !0;
                  break e;
                case 4:
                  Ue = h.stateNode.containerInfo, vt = !0;
                  break e;
              }
              h = h.return;
            }
          if (Ue === null)
            throw Error(s(160));
          Ic(a, c, i), Ue = null, vt = !1;
          var g = i.alternate;
          g !== null && (g.return = null), i.return = null;
        } catch (b) {
          Ae(i, t, b);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Wc(t, e), t = t.sibling;
  }
  function Wc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (yt(t, e), Nt(e), r & 4) {
          try {
            Jr(3, e, e.return), ii(3, e);
          } catch (X) {
            Ae(e, e.return, X);
          }
          try {
            Jr(5, e, e.return);
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        break;
      case 1:
        yt(t, e), Nt(e), r & 512 && n !== null && rr(n, n.return);
        break;
      case 5:
        if (yt(t, e), Nt(e), r & 512 && n !== null && rr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            wr(i, "");
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var a = e.memoizedProps, c = n !== null ? n.memoizedProps : a, h = e.type, g = e.updateQueue;
          if (e.updateQueue = null, g !== null)
            try {
              h === "input" && a.type === "radio" && a.name != null && ha(i, a), Ki(h, c);
              var b = Ki(h, a);
              for (c = 0; c < g.length; c += 2) {
                var M = g[c], D = g[c + 1];
                M === "style" ? Ea(i, D) : M === "dangerouslySetInnerHTML" ? ka(i, D) : M === "children" ? wr(i, D) : B(i, M, D, b);
              }
              switch (h) {
                case "input":
                  Bi(i, a);
                  break;
                case "textarea":
                  ya(i, a);
                  break;
                case "select":
                  var L = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!a.multiple;
                  var Q = a.value;
                  Q != null ? jn(i, !!a.multiple, Q, !1) : L !== !!a.multiple && (a.defaultValue != null ? jn(
                    i,
                    !!a.multiple,
                    a.defaultValue,
                    !0
                  ) : jn(i, !!a.multiple, a.multiple ? [] : "", !1));
              }
              i[Wr] = a;
            } catch (X) {
              Ae(e, e.return, X);
            }
        }
        break;
      case 6:
        if (yt(t, e), Nt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.stateNode, a = e.memoizedProps;
          try {
            i.nodeValue = a;
          } catch (X) {
            Ae(e, e.return, X);
          }
        }
        break;
      case 3:
        if (yt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Or(t.containerInfo);
          } catch (X) {
            Ae(e, e.return, X);
          }
        break;
      case 4:
        yt(t, e), Nt(e);
        break;
      case 13:
        yt(t, e), Nt(e), i = e.child, i.flags & 8192 && (a = i.memoizedState !== null, i.stateNode.isHidden = a, !a || i.alternate !== null && i.alternate.memoizedState !== null || (ws = Te())), r & 4 && Uc(e);
        break;
      case 22:
        if (M = n !== null && n.memoizedState !== null, e.mode & 1 ? (He = (b = He) || M, yt(t, e), He = b) : yt(t, e), Nt(e), r & 8192) {
          if (b = e.memoizedState !== null, (e.stateNode.isHidden = b) && !M && e.mode & 1)
            for (K = e, M = e.child; M !== null; ) {
              for (D = K = M; K !== null; ) {
                switch (L = K, Q = L.child, L.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Jr(4, L, L.return);
                    break;
                  case 1:
                    rr(L, L.return);
                    var Y = L.stateNode;
                    if (typeof Y.componentWillUnmount == "function") {
                      r = L, n = L.return;
                      try {
                        t = r, Y.props = t.memoizedProps, Y.state = t.memoizedState, Y.componentWillUnmount();
                      } catch (X) {
                        Ae(r, n, X);
                      }
                    }
                    break;
                  case 5:
                    rr(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      Vc(D);
                      continue;
                    }
                }
                Q !== null ? (Q.return = L, K = Q) : Vc(D);
              }
              M = M.sibling;
            }
          e:
            for (M = null, D = e; ; ) {
              if (D.tag === 5) {
                if (M === null) {
                  M = D;
                  try {
                    i = D.stateNode, b ? (a = i.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (h = D.stateNode, g = D.memoizedProps.style, c = g != null && g.hasOwnProperty("display") ? g.display : null, h.style.display = Sa("display", c));
                  } catch (X) {
                    Ae(e, e.return, X);
                  }
                }
              } else if (D.tag === 6) {
                if (M === null)
                  try {
                    D.stateNode.nodeValue = b ? "" : D.memoizedProps;
                  } catch (X) {
                    Ae(e, e.return, X);
                  }
              } else if ((D.tag !== 22 && D.tag !== 23 || D.memoizedState === null || D === e) && D.child !== null) {
                D.child.return = D, D = D.child;
                continue;
              }
              if (D === e)
                break e;
              for (; D.sibling === null; ) {
                if (D.return === null || D.return === e)
                  break e;
                M === D && (M = null), D = D.return;
              }
              M === D && (M = null), D.sibling.return = D.return, D = D.sibling;
            }
        }
        break;
      case 19:
        yt(t, e), Nt(e), r & 4 && Uc(e);
        break;
      case 21:
        break;
      default:
        yt(
          t,
          e
        ), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Dc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (wr(i, ""), r.flags &= -33);
            var a = Fc(e);
            gs(e, a, i);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo, h = Fc(e);
            hs(e, h, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (g) {
        Ae(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Am(e, t, n) {
    K = e, Bc(e);
  }
  function Bc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var i = K, a = i.child;
      if (i.tag === 22 && r) {
        var c = i.memoizedState !== null || oi;
        if (!c) {
          var h = i.alternate, g = h !== null && h.memoizedState !== null || He;
          h = oi;
          var b = He;
          if (oi = c, (He = g) && !b)
            for (K = i; K !== null; )
              c = K, g = c.child, c.tag === 22 && c.memoizedState !== null ? Hc(i) : g !== null ? (g.return = c, K = g) : Hc(i);
          for (; a !== null; )
            K = a, Bc(a), a = a.sibling;
          K = i, oi = h, He = b;
        }
        $c(e);
      } else
        i.subtreeFlags & 8772 && a !== null ? (a.return = i, K = a) : $c(e);
    }
  }
  function $c(e) {
    for (; K !== null; ) {
      var t = K;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                He || ii(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !He)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var a = t.updateQueue;
                a !== null && Vu(t, a, r);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Vu(t, c, n);
                }
                break;
              case 5:
                var h = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = h;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      g.autoFocus && n.focus();
                      break;
                    case "img":
                      g.src && (n.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var b = t.alternate;
                  if (b !== null) {
                    var M = b.memoizedState;
                    if (M !== null) {
                      var D = M.dehydrated;
                      D !== null && Or(D);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          He || t.flags & 512 && ms(t);
        } catch (L) {
          Ae(t, t.return, L);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function Vc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function Hc(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ii(4, t);
            } catch (g) {
              Ae(t, n, g);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (g) {
                Ae(t, i, g);
              }
            }
            var a = t.return;
            try {
              ms(t);
            } catch (g) {
              Ae(t, a, g);
            }
            break;
          case 5:
            var c = t.return;
            try {
              ms(t);
            } catch (g) {
              Ae(t, c, g);
            }
        }
      } catch (g) {
        Ae(t, t.return, g);
      }
      if (t === e) {
        K = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        h.return = t.return, K = h;
        break;
      }
      K = t.return;
    }
  }
  var Tm = Math.ceil, li = F.ReactCurrentDispatcher, vs = F.ReactCurrentOwner, dt = F.ReactCurrentBatchConfig, he = 0, Fe = null, Le = null, We = 0, ot = 0, or = Zt(0), je = 0, qr = null, bn = 0, si = 0, ys = 0, eo = null, Je = null, ws = 0, ir = 1 / 0, It = null, ai = !1, xs = null, rn = null, ui = !1, on = null, ci = 0, to = 0, ks = null, di = -1, fi = 0;
  function Ye() {
    return he & 6 ? Te() : di !== -1 ? di : di = Te();
  }
  function ln(e) {
    return e.mode & 1 ? he & 2 && We !== 0 ? We & -We : hm.transition !== null ? (fi === 0 && (fi = Fa()), fi) : (e = ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ka(e.type)), e) : 1;
  }
  function wt(e, t, n, r) {
    if (50 < to)
      throw to = 0, ks = null, Error(s(185));
    Pr(e, n, r), (!(he & 2) || e !== Fe) && (e === Fe && (!(he & 2) && (si |= n), je === 4 && sn(e, We)), qe(e, r), n === 1 && he === 0 && !(t.mode & 1) && (ir = Te() + 500, Uo && qt()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    hp(e, t);
    var r = ko(e, e === Fe ? We : 0);
    if (r === 0)
      n !== null && Ma(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Ma(n), t === 1)
        e.tag === 0 ? mm(Kc.bind(null, e)) : Tu(Kc.bind(null, e)), cm(function() {
          !(he & 6) && qt();
        }), n = null;
      else {
        switch (Ia(r)) {
          case 1:
            n = el;
            break;
          case 4:
            n = ja;
            break;
          case 16:
            n = vo;
            break;
          case 536870912:
            n = Da;
            break;
          default:
            n = vo;
        }
        n = td(n, Qc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Qc(e, t) {
    if (di = -1, fi = 0, he & 6)
      throw Error(s(327));
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n)
      return null;
    var r = ko(e, e === Fe ? We : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = pi(e, r);
    else {
      t = r;
      var i = he;
      he |= 2;
      var a = Gc();
      (Fe !== e || We !== t) && (It = null, ir = Te() + 500, On(e, t));
      do
        try {
          Mm();
          break;
        } catch (h) {
          Yc(e, h);
        }
      while (1);
      Il(), li.current = a, he = i, Le !== null ? t = 0 : (Fe = null, We = 0, t = je);
    }
    if (t !== 0) {
      if (t === 2 && (i = tl(e), i !== 0 && (r = i, t = Ss(e, i))), t === 1)
        throw n = qr, On(e, 0), sn(e, r), qe(e, Te()), n;
      if (t === 6)
        sn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !zm(i) && (t = pi(e, r), t === 2 && (a = tl(e), a !== 0 && (r = a, t = Ss(e, a))), t === 1))
          throw n = qr, On(e, 0), sn(e, r), qe(e, Te()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            An(e, Je, It);
            break;
          case 3:
            if (sn(e, r), (r & 130023424) === r && (t = ws + 500 - Te(), 10 < t)) {
              if (ko(e, 0) !== 0)
                break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Ye(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = bl(An.bind(null, e, Je, It), t);
              break;
            }
            An(e, Je, It);
            break;
          case 4:
            if (sn(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var c = 31 - pt(r);
              a = 1 << c, c = t[c], c > i && (i = c), r &= ~a;
            }
            if (r = i, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Tm(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = bl(An.bind(null, e, Je, It), r);
              break;
            }
            An(e, Je, It);
            break;
          case 5:
            An(e, Je, It);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return qe(e, Te()), e.callbackNode === n ? Qc.bind(null, e) : null;
  }
  function Ss(e, t) {
    var n = eo;
    return e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256), e = pi(e, t), e !== 2 && (t = Je, Je = n, t !== null && Es(t)), e;
  }
  function Es(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function zm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r], a = i.getSnapshot;
            i = i.value;
            try {
              if (!mt(a(), i))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function sn(e, t) {
    for (t &= ~ys, t &= ~si, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - pt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Kc(e) {
    if (he & 6)
      throw Error(s(327));
    lr();
    var t = ko(e, 0);
    if (!(t & 1))
      return qe(e, Te()), null;
    var n = pi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = tl(e);
      r !== 0 && (t = r, n = Ss(e, r));
    }
    if (n === 1)
      throw n = qr, On(e, 0), sn(e, t), qe(e, Te()), n;
    if (n === 6)
      throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, An(e, Je, It), qe(e, Te()), null;
  }
  function Cs(e, t) {
    var n = he;
    he |= 1;
    try {
      return e(t);
    } finally {
      he = n, he === 0 && (ir = Te() + 500, Uo && qt());
    }
  }
  function _n(e) {
    on !== null && on.tag === 0 && !(he & 6) && lr();
    var t = he;
    he |= 1;
    var n = dt.transition, r = ke;
    try {
      if (dt.transition = null, ke = 1, e)
        return e();
    } finally {
      ke = r, dt.transition = n, he = t, !(he & 6) && qt();
    }
  }
  function Ps() {
    ot = or.current, Ne(or);
  }
  function On(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, um(n)), Le !== null)
      for (n = Le.return; n !== null; ) {
        var r = n;
        switch (Ll(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Fo();
            break;
          case 3:
            tr(), Ne(Ge), Ne(Be), Kl();
            break;
          case 5:
            Hl(r);
            break;
          case 4:
            tr();
            break;
          case 13:
            Ne(_e);
            break;
          case 19:
            Ne(_e);
            break;
          case 10:
            Ul(r.type._context);
            break;
          case 22:
          case 23:
            Ps();
        }
        n = n.return;
      }
    if (Fe = e, Le = e = an(e.current, null), We = ot = t, je = 0, qr = null, ys = si = bn = 0, Je = eo = null, Pn !== null) {
      for (t = 0; t < Pn.length; t++)
        if (n = Pn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var i = r.next, a = n.pending;
          if (a !== null) {
            var c = a.next;
            a.next = i, r.next = c;
          }
          n.pending = r;
        }
      Pn = null;
    }
    return e;
  }
  function Yc(e, t) {
    do {
      var n = Le;
      try {
        if (Il(), Xo.current = ei, Zo) {
          for (var r = Oe.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Zo = !1;
        }
        if (Rn = 0, De = Me = Oe = null, Kr = !1, Yr = 0, vs.current = null, n === null || n.return === null) {
          je = 1, qr = t, Le = null;
          break;
        }
        e: {
          var a = e, c = n.return, h = n, g = t;
          if (t = We, h.flags |= 32768, g !== null && typeof g == "object" && typeof g.then == "function") {
            var b = g, M = h, D = M.tag;
            if (!(M.mode & 1) && (D === 0 || D === 11 || D === 15)) {
              var L = M.alternate;
              L ? (M.updateQueue = L.updateQueue, M.memoizedState = L.memoizedState, M.lanes = L.lanes) : (M.updateQueue = null, M.memoizedState = null);
            }
            var Q = wc(c);
            if (Q !== null) {
              Q.flags &= -257, xc(Q, c, h, a, t), Q.mode & 1 && yc(a, b, t), t = Q, g = b;
              var Y = t.updateQueue;
              if (Y === null) {
                var X = /* @__PURE__ */ new Set();
                X.add(g), t.updateQueue = X;
              } else
                Y.add(g);
              break e;
            } else {
              if (!(t & 1)) {
                yc(a, b, t), Ns();
                break e;
              }
              g = Error(s(426));
            }
          } else if (be && h.mode & 1) {
            var ze = wc(c);
            if (ze !== null) {
              !(ze.flags & 65536) && (ze.flags |= 256), xc(ze, c, h, a, t), Dl(nr(g, h));
              break e;
            }
          }
          a = g = nr(g, h), je !== 4 && (je = 2), eo === null ? eo = [a] : eo.push(a), a = c;
          do {
            switch (a.tag) {
              case 3:
                a.flags |= 65536, t &= -t, a.lanes |= t;
                var S = gc(a, g, t);
                $u(a, S);
                break e;
              case 1:
                h = g;
                var w = a.type, P = a.stateNode;
                if (!(a.flags & 128) && (typeof w.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (rn === null || !rn.has(P)))) {
                  a.flags |= 65536, t &= -t, a.lanes |= t;
                  var I = vc(a, h, t);
                  $u(a, I);
                  break e;
                }
            }
            a = a.return;
          } while (a !== null);
        }
        Zc(n);
      } catch (Z) {
        t = Z, Le === n && n !== null && (Le = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Gc() {
    var e = li.current;
    return li.current = ei, e === null ? ei : e;
  }
  function Ns() {
    (je === 0 || je === 3 || je === 2) && (je = 4), Fe === null || !(bn & 268435455) && !(si & 268435455) || sn(Fe, We);
  }
  function pi(e, t) {
    var n = he;
    he |= 2;
    var r = Gc();
    (Fe !== e || We !== t) && (It = null, On(e, t));
    do
      try {
        Lm();
        break;
      } catch (i) {
        Yc(e, i);
      }
    while (1);
    if (Il(), he = n, li.current = r, Le !== null)
      throw Error(s(261));
    return Fe = null, We = 0, je;
  }
  function Lm() {
    for (; Le !== null; )
      Xc(Le);
  }
  function Mm() {
    for (; Le !== null && !lp(); )
      Xc(Le);
  }
  function Xc(e) {
    var t = ed(e.alternate, e, ot);
    e.memoizedProps = e.pendingProps, t === null ? Zc(e) : Le = t, vs.current = null;
  }
  function Zc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = bm(n, t), n !== null) {
          n.flags &= 32767, Le = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          je = 6, Le = null;
          return;
        }
      } else if (n = Rm(n, t, ot), n !== null) {
        Le = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function An(e, t, n) {
    var r = ke, i = dt.transition;
    try {
      dt.transition = null, ke = 1, jm(e, t, n, r);
    } finally {
      dt.transition = i, ke = r;
    }
    return null;
  }
  function jm(e, t, n, r) {
    do
      lr();
    while (on !== null);
    if (he & 6)
      throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (gp(e, a), e === Fe && (Le = Fe = null, We = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ui || (ui = !0, td(vo, function() {
      return lr(), null;
    })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
      a = dt.transition, dt.transition = null;
      var c = ke;
      ke = 1;
      var h = he;
      he |= 4, vs.current = null, Om(e, n), Wc(n, e), nm(Nl), Co = !!Pl, Nl = Pl = null, e.current = n, Am(n), sp(), he = h, ke = c, dt.transition = a;
    } else
      e.current = n;
    if (ui && (ui = !1, on = e, ci = i), a = e.pendingLanes, a === 0 && (rn = null), cp(n.stateNode), qe(e, Te()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ai)
      throw ai = !1, e = xs, xs = null, e;
    return ci & 1 && e.tag !== 0 && lr(), a = e.pendingLanes, a & 1 ? e === ks ? to++ : (to = 0, ks = e) : to = 0, qt(), null;
  }
  function lr() {
    if (on !== null) {
      var e = Ia(ci), t = dt.transition, n = ke;
      try {
        if (dt.transition = null, ke = 16 > e ? 16 : e, on === null)
          var r = !1;
        else {
          if (e = on, on = null, ci = 0, he & 6)
            throw Error(s(331));
          var i = he;
          for (he |= 4, K = e.current; K !== null; ) {
            var a = K, c = a.child;
            if (K.flags & 16) {
              var h = a.deletions;
              if (h !== null) {
                for (var g = 0; g < h.length; g++) {
                  var b = h[g];
                  for (K = b; K !== null; ) {
                    var M = K;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(8, M, a);
                    }
                    var D = M.child;
                    if (D !== null)
                      D.return = M, K = D;
                    else
                      for (; K !== null; ) {
                        M = K;
                        var L = M.sibling, Q = M.return;
                        if (jc(M), M === b) {
                          K = null;
                          break;
                        }
                        if (L !== null) {
                          L.return = Q, K = L;
                          break;
                        }
                        K = Q;
                      }
                  }
                }
                var Y = a.alternate;
                if (Y !== null) {
                  var X = Y.child;
                  if (X !== null) {
                    Y.child = null;
                    do {
                      var ze = X.sibling;
                      X.sibling = null, X = ze;
                    } while (X !== null);
                  }
                }
                K = a;
              }
            }
            if (a.subtreeFlags & 2064 && c !== null)
              c.return = a, K = c;
            else
              e:
                for (; K !== null; ) {
                  if (a = K, a.flags & 2048)
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(9, a, a.return);
                    }
                  var S = a.sibling;
                  if (S !== null) {
                    S.return = a.return, K = S;
                    break e;
                  }
                  K = a.return;
                }
          }
          var w = e.current;
          for (K = w; K !== null; ) {
            c = K;
            var P = c.child;
            if (c.subtreeFlags & 2064 && P !== null)
              P.return = c, K = P;
            else
              e:
                for (c = w; K !== null; ) {
                  if (h = K, h.flags & 2048)
                    try {
                      switch (h.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ii(9, h);
                      }
                    } catch (Z) {
                      Ae(h, h.return, Z);
                    }
                  if (h === c) {
                    K = null;
                    break e;
                  }
                  var I = h.sibling;
                  if (I !== null) {
                    I.return = h.return, K = I;
                    break e;
                  }
                  K = h.return;
                }
          }
          if (he = i, qt(), St && typeof St.onPostCommitFiberRoot == "function")
            try {
              St.onPostCommitFiberRoot(yo, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        ke = n, dt.transition = t;
      }
    }
    return !1;
  }
  function Jc(e, t, n) {
    t = nr(n, t), t = gc(e, t, 1), e = tn(e, t, 1), t = Ye(), e !== null && (Pr(e, 1, t), qe(e, t));
  }
  function Ae(e, t, n) {
    if (e.tag === 3)
      Jc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
            e = nr(n, e), e = vc(t, e, 1), t = tn(t, e, 1), e = Ye(), t !== null && (Pr(t, 1, e), qe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Dm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (We & n) === n && (je === 4 || je === 3 && (We & 130023424) === We && 500 > Te() - ws ? On(e, 0) : ys |= n), qe(e, t);
  }
  function qc(e, t) {
    t === 0 && (e.mode & 1 ? (t = xo, xo <<= 1, !(xo & 130023424) && (xo = 4194304)) : t = 1);
    var n = Ye();
    e = jt(e, t), e !== null && (Pr(e, t, n), qe(e, n));
  }
  function Fm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), qc(e, n);
  }
  function Im(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), qc(e, n);
  }
  var ed;
  ed = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ge.current)
        Ze = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return Ze = !1, Nm(e, t, n);
        Ze = !!(e.flags & 131072);
      }
    else
      Ze = !1, be && t.flags & 1048576 && zu(t, Bo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ri(e, t), e = t.pendingProps;
        var i = Yn(t, Be.current);
        er(t, n), i = Xl(null, t, r, e, i, n);
        var a = Zl();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (a = !0, Io(t)) : a = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, $l(t), i.updater = ti, t.stateNode = i, i._reactInternals = t, rs(t, r, e, n), t = ss(null, t, r, !0, a, n)) : (t.tag = 0, be && a && zl(t), Ke(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ri(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Wm(r), e = gt(r, e), i) {
            case 0:
              t = ls(null, t, r, e, n);
              break e;
            case 1:
              t = Nc(null, t, r, e, n);
              break e;
            case 11:
              t = kc(null, t, r, e, n);
              break e;
            case 14:
              t = Sc(null, t, r, gt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), ls(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), Nc(e, t, r, i, n);
      case 3:
        e: {
          if (Rc(t), e === null)
            throw Error(s(387));
          r = t.pendingProps, a = t.memoizedState, i = a.element, Bu(e, t), Yo(t, r, null, n);
          var c = t.memoizedState;
          if (r = c.element, a.isDehydrated)
            if (a = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
              i = nr(Error(s(423)), t), t = bc(e, t, r, n, i);
              break e;
            } else if (r !== i) {
              i = nr(Error(s(424)), t), t = bc(e, t, r, n, i);
              break e;
            } else
              for (rt = Xt(t.stateNode.containerInfo.firstChild), nt = t, be = !0, ht = null, n = Uu(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Zn(), r === i) {
              t = Ft(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Hu(t), e === null && jl(t), r = t.type, i = t.pendingProps, a = e !== null ? e.memoizedProps : null, c = i.children, Rl(r, i) ? c = null : a !== null && Rl(r, a) && (t.flags |= 32), Pc(e, t), Ke(e, t, c, n), t.child;
      case 6:
        return e === null && jl(t), null;
      case 13:
        return _c(e, t, n);
      case 4:
        return Vl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jn(t, null, r, n) : Ke(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), kc(e, t, r, i, n);
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, a = t.memoizedProps, c = i.value, Ce(Ho, r._currentValue), r._currentValue = c, a !== null)
            if (mt(a.value, c)) {
              if (a.children === i.children && !Ge.current) {
                t = Ft(e, t, n);
                break e;
              }
            } else
              for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                var h = a.dependencies;
                if (h !== null) {
                  c = a.child;
                  for (var g = h.firstContext; g !== null; ) {
                    if (g.context === r) {
                      if (a.tag === 1) {
                        g = Dt(-1, n & -n), g.tag = 2;
                        var b = a.updateQueue;
                        if (b !== null) {
                          b = b.shared;
                          var M = b.pending;
                          M === null ? g.next = g : (g.next = M.next, M.next = g), b.pending = g;
                        }
                      }
                      a.lanes |= n, g = a.alternate, g !== null && (g.lanes |= n), Wl(
                        a.return,
                        n,
                        t
                      ), h.lanes |= n;
                      break;
                    }
                    g = g.next;
                  }
                } else if (a.tag === 10)
                  c = a.type === t.type ? null : a.child;
                else if (a.tag === 18) {
                  if (c = a.return, c === null)
                    throw Error(s(341));
                  c.lanes |= n, h = c.alternate, h !== null && (h.lanes |= n), Wl(c, n, t), c = a.sibling;
                } else
                  c = a.child;
                if (c !== null)
                  c.return = a;
                else
                  for (c = a; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (a = c.sibling, a !== null) {
                      a.return = c.return, c = a;
                      break;
                    }
                    c = c.return;
                  }
                a = c;
              }
          Ke(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, er(t, n), i = ut(i), r = r(i), t.flags |= 1, Ke(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = gt(r, t.pendingProps), i = gt(r.type, i), Sc(e, t, r, i, n);
      case 15:
        return Ec(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gt(r, i), ri(e, t), t.tag = 1, Xe(r) ? (e = !0, Io(t)) : e = !1, er(t, n), mc(t, r, i), rs(t, r, i, n), ss(null, t, r, !0, e, n);
      case 19:
        return Ac(e, t, n);
      case 22:
        return Cc(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function td(e, t) {
    return La(e, t);
  }
  function Um(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ft(e, t, n, r) {
    return new Um(e, t, n, r);
  }
  function Rs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Wm(e) {
    if (typeof e == "function")
      return Rs(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ne)
        return 11;
      if (e === xe)
        return 14;
    }
    return 2;
  }
  function an(e, t) {
    var n = e.alternate;
    return n === null ? (n = ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function mi(e, t, n, r, i, a) {
    var c = 2;
    if (r = e, typeof e == "function")
      Rs(e) && (c = 1);
    else if (typeof e == "string")
      c = 5;
    else
      e:
        switch (e) {
          case G:
            return Tn(n.children, i, a, t);
          case oe:
            c = 8, i |= 8;
            break;
          case me:
            return e = ft(12, n, t, i | 2), e.elementType = me, e.lanes = a, e;
          case we:
            return e = ft(13, n, t, i), e.elementType = we, e.lanes = a, e;
          case ue:
            return e = ft(19, n, t, i), e.elementType = ue, e.lanes = a, e;
          case J:
            return hi(n, i, a, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ce:
                  c = 10;
                  break e;
                case Se:
                  c = 9;
                  break e;
                case ne:
                  c = 11;
                  break e;
                case xe:
                  c = 14;
                  break e;
                case de:
                  c = 16, r = null;
                  break e;
              }
            throw Error(s(130, e == null ? e : typeof e, ""));
        }
    return t = ft(c, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
  }
  function Tn(e, t, n, r) {
    return e = ft(7, e, r, t), e.lanes = n, e;
  }
  function hi(e, t, n, r) {
    return e = ft(22, e, r, t), e.elementType = J, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function bs(e, t, n) {
    return e = ft(6, e, null, t), e.lanes = n, e;
  }
  function _s(e, t, n) {
    return t = ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Bm(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nl(0), this.expirationTimes = nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function Os(e, t, n, r, i, a, c, h, g) {
    return e = new Bm(e, t, n, h, g), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = ft(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $l(a), e;
  }
  function $m(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function nd(e) {
    if (!e)
      return Jt;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1)
        throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n))
        return Ou(e, n, t);
    }
    return t;
  }
  function rd(e, t, n, r, i, a, c, h, g) {
    return e = Os(n, r, !0, e, i, a, c, h, g), e.context = nd(null), n = e.current, r = Ye(), i = ln(n), a = Dt(r, i), a.callback = t ?? null, tn(n, a, i), e.current.lanes = i, Pr(e, i, r), qe(e, r), e;
  }
  function gi(e, t, n, r) {
    var i = t.current, a = Ye(), c = ln(i);
    return n = nd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(a, c), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(i, t, c), e !== null && (wt(e, i, c, a), Ko(e, i, c)), c;
  }
  function vi(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function od(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function As(e, t) {
    od(e, t), (e = e.alternate) && od(e, t);
  }
  function Vm() {
    return null;
  }
  var id = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ts(e) {
    this._internalRoot = e;
  }
  yi.prototype.render = Ts.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(s(409));
    gi(e, t, null, null);
  }, yi.prototype.unmount = Ts.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      _n(function() {
        gi(null, e, null, null);
      }), t[Tt] = null;
    }
  };
  function yi(e) {
    this._internalRoot = e;
  }
  yi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ba();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++)
        ;
      Kt.splice(n, 0, e), n === 0 && Ha(e);
    }
  };
  function zs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function wi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ld() {
  }
  function Hm(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var a = r;
        r = function() {
          var b = vi(c);
          a.call(b);
        };
      }
      var c = rd(t, r, e, 0, null, !1, !1, "", ld);
      return e._reactRootContainer = c, e[Tt] = c.current, Ir(e.nodeType === 8 ? e.parentNode : e), _n(), c;
    }
    for (; i = e.lastChild; )
      e.removeChild(i);
    if (typeof r == "function") {
      var h = r;
      r = function() {
        var b = vi(g);
        h.call(b);
      };
    }
    var g = Os(e, 0, !1, null, null, !1, !1, "", ld);
    return e._reactRootContainer = g, e[Tt] = g.current, Ir(e.nodeType === 8 ? e.parentNode : e), _n(function() {
      gi(t, g, n, r);
    }), g;
  }
  function xi(e, t, n, r, i) {
    var a = n._reactRootContainer;
    if (a) {
      var c = a;
      if (typeof i == "function") {
        var h = i;
        i = function() {
          var g = vi(c);
          h.call(g);
        };
      }
      gi(t, c, e, i);
    } else
      c = Hm(n, t, e, i, r);
    return vi(c);
  }
  Ua = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Cr(t.pendingLanes);
          n !== 0 && (rl(t, n | 1), qe(t, Te()), !(he & 6) && (ir = Te() + 500, qt()));
        }
        break;
      case 13:
        _n(function() {
          var r = jt(e, 1);
          if (r !== null) {
            var i = Ye();
            wt(r, e, 1, i);
          }
        }), As(e, 1);
    }
  }, ol = function(e) {
    if (e.tag === 13) {
      var t = jt(e, 134217728);
      if (t !== null) {
        var n = Ye();
        wt(t, e, 134217728, n);
      }
      As(e, 134217728);
    }
  }, Wa = function(e) {
    if (e.tag === 13) {
      var t = ln(e), n = jt(e, t);
      if (n !== null) {
        var r = Ye();
        wt(n, e, t, r);
      }
      As(e, t);
    }
  }, Ba = function() {
    return ke;
  }, $a = function(e, t) {
    var n = ke;
    try {
      return ke = e, t();
    } finally {
      ke = n;
    }
  }, Xi = function(e, t, n) {
    switch (t) {
      case "input":
        if (Bi(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Do(r);
              if (!i)
                throw Error(s(90));
              po(r), Bi(r, i);
            }
          }
        }
        break;
      case "textarea":
        ya(e, n);
        break;
      case "select":
        t = n.value, t != null && jn(e, !!n.multiple, t, !1);
    }
  }, Ra = Cs, ba = _n;
  var Qm = { usingClientEntryPoint: !1, Events: [Br, Qn, Do, Pa, Na, Cs] }, no = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Km = { bundleType: no.bundleType, version: no.version, rendererPackageName: no.rendererPackageName, rendererConfig: no.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: F.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ta(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: no.findFiberByHostInstance || Vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ki.isDisabled && ki.supportsFiber)
      try {
        yo = ki.inject(Km), St = ki;
      } catch {
      }
  }
  return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm, et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zs(t))
      throw Error(s(200));
    return $m(e, t, null, n);
  }, et.createRoot = function(e, t) {
    if (!zs(e))
      throw Error(s(299));
    var n = !1, r = "", i = id;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Os(e, 1, !1, null, null, n, !1, r, i), e[Tt] = t.current, Ir(e.nodeType === 8 ? e.parentNode : e), new Ts(t);
  }, et.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Ta(t), e = e === null ? null : e.stateNode, e;
  }, et.flushSync = function(e) {
    return _n(e);
  }, et.hydrate = function(e, t, n) {
    if (!wi(t))
      throw Error(s(200));
    return xi(null, e, t, !0, n);
  }, et.hydrateRoot = function(e, t, n) {
    if (!zs(e))
      throw Error(s(405));
    var r = n != null && n.hydratedSources || null, i = !1, a = "", c = id;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = rd(t, null, e, 1, n ?? null, i, !1, a, c), e[Tt] = t.current, Ir(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
          n,
          i
        );
    return new yi(t);
  }, et.render = function(e, t, n) {
    if (!wi(t))
      throw Error(s(200));
    return xi(null, e, t, !1, n);
  }, et.unmountComponentAtNode = function(e) {
    if (!wi(e))
      throw Error(s(40));
    return e._reactRootContainer ? (_n(function() {
      xi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Tt] = null;
      });
    }), !0) : !1;
  }, et.unstable_batchedUpdates = Cs, et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wi(n))
      throw Error(s(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(s(38));
    return xi(e, t, n, !1, r);
  }, et.version = "18.3.1-next-f1338f8080-20240426", et;
}
function Vd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vd);
    } catch (o) {
      console.error(o);
    }
}
Vd(), $d.exports = eh();
var ao = $d.exports;
const th = /* @__PURE__ */ Wd(ao);
var pd = ao;
Qs.createRoot = pd.createRoot, Qs.hydrateRoot = pd.hydrateRoot;
var C = ta();
const nh = /* @__PURE__ */ Wd(C), rh = /* @__PURE__ */ Gm({
  __proto__: null,
  default: nh
}, [C]);
function oh(o, l) {
  typeof o == "function" ? o(l) : o != null && (o.current = l);
}
function Hd(...o) {
  return (l) => o.forEach((s) => oh(s, l));
}
function yn(...o) {
  return C.useCallback(Hd(...o), o);
}
var Di = C.forwardRef((o, l) => {
  const { children: s, ...u } = o, d = C.Children.toArray(s), f = d.find(lh);
  if (f) {
    const m = f.props.children, p = d.map((v) => v === f ? C.Children.count(m) > 1 ? C.Children.only(null) : C.isValidElement(m) ? m.props.children : null : v);
    return /* @__PURE__ */ W.jsx(Ks, { ...u, ref: l, children: C.isValidElement(m) ? C.cloneElement(m, void 0, p) : null });
  }
  return /* @__PURE__ */ W.jsx(Ks, { ...u, ref: l, children: s });
});
Di.displayName = "Slot";
var Ks = C.forwardRef((o, l) => {
  const { children: s, ...u } = o;
  if (C.isValidElement(s)) {
    const d = ah(s);
    return C.cloneElement(s, {
      ...sh(u, s.props),
      // @ts-ignore
      ref: l ? Hd(l, d) : d
    });
  }
  return C.Children.count(s) > 1 ? C.Children.only(null) : null;
});
Ks.displayName = "SlotClone";
var ih = ({ children: o }) => /* @__PURE__ */ W.jsx(W.Fragment, { children: o });
function lh(o) {
  return C.isValidElement(o) && o.type === ih;
}
function sh(o, l) {
  const s = { ...l };
  for (const u in l) {
    const d = o[u], f = l[u];
    /^on[A-Z]/.test(u) ? d && f ? s[u] = (...p) => {
      f(...p), d(...p);
    } : d && (s[u] = d) : u === "style" ? s[u] = { ...d, ...f } : u === "className" && (s[u] = [d, f].filter(Boolean).join(" "));
  }
  return { ...o, ...s };
}
function ah(o) {
  let l = Object.getOwnPropertyDescriptor(o.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? o.ref : (l = Object.getOwnPropertyDescriptor(o, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? o.props.ref : o.props.ref || o.ref);
}
function Qd(o) {
  var l, s, u = "";
  if (typeof o == "string" || typeof o == "number")
    u += o;
  else if (typeof o == "object")
    if (Array.isArray(o))
      for (l = 0; l < o.length; l++)
        o[l] && (s = Qd(o[l])) && (u && (u += " "), u += s);
    else
      for (l in o)
        o[l] && (u && (u += " "), u += l);
  return u;
}
function uh() {
  for (var o, l, s = 0, u = ""; s < arguments.length; )
    (o = arguments[s++]) && (l = Qd(o)) && (u && (u += " "), u += l);
  return u;
}
const md = (o) => typeof o == "boolean" ? "".concat(o) : o === 0 ? "0" : o, hd = uh, Kd = (o, l) => (s) => {
  var u;
  if (l?.variants == null)
    return hd(o, s?.class, s?.className);
  const { variants: d, defaultVariants: f } = l, m = Object.keys(d).map((y) => {
    const N = s?.[y], E = f?.[y];
    if (N === null)
      return null;
    const R = md(N) || md(E);
    return d[y][R];
  }), p = s && Object.entries(s).reduce((y, N) => {
    let [E, R] = N;
    return R === void 0 || (y[E] = R), y;
  }, {}), v = l == null || (u = l.compoundVariants) === null || u === void 0 ? void 0 : u.reduce((y, N) => {
    let { class: E, className: R, ...O } = N;
    return Object.entries(O).every((A) => {
      let [k, _] = A;
      return Array.isArray(_) ? _.includes({
        ...f,
        ...p
      }[k]) : {
        ...f,
        ...p
      }[k] === _;
    }) ? [
      ...y,
      E,
      R
    ] : y;
  }, []);
  return hd(o, m, v, s?.class, s?.className);
};
function Yd(o) {
  var l, s, u = "";
  if (typeof o == "string" || typeof o == "number")
    u += o;
  else if (typeof o == "object")
    if (Array.isArray(o)) {
      var d = o.length;
      for (l = 0; l < d; l++)
        o[l] && (s = Yd(o[l])) && (u && (u += " "), u += s);
    } else
      for (s in o)
        o[s] && (u && (u += " "), u += s);
  return u;
}
function ch() {
  for (var o, l, s = 0, u = "", d = arguments.length; s < d; s++)
    (o = arguments[s]) && (l = Yd(o)) && (u && (u += " "), u += l);
  return u;
}
const na = "-", dh = (o) => {
  const l = ph(o), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: u
  } = o;
  return {
    getClassGroupId: (m) => {
      const p = m.split(na);
      return p[0] === "" && p.length !== 1 && p.shift(), Gd(p, l) || fh(m);
    },
    getConflictingClassGroupIds: (m, p) => {
      const v = s[m] || [];
      return p && u[m] ? [...v, ...u[m]] : v;
    }
  };
}, Gd = (o, l) => {
  if (o.length === 0)
    return l.classGroupId;
  const s = o[0], u = l.nextPart.get(s), d = u ? Gd(o.slice(1), u) : void 0;
  if (d)
    return d;
  if (l.validators.length === 0)
    return;
  const f = o.join(na);
  return l.validators.find(({
    validator: m
  }) => m(f))?.classGroupId;
}, gd = /^\[(.+)\]$/, fh = (o) => {
  if (gd.test(o)) {
    const l = gd.exec(o)[1], s = l?.substring(0, l.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, ph = (o) => {
  const {
    theme: l,
    prefix: s
  } = o, u = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return hh(Object.entries(o.classGroups), s).forEach(([f, m]) => {
    Ys(m, u, f, l);
  }), u;
}, Ys = (o, l, s, u) => {
  o.forEach((d) => {
    if (typeof d == "string") {
      const f = d === "" ? l : vd(l, d);
      f.classGroupId = s;
      return;
    }
    if (typeof d == "function") {
      if (mh(d)) {
        Ys(d(u), l, s, u);
        return;
      }
      l.validators.push({
        validator: d,
        classGroupId: s
      });
      return;
    }
    Object.entries(d).forEach(([f, m]) => {
      Ys(m, vd(l, f), s, u);
    });
  });
}, vd = (o, l) => {
  let s = o;
  return l.split(na).forEach((u) => {
    s.nextPart.has(u) || s.nextPart.set(u, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(u);
  }), s;
}, mh = (o) => o.isThemeGetter, hh = (o, l) => l ? o.map(([s, u]) => {
  const d = u.map((f) => typeof f == "string" ? l + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(([m, p]) => [l + m, p])) : f);
  return [s, d];
}) : o, gh = (o) => {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, s = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  const d = (f, m) => {
    s.set(f, m), l++, l > o && (l = 0, u = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let m = s.get(f);
      if (m !== void 0)
        return m;
      if ((m = u.get(f)) !== void 0)
        return d(f, m), m;
    },
    set(f, m) {
      s.has(f) ? s.set(f, m) : d(f, m);
    }
  };
}, Xd = "!", vh = (o) => {
  const {
    separator: l,
    experimentalParseClassName: s
  } = o, u = l.length === 1, d = l[0], f = l.length, m = (p) => {
    const v = [];
    let y = 0, N = 0, E;
    for (let _ = 0; _ < p.length; _++) {
      let T = p[_];
      if (y === 0) {
        if (T === d && (u || p.slice(_, _ + f) === l)) {
          v.push(p.slice(N, _)), N = _ + f;
          continue;
        }
        if (T === "/") {
          E = _;
          continue;
        }
      }
      T === "[" ? y++ : T === "]" && y--;
    }
    const R = v.length === 0 ? p : p.substring(N), O = R.startsWith(Xd), A = O ? R.substring(1) : R, k = E && E > N ? E - N : void 0;
    return {
      modifiers: v,
      hasImportantModifier: O,
      baseClassName: A,
      maybePostfixModifierPosition: k
    };
  };
  return s ? (p) => s({
    className: p,
    parseClassName: m
  }) : m;
}, yh = (o) => {
  if (o.length <= 1)
    return o;
  const l = [];
  let s = [];
  return o.forEach((u) => {
    u[0] === "[" ? (l.push(...s.sort(), u), s = []) : s.push(u);
  }), l.push(...s.sort()), l;
}, wh = (o) => ({
  cache: gh(o.cacheSize),
  parseClassName: vh(o),
  ...dh(o)
}), xh = /\s+/, kh = (o, l) => {
  const {
    parseClassName: s,
    getClassGroupId: u,
    getConflictingClassGroupIds: d
  } = l, f = [], m = o.trim().split(xh);
  let p = "";
  for (let v = m.length - 1; v >= 0; v -= 1) {
    const y = m[v], {
      modifiers: N,
      hasImportantModifier: E,
      baseClassName: R,
      maybePostfixModifierPosition: O
    } = s(y);
    let A = !!O, k = u(A ? R.substring(0, O) : R);
    if (!k) {
      if (!A) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      if (k = u(R), !k) {
        p = y + (p.length > 0 ? " " + p : p);
        continue;
      }
      A = !1;
    }
    const _ = yh(N).join(":"), T = E ? _ + Xd : _, U = T + k;
    if (f.includes(U))
      continue;
    f.push(U);
    const B = d(k, A);
    for (let F = 0; F < B.length; ++F) {
      const $ = B[F];
      f.push(T + $);
    }
    p = y + (p.length > 0 ? " " + p : p);
  }
  return p;
};
function Sh() {
  let o = 0, l, s, u = "";
  for (; o < arguments.length; )
    (l = arguments[o++]) && (s = Zd(l)) && (u && (u += " "), u += s);
  return u;
}
const Zd = (o) => {
  if (typeof o == "string")
    return o;
  let l, s = "";
  for (let u = 0; u < o.length; u++)
    o[u] && (l = Zd(o[u])) && (s && (s += " "), s += l);
  return s;
};
function Eh(o, ...l) {
  let s, u, d, f = m;
  function m(v) {
    const y = l.reduce((N, E) => E(N), o());
    return s = wh(y), u = s.cache.get, d = s.cache.set, f = p, p(v);
  }
  function p(v) {
    const y = u(v);
    if (y)
      return y;
    const N = kh(v, s);
    return d(v, N), N;
  }
  return function() {
    return f(Sh.apply(null, arguments));
  };
}
const Re = (o) => {
  const l = (s) => s[o] || [];
  return l.isThemeGetter = !0, l;
}, Jd = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ch = /^\d+\/\d+$/, Ph = /* @__PURE__ */ new Set(["px", "full", "screen"]), Nh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Rh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, _h = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Oh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ut = (o) => cr(o) || Ph.has(o) || Ch.test(o), cn = (o) => hr(o, "length", Fh), cr = (o) => !!o && !Number.isNaN(Number(o)), Ds = (o) => hr(o, "number", cr), oo = (o) => !!o && Number.isInteger(Number(o)), Ah = (o) => o.endsWith("%") && cr(o.slice(0, -1)), le = (o) => Jd.test(o), dn = (o) => Nh.test(o), Th = /* @__PURE__ */ new Set(["length", "size", "percentage"]), zh = (o) => hr(o, Th, qd), Lh = (o) => hr(o, "position", qd), Mh = /* @__PURE__ */ new Set(["image", "url"]), jh = (o) => hr(o, Mh, Uh), Dh = (o) => hr(o, "", Ih), io = () => !0, hr = (o, l, s) => {
  const u = Jd.exec(o);
  return u ? u[1] ? typeof l == "string" ? u[1] === l : l.has(u[1]) : s(u[2]) : !1;
}, Fh = (o) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Rh.test(o) && !bh.test(o)
), qd = () => !1, Ih = (o) => _h.test(o), Uh = (o) => Oh.test(o), Wh = () => {
  const o = Re("colors"), l = Re("spacing"), s = Re("blur"), u = Re("brightness"), d = Re("borderColor"), f = Re("borderRadius"), m = Re("borderSpacing"), p = Re("borderWidth"), v = Re("contrast"), y = Re("grayscale"), N = Re("hueRotate"), E = Re("invert"), R = Re("gap"), O = Re("gradientColorStops"), A = Re("gradientColorStopPositions"), k = Re("inset"), _ = Re("margin"), T = Re("opacity"), U = Re("padding"), B = Re("saturate"), F = Re("scale"), $ = Re("sepia"), q = Re("skew"), G = Re("space"), oe = Re("translate"), me = () => ["auto", "contain", "none"], ce = () => ["auto", "hidden", "clip", "visible", "scroll"], Se = () => ["auto", le, l], ne = () => [le, l], we = () => ["", Ut, cn], ue = () => ["auto", cr, le], xe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], de = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", le], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [cr, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [io],
      spacing: [Ut, cn],
      blur: ["none", "", dn, le],
      brightness: x(),
      borderColor: [o],
      borderRadius: ["none", "", "full", dn, le],
      borderSpacing: ne(),
      borderWidth: we(),
      contrast: x(),
      grayscale: V(),
      hueRotate: x(),
      invert: V(),
      gap: ne(),
      gradientColorStops: [o],
      gradientColorStopPositions: [Ah, cn],
      inset: Se(),
      margin: Se(),
      opacity: x(),
      padding: ne(),
      saturate: x(),
      scale: x(),
      sepia: V(),
      skew: x(),
      space: ne(),
      translate: ne()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [dn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...xe(), le]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: me()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": me()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": me()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", oo, le]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Se()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", oo, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [io]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", oo, le]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [io]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [oo, le]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [R]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [R]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [R]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...j()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...j(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...j(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [U]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [U]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [U]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [U]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [U]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [U]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [U]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [U]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [U]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [G]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [G]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, l]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, l, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, l, "none", "full", "min", "max", "fit", "prose", {
          screen: [dn]
        }, dn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, l, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, l, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", dn, cn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ds]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [io]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", cr, Ds]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ut, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [o]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [T]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [o]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [T]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...de(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ut, cn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ut, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [o]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: ne()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", le]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [T]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...xe(), Lh]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", zh]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, jh]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [o]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [O]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [f]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [f]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [f]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [f]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [f]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [f]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [f]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [f]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [f]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [f]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [f]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [f]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [f]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [f]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [f]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [p]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [p]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [p]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [p]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [p]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [p]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [p]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [p]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [p]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [T]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...de(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [p]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [p]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [T]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: de()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [d]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [d]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [d]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [d]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [d]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [d]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [d]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [d]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...de()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ut, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ut, cn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [o]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: we()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [o]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [T]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ut, cn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [o]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", dn, Dh]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [io]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [s]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [u]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [v]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", dn, le]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [N]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [E]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [s]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [u]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [v]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [N]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [E]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [m]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [m]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [m]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: x()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: x()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [F]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [F]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [F]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [oo, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [oe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [oe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [q]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [q]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", o]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [o]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": ne()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": ne()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": ne()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": ne()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": ne()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": ne()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": ne()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": ne()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": ne()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": ne()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": ne()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": ne()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": ne()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": ne()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": ne()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": ne()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": ne()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": ne()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [o, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ut, cn, Ds]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [o, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Bh = /* @__PURE__ */ Eh(Wh);
function uo(...o) {
  return Bh(ch(o));
}
const $h = Kd(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), bi = C.forwardRef(({ className: o, variant: l, size: s, asChild: u = !1, ...d }, f) => {
  const m = u ? Di : "button";
  return /* @__PURE__ */ W.jsx(
    m,
    {
      className: uo($h({ variant: l, size: s, className: o })),
      ref: f,
      ...d
    }
  );
});
bi.displayName = "Button";
const Gs = C.forwardRef(({ className: o, type: l, ...s }, u) => /* @__PURE__ */ W.jsx(
  "input",
  {
    type: l,
    className: uo(
      "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
      o
    ),
    ref: u,
    ...s
  }
));
Gs.displayName = "Input";
const ef = C.forwardRef(({ className: o, ...l }, s) => /* @__PURE__ */ W.jsx(
  "textarea",
  {
    className: uo(
      "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
      o
    ),
    ref: s,
    ...l
  }
));
ef.displayName = "Textarea";
var Vh = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Ot = Vh.reduce((o, l) => {
  const s = C.forwardRef((u, d) => {
    const { asChild: f, ...m } = u, p = f ? Di : l;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ W.jsx(p, { ...m, ref: d });
  });
  return s.displayName = `Primitive.${l}`, { ...o, [l]: s };
}, {});
function Hh(o, l) {
  o && ao.flushSync(() => o.dispatchEvent(l));
}
var Qh = "Label", tf = C.forwardRef((o, l) => /* @__PURE__ */ W.jsx(
  Ot.label,
  {
    ...o,
    ref: l,
    onMouseDown: (s) => {
      s.target.closest("button, input, select, textarea") || (o.onMouseDown?.(s), !s.defaultPrevented && s.detail > 1 && s.preventDefault());
    }
  }
));
tf.displayName = Qh;
var nf = tf;
const Kh = Kd(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), _i = C.forwardRef(({ className: o, ...l }, s) => /* @__PURE__ */ W.jsx(nf, { ref: s, className: uo(Kh(), o), ...l }));
_i.displayName = nf.displayName;
function pn(o, l, { checkForDefaultPrevented: s = !0 } = {}) {
  return function(d) {
    if (o?.(d), s === !1 || !d.defaultPrevented)
      return l?.(d);
  };
}
function rf(o, l = []) {
  let s = [];
  function u(f, m) {
    const p = C.createContext(m), v = s.length;
    s = [...s, m];
    function y(E) {
      const { scope: R, children: O, ...A } = E, k = R?.[o][v] || p, _ = C.useMemo(() => A, Object.values(A));
      return /* @__PURE__ */ W.jsx(k.Provider, { value: _, children: O });
    }
    function N(E, R) {
      const O = R?.[o][v] || p, A = C.useContext(O);
      if (A)
        return A;
      if (m !== void 0)
        return m;
      throw new Error(`\`${E}\` must be used within \`${f}\``);
    }
    return y.displayName = f + "Provider", [y, N];
  }
  const d = () => {
    const f = s.map((m) => C.createContext(m));
    return function(p) {
      const v = p?.[o] || f;
      return C.useMemo(
        () => ({ [`__scope${o}`]: { ...p, [o]: v } }),
        [p, v]
      );
    };
  };
  return d.scopeName = o, [u, Yh(d, ...l)];
}
function Yh(...o) {
  const l = o[0];
  if (o.length === 1)
    return l;
  const s = () => {
    const u = o.map((d) => ({
      useScope: d(),
      scopeName: d.scopeName
    }));
    return function(f) {
      const m = u.reduce((p, { useScope: v, scopeName: y }) => {
        const E = v(f)[`__scope${y}`];
        return { ...p, ...E };
      }, {});
      return C.useMemo(() => ({ [`__scope${l.scopeName}`]: m }), [m]);
    };
  };
  return s.scopeName = l.scopeName, s;
}
function mn(o) {
  const l = C.useRef(o);
  return C.useEffect(() => {
    l.current = o;
  }), C.useMemo(() => (...s) => l.current?.(...s), []);
}
function Gh(o, l = globalThis?.document) {
  const s = mn(o);
  C.useEffect(() => {
    const u = (d) => {
      d.key === "Escape" && s(d);
    };
    return l.addEventListener("keydown", u, { capture: !0 }), () => l.removeEventListener("keydown", u, { capture: !0 });
  }, [s, l]);
}
var Xh = "DismissableLayer", Xs = "dismissableLayer.update", Zh = "dismissableLayer.pointerDownOutside", Jh = "dismissableLayer.focusOutside", yd, of = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lf = C.forwardRef(
  (o, l) => {
    const {
      disableOutsidePointerEvents: s = !1,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: p,
      ...v
    } = o, y = C.useContext(of), [N, E] = C.useState(null), R = N?.ownerDocument ?? globalThis?.document, [, O] = C.useState({}), A = yn(l, (G) => E(G)), k = Array.from(y.layers), [_] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), T = k.indexOf(_), U = N ? k.indexOf(N) : -1, B = y.layersWithOutsidePointerEventsDisabled.size > 0, F = U >= T, $ = tg((G) => {
      const oe = G.target, me = [...y.branches].some((ce) => ce.contains(oe));
      !F || me || (d?.(G), m?.(G), G.defaultPrevented || p?.());
    }, R), q = ng((G) => {
      const oe = G.target;
      [...y.branches].some((ce) => ce.contains(oe)) || (f?.(G), m?.(G), G.defaultPrevented || p?.());
    }, R);
    return Gh((G) => {
      U === y.layers.size - 1 && (u?.(G), !G.defaultPrevented && p && (G.preventDefault(), p()));
    }, R), C.useEffect(() => {
      if (N)
        return s && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (yd = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(N)), y.layers.add(N), wd(), () => {
          s && y.layersWithOutsidePointerEventsDisabled.size === 1 && (R.body.style.pointerEvents = yd);
        };
    }, [N, R, s, y]), C.useEffect(() => () => {
      N && (y.layers.delete(N), y.layersWithOutsidePointerEventsDisabled.delete(N), wd());
    }, [N, y]), C.useEffect(() => {
      const G = () => O({});
      return document.addEventListener(Xs, G), () => document.removeEventListener(Xs, G);
    }, []), /* @__PURE__ */ W.jsx(
      Ot.div,
      {
        ...v,
        ref: A,
        style: {
          pointerEvents: B ? F ? "auto" : "none" : void 0,
          ...o.style
        },
        onFocusCapture: pn(o.onFocusCapture, q.onFocusCapture),
        onBlurCapture: pn(o.onBlurCapture, q.onBlurCapture),
        onPointerDownCapture: pn(
          o.onPointerDownCapture,
          $.onPointerDownCapture
        )
      }
    );
  }
);
lf.displayName = Xh;
var qh = "DismissableLayerBranch", eg = C.forwardRef((o, l) => {
  const s = C.useContext(of), u = C.useRef(null), d = yn(l, u);
  return C.useEffect(() => {
    const f = u.current;
    if (f)
      return s.branches.add(f), () => {
        s.branches.delete(f);
      };
  }, [s.branches]), /* @__PURE__ */ W.jsx(Ot.div, { ...o, ref: d });
});
eg.displayName = qh;
function tg(o, l = globalThis?.document) {
  const s = mn(o), u = C.useRef(!1), d = C.useRef(() => {
  });
  return C.useEffect(() => {
    const f = (p) => {
      if (p.target && !u.current) {
        let v = function() {
          sf(
            Zh,
            s,
            y,
            { discrete: !0 }
          );
        };
        const y = { originalEvent: p };
        p.pointerType === "touch" ? (l.removeEventListener("click", d.current), d.current = v, l.addEventListener("click", d.current, { once: !0 })) : v();
      } else
        l.removeEventListener("click", d.current);
      u.current = !1;
    }, m = window.setTimeout(() => {
      l.addEventListener("pointerdown", f);
    }, 0);
    return () => {
      window.clearTimeout(m), l.removeEventListener("pointerdown", f), l.removeEventListener("click", d.current);
    };
  }, [l, s]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => u.current = !0
  };
}
function ng(o, l = globalThis?.document) {
  const s = mn(o), u = C.useRef(!1);
  return C.useEffect(() => {
    const d = (f) => {
      f.target && !u.current && sf(Jh, s, { originalEvent: f }, {
        discrete: !1
      });
    };
    return l.addEventListener("focusin", d), () => l.removeEventListener("focusin", d);
  }, [l, s]), {
    onFocusCapture: () => u.current = !0,
    onBlurCapture: () => u.current = !1
  };
}
function wd() {
  const o = new CustomEvent(Xs);
  document.dispatchEvent(o);
}
function sf(o, l, s, { discrete: u }) {
  const d = s.originalEvent.target, f = new CustomEvent(o, { bubbles: !1, cancelable: !0, detail: s });
  l && d.addEventListener(o, l, { once: !0 }), u ? Hh(d, f) : d.dispatchEvent(f);
}
var Fs = 0;
function rg() {
  C.useEffect(() => {
    const o = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", o[0] ?? xd()), document.body.insertAdjacentElement("beforeend", o[1] ?? xd()), Fs++, () => {
      Fs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((l) => l.remove()), Fs--;
    };
  }, []);
}
function xd() {
  const o = document.createElement("span");
  return o.setAttribute("data-radix-focus-guard", ""), o.tabIndex = 0, o.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", o;
}
var Is = "focusScope.autoFocusOnMount", Us = "focusScope.autoFocusOnUnmount", kd = { bubbles: !1, cancelable: !0 }, og = "FocusScope", af = C.forwardRef((o, l) => {
  const {
    loop: s = !1,
    trapped: u = !1,
    onMountAutoFocus: d,
    onUnmountAutoFocus: f,
    ...m
  } = o, [p, v] = C.useState(null), y = mn(d), N = mn(f), E = C.useRef(null), R = yn(l, (k) => v(k)), O = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (u) {
      let k = function(B) {
        if (O.paused || !p)
          return;
        const F = B.target;
        p.contains(F) ? E.current = F : fn(E.current, { select: !0 });
      }, _ = function(B) {
        if (O.paused || !p)
          return;
        const F = B.relatedTarget;
        F !== null && (p.contains(F) || fn(E.current, { select: !0 }));
      }, T = function(B) {
        if (document.activeElement === document.body)
          for (const $ of B)
            $.removedNodes.length > 0 && fn(p);
      };
      document.addEventListener("focusin", k), document.addEventListener("focusout", _);
      const U = new MutationObserver(T);
      return p && U.observe(p, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", k), document.removeEventListener("focusout", _), U.disconnect();
      };
    }
  }, [u, p, O.paused]), C.useEffect(() => {
    if (p) {
      Ed.add(O);
      const k = document.activeElement;
      if (!p.contains(k)) {
        const T = new CustomEvent(Is, kd);
        p.addEventListener(Is, y), p.dispatchEvent(T), T.defaultPrevented || (ig(cg(uf(p)), { select: !0 }), document.activeElement === k && fn(p));
      }
      return () => {
        p.removeEventListener(Is, y), setTimeout(() => {
          const T = new CustomEvent(Us, kd);
          p.addEventListener(Us, N), p.dispatchEvent(T), T.defaultPrevented || fn(k ?? document.body, { select: !0 }), p.removeEventListener(Us, N), Ed.remove(O);
        }, 0);
      };
    }
  }, [p, y, N, O]);
  const A = C.useCallback(
    (k) => {
      if (!s && !u || O.paused)
        return;
      const _ = k.key === "Tab" && !k.altKey && !k.ctrlKey && !k.metaKey, T = document.activeElement;
      if (_ && T) {
        const U = k.currentTarget, [B, F] = lg(U);
        B && F ? !k.shiftKey && T === F ? (k.preventDefault(), s && fn(B, { select: !0 })) : k.shiftKey && T === B && (k.preventDefault(), s && fn(F, { select: !0 })) : T === U && k.preventDefault();
      }
    },
    [s, u, O.paused]
  );
  return /* @__PURE__ */ W.jsx(Ot.div, { tabIndex: -1, ...m, ref: R, onKeyDown: A });
});
af.displayName = og;
function ig(o, { select: l = !1 } = {}) {
  const s = document.activeElement;
  for (const u of o)
    if (fn(u, { select: l }), document.activeElement !== s)
      return;
}
function lg(o) {
  const l = uf(o), s = Sd(l, o), u = Sd(l.reverse(), o);
  return [s, u];
}
function uf(o) {
  const l = [], s = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (u) => {
      const d = u.tagName === "INPUT" && u.type === "hidden";
      return u.disabled || u.hidden || d ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; s.nextNode(); )
    l.push(s.currentNode);
  return l;
}
function Sd(o, l) {
  for (const s of o)
    if (!sg(s, { upTo: l }))
      return s;
}
function sg(o, { upTo: l }) {
  if (getComputedStyle(o).visibility === "hidden")
    return !0;
  for (; o; ) {
    if (l !== void 0 && o === l)
      return !1;
    if (getComputedStyle(o).display === "none")
      return !0;
    o = o.parentElement;
  }
  return !1;
}
function ag(o) {
  return o instanceof HTMLInputElement && "select" in o;
}
function fn(o, { select: l = !1 } = {}) {
  if (o && o.focus) {
    const s = document.activeElement;
    o.focus({ preventScroll: !0 }), o !== s && ag(o) && l && o.select();
  }
}
var Ed = ug();
function ug() {
  let o = [];
  return {
    add(l) {
      const s = o[0];
      l !== s && s?.pause(), o = Cd(o, l), o.unshift(l);
    },
    remove(l) {
      o = Cd(o, l), o[0]?.resume();
    }
  };
}
function Cd(o, l) {
  const s = [...o], u = s.indexOf(l);
  return u !== -1 && s.splice(u, 1), s;
}
function cg(o) {
  return o.filter((l) => l.tagName !== "A");
}
var zn = globalThis?.document ? C.useLayoutEffect : () => {
}, dg = rh["useId".toString()] || (() => {
}), fg = 0;
function pg(o) {
  const [l, s] = C.useState(dg());
  return zn(() => {
    o || s((u) => u ?? String(fg++));
  }, [o]), o || (l ? `radix-${l}` : "");
}
const mg = ["top", "right", "bottom", "left"], bt = Math.min, it = Math.max, zi = Math.round, Si = Math.floor, hn = (o) => ({
  x: o,
  y: o
}), hg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gg = {
  start: "end",
  end: "start"
};
function Zs(o, l, s) {
  return it(o, bt(l, s));
}
function Wt(o, l) {
  return typeof o == "function" ? o(l) : o;
}
function Bt(o) {
  return o.split("-")[0];
}
function gr(o) {
  return o.split("-")[1];
}
function ra(o) {
  return o === "x" ? "y" : "x";
}
function oa(o) {
  return o === "y" ? "height" : "width";
}
function gn(o) {
  return ["top", "bottom"].includes(Bt(o)) ? "y" : "x";
}
function ia(o) {
  return ra(gn(o));
}
function vg(o, l, s) {
  s === void 0 && (s = !1);
  const u = gr(o), d = ia(o), f = oa(d);
  let m = d === "x" ? u === (s ? "end" : "start") ? "right" : "left" : u === "start" ? "bottom" : "top";
  return l.reference[f] > l.floating[f] && (m = Li(m)), [m, Li(m)];
}
function yg(o) {
  const l = Li(o);
  return [Js(o), l, Js(l)];
}
function Js(o) {
  return o.replace(/start|end/g, (l) => gg[l]);
}
function wg(o, l, s) {
  const u = ["left", "right"], d = ["right", "left"], f = ["top", "bottom"], m = ["bottom", "top"];
  switch (o) {
    case "top":
    case "bottom":
      return s ? l ? d : u : l ? u : d;
    case "left":
    case "right":
      return l ? f : m;
    default:
      return [];
  }
}
function xg(o, l, s, u) {
  const d = gr(o);
  let f = wg(Bt(o), s === "start", u);
  return d && (f = f.map((m) => m + "-" + d), l && (f = f.concat(f.map(Js)))), f;
}
function Li(o) {
  return o.replace(/left|right|bottom|top/g, (l) => hg[l]);
}
function kg(o) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...o
  };
}
function cf(o) {
  return typeof o != "number" ? kg(o) : {
    top: o,
    right: o,
    bottom: o,
    left: o
  };
}
function Mi(o) {
  const {
    x: l,
    y: s,
    width: u,
    height: d
  } = o;
  return {
    width: u,
    height: d,
    top: s,
    left: l,
    right: l + u,
    bottom: s + d,
    x: l,
    y: s
  };
}
function Pd(o, l, s) {
  let {
    reference: u,
    floating: d
  } = o;
  const f = gn(l), m = ia(l), p = oa(m), v = Bt(l), y = f === "y", N = u.x + u.width / 2 - d.width / 2, E = u.y + u.height / 2 - d.height / 2, R = u[p] / 2 - d[p] / 2;
  let O;
  switch (v) {
    case "top":
      O = {
        x: N,
        y: u.y - d.height
      };
      break;
    case "bottom":
      O = {
        x: N,
        y: u.y + u.height
      };
      break;
    case "right":
      O = {
        x: u.x + u.width,
        y: E
      };
      break;
    case "left":
      O = {
        x: u.x - d.width,
        y: E
      };
      break;
    default:
      O = {
        x: u.x,
        y: u.y
      };
  }
  switch (gr(l)) {
    case "start":
      O[m] -= R * (s && y ? -1 : 1);
      break;
    case "end":
      O[m] += R * (s && y ? -1 : 1);
      break;
  }
  return O;
}
const Sg = async (o, l, s) => {
  const {
    placement: u = "bottom",
    strategy: d = "absolute",
    middleware: f = [],
    platform: m
  } = s, p = f.filter(Boolean), v = await (m.isRTL == null ? void 0 : m.isRTL(l));
  let y = await m.getElementRects({
    reference: o,
    floating: l,
    strategy: d
  }), {
    x: N,
    y: E
  } = Pd(y, u, v), R = u, O = {}, A = 0;
  for (let k = 0; k < p.length; k++) {
    const {
      name: _,
      fn: T
    } = p[k], {
      x: U,
      y: B,
      data: F,
      reset: $
    } = await T({
      x: N,
      y: E,
      initialPlacement: u,
      placement: R,
      strategy: d,
      middlewareData: O,
      rects: y,
      platform: m,
      elements: {
        reference: o,
        floating: l
      }
    });
    N = U ?? N, E = B ?? E, O = {
      ...O,
      [_]: {
        ...O[_],
        ...F
      }
    }, $ && A <= 50 && (A++, typeof $ == "object" && ($.placement && (R = $.placement), $.rects && (y = $.rects === !0 ? await m.getElementRects({
      reference: o,
      floating: l,
      strategy: d
    }) : $.rects), {
      x: N,
      y: E
    } = Pd(y, R, v)), k = -1);
  }
  return {
    x: N,
    y: E,
    placement: R,
    strategy: d,
    middlewareData: O
  };
};
async function lo(o, l) {
  var s;
  l === void 0 && (l = {});
  const {
    x: u,
    y: d,
    platform: f,
    rects: m,
    elements: p,
    strategy: v
  } = o, {
    boundary: y = "clippingAncestors",
    rootBoundary: N = "viewport",
    elementContext: E = "floating",
    altBoundary: R = !1,
    padding: O = 0
  } = Wt(l, o), A = cf(O), _ = p[R ? E === "floating" ? "reference" : "floating" : E], T = Mi(await f.getClippingRect({
    element: (s = await (f.isElement == null ? void 0 : f.isElement(_))) == null || s ? _ : _.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(p.floating)),
    boundary: y,
    rootBoundary: N,
    strategy: v
  })), U = E === "floating" ? {
    x: u,
    y: d,
    width: m.floating.width,
    height: m.floating.height
  } : m.reference, B = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(p.floating)), F = await (f.isElement == null ? void 0 : f.isElement(B)) ? await (f.getScale == null ? void 0 : f.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Mi(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: U,
    offsetParent: B,
    strategy: v
  }) : U);
  return {
    top: (T.top - $.top + A.top) / F.y,
    bottom: ($.bottom - T.bottom + A.bottom) / F.y,
    left: (T.left - $.left + A.left) / F.x,
    right: ($.right - T.right + A.right) / F.x
  };
}
const Eg = (o) => ({
  name: "arrow",
  options: o,
  async fn(l) {
    const {
      x: s,
      y: u,
      placement: d,
      rects: f,
      platform: m,
      elements: p,
      middlewareData: v
    } = l, {
      element: y,
      padding: N = 0
    } = Wt(o, l) || {};
    if (y == null)
      return {};
    const E = cf(N), R = {
      x: s,
      y: u
    }, O = ia(d), A = oa(O), k = await m.getDimensions(y), _ = O === "y", T = _ ? "top" : "left", U = _ ? "bottom" : "right", B = _ ? "clientHeight" : "clientWidth", F = f.reference[A] + f.reference[O] - R[O] - f.floating[A], $ = R[O] - f.reference[O], q = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(y));
    let G = q ? q[B] : 0;
    (!G || !await (m.isElement == null ? void 0 : m.isElement(q))) && (G = p.floating[B] || f.floating[A]);
    const oe = F / 2 - $ / 2, me = G / 2 - k[A] / 2 - 1, ce = bt(E[T], me), Se = bt(E[U], me), ne = ce, we = G - k[A] - Se, ue = G / 2 - k[A] / 2 + oe, xe = Zs(ne, ue, we), de = !v.arrow && gr(d) != null && ue !== xe && f.reference[A] / 2 - (ue < ne ? ce : Se) - k[A] / 2 < 0, J = de ? ue < ne ? ue - ne : ue - we : 0;
    return {
      [O]: R[O] + J,
      data: {
        [O]: xe,
        centerOffset: ue - xe - J,
        ...de && {
          alignmentOffset: J
        }
      },
      reset: de
    };
  }
}), Cg = function(o) {
  return o === void 0 && (o = {}), {
    name: "flip",
    options: o,
    async fn(l) {
      var s, u;
      const {
        placement: d,
        middlewareData: f,
        rects: m,
        initialPlacement: p,
        platform: v,
        elements: y
      } = l, {
        mainAxis: N = !0,
        crossAxis: E = !0,
        fallbackPlacements: R,
        fallbackStrategy: O = "bestFit",
        fallbackAxisSideDirection: A = "none",
        flipAlignment: k = !0,
        ..._
      } = Wt(o, l);
      if ((s = f.arrow) != null && s.alignmentOffset)
        return {};
      const T = Bt(d), U = gn(p), B = Bt(p) === p, F = await (v.isRTL == null ? void 0 : v.isRTL(y.floating)), $ = R || (B || !k ? [Li(p)] : yg(p)), q = A !== "none";
      !R && q && $.push(...xg(p, k, A, F));
      const G = [p, ...$], oe = await lo(l, _), me = [];
      let ce = ((u = f.flip) == null ? void 0 : u.overflows) || [];
      if (N && me.push(oe[T]), E) {
        const ue = vg(d, m, F);
        me.push(oe[ue[0]], oe[ue[1]]);
      }
      if (ce = [...ce, {
        placement: d,
        overflows: me
      }], !me.every((ue) => ue <= 0)) {
        var Se, ne;
        const ue = (((Se = f.flip) == null ? void 0 : Se.index) || 0) + 1, xe = G[ue];
        if (xe)
          return {
            data: {
              index: ue,
              overflows: ce
            },
            reset: {
              placement: xe
            }
          };
        let de = (ne = ce.filter((J) => J.overflows[0] <= 0).sort((J, j) => J.overflows[1] - j.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!de)
          switch (O) {
            case "bestFit": {
              var we;
              const J = (we = ce.filter((j) => {
                if (q) {
                  const V = gn(j.placement);
                  return V === U || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((V) => V > 0).reduce((V, H) => V + H, 0)]).sort((j, V) => j[1] - V[1])[0]) == null ? void 0 : we[0];
              J && (de = J);
              break;
            }
            case "initialPlacement":
              de = p;
              break;
          }
        if (d !== de)
          return {
            reset: {
              placement: de
            }
          };
      }
      return {};
    }
  };
};
function Nd(o, l) {
  return {
    top: o.top - l.height,
    right: o.right - l.width,
    bottom: o.bottom - l.height,
    left: o.left - l.width
  };
}
function Rd(o) {
  return mg.some((l) => o[l] >= 0);
}
const Pg = function(o) {
  return o === void 0 && (o = {}), {
    name: "hide",
    options: o,
    async fn(l) {
      const {
        rects: s
      } = l, {
        strategy: u = "referenceHidden",
        ...d
      } = Wt(o, l);
      switch (u) {
        case "referenceHidden": {
          const f = await lo(l, {
            ...d,
            elementContext: "reference"
          }), m = Nd(f, s.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: Rd(m)
            }
          };
        }
        case "escaped": {
          const f = await lo(l, {
            ...d,
            altBoundary: !0
          }), m = Nd(f, s.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: Rd(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ng(o, l) {
  const {
    placement: s,
    platform: u,
    elements: d
  } = o, f = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), m = Bt(s), p = gr(s), v = gn(s) === "y", y = ["left", "top"].includes(m) ? -1 : 1, N = f && v ? -1 : 1, E = Wt(l, o);
  let {
    mainAxis: R,
    crossAxis: O,
    alignmentAxis: A
  } = typeof E == "number" ? {
    mainAxis: E,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...E
  };
  return p && typeof A == "number" && (O = p === "end" ? A * -1 : A), v ? {
    x: O * N,
    y: R * y
  } : {
    x: R * y,
    y: O * N
  };
}
const Rg = function(o) {
  return o === void 0 && (o = 0), {
    name: "offset",
    options: o,
    async fn(l) {
      var s, u;
      const {
        x: d,
        y: f,
        placement: m,
        middlewareData: p
      } = l, v = await Ng(l, o);
      return m === ((s = p.offset) == null ? void 0 : s.placement) && (u = p.arrow) != null && u.alignmentOffset ? {} : {
        x: d + v.x,
        y: f + v.y,
        data: {
          ...v,
          placement: m
        }
      };
    }
  };
}, bg = function(o) {
  return o === void 0 && (o = {}), {
    name: "shift",
    options: o,
    async fn(l) {
      const {
        x: s,
        y: u,
        placement: d
      } = l, {
        mainAxis: f = !0,
        crossAxis: m = !1,
        limiter: p = {
          fn: (_) => {
            let {
              x: T,
              y: U
            } = _;
            return {
              x: T,
              y: U
            };
          }
        },
        ...v
      } = Wt(o, l), y = {
        x: s,
        y: u
      }, N = await lo(l, v), E = gn(Bt(d)), R = ra(E);
      let O = y[R], A = y[E];
      if (f) {
        const _ = R === "y" ? "top" : "left", T = R === "y" ? "bottom" : "right", U = O + N[_], B = O - N[T];
        O = Zs(U, O, B);
      }
      if (m) {
        const _ = E === "y" ? "top" : "left", T = E === "y" ? "bottom" : "right", U = A + N[_], B = A - N[T];
        A = Zs(U, A, B);
      }
      const k = p.fn({
        ...l,
        [R]: O,
        [E]: A
      });
      return {
        ...k,
        data: {
          x: k.x - s,
          y: k.y - u
        }
      };
    }
  };
}, _g = function(o) {
  return o === void 0 && (o = {}), {
    options: o,
    fn(l) {
      const {
        x: s,
        y: u,
        placement: d,
        rects: f,
        middlewareData: m
      } = l, {
        offset: p = 0,
        mainAxis: v = !0,
        crossAxis: y = !0
      } = Wt(o, l), N = {
        x: s,
        y: u
      }, E = gn(d), R = ra(E);
      let O = N[R], A = N[E];
      const k = Wt(p, l), _ = typeof k == "number" ? {
        mainAxis: k,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...k
      };
      if (v) {
        const B = R === "y" ? "height" : "width", F = f.reference[R] - f.floating[B] + _.mainAxis, $ = f.reference[R] + f.reference[B] - _.mainAxis;
        O < F ? O = F : O > $ && (O = $);
      }
      if (y) {
        var T, U;
        const B = R === "y" ? "width" : "height", F = ["top", "left"].includes(Bt(d)), $ = f.reference[E] - f.floating[B] + (F && ((T = m.offset) == null ? void 0 : T[E]) || 0) + (F ? 0 : _.crossAxis), q = f.reference[E] + f.reference[B] + (F ? 0 : ((U = m.offset) == null ? void 0 : U[E]) || 0) - (F ? _.crossAxis : 0);
        A < $ ? A = $ : A > q && (A = q);
      }
      return {
        [R]: O,
        [E]: A
      };
    }
  };
}, Og = function(o) {
  return o === void 0 && (o = {}), {
    name: "size",
    options: o,
    async fn(l) {
      const {
        placement: s,
        rects: u,
        platform: d,
        elements: f
      } = l, {
        apply: m = () => {
        },
        ...p
      } = Wt(o, l), v = await lo(l, p), y = Bt(s), N = gr(s), E = gn(s) === "y", {
        width: R,
        height: O
      } = u.floating;
      let A, k;
      y === "top" || y === "bottom" ? (A = y, k = N === (await (d.isRTL == null ? void 0 : d.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (k = y, A = N === "end" ? "top" : "bottom");
      const _ = O - v.top - v.bottom, T = R - v.left - v.right, U = bt(O - v[A], _), B = bt(R - v[k], T), F = !l.middlewareData.shift;
      let $ = U, q = B;
      if (E ? q = N || F ? bt(B, T) : T : $ = N || F ? bt(U, _) : _, F && !N) {
        const oe = it(v.left, 0), me = it(v.right, 0), ce = it(v.top, 0), Se = it(v.bottom, 0);
        E ? q = R - 2 * (oe !== 0 || me !== 0 ? oe + me : it(v.left, v.right)) : $ = O - 2 * (ce !== 0 || Se !== 0 ? ce + Se : it(v.top, v.bottom));
      }
      await m({
        ...l,
        availableWidth: q,
        availableHeight: $
      });
      const G = await d.getDimensions(f.floating);
      return R !== G.width || O !== G.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vr(o) {
  return df(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function lt(o) {
  var l;
  return (o == null || (l = o.ownerDocument) == null ? void 0 : l.defaultView) || window;
}
function $t(o) {
  var l;
  return (l = (df(o) ? o.ownerDocument : o.document) || window.document) == null ? void 0 : l.documentElement;
}
function df(o) {
  return o instanceof Node || o instanceof lt(o).Node;
}
function xt(o) {
  return o instanceof Element || o instanceof lt(o).Element;
}
function _t(o) {
  return o instanceof HTMLElement || o instanceof lt(o).HTMLElement;
}
function bd(o) {
  return typeof ShadowRoot > "u" ? !1 : o instanceof ShadowRoot || o instanceof lt(o).ShadowRoot;
}
function co(o) {
  const {
    overflow: l,
    overflowX: s,
    overflowY: u,
    display: d
  } = kt(o);
  return /auto|scroll|overlay|hidden|clip/.test(l + u + s) && !["inline", "contents"].includes(d);
}
function Ag(o) {
  return ["table", "td", "th"].includes(vr(o));
}
function Fi(o) {
  return [":popover-open", ":modal"].some((l) => {
    try {
      return o.matches(l);
    } catch {
      return !1;
    }
  });
}
function la(o) {
  const l = sa(), s = xt(o) ? kt(o) : o;
  return s.transform !== "none" || s.perspective !== "none" || (s.containerType ? s.containerType !== "normal" : !1) || !l && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !l && (s.filter ? s.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((u) => (s.willChange || "").includes(u)) || ["paint", "layout", "strict", "content"].some((u) => (s.contain || "").includes(u));
}
function Tg(o) {
  let l = vn(o);
  for (; _t(l) && !pr(l); ) {
    if (la(l))
      return l;
    if (Fi(l))
      return null;
    l = vn(l);
  }
  return null;
}
function sa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function pr(o) {
  return ["html", "body", "#document"].includes(vr(o));
}
function kt(o) {
  return lt(o).getComputedStyle(o);
}
function Ii(o) {
  return xt(o) ? {
    scrollLeft: o.scrollLeft,
    scrollTop: o.scrollTop
  } : {
    scrollLeft: o.scrollX,
    scrollTop: o.scrollY
  };
}
function vn(o) {
  if (vr(o) === "html")
    return o;
  const l = (
    // Step into the shadow DOM of the parent of a slotted node.
    o.assignedSlot || // DOM Element detected.
    o.parentNode || // ShadowRoot detected.
    bd(o) && o.host || // Fallback.
    $t(o)
  );
  return bd(l) ? l.host : l;
}
function ff(o) {
  const l = vn(o);
  return pr(l) ? o.ownerDocument ? o.ownerDocument.body : o.body : _t(l) && co(l) ? l : ff(l);
}
function so(o, l, s) {
  var u;
  l === void 0 && (l = []), s === void 0 && (s = !0);
  const d = ff(o), f = d === ((u = o.ownerDocument) == null ? void 0 : u.body), m = lt(d);
  if (f) {
    const p = qs(m);
    return l.concat(m, m.visualViewport || [], co(d) ? d : [], p && s ? so(p) : []);
  }
  return l.concat(d, so(d, [], s));
}
function qs(o) {
  return o.parent && Object.getPrototypeOf(o.parent) ? o.frameElement : null;
}
function pf(o) {
  const l = kt(o);
  let s = parseFloat(l.width) || 0, u = parseFloat(l.height) || 0;
  const d = _t(o), f = d ? o.offsetWidth : s, m = d ? o.offsetHeight : u, p = zi(s) !== f || zi(u) !== m;
  return p && (s = f, u = m), {
    width: s,
    height: u,
    $: p
  };
}
function aa(o) {
  return xt(o) ? o : o.contextElement;
}
function dr(o) {
  const l = aa(o);
  if (!_t(l))
    return hn(1);
  const s = l.getBoundingClientRect(), {
    width: u,
    height: d,
    $: f
  } = pf(l);
  let m = (f ? zi(s.width) : s.width) / u, p = (f ? zi(s.height) : s.height) / d;
  return (!m || !Number.isFinite(m)) && (m = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: m,
    y: p
  };
}
const zg = /* @__PURE__ */ hn(0);
function mf(o) {
  const l = lt(o);
  return !sa() || !l.visualViewport ? zg : {
    x: l.visualViewport.offsetLeft,
    y: l.visualViewport.offsetTop
  };
}
function Lg(o, l, s) {
  return l === void 0 && (l = !1), !s || l && s !== lt(o) ? !1 : l;
}
function Ln(o, l, s, u) {
  l === void 0 && (l = !1), s === void 0 && (s = !1);
  const d = o.getBoundingClientRect(), f = aa(o);
  let m = hn(1);
  l && (u ? xt(u) && (m = dr(u)) : m = dr(o));
  const p = Lg(f, s, u) ? mf(f) : hn(0);
  let v = (d.left + p.x) / m.x, y = (d.top + p.y) / m.y, N = d.width / m.x, E = d.height / m.y;
  if (f) {
    const R = lt(f), O = u && xt(u) ? lt(u) : u;
    let A = R, k = qs(A);
    for (; k && u && O !== A; ) {
      const _ = dr(k), T = k.getBoundingClientRect(), U = kt(k), B = T.left + (k.clientLeft + parseFloat(U.paddingLeft)) * _.x, F = T.top + (k.clientTop + parseFloat(U.paddingTop)) * _.y;
      v *= _.x, y *= _.y, N *= _.x, E *= _.y, v += B, y += F, A = lt(k), k = qs(A);
    }
  }
  return Mi({
    width: N,
    height: E,
    x: v,
    y
  });
}
function Mg(o) {
  let {
    elements: l,
    rect: s,
    offsetParent: u,
    strategy: d
  } = o;
  const f = d === "fixed", m = $t(u), p = l ? Fi(l.floating) : !1;
  if (u === m || p && f)
    return s;
  let v = {
    scrollLeft: 0,
    scrollTop: 0
  }, y = hn(1);
  const N = hn(0), E = _t(u);
  if ((E || !E && !f) && ((vr(u) !== "body" || co(m)) && (v = Ii(u)), _t(u))) {
    const R = Ln(u);
    y = dr(u), N.x = R.x + u.clientLeft, N.y = R.y + u.clientTop;
  }
  return {
    width: s.width * y.x,
    height: s.height * y.y,
    x: s.x * y.x - v.scrollLeft * y.x + N.x,
    y: s.y * y.y - v.scrollTop * y.y + N.y
  };
}
function jg(o) {
  return Array.from(o.getClientRects());
}
function hf(o) {
  return Ln($t(o)).left + Ii(o).scrollLeft;
}
function Dg(o) {
  const l = $t(o), s = Ii(o), u = o.ownerDocument.body, d = it(l.scrollWidth, l.clientWidth, u.scrollWidth, u.clientWidth), f = it(l.scrollHeight, l.clientHeight, u.scrollHeight, u.clientHeight);
  let m = -s.scrollLeft + hf(o);
  const p = -s.scrollTop;
  return kt(u).direction === "rtl" && (m += it(l.clientWidth, u.clientWidth) - d), {
    width: d,
    height: f,
    x: m,
    y: p
  };
}
function Fg(o, l) {
  const s = lt(o), u = $t(o), d = s.visualViewport;
  let f = u.clientWidth, m = u.clientHeight, p = 0, v = 0;
  if (d) {
    f = d.width, m = d.height;
    const y = sa();
    (!y || y && l === "fixed") && (p = d.offsetLeft, v = d.offsetTop);
  }
  return {
    width: f,
    height: m,
    x: p,
    y: v
  };
}
function Ig(o, l) {
  const s = Ln(o, !0, l === "fixed"), u = s.top + o.clientTop, d = s.left + o.clientLeft, f = _t(o) ? dr(o) : hn(1), m = o.clientWidth * f.x, p = o.clientHeight * f.y, v = d * f.x, y = u * f.y;
  return {
    width: m,
    height: p,
    x: v,
    y
  };
}
function _d(o, l, s) {
  let u;
  if (l === "viewport")
    u = Fg(o, s);
  else if (l === "document")
    u = Dg($t(o));
  else if (xt(l))
    u = Ig(l, s);
  else {
    const d = mf(o);
    u = {
      ...l,
      x: l.x - d.x,
      y: l.y - d.y
    };
  }
  return Mi(u);
}
function gf(o, l) {
  const s = vn(o);
  return s === l || !xt(s) || pr(s) ? !1 : kt(s).position === "fixed" || gf(s, l);
}
function Ug(o, l) {
  const s = l.get(o);
  if (s)
    return s;
  let u = so(o, [], !1).filter((p) => xt(p) && vr(p) !== "body"), d = null;
  const f = kt(o).position === "fixed";
  let m = f ? vn(o) : o;
  for (; xt(m) && !pr(m); ) {
    const p = kt(m), v = la(m);
    !v && p.position === "fixed" && (d = null), (f ? !v && !d : !v && p.position === "static" && !!d && ["absolute", "fixed"].includes(d.position) || co(m) && !v && gf(o, m)) ? u = u.filter((N) => N !== m) : d = p, m = vn(m);
  }
  return l.set(o, u), u;
}
function Wg(o) {
  let {
    element: l,
    boundary: s,
    rootBoundary: u,
    strategy: d
  } = o;
  const m = [...s === "clippingAncestors" ? Fi(l) ? [] : Ug(l, this._c) : [].concat(s), u], p = m[0], v = m.reduce((y, N) => {
    const E = _d(l, N, d);
    return y.top = it(E.top, y.top), y.right = bt(E.right, y.right), y.bottom = bt(E.bottom, y.bottom), y.left = it(E.left, y.left), y;
  }, _d(l, p, d));
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top
  };
}
function Bg(o) {
  const {
    width: l,
    height: s
  } = pf(o);
  return {
    width: l,
    height: s
  };
}
function $g(o, l, s) {
  const u = _t(l), d = $t(l), f = s === "fixed", m = Ln(o, !0, f, l);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const v = hn(0);
  if (u || !u && !f)
    if ((vr(l) !== "body" || co(d)) && (p = Ii(l)), u) {
      const E = Ln(l, !0, f, l);
      v.x = E.x + l.clientLeft, v.y = E.y + l.clientTop;
    } else
      d && (v.x = hf(d));
  const y = m.left + p.scrollLeft - v.x, N = m.top + p.scrollTop - v.y;
  return {
    x: y,
    y: N,
    width: m.width,
    height: m.height
  };
}
function Ws(o) {
  return kt(o).position === "static";
}
function Od(o, l) {
  return !_t(o) || kt(o).position === "fixed" ? null : l ? l(o) : o.offsetParent;
}
function vf(o, l) {
  const s = lt(o);
  if (Fi(o))
    return s;
  if (!_t(o)) {
    let d = vn(o);
    for (; d && !pr(d); ) {
      if (xt(d) && !Ws(d))
        return d;
      d = vn(d);
    }
    return s;
  }
  let u = Od(o, l);
  for (; u && Ag(u) && Ws(u); )
    u = Od(u, l);
  return u && pr(u) && Ws(u) && !la(u) ? s : u || Tg(o) || s;
}
const Vg = async function(o) {
  const l = this.getOffsetParent || vf, s = this.getDimensions, u = await s(o.floating);
  return {
    reference: $g(o.reference, await l(o.floating), o.strategy),
    floating: {
      x: 0,
      y: 0,
      width: u.width,
      height: u.height
    }
  };
};
function Hg(o) {
  return kt(o).direction === "rtl";
}
const Qg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mg,
  getDocumentElement: $t,
  getClippingRect: Wg,
  getOffsetParent: vf,
  getElementRects: Vg,
  getClientRects: jg,
  getDimensions: Bg,
  getScale: dr,
  isElement: xt,
  isRTL: Hg
};
function Kg(o, l) {
  let s = null, u;
  const d = $t(o);
  function f() {
    var p;
    clearTimeout(u), (p = s) == null || p.disconnect(), s = null;
  }
  function m(p, v) {
    p === void 0 && (p = !1), v === void 0 && (v = 1), f();
    const {
      left: y,
      top: N,
      width: E,
      height: R
    } = o.getBoundingClientRect();
    if (p || l(), !E || !R)
      return;
    const O = Si(N), A = Si(d.clientWidth - (y + E)), k = Si(d.clientHeight - (N + R)), _ = Si(y), U = {
      rootMargin: -O + "px " + -A + "px " + -k + "px " + -_ + "px",
      threshold: it(0, bt(1, v)) || 1
    };
    let B = !0;
    function F($) {
      const q = $[0].intersectionRatio;
      if (q !== v) {
        if (!B)
          return m();
        q ? m(!1, q) : u = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      s = new IntersectionObserver(F, {
        ...U,
        // Handle <iframe>s
        root: d.ownerDocument
      });
    } catch {
      s = new IntersectionObserver(F, U);
    }
    s.observe(o);
  }
  return m(!0), f;
}
function Yg(o, l, s, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: d = !0,
    ancestorResize: f = !0,
    elementResize: m = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: v = !1
  } = u, y = aa(o), N = d || f ? [...y ? so(y) : [], ...so(l)] : [];
  N.forEach((T) => {
    d && T.addEventListener("scroll", s, {
      passive: !0
    }), f && T.addEventListener("resize", s);
  });
  const E = y && p ? Kg(y, s) : null;
  let R = -1, O = null;
  m && (O = new ResizeObserver((T) => {
    let [U] = T;
    U && U.target === y && O && (O.unobserve(l), cancelAnimationFrame(R), R = requestAnimationFrame(() => {
      var B;
      (B = O) == null || B.observe(l);
    })), s();
  }), y && !v && O.observe(y), O.observe(l));
  let A, k = v ? Ln(o) : null;
  v && _();
  function _() {
    const T = Ln(o);
    k && (T.x !== k.x || T.y !== k.y || T.width !== k.width || T.height !== k.height) && s(), k = T, A = requestAnimationFrame(_);
  }
  return s(), () => {
    var T;
    N.forEach((U) => {
      d && U.removeEventListener("scroll", s), f && U.removeEventListener("resize", s);
    }), E?.(), (T = O) == null || T.disconnect(), O = null, v && cancelAnimationFrame(A);
  };
}
const Gg = Rg, Xg = bg, Zg = Cg, Jg = Og, qg = Pg, Ad = Eg, ev = _g, tv = (o, l, s) => {
  const u = /* @__PURE__ */ new Map(), d = {
    platform: Qg,
    ...s
  }, f = {
    ...d.platform,
    _c: u
  };
  return Sg(o, l, {
    ...d,
    platform: f
  });
};
var Oi = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
function ji(o, l) {
  if (o === l)
    return !0;
  if (typeof o != typeof l)
    return !1;
  if (typeof o == "function" && o.toString() === l.toString())
    return !0;
  let s, u, d;
  if (o && l && typeof o == "object") {
    if (Array.isArray(o)) {
      if (s = o.length, s !== l.length)
        return !1;
      for (u = s; u-- !== 0; )
        if (!ji(o[u], l[u]))
          return !1;
      return !0;
    }
    if (d = Object.keys(o), s = d.length, s !== Object.keys(l).length)
      return !1;
    for (u = s; u-- !== 0; )
      if (!{}.hasOwnProperty.call(l, d[u]))
        return !1;
    for (u = s; u-- !== 0; ) {
      const f = d[u];
      if (!(f === "_owner" && o.$$typeof) && !ji(o[f], l[f]))
        return !1;
    }
    return !0;
  }
  return o !== o && l !== l;
}
function yf(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Td(o, l) {
  const s = yf(o);
  return Math.round(l * s) / s;
}
function zd(o) {
  const l = C.useRef(o);
  return Oi(() => {
    l.current = o;
  }), l;
}
function nv(o) {
  o === void 0 && (o = {});
  const {
    placement: l = "bottom",
    strategy: s = "absolute",
    middleware: u = [],
    platform: d,
    elements: {
      reference: f,
      floating: m
    } = {},
    transform: p = !0,
    whileElementsMounted: v,
    open: y
  } = o, [N, E] = C.useState({
    x: 0,
    y: 0,
    strategy: s,
    placement: l,
    middlewareData: {},
    isPositioned: !1
  }), [R, O] = C.useState(u);
  ji(R, u) || O(u);
  const [A, k] = C.useState(null), [_, T] = C.useState(null), U = C.useCallback((J) => {
    J !== q.current && (q.current = J, k(J));
  }, []), B = C.useCallback((J) => {
    J !== G.current && (G.current = J, T(J));
  }, []), F = f || A, $ = m || _, q = C.useRef(null), G = C.useRef(null), oe = C.useRef(N), me = v != null, ce = zd(v), Se = zd(d), ne = C.useCallback(() => {
    if (!q.current || !G.current)
      return;
    const J = {
      placement: l,
      strategy: s,
      middleware: R
    };
    Se.current && (J.platform = Se.current), tv(q.current, G.current, J).then((j) => {
      const V = {
        ...j,
        isPositioned: !0
      };
      we.current && !ji(oe.current, V) && (oe.current = V, ao.flushSync(() => {
        E(V);
      }));
    });
  }, [R, l, s, Se]);
  Oi(() => {
    y === !1 && oe.current.isPositioned && (oe.current.isPositioned = !1, E((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [y]);
  const we = C.useRef(!1);
  Oi(() => (we.current = !0, () => {
    we.current = !1;
  }), []), Oi(() => {
    if (F && (q.current = F), $ && (G.current = $), F && $) {
      if (ce.current)
        return ce.current(F, $, ne);
      ne();
    }
  }, [F, $, ne, ce, me]);
  const ue = C.useMemo(() => ({
    reference: q,
    floating: G,
    setReference: U,
    setFloating: B
  }), [U, B]), xe = C.useMemo(() => ({
    reference: F,
    floating: $
  }), [F, $]), de = C.useMemo(() => {
    const J = {
      position: s,
      left: 0,
      top: 0
    };
    if (!xe.floating)
      return J;
    const j = Td(xe.floating, N.x), V = Td(xe.floating, N.y);
    return p ? {
      ...J,
      transform: "translate(" + j + "px, " + V + "px)",
      ...yf(xe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: s,
      left: j,
      top: V
    };
  }, [s, p, xe.floating, N.x, N.y]);
  return C.useMemo(() => ({
    ...N,
    update: ne,
    refs: ue,
    elements: xe,
    floatingStyles: de
  }), [N, ne, ue, xe, de]);
}
const rv = (o) => {
  function l(s) {
    return {}.hasOwnProperty.call(s, "current");
  }
  return {
    name: "arrow",
    options: o,
    fn(s) {
      const {
        element: u,
        padding: d
      } = typeof o == "function" ? o(s) : o;
      return u && l(u) ? u.current != null ? Ad({
        element: u.current,
        padding: d
      }).fn(s) : {} : u ? Ad({
        element: u,
        padding: d
      }).fn(s) : {};
    }
  };
}, ov = (o, l) => ({
  ...Gg(o),
  options: [o, l]
}), iv = (o, l) => ({
  ...Xg(o),
  options: [o, l]
}), lv = (o, l) => ({
  ...ev(o),
  options: [o, l]
}), sv = (o, l) => ({
  ...Zg(o),
  options: [o, l]
}), av = (o, l) => ({
  ...Jg(o),
  options: [o, l]
}), uv = (o, l) => ({
  ...qg(o),
  options: [o, l]
}), cv = (o, l) => ({
  ...rv(o),
  options: [o, l]
});
var dv = "Arrow", wf = C.forwardRef((o, l) => {
  const { children: s, width: u = 10, height: d = 5, ...f } = o;
  return /* @__PURE__ */ W.jsx(
    Ot.svg,
    {
      ...f,
      ref: l,
      width: u,
      height: d,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: o.asChild ? s : /* @__PURE__ */ W.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
wf.displayName = dv;
var fv = wf;
function pv(o) {
  const [l, s] = C.useState(void 0);
  return zn(() => {
    if (o) {
      s({ width: o.offsetWidth, height: o.offsetHeight });
      const u = new ResizeObserver((d) => {
        if (!Array.isArray(d) || !d.length)
          return;
        const f = d[0];
        let m, p;
        if ("borderBoxSize" in f) {
          const v = f.borderBoxSize, y = Array.isArray(v) ? v[0] : v;
          m = y.inlineSize, p = y.blockSize;
        } else
          m = o.offsetWidth, p = o.offsetHeight;
        s({ width: m, height: p });
      });
      return u.observe(o, { box: "border-box" }), () => u.unobserve(o);
    } else
      s(void 0);
  }, [o]), l;
}
var ua = "Popper", [xf, kf] = rf(ua), [mv, Sf] = xf(ua), Ef = (o) => {
  const { __scopePopper: l, children: s } = o, [u, d] = C.useState(null);
  return /* @__PURE__ */ W.jsx(mv, { scope: l, anchor: u, onAnchorChange: d, children: s });
};
Ef.displayName = ua;
var Cf = "PopperAnchor", Pf = C.forwardRef(
  (o, l) => {
    const { __scopePopper: s, virtualRef: u, ...d } = o, f = Sf(Cf, s), m = C.useRef(null), p = yn(l, m);
    return C.useEffect(() => {
      f.onAnchorChange(u?.current || m.current);
    }), u ? null : /* @__PURE__ */ W.jsx(Ot.div, { ...d, ref: p });
  }
);
Pf.displayName = Cf;
var ca = "PopperContent", [hv, gv] = xf(ca), Nf = C.forwardRef(
  (o, l) => {
    const {
      __scopePopper: s,
      side: u = "bottom",
      sideOffset: d = 0,
      align: f = "center",
      alignOffset: m = 0,
      arrowPadding: p = 0,
      avoidCollisions: v = !0,
      collisionBoundary: y = [],
      collisionPadding: N = 0,
      sticky: E = "partial",
      hideWhenDetached: R = !1,
      updatePositionStrategy: O = "optimized",
      onPlaced: A,
      ...k
    } = o, _ = Sf(ca, s), [T, U] = C.useState(null), B = yn(l, (ge) => U(ge)), [F, $] = C.useState(null), q = pv(F), G = q?.width ?? 0, oe = q?.height ?? 0, me = u + (f !== "center" ? "-" + f : ""), ce = typeof N == "number" ? N : { top: 0, right: 0, bottom: 0, left: 0, ...N }, Se = Array.isArray(y) ? y : [y], ne = Se.length > 0, we = {
      padding: ce,
      boundary: Se.filter(yv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ne
    }, { refs: ue, floatingStyles: xe, placement: de, isPositioned: J, middlewareData: j } = nv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: me,
      whileElementsMounted: (...ge) => Yg(...ge, {
        animationFrame: O === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        ov({ mainAxis: d + oe, alignmentAxis: m }),
        v && iv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: E === "partial" ? lv() : void 0,
          ...we
        }),
        v && sv({ ...we }),
        av({
          ...we,
          apply: ({ elements: ge, rects: ve, availableWidth: Ee, availableHeight: Qe }) => {
            const { width: Mn, height: po } = ve.reference, At = ge.floating.style;
            At.setProperty("--radix-popper-available-width", `${Ee}px`), At.setProperty("--radix-popper-available-height", `${Qe}px`), At.setProperty("--radix-popper-anchor-width", `${Mn}px`), At.setProperty("--radix-popper-anchor-height", `${po}px`);
          }
        }),
        F && cv({ element: F, padding: p }),
        wv({ arrowWidth: G, arrowHeight: oe }),
        R && uv({ strategy: "referenceHidden", ...we })
      ]
    }), [V, H] = _f(de), x = mn(A);
    zn(() => {
      J && x?.();
    }, [J, x]);
    const z = j.arrow?.x, ie = j.arrow?.y, se = j.arrow?.centerOffset !== 0, [fe, pe] = C.useState();
    return zn(() => {
      T && pe(window.getComputedStyle(T).zIndex);
    }, [T]), /* @__PURE__ */ W.jsx(
      "div",
      {
        ref: ue.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...xe,
          transform: J ? xe.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: fe,
          "--radix-popper-transform-origin": [
            j.transformOrigin?.x,
            j.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...j.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: o.dir,
        children: /* @__PURE__ */ W.jsx(
          hv,
          {
            scope: s,
            placedSide: V,
            onArrowChange: $,
            arrowX: z,
            arrowY: ie,
            shouldHideArrow: se,
            children: /* @__PURE__ */ W.jsx(
              Ot.div,
              {
                "data-side": V,
                "data-align": H,
                ...k,
                ref: B,
                style: {
                  ...k.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: J ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Nf.displayName = ca;
var Rf = "PopperArrow", vv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, bf = C.forwardRef(function(l, s) {
  const { __scopePopper: u, ...d } = l, f = gv(Rf, u), m = vv[f.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ W.jsx(
      "span",
      {
        ref: f.onArrowChange,
        style: {
          position: "absolute",
          left: f.arrowX,
          top: f.arrowY,
          [m]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[f.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[f.placedSide],
          visibility: f.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ W.jsx(
          fv,
          {
            ...d,
            ref: s,
            style: {
              ...d.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
bf.displayName = Rf;
function yv(o) {
  return o !== null;
}
var wv = (o) => ({
  name: "transformOrigin",
  options: o,
  fn(l) {
    const { placement: s, rects: u, middlewareData: d } = l, m = d.arrow?.centerOffset !== 0, p = m ? 0 : o.arrowWidth, v = m ? 0 : o.arrowHeight, [y, N] = _f(s), E = { start: "0%", center: "50%", end: "100%" }[N], R = (d.arrow?.x ?? 0) + p / 2, O = (d.arrow?.y ?? 0) + v / 2;
    let A = "", k = "";
    return y === "bottom" ? (A = m ? E : `${R}px`, k = `${-v}px`) : y === "top" ? (A = m ? E : `${R}px`, k = `${u.floating.height + v}px`) : y === "right" ? (A = `${-v}px`, k = m ? E : `${O}px`) : y === "left" && (A = `${u.floating.width + v}px`, k = m ? E : `${O}px`), { data: { x: A, y: k } };
  }
});
function _f(o) {
  const [l, s = "center"] = o.split("-");
  return [l, s];
}
var xv = Ef, Of = Pf, kv = Nf, Sv = bf, Ev = "Portal", Af = C.forwardRef((o, l) => {
  const { container: s, ...u } = o, [d, f] = C.useState(!1);
  zn(() => f(!0), []);
  const m = s || d && globalThis?.document?.body;
  return m ? th.createPortal(/* @__PURE__ */ W.jsx(Ot.div, { ...u, ref: l }), m) : null;
});
Af.displayName = Ev;
function Cv(o, l) {
  return C.useReducer((s, u) => l[s][u] ?? s, o);
}
var da = (o) => {
  const { present: l, children: s } = o, u = Pv(l), d = typeof s == "function" ? s({ present: u.isPresent }) : C.Children.only(s), f = yn(u.ref, Nv(d));
  return typeof s == "function" || u.isPresent ? C.cloneElement(d, { ref: f }) : null;
};
da.displayName = "Presence";
function Pv(o) {
  const [l, s] = C.useState(), u = C.useRef({}), d = C.useRef(o), f = C.useRef("none"), m = o ? "mounted" : "unmounted", [p, v] = Cv(m, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return C.useEffect(() => {
    const y = Ei(u.current);
    f.current = p === "mounted" ? y : "none";
  }, [p]), zn(() => {
    const y = u.current, N = d.current;
    if (N !== o) {
      const R = f.current, O = Ei(y);
      o ? v("MOUNT") : O === "none" || y?.display === "none" ? v("UNMOUNT") : v(N && R !== O ? "ANIMATION_OUT" : "UNMOUNT"), d.current = o;
    }
  }, [o, v]), zn(() => {
    if (l) {
      const y = (E) => {
        const O = Ei(u.current).includes(E.animationName);
        E.target === l && O && ao.flushSync(() => v("ANIMATION_END"));
      }, N = (E) => {
        E.target === l && (f.current = Ei(u.current));
      };
      return l.addEventListener("animationstart", N), l.addEventListener("animationcancel", y), l.addEventListener("animationend", y), () => {
        l.removeEventListener("animationstart", N), l.removeEventListener("animationcancel", y), l.removeEventListener("animationend", y);
      };
    } else
      v("ANIMATION_END");
  }, [l, v]), {
    isPresent: ["mounted", "unmountSuspended"].includes(p),
    ref: C.useCallback((y) => {
      y && (u.current = getComputedStyle(y)), s(y);
    }, [])
  };
}
function Ei(o) {
  return o?.animationName || "none";
}
function Nv(o) {
  let l = Object.getOwnPropertyDescriptor(o.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? o.ref : (l = Object.getOwnPropertyDescriptor(o, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? o.props.ref : o.props.ref || o.ref);
}
function Rv({
  prop: o,
  defaultProp: l,
  onChange: s = () => {
  }
}) {
  const [u, d] = bv({ defaultProp: l, onChange: s }), f = o !== void 0, m = f ? o : u, p = mn(s), v = C.useCallback(
    (y) => {
      if (f) {
        const E = typeof y == "function" ? y(o) : y;
        E !== o && p(E);
      } else
        d(y);
    },
    [f, o, d, p]
  );
  return [m, v];
}
function bv({
  defaultProp: o,
  onChange: l
}) {
  const s = C.useState(o), [u] = s, d = C.useRef(u), f = mn(l);
  return C.useEffect(() => {
    d.current !== u && (f(u), d.current = u);
  }, [u, d, f]), s;
}
var _v = function(o) {
  if (typeof document > "u")
    return null;
  var l = Array.isArray(o) ? o[0] : o;
  return l.ownerDocument.body;
}, sr = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Pi = {}, Bs = 0, Tf = function(o) {
  return o && (o.host || Tf(o.parentNode));
}, Ov = function(o, l) {
  return l.map(function(s) {
    if (o.contains(s))
      return s;
    var u = Tf(s);
    return u && o.contains(u) ? u : (console.error("aria-hidden", s, "in not contained inside", o, ". Doing nothing"), null);
  }).filter(function(s) {
    return !!s;
  });
}, Av = function(o, l, s, u) {
  var d = Ov(l, Array.isArray(o) ? o : [o]);
  Pi[s] || (Pi[s] = /* @__PURE__ */ new WeakMap());
  var f = Pi[s], m = [], p = /* @__PURE__ */ new Set(), v = new Set(d), y = function(E) {
    !E || p.has(E) || (p.add(E), y(E.parentNode));
  };
  d.forEach(y);
  var N = function(E) {
    !E || v.has(E) || Array.prototype.forEach.call(E.children, function(R) {
      if (p.has(R))
        N(R);
      else
        try {
          var O = R.getAttribute(u), A = O !== null && O !== "false", k = (sr.get(R) || 0) + 1, _ = (f.get(R) || 0) + 1;
          sr.set(R, k), f.set(R, _), m.push(R), k === 1 && A && Ci.set(R, !0), _ === 1 && R.setAttribute(s, "true"), A || R.setAttribute(u, "true");
        } catch (T) {
          console.error("aria-hidden: cannot operate on ", R, T);
        }
    });
  };
  return N(l), p.clear(), Bs++, function() {
    m.forEach(function(E) {
      var R = sr.get(E) - 1, O = f.get(E) - 1;
      sr.set(E, R), f.set(E, O), R || (Ci.has(E) || E.removeAttribute(u), Ci.delete(E)), O || E.removeAttribute(s);
    }), Bs--, Bs || (sr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Pi = {});
  };
}, Tv = function(o, l, s) {
  s === void 0 && (s = "data-aria-hidden");
  var u = Array.from(Array.isArray(o) ? o : [o]), d = l || _v(o);
  return d ? (u.push.apply(u, Array.from(d.querySelectorAll("[aria-live]"))), Av(u, d, s, "aria-hidden")) : function() {
    return null;
  };
}, Rt = function() {
  return Rt = Object.assign || function(l) {
    for (var s, u = 1, d = arguments.length; u < d; u++) {
      s = arguments[u];
      for (var f in s)
        Object.prototype.hasOwnProperty.call(s, f) && (l[f] = s[f]);
    }
    return l;
  }, Rt.apply(this, arguments);
};
function zf(o, l) {
  var s = {};
  for (var u in o)
    Object.prototype.hasOwnProperty.call(o, u) && l.indexOf(u) < 0 && (s[u] = o[u]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, u = Object.getOwnPropertySymbols(o); d < u.length; d++)
      l.indexOf(u[d]) < 0 && Object.prototype.propertyIsEnumerable.call(o, u[d]) && (s[u[d]] = o[u[d]]);
  return s;
}
function zv(o, l, s) {
  if (s || arguments.length === 2)
    for (var u = 0, d = l.length, f; u < d; u++)
      (f || !(u in l)) && (f || (f = Array.prototype.slice.call(l, 0, u)), f[u] = l[u]);
  return o.concat(f || Array.prototype.slice.call(l));
}
var Ai = "right-scroll-bar-position", Ti = "width-before-scroll-bar", Lv = "with-scroll-bars-hidden", Mv = "--removed-body-scroll-bar-size";
function $s(o, l) {
  return typeof o == "function" ? o(l) : o && (o.current = l), o;
}
function jv(o, l) {
  var s = C.useState(function() {
    return {
      // value
      value: o,
      // last callback
      callback: l,
      // "memoized" public interface
      facade: {
        get current() {
          return s.value;
        },
        set current(u) {
          var d = s.value;
          d !== u && (s.value = u, s.callback(u, d));
        }
      }
    };
  })[0];
  return s.callback = l, s.facade;
}
var Dv = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Ld = /* @__PURE__ */ new WeakMap();
function Fv(o, l) {
  var s = jv(l || null, function(u) {
    return o.forEach(function(d) {
      return $s(d, u);
    });
  });
  return Dv(function() {
    var u = Ld.get(s);
    if (u) {
      var d = new Set(u), f = new Set(o), m = s.current;
      d.forEach(function(p) {
        f.has(p) || $s(p, null);
      }), f.forEach(function(p) {
        d.has(p) || $s(p, m);
      });
    }
    Ld.set(s, o);
  }, [o]), s;
}
function Iv(o) {
  return o;
}
function Uv(o, l) {
  l === void 0 && (l = Iv);
  var s = [], u = !1, d = {
    read: function() {
      if (u)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return s.length ? s[s.length - 1] : o;
    },
    useMedium: function(f) {
      var m = l(f, u);
      return s.push(m), function() {
        s = s.filter(function(p) {
          return p !== m;
        });
      };
    },
    assignSyncMedium: function(f) {
      for (u = !0; s.length; ) {
        var m = s;
        s = [], m.forEach(f);
      }
      s = {
        push: function(p) {
          return f(p);
        },
        filter: function() {
          return s;
        }
      };
    },
    assignMedium: function(f) {
      u = !0;
      var m = [];
      if (s.length) {
        var p = s;
        s = [], p.forEach(f), m = s;
      }
      var v = function() {
        var N = m;
        m = [], N.forEach(f);
      }, y = function() {
        return Promise.resolve().then(v);
      };
      y(), s = {
        push: function(N) {
          m.push(N), y();
        },
        filter: function(N) {
          return m = m.filter(N), s;
        }
      };
    }
  };
  return d;
}
function Wv(o) {
  o === void 0 && (o = {});
  var l = Uv(null);
  return l.options = Rt({ async: !0, ssr: !1 }, o), l;
}
var Lf = function(o) {
  var l = o.sideCar, s = zf(o, ["sideCar"]);
  if (!l)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var u = l.read();
  if (!u)
    throw new Error("Sidecar medium not found");
  return C.createElement(u, Rt({}, s));
};
Lf.isSideCarExport = !0;
function Bv(o, l) {
  return o.useMedium(l), Lf;
}
var Mf = Wv(), Vs = function() {
}, Ui = C.forwardRef(function(o, l) {
  var s = C.useRef(null), u = C.useState({
    onScrollCapture: Vs,
    onWheelCapture: Vs,
    onTouchMoveCapture: Vs
  }), d = u[0], f = u[1], m = o.forwardProps, p = o.children, v = o.className, y = o.removeScrollBar, N = o.enabled, E = o.shards, R = o.sideCar, O = o.noIsolation, A = o.inert, k = o.allowPinchZoom, _ = o.as, T = _ === void 0 ? "div" : _, U = o.gapMode, B = zf(o, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), F = R, $ = Fv([s, l]), q = Rt(Rt({}, B), d);
  return C.createElement(
    C.Fragment,
    null,
    N && C.createElement(F, { sideCar: Mf, removeScrollBar: y, shards: E, noIsolation: O, inert: A, setCallbacks: f, allowPinchZoom: !!k, lockRef: s, gapMode: U }),
    m ? C.cloneElement(C.Children.only(p), Rt(Rt({}, q), { ref: $ })) : C.createElement(T, Rt({}, q, { className: v, ref: $ }), p)
  );
});
Ui.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ui.classNames = {
  fullWidth: Ti,
  zeroRight: Ai
};
var Md, $v = function() {
  if (Md)
    return Md;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Vv() {
  if (!document)
    return null;
  var o = document.createElement("style");
  o.type = "text/css";
  var l = $v();
  return l && o.setAttribute("nonce", l), o;
}
function Hv(o, l) {
  o.styleSheet ? o.styleSheet.cssText = l : o.appendChild(document.createTextNode(l));
}
function Qv(o) {
  var l = document.head || document.getElementsByTagName("head")[0];
  l.appendChild(o);
}
var Kv = function() {
  var o = 0, l = null;
  return {
    add: function(s) {
      o == 0 && (l = Vv()) && (Hv(l, s), Qv(l)), o++;
    },
    remove: function() {
      o--, !o && l && (l.parentNode && l.parentNode.removeChild(l), l = null);
    }
  };
}, Yv = function() {
  var o = Kv();
  return function(l, s) {
    C.useEffect(function() {
      return o.add(l), function() {
        o.remove();
      };
    }, [l && s]);
  };
}, jf = function() {
  var o = Yv(), l = function(s) {
    var u = s.styles, d = s.dynamic;
    return o(u, d), null;
  };
  return l;
}, Gv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Hs = function(o) {
  return parseInt(o || "", 10) || 0;
}, Xv = function(o) {
  var l = window.getComputedStyle(document.body), s = l[o === "padding" ? "paddingLeft" : "marginLeft"], u = l[o === "padding" ? "paddingTop" : "marginTop"], d = l[o === "padding" ? "paddingRight" : "marginRight"];
  return [Hs(s), Hs(u), Hs(d)];
}, Zv = function(o) {
  if (o === void 0 && (o = "margin"), typeof window > "u")
    return Gv;
  var l = Xv(o), s = document.documentElement.clientWidth, u = window.innerWidth;
  return {
    left: l[0],
    top: l[1],
    right: l[2],
    gap: Math.max(0, u - s + l[2] - l[0])
  };
}, Jv = jf(), fr = "data-scroll-locked", qv = function(o, l, s, u) {
  var d = o.left, f = o.top, m = o.right, p = o.gap;
  return s === void 0 && (s = "margin"), `
  .`.concat(Lv, ` {
   overflow: hidden `).concat(u, `;
   padding-right: `).concat(p, "px ").concat(u, `;
  }
  body[`).concat(fr, `] {
    overflow: hidden `).concat(u, `;
    overscroll-behavior: contain;
    `).concat([
    l && "position: relative ".concat(u, ";"),
    s === "margin" && `
    padding-left: `.concat(d, `px;
    padding-top: `).concat(f, `px;
    padding-right: `).concat(m, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p, "px ").concat(u, `;
    `),
    s === "padding" && "padding-right: ".concat(p, "px ").concat(u, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ai, ` {
    right: `).concat(p, "px ").concat(u, `;
  }
  
  .`).concat(Ti, ` {
    margin-right: `).concat(p, "px ").concat(u, `;
  }
  
  .`).concat(Ai, " .").concat(Ai, ` {
    right: 0 `).concat(u, `;
  }
  
  .`).concat(Ti, " .").concat(Ti, ` {
    margin-right: 0 `).concat(u, `;
  }
  
  body[`).concat(fr, `] {
    `).concat(Mv, ": ").concat(p, `px;
  }
`);
}, jd = function() {
  var o = parseInt(document.body.getAttribute(fr) || "0", 10);
  return isFinite(o) ? o : 0;
}, e0 = function() {
  C.useEffect(function() {
    return document.body.setAttribute(fr, (jd() + 1).toString()), function() {
      var o = jd() - 1;
      o <= 0 ? document.body.removeAttribute(fr) : document.body.setAttribute(fr, o.toString());
    };
  }, []);
}, t0 = function(o) {
  var l = o.noRelative, s = o.noImportant, u = o.gapMode, d = u === void 0 ? "margin" : u;
  e0();
  var f = C.useMemo(function() {
    return Zv(d);
  }, [d]);
  return C.createElement(Jv, { styles: qv(f, !l, d, s ? "" : "!important") });
}, ea = !1;
if (typeof window < "u")
  try {
    var Ni = Object.defineProperty({}, "passive", {
      get: function() {
        return ea = !0, !0;
      }
    });
    window.addEventListener("test", Ni, Ni), window.removeEventListener("test", Ni, Ni);
  } catch {
    ea = !1;
  }
var ar = ea ? { passive: !1 } : !1, n0 = function(o) {
  return o.tagName === "TEXTAREA";
}, Df = function(o, l) {
  var s = window.getComputedStyle(o);
  return (
    // not-not-scrollable
    s[l] !== "hidden" && // contains scroll inside self
    !(s.overflowY === s.overflowX && !n0(o) && s[l] === "visible")
  );
}, r0 = function(o) {
  return Df(o, "overflowY");
}, o0 = function(o) {
  return Df(o, "overflowX");
}, Dd = function(o, l) {
  var s = l.ownerDocument, u = l;
  do {
    typeof ShadowRoot < "u" && u instanceof ShadowRoot && (u = u.host);
    var d = Ff(o, u);
    if (d) {
      var f = If(o, u), m = f[1], p = f[2];
      if (m > p)
        return !0;
    }
    u = u.parentNode;
  } while (u && u !== s.body);
  return !1;
}, i0 = function(o) {
  var l = o.scrollTop, s = o.scrollHeight, u = o.clientHeight;
  return [
    l,
    s,
    u
  ];
}, l0 = function(o) {
  var l = o.scrollLeft, s = o.scrollWidth, u = o.clientWidth;
  return [
    l,
    s,
    u
  ];
}, Ff = function(o, l) {
  return o === "v" ? r0(l) : o0(l);
}, If = function(o, l) {
  return o === "v" ? i0(l) : l0(l);
}, s0 = function(o, l) {
  return o === "h" && l === "rtl" ? -1 : 1;
}, a0 = function(o, l, s, u, d) {
  var f = s0(o, window.getComputedStyle(l).direction), m = f * u, p = s.target, v = l.contains(p), y = !1, N = m > 0, E = 0, R = 0;
  do {
    var O = If(o, p), A = O[0], k = O[1], _ = O[2], T = k - _ - f * A;
    (A || T) && Ff(o, p) && (E += T, R += A), p instanceof ShadowRoot ? p = p.host : p = p.parentNode;
  } while (
    // portaled content
    !v && p !== document.body || // self content
    v && (l.contains(p) || l === p)
  );
  return (N && (d && Math.abs(E) < 1 || !d && m > E) || !N && (d && Math.abs(R) < 1 || !d && -m > R)) && (y = !0), y;
}, Ri = function(o) {
  return "changedTouches" in o ? [o.changedTouches[0].clientX, o.changedTouches[0].clientY] : [0, 0];
}, Fd = function(o) {
  return [o.deltaX, o.deltaY];
}, Id = function(o) {
  return o && "current" in o ? o.current : o;
}, u0 = function(o, l) {
  return o[0] === l[0] && o[1] === l[1];
}, c0 = function(o) {
  return `
  .block-interactivity-`.concat(o, ` {pointer-events: none;}
  .allow-interactivity-`).concat(o, ` {pointer-events: all;}
`);
}, d0 = 0, ur = [];
function f0(o) {
  var l = C.useRef([]), s = C.useRef([0, 0]), u = C.useRef(), d = C.useState(d0++)[0], f = C.useState(jf)[0], m = C.useRef(o);
  C.useEffect(function() {
    m.current = o;
  }, [o]), C.useEffect(function() {
    if (o.inert) {
      document.body.classList.add("block-interactivity-".concat(d));
      var k = zv([o.lockRef.current], (o.shards || []).map(Id), !0).filter(Boolean);
      return k.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(d));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(d)), k.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(d));
        });
      };
    }
  }, [o.inert, o.lockRef.current, o.shards]);
  var p = C.useCallback(function(k, _) {
    if ("touches" in k && k.touches.length === 2)
      return !m.current.allowPinchZoom;
    var T = Ri(k), U = s.current, B = "deltaX" in k ? k.deltaX : U[0] - T[0], F = "deltaY" in k ? k.deltaY : U[1] - T[1], $, q = k.target, G = Math.abs(B) > Math.abs(F) ? "h" : "v";
    if ("touches" in k && G === "h" && q.type === "range")
      return !1;
    var oe = Dd(G, q);
    if (!oe)
      return !0;
    if (oe ? $ = G : ($ = G === "v" ? "h" : "v", oe = Dd(G, q)), !oe)
      return !1;
    if (!u.current && "changedTouches" in k && (B || F) && (u.current = $), !$)
      return !0;
    var me = u.current || $;
    return a0(me, _, k, me === "h" ? B : F, !0);
  }, []), v = C.useCallback(function(k) {
    var _ = k;
    if (!(!ur.length || ur[ur.length - 1] !== f)) {
      var T = "deltaY" in _ ? Fd(_) : Ri(_), U = l.current.filter(function($) {
        return $.name === _.type && ($.target === _.target || _.target === $.shadowParent) && u0($.delta, T);
      })[0];
      if (U && U.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!U) {
        var B = (m.current.shards || []).map(Id).filter(Boolean).filter(function($) {
          return $.contains(_.target);
        }), F = B.length > 0 ? p(_, B[0]) : !m.current.noIsolation;
        F && _.cancelable && _.preventDefault();
      }
    }
  }, []), y = C.useCallback(function(k, _, T, U) {
    var B = { name: k, delta: _, target: T, should: U, shadowParent: p0(T) };
    l.current.push(B), setTimeout(function() {
      l.current = l.current.filter(function(F) {
        return F !== B;
      });
    }, 1);
  }, []), N = C.useCallback(function(k) {
    s.current = Ri(k), u.current = void 0;
  }, []), E = C.useCallback(function(k) {
    y(k.type, Fd(k), k.target, p(k, o.lockRef.current));
  }, []), R = C.useCallback(function(k) {
    y(k.type, Ri(k), k.target, p(k, o.lockRef.current));
  }, []);
  C.useEffect(function() {
    return ur.push(f), o.setCallbacks({
      onScrollCapture: E,
      onWheelCapture: E,
      onTouchMoveCapture: R
    }), document.addEventListener("wheel", v, ar), document.addEventListener("touchmove", v, ar), document.addEventListener("touchstart", N, ar), function() {
      ur = ur.filter(function(k) {
        return k !== f;
      }), document.removeEventListener("wheel", v, ar), document.removeEventListener("touchmove", v, ar), document.removeEventListener("touchstart", N, ar);
    };
  }, []);
  var O = o.removeScrollBar, A = o.inert;
  return C.createElement(
    C.Fragment,
    null,
    A ? C.createElement(f, { styles: c0(d) }) : null,
    O ? C.createElement(t0, { gapMode: o.gapMode }) : null
  );
}
function p0(o) {
  for (var l = null; o !== null; )
    o instanceof ShadowRoot && (l = o.host, o = o.host), o = o.parentNode;
  return l;
}
const m0 = Bv(Mf, f0);
var Uf = C.forwardRef(function(o, l) {
  return C.createElement(Ui, Rt({}, o, { ref: l, sideCar: m0 }));
});
Uf.classNames = Ui.classNames;
const h0 = Uf;
var fa = "Popover", [Wf, M0] = rf(fa, [
  kf
]), fo = kf(), [g0, wn] = Wf(fa), Bf = (o) => {
  const {
    __scopePopover: l,
    children: s,
    open: u,
    defaultOpen: d,
    onOpenChange: f,
    modal: m = !1
  } = o, p = fo(l), v = C.useRef(null), [y, N] = C.useState(!1), [E = !1, R] = Rv({
    prop: u,
    defaultProp: d,
    onChange: f
  });
  return /* @__PURE__ */ W.jsx(xv, { ...p, children: /* @__PURE__ */ W.jsx(
    g0,
    {
      scope: l,
      contentId: pg(),
      triggerRef: v,
      open: E,
      onOpenChange: R,
      onOpenToggle: C.useCallback(() => R((O) => !O), [R]),
      hasCustomAnchor: y,
      onCustomAnchorAdd: C.useCallback(() => N(!0), []),
      onCustomAnchorRemove: C.useCallback(() => N(!1), []),
      modal: m,
      children: s
    }
  ) });
};
Bf.displayName = fa;
var $f = "PopoverAnchor", v0 = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = wn($f, s), f = fo(s), { onCustomAnchorAdd: m, onCustomAnchorRemove: p } = d;
    return C.useEffect(() => (m(), () => p()), [m, p]), /* @__PURE__ */ W.jsx(Of, { ...f, ...u, ref: l });
  }
);
v0.displayName = $f;
var Vf = "PopoverTrigger", Hf = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = wn(Vf, s), f = fo(s), m = yn(l, d.triggerRef), p = /* @__PURE__ */ W.jsx(
      Ot.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": d.open,
        "aria-controls": d.contentId,
        "data-state": Xf(d.open),
        ...u,
        ref: m,
        onClick: pn(o.onClick, d.onOpenToggle)
      }
    );
    return d.hasCustomAnchor ? p : /* @__PURE__ */ W.jsx(Of, { asChild: !0, ...f, children: p });
  }
);
Hf.displayName = Vf;
var pa = "PopoverPortal", [y0, w0] = Wf(pa, {
  forceMount: void 0
}), Qf = (o) => {
  const { __scopePopover: l, forceMount: s, children: u, container: d } = o, f = wn(pa, l);
  return /* @__PURE__ */ W.jsx(y0, { scope: l, forceMount: s, children: /* @__PURE__ */ W.jsx(da, { present: s || f.open, children: /* @__PURE__ */ W.jsx(Af, { asChild: !0, container: d, children: u }) }) });
};
Qf.displayName = pa;
var mr = "PopoverContent", Kf = C.forwardRef(
  (o, l) => {
    const s = w0(mr, o.__scopePopover), { forceMount: u = s.forceMount, ...d } = o, f = wn(mr, o.__scopePopover);
    return /* @__PURE__ */ W.jsx(da, { present: u || f.open, children: f.modal ? /* @__PURE__ */ W.jsx(x0, { ...d, ref: l }) : /* @__PURE__ */ W.jsx(k0, { ...d, ref: l }) });
  }
);
Kf.displayName = mr;
var x0 = C.forwardRef(
  (o, l) => {
    const s = wn(mr, o.__scopePopover), u = C.useRef(null), d = yn(l, u), f = C.useRef(!1);
    return C.useEffect(() => {
      const m = u.current;
      if (m)
        return Tv(m);
    }, []), /* @__PURE__ */ W.jsx(h0, { as: Di, allowPinchZoom: !0, children: /* @__PURE__ */ W.jsx(
      Yf,
      {
        ...o,
        ref: d,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: pn(o.onCloseAutoFocus, (m) => {
          m.preventDefault(), f.current || s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: pn(
          o.onPointerDownOutside,
          (m) => {
            const p = m.detail.originalEvent, v = p.button === 0 && p.ctrlKey === !0, y = p.button === 2 || v;
            f.current = y;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: pn(
          o.onFocusOutside,
          (m) => m.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), k0 = C.forwardRef(
  (o, l) => {
    const s = wn(mr, o.__scopePopover), u = C.useRef(!1), d = C.useRef(!1);
    return /* @__PURE__ */ W.jsx(
      Yf,
      {
        ...o,
        ref: l,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (f) => {
          o.onCloseAutoFocus?.(f), f.defaultPrevented || (u.current || s.triggerRef.current?.focus(), f.preventDefault()), u.current = !1, d.current = !1;
        },
        onInteractOutside: (f) => {
          o.onInteractOutside?.(f), f.defaultPrevented || (u.current = !0, f.detail.originalEvent.type === "pointerdown" && (d.current = !0));
          const m = f.target;
          s.triggerRef.current?.contains(m) && f.preventDefault(), f.detail.originalEvent.type === "focusin" && d.current && f.preventDefault();
        }
      }
    );
  }
), Yf = C.forwardRef(
  (o, l) => {
    const {
      __scopePopover: s,
      trapFocus: u,
      onOpenAutoFocus: d,
      onCloseAutoFocus: f,
      disableOutsidePointerEvents: m,
      onEscapeKeyDown: p,
      onPointerDownOutside: v,
      onFocusOutside: y,
      onInteractOutside: N,
      ...E
    } = o, R = wn(mr, s), O = fo(s);
    return rg(), /* @__PURE__ */ W.jsx(
      af,
      {
        asChild: !0,
        loop: !0,
        trapped: u,
        onMountAutoFocus: d,
        onUnmountAutoFocus: f,
        children: /* @__PURE__ */ W.jsx(
          lf,
          {
            asChild: !0,
            disableOutsidePointerEvents: m,
            onInteractOutside: N,
            onEscapeKeyDown: p,
            onPointerDownOutside: v,
            onFocusOutside: y,
            onDismiss: () => R.onOpenChange(!1),
            children: /* @__PURE__ */ W.jsx(
              kv,
              {
                "data-state": Xf(R.open),
                role: "dialog",
                id: R.contentId,
                ...O,
                ...E,
                ref: l,
                style: {
                  ...E.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Gf = "PopoverClose", S0 = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = wn(Gf, s);
    return /* @__PURE__ */ W.jsx(
      Ot.button,
      {
        type: "button",
        ...u,
        ref: l,
        onClick: pn(o.onClick, () => d.onOpenChange(!1))
      }
    );
  }
);
S0.displayName = Gf;
var E0 = "PopoverArrow", C0 = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...u } = o, d = fo(s);
    return /* @__PURE__ */ W.jsx(Sv, { ...d, ...u, ref: l });
  }
);
C0.displayName = E0;
function Xf(o) {
  return o ? "open" : "closed";
}
var P0 = Bf, N0 = Hf, R0 = Qf, Zf = Kf;
const b0 = P0, _0 = N0, Jf = C.forwardRef(({ className: o, align: l = "center", sideOffset: s = 4, ...u }, d) => /* @__PURE__ */ W.jsx(R0, { children: /* @__PURE__ */ W.jsx(
  Zf,
  {
    ref: d,
    align: l,
    sideOffset: s,
    className: uo(
      "z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      o
    ),
    ...u
  }
) }));
Jf.displayName = Zf.displayName;
const Ud = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}.widget{--background: 0 0% 100%;--foreground: 222.2 84% 4.9%;--card: 0 0% 100%;--card-foreground: 222.2 84% 4.9%;--popover: 0 0% 100%;--popover-foreground: 222.2 84% 4.9%;--primary: 222.2 47.4% 11.2%;--primary-foreground: 210 40% 98%;--secondary: 210 40% 96.1%;--secondary-foreground: 222.2 47.4% 11.2%;--muted: 210 40% 96.1%;--muted-foreground: 215.4 16.3% 46.9%;--accent: 210 40% 96.1%;--accent-foreground: 222.2 47.4% 11.2%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 210 40% 98%;--border: 214.3 31.8% 91.4%;--input: 214.3 31.8% 91.4%;--ring: 222.2 84% 4.9%;--radius: .5rem}.dark .widget{--background: 222.2 84% 4.9%;--foreground: 210 40% 98%;--card: 222.2 84% 4.9%;--card-foreground: 210 40% 98%;--popover: 222.2 84% 4.9%;--popover-foreground: 210 40% 98%;--primary: 210 40% 98%;--primary-foreground: 222.2 47.4% 11.2%;--secondary: 217.2 32.6% 17.5%;--secondary-foreground: 210 40% 98%;--muted: 217.2 32.6% 17.5%;--muted-foreground: 215 20.2% 65.1%;--accent: 217.2 32.6% 17.5%;--accent-foreground: 210 40% 98%;--destructive: 0 62.8% 30.6%;--destructive-foreground: 210 40% 98%;--border: 217.2 32.6% 17.5%;--input: 217.2 32.6% 17.5%;--ring: 212.7 26.8% 83.9%}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.fixed{position:fixed}.bottom-4{bottom:1rem}.right-4{right:1rem}.z-50{z-index:50}.mr-2{margin-right:.5rem}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-5{height:1.25rem}.h-9{height:2.25rem}.min-h-\\[100px\\]{min-height:100px}.min-h-\\[80px\\]{min-height:80px}.w-10{width:2.5rem}.w-5{width:1.25rem}.w-72{width:18rem}.w-full{width:100%}.max-w-md{max-width:28rem}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.border{border-width:1px}.border-slate-200{--tw-border-opacity: 1;border-color:rgb(226 232 240 / var(--tw-border-opacity))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.bg-slate-900{--tw-bg-opacity: 1;background-color:rgb(15 23 42 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-4{padding:1rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.leading-none{line-height:1}.text-slate-50{--tw-text-opacity: 1;color:rgb(248 250 252 / var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity))}.text-slate-950{--tw-text-opacity: 1;color:rgb(2 6 23 / var(--tw-text-opacity))}.underline-offset-4{text-underline-offset:4px}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-white{--tw-ring-offset-color: #fff}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.placeholder\\:text-slate-500::-moz-placeholder{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.placeholder\\:text-slate-500::placeholder{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.hover\\:scale-105:hover{--tw-scale-x: 1.05;--tw-scale-y: 1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-red-500\\/90:hover{background-color:#ef4444e6}.hover\\:bg-slate-100:hover{--tw-bg-opacity: 1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.hover\\:bg-slate-100\\/80:hover{background-color:#f1f5f9cc}.hover\\:bg-slate-900\\/90:hover{background-color:#0f172ae6}.hover\\:text-slate-900:hover{--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-slate-950:focus-visible{--tw-ring-opacity: 1;--tw-ring-color: rgb(2 6 23 / var(--tw-ring-opacity))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity: initial;--tw-enter-scale: initial;--tw-enter-rotate: initial;--tw-enter-translate-x: initial;--tw-enter-translate-y: initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity: initial;--tw-exit-scale: initial;--tw-exit-rotate: initial;--tw-exit-translate-x: initial;--tw-exit-translate-y: initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity: 0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity: 0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale: .95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale: .95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y: -.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x: .5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x: -.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y: .5rem}.dark\\:border-slate-800:is(.dark *){--tw-border-opacity: 1;border-color:rgb(30 41 59 / var(--tw-border-opacity))}.dark\\:bg-red-900:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(127 29 29 / var(--tw-bg-opacity))}.dark\\:bg-slate-50:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.dark\\:bg-slate-800:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}.dark\\:bg-slate-950:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(2 6 23 / var(--tw-bg-opacity))}.dark\\:text-slate-50:is(.dark *){--tw-text-opacity: 1;color:rgb(248 250 252 / var(--tw-text-opacity))}.dark\\:text-slate-900:is(.dark *){--tw-text-opacity: 1;color:rgb(15 23 42 / var(--tw-text-opacity))}.dark\\:ring-offset-slate-950:is(.dark *){--tw-ring-offset-color: #020617}.dark\\:placeholder\\:text-slate-400:is(.dark *)::-moz-placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.dark\\:placeholder\\:text-slate-400:is(.dark *)::placeholder{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.dark\\:hover\\:bg-red-900\\/90:hover:is(.dark *){background-color:#7f1d1de6}.dark\\:hover\\:bg-slate-50\\/90:hover:is(.dark *){background-color:#f8fafce6}.dark\\:hover\\:bg-slate-800:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}.dark\\:hover\\:bg-slate-800\\/80:hover:is(.dark *){background-color:#1e293bcc}.dark\\:hover\\:text-slate-50:hover:is(.dark *){--tw-text-opacity: 1;color:rgb(248 250 252 / var(--tw-text-opacity))}.dark\\:focus-visible\\:ring-slate-300:focus-visible:is(.dark *){--tw-ring-opacity: 1;--tw-ring-color: rgb(203 213 225 / var(--tw-ring-opacity))}
`, O0 = () => {
  const [o, l] = C.useState(3), [s, u] = C.useState(!1), d = (p) => {
    l(p + 1);
  }, f = (p) => o > p ? "#000000" : "#ffffff", m = (p) => {
    p.preventDefault();
    const v = p.target, y = {
      name: v.name.value,
      email: v.email.value,
      feedback: v.feedback.value,
      rating: o
    };
    u(!0), console.log(y);
  };
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    /* @__PURE__ */ W.jsx("style", { children: Ud }),
    /* @__PURE__ */ W.jsx("div", { className: "widget fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ W.jsxs(b0, { children: [
      /* @__PURE__ */ W.jsx(_0, { asChild: !0, children: /* @__PURE__ */ W.jsxs(bi, { className: "rounded-full shadow-lg hover:scale-105", children: [
        /* @__PURE__ */ W.jsx(T0, { className: "mr-2 h-5 w-5" }),
        "Feedback"
      ] }) }),
      /* @__PURE__ */ W.jsxs(Jf, { className: "widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md", children: [
        /* @__PURE__ */ W.jsx("style", { children: Ud }),
        s ? /* @__PURE__ */ W.jsxs("div", { className: "flex flex-col items-center justify-center space-y-4", children: [
          /* @__PURE__ */ W.jsx("h3", { className: "text-lg font-bold", children: "Thank you for your feedback!" }),
          /* @__PURE__ */ W.jsx(bi, { onClick: () => u(!1), children: "Send another feedback" })
        ] }) : /* @__PURE__ */ W.jsxs("div", { children: [
          /* @__PURE__ */ W.jsx("h3", { className: "text-lg font-bold", children: "Send us your feedback" }),
          /* @__PURE__ */ W.jsxs("form", { className: "space-y-2", onSubmit: m, children: [
            /* @__PURE__ */ W.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ W.jsx(_i, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ W.jsx(Gs, { id: "name", placeholder: "Enter your name" })
              ] }),
              /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ W.jsx(_i, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ W.jsx(
                  Gs,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ W.jsx(_i, { htmlFor: "feedback", children: "Feedback" }),
              /* @__PURE__ */ W.jsx(
                ef,
                {
                  id: "feedback",
                  placeholder: "Tell us what you think!",
                  className: "min-h-[100px]"
                }
              )
            ] }),
            /* @__PURE__ */ W.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ W.jsx("div", { className: "flex items-center gap-2", children: [...Array(5)].map((p, v) => /* @__PURE__ */ W.jsx(
                A0,
                {
                  style: { fill: f(v) },
                  className: "h-5 w-5 cursor-pointer",
                  onClick: () => d(v)
                },
                v
              )) }),
              /* @__PURE__ */ W.jsx(bi, { type: "submit", children: "Submit" })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function A0(o) {
  return /* @__PURE__ */ W.jsx(
    "svg",
    {
      ...o,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ W.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    }
  );
}
function T0(o) {
  return /* @__PURE__ */ W.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      children: /* @__PURE__ */ W.jsx("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })
    }
  );
}
const z0 = (o) => o.replace(/-([a-z])/g, (l, s) => s.toUpperCase());
class L0 extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const l = this.getPropsFromAttributes();
    Qs.createRoot(this.shadowRoot).render(/* @__PURE__ */ W.jsx(O0, { ...l }));
  }
  getPropsFromAttributes() {
    const l = {};
    for (const { name: s, value: u } of this.attributes)
      l[z0(s)] = u;
    return l;
  }
}
customElements.define("my-widget", L0);
