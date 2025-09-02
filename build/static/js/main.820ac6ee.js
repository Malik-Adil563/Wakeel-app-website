/*! For license information please see main.820ac6ee.js.LICENSE.txt */
(() => {
  'use strict';
  var e = {
      483: (e, t, n) => {
        e.exports = n(592);
      },
      556: (e, t, n) => {
        var r = n(557),
          a = n(483),
          l = n(998);
        function i(e) {
          var t = 'https://react.dev/errors/' + e;
          if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
          }
          return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
        }
        function o(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function s(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function c(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
          }
          return null;
        }
        function u(e) {
          if (s(e) !== e) throw Error(i(188));
        }
        function d(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = d(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var f = Object.assign,
          p = Symbol.for('react.element'),
          h = Symbol.for('react.transitional.element'),
          m = Symbol.for('react.portal'),
          g = Symbol.for('react.fragment'),
          v = Symbol.for('react.strict_mode'),
          y = Symbol.for('react.profiler'),
          b = Symbol.for('react.provider'),
          x = Symbol.for('react.consumer'),
          w = Symbol.for('react.context'),
          k = Symbol.for('react.forward_ref'),
          S = Symbol.for('react.suspense'),
          E = Symbol.for('react.suspense_list'),
          N = Symbol.for('react.memo'),
          C = Symbol.for('react.lazy');
        Symbol.for('react.scope');
        var j = Symbol.for('react.activity');
        (Symbol.for('react.legacy_hidden'), Symbol.for('react.tracing_marker'));
        var T = Symbol.for('react.memo_cache_sentinel');
        Symbol.for('react.view_transition');
        var P = Symbol.iterator;
        function L(e) {
          return null === e || 'object' !== typeof e ? null : 'function' === typeof (e = (P && e[P]) || e['@@iterator']) ? e : null;
        }
        var M = Symbol.for('react.client.reference');
        function z(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.$$typeof === M ? null : e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case g:
              return 'Fragment';
            case y:
              return 'Profiler';
            case v:
              return 'StrictMode';
            case S:
              return 'Suspense';
            case E:
              return 'SuspenseList';
            case j:
              return 'Activity';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case m:
                return 'Portal';
              case w:
                return (e.displayName || 'Context') + '.Provider';
              case x:
                return (e._context.displayName || 'Context') + '.Consumer';
              case k:
                var t = e.render;
                return ((e = e.displayName) || (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'), e);
              case N:
                return null !== (t = e.displayName || null) ? t : z(e.type) || 'Memo';
              case C:
                ((t = e._payload), (e = e._init));
                try {
                  return z(e(t));
                } catch (n) {}
            }
          return null;
        }
        var _ = Array.isArray,
          O = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          A = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          R = { pending: !1, data: null, method: null, action: null },
          D = [],
          I = -1;
        function F(e) {
          return { current: e };
        }
        function W(e) {
          0 > I || ((e.current = D[I]), (D[I] = null), I--);
        }
        function B(e, t) {
          (I++, (D[I] = e.current), (e.current = t));
        }
        var H = F(null),
          V = F(null),
          U = F(null),
          q = F(null);
        function G(e, t) {
          switch ((B(U, t), B(V, e), B(H, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? ad(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI))) e = ld((t = ad(t)), e);
              else
                switch (e) {
                  case 'svg':
                    e = 1;
                    break;
                  case 'math':
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          (W(H), B(H, e));
        }
        function Y() {
          (W(H), W(V), W(U));
        }
        function $(e) {
          null !== e.memoizedState && B(q, e);
          var t = H.current,
            n = ld(t, e.type);
          t !== n && (B(V, e), B(H, n));
        }
        function Q(e) {
          (V.current === e && (W(H), W(V)), q.current === e && (W(q), ($d._currentValue = R)));
        }
        var X = Object.prototype.hasOwnProperty,
          K = r.unstable_scheduleCallback,
          J = r.unstable_cancelCallback,
          Z = r.unstable_shouldYield,
          ee = r.unstable_requestPaint,
          te = r.unstable_now,
          ne = r.unstable_getCurrentPriorityLevel,
          re = r.unstable_ImmediatePriority,
          ae = r.unstable_UserBlockingPriority,
          le = r.unstable_NormalPriority,
          ie = r.unstable_LowPriority,
          oe = r.unstable_IdlePriority,
          se = r.log,
          ce = r.unstable_setDisableYieldValue,
          ue = null,
          de = null;
        function fe(e) {
          if (('function' === typeof se && ce(e), de && 'function' === typeof de.setStrictMode))
            try {
              de.setStrictMode(ue, e);
            } catch (t) {}
        }
        var pe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((he(e) / me) | 0)) | 0;
              },
          he = Math.log,
          me = Math.LN2;
        var ge = 256,
          ve = 4194304;
        function ye(e) {
          var t = 42 & e;
          if (0 !== t) return t;
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
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194048 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
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
              return e;
          }
        }
        function be(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var a = 0,
            l = e.suspendedLanes,
            i = e.pingedLanes;
          e = e.warmLanes;
          var o = 134217727 & r;
          return (
            0 !== o
              ? 0 !== (r = o & ~l)
                ? (a = ye(r))
                : 0 !== (i &= o)
                  ? (a = ye(i))
                  : n || (0 !== (n = o & ~e) && (a = ye(n)))
              : 0 !== (o = r & ~l)
                ? (a = ye(o))
                : 0 !== i
                  ? (a = ye(i))
                  : n || (0 !== (n = r & ~e) && (a = ye(n))),
            0 === a ? 0 : 0 !== t && t !== a && 0 === (t & l) && ((l = a & -a) >= (n = t & -t) || (32 === l && 0 !== (4194048 & n))) ? t : a
          );
        }
        function xe(e, t) {
          return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
        }
        function we(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ke() {
          var e = ge;
          return (0 === (4194048 & (ge <<= 1)) && (ge = 256), e);
        }
        function Se() {
          var e = ve;
          return (0 === (62914560 & (ve <<= 1)) && (ve = 4194304), e);
        }
        function Ee(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ne(e, t) {
          ((e.pendingLanes |= t), 268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function Ce(e, t, n) {
          ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
          var r = 31 - pe(t);
          ((e.entangledLanes |= t), (e.entanglements[r] = 1073741824 | e.entanglements[r] | (4194090 & n)));
        }
        function je(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - pe(n),
              a = 1 << r;
            ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
          }
        }
        function Te(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
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
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function Pe(e) {
          return 2 < (e &= -e) ? (8 < e ? (0 !== (134217727 & e) ? 32 : 268435456) : 8) : 2;
        }
        function Le() {
          var e = A.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : uf(e.type);
        }
        var Me = Math.random().toString(36).slice(2),
          ze = '__reactFiber$' + Me,
          _e = '__reactProps$' + Me,
          Oe = '__reactContainer$' + Me,
          Ae = '__reactEvents$' + Me,
          Re = '__reactListeners$' + Me,
          De = '__reactHandles$' + Me,
          Ie = '__reactResources$' + Me,
          Fe = '__reactMarker$' + Me;
        function We(e) {
          (delete e[ze], delete e[_e], delete e[Ae], delete e[Re], delete e[De]);
        }
        function Be(e) {
          var t = e[ze];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Oe] || n[ze])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = bd(e); null !== e; ) {
                  if ((n = e[ze])) return n;
                  e = bd(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function He(e) {
          if ((e = e[ze] || e[Oe])) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
          }
          return null;
        }
        function Ve(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(i(33));
        }
        function Ue(e) {
          var t = e[Ie];
          return (t || (t = e[Ie] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
        }
        function qe(e) {
          e[Fe] = !0;
        }
        var Ge = new Set(),
          Ye = {};
        function $e(e, t) {
          (Qe(e, t), Qe(e + 'Capture', t));
        }
        function Qe(e, t) {
          for (Ye[e] = t, e = 0; e < t.length; e++) Ge.add(t[e]);
        }
        var Xe,
          Ke,
          Je = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
          ),
          Ze = {},
          et = {};
        function tt(e, t, n) {
          if (((a = t), X.call(et, a) || (!X.call(Ze, a) && (Je.test(a) ? (et[a] = !0) : ((Ze[a] = !0), 0)))))
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case 'undefined':
                case 'function':
                case 'symbol':
                  return void e.removeAttribute(t);
                case 'boolean':
                  var r = t.toLowerCase().slice(0, 5);
                  if ('data-' !== r && 'aria-' !== r) return void e.removeAttribute(t);
              }
              e.setAttribute(t, '' + n);
            }
          var a;
        }
        function nt(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case 'undefined':
              case 'function':
              case 'symbol':
              case 'boolean':
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, '' + n);
          }
        }
        function rt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case 'undefined':
              case 'function':
              case 'symbol':
              case 'boolean':
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, '' + r);
          }
        }
        function at(e) {
          if (void 0 === Xe)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              ((Xe = (t && t[1]) || ''), (Ke = -1 < n.stack.indexOf('\n    at') ? ' (<anonymous>)' : -1 < n.stack.indexOf('@') ? '@unknown:0:0' : ''));
            }
          return '\n' + Xe + e + Ke;
        }
        var lt = !1;
        function it(e, t) {
          if (!e || lt) return '';
          lt = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, 'props', {
                        set: function () {
                          throw Error();
                        },
                      }),
                      'object' === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (l) {
                        r = l;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (i) {
                      r = i;
                    }
                    (n = e()) && 'function' === typeof n.catch && n.catch(function () {});
                  }
                } catch (o) {
                  if (o && r && 'string' === typeof o.stack) return [o.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, 'name');
            a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
            var l = r.DetermineComponentFrameRoot(),
              i = l[0],
              o = l[1];
            if (i && o) {
              var s = i.split('\n'),
                c = o.split('\n');
              for (a = r = 0; r < s.length && !s[r].includes('DetermineComponentFrameRoot'); ) r++;
              for (; a < c.length && !c[a].includes('DetermineComponentFrameRoot'); ) a++;
              if (r === s.length || a === c.length) for (r = s.length - 1, a = c.length - 1; 1 <= r && 0 <= a && s[r] !== c[a]; ) a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (s[r] !== c[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || s[r] !== c[a])) {
                        var u = '\n' + s[r].replace(' at new ', ' at ');
                        return (e.displayName && u.includes('<anonymous>') && (u = u.replace('<anonymous>', e.displayName)), u);
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            ((lt = !1), (Error.prepareStackTrace = n));
          }
          return (n = e ? e.displayName || e.name : '') ? at(n) : '';
        }
        function ot(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return at(e.type);
            case 16:
              return at('Lazy');
            case 13:
              return at('Suspense');
            case 19:
              return at('SuspenseList');
            case 0:
            case 15:
              return it(e.type, !1);
            case 11:
              return it(e.type.render, !1);
            case 1:
              return it(e.type, !0);
            case 31:
              return at('Activity');
            default:
              return '';
          }
        }
        function st(e) {
          try {
            var t = '';
            do {
              ((t += ot(e)), (e = e.return));
            } while (e);
            return t;
          } catch (n) {
            return '\nError generating stack: ' + n.message + '\n' + n.stack;
          }
        }
        function ct(e) {
          switch (typeof e) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function ut(e) {
          var t = e.type;
          return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
        }
        function dt(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ut(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (!e.hasOwnProperty(t) && 'undefined' !== typeof n && 'function' === typeof n.get && 'function' === typeof n.set) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      ((r = '' + e), l.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (e && (r = ut(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0));
        }
        function pt(e) {
          if ('undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var ht = /[\n"\\]/g;
        function mt(e) {
          return e.replace(ht, function (e) {
            return '\\' + e.charCodeAt(0).toString(16) + ' ';
          });
        }
        function gt(e, t, n, r, a, l, i, o) {
          ((e.name = ''),
            null != i && 'function' !== typeof i && 'symbol' !== typeof i && 'boolean' !== typeof i ? (e.type = i) : e.removeAttribute('type'),
            null != t
              ? 'number' === i
                ? ((0 === t && '' === e.value) || e.value != t) && (e.value = '' + ct(t))
                : e.value !== '' + ct(t) && (e.value = '' + ct(t))
              : ('submit' !== i && 'reset' !== i) || e.removeAttribute('value'),
            null != t ? yt(e, i, ct(t)) : null != n ? yt(e, i, ct(n)) : null != r && e.removeAttribute('value'),
            null == a && null != l && (e.defaultChecked = !!l),
            null != a && (e.checked = a && 'function' !== typeof a && 'symbol' !== typeof a),
            null != o && 'function' !== typeof o && 'symbol' !== typeof o && 'boolean' !== typeof o ? (e.name = '' + ct(o)) : e.removeAttribute('name'));
        }
        function vt(e, t, n, r, a, l, i, o) {
          if ((null != l && 'function' !== typeof l && 'symbol' !== typeof l && 'boolean' !== typeof l && (e.type = l), null != t || null != n)) {
            if (!(('submit' !== l && 'reset' !== l) || (void 0 !== t && null !== t))) return;
            ((n = null != n ? '' + ct(n) : ''), (t = null != t ? '' + ct(t) : n), o || t === e.value || (e.value = t), (e.defaultValue = t));
          }
          ((r = 'function' !== typeof (r = null != r ? r : a) && 'symbol' !== typeof r && !!r),
            (e.checked = o ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != i && 'function' !== typeof i && 'symbol' !== typeof i && 'boolean' !== typeof i && (e.name = i));
        }
        function yt(e, t, n) {
          ('number' === t && pt(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
            for (n = 0; n < e.length; n++) ((a = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0));
          } else {
            for (n = '' + ct(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n) return ((e[a].selected = !0), void (r && (e[a].defaultSelected = !0)));
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function xt(e, t, n) {
          null == t || ((t = '' + ct(t)) !== e.value && (e.value = t), null != n) ? (e.defaultValue = null != n ? '' + ct(n) : '') : e.defaultValue !== t && (e.defaultValue = t);
        }
        function wt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(i(92));
              if (_(r)) {
                if (1 < r.length) throw Error(i(93));
                r = r[0];
              }
              n = r;
            }
            (null == n && (n = ''), (t = n));
          }
          ((n = ct(t)), (e.defaultValue = n), (r = e.textContent) === n && '' !== r && null !== r && (e.value = r));
        }
        function kt(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var St = new Set(
          'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' ',
          ),
        );
        function Et(e, t, n) {
          var r = 0 === t.indexOf('--');
          null == n || 'boolean' === typeof n || '' === n
            ? r
              ? e.setProperty(t, '')
              : 'float' === t
                ? (e.cssFloat = '')
                : (e[t] = '')
            : r
              ? e.setProperty(t, n)
              : 'number' !== typeof n || 0 === n || St.has(t)
                ? 'float' === t
                  ? (e.cssFloat = n)
                  : (e[t] = ('' + n).trim())
                : (e[t] = n + 'px');
        }
        function Nt(e, t, n) {
          if (null != t && 'object' !== typeof t) throw Error(i(62));
          if (((e = e.style), null != n)) {
            for (var r in n) !n.hasOwnProperty(r) || (null != t && t.hasOwnProperty(r)) || (0 === r.indexOf('--') ? e.setProperty(r, '') : 'float' === r ? (e.cssFloat = '') : (e[r] = ''));
            for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Et(e, a, r));
          } else for (var l in t) t.hasOwnProperty(l) && Et(e, l, t[l]);
        }
        function Ct(e) {
          if (-1 === e.indexOf('-')) return !1;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var jt = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
          ]),
          Tt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Pt(e) {
          return Tt.test('' + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Lt = null;
        function Mt(e) {
          return ((e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e);
        }
        var zt = null,
          _t = null;
        function Ot(e) {
          var t = He(e);
          if (t && (e = t.stateNode)) {
            var n = e[_e] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case 'input':
                if ((gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (n = n.querySelectorAll('input[name="' + mt('' + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[_e] || null;
                      if (!a) throw Error(i(90));
                      gt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                    }
                  }
                  for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case 'textarea':
                xt(e, n.value, n.defaultValue);
                break e;
              case 'select':
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var At = !1;
        function Rt(e, t, n) {
          if (At) return e(t, n);
          At = !0;
          try {
            return e(t);
          } finally {
            if (((At = !1), (null !== zt || null !== _t) && (Bc(), zt && ((t = zt), (e = _t), (_t = zt = null), Ot(t), e)))) for (t = 0; t < e.length; t++) Ot(e[t]);
          }
        }
        function Dt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[_e] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              ((r = !r.disabled) || (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)), (e = !r));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var It = !('undefined' === typeof window || 'undefined' === typeof window.document || 'undefined' === typeof window.document.createElement),
          Ft = !1;
        if (It)
          try {
            var Wt = {};
            (Object.defineProperty(Wt, 'passive', {
              get: function () {
                Ft = !0;
              },
            }),
              window.addEventListener('test', Wt, Wt),
              window.removeEventListener('test', Wt, Wt));
          } catch (Of) {
            Ft = !1;
          }
        var Bt = null,
          Ht = null,
          Vt = null;
        function Ut() {
          if (Vt) return Vt;
          var e,
            t,
            n = Ht,
            r = n.length,
            a = 'value' in Bt ? Bt.value : Bt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Vt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function qt(e) {
          var t = e.keyCode;
          return ('charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0);
        }
        function Gt() {
          return !0;
        }
        function Yt() {
          return !1;
        }
        function $t(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t), (this._targetInst = r), (this.type = n), (this.nativeEvent = a), (this.target = l), (this.currentTarget = null), e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return ((this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Gt : Yt), (this.isPropagationStopped = Yt), this);
          }
          return (
            f(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : 'unknown' !== typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = Gt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = Gt));
              },
              persist: function () {},
              isPersistent: Gt,
            }),
            t
          );
        }
        var Qt,
          Xt,
          Kt,
          Jt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Zt = $t(Jt),
          en = f({}, Jt, { view: 0, detail: 0 }),
          tn = $t(en),
          nn = f({}, en, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: hn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e ? e.movementX : (e !== Kt && (Kt && 'mousemove' === e.type ? ((Qt = e.screenX - Kt.screenX), (Xt = e.screenY - Kt.screenY)) : (Xt = Qt = 0), (Kt = e)), Qt);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : Xt;
            },
          }),
          rn = $t(nn),
          an = $t(f({}, nn, { dataTransfer: 0 })),
          ln = $t(f({}, en, { relatedTarget: 0 })),
          on = $t(f({}, Jt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          sn = $t(
            f({}, Jt, {
              clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
              },
            }),
          ),
          cn = $t(f({}, Jt, { data: 0 })),
          un = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          dn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          fn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = fn[e]) && !!t[e];
        }
        function hn() {
          return pn;
        }
        var mn = $t(
            f({}, en, {
              key: function (e) {
                if (e.key) {
                  var t = un[e.key] || e.key;
                  if ('Unidentified' !== t) return t;
                }
                return 'keypress' === e.type ? (13 === (e = qt(e)) ? 'Enter' : String.fromCharCode(e)) : 'keydown' === e.type || 'keyup' === e.type ? dn[e.keyCode] || 'Unidentified' : '';
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: hn,
              charCode: function (e) {
                return 'keypress' === e.type ? qt(e) : 0;
              },
              keyCode: function (e) {
                return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
              },
              which: function (e) {
                return 'keypress' === e.type ? qt(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
              },
            }),
          ),
          gn = $t(f({}, nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
          vn = $t(f({}, en, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hn })),
          yn = $t(f({}, Jt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          bn = $t(
            f({}, nn, {
              deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
              },
              deltaY: function (e) {
                return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          xn = $t(f({}, Jt, { newState: 0, oldState: 0 })),
          wn = [9, 13, 27, 32],
          kn = It && 'CompositionEvent' in window,
          Sn = null;
        It && 'documentMode' in document && (Sn = document.documentMode);
        var En = It && 'TextEvent' in window && !Sn,
          Nn = It && (!kn || (Sn && 8 < Sn && 11 >= Sn)),
          Cn = String.fromCharCode(32),
          jn = !1;
        function Tn(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== wn.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Pn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var Ln = !1;
        var Mn = { color: !0, date: !0, datetime: !0, 'datetime-local': !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function zn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Mn[e.type] : 'textarea' === t;
        }
        function _n(e, t, n, r) {
          (zt ? (_t ? _t.push(r) : (_t = [r])) : (zt = r), 0 < (t = Uu(t, 'onChange')).length && ((n = new Zt('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })));
        }
        var On = null,
          An = null;
        function Rn(e) {
          Ru(e, 0);
        }
        function Dn(e) {
          if (ft(Ve(e))) return e;
        }
        function In(e, t) {
          if ('change' === e) return t;
        }
        var Fn = !1;
        if (It) {
          var Wn;
          if (It) {
            var Bn = 'oninput' in document;
            if (!Bn) {
              var Hn = document.createElement('div');
              (Hn.setAttribute('oninput', 'return;'), (Bn = 'function' === typeof Hn.oninput));
            }
            Wn = Bn;
          } else Wn = !1;
          Fn = Wn && (!document.documentMode || 9 < document.documentMode);
        }
        function Vn() {
          On && (On.detachEvent('onpropertychange', Un), (An = On = null));
        }
        function Un(e) {
          if ('value' === e.propertyName && Dn(An)) {
            var t = [];
            (_n(t, An, e, Mt(e)), Rt(Rn, t));
          }
        }
        function qn(e, t, n) {
          'focusin' === e ? (Vn(), (An = n), (On = t).attachEvent('onpropertychange', Un)) : 'focusout' === e && Vn();
        }
        function Gn(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Dn(An);
        }
        function Yn(e, t) {
          if ('click' === e) return Dn(t);
        }
        function $n(e, t) {
          if ('input' === e || 'change' === e) return Dn(t);
        }
        var Qn =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function Xn(e, t) {
          if (Qn(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!X.call(t, a) || !Qn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function Kn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Jn(e, t) {
          var n,
            r = Kn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Kn(r);
          }
        }
        function Zn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Zn(e, t.parentNode) : 'contains' in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function er(e) {
          for (var t = pt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function tr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t && (('input' === t && ('text' === e.type || 'search' === e.type || 'tel' === e.type || 'url' === e.type || 'password' === e.type)) || 'textarea' === t || 'true' === e.contentEditable)
          );
        }
        var nr = It && 'documentMode' in document && 11 >= document.documentMode,
          rr = null,
          ar = null,
          lr = null,
          ir = !1;
        function or(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          ir ||
            null == rr ||
            rr !== pt(r) ||
            ('selectionStart' in (r = rr) && tr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (lr && Xn(lr, r)) || ((lr = r), 0 < (r = Uu(ar, 'onSelect')).length && ((t = new Zt('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = rr))));
        }
        function sr(e, t) {
          var n = {};
          return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
        }
        var cr = {
            animationend: sr('Animation', 'AnimationEnd'),
            animationiteration: sr('Animation', 'AnimationIteration'),
            animationstart: sr('Animation', 'AnimationStart'),
            transitionrun: sr('Transition', 'TransitionRun'),
            transitionstart: sr('Transition', 'TransitionStart'),
            transitioncancel: sr('Transition', 'TransitionCancel'),
            transitionend: sr('Transition', 'TransitionEnd'),
          },
          ur = {},
          dr = {};
        function fr(e) {
          if (ur[e]) return ur[e];
          if (!cr[e]) return e;
          var t,
            n = cr[e];
          for (t in n) if (n.hasOwnProperty(t) && t in dr) return (ur[e] = n[t]);
          return e;
        }
        It &&
          ((dr = document.createElement('div').style),
          'AnimationEvent' in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation),
          'TransitionEvent' in window || delete cr.transitionend.transition);
        var pr = fr('animationend'),
          hr = fr('animationiteration'),
          mr = fr('animationstart'),
          gr = fr('transitionrun'),
          vr = fr('transitionstart'),
          yr = fr('transitioncancel'),
          br = fr('transitionend'),
          xr = new Map(),
          wr =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function kr(e, t) {
          (xr.set(e, t), $e(t, [e]));
        }
        wr.push('scrollEnd');
        var Sr = new WeakMap();
        function Er(e, t) {
          if ('object' === typeof e && null !== e) {
            var n = Sr.get(e);
            return void 0 !== n ? n : ((t = { value: e, source: t, stack: st(t) }), Sr.set(e, t), t);
          }
          return { value: e, source: t, stack: st(t) };
        }
        var Nr = [],
          Cr = 0,
          jr = 0;
        function Tr() {
          for (var e = Cr, t = (jr = Cr = 0); t < e; ) {
            var n = Nr[t];
            Nr[t++] = null;
            var r = Nr[t];
            Nr[t++] = null;
            var a = Nr[t];
            Nr[t++] = null;
            var l = Nr[t];
            if (((Nr[t++] = null), null !== r && null !== a)) {
              var i = r.pending;
              (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)), (r.pending = a));
            }
            0 !== l && zr(n, a, l);
          }
        }
        function Pr(e, t, n, r) {
          ((Nr[Cr++] = e), (Nr[Cr++] = t), (Nr[Cr++] = n), (Nr[Cr++] = r), (jr |= r), (e.lanes |= r), null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Lr(e, t, n, r) {
          return (Pr(e, t, n, r), _r(e));
        }
        function Mr(e, t) {
          return (Pr(e, null, null, t), _r(e));
        }
        function zr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, l = e.return; null !== l; )
            ((l.childLanes |= n), null !== (r = l.alternate) && (r.childLanes |= n), 22 === l.tag && (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)), (e = l), (l = l.return));
          return 3 === e.tag ? ((l = e.stateNode), a && null !== t && ((a = 31 - pe(n)), null === (r = (e = l.hiddenUpdates)[a]) ? (e[a] = [t]) : r.push(t), (t.lane = 536870912 | n)), l) : null;
        }
        function _r(e) {
          if (50 < zc) throw ((zc = 0), (_c = null), Error(i(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Or = {};
        function Ar(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Rr(e, t, n, r) {
          return new Ar(e, t, n, r);
        }
        function Dr(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ir(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Rr(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
              : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Fr(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Wr(e, t, n, r, a, l) {
          var o = 0;
          if (((r = e), 'function' === typeof e)) Dr(e) && (o = 1);
          else if ('string' === typeof e)
            o = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case 'meta':
                case 'title':
                  return !0;
                case 'style':
                  if ('string' !== typeof t.precedence || 'string' !== typeof t.href || '' === t.href) break;
                  return !0;
                case 'link':
                  if ('string' !== typeof t.rel || 'string' !== typeof t.href || '' === t.href || t.onLoad || t.onError) break;
                  return 'stylesheet' !== t.rel || ((e = t.disabled), 'string' === typeof t.precedence && null == e);
                case 'script':
                  if (t.async && 'function' !== typeof t.async && 'symbol' !== typeof t.async && !t.onLoad && !t.onError && t.src && 'string' === typeof t.src) return !0;
              }
              return !1;
            })(e, n, H.current)
              ? 26
              : 'html' === e || 'head' === e || 'body' === e
                ? 27
                : 5;
          else
            e: switch (e) {
              case j:
                return (((e = Rr(31, n, t, a)).elementType = j), (e.lanes = l), e);
              case g:
                return Br(n.children, a, l, t);
              case v:
                ((o = 8), (a |= 24));
                break;
              case y:
                return (((e = Rr(12, n, t, 2 | a)).elementType = y), (e.lanes = l), e);
              case S:
                return (((e = Rr(13, n, t, a)).elementType = S), (e.lanes = l), e);
              case E:
                return (((e = Rr(19, n, t, a)).elementType = E), (e.lanes = l), e);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case b:
                    case w:
                      o = 10;
                      break e;
                    case x:
                      o = 9;
                      break e;
                    case k:
                      o = 11;
                      break e;
                    case N:
                      o = 14;
                      break e;
                    case C:
                      ((o = 16), (r = null));
                      break e;
                  }
                ((o = 29), (n = Error(i(130, null === e ? 'null' : typeof e, ''))), (r = null));
            }
          return (((t = Rr(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t);
        }
        function Br(e, t, n, r) {
          return (((e = Rr(7, e, r, t)).lanes = n), e);
        }
        function Hr(e, t, n) {
          return (((e = Rr(6, e, null, t)).lanes = n), e);
        }
        function Vr(e, t, n) {
          return (
            ((t = Rr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
          );
        }
        var Ur = [],
          qr = 0,
          Gr = null,
          Yr = 0,
          $r = [],
          Qr = 0,
          Xr = null,
          Kr = 1,
          Jr = '';
        function Zr(e, t) {
          ((Ur[qr++] = Yr), (Ur[qr++] = Gr), (Gr = e), (Yr = t));
        }
        function ea(e, t, n) {
          (($r[Qr++] = Kr), ($r[Qr++] = Jr), ($r[Qr++] = Xr), (Xr = e));
          var r = Kr;
          e = Jr;
          var a = 32 - pe(r) - 1;
          ((r &= ~(1 << a)), (n += 1));
          var l = 32 - pe(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            ((l = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (a -= i), (Kr = (1 << (32 - pe(t) + a)) | (n << a) | r), (Jr = l + e));
          } else ((Kr = (1 << l) | (n << a) | r), (Jr = e));
        }
        function ta(e) {
          null !== e.return && (Zr(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Gr; ) ((Gr = Ur[--qr]), (Ur[qr] = null), (Yr = Ur[--qr]), (Ur[qr] = null));
          for (; e === Xr; ) ((Xr = $r[--Qr]), ($r[Qr] = null), (Jr = $r[--Qr]), ($r[Qr] = null), (Kr = $r[--Qr]), ($r[Qr] = null));
        }
        var ra = null,
          aa = null,
          la = !1,
          ia = null,
          oa = !1,
          sa = Error(i(519));
        function ca(e) {
          throw (ma(Er(Error(i(418, '')), e)), sa);
        }
        function ua(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[ze] = e), (t[_e] = r), n)) {
            case 'dialog':
              (Du('cancel', t), Du('close', t));
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Du('load', t);
              break;
            case 'video':
            case 'audio':
              for (n = 0; n < Ou.length; n++) Du(Ou[n], t);
              break;
            case 'source':
              Du('error', t);
              break;
            case 'img':
            case 'image':
            case 'link':
              (Du('error', t), Du('load', t));
              break;
            case 'details':
              Du('toggle', t);
              break;
            case 'input':
              (Du('invalid', t), vt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), dt(t));
              break;
            case 'select':
              Du('invalid', t);
              break;
            case 'textarea':
              (Du('invalid', t), wt(t, r.value, r.defaultValue, r.children), dt(t));
          }
          (('string' !== typeof (n = r.children) && 'number' !== typeof n && 'bigint' !== typeof n) || t.textContent === '' + n || !0 === r.suppressHydrationWarning || Xu(t.textContent, n)
            ? (null != r.popover && (Du('beforetoggle', t), Du('toggle', t)),
              null != r.onScroll && Du('scroll', t),
              null != r.onScrollEnd && Du('scrollend', t),
              null != r.onClick && (t.onclick = Ku),
              (t = !0))
            : (t = !1),
            t || ca(e));
        }
        function da(e) {
          for (ra = e.return; ra; )
            switch (ra.tag) {
              case 5:
              case 13:
                return void (oa = !1);
              case 27:
              case 3:
                return void (oa = !0);
              default:
                ra = ra.return;
            }
        }
        function fa(e) {
          if (e !== ra) return !1;
          if (!la) return (da(e), (la = !0), !1);
          var t,
            n = e.tag;
          if (((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !('form' !== (t = e.type) && 'button' !== t) || id(e.type, e.memoizedProps)), (t = !t)), t && aa && ca(e), da(e), 13 === n)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ('/$' === (t = e.data)) {
                    if (0 === n) {
                      aa = vd(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ('$' !== t && '$!' !== t && '$?' !== t) || n++;
                e = e.nextSibling;
              }
              aa = null;
            }
          } else 27 === n ? ((n = aa), pd(e.type) ? ((e = yd), (yd = null), (aa = e)) : (aa = n)) : (aa = ra ? vd(e.stateNode.nextSibling) : null);
          return !0;
        }
        function pa() {
          ((aa = ra = null), (la = !1));
        }
        function ha() {
          var e = ia;
          return (null !== e && (null === bc ? (bc = e) : bc.push.apply(bc, e), (ia = null)), e);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ga = F(null),
          va = null,
          ya = null;
        function ba(e, t, n) {
          (B(ga, t._currentValue), (t._currentValue = n));
        }
        function xa(e) {
          ((e._currentValue = ga.current), W(ga));
        }
        function wa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (((e.childLanes & t) !== t ? ((e.childLanes |= t), null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
            e = e.return;
          }
        }
        function ka(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var l = a.dependencies;
            if (null !== l) {
              var o = a.child;
              l = l.firstContext;
              e: for (; null !== l; ) {
                var s = l;
                l = a;
                for (var c = 0; c < t.length; c++)
                  if (s.context === t[c]) {
                    ((l.lanes |= n), null !== (s = l.alternate) && (s.lanes |= n), wa(l.return, n, e), r || (o = null));
                    break e;
                  }
                l = s.next;
              }
            } else if (18 === a.tag) {
              if (null === (o = a.return)) throw Error(i(341));
              ((o.lanes |= n), null !== (l = o.alternate) && (l.lanes |= n), wa(o, n, e), (o = null));
            } else o = a.child;
            if (null !== o) o.return = a;
            else
              for (o = a; null !== o; ) {
                if (o === e) {
                  o = null;
                  break;
                }
                if (null !== (a = o.sibling)) {
                  ((a.return = o.return), (o = a));
                  break;
                }
                o = o.return;
              }
            a = o;
          }
        }
        function Sa(e, t, n, r) {
          e = null;
          for (var a = t, l = !1; null !== a; ) {
            if (!l)
              if (0 !== (524288 & a.flags)) l = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var o = a.alternate;
              if (null === o) throw Error(i(387));
              if (null !== (o = o.memoizedProps)) {
                var s = a.type;
                Qn(a.pendingProps.value, o.value) || (null !== e ? e.push(s) : (e = [s]));
              }
            } else if (a === q.current) {
              if (null === (o = a.alternate)) throw Error(i(387));
              o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push($d) : (e = [$d]));
            }
            a = a.return;
          }
          (null !== e && ka(t, e, n, r), (t.flags |= 262144));
        }
        function Ea(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Qn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Na(e) {
          ((va = e), (ya = null), null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function Ca(e) {
          return Ta(va, e);
        }
        function ja(e, t) {
          return (null === va && Na(e), Ta(e, t));
        }
        function Ta(e, t) {
          var n = t._currentValue;
          if (((t = { context: t, memoizedValue: n, next: null }), null === ya)) {
            if (null === e) throw Error(i(308));
            ((ya = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
          } else ya = ya.next = t;
          return n;
        }
        var Pa =
            'undefined' !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    ((t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          La = r.unstable_scheduleCallback,
          Ma = r.unstable_NormalPriority,
          za = { $$typeof: w, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
        function _a() {
          return { controller: new Pa(), data: new Map(), refCount: 0 };
        }
        function Oa(e) {
          (e.refCount--,
            0 === e.refCount &&
              La(Ma, function () {
                e.controller.abort();
              }));
        }
        var Aa = null,
          Ra = 0,
          Da = 0,
          Ia = null;
        function Fa() {
          if (0 === --Ra && null !== Aa) {
            null !== Ia && (Ia.status = 'fulfilled');
            var e = Aa;
            ((Aa = null), (Da = 0), (Ia = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Wa = O.S;
        O.S = function (e, t) {
          ('object' === typeof t &&
            null !== t &&
            'function' === typeof t.then &&
            (function (e, t) {
              if (null === Aa) {
                var n = (Aa = []);
                ((Ra = 0),
                  (Da = Pu()),
                  (Ia = {
                    status: 'pending',
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  }));
              }
              (Ra++, t.then(Fa, Fa));
            })(0, t),
            null !== Wa && Wa(e, t));
        };
        var Ba = F(null);
        function Ha() {
          var e = Ba.current;
          return null !== e ? e : rc.pooledCache;
        }
        function Va(e, t) {
          B(Ba, null === t ? Ba.current : t.pool);
        }
        function Ua() {
          var e = Ha();
          return null === e ? null : { parent: za._currentValue, pool: e };
        }
        var qa = Error(i(460)),
          Ga = Error(i(474)),
          Ya = Error(i(542)),
          $a = { then: function () {} };
        function Qa(e) {
          return 'fulfilled' === (e = e.status) || 'rejected' === e;
        }
        function Xa() {}
        function Ka(e, t, n) {
          switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Xa, Xa), (t = n)), t.status)) {
            case 'fulfilled':
              return t.value;
            case 'rejected':
              throw (el((e = t.reason)), e);
            default:
              if ('string' === typeof t.status) t.then(Xa, Xa);
              else {
                if (null !== (e = rc) && 100 < e.shellSuspendCounter) throw Error(i(482));
                (((e = t).status = 'pending'),
                  e.then(
                    function (e) {
                      if ('pending' === t.status) {
                        var n = t;
                        ((n.status = 'fulfilled'), (n.value = e));
                      }
                    },
                    function (e) {
                      if ('pending' === t.status) {
                        var n = t;
                        ((n.status = 'rejected'), (n.reason = e));
                      }
                    },
                  ));
              }
              switch (t.status) {
                case 'fulfilled':
                  return t.value;
                case 'rejected':
                  throw (el((e = t.reason)), e);
              }
              throw ((Ja = t), qa);
          }
        }
        var Ja = null;
        function Za() {
          if (null === Ja) throw Error(i(459));
          var e = Ja;
          return ((Ja = null), e);
        }
        function el(e) {
          if (e === qa || e === Ya) throw Error(i(483));
        }
        var tl = !1;
        function nl(e) {
          e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
        }
        function rl(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }));
        }
        function al(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function ll(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & nc))) {
            var a = r.pending;
            return (null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)), (r.pending = t), (t = _r(e)), zr(e, null, n), t);
          }
          return (Pr(e, r, t, n), _r(e));
        }
        function il(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194048 & n))) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), je(e, n));
          }
        }
        function ol(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                (null === l ? (a = l = i) : (l = l.next = i), (n = n.next));
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return ((n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, callbacks: r.callbacks }), void (e.updateQueue = n));
          }
          (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
        }
        var sl = !1;
        function cl() {
          if (sl) {
            if (null !== Ia) throw Ia;
          }
        }
        function ul(e, t, n, r) {
          sl = !1;
          var a = e.updateQueue;
          tl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              c = s.next;
            ((s.next = null), null === i ? (l = c) : (i.next = c), (i = s));
            var u = e.alternate;
            null !== u && (o = (u = u.updateQueue).lastBaseUpdate) !== i && (null === o ? (u.firstBaseUpdate = c) : (o.next = c), (u.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, u = c = s = null, o = l; ; ) {
              var p = -536870913 & o.lane,
                h = p !== o.lane;
              if (h ? (lc & p) === p : (r & p) === p) {
                (0 !== p && p === Da && (sl = !0), null !== u && (u = u.next = { lane: 0, tag: o.tag, payload: o.payload, callback: null, next: null }));
                e: {
                  var m = e,
                    g = o;
                  p = t;
                  var v = n;
                  switch (g.tag) {
                    case 1:
                      if ('function' === typeof (m = g.payload)) {
                        d = m.call(v, d, p);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (null === (p = 'function' === typeof (m = g.payload) ? m.call(v, d, p) : m) || void 0 === p) break e;
                      d = f({}, d, p);
                      break e;
                    case 2:
                      tl = !0;
                  }
                }
                null !== (p = o.callback) && ((e.flags |= 64), h && (e.flags |= 8192), null === (h = a.callbacks) ? (a.callbacks = [p]) : h.push(p));
              } else ((h = { lane: p, tag: o.tag, payload: o.payload, callback: o.callback, next: null }), null === u ? ((c = u = h), (s = d)) : (u = u.next = h), (i |= p));
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                ((o = (h = o).next), (h.next = null), (a.lastBaseUpdate = h), (a.shared.pending = null));
              }
            }
            (null === u && (s = d), (a.baseState = s), (a.firstBaseUpdate = c), (a.lastBaseUpdate = u), null === l && (a.shared.lanes = 0), (pc |= i), (e.lanes = i), (e.memoizedState = d));
          }
        }
        function dl(e, t) {
          if ('function' !== typeof e) throw Error(i(191, e));
          e.call(t);
        }
        function fl(e, t) {
          var n = e.callbacks;
          if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) dl(n[e], t);
        }
        var pl = F(null),
          hl = F(0);
        function ml(e, t) {
          (B(hl, (e = dc)), B(pl, t), (dc = e | t.baseLanes));
        }
        function gl() {
          (B(hl, dc), B(pl, pl.current));
        }
        function vl() {
          ((dc = hl.current), W(pl), W(hl));
        }
        var yl = 0,
          bl = null,
          xl = null,
          wl = null,
          kl = !1,
          Sl = !1,
          El = !1,
          Nl = 0,
          Cl = 0,
          jl = null,
          Tl = 0;
        function Pl() {
          throw Error(i(321));
        }
        function Ll(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!Qn(e[n], t[n])) return !1;
          return !0;
        }
        function Ml(e, t, n, r, a, l) {
          return (
            (yl = l),
            (bl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (O.H = null === e || null === e.memoizedState ? qi : Gi),
            (El = !1),
            (l = n(r, a)),
            (El = !1),
            Sl && (l = _l(t, n, r, a)),
            zl(e),
            l
          );
        }
        function zl(e) {
          O.H = Ui;
          var t = null !== xl && null !== xl.next;
          if (((yl = 0), (wl = xl = bl = null), (kl = !1), (Cl = 0), (jl = null), t)) throw Error(i(300));
          null === e || jo || (null !== (e = e.dependencies) && Ea(e) && (jo = !0));
        }
        function _l(e, t, n, r) {
          bl = e;
          var a = 0;
          do {
            if ((Sl && (jl = null), (Cl = 0), (Sl = !1), 25 <= a)) throw Error(i(301));
            if (((a += 1), (wl = xl = null), null != e.updateQueue)) {
              var l = e.updateQueue;
              ((l.lastEffect = null), (l.events = null), (l.stores = null), null != l.memoCache && (l.memoCache.index = 0));
            }
            ((O.H = Yi), (l = t(n, r)));
          } while (Sl);
          return l;
        }
        function Ol() {
          var e = O.H,
            t = e.useState()[0];
          return ((t = 'function' === typeof t.then ? Wl(t) : t), (e = e.useState()[0]), (null !== xl ? xl.memoizedState : null) !== e && (bl.flags |= 1024), t);
        }
        function Al() {
          var e = 0 !== Nl;
          return ((Nl = 0), e);
        }
        function Rl(e, t, n) {
          ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
        }
        function Dl(e) {
          if (kl) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            kl = !1;
          }
          ((yl = 0), (wl = xl = bl = null), (Sl = !1), (Cl = Nl = 0), (jl = null));
        }
        function Il() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return (null === wl ? (bl.memoizedState = wl = e) : (wl = wl.next = e), wl);
        }
        function Fl() {
          if (null === xl) {
            var e = bl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = xl.next;
          var t = null === wl ? bl.memoizedState : wl.next;
          if (null !== t) ((wl = t), (xl = e));
          else {
            if (null === e) {
              if (null === bl.alternate) throw Error(i(467));
              throw Error(i(310));
            }
            ((e = { memoizedState: (xl = e).memoizedState, baseState: xl.baseState, baseQueue: xl.baseQueue, queue: xl.queue, next: null }),
              null === wl ? (bl.memoizedState = wl = e) : (wl = wl.next = e));
          }
          return wl;
        }
        function Wl(e) {
          var t = Cl;
          return (
            (Cl += 1),
            null === jl && (jl = []),
            (e = Ka(jl, e, t)),
            (t = bl),
            null === (null === wl ? t.memoizedState : wl.next) && ((t = t.alternate), (O.H = null === t || null === t.memoizedState ? qi : Gi)),
            e
          );
        }
        function Bl(e) {
          if (null !== e && 'object' === typeof e) {
            if ('function' === typeof e.then) return Wl(e);
            if (e.$$typeof === w) return Ca(e);
          }
          throw Error(i(438, String(e)));
        }
        function Hl(e) {
          var t = null,
            n = bl.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = bl.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n && ((n = { lastEffect: null, events: null, stores: null, memoCache: null }), (bl.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = T;
          return (t.index++, n);
        }
        function Vl(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Ul(e) {
          return ql(Fl(), xl, e);
        }
        function ql(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(i(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            l = r.pending;
          if (null !== l) {
            if (null !== a) {
              var o = a.next;
              ((a.next = l.next), (l.next = o));
            }
            ((t.baseQueue = a = l), (r.pending = null));
          }
          if (((l = e.baseState), null === a)) e.memoizedState = l;
          else {
            var s = (o = null),
              c = null,
              u = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & u.lane;
              if (f !== u.lane ? (lc & f) === f : (yl & f) === f) {
                var p = u.revertLane;
                if (0 === p) (null !== c && (c = c.next = { lane: 0, revertLane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), f === Da && (d = !0));
                else {
                  if ((yl & p) === p) {
                    ((u = u.next), p === Da && (d = !0));
                    continue;
                  }
                  ((f = { lane: 0, revertLane: u.revertLane, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
                    null === c ? ((s = c = f), (o = l)) : (c = c.next = f),
                    (bl.lanes |= p),
                    (pc |= p));
                }
                ((f = u.action), El && n(l, f), (l = u.hasEagerState ? u.eagerState : n(l, f)));
              } else
                ((p = { lane: f, revertLane: u.revertLane, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
                  null === c ? ((s = c = p), (o = l)) : (c = c.next = p),
                  (bl.lanes |= f),
                  (pc |= f));
              u = u.next;
            } while (null !== u && u !== t);
            if ((null === c ? (o = l) : (c.next = s), !Qn(l, e.memoizedState) && ((jo = !0), d && null !== (n = Ia)))) throw n;
            ((e.memoizedState = l), (e.baseState = o), (e.baseQueue = c), (r.lastRenderedState = l));
          }
          return (null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]);
        }
        function Gl(e) {
          var t = Fl(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              ((l = e(l, o.action)), (o = o.next));
            } while (o !== a);
            (Qn(l, t.memoizedState) || (jo = !0), (t.memoizedState = l), null === t.baseQueue && (t.baseState = l), (n.lastRenderedState = l));
          }
          return [l, r];
        }
        function Yl(e, t, n) {
          var r = bl,
            a = Fl(),
            l = la;
          if (l) {
            if (void 0 === n) throw Error(i(407));
            n = n();
          } else n = t();
          var o = !Qn((xl || a).memoizedState, n);
          if ((o && ((a.memoizedState = n), (jo = !0)), (a = a.queue), gi(2048, 8, Xl.bind(null, r, a, e), [e]), a.getSnapshot !== t || o || (null !== wl && 1 & wl.memoizedState.tag))) {
            if (((r.flags |= 2048), pi(9, { destroy: void 0, resource: void 0 }, Ql.bind(null, r, a, n, t), null), null === rc)) throw Error(i(349));
            l || 0 !== (124 & yl) || $l(r, t, n);
          }
          return n;
        }
        function $l(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = bl.updateQueue)
              ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }), (bl.updateQueue = t), (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function Ql(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), Kl(t) && Jl(e));
        }
        function Xl(e, t, n) {
          return n(function () {
            Kl(t) && Jl(e);
          });
        }
        function Kl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Qn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Jl(e) {
          var t = Mr(e, 2);
          null !== t && Rc(t, e, 2);
        }
        function Zl(e) {
          var t = Il();
          if ('function' === typeof e) {
            var n = e;
            if (((e = n()), El)) {
              fe(!0);
              try {
                n();
              } finally {
                fe(!1);
              }
            }
          }
          return ((t.memoizedState = t.baseState = e), (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vl, lastRenderedState: e }), t);
        }
        function ei(e, t, n, r) {
          return ((e.baseState = n), ql(e, xl, 'function' === typeof r ? r : Vl));
        }
        function ti(e, t, n, r, a) {
          if (Bi(e)) throw Error(i(485));
          if (null !== (e = t.action)) {
            var l = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: 'pending',
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                l.listeners.push(e);
              },
            };
            (null !== O.T ? n(!0) : (l.isTransition = !1), r(l), null === (n = t.pending) ? ((l.next = t.pending = l), ni(t, l)) : ((l.next = n.next), (t.pending = n.next = l)));
          }
        }
        function ni(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var l = O.T,
              i = {};
            O.T = i;
            try {
              var o = n(a, r),
                s = O.S;
              (null !== s && s(i, o), ri(e, t, o));
            } catch (c) {
              li(e, t, c);
            } finally {
              O.T = l;
            }
          } else
            try {
              ri(e, t, (l = n(a, r)));
            } catch (u) {
              li(e, t, u);
            }
        }
        function ri(e, t, n) {
          null !== n && 'object' === typeof n && 'function' === typeof n.then
            ? n.then(
                function (n) {
                  ai(e, t, n);
                },
                function (n) {
                  return li(e, t, n);
                },
              )
            : ai(e, t, n);
        }
        function ai(e, t, n) {
          ((t.status = 'fulfilled'), (t.value = n), ii(t), (e.state = n), null !== (t = e.pending) && ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), ni(e, n))));
        }
        function li(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((t.status = 'rejected'), (t.reason = n), ii(t), (t = t.next));
            } while (t !== r);
          }
          e.action = null;
        }
        function ii(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function oi(e, t) {
          return t;
        }
        function si(e, t) {
          if (la) {
            var n = rc.formState;
            if (null !== n) {
              e: {
                var r = bl;
                if (la) {
                  if (aa) {
                    t: {
                      for (var a = aa, l = oa; 8 !== a.nodeType; ) {
                        if (!l) {
                          a = null;
                          break t;
                        }
                        if (null === (a = vd(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = 'F!' === (l = a.data) || 'F' === l ? a : null;
                    }
                    if (a) {
                      ((aa = vd(a.nextSibling)), (r = 'F!' === a.data));
                      break e;
                    }
                  }
                  ca(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = Il()).memoizedState = n.baseState = t),
            (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: oi, lastRenderedState: t }),
            (n.queue = r),
            (n = Ii.bind(null, bl, r)),
            (r.dispatch = n),
            (r = Zl(!1)),
            (l = Wi.bind(null, bl, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = Il()).queue = a),
            (n = ti.bind(null, bl, a, l, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function ci(e) {
          return ui(Fl(), xl, e);
        }
        function ui(e, t, n) {
          if (((t = ql(e, t, oi)[0]), (e = Ul(Vl)[0]), 'object' === typeof t && null !== t && 'function' === typeof t.then))
            try {
              var r = Wl(t);
            } catch (i) {
              if (i === qa) throw Ya;
              throw i;
            }
          else r = t;
          var a = (t = Fl()).queue,
            l = a.dispatch;
          return (n !== t.memoizedState && ((bl.flags |= 2048), pi(9, { destroy: void 0, resource: void 0 }, di.bind(null, a, n), null)), [r, l, e]);
        }
        function di(e, t) {
          e.action = t;
        }
        function fi(e) {
          var t = Fl(),
            n = xl;
          if (null !== n) return ui(t, n, e);
          (Fl(), (t = t.memoizedState));
          var r = (n = Fl()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function pi(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = bl.updateQueue) && ((t = { lastEffect: null, events: null, stores: null, memoCache: null }), (bl.updateQueue = t)),
            null === (n = t.lastEffect) ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function hi() {
          return Fl().memoizedState;
        }
        function mi(e, t, n, r) {
          var a = Il();
          ((r = void 0 === r ? null : r), (bl.flags |= e), (a.memoizedState = pi(1 | t, { destroy: void 0, resource: void 0 }, n, r)));
        }
        function gi(e, t, n, r) {
          var a = Fl();
          r = void 0 === r ? null : r;
          var l = a.memoizedState.inst;
          null !== xl && null !== r && Ll(r, xl.memoizedState.deps) ? (a.memoizedState = pi(t, l, n, r)) : ((bl.flags |= e), (a.memoizedState = pi(1 | t, l, n, r)));
        }
        function vi(e, t) {
          mi(8390656, 8, e, t);
        }
        function yi(e, t) {
          gi(2048, 8, e, t);
        }
        function bi(e, t) {
          return gi(4, 2, e, t);
        }
        function xi(e, t) {
          return gi(4, 4, e, t);
        }
        function wi(e, t) {
          if ('function' === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              'function' === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function ki(e, t, n) {
          ((n = null !== n && void 0 !== n ? n.concat([e]) : null), gi(4, 4, wi.bind(null, t, e), n));
        }
        function Si() {}
        function Ei(e, t) {
          var n = Fl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && Ll(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Ni(e, t) {
          var n = Fl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && Ll(t, r[1])) return r[0];
          if (((r = e()), El)) {
            fe(!0);
            try {
              e();
            } finally {
              fe(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function Ci(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & yl) ? (e.memoizedState = t) : ((e.memoizedState = n), (e = Ac()), (bl.lanes |= e), (pc |= e), n);
        }
        function ji(e, t, n, r) {
          return Qn(n, t)
            ? n
            : null !== pl.current
              ? ((e = Ci(e, n, r)), Qn(e, t) || (jo = !0), e)
              : 0 === (42 & yl)
                ? ((jo = !0), (e.memoizedState = n))
                : ((e = Ac()), (bl.lanes |= e), (pc |= e), t);
        }
        function Ti(e, t, n, r, a) {
          var l = A.p;
          A.p = 0 !== l && 8 > l ? l : 8;
          var i = O.T,
            o = {};
          ((O.T = o), Wi(e, !1, t, n));
          try {
            var s = a(),
              c = O.S;
            if ((null !== c && c(o, s), null !== s && 'object' === typeof s && 'function' === typeof s.then))
              Fi(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: 'pending',
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        ((r.status = 'fulfilled'), (r.value = t));
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (r.status = 'rejected', r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
                      },
                    ),
                    r
                  );
                })(s, r),
                Oc(),
              );
            else Fi(e, t, r, Oc());
          } catch (u) {
            Fi(e, t, { then: function () {}, status: 'rejected', reason: u }, Oc());
          } finally {
            ((A.p = l), (O.T = i));
          }
        }
        function Pi() {}
        function Li(e, t, n, r) {
          if (5 !== e.tag) throw Error(i(476));
          var a = Mi(e).queue;
          Ti(
            e,
            a,
            t,
            R,
            null === n
              ? Pi
              : function () {
                  return (zi(e), n(r));
                },
          );
        }
        function Mi(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = { memoizedState: R, baseState: R, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vl, lastRenderedState: R }, next: null }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Vl, lastRenderedState: n },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function zi(e) {
          Fi(e, Mi(e).next.queue, {}, Oc());
        }
        function _i() {
          return Ca($d);
        }
        function Oi() {
          return Fl().memoizedState;
        }
        function Ai() {
          return Fl().memoizedState;
        }
        function Ri(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Oc(),
                  r = ll(t, (e = al(n)), n);
                return (null !== r && (Rc(r, t, n), il(r, t, n)), (t = { cache: _a() }), void (e.payload = t));
            }
            t = t.return;
          }
        }
        function Di(e, t, n) {
          var r = Oc();
          ((n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }), Bi(e) ? Hi(t, n) : null !== (n = Lr(e, t, n, r)) && (Rc(n, e, r), Vi(n, t, r)));
        }
        function Ii(e, t, n) {
          Fi(e, t, n, Oc());
        }
        function Fi(e, t, n, r) {
          var a = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
          if (Bi(e)) Hi(t, a);
          else {
            var l = e.alternate;
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), Qn(o, i))) return (Pr(e, t, a, 0), null === rc && Tr(), !1);
              } catch (s) {}
            if (null !== (n = Lr(e, t, a, r))) return (Rc(n, e, r), Vi(n, t, r), !0);
          }
          return !1;
        }
        function Wi(e, t, n, r) {
          if (((r = { lane: 2, revertLane: Pu(), action: r, hasEagerState: !1, eagerState: null, next: null }), Bi(e))) {
            if (t) throw Error(i(479));
          } else null !== (t = Lr(e, n, r, 2)) && Rc(t, e, 2);
        }
        function Bi(e) {
          var t = e.alternate;
          return e === bl || (null !== t && t === bl);
        }
        function Hi(e, t) {
          Sl = kl = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
        }
        function Vi(e, t, n) {
          if (0 !== (4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), je(e, n));
          }
        }
        var Ui = {
            readContext: Ca,
            use: Bl,
            useCallback: Pl,
            useContext: Pl,
            useEffect: Pl,
            useImperativeHandle: Pl,
            useLayoutEffect: Pl,
            useInsertionEffect: Pl,
            useMemo: Pl,
            useReducer: Pl,
            useRef: Pl,
            useState: Pl,
            useDebugValue: Pl,
            useDeferredValue: Pl,
            useTransition: Pl,
            useSyncExternalStore: Pl,
            useId: Pl,
            useHostTransitionStatus: Pl,
            useFormState: Pl,
            useActionState: Pl,
            useOptimistic: Pl,
            useMemoCache: Pl,
            useCacheRefresh: Pl,
          },
          qi = {
            readContext: Ca,
            use: Bl,
            useCallback: function (e, t) {
              return ((Il().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Ca,
            useEffect: vi,
            useImperativeHandle: function (e, t, n) {
              ((n = null !== n && void 0 !== n ? n.concat([e]) : null), mi(4194308, 4, wi.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return mi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              mi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Il();
              t = void 0 === t ? null : t;
              var r = e();
              if (El) {
                fe(!0);
                try {
                  e();
                } finally {
                  fe(!1);
                }
              }
              return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
              var r = Il();
              if (void 0 !== n) {
                var a = n(t);
                if (El) {
                  fe(!0);
                  try {
                    n(t);
                  } finally {
                    fe(!1);
                  }
                }
              } else a = t;
              return (
                (r.memoizedState = r.baseState = a),
                (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: a }),
                (r.queue = e),
                (e = e.dispatch = Di.bind(null, bl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (Il().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = Zl(e)).queue,
                n = Ii.bind(null, bl, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: Si,
            useDeferredValue: function (e, t) {
              return Ci(Il(), e, t);
            },
            useTransition: function () {
              var e = Zl(!1);
              return ((e = Ti.bind(null, bl, e.queue, !0, !1)), (Il().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
              var r = bl,
                a = Il();
              if (la) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === rc)) throw Error(i(349));
                0 !== (124 & lc) || $l(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return ((a.queue = l), vi(Xl.bind(null, r, l, e), [e]), (r.flags |= 2048), pi(9, { destroy: void 0, resource: void 0 }, Ql.bind(null, r, l, n, t), null), n);
            },
            useId: function () {
              var e = Il(),
                t = rc.identifierPrefix;
              if (la) {
                var n = Jr;
                ((t = '\xab' + t + 'R' + (n = (Kr & ~(1 << (32 - pe(Kr) - 1))).toString(32) + n)), 0 < (n = Nl++) && (t += 'H' + n.toString(32)), (t += '\xbb'));
              } else t = '\xab' + t + 'r' + (n = Tl++).toString(32) + '\xbb';
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: _i,
            useFormState: si,
            useActionState: si,
            useOptimistic: function (e) {
              var t = Il();
              t.memoizedState = t.baseState = e;
              var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
              return ((t.queue = n), (t = Wi.bind(null, bl, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: Hl,
            useCacheRefresh: function () {
              return (Il().memoizedState = Ri.bind(null, bl));
            },
          },
          Gi = {
            readContext: Ca,
            use: Bl,
            useCallback: Ei,
            useContext: Ca,
            useEffect: yi,
            useImperativeHandle: ki,
            useInsertionEffect: bi,
            useLayoutEffect: xi,
            useMemo: Ni,
            useReducer: Ul,
            useRef: hi,
            useState: function () {
              return Ul(Vl);
            },
            useDebugValue: Si,
            useDeferredValue: function (e, t) {
              return ji(Fl(), xl.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Ul(Vl)[0],
                t = Fl().memoizedState;
              return ['boolean' === typeof e ? e : Wl(e), t];
            },
            useSyncExternalStore: Yl,
            useId: Oi,
            useHostTransitionStatus: _i,
            useFormState: ci,
            useActionState: ci,
            useOptimistic: function (e, t) {
              return ei(Fl(), 0, e, t);
            },
            useMemoCache: Hl,
            useCacheRefresh: Ai,
          },
          Yi = {
            readContext: Ca,
            use: Bl,
            useCallback: Ei,
            useContext: Ca,
            useEffect: yi,
            useImperativeHandle: ki,
            useInsertionEffect: bi,
            useLayoutEffect: xi,
            useMemo: Ni,
            useReducer: Gl,
            useRef: hi,
            useState: function () {
              return Gl(Vl);
            },
            useDebugValue: Si,
            useDeferredValue: function (e, t) {
              var n = Fl();
              return null === xl ? Ci(n, e, t) : ji(n, xl.memoizedState, e, t);
            },
            useTransition: function () {
              var e = Gl(Vl)[0],
                t = Fl().memoizedState;
              return ['boolean' === typeof e ? e : Wl(e), t];
            },
            useSyncExternalStore: Yl,
            useId: Oi,
            useHostTransitionStatus: _i,
            useFormState: fi,
            useActionState: fi,
            useOptimistic: function (e, t) {
              var n = Fl();
              return null !== xl ? ei(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
            },
            useMemoCache: Hl,
            useCacheRefresh: Ai,
          },
          $i = null,
          Qi = 0;
        function Xi(e) {
          var t = Qi;
          return ((Qi += 1), null === $i && ($i = []), Ka($i, e, t));
        }
        function Ki(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function Ji(e, t) {
          if (t.$$typeof === p) throw Error(i(525));
          throw ((e = Object.prototype.toString.call(t)), Error(i(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
        }
        function Zi(e) {
          return (0, e._init)(e._payload);
        }
        function eo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; ) (null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling));
            return t;
          }
          function a(e, t) {
            return (((e = Ir(e, t)).index = 0), (e.sibling = null), e);
          }
          function l(t, n, r) {
            return ((t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags |= 67108866), n) : r) : ((t.flags |= 67108866), n)) : ((t.flags |= 1048576), n));
          }
          function o(t) {
            return (e && null === t.alternate && (t.flags |= 67108866), t);
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag ? (((t = Hr(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var l = n.type;
            return l === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t && (t.elementType === l || ('object' === typeof l && null !== l && l.$$typeof === C && Zi(l) === t.type))
                ? (Ki((t = a(t, n.props)), n), (t.return = e), t)
                : (Ki((t = Wr(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
          }
          function u(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
              ? (((t = Vr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag ? (((t = Br(n, e.mode, r, l)).return = e), t) : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t || 'bigint' === typeof t) return (((t = Hr('' + t, e.mode, n)).return = e), t);
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case h:
                  return (Ki((n = Wr(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n);
                case m:
                  return (((t = Vr(t, e.mode, n)).return = e), t);
                case C:
                  return f(e, (t = (0, t._init)(t._payload)), n);
              }
              if (_(t) || L(t)) return (((t = Br(t, e.mode, n, null)).return = e), t);
              if ('function' === typeof t.then) return f(e, Xi(t), n);
              if (t.$$typeof === w) return f(e, ja(e, t), n);
              Ji(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n || 'bigint' === typeof n) return null !== a ? null : s(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case h:
                  return n.key === a ? c(e, t, n, r) : null;
                case m:
                  return n.key === a ? u(e, t, n, r) : null;
                case C:
                  return p(e, t, (n = (a = n._init)(n._payload)), r);
              }
              if (_(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
              if ('function' === typeof n.then) return p(e, t, Xi(n), r);
              if (n.$$typeof === w) return p(e, t, ja(e, n), r);
              Ji(e, n);
            }
            return null;
          }
          function v(e, t, n, r, a) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r || 'bigint' === typeof r) return s(t, (e = e.get(n) || null), '' + r, a);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case h:
                  return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case m:
                  return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
                case C:
                  return v(e, t, n, (r = (0, r._init)(r._payload)), a);
              }
              if (_(r) || L(r)) return d(t, (e = e.get(n) || null), r, a, null);
              if ('function' === typeof r.then) return v(e, t, n, Xi(r), a);
              if (r.$$typeof === w) return v(e, t, n, ja(t, r), a);
              Ji(t, r);
            }
            return null;
          }
          function y(s, c, u, d) {
            if (('object' === typeof u && null !== u && u.type === g && null === u.key && (u = u.props.children), 'object' === typeof u && null !== u)) {
              switch (u.$$typeof) {
                case h:
                  e: {
                    for (var b = u.key; null !== c; ) {
                      if (c.key === b) {
                        if ((b = u.type) === g) {
                          if (7 === c.tag) {
                            (n(s, c.sibling), ((d = a(c, u.props.children)).return = s), (s = d));
                            break e;
                          }
                        } else if (c.elementType === b || ('object' === typeof b && null !== b && b.$$typeof === C && Zi(b) === c.type)) {
                          (n(s, c.sibling), Ki((d = a(c, u.props)), u), (d.return = s), (s = d));
                          break e;
                        }
                        n(s, c);
                        break;
                      }
                      (t(s, c), (c = c.sibling));
                    }
                    u.type === g ? (((d = Br(u.props.children, s.mode, d, u.key)).return = s), (s = d)) : (Ki((d = Wr(u.type, u.key, u.props, null, s.mode, d)), u), (d.return = s), (s = d));
                  }
                  return o(s);
                case m:
                  e: {
                    for (b = u.key; null !== c; ) {
                      if (c.key === b) {
                        if (4 === c.tag && c.stateNode.containerInfo === u.containerInfo && c.stateNode.implementation === u.implementation) {
                          (n(s, c.sibling), ((d = a(c, u.children || [])).return = s), (s = d));
                          break e;
                        }
                        n(s, c);
                        break;
                      }
                      (t(s, c), (c = c.sibling));
                    }
                    (((d = Vr(u, s.mode, d)).return = s), (s = d));
                  }
                  return o(s);
                case C:
                  return y(s, c, (u = (b = u._init)(u._payload)), d);
              }
              if (_(u))
                return (function (a, i, o, s) {
                  for (var c = null, u = null, d = i, h = (i = 0), m = null; null !== d && h < o.length; h++) {
                    d.index > h ? ((m = d), (d = null)) : (m = d.sibling);
                    var g = p(a, d, o[h], s);
                    if (null === g) {
                      null === d && (d = m);
                      break;
                    }
                    (e && d && null === g.alternate && t(a, d), (i = l(g, i, h)), null === u ? (c = g) : (u.sibling = g), (u = g), (d = m));
                  }
                  if (h === o.length) return (n(a, d), la && Zr(a, h), c);
                  if (null === d) {
                    for (; h < o.length; h++) null !== (d = f(a, o[h], s)) && ((i = l(d, i, h)), null === u ? (c = d) : (u.sibling = d), (u = d));
                    return (la && Zr(a, h), c);
                  }
                  for (d = r(d); h < o.length; h++)
                    null !== (m = v(d, a, h, o[h], s)) && (e && null !== m.alternate && d.delete(null === m.key ? h : m.key), (i = l(m, i, h)), null === u ? (c = m) : (u.sibling = m), (u = m));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    la && Zr(a, h),
                    c
                  );
                })(s, c, u, d);
              if (L(u)) {
                if ('function' !== typeof (b = L(u))) throw Error(i(150));
                return (function (a, o, s, c) {
                  if (null == s) throw Error(i(151));
                  for (var u = null, d = null, h = o, m = (o = 0), g = null, y = s.next(); null !== h && !y.done; m++, y = s.next()) {
                    h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                    var b = p(a, h, y.value, c);
                    if (null === b) {
                      null === h && (h = g);
                      break;
                    }
                    (e && h && null === b.alternate && t(a, h), (o = l(b, o, m)), null === d ? (u = b) : (d.sibling = b), (d = b), (h = g));
                  }
                  if (y.done) return (n(a, h), la && Zr(a, m), u);
                  if (null === h) {
                    for (; !y.done; m++, y = s.next()) null !== (y = f(a, y.value, c)) && ((o = l(y, o, m)), null === d ? (u = y) : (d.sibling = y), (d = y));
                    return (la && Zr(a, m), u);
                  }
                  for (h = r(h); !y.done; m++, y = s.next())
                    null !== (y = v(h, a, m, y.value, c)) && (e && null !== y.alternate && h.delete(null === y.key ? m : y.key), (o = l(y, o, m)), null === d ? (u = y) : (d.sibling = y), (d = y));
                  return (
                    e &&
                      h.forEach(function (e) {
                        return t(a, e);
                      }),
                    la && Zr(a, m),
                    u
                  );
                })(s, c, (u = b.call(u)), d);
              }
              if ('function' === typeof u.then) return y(s, c, Xi(u), d);
              if (u.$$typeof === w) return y(s, c, ja(s, u), d);
              Ji(s, u);
            }
            return ('string' === typeof u && '' !== u) || 'number' === typeof u || 'bigint' === typeof u
              ? ((u = '' + u), null !== c && 6 === c.tag ? (n(s, c.sibling), ((d = a(c, u)).return = s), (s = d)) : (n(s, c), ((d = Hr(u, s.mode, d)).return = s), (s = d)), o(s))
              : n(s, c);
          }
          return function (e, t, n, r) {
            try {
              Qi = 0;
              var a = y(e, t, n, r);
              return (($i = null), a);
            } catch (i) {
              if (i === qa || i === Ya) throw i;
              var l = Rr(29, i, null, e.mode);
              return ((l.lanes = r), (l.return = e), l);
            }
          };
        }
        var to = eo(!0),
          no = eo(!1),
          ro = F(null),
          ao = null;
        function lo(e) {
          var t = e.alternate;
          (B(co, 1 & co.current), B(ro, e), null === ao && (null === t || null !== pl.current || null !== t.memoizedState) && (ao = e));
        }
        function io(e) {
          if (22 === e.tag) {
            if ((B(co, co.current), B(ro, e), null === ao)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (ao = e);
            }
          } else oo();
        }
        function oo() {
          (B(co, co.current), B(ro, ro.current));
        }
        function so(e) {
          (W(ro), ao === e && (ao = null), W(co));
        }
        var co = F(0);
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || gd(n))) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        function fo(e, t, n, r) {
          ((n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : f({}, t, n)), (e.memoizedState = n), 0 === e.lanes && (e.updateQueue.baseState = n));
        }
        var po = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Oc(),
              a = al(r);
            ((a.payload = t), void 0 !== n && null !== n && (a.callback = n), null !== (t = ll(e, a, r)) && (Rc(t, e, r), il(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Oc(),
              a = al(r);
            ((a.tag = 1), (a.payload = t), void 0 !== n && null !== n && (a.callback = n), null !== (t = ll(e, a, r)) && (Rc(t, e, r), il(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Oc(),
              r = al(n);
            ((r.tag = 2), void 0 !== t && null !== t && (r.callback = t), null !== (t = ll(e, r, n)) && (Rc(t, e, n), il(t, e, n)));
          },
        };
        function ho(e, t, n, r, a, l, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !t.prototype || !t.prototype.isPureReactComponent || !Xn(n, r) || !Xn(a, l);
        }
        function mo(e, t, n, r) {
          ((e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && po.enqueueReplaceState(t, t.state, null));
        }
        function go(e, t) {
          var n = t;
          if ('ref' in t) for (var r in ((n = {}), t)) 'ref' !== r && (n[r] = t[r]);
          if ((e = e.defaultProps)) for (var a in (n === t && (n = f({}, n)), e)) void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        var vo =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                if ('object' === typeof window && 'function' === typeof window.ErrorEvent) {
                  var t = new window.ErrorEvent('error', {
                    bubbles: !0,
                    cancelable: !0,
                    message: 'object' === typeof e && null !== e && 'string' === typeof e.message ? String(e.message) : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if ('object' === typeof process && 'function' === typeof process.emit) return void process.emit('uncaughtException', e);
                console.error(e);
              };
        function yo(e) {
          vo(e);
        }
        function bo(e) {
          console.error(e);
        }
        function xo(e) {
          vo(e);
        }
        function wo(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function ko(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function So(e, t, n) {
          return (
            ((n = al(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              wo(e, t);
            }),
            n
          );
        }
        function Eo(e) {
          return (((e = al(e)).tag = 3), e);
        }
        function No(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ('function' === typeof a) {
            var l = r.value;
            ((e.payload = function () {
              return a(l);
            }),
              (e.callback = function () {
                ko(t, n, r);
              }));
          }
          var i = n.stateNode;
          null !== i &&
            'function' === typeof i.componentDidCatch &&
            (e.callback = function () {
              (ko(t, n, r), 'function' !== typeof a && (null === Ec ? (Ec = new Set([this])) : Ec.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, { componentStack: null !== e ? e : '' });
            });
        }
        var Co = Error(i(461)),
          jo = !1;
        function To(e, t, n, r) {
          t.child = null === e ? no(t, null, n, r) : to(t, e.child, n, r);
        }
        function Po(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          if ('ref' in r) {
            var i = {};
            for (var o in r) 'ref' !== o && (i[o] = r[o]);
          } else i = r;
          return (Na(t), (r = Ml(e, t, n, i, l, a)), (o = Al()), null === e || jo ? (la && o && ta(t), (t.flags |= 1), To(e, t, r, a), t.child) : (Rl(e, t, a), Qo(e, t, a)));
        }
        function Lo(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return 'function' !== typeof l || Dr(l) || void 0 !== l.defaultProps || null !== n.compare
              ? (((e = Wr(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = l), Mo(e, t, l, r, a));
          }
          if (((l = e.child), !Xo(e, a))) {
            var i = l.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : Xn)(i, r) && e.ref === t.ref) return Qo(e, t, a);
          }
          return ((t.flags |= 1), ((e = Ir(l, r)).ref = t.ref), (e.return = t), (t.child = e));
        }
        function Mo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (Xn(l, r) && e.ref === t.ref) {
              if (((jo = !1), (t.pendingProps = r = l), !Xo(e, a))) return ((t.lanes = e.lanes), Qo(e, t, a));
              0 !== (131072 & e.flags) && (jo = !0);
            }
          }
          return Ao(e, t, n, r, a);
        }
        function zo(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== l ? l.baseLanes | n : n), null !== e)) {
                for (a = t.child = e.child, l = 0; null !== a; ) ((l = l | a.lanes | a.childLanes), (a = a.sibling));
                t.childLanes = l & ~r;
              } else ((t.childLanes = 0), (t.child = null));
              return _o(e, t, r, n);
            }
            if (0 === (536870912 & n)) return ((t.lanes = t.childLanes = 536870912), _o(e, t, null !== l ? l.baseLanes | n : n, n));
            ((t.memoizedState = { baseLanes: 0, cachePool: null }), null !== e && Va(0, null !== l ? l.cachePool : null), null !== l ? ml(t, l) : gl(), io(t));
          } else null !== l ? (Va(0, l.cachePool), ml(t, l), oo(), (t.memoizedState = null)) : (null !== e && Va(0, null), gl(), oo());
          return (To(e, t, a, n), t.child);
        }
        function _o(e, t, n, r) {
          var a = Ha();
          return (
            (a = null === a ? null : { parent: za._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Va(0, null),
            gl(),
            io(t),
            null !== e && Sa(e, t, r, !0),
            null
          );
        }
        function Oo(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ('function' !== typeof n && 'object' !== typeof n) throw Error(i(284));
            (null !== e && e.ref === n) || (t.flags |= 4194816);
          }
        }
        function Ao(e, t, n, r, a) {
          return (Na(t), (n = Ml(e, t, n, r, void 0, a)), (r = Al()), null === e || jo ? (la && r && ta(t), (t.flags |= 1), To(e, t, n, a), t.child) : (Rl(e, t, a), Qo(e, t, a)));
        }
        function Ro(e, t, n, r, a, l) {
          return (Na(t), (t.updateQueue = null), (n = _l(t, r, n, a)), zl(e), (r = Al()), null === e || jo ? (la && r && ta(t), (t.flags |= 1), To(e, t, n, l), t.child) : (Rl(e, t, l), Qo(e, t, l)));
        }
        function Do(e, t, n, r, a) {
          if ((Na(t), null === t.stateNode)) {
            var l = Or,
              i = n.contextType;
            ('object' === typeof i && null !== i && (l = Ca(i)),
              (l = new n(r, l)),
              (t.memoizedState = null !== l.state && void 0 !== l.state ? l.state : null),
              (l.updater = po),
              (t.stateNode = l),
              (l._reactInternals = t),
              ((l = t.stateNode).props = r),
              (l.state = t.memoizedState),
              (l.refs = {}),
              nl(t),
              (i = n.contextType),
              (l.context = 'object' === typeof i && null !== i ? Ca(i) : Or),
              (l.state = t.memoizedState),
              'function' === typeof (i = n.getDerivedStateFromProps) && (fo(t, n, i, r), (l.state = t.memoizedState)),
              'function' === typeof n.getDerivedStateFromProps ||
                'function' === typeof l.getSnapshotBeforeUpdate ||
                ('function' !== typeof l.UNSAFE_componentWillMount && 'function' !== typeof l.componentWillMount) ||
                ((i = l.state),
                'function' === typeof l.componentWillMount && l.componentWillMount(),
                'function' === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount(),
                i !== l.state && po.enqueueReplaceState(l, l.state, null),
                ul(t, r, l, a),
                cl(),
                (l.state = t.memoizedState)),
              'function' === typeof l.componentDidMount && (t.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            l = t.stateNode;
            var o = t.memoizedProps,
              s = go(n, o);
            l.props = s;
            var c = l.context,
              u = n.contextType;
            ((i = Or), 'object' === typeof u && null !== u && (i = Ca(u)));
            var d = n.getDerivedStateFromProps;
            ((u = 'function' === typeof d || 'function' === typeof l.getSnapshotBeforeUpdate),
              (o = t.pendingProps !== o),
              u || ('function' !== typeof l.UNSAFE_componentWillReceiveProps && 'function' !== typeof l.componentWillReceiveProps) || ((o || c !== i) && mo(t, l, r, i)),
              (tl = !1));
            var f = t.memoizedState;
            ((l.state = f),
              ul(t, r, l, a),
              cl(),
              (c = t.memoizedState),
              o || f !== c || tl
                ? ('function' === typeof d && (fo(t, n, d, r), (c = t.memoizedState)),
                  (s = tl || ho(t, n, s, r, f, c, i))
                    ? (u ||
                        ('function' !== typeof l.UNSAFE_componentWillMount && 'function' !== typeof l.componentWillMount) ||
                        ('function' === typeof l.componentWillMount && l.componentWillMount(), 'function' === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()),
                      'function' === typeof l.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof l.componentDidMount && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = c)),
                  (l.props = r),
                  (l.state = c),
                  (l.context = i),
                  (r = s))
                : ('function' === typeof l.componentDidMount && (t.flags |= 4194308), (r = !1)));
          } else {
            ((l = t.stateNode),
              rl(e, t),
              (u = go(n, (i = t.memoizedProps))),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              (c = n.contextType),
              (s = Or),
              'object' === typeof c && null !== c && (s = Ca(c)),
              (c = 'function' === typeof (o = n.getDerivedStateFromProps) || 'function' === typeof l.getSnapshotBeforeUpdate) ||
                ('function' !== typeof l.UNSAFE_componentWillReceiveProps && 'function' !== typeof l.componentWillReceiveProps) ||
                ((i !== d || f !== s) && mo(t, l, r, s)),
              (tl = !1),
              (f = t.memoizedState),
              (l.state = f),
              ul(t, r, l, a),
              cl());
            var p = t.memoizedState;
            i !== d || f !== p || tl || (null !== e && null !== e.dependencies && Ea(e.dependencies))
              ? ('function' === typeof o && (fo(t, n, o, r), (p = t.memoizedState)),
                (u = tl || ho(t, n, u, r, f, p, s) || (null !== e && null !== e.dependencies && Ea(e.dependencies)))
                  ? (c ||
                      ('function' !== typeof l.UNSAFE_componentWillUpdate && 'function' !== typeof l.componentWillUpdate) ||
                      ('function' === typeof l.componentWillUpdate && l.componentWillUpdate(r, p, s), 'function' === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, p, s)),
                    'function' === typeof l.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof l.componentDidUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                    'function' !== typeof l.getSnapshotBeforeUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (l.props = r),
                (l.state = p),
                (l.context = s),
                (r = u))
              : ('function' !== typeof l.componentDidUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                'function' !== typeof l.getSnapshotBeforeUpdate || (i === e.memoizedProps && f === e.memoizedState) || (t.flags |= 1024),
                (r = !1));
          }
          return (
            (l = r),
            Oo(e, t),
            (r = 0 !== (128 & t.flags)),
            l || r
              ? ((l = t.stateNode),
                (n = r && 'function' !== typeof n.getDerivedStateFromError ? null : l.render()),
                (t.flags |= 1),
                null !== e && r ? ((t.child = to(t, e.child, null, a)), (t.child = to(t, null, n, a))) : To(e, t, n, a),
                (t.memoizedState = l.state),
                (e = t.child))
              : (e = Qo(e, t, a)),
            e
          );
        }
        function Io(e, t, n, r) {
          return (pa(), (t.flags |= 256), To(e, t, n, r), t.child);
        }
        var Fo = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
        function Wo(e) {
          return { baseLanes: e, cachePool: Ua() };
        }
        function Bo(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= gc), e);
        }
        function Ho(e, t, n) {
          var r,
            a = t.pendingProps,
            l = !1,
            o = 0 !== (128 & t.flags);
          if (((r = o) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & co.current)), r && ((l = !0), (t.flags &= -129)), (r = 0 !== (32 & t.flags)), (t.flags &= -33), null === e)) {
            if (la) {
              if ((l ? lo(t) : oo(), la)) {
                var s,
                  c = aa;
                if ((s = c)) {
                  e: {
                    for (s = c, c = oa; 8 !== s.nodeType; ) {
                      if (!c) {
                        c = null;
                        break e;
                      }
                      if (null === (s = vd(s.nextSibling))) {
                        c = null;
                        break e;
                      }
                    }
                    c = s;
                  }
                  null !== c
                    ? ((t.memoizedState = { dehydrated: c, treeContext: null !== Xr ? { id: Kr, overflow: Jr } : null, retryLane: 536870912, hydrationErrors: null }),
                      ((s = Rr(18, null, null, 0)).stateNode = c),
                      (s.return = t),
                      (t.child = s),
                      (ra = t),
                      (aa = null),
                      (s = !0))
                    : (s = !1);
                }
                s || ca(t);
              }
              if (null !== (c = t.memoizedState) && null !== (c = c.dehydrated)) return (gd(c) ? (t.lanes = 32) : (t.lanes = 536870912), null);
              so(t);
            }
            return (
              (c = a.children),
              (a = a.fallback),
              l
                ? (oo(),
                  (c = Uo({ mode: 'hidden', children: c }, (l = t.mode))),
                  (a = Br(a, l, n, null)),
                  (c.return = t),
                  (a.return = t),
                  (c.sibling = a),
                  (t.child = c),
                  ((l = t.child).memoizedState = Wo(n)),
                  (l.childLanes = Bo(e, r, n)),
                  (t.memoizedState = Fo),
                  a)
                : (lo(t), Vo(t, c))
            );
          }
          if (null !== (s = e.memoizedState) && null !== (c = s.dehydrated)) {
            if (o)
              256 & t.flags
                ? (lo(t), (t.flags &= -257), (t = qo(e, t, n)))
                : null !== t.memoizedState
                  ? (oo(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : (oo(),
                    (l = a.fallback),
                    (c = t.mode),
                    (a = Uo({ mode: 'visible', children: a.children }, c)),
                    ((l = Br(l, c, n, null)).flags |= 2),
                    (a.return = t),
                    (l.return = t),
                    (a.sibling = l),
                    (t.child = a),
                    to(t, e.child, null, n),
                    ((a = t.child).memoizedState = Wo(n)),
                    (a.childLanes = Bo(e, r, n)),
                    (t.memoizedState = Fo),
                    (t = l));
            else if ((lo(t), gd(c))) {
              if ((r = c.nextSibling && c.nextSibling.dataset)) var u = r.dgst;
              ((r = u), ((a = Error(i(419))).stack = ''), (a.digest = r), ma({ value: a, source: null, stack: null }), (t = qo(e, t, n)));
            } else if ((jo || Sa(e, t, n, !1), (r = 0 !== (n & e.childLanes)), jo || r)) {
              if (null !== (r = rc) && 0 !== (a = 0 !== ((a = 0 !== (42 & (a = n & -n)) ? 1 : Te(a)) & (r.suspendedLanes | n)) ? 0 : a) && a !== s.retryLane)
                throw ((s.retryLane = a), Mr(e, a), Rc(r, e, a), Co);
              ('$?' === c.data || Yc(), (t = qo(e, t, n)));
            } else
              '$?' === c.data
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = s.treeContext),
                  (aa = vd(c.nextSibling)),
                  (ra = t),
                  (la = !0),
                  (ia = null),
                  (oa = !1),
                  null !== e && (($r[Qr++] = Kr), ($r[Qr++] = Jr), ($r[Qr++] = Xr), (Kr = e.id), (Jr = e.overflow), (Xr = t)),
                  ((t = Vo(t, a.children)).flags |= 4096));
            return t;
          }
          return l
            ? (oo(),
              (l = a.fallback),
              (c = t.mode),
              (u = (s = e.child).sibling),
              ((a = Ir(s, { mode: 'hidden', children: a.children })).subtreeFlags = 65011712 & s.subtreeFlags),
              null !== u ? (l = Ir(u, l)) : ((l = Br(l, c, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              null === (c = e.child.memoizedState)
                ? (c = Wo(n))
                : (null !== (s = c.cachePool) ? ((u = za._currentValue), (s = s.parent !== u ? { parent: u, pool: u } : s)) : (s = Ua()), (c = { baseLanes: c.baseLanes | n, cachePool: s })),
              (l.memoizedState = c),
              (l.childLanes = Bo(e, r, n)),
              (t.memoizedState = Fo),
              a)
            : (lo(t),
              (e = (n = e.child).sibling),
              ((n = Ir(n, { mode: 'visible', children: a.children })).return = t),
              (n.sibling = null),
              null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function Vo(e, t) {
          return (((t = Uo({ mode: 'visible', children: t }, e.mode)).return = e), (e.child = t));
        }
        function Uo(e, t) {
          return (((e = Rr(22, e, null, t)).lanes = 0), (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e);
        }
        function qo(e, t, n) {
          return (to(t, e.child, null, n), ((e = Vo(t, t.pendingProps.children)).flags |= 2), (t.memoizedState = null), e);
        }
        function Go(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), wa(e.return, t, n));
        }
        function Yo(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a })
            : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailMode = a));
        }
        function $o(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((To(e, t, r.children, n), 0 !== (2 & (r = co.current)))) ((r = (1 & r) | 2), (t.flags |= 128));
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Go(e, n, t);
                else if (19 === e.tag) Go(e, n, t);
                else if (null !== e.child) {
                  ((e.child.return = e), (e = e.child));
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
              }
            r &= 1;
          }
          switch ((B(co, r), a)) {
            case 'forwards':
              for (n = t.child, a = null; null !== n; ) (null !== (e = n.alternate) && null === uo(e) && (a = n), (n = n.sibling));
              (null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)), Yo(t, !1, a, n, l));
              break;
            case 'backwards':
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === uo(e)) {
                  t.child = a;
                  break;
                }
                ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
              }
              Yo(t, !0, n, null, l);
              break;
            case 'together':
              Yo(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Qo(e, t, n) {
          if ((null !== e && (t.dependencies = e.dependencies), (pc |= t.lanes), 0 === (n & t.childLanes))) {
            if (null === e) return null;
            if ((Sa(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (n = Ir((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) ((e = e.sibling), ((n = n.sibling = Ir(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function Xo(e, t) {
          return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ea(e));
        }
        function Ko(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) jo = !0;
            else {
              if (!Xo(e, n) && 0 === (128 & t.flags))
                return (
                  (jo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (G(t, t.stateNode.containerInfo), ba(0, za, e.memoizedState.cache), pa());
                        break;
                      case 27:
                      case 5:
                        $(t);
                        break;
                      case 4:
                        G(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        ba(0, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated ? (lo(t), (t.flags |= 128), null) : 0 !== (n & t.child.childLanes) ? Ho(e, t, n) : (lo(t), null !== (e = Qo(e, t, n)) ? e.sibling : null);
                        lo(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (((r = 0 !== (n & t.childLanes)) || (Sa(e, t, n, !1), (r = 0 !== (n & t.childLanes))), a)) {
                          if (r) return $o(e, t, n);
                          t.flags |= 128;
                        }
                        if ((null !== (a = t.memoizedState) && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)), B(co, co.current), r)) break;
                        return null;
                      case 22:
                      case 23:
                        return ((t.lanes = 0), zo(e, t, n));
                      case 24:
                        ba(0, za, e.memoizedState.cache);
                    }
                    return Qo(e, t, n);
                  })(e, t, n)
                );
              jo = 0 !== (131072 & e.flags);
            }
          else ((jo = !1), la && 0 !== (1048576 & t.flags) && ea(t, Yr, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  a = r._init;
                if (((r = a(r._payload)), (t.type = r), 'function' !== typeof r)) {
                  if (void 0 !== r && null !== r) {
                    if ((a = r.$$typeof) === k) {
                      ((t.tag = 11), (t = Po(null, t, r, e, n)));
                      break e;
                    }
                    if (a === N) {
                      ((t.tag = 14), (t = Lo(null, t, r, e, n)));
                      break e;
                    }
                  }
                  throw ((t = z(r) || r), Error(i(306, t, '')));
                }
                Dr(r) ? ((e = go(r, e)), (t.tag = 1), (t = Do(null, t, r, e, n))) : ((t.tag = 0), (t = Ao(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Ao(e, t, t.type, t.pendingProps, n);
            case 1:
              return Do(e, t, (r = t.type), (a = go(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((G(t, t.stateNode.containerInfo), null === e)) throw Error(i(387));
                r = t.pendingProps;
                var l = t.memoizedState;
                ((a = l.element), rl(e, t), ul(t, r, null, n));
                var o = t.memoizedState;
                if (((r = o.cache), ba(0, za, r), r !== l.cache && ka(t, [za], n, !0), cl(), (r = o.element), l.isDehydrated)) {
                  if (((l = { element: r, isDehydrated: !1, cache: o.cache }), (t.updateQueue.baseState = l), (t.memoizedState = l), 256 & t.flags)) {
                    t = Io(e, t, r, n);
                    break e;
                  }
                  if (r !== a) {
                    (ma((a = Er(Error(i(424)), t))), (t = Io(e, t, r, n)));
                    break e;
                  }
                  if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
                  else e = 'HTML' === e.nodeName ? e.ownerDocument.body : e;
                  for (aa = vd(e.firstChild), ra = t, la = !0, ia = null, oa = !0, n = no(t, null, r, n), t.child = n; n; ) ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((pa(), r === a)) {
                    t = Qo(e, t, n);
                    break e;
                  }
                  To(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Oo(e, t),
                null === e
                  ? (n = Td(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : la || ((n = t.type), (e = t.pendingProps), ((r = rd(U.current).createElement(n))[ze] = t), (r[_e] = e), ed(r, n, e), qe(r), (t.stateNode = r))
                  : (t.memoizedState = Td(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                null
              );
            case 27:
              return (
                $(t),
                null === e && la && ((r = t.stateNode = xd(t.type, t.pendingProps, U.current)), (ra = t), (oa = !0), (a = aa), pd(t.type) ? ((yd = a), (aa = vd(r.firstChild))) : (aa = a)),
                To(e, t, t.pendingProps.children, n),
                Oo(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  la &&
                  ((a = r = aa) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (!r && ('INPUT' !== e.nodeName || 'hidden' !== e.type)) break;
                        } else if (r) {
                          if (!e[Fe])
                            switch (t) {
                              case 'meta':
                                if (!e.hasAttribute('itemprop')) break;
                                return e;
                              case 'link':
                                if ('stylesheet' === (l = e.getAttribute('rel')) && e.hasAttribute('data-precedence')) break;
                                if (
                                  l !== a.rel ||
                                  e.getAttribute('href') !== (null == a.href || '' === a.href ? null : a.href) ||
                                  e.getAttribute('crossorigin') !== (null == a.crossOrigin ? null : a.crossOrigin) ||
                                  e.getAttribute('title') !== (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case 'style':
                                if (e.hasAttribute('data-precedence')) break;
                                return e;
                              case 'script':
                                if (
                                  ((l = e.getAttribute('src')) !== (null == a.src ? null : a.src) ||
                                    e.getAttribute('type') !== (null == a.type ? null : a.type) ||
                                    e.getAttribute('crossorigin') !== (null == a.crossOrigin ? null : a.crossOrigin)) &&
                                  l &&
                                  e.hasAttribute('async') &&
                                  !e.hasAttribute('itemprop')
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ('input' !== t || 'hidden' !== e.type) return e;
                          var l = null == a.name ? null : '' + a.name;
                          if ('hidden' === a.type && e.getAttribute('name') === l) return e;
                        }
                        if (null === (e = vd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, oa))
                      ? ((t.stateNode = r), (ra = t), (aa = vd(r.firstChild)), (oa = !1), (a = !0))
                      : (a = !1)),
                  a || ca(t)),
                $(t),
                (a = t.type),
                (l = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (r = l.children),
                id(a, l) ? (r = null) : null !== o && id(a, o) && (t.flags |= 32),
                null !== t.memoizedState && ((a = Ml(e, t, Ol, null, null, n)), ($d._currentValue = a)),
                Oo(e, t),
                To(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  la &&
                  ((e = n = aa) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ('' === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if ((1 !== e.nodeType || 'INPUT' !== e.nodeName || 'hidden' !== e.type) && !n) return null;
                        if (null === (e = vd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, oa))
                      ? ((t.stateNode = n), (ra = t), (aa = null), (e = !0))
                      : (e = !1)),
                  e || ca(t)),
                null
              );
            case 13:
              return Ho(e, t, n);
            case 4:
              return (G(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = to(t, null, r, n)) : To(e, t, r, n), t.child);
            case 11:
              return Po(e, t, t.type, t.pendingProps, n);
            case 7:
              return (To(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (To(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return ((r = t.pendingProps), ba(0, t.type, r.value), To(e, t, r.children, n), t.child);
            case 9:
              return ((a = t.type._context), (r = t.pendingProps.children), Na(t), (r = r((a = Ca(a)))), (t.flags |= 1), To(e, t, r, n), t.child);
            case 14:
              return Lo(e, t, t.type, t.pendingProps, n);
            case 15:
              return Mo(e, t, t.type, t.pendingProps, n);
            case 19:
              return $o(e, t, n);
            case 31:
              return (
                (r = t.pendingProps),
                (n = t.mode),
                (r = { mode: r.mode, children: r.children }),
                null === e ? (((n = Uo(r, n)).ref = t.ref), (t.child = n), (n.return = t), (t = n)) : (((n = Ir(e.child, r)).ref = t.ref), (t.child = n), (n.return = t), (t = n)),
                t
              );
            case 22:
              return zo(e, t, n);
            case 24:
              return (
                Na(t),
                (r = Ca(za)),
                null === e
                  ? (null === (a = Ha()) && ((a = rc), (l = _a()), (a.pooledCache = l), l.refCount++, null !== l && (a.pooledCacheLanes |= n), (a = l)),
                    (t.memoizedState = { parent: r, cache: a }),
                    nl(t),
                    ba(0, za, a))
                  : (0 !== (e.lanes & n) && (rl(e, t), ul(t, null, null, n), cl()),
                    (a = e.memoizedState),
                    (l = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }), (t.memoizedState = a), 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), ba(0, za, r))
                      : ((r = l.cache), ba(0, za, r), r !== a.cache && ka(t, [za], n, !0))),
                To(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(i(156, t.tag));
        }
        function Jo(e) {
          e.flags |= 4;
        }
        function Zo(e, t) {
          if ('stylesheet' !== t.type || 0 !== (4 & t.state.loading)) e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Bd(t))) {
            if (null !== (t = ro.current) && ((4194048 & lc) === lc ? null !== ao : ((62914560 & lc) !== lc && 0 === (536870912 & lc)) || t !== ao)) throw ((Ja = $a), Ga);
            e.flags |= 8192;
          }
        }
        function es(e, t) {
          (null !== t && (e.flags |= 4), 16384 & e.flags && ((t = 22 !== e.tag ? Se() : 536870912), (e.lanes |= t), (vc |= t)));
        }
        function ts(e, t) {
          if (!la)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; ) (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; ) (null !== n.alternate && (r = n), (n = n.sibling));
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
            }
        }
        function ns(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t) for (var a = e.child; null !== a; ) ((n |= a.lanes | a.childLanes), (r |= 65011712 & a.subtreeFlags), (r |= 65011712 & a.flags), (a.return = e), (a = a.sibling));
          else for (a = e.child; null !== a; ) ((n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function rs(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (ns(t), null);
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                xa(za),
                Y(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) || (fa(t) ? Jo(t) : null === e || (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) || ((t.flags |= 1024), ha())),
                ns(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Jo(t), null !== n ? (ns(t), Zo(t, n)) : (ns(t), (t.flags &= -16777217)))
                  : n
                    ? n !== e.memoizedState
                      ? (Jo(t), ns(t), Zo(t, n))
                      : (ns(t), (t.flags &= -16777217))
                    : (e.memoizedProps !== r && Jo(t), ns(t), (t.flags &= -16777217)),
                null
              );
            case 27:
              (Q(t), (n = U.current));
              var a = t.type;
              if (null !== e && null != t.stateNode) e.memoizedProps !== r && Jo(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return (ns(t), null);
                }
                ((e = H.current), fa(t) ? ua(t) : ((e = xd(a, r, n)), (t.stateNode = e), Jo(t)));
              }
              return (ns(t), null);
            case 5:
              if ((Q(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && Jo(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return (ns(t), null);
                }
                if (((e = H.current), fa(t))) ua(t);
                else {
                  switch (((a = rd(U.current)), e)) {
                    case 1:
                      e = a.createElementNS('http://www.w3.org/2000/svg', n);
                      break;
                    case 2:
                      e = a.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                      break;
                    default:
                      switch (n) {
                        case 'svg':
                          e = a.createElementNS('http://www.w3.org/2000/svg', n);
                          break;
                        case 'math':
                          e = a.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                          break;
                        case 'script':
                          (((e = a.createElement('div')).innerHTML = '<script><\/script>'), (e = e.removeChild(e.firstChild)));
                          break;
                        case 'select':
                          ((e = 'string' === typeof r.is ? a.createElement('select', { is: r.is }) : a.createElement('select')), r.multiple ? (e.multiple = !0) : r.size && (e.size = r.size));
                          break;
                        default:
                          e = 'string' === typeof r.is ? a.createElement(n, { is: r.is }) : a.createElement(n);
                      }
                  }
                  ((e[ze] = t), (e[_e] = r));
                  e: for (a = t.child; null !== a; ) {
                    if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                    else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                      ((a.child.return = a), (a = a.child));
                      continue;
                    }
                    if (a === t) break e;
                    for (; null === a.sibling; ) {
                      if (null === a.return || a.return === t) break e;
                      a = a.return;
                    }
                    ((a.sibling.return = a.return), (a = a.sibling));
                  }
                  t.stateNode = e;
                  e: switch ((ed(e, n, r), n)) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      e = !!r.autoFocus;
                      break e;
                    case 'img':
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Jo(t);
                }
              }
              return (ns(t), (t.flags &= -16777217), null);
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Jo(t);
              else {
                if ('string' !== typeof r && null === t.stateNode) throw Error(i(166));
                if (((e = U.current), fa(t))) {
                  if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (a = ra)))
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  ((e[ze] = t), (e = !!(e.nodeValue === n || (null !== r && !0 === r.suppressHydrationWarning) || Xu(e.nodeValue, n))) || ca(t));
                } else (((e = rd(e).createTextNode(r))[ze] = t), (t.stateNode = e));
              }
              return (ns(t), null);
            case 13:
              if (((r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))) {
                if (((a = fa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(i(318));
                    if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                    a[ze] = t;
                  } else (pa(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4));
                  (ns(t), (a = !1));
                } else ((a = ha()), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), (a = !0));
                if (!a) return 256 & t.flags ? (so(t), t) : (so(t), null);
              }
              if ((so(t), 0 !== (128 & t.flags))) return ((t.lanes = n), t);
              if (((n = null !== r), (e = null !== e && null !== e.memoizedState), n)) {
                ((a = null), null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool));
                var l = null;
                (null !== r.memoizedState && null !== r.memoizedState.cachePool && (l = r.memoizedState.cachePool.pool), l !== a && (r.flags |= 2048));
              }
              return (n !== e && n && (t.child.flags |= 8192), es(t, t.updateQueue), ns(t), null);
            case 4:
              return (Y(), null === e && Wu(t.stateNode.containerInfo), ns(t), null);
            case 10:
              return (xa(t.type), ns(t), null);
            case 19:
              if ((W(co), null === (a = t.memoizedState))) return (ns(t), null);
              if (((r = 0 !== (128 & t.flags)), null === (l = a.rendering)))
                if (r) ts(a, !1);
                else {
                  if (0 !== fc || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = uo(e))) {
                        for (t.flags |= 128, ts(a, !1), e = l.updateQueue, t.updateQueue = e, es(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n; ) (Fr(n, e), (n = n.sibling));
                        return (B(co, (1 & co.current) | 2), t.child);
                      }
                      e = e.sibling;
                    }
                  null !== a.tail && te() > kc && ((t.flags |= 128), (r = !0), ts(a, !1), (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = uo(l))) {
                    if (((t.flags |= 128), (r = !0), (e = e.updateQueue), (t.updateQueue = e), es(t, e), ts(a, !0), null === a.tail && 'hidden' === a.tailMode && !l.alternate && !la))
                      return (ns(t), null);
                  } else 2 * te() - a.renderingStartTime > kc && 536870912 !== n && ((t.flags |= 128), (r = !0), ts(a, !1), (t.lanes = 4194304));
                a.isBackwards ? ((l.sibling = t.child), (t.child = l)) : (null !== (e = a.last) ? (e.sibling = l) : (t.child = l), (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail), (a.rendering = t), (a.tail = t.sibling), (a.renderingStartTime = te()), (t.sibling = null), (e = co.current), B(co, r ? (1 & e) | 2 : 1 & e), t)
                : (ns(t), null);
            case 22:
            case 23:
              return (
                so(t),
                vl(),
                (r = null !== t.memoizedState),
                null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
                r ? 0 !== (536870912 & n) && 0 === (128 & t.flags) && (ns(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ns(t),
                null !== (n = t.updateQueue) && es(t, n.retryQueue),
                (n = null),
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && W(Ba),
                null
              );
            case 24:
              return ((n = null), null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), xa(za), ns(t), null);
            case 25:
            case 30:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function as(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 3:
              return (xa(za), Y(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null);
            case 26:
            case 27:
            case 5:
              return (Q(t), null);
            case 13:
              if ((so(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(i(340));
                pa();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return (W(co), null);
            case 4:
              return (Y(), null);
            case 10:
              return (xa(t.type), null);
            case 22:
            case 23:
              return (so(t), vl(), null !== e && W(Ba), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null);
            case 24:
              return (xa(za), null);
            default:
              return null;
          }
        }
        function ls(e, t) {
          switch ((na(t), t.tag)) {
            case 3:
              (xa(za), Y());
              break;
            case 26:
            case 27:
            case 5:
              Q(t);
              break;
            case 4:
              Y();
              break;
            case 13:
              so(t);
              break;
            case 19:
              W(co);
              break;
            case 10:
              xa(t.type);
              break;
            case 22:
            case 23:
              (so(t), vl(), null !== e && W(Ba));
              break;
            case 24:
              xa(za);
          }
        }
        function is(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var l = n.create,
                    i = n.inst;
                  ((r = l()), (i.destroy = r));
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (o) {
            uu(t, t.return, o);
          }
        }
        function os(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var l = a.next;
              r = l;
              do {
                if ((r.tag & e) === e) {
                  var i = r.inst,
                    o = i.destroy;
                  if (void 0 !== o) {
                    ((i.destroy = void 0), (a = t));
                    var s = n,
                      c = o;
                    try {
                      c();
                    } catch (u) {
                      uu(a, s, u);
                    }
                  }
                }
                r = r.next;
              } while (r !== l);
            }
          } catch (u) {
            uu(t, t.return, u);
          }
        }
        function ss(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              fl(t, n);
            } catch (r) {
              uu(e, e.return, r);
            }
          }
        }
        function cs(e, t, n) {
          ((n.props = go(e.type, e.memoizedProps)), (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (r) {
            uu(e, t, r);
          }
        }
        function us(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              'function' === typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (a) {
            uu(e, t, a);
          }
        }
        function ds(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ('function' === typeof r)
              try {
                r();
              } catch (a) {
                uu(e, t, a);
              } finally {
                ((e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ('function' === typeof n)
              try {
                n(null);
              } catch (l) {
                uu(e, t, l);
              }
            else n.current = null;
        }
        function fs(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n.autoFocus && r.focus();
                break e;
              case 'img':
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            uu(e, e.return, a);
          }
        }
        function ps(e, t, n) {
          try {
            var r = e.stateNode;
            (!(function (e, t, n, r) {
              switch (t) {
                case 'div':
                case 'span':
                case 'svg':
                case 'path':
                case 'a':
                case 'g':
                case 'p':
                case 'li':
                  break;
                case 'input':
                  var a = null,
                    l = null,
                    o = null,
                    s = null,
                    c = null,
                    u = null,
                    d = null;
                  for (h in n) {
                    var f = n[h];
                    if (n.hasOwnProperty(h) && null != f)
                      switch (h) {
                        case 'checked':
                        case 'value':
                          break;
                        case 'defaultValue':
                          c = f;
                        default:
                          r.hasOwnProperty(h) || Ju(e, t, h, null, r, f);
                      }
                  }
                  for (var p in r) {
                    var h = r[p];
                    if (((f = n[p]), r.hasOwnProperty(p) && (null != h || null != f)))
                      switch (p) {
                        case 'type':
                          l = h;
                          break;
                        case 'name':
                          a = h;
                          break;
                        case 'checked':
                          u = h;
                          break;
                        case 'defaultChecked':
                          d = h;
                          break;
                        case 'value':
                          o = h;
                          break;
                        case 'defaultValue':
                          s = h;
                          break;
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                          if (null != h) throw Error(i(137, t));
                          break;
                        default:
                          h !== f && Ju(e, t, p, h, r, f);
                      }
                  }
                  return void gt(e, o, s, c, u, d, l, a);
                case 'select':
                  for (l in ((h = o = s = p = null), n))
                    if (((c = n[l]), n.hasOwnProperty(l) && null != c))
                      switch (l) {
                        case 'value':
                          break;
                        case 'multiple':
                          h = c;
                        default:
                          r.hasOwnProperty(l) || Ju(e, t, l, null, r, c);
                      }
                  for (a in r)
                    if (((l = r[a]), (c = n[a]), r.hasOwnProperty(a) && (null != l || null != c)))
                      switch (a) {
                        case 'value':
                          p = l;
                          break;
                        case 'defaultValue':
                          s = l;
                          break;
                        case 'multiple':
                          o = l;
                        default:
                          l !== c && Ju(e, t, a, l, r, c);
                      }
                  return ((t = s), (n = o), (r = h), void (null != p ? bt(e, !!n, p, !1) : !!r !== !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : '', !1))));
                case 'textarea':
                  for (s in ((h = p = null), n))
                    if (((a = n[s]), n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s)))
                      switch (s) {
                        case 'value':
                        case 'children':
                          break;
                        default:
                          Ju(e, t, s, null, r, a);
                      }
                  for (o in r)
                    if (((a = r[o]), (l = n[o]), r.hasOwnProperty(o) && (null != a || null != l)))
                      switch (o) {
                        case 'value':
                          p = a;
                          break;
                        case 'defaultValue':
                          h = a;
                          break;
                        case 'children':
                          break;
                        case 'dangerouslySetInnerHTML':
                          if (null != a) throw Error(i(91));
                          break;
                        default:
                          a !== l && Ju(e, t, o, a, r, l);
                      }
                  return void xt(e, p, h);
                case 'option':
                  for (var m in n)
                    if (((p = n[m]), n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m)))
                      if ('selected' === m) e.selected = !1;
                      else Ju(e, t, m, null, r, p);
                  for (c in r)
                    if (((p = r[c]), (h = n[c]), r.hasOwnProperty(c) && p !== h && (null != p || null != h)))
                      if ('selected' === c) e.selected = p && 'function' !== typeof p && 'symbol' !== typeof p;
                      else Ju(e, t, c, p, r, h);
                  return;
                case 'img':
                case 'link':
                case 'area':
                case 'base':
                case 'br':
                case 'col':
                case 'embed':
                case 'hr':
                case 'keygen':
                case 'meta':
                case 'param':
                case 'source':
                case 'track':
                case 'wbr':
                case 'menuitem':
                  for (var g in n) ((p = n[g]), n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && Ju(e, t, g, null, r, p));
                  for (u in r)
                    if (((p = r[u]), (h = n[u]), r.hasOwnProperty(u) && p !== h && (null != p || null != h)))
                      switch (u) {
                        case 'children':
                        case 'dangerouslySetInnerHTML':
                          if (null != p) throw Error(i(137, t));
                          break;
                        default:
                          Ju(e, t, u, p, r, h);
                      }
                  return;
                default:
                  if (Ct(t)) {
                    for (var v in n) ((p = n[v]), n.hasOwnProperty(v) && void 0 !== p && !r.hasOwnProperty(v) && Zu(e, t, v, void 0, r, p));
                    for (d in r) ((p = r[d]), (h = n[d]), !r.hasOwnProperty(d) || p === h || (void 0 === p && void 0 === h) || Zu(e, t, d, p, r, h));
                    return;
                  }
              }
              for (var y in n) ((p = n[y]), n.hasOwnProperty(y) && null != p && !r.hasOwnProperty(y) && Ju(e, t, y, null, r, p));
              for (f in r) ((p = r[f]), (h = n[f]), !r.hasOwnProperty(f) || p === h || (null == p && null == h) || Ju(e, t, f, p, r, h));
            })(r, e.type, n, t),
              (r[_e] = t));
          } catch (a) {
            uu(e, e.return, a);
          }
        }
        function hs(e) {
          return 5 === e.tag || 3 === e.tag || 26 === e.tag || (27 === e.tag && pd(e.type)) || 4 === e.tag;
        }
        function ms(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || hs(e.return)) return null;
              e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
              if (27 === e.tag && pd(e.type)) continue e;
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function gs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? (9 === n.nodeType ? n.body : 'HTML' === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t)
                : ((t = 9 === n.nodeType ? n.body : 'HTML' === n.nodeName ? n.ownerDocument.body : n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) || null !== t.onclick || (t.onclick = Ku)));
          else if (4 !== r && (27 === r && pd(e.type) && ((n = e.stateNode), (t = null)), null !== (e = e.child))) for (gs(e, t, n), e = e.sibling; null !== e; ) (gs(e, t, n), (e = e.sibling));
        }
        function vs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (4 !== r && (27 === r && pd(e.type) && (n = e.stateNode), null !== (e = e.child))) for (vs(e, t, n), e = e.sibling; null !== e; ) (vs(e, t, n), (e = e.sibling));
        }
        function ys(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
            (ed(t, r, n), (t[ze] = e), (t[_e] = n));
          } catch (l) {
            uu(e, e.return, l);
          }
        }
        var bs = !1,
          xs = !1,
          ws = !1,
          ks = 'function' === typeof WeakSet ? WeakSet : Set,
          Ss = null;
        function Es(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (Ds(e, n), 4 & r && is(5, n));
              break;
            case 1:
              if ((Ds(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (i) {
                    uu(n, n.return, i);
                  }
                else {
                  var a = go(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                  } catch (o) {
                    uu(n, n.return, o);
                  }
                }
              (64 & r && ss(n), 512 & r && us(n, n.return));
              break;
            case 3:
              if ((Ds(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  fl(e, t);
                } catch (i) {
                  uu(n, n.return, i);
                }
              }
              break;
            case 27:
              null === t && 4 & r && ys(n);
            case 26:
            case 5:
              (Ds(e, n), null === t && 4 & r && fs(n), 512 & r && us(n, n.return));
              break;
            case 12:
              Ds(e, n);
              break;
            case 13:
              (Ds(e, n),
                4 & r && Ls(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ('$?' !== e.data || 'complete' === n.readyState) t();
                    else {
                      var r = function () {
                        (t(), n.removeEventListener('DOMContentLoaded', r));
                      };
                      (n.addEventListener('DOMContentLoaded', r), (e._reactRetry = r));
                    }
                  })(e, (n = hu.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || bs)) {
                ((t = (null !== t && null !== t.memoizedState) || xs), (a = bs));
                var l = xs;
                ((bs = r), (xs = t) && !l ? Fs(e, n, 0 !== (8772 & n.subtreeFlags)) : Ds(e, n), (bs = a), (xs = l));
              }
              break;
            case 30:
              break;
            default:
              Ds(e, n);
          }
        }
        function Ns(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), Ns(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && We(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var Cs = null,
          js = !1;
        function Ts(e, t, n) {
          for (n = n.child; null !== n; ) (Ps(e, t, n), (n = n.sibling));
        }
        function Ps(e, t, n) {
          if (de && 'function' === typeof de.onCommitFiberUnmount)
            try {
              de.onCommitFiberUnmount(ue, n);
            } catch (l) {}
          switch (n.tag) {
            case 26:
              (xs || ds(n, t), Ts(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              xs || ds(n, t);
              var r = Cs,
                a = js;
              (pd(n.type) && ((Cs = n.stateNode), (js = !1)), Ts(e, t, n), wd(n.stateNode), (Cs = r), (js = a));
              break;
            case 5:
              xs || ds(n, t);
            case 6:
              if (((r = Cs), (a = js), (Cs = null), Ts(e, t, n), (js = a), null !== (Cs = r)))
                if (js)
                  try {
                    (9 === Cs.nodeType ? Cs.body : 'HTML' === Cs.nodeName ? Cs.ownerDocument.body : Cs).removeChild(n.stateNode);
                  } catch (i) {
                    uu(n, t, i);
                  }
                else
                  try {
                    Cs.removeChild(n.stateNode);
                  } catch (i) {
                    uu(n, t, i);
                  }
              break;
            case 18:
              null !== Cs && (js ? (hd(9 === (e = Cs).nodeType ? e.body : 'HTML' === e.nodeName ? e.ownerDocument.body : e, n.stateNode), Tf(e)) : hd(Cs, n.stateNode));
              break;
            case 4:
              ((r = Cs), (a = js), (Cs = n.stateNode.containerInfo), (js = !0), Ts(e, t, n), (Cs = r), (js = a));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (xs || os(2, n, t), xs || os(4, n, t), Ts(e, t, n));
              break;
            case 1:
              (xs || (ds(n, t), 'function' === typeof (r = n.stateNode).componentWillUnmount && cs(n, t, r)), Ts(e, t, n));
              break;
            case 21:
              Ts(e, t, n);
              break;
            case 22:
              ((xs = (r = xs) || null !== n.memoizedState), Ts(e, t, n), (xs = r));
              break;
            default:
              Ts(e, t, n);
          }
        }
        function Ls(e, t) {
          if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated))
            try {
              Tf(e);
            } catch (n) {
              uu(t, t.return, n);
            }
        }
        function Ms(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new ks()), t);
              case 22:
                return (null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new ks()), t);
              default:
                throw Error(i(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = mu.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function zs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                l = e,
                o = t,
                s = o;
              e: for (; null !== s; ) {
                switch (s.tag) {
                  case 27:
                    if (pd(s.type)) {
                      ((Cs = s.stateNode), (js = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Cs = s.stateNode), (js = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Cs = s.stateNode.containerInfo), (js = !0));
                    break e;
                }
                s = s.return;
              }
              if (null === Cs) throw Error(i(160));
              (Ps(l, o, a), (Cs = null), (js = !1), null !== (l = a.alternate) && (l.return = null), (a.return = null));
            }
          if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) (Os(t, e), (t = t.sibling));
        }
        var _s = null;
        function Os(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (zs(t, e), As(e), 4 & r && (os(3, e, e.return), is(3, e), os(5, e, e.return)));
              break;
            case 1:
              (zs(t, e),
                As(e),
                512 & r && (xs || null === n || ds(n, n.return)),
                64 & r && bs && null !== (e = e.updateQueue) && null !== (r = e.callbacks) && ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r))));
              break;
            case 26:
              var a = _s;
              if ((zs(t, e), As(e), 512 & r && (xs || null === n || ds(n, n.return)), 4 & r)) {
                var l = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        ((r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                        t: switch (r) {
                          case 'title':
                            ((!(l = a.getElementsByTagName('title')[0]) || l[Fe] || l[ze] || 'http://www.w3.org/2000/svg' === l.namespaceURI || l.hasAttribute('itemprop')) &&
                              ((l = a.createElement(r)), a.head.insertBefore(l, a.querySelector('head > title'))),
                              ed(l, r, n),
                              (l[ze] = e),
                              qe(l),
                              (r = l));
                            break e;
                          case 'link':
                            var o = Fd('link', 'href', a).get(r + (n.href || ''));
                            if (o)
                              for (var s = 0; s < o.length; s++)
                                if (
                                  (l = o[s]).getAttribute('href') === (null == n.href || '' === n.href ? null : n.href) &&
                                  l.getAttribute('rel') === (null == n.rel ? null : n.rel) &&
                                  l.getAttribute('title') === (null == n.title ? null : n.title) &&
                                  l.getAttribute('crossorigin') === (null == n.crossOrigin ? null : n.crossOrigin)
                                ) {
                                  o.splice(s, 1);
                                  break t;
                                }
                            (ed((l = a.createElement(r)), r, n), a.head.appendChild(l));
                            break;
                          case 'meta':
                            if ((o = Fd('meta', 'content', a).get(r + (n.content || ''))))
                              for (s = 0; s < o.length; s++)
                                if (
                                  (l = o[s]).getAttribute('content') === (null == n.content ? null : '' + n.content) &&
                                  l.getAttribute('name') === (null == n.name ? null : n.name) &&
                                  l.getAttribute('property') === (null == n.property ? null : n.property) &&
                                  l.getAttribute('http-equiv') === (null == n.httpEquiv ? null : n.httpEquiv) &&
                                  l.getAttribute('charset') === (null == n.charSet ? null : n.charSet)
                                ) {
                                  o.splice(s, 1);
                                  break t;
                                }
                            (ed((l = a.createElement(r)), r, n), a.head.appendChild(l));
                            break;
                          default:
                            throw Error(i(468, r));
                        }
                        ((l[ze] = e), qe(l), (r = l));
                      }
                      e.stateNode = r;
                    } else Wd(a, e.type, e.stateNode);
                  else e.stateNode = Od(a, r, e.memoizedProps);
                else
                  l !== r
                    ? (null === l ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : l.count--, null === r ? Wd(a, e.type, e.stateNode) : Od(a, r, e.memoizedProps))
                    : null === r && null !== e.stateNode && ps(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (zs(t, e), As(e), 512 & r && (xs || null === n || ds(n, n.return)), null !== n && 4 & r && ps(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if ((zs(t, e), As(e), 512 & r && (xs || null === n || ds(n, n.return)), 32 & e.flags)) {
                a = e.stateNode;
                try {
                  kt(a, '');
                } catch (h) {
                  uu(e, e.return, h);
                }
              }
              (4 & r && null != e.stateNode && ps(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a), 1024 & r && (ws = !0));
              break;
            case 6:
              if ((zs(t, e), As(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                ((r = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = r;
                } catch (h) {
                  uu(e, e.return, h);
                }
              }
              break;
            case 3:
              if (((Id = null), (a = _s), (_s = Ed(t.containerInfo)), zs(t, e), (_s = a), As(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
                try {
                  Tf(t.containerInfo);
                } catch (h) {
                  uu(e, e.return, h);
                }
              ws && ((ws = !1), Rs(e));
              break;
            case 4:
              ((r = _s), (_s = Ed(e.stateNode.containerInfo)), zs(t, e), As(e), (_s = r));
              break;
            case 12:
            default:
              (zs(t, e), As(e));
              break;
            case 13:
              (zs(t, e),
                As(e),
                8192 & e.child.flags && (null !== e.memoizedState) !== (null !== n && null !== n.memoizedState) && (wc = te()),
                4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Ms(e, r)));
              break;
            case 22:
              a = null !== e.memoizedState;
              var c = null !== n && null !== n.memoizedState,
                u = bs,
                d = xs;
              if (((bs = u || a), (xs = d || c), zs(t, e), (xs = d), (bs = u), As(e), 8192 & r))
                e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || c || bs || xs || Is(e)), n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((l = c.stateNode), a)) 'function' === typeof (o = l.style).setProperty ? o.setProperty('display', 'none', 'important') : (o.display = 'none');
                        else {
                          s = c.stateNode;
                          var f = c.memoizedProps.style,
                            p = void 0 !== f && null !== f && f.hasOwnProperty('display') ? f.display : null;
                          s.style.display = null == p || 'boolean' === typeof p ? '' : ('' + p).trim();
                        }
                      } catch (h) {
                        uu(c, c.return, h);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = a ? '' : c.memoizedProps;
                      } catch (h) {
                        uu(c, c.return, h);
                      }
                    }
                  } else if (((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) && null !== t.child) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    (n === t && (n = null), (t = t.return));
                  }
                  (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
                }
              4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), Ms(e, n));
              break;
            case 19:
              (zs(t, e), As(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), Ms(e, r)));
            case 30:
            case 21:
          }
        }
        function As(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, r = e.return; null !== r; ) {
                if (hs(r)) {
                  n = r;
                  break;
                }
                r = r.return;
              }
              if (null == n) throw Error(i(160));
              switch (n.tag) {
                case 27:
                  var a = n.stateNode;
                  vs(e, ms(e), a);
                  break;
                case 5:
                  var l = n.stateNode;
                  (32 & n.flags && (kt(l, ''), (n.flags &= -33)), vs(e, ms(e), l));
                  break;
                case 3:
                case 4:
                  var o = n.stateNode.containerInfo;
                  gs(e, ms(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              uu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function Rs(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              (Rs(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling));
            }
        }
        function Ds(e, t) {
          if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) (Es(e, t.alternate, t), (t = t.sibling));
        }
        function Is(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (os(4, t, t.return), Is(t));
                break;
              case 1:
                ds(t, t.return);
                var n = t.stateNode;
                ('function' === typeof n.componentWillUnmount && cs(t, t.return, n), Is(t));
                break;
              case 27:
                wd(t.stateNode);
              case 26:
              case 5:
                (ds(t, t.return), Is(t));
                break;
              case 22:
                null === t.memoizedState && Is(t);
                break;
              default:
                Is(t);
            }
            e = e.sibling;
          }
        }
        function Fs(e, t, n) {
          for (n = n && 0 !== (8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
              a = e,
              l = t,
              i = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                (Fs(a, l, n), is(4, l));
                break;
              case 1:
                if ((Fs(a, l, n), 'function' === typeof (a = (r = l).stateNode).componentDidMount))
                  try {
                    a.componentDidMount();
                  } catch (c) {
                    uu(r, r.return, c);
                  }
                if (null !== (a = (r = l).updateQueue)) {
                  var o = r.stateNode;
                  try {
                    var s = a.shared.hiddenCallbacks;
                    if (null !== s) for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) dl(s[a], o);
                  } catch (c) {
                    uu(r, r.return, c);
                  }
                }
                (n && 64 & i && ss(l), us(l, l.return));
                break;
              case 27:
                ys(l);
              case 26:
              case 5:
                (Fs(a, l, n), n && null === r && 4 & i && fs(l), us(l, l.return));
                break;
              case 12:
                Fs(a, l, n);
                break;
              case 13:
                (Fs(a, l, n), n && 4 & i && Ls(a, l));
                break;
              case 22:
                (null === l.memoizedState && Fs(a, l, n), us(l, l.return));
                break;
              case 30:
                break;
              default:
                Fs(a, l, n);
            }
            t = t.sibling;
          }
        }
        function Ws(e, t) {
          var n = null;
          (null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Oa(n)));
        }
        function Bs(e, t) {
          ((e = null), null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Oa(e)));
        }
        function Hs(e, t, n, r) {
          if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) (Vs(e, t, n, r), (t = t.sibling));
        }
        function Vs(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (Hs(e, t, n, r), 2048 & a && is(9, t));
              break;
            case 1:
            case 13:
            default:
              Hs(e, t, n, r);
              break;
            case 3:
              (Hs(e, t, n, r), 2048 & a && ((e = null), null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Oa(e))));
              break;
            case 12:
              if (2048 & a) {
                (Hs(e, t, n, r), (e = t.stateNode));
                try {
                  var l = t.memoizedProps,
                    i = l.id,
                    o = l.onPostCommit;
                  'function' === typeof o && o(i, null === t.alternate ? 'mount' : 'update', e.passiveEffectDuration, -0);
                } catch (s) {
                  uu(t, t.return, s);
                }
              } else Hs(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              ((l = t.stateNode),
                (i = t.alternate),
                null !== t.memoizedState
                  ? 2 & l._visibility
                    ? Hs(e, t, n, r)
                    : qs(e, t)
                  : 2 & l._visibility
                    ? Hs(e, t, n, r)
                    : ((l._visibility |= 2), Us(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & a && Ws(i, t));
              break;
            case 24:
              (Hs(e, t, n, r), 2048 & a && Bs(t.alternate, t));
          }
        }
        function Us(e, t, n, r, a) {
          for (a = a && 0 !== (10256 & t.subtreeFlags), t = t.child; null !== t; ) {
            var l = e,
              i = t,
              o = n,
              s = r,
              c = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                (Us(l, i, o, s, a), is(8, i));
                break;
              case 23:
                break;
              case 22:
                var u = i.stateNode;
                (null !== i.memoizedState ? (2 & u._visibility ? Us(l, i, o, s, a) : qs(l, i)) : ((u._visibility |= 2), Us(l, i, o, s, a)), a && 2048 & c && Ws(i.alternate, i));
                break;
              case 24:
                (Us(l, i, o, s, a), a && 2048 & c && Bs(i.alternate, i));
                break;
              default:
                Us(l, i, o, s, a);
            }
            t = t.sibling;
          }
        }
        function qs(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  (qs(n, r), 2048 & a && Ws(r.alternate, r));
                  break;
                case 24:
                  (qs(n, r), 2048 & a && Bs(r.alternate, r));
                  break;
                default:
                  qs(n, r);
              }
              t = t.sibling;
            }
        }
        var Gs = 8192;
        function Ys(e) {
          if (e.subtreeFlags & Gs) for (e = e.child; null !== e; ) ($s(e), (e = e.sibling));
        }
        function $s(e) {
          switch (e.tag) {
            case 26:
              (Ys(e),
                e.flags & Gs &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Hd) throw Error(i(475));
                    var r = Hd;
                    if ('stylesheet' === t.type && ('string' !== typeof n.media || !1 !== matchMedia(n.media).matches) && 0 === (4 & t.state.loading)) {
                      if (null === t.instance) {
                        var a = Pd(n.href),
                          l = e.querySelector(Ld(a));
                        if (l)
                          return (
                            null !== (e = l._p) && 'object' === typeof e && 'function' === typeof e.then && (r.count++, (r = Ud.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = l),
                            void qe(l)
                          );
                        ((l = e.ownerDocument || e), (n = Md(n)), (a = kd.get(a)) && Rd(n, a), qe((l = l.createElement('link'))));
                        var o = l;
                        ((o._p = new Promise(function (e, t) {
                          ((o.onload = e), (o.onerror = t));
                        })),
                          ed(l, 'link', n),
                          (t.instance = l));
                      }
                      (null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) && 0 === (3 & t.state.loading) && (r.count++, (t = Ud.bind(r)), e.addEventListener('load', t), e.addEventListener('error', t)));
                    }
                  })(_s, e.memoizedState, e.memoizedProps));
              break;
            case 5:
            default:
              Ys(e);
              break;
            case 3:
            case 4:
              var t = _s;
              ((_s = Ed(e.stateNode.containerInfo)), Ys(e), (_s = t));
              break;
            case 22:
              null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? ((t = Gs), (Gs = 16777216), Ys(e), (Gs = t)) : Ys(e));
          }
        }
        function Qs(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
          }
        }
        function Xs(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Ss = r), Zs(r, e));
              }
            Qs(e);
          }
          if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) (Ks(e), (e = e.sibling));
        }
        function Ks(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (Xs(e), 2048 & e.flags && os(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              Xs(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? ((t._visibility &= -3), Js(e)) : Xs(e);
          }
        }
        function Js(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Ss = r), Zs(r, e));
              }
            Qs(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                (os(8, t, t.return), Js(t));
                break;
              case 22:
                2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), Js(t));
                break;
              default:
                Js(t);
            }
            e = e.sibling;
          }
        }
        function Zs(e, t) {
          for (; null !== Ss; ) {
            var n = Ss;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                os(8, n, t);
                break;
              case 23:
              case 22:
                if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Oa(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Ss = r));
            else
              e: for (n = e; null !== Ss; ) {
                var a = (r = Ss).sibling,
                  l = r.return;
                if ((Ns(r), r === n)) {
                  Ss = null;
                  break e;
                }
                if (null !== a) {
                  ((a.return = l), (Ss = a));
                  break e;
                }
                Ss = l;
              }
          }
        }
        var ec = {
            getCacheForType: function (e) {
              var t = Ca(za),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
          },
          tc = 'function' === typeof WeakMap ? WeakMap : Map,
          nc = 0,
          rc = null,
          ac = null,
          lc = 0,
          ic = 0,
          oc = null,
          sc = !1,
          cc = !1,
          uc = !1,
          dc = 0,
          fc = 0,
          pc = 0,
          hc = 0,
          mc = 0,
          gc = 0,
          vc = 0,
          yc = null,
          bc = null,
          xc = !1,
          wc = 0,
          kc = 1 / 0,
          Sc = null,
          Ec = null,
          Nc = 0,
          Cc = null,
          jc = null,
          Tc = 0,
          Pc = 0,
          Lc = null,
          Mc = null,
          zc = 0,
          _c = null;
        function Oc() {
          if (0 !== (2 & nc) && 0 !== lc) return lc & -lc;
          if (null !== O.T) {
            return 0 !== Da ? Da : Pu();
          }
          return Le();
        }
        function Ac() {
          0 === gc && (gc = 0 === (536870912 & lc) || la ? ke() : 536870912);
          var e = ro.current;
          return (null !== e && (e.flags |= 32), gc);
        }
        function Rc(e, t, n) {
          (((e !== rc || (2 !== ic && 9 !== ic)) && null === e.cancelPendingCommit) || (Vc(e, 0), Wc(e, lc, gc, !1)),
            Ne(e, n),
            (0 !== (2 & nc) && e === rc) || (e === rc && (0 === (2 & nc) && (hc |= n), 4 === fc && Wc(e, lc, gc, !1)), ku(e)));
        }
        function Dc(e, t, n) {
          if (0 !== (6 & nc)) throw Error(i(327));
          for (
            var r = (!n && 0 === (124 & t) && 0 === (t & e.expiredLanes)) || xe(e, t),
              a = r
                ? (function (e, t) {
                    var n = nc;
                    nc |= 2;
                    var r = qc(),
                      a = Gc();
                    rc !== e || lc !== t ? ((Sc = null), (kc = te() + 500), Vc(e, t)) : (cc = xe(e, t));
                    e: for (;;)
                      try {
                        if (0 !== ic && null !== ac) {
                          t = ac;
                          var l = oc;
                          t: switch (ic) {
                            case 1:
                              ((ic = 0), (oc = null), Zc(e, t, l, 1));
                              break;
                            case 2:
                            case 9:
                              if (Qa(l)) {
                                ((ic = 0), (oc = null), Jc(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== ic && 9 !== ic) || rc !== e || (ic = 7), ku(e));
                              }),
                                l.then(t, t));
                              break e;
                            case 3:
                              ic = 7;
                              break e;
                            case 4:
                              ic = 5;
                              break e;
                            case 7:
                              Qa(l) ? ((ic = 0), (oc = null), Jc(t)) : ((ic = 0), (oc = null), Zc(e, t, l, 7));
                              break;
                            case 5:
                              var o = null;
                              switch (ac.tag) {
                                case 26:
                                  o = ac.memoizedState;
                                case 5:
                                case 27:
                                  var s = ac;
                                  if (!o || Bd(o)) {
                                    ((ic = 0), (oc = null));
                                    var c = s.sibling;
                                    if (null !== c) ac = c;
                                    else {
                                      var u = s.return;
                                      null !== u ? ((ac = u), eu(u)) : (ac = null);
                                    }
                                    break t;
                                  }
                              }
                              ((ic = 0), (oc = null), Zc(e, t, l, 5));
                              break;
                            case 6:
                              ((ic = 0), (oc = null), Zc(e, t, l, 6));
                              break;
                            case 8:
                              (Hc(), (fc = 6));
                              break e;
                            default:
                              throw Error(i(462));
                          }
                        }
                        Xc();
                        break;
                      } catch (d) {
                        Uc(e, d);
                      }
                    return ((ya = va = null), (O.H = r), (O.A = a), (nc = n), null !== ac ? 0 : ((rc = null), (lc = 0), Tr(), fc));
                  })(e, t)
                : $c(e, t, !0),
              l = r;
            ;

          ) {
            if (0 === a) {
              cc && !r && Wc(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !l || Fc(n))) {
              if (2 === a) {
                if (((l = t), e.errorRecoveryDisabledLanes & l)) var o = 0;
                else o = 0 !== (o = -536870913 & e.pendingLanes) ? o : 536870912 & o ? 536870912 : 0;
                if (0 !== o) {
                  t = o;
                  e: {
                    var s = e;
                    a = yc;
                    var c = s.current.memoizedState.isDehydrated;
                    if ((c && (Vc(s, o).flags |= 256), 2 !== (o = $c(s, o, !1)))) {
                      if (uc && !c) {
                        ((s.errorRecoveryDisabledLanes |= l), (hc |= l), (a = 4));
                        break e;
                      }
                      ((l = bc), (bc = a), null !== l && (null === bc ? (bc = l) : bc.push.apply(bc, l)));
                    }
                    a = o;
                  }
                  if (((l = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                (Vc(e, 0), Wc(e, t, 0, !0));
                break;
              }
              e: {
                switch (((r = e), (l = a))) {
                  case 0:
                  case 1:
                    throw Error(i(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    Wc(r, t, gc, !sc);
                    break e;
                  case 2:
                    bc = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(i(329));
                }
                if ((62914560 & t) === t && 10 < (a = wc + 300 - te())) {
                  if ((Wc(r, t, gc, !sc), 0 !== be(r, 0, !0))) break e;
                  r.timeoutHandle = sd(Ic.bind(null, r, n, bc, Sc, xc, t, gc, hc, vc, sc, l, 2, -0, 0), a);
                } else Ic(r, n, bc, Sc, xc, t, gc, hc, vc, sc, l, 0, -0, 0);
              }
              break;
            }
            ((a = $c(e, t, !1)), (l = !1));
          }
          ku(e);
        }
        function Ic(e, t, n, r, a, l, o, s, c, u, d, f, p, h) {
          if (
            ((e.timeoutHandle = -1),
            (8192 & (f = t.subtreeFlags) || 16785408 === (16785408 & f)) &&
              ((Hd = { stylesheets: null, count: 0, unsuspend: Vd }),
              $s(t),
              null !==
                (f = (function () {
                  if (null === Hd) throw Error(i(475));
                  var e = Hd;
                  return (
                    e.stylesheets && 0 === e.count && Gd(e, e.stylesheets),
                    0 < e.count
                      ? function (t) {
                          var n = setTimeout(function () {
                            if ((e.stylesheets && Gd(e, e.stylesheets), e.unsuspend)) {
                              var t = e.unsuspend;
                              ((e.unsuspend = null), t());
                            }
                          }, 6e4);
                          return (
                            (e.unsuspend = t),
                            function () {
                              ((e.unsuspend = null), clearTimeout(n));
                            }
                          );
                        }
                      : null
                  );
                })())))
          )
            return ((e.cancelPendingCommit = f(nu.bind(null, e, t, l, n, r, a, o, s, c, d, 1, p, h))), void Wc(e, l, o, !u));
          nu(e, t, l, n, r, a, o, s, c);
        }
        function Fc(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  l = a.getSnapshot;
                a = a.value;
                try {
                  if (!Qn(l(), a)) return !1;
                } catch (i) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) ((n.return = t), (t = n));
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }
          return !0;
        }
        function Wc(e, t, n, r) {
          ((t &= ~mc), (t &= ~hc), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), r && (e.warmLanes |= t), (r = e.expirationTimes));
          for (var a = t; 0 < a; ) {
            var l = 31 - pe(a),
              i = 1 << l;
            ((r[l] = -1), (a &= ~i));
          }
          0 !== n && Ce(e, n, t);
        }
        function Bc() {
          return 0 !== (6 & nc) || (Su(0, !1), !1);
        }
        function Hc() {
          if (null !== ac) {
            if (0 === ic) var e = ac.return;
            else ((ya = va = null), Dl((e = ac)), ($i = null), (Qi = 0), (e = ac));
            for (; null !== e; ) (ls(e.alternate, e), (e = e.return));
            ac = null;
          }
        }
        function Vc(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), cd(n)),
            null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
            Hc(),
            (rc = e),
            (ac = n = Ir(e.current, null)),
            (lc = t),
            (ic = 0),
            (oc = null),
            (sc = !1),
            (cc = xe(e, t)),
            (uc = !1),
            (vc = gc = mc = hc = pc = fc = 0),
            (bc = yc = null),
            (xc = !1),
            0 !== (8 & t) && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - pe(r),
                l = 1 << a;
              ((t |= e[a]), (r &= ~l));
            }
          return ((dc = t), Tr(), n);
        }
        function Uc(e, t) {
          ((bl = null),
            (O.H = Ui),
            t === qa || t === Ya ? ((t = Za()), (ic = 3)) : t === Ga ? ((t = Za()), (ic = 4)) : (ic = t === Co ? 8 : null !== t && 'object' === typeof t && 'function' === typeof t.then ? 6 : 1),
            (oc = t),
            null === ac && ((fc = 1), wo(e, Er(t, e.current))));
        }
        function qc() {
          var e = O.H;
          return ((O.H = Ui), null === e ? Ui : e);
        }
        function Gc() {
          var e = O.A;
          return ((O.A = ec), e);
        }
        function Yc() {
          ((fc = 4), sc || ((4194048 & lc) !== lc && null !== ro.current) || (cc = !0), (0 === (134217727 & pc) && 0 === (134217727 & hc)) || null === rc || Wc(rc, lc, gc, !1));
        }
        function $c(e, t, n) {
          var r = nc;
          nc |= 2;
          var a = qc(),
            l = Gc();
          ((rc === e && lc === t) || ((Sc = null), Vc(e, t)), (t = !1));
          var i = fc;
          e: for (;;)
            try {
              if (0 !== ic && null !== ac) {
                var o = ac,
                  s = oc;
                switch (ic) {
                  case 8:
                    (Hc(), (i = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === ro.current && (t = !0);
                    var c = ic;
                    if (((ic = 0), (oc = null), Zc(e, o, s, c), n && cc)) {
                      i = 0;
                      break e;
                    }
                    break;
                  default:
                    ((c = ic), (ic = 0), (oc = null), Zc(e, o, s, c));
                }
              }
              (Qc(), (i = fc));
              break;
            } catch (u) {
              Uc(e, u);
            }
          return (t && e.shellSuspendCounter++, (ya = va = null), (nc = r), (O.H = a), (O.A = l), null === ac && ((rc = null), (lc = 0), Tr()), i);
        }
        function Qc() {
          for (; null !== ac; ) Kc(ac);
        }
        function Xc() {
          for (; null !== ac && !Z(); ) Kc(ac);
        }
        function Kc(e) {
          var t = Ko(e.alternate, e, dc);
          ((e.memoizedProps = e.pendingProps), null === t ? eu(e) : (ac = t));
        }
        function Jc(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Ro(n, t, t.pendingProps, t.type, void 0, lc);
              break;
            case 11:
              t = Ro(n, t, t.pendingProps, t.type.render, t.ref, lc);
              break;
            case 5:
              Dl(t);
            default:
              (ls(n, t), (t = Ko(n, (t = ac = Fr(t, dc)), dc)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? eu(e) : (ac = t));
        }
        function Zc(e, t, n, r) {
          ((ya = va = null), Dl(t), ($i = null), (Qi = 0));
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (((n.flags |= 32768), null !== r && 'object' === typeof r && 'function' === typeof r.then)) {
                  if ((null !== (t = n.alternate) && Sa(t, n, a, !0), null !== (n = ro.current))) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === ao ? Yc() : null === n.alternate && 0 === fc && (fc = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === $a ? (n.flags |= 16384) : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r), du(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === $a
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }), (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                  ? (t.retryQueue = new Set([r]))
                                  : n.add(r),
                              du(e, r, a)),
                          !1
                        );
                    }
                    throw Error(i(435, n.tag));
                  }
                  return (du(e, r, a), Yc(), !1);
                }
                if (la)
                  return (
                    null !== (t = ro.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256), (t.flags |= 65536), (t.lanes = a), r !== sa && ma(Er((e = Error(i(422), { cause: r })), n)))
                      : (r !== sa && ma(Er((t = Error(i(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = Er(r, n)),
                        ol(e, (a = So(e.stateNode, r, a))),
                        4 !== fc && (fc = 2)),
                    !1
                  );
                var l = Error(i(520), { cause: r });
                if (((l = Er(l, n)), null === yc ? (yc = [l]) : yc.push(l), 4 !== fc && (fc = 2), null === t)) return !0;
                ((r = Er(r, n)), (n = t));
                do {
                  switch (n.tag) {
                    case 3:
                      return ((n.flags |= 65536), (e = a & -a), (n.lanes |= e), ol(n, (e = So(n.stateNode, r, e))), !1);
                    case 1:
                      if (
                        ((t = n.type),
                        (l = n.stateNode),
                        0 === (128 & n.flags) && ('function' === typeof t.getDerivedStateFromError || (null !== l && 'function' === typeof l.componentDidCatch && (null === Ec || !Ec.has(l)))))
                      )
                        return ((n.flags |= 65536), (a &= -a), (n.lanes |= a), No((a = Eo(a)), e, n, r), ol(n, a), !1);
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, lc)
            )
              return ((fc = 1), wo(e, Er(n, e.current)), void (ac = null));
          } catch (l) {
            if (null !== a) throw ((ac = a), l);
            return ((fc = 1), wo(e, Er(n, e.current)), void (ac = null));
          }
          32768 & t.flags
            ? (la || 1 === r
                ? (e = !0)
                : cc || 0 !== (536870912 & lc)
                  ? (e = !1)
                  : ((sc = e = !0), (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = ro.current) && 13 === r.tag && (r.flags |= 16384)),
              tu(t, e))
            : eu(t);
        }
        function eu(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void tu(t, sc);
            e = t.return;
            var n = rs(t.alternate, t, dc);
            if (null !== n) return void (ac = n);
            if (null !== (t = t.sibling)) return void (ac = t);
            ac = t = e;
          } while (null !== t);
          0 === fc && (fc = 5);
        }
        function tu(e, t) {
          do {
            var n = as(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (ac = n));
            if ((null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)), !t && null !== (e = e.sibling))) return void (ac = e);
            ac = e = n;
          } while (null !== e);
          ((fc = 6), (ac = null));
        }
        function nu(e, t, n, r, a, l, o, s, c) {
          e.cancelPendingCommit = null;
          do {
            ou();
          } while (0 !== Nc);
          if (0 !== (6 & nc)) throw Error(i(327));
          if (null !== t) {
            if (t === e.current) throw Error(i(177));
            if (
              ((l = t.lanes | t.childLanes),
              (function (e, t, n, r, a, l) {
                var i = e.pendingLanes;
                ((e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0));
                var o = e.entanglements,
                  s = e.expirationTimes,
                  c = e.hiddenUpdates;
                for (n = i & ~n; 0 < n; ) {
                  var u = 31 - pe(n),
                    d = 1 << u;
                  ((o[u] = 0), (s[u] = -1));
                  var f = c[u];
                  if (null !== f)
                    for (c[u] = null, u = 0; u < f.length; u++) {
                      var p = f[u];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~d;
                }
                (0 !== r && Ce(e, r, 0), 0 !== l && 0 === a && 0 !== e.tag && (e.suspendedLanes |= l & ~(i & ~t)));
              })(e, n, (l |= jr), o, s, c),
              e === rc && ((ac = rc = null), (lc = 0)),
              (jc = t),
              (Cc = e),
              (Tc = n),
              (Pc = l),
              (Lc = a),
              (Mc = r),
              0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags)
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  K(le, function () {
                    return (su(), null);
                  }))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (r = 0 !== (13878 & t.flags)),
              0 !== (13878 & t.subtreeFlags) || r)
            ) {
              ((r = O.T), (O.T = null), (a = A.p), (A.p = 2), (o = nc), (nc |= 4));
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (td = nf), tr((e = er(e))))) {
                    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r = (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode;
                          var a = r.anchorOffset,
                            l = r.focusNode;
                          r = r.focusOffset;
                          try {
                            (n.nodeType, l.nodeType);
                          } catch (g) {
                            n = null;
                            break e;
                          }
                          var o = 0,
                            s = -1,
                            c = -1,
                            u = 0,
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var h;
                              f !== n || (0 !== a && 3 !== f.nodeType) || (s = o + a),
                                f !== l || (0 !== r && 3 !== f.nodeType) || (c = o + r),
                                3 === f.nodeType && (o += f.nodeValue.length),
                                null !== (h = f.firstChild);

                            )
                              ((p = f), (f = h));
                            for (;;) {
                              if (f === e) break t;
                              if ((p === n && ++u === a && (s = o), p === l && ++d === r && (c = o), null !== (h = f.nextSibling))) break;
                              p = (f = p).parentNode;
                            }
                            f = h;
                          }
                          n = -1 === s || -1 === c ? null : { start: s, end: c };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (nd = { focusedElem: e, selectionRange: n }, nf = !1, Ss = t; null !== Ss; )
                    if (((e = (t = Ss).child), 0 !== (1024 & t.subtreeFlags) && null !== e)) ((e.return = t), (Ss = e));
                    else
                      for (; null !== Ss; ) {
                        switch (((l = (t = Ss).alternate), (e = t.flags), t.tag)) {
                          case 0:
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (0 !== (1024 & e) && null !== l) {
                              ((e = void 0), (n = t), (a = l.memoizedProps), (l = l.memoizedState), (r = n.stateNode));
                              try {
                                var m = go(n.type, a, (n.elementType, n.type));
                                ((e = r.getSnapshotBeforeUpdate(m, l)), (r.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (v) {
                                uu(n, n.return, v);
                              }
                            }
                            break;
                          case 3:
                            if (0 !== (1024 & e))
                              if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) md(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case 'HEAD':
                                  case 'HTML':
                                  case 'BODY':
                                    md(e);
                                    break;
                                  default:
                                    e.textContent = '';
                                }
                            break;
                          default:
                            if (0 !== (1024 & e)) throw Error(i(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (Ss = e));
                          break;
                        }
                        Ss = t.return;
                      }
                })(e, t);
              } finally {
                ((nc = o), (A.p = a), (O.T = r));
              }
            }
            ((Nc = 1), ru(), au(), lu());
          }
        }
        function ru() {
          if (1 === Nc) {
            Nc = 0;
            var e = Cc,
              t = jc,
              n = 0 !== (13878 & t.flags);
            if (0 !== (13878 & t.subtreeFlags) || n) {
              ((n = O.T), (O.T = null));
              var r = A.p;
              A.p = 2;
              var a = nc;
              nc |= 4;
              try {
                Os(t, e);
                var l = nd,
                  i = er(e.containerInfo),
                  o = l.focusedElem,
                  s = l.selectionRange;
                if (i !== o && o && o.ownerDocument && Zn(o.ownerDocument.documentElement, o)) {
                  if (null !== s && tr(o)) {
                    var c = s.start,
                      u = s.end;
                    if ((void 0 === u && (u = c), 'selectionStart' in o)) ((o.selectionStart = c), (o.selectionEnd = Math.min(u, o.value.length)));
                    else {
                      var d = o.ownerDocument || document,
                        f = (d && d.defaultView) || window;
                      if (f.getSelection) {
                        var p = f.getSelection(),
                          h = o.textContent.length,
                          m = Math.min(s.start, h),
                          g = void 0 === s.end ? m : Math.min(s.end, h);
                        !p.extend && m > g && ((i = g), (g = m), (m = i));
                        var v = Jn(o, m),
                          y = Jn(o, g);
                        if (v && y && (1 !== p.rangeCount || p.anchorNode !== v.node || p.anchorOffset !== v.offset || p.focusNode !== y.node || p.focusOffset !== y.offset)) {
                          var b = d.createRange();
                          (b.setStart(v.node, v.offset), p.removeAllRanges(), m > g ? (p.addRange(b), p.extend(y.node, y.offset)) : (b.setEnd(y.node, y.offset), p.addRange(b)));
                        }
                      }
                    }
                  }
                  for (d = [], p = o; (p = p.parentNode); ) 1 === p.nodeType && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
                  for ('function' === typeof o.focus && o.focus(), o = 0; o < d.length; o++) {
                    var x = d[o];
                    ((x.element.scrollLeft = x.left), (x.element.scrollTop = x.top));
                  }
                }
                ((nf = !!td), (nd = td = null));
              } finally {
                ((nc = a), (A.p = r), (O.T = n));
              }
            }
            ((e.current = t), (Nc = 2));
          }
        }
        function au() {
          if (2 === Nc) {
            Nc = 0;
            var e = Cc,
              t = jc,
              n = 0 !== (8772 & t.flags);
            if (0 !== (8772 & t.subtreeFlags) || n) {
              ((n = O.T), (O.T = null));
              var r = A.p;
              A.p = 2;
              var a = nc;
              nc |= 4;
              try {
                Es(e, t.alternate, t);
              } finally {
                ((nc = a), (A.p = r), (O.T = n));
              }
            }
            Nc = 3;
          }
        }
        function lu() {
          if (4 === Nc || 3 === Nc) {
            ((Nc = 0), ee());
            var e = Cc,
              t = jc,
              n = Tc,
              r = Mc;
            0 !== (10256 & t.subtreeFlags) || 0 !== (10256 & t.flags) ? (Nc = 5) : ((Nc = 0), (jc = Cc = null), iu(e, e.pendingLanes));
            var a = e.pendingLanes;
            if ((0 === a && (Ec = null), Pe(n), (t = t.stateNode), de && 'function' === typeof de.onCommitFiberRoot))
              try {
                de.onCommitFiberRoot(ue, t, void 0, 128 === (128 & t.current.flags));
              } catch (s) {}
            if (null !== r) {
              ((t = O.T), (a = A.p), (A.p = 2), (O.T = null));
              try {
                for (var l = e.onRecoverableError, i = 0; i < r.length; i++) {
                  var o = r[i];
                  l(o.value, { componentStack: o.stack });
                }
              } finally {
                ((O.T = t), (A.p = a));
              }
            }
            (0 !== (3 & Tc) && ou(), ku(e), (a = e.pendingLanes), 0 !== (4194090 & n) && 0 !== (42 & a) ? (e === _c ? zc++ : ((zc = 0), (_c = e))) : (zc = 0), Su(0, !1));
          }
        }
        function iu(e, t) {
          0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), Oa(t));
        }
        function ou(e) {
          return (ru(), au(), lu(), su());
        }
        function su() {
          if (5 !== Nc) return !1;
          var e = Cc,
            t = Pc;
          Pc = 0;
          var n = Pe(Tc),
            r = O.T,
            a = A.p;
          try {
            ((A.p = 32 > n ? 32 : n), (O.T = null), (n = Lc), (Lc = null));
            var l = Cc,
              o = Tc;
            if (((Nc = 0), (jc = Cc = null), (Tc = 0), 0 !== (6 & nc))) throw Error(i(331));
            var s = nc;
            if (((nc |= 4), Ks(l.current), Vs(l, l.current, o, n), (nc = s), Su(0, !1), de && 'function' === typeof de.onPostCommitFiberRoot))
              try {
                de.onPostCommitFiberRoot(ue, l);
              } catch (c) {}
            return !0;
          } finally {
            ((A.p = a), (O.T = r), iu(e, t));
          }
        }
        function cu(e, t, n) {
          ((t = Er(n, t)), null !== (e = ll(e, (t = So(e.stateNode, t, 2)), 2)) && (Ne(e, 2), ku(e)));
        }
        function uu(e, t, n) {
          if (3 === e.tag) cu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                cu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if ('function' === typeof t.type.getDerivedStateFromError || ('function' === typeof r.componentDidCatch && (null === Ec || !Ec.has(r)))) {
                  ((e = Er(n, e)), null !== (r = ll(t, (n = Eo(2)), 2)) && (No(n, r, t, e), Ne(r, 2), ku(r)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function du(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new tc();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || ((uc = !0), a.add(n), (e = fu.bind(null, e, t, n)), t.then(e, e));
        }
        function fu(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            rc === e && (lc & n) === n && (4 === fc || (3 === fc && (62914560 & lc) === lc && 300 > te() - wc) ? 0 === (2 & nc) && Vc(e, 0) : (mc |= n), vc === lc && (vc = 0)),
            ku(e));
        }
        function pu(e, t) {
          (0 === t && (t = Se()), null !== (e = Mr(e, t)) && (Ne(e, t), ku(e)));
        }
        function hu(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), pu(e, n));
        }
        function mu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(i(314));
          }
          (null !== r && r.delete(t), pu(e, n));
        }
        var gu = null,
          vu = null,
          yu = !1,
          bu = !1,
          xu = !1,
          wu = 0;
        function ku(e) {
          (e !== vu && null === e.next && (null === vu ? (gu = vu = e) : (vu = vu.next = e)),
            (bu = !0),
            yu ||
              ((yu = !0),
              dd(function () {
                0 !== (6 & nc) ? K(re, Eu) : Nu();
              })));
        }
        function Su(e, t) {
          if (!xu && bu) {
            xu = !0;
            do {
              for (var n = !1, r = gu; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var l = 0;
                    else {
                      var i = r.suspendedLanes,
                        o = r.pingedLanes;
                      ((l = (1 << (31 - pe(42 | e) + 1)) - 1), (l = 201326741 & (l &= a & ~(i & ~o)) ? (201326741 & l) | 1 : l ? 2 | l : 0));
                    }
                    0 !== l && ((n = !0), Tu(r, l));
                  } else ((l = lc), 0 === (3 & (l = be(r, r === rc ? l : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || xe(r, l) || ((n = !0), Tu(r, l)));
                r = r.next;
              }
            } while (n);
            xu = !1;
          }
        }
        function Eu() {
          Nu();
        }
        function Nu() {
          bu = yu = !1;
          var e = 0;
          0 !== wu &&
            ((function () {
              var e = window.event;
              if (e && 'popstate' === e.type) return e !== od && ((od = e), !0);
              return ((od = null), !1);
            })() && (e = wu),
            (wu = 0));
          for (var t = te(), n = null, r = gu; null !== r; ) {
            var a = r.next,
              l = Cu(r, t);
            (0 === l ? ((r.next = null), null === n ? (gu = a) : (n.next = a), null === a && (vu = n)) : ((n = r), (0 !== e || 0 !== (3 & l)) && (bu = !0)), (r = a));
          }
          Su(e, !1);
        }
        function Cu(e, t) {
          for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = -62914561 & e.pendingLanes; 0 < l; ) {
            var i = 31 - pe(l),
              o = 1 << i,
              s = a[i];
            (-1 === s ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = we(o, t)) : s <= t && (e.expiredLanes |= o), (l &= ~o));
          }
          if (
            ((n = lc),
            (n = be(e, e === (t = rc) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)),
            (r = e.callbackNode),
            0 === n || (e === t && (2 === ic || 9 === ic)) || null !== e.cancelPendingCommit)
          )
            return (null !== r && null !== r && J(r), (e.callbackNode = null), (e.callbackPriority = 0));
          if (0 === (3 & n) || xe(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && J(r), Pe(n))) {
              case 2:
              case 8:
                n = ae;
                break;
              case 32:
              default:
                n = le;
                break;
              case 268435456:
                n = oe;
            }
            return ((r = ju.bind(null, e)), (n = K(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t);
          }
          return (null !== r && null !== r && J(r), (e.callbackPriority = 2), (e.callbackNode = null), 2);
        }
        function ju(e, t) {
          if (0 !== Nc && 5 !== Nc) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (ou() && e.callbackNode !== n) return null;
          var r = lc;
          return 0 === (r = be(e, e === rc ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle))
            ? null
            : (Dc(e, r, t), Cu(e, te()), null != e.callbackNode && e.callbackNode === n ? ju.bind(null, e) : null);
        }
        function Tu(e, t) {
          if (ou()) return null;
          Dc(e, t, !0);
        }
        function Pu() {
          return (0 === wu && (wu = ke()), wu);
        }
        function Lu(e) {
          return null == e || 'symbol' === typeof e || 'boolean' === typeof e ? null : 'function' === typeof e ? e : Pt('' + e);
        }
        function Mu(e, t) {
          var n = t.ownerDocument.createElement('input');
          return ((n.name = t.name), (n.value = t.value), e.id && n.setAttribute('form', e.id), t.parentNode.insertBefore(n, t), (e = new FormData(e)), n.parentNode.removeChild(n), e);
        }
        for (var zu = 0; zu < wr.length; zu++) {
          var _u = wr[zu];
          kr(_u.toLowerCase(), 'on' + (_u[0].toUpperCase() + _u.slice(1)));
        }
        (kr(pr, 'onAnimationEnd'),
          kr(hr, 'onAnimationIteration'),
          kr(mr, 'onAnimationStart'),
          kr('dblclick', 'onDoubleClick'),
          kr('focusin', 'onFocus'),
          kr('focusout', 'onBlur'),
          kr(gr, 'onTransitionRun'),
          kr(vr, 'onTransitionStart'),
          kr(yr, 'onTransitionCancel'),
          kr(br, 'onTransitionEnd'),
          Qe('onMouseEnter', ['mouseout', 'mouseover']),
          Qe('onMouseLeave', ['mouseout', 'mouseover']),
          Qe('onPointerEnter', ['pointerout', 'pointerover']),
          Qe('onPointerLeave', ['pointerout', 'pointerover']),
          $e('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
          $e('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
          $e('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          $e('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
          $e('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
          $e('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
        var Ou =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Au = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Ou));
        function Ru(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    c = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped())) break e;
                  ((l = o), (a.currentTarget = c));
                  try {
                    l(a);
                  } catch (u) {
                    vo(u);
                  }
                  ((a.currentTarget = null), (l = s));
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (((s = (o = r[i]).instance), (c = o.currentTarget), (o = o.listener), s !== l && a.isPropagationStopped())) break e;
                  ((l = o), (a.currentTarget = c));
                  try {
                    l(a);
                  } catch (u) {
                    vo(u);
                  }
                  ((a.currentTarget = null), (l = s));
                }
            }
          }
        }
        function Du(e, t) {
          var n = t[Ae];
          void 0 === n && (n = t[Ae] = new Set());
          var r = e + '__bubble';
          n.has(r) || (Bu(t, e, 2, !1), n.add(r));
        }
        function Iu(e, t, n) {
          var r = 0;
          (t && (r |= 4), Bu(n, e, r, t));
        }
        var Fu = '_reactListening' + Math.random().toString(36).slice(2);
        function Wu(e) {
          if (!e[Fu]) {
            ((e[Fu] = !0),
              Ge.forEach(function (t) {
                'selectionchange' !== t && (Au.has(t) || Iu(t, !1, e), Iu(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Fu] || ((t[Fu] = !0), Iu('selectionchange', !1, t));
          }
        }
        function Bu(e, t, n, r) {
          switch (uf(t)) {
            case 2:
              var a = rf;
              break;
            case 8:
              a = af;
              break;
            default:
              a = lf;
          }
          ((n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ft || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1));
        }
        function Hu(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var c = i.tag;
                    if ((3 === c || 4 === c) && i.stateNode.containerInfo === a) return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = Be(o))) return;
                  if (5 === (c = i.tag) || 6 === c || 26 === c || 27 === c) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Rt(function () {
            var r = l,
              a = Mt(n),
              i = [];
            e: {
              var o = xr.get(e);
              if (void 0 !== o) {
                var c = Zt,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === qt(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    c = mn;
                    break;
                  case 'focusin':
                    ((u = 'focus'), (c = ln));
                    break;
                  case 'focusout':
                    ((u = 'blur'), (c = ln));
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    c = ln;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    c = rn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    c = an;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    c = vn;
                    break;
                  case pr:
                  case hr:
                  case mr:
                    c = on;
                    break;
                  case br:
                    c = yn;
                    break;
                  case 'scroll':
                  case 'scrollend':
                    c = tn;
                    break;
                  case 'wheel':
                    c = bn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    c = sn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    c = gn;
                    break;
                  case 'toggle':
                  case 'beforetoggle':
                    c = xn;
                }
                var d = 0 !== (4 & t),
                  f = !d && ('scroll' === e || 'scrollend' === e),
                  p = d ? (null !== o ? o + 'Capture' : null) : o;
                d = [];
                for (var h, m = r; null !== m; ) {
                  var g = m;
                  if (((h = g.stateNode), (5 !== (g = g.tag) && 26 !== g && 27 !== g) || null === h || null === p || (null != (g = Dt(m, p)) && d.push(Vu(m, g, h))), f)) break;
                  m = m.return;
                }
                0 < d.length && ((o = new c(o, u, null, n, a)), i.push({ event: o, listeners: d }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((c = 'mouseout' === e || 'pointerout' === e),
                (!(o = 'mouseover' === e || 'pointerover' === e) || n === Lt || !(u = n.relatedTarget || n.fromElement) || (!Be(u) && !u[Oe])) &&
                  (c || o) &&
                  ((o = a.window === a ? a : (o = a.ownerDocument) ? o.defaultView || o.parentWindow : window),
                  c
                    ? ((c = r), null !== (u = (u = n.relatedTarget || n.toElement) ? Be(u) : null) && ((f = s(u)), (d = u.tag), u !== f || (5 !== d && 27 !== d && 6 !== d)) && (u = null))
                    : ((c = null), (u = r)),
                  c !== u))
              ) {
                if (
                  ((d = rn),
                  (g = 'onMouseLeave'),
                  (p = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) || ((d = gn), (g = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
                  (f = null == c ? o : Ve(c)),
                  (h = null == u ? o : Ve(u)),
                  ((o = new d(g, m + 'leave', c, n, a)).target = f),
                  (o.relatedTarget = h),
                  (g = null),
                  Be(a) === r && (((d = new d(p, m + 'enter', u, n, a)).target = h), (d.relatedTarget = f), (g = d)),
                  (f = g),
                  c && u)
                )
                  e: {
                    for (p = u, m = 0, h = d = c; h; h = qu(h)) m++;
                    for (h = 0, g = p; g; g = qu(g)) h++;
                    for (; 0 < m - h; ) ((d = qu(d)), m--);
                    for (; 0 < h - m; ) ((p = qu(p)), h--);
                    for (; m--; ) {
                      if (d === p || (null !== p && d === p.alternate)) break e;
                      ((d = qu(d)), (p = qu(p)));
                    }
                    d = null;
                  }
                else d = null;
                (null !== c && Gu(i, o, c, d, !1), null !== u && null !== f && Gu(i, f, u, d, !0));
              }
              if ('select' === (c = (o = r ? Ve(r) : window).nodeName && o.nodeName.toLowerCase()) || ('input' === c && 'file' === o.type)) var v = In;
              else if (zn(o))
                if (Fn) v = $n;
                else {
                  v = Gn;
                  var y = qn;
                }
              else !(c = o.nodeName) || 'input' !== c.toLowerCase() || ('checkbox' !== o.type && 'radio' !== o.type) ? r && Ct(r.elementType) && (v = In) : (v = Yn);
              switch (
                (v && (v = v(e, r)) ? _n(i, v, n, a) : (y && y(e, o, r), 'focusout' === e && r && 'number' === o.type && null != r.memoizedProps.value && yt(o, 'number', o.value)),
                (y = r ? Ve(r) : window),
                e)
              ) {
                case 'focusin':
                  (zn(y) || 'true' === y.contentEditable) && ((rr = y), (ar = r), (lr = null));
                  break;
                case 'focusout':
                  lr = ar = rr = null;
                  break;
                case 'mousedown':
                  ir = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  ((ir = !1), or(i, n, a));
                  break;
                case 'selectionchange':
                  if (nr) break;
                case 'keydown':
                case 'keyup':
                  or(i, n, a);
              }
              var b;
              if (kn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var x = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      x = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      x = 'onCompositionUpdate';
                      break e;
                  }
                  x = void 0;
                }
              else Ln ? Tn(e, n) && (x = 'onCompositionEnd') : 'keydown' === e && 229 === n.keyCode && (x = 'onCompositionStart');
              (x &&
                (Nn && 'ko' !== n.locale && (Ln || 'onCompositionStart' !== x ? 'onCompositionEnd' === x && Ln && (b = Ut()) : ((Ht = 'value' in (Bt = a) ? Bt.value : Bt.textContent), (Ln = !0))),
                0 < (y = Uu(r, x)).length && ((x = new cn(x, e, null, n, a)), i.push({ event: x, listeners: y }), b ? (x.data = b) : null !== (b = Pn(n)) && (x.data = b))),
                (b = En
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Pn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((jn = !0), Cn);
                        case 'textInput':
                          return (e = t.data) === Cn && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Ln) return 'compositionend' === e || (!kn && Tn(e, t)) ? ((e = Ut()), (Vt = Ht = Bt = null), (Ln = !1), e) : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Nn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (x = Uu(r, 'onBeforeInput')).length &&
                  ((y = new cn('onBeforeInput', 'beforeinput', null, n, a)), i.push({ event: y, listeners: x }), (y.data = b)),
                (function (e, t, n, r, a) {
                  if ('submit' === t && n && n.stateNode === a) {
                    var l = Lu((a[_e] || null).action),
                      i = r.submitter;
                    i && null !== (t = (t = i[_e] || null) ? Lu(t.formAction) : i.getAttribute('formAction')) && ((l = t), (i = null));
                    var o = new Zt('action', 'action', null, r, a);
                    e.push({
                      event: o,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== wu) {
                                var e = i ? Mu(a, i) : new FormData(a);
                                Li(n, { pending: !0, data: e, method: a.method, action: l }, null, e);
                              }
                            } else 'function' === typeof l && (o.preventDefault(), (e = i ? Mu(a, i) : new FormData(a)), Li(n, { pending: !0, data: e, method: a.method, action: l }, l, e));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(i, e, r, n, a));
            }
            Ru(i, t);
          });
        }
        function Vu(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Uu(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            if (((5 !== (a = a.tag) && 26 !== a && 27 !== a) || null === l || (null != (a = Dt(e, n)) && r.unshift(Vu(e, a, l)), null != (a = Dt(e, t)) && r.push(Vu(e, a, l))), 3 === e.tag)) return r;
            e = e.return;
          }
          return [];
        }
        function qu(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Gu(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              c = o.stateNode;
            if (((o = o.tag), null !== s && s === r)) break;
            ((5 !== o && 26 !== o && 27 !== o) || null === c || ((s = c), a ? null != (c = Dt(n, l)) && i.unshift(Vu(n, c, s)) : a || (null != (c = Dt(n, l)) && i.push(Vu(n, c, s)))), (n = n.return));
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yu = /\r\n?/g,
          $u = /\u0000|\uFFFD/g;
        function Qu(e) {
          return ('string' === typeof e ? e : '' + e).replace(Yu, '\n').replace($u, '');
        }
        function Xu(e, t) {
          return ((t = Qu(t)), Qu(e) === t);
        }
        function Ku() {}
        function Ju(e, t, n, r, a, l) {
          switch (n) {
            case 'children':
              'string' === typeof r ? 'body' === t || ('textarea' === t && '' === r) || kt(e, r) : ('number' === typeof r || 'bigint' === typeof r) && 'body' !== t && kt(e, '' + r);
              break;
            case 'className':
              nt(e, 'class', r);
              break;
            case 'tabIndex':
              nt(e, 'tabindex', r);
              break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
              nt(e, n, r);
              break;
            case 'style':
              Nt(e, r, l);
              break;
            case 'data':
              if ('object' !== t) {
                nt(e, 'data', r);
                break;
              }
            case 'src':
            case 'href':
              if ('' === r && ('a' !== t || 'href' !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (null == r || 'function' === typeof r || 'symbol' === typeof r || 'boolean' === typeof r) {
                e.removeAttribute(n);
                break;
              }
              ((r = Pt('' + r)), e.setAttribute(n, r));
              break;
            case 'action':
            case 'formAction':
              if ('function' === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              }
              if (
                ('function' === typeof l &&
                  ('formAction' === n
                    ? ('input' !== t && Ju(e, t, 'name', a.name, a, null),
                      Ju(e, t, 'formEncType', a.formEncType, a, null),
                      Ju(e, t, 'formMethod', a.formMethod, a, null),
                      Ju(e, t, 'formTarget', a.formTarget, a, null))
                    : (Ju(e, t, 'encType', a.encType, a, null), Ju(e, t, 'method', a.method, a, null), Ju(e, t, 'target', a.target, a, null))),
                null == r || 'symbol' === typeof r || 'boolean' === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((r = Pt('' + r)), e.setAttribute(n, r));
              break;
            case 'onClick':
              null != r && (e.onclick = Ku);
              break;
            case 'onScroll':
              null != r && Du('scroll', e);
              break;
            case 'onScrollEnd':
              null != r && Du('scrollend', e);
              break;
            case 'dangerouslySetInnerHTML':
              if (null != r) {
                if ('object' !== typeof r || !('__html' in r)) throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case 'multiple':
              e.multiple = r && 'function' !== typeof r && 'symbol' !== typeof r;
              break;
            case 'muted':
              e.muted = r && 'function' !== typeof r && 'symbol' !== typeof r;
              break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
            case 'autoFocus':
              break;
            case 'xlinkHref':
              if (null == r || 'function' === typeof r || 'boolean' === typeof r || 'symbol' === typeof r) {
                e.removeAttribute('xlink:href');
                break;
              }
              ((n = Pt('' + r)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
              break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
              null != r && 'function' !== typeof r && 'symbol' !== typeof r ? e.setAttribute(n, '' + r) : e.removeAttribute(n);
              break;
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
              r && 'function' !== typeof r && 'symbol' !== typeof r ? e.setAttribute(n, '') : e.removeAttribute(n);
              break;
            case 'capture':
            case 'download':
              !0 === r ? e.setAttribute(n, '') : !1 !== r && null != r && 'function' !== typeof r && 'symbol' !== typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
              break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
              null != r && 'function' !== typeof r && 'symbol' !== typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
              break;
            case 'rowSpan':
            case 'start':
              null == r || 'function' === typeof r || 'symbol' === typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
              break;
            case 'popover':
              (Du('beforetoggle', e), Du('toggle', e), tt(e, 'popover', r));
              break;
            case 'xlinkActuate':
              rt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', r);
              break;
            case 'xlinkArcrole':
              rt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', r);
              break;
            case 'xlinkRole':
              rt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', r);
              break;
            case 'xlinkShow':
              rt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', r);
              break;
            case 'xlinkTitle':
              rt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', r);
              break;
            case 'xlinkType':
              rt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', r);
              break;
            case 'xmlBase':
              rt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', r);
              break;
            case 'xmlLang':
              rt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', r);
              break;
            case 'xmlSpace':
              rt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', r);
              break;
            case 'is':
              tt(e, 'is', r);
              break;
            case 'innerText':
            case 'textContent':
              break;
            default:
              (!(2 < n.length) || ('o' !== n[0] && 'O' !== n[0]) || ('n' !== n[1] && 'N' !== n[1])) && tt(e, (n = jt.get(n) || n), r);
          }
        }
        function Zu(e, t, n, r, a, l) {
          switch (n) {
            case 'style':
              Nt(e, r, l);
              break;
            case 'dangerouslySetInnerHTML':
              if (null != r) {
                if ('object' !== typeof r || !('__html' in r)) throw Error(i(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(i(60));
                  e.innerHTML = n;
                }
              }
              break;
            case 'children':
              'string' === typeof r ? kt(e, r) : ('number' === typeof r || 'bigint' === typeof r) && kt(e, '' + r);
              break;
            case 'onScroll':
              null != r && Du('scroll', e);
              break;
            case 'onScrollEnd':
              null != r && Du('scrollend', e);
              break;
            case 'onClick':
              null != r && (e.onclick = Ku);
              break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
            case 'innerText':
            case 'textContent':
              break;
            default:
              Ye.hasOwnProperty(n) ||
                ('o' !== n[0] ||
                'n' !== n[1] ||
                ((a = n.endsWith('Capture')),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                'function' === typeof (l = null != (l = e[_e] || null) ? l[n] : null) && e.removeEventListener(t, l, a),
                'function' !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                      ? e.setAttribute(n, '')
                      : tt(e, n, r)
                  : ('function' !== typeof l && null !== l && (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)));
          }
        }
        function ed(e, t, n) {
          switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
              break;
            case 'img':
              (Du('error', e), Du('load', e));
              var r,
                a = !1,
                l = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var o = n[r];
                  if (null != o)
                    switch (r) {
                      case 'src':
                        a = !0;
                        break;
                      case 'srcSet':
                        l = !0;
                        break;
                      case 'children':
                      case 'dangerouslySetInnerHTML':
                        throw Error(i(137, t));
                      default:
                        Ju(e, t, r, o, n, null);
                    }
                }
              return (l && Ju(e, t, 'srcSet', n.srcSet, n, null), void (a && Ju(e, t, 'src', n.src, n, null)));
            case 'input':
              Du('invalid', e);
              var s = (r = o = l = null),
                c = null,
                u = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var d = n[a];
                  if (null != d)
                    switch (a) {
                      case 'name':
                        l = d;
                        break;
                      case 'type':
                        o = d;
                        break;
                      case 'checked':
                        c = d;
                        break;
                      case 'defaultChecked':
                        u = d;
                        break;
                      case 'value':
                        r = d;
                        break;
                      case 'defaultValue':
                        s = d;
                        break;
                      case 'children':
                      case 'dangerouslySetInnerHTML':
                        if (null != d) throw Error(i(137, t));
                        break;
                      default:
                        Ju(e, t, a, d, n, null);
                    }
                }
              return (vt(e, r, s, c, u, o, l, !1), void dt(e));
            case 'select':
              for (l in (Du('invalid', e), (a = o = r = null), n))
                if (n.hasOwnProperty(l) && null != (s = n[l]))
                  switch (l) {
                    case 'value':
                      r = s;
                      break;
                    case 'defaultValue':
                      o = s;
                      break;
                    case 'multiple':
                      a = s;
                    default:
                      Ju(e, t, l, s, n, null);
                  }
              return ((t = r), (n = o), (e.multiple = !!a), void (null != t ? bt(e, !!a, t, !1) : null != n && bt(e, !!a, n, !0)));
            case 'textarea':
              for (o in (Du('invalid', e), (r = l = a = null), n))
                if (n.hasOwnProperty(o) && null != (s = n[o]))
                  switch (o) {
                    case 'value':
                      a = s;
                      break;
                    case 'defaultValue':
                      l = s;
                      break;
                    case 'children':
                      r = s;
                      break;
                    case 'dangerouslySetInnerHTML':
                      if (null != s) throw Error(i(91));
                      break;
                    default:
                      Ju(e, t, o, s, n, null);
                  }
              return (wt(e, a, l, r), void dt(e));
            case 'option':
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  if ('selected' === c) e.selected = a && 'function' !== typeof a && 'symbol' !== typeof a;
                  else Ju(e, t, c, a, n, null);
              return;
            case 'dialog':
              (Du('beforetoggle', e), Du('toggle', e), Du('cancel', e), Du('close', e));
              break;
            case 'iframe':
            case 'object':
              Du('load', e);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < Ou.length; a++) Du(Ou[a], e);
              break;
            case 'image':
              (Du('error', e), Du('load', e));
              break;
            case 'details':
              Du('toggle', e);
              break;
            case 'embed':
            case 'source':
            case 'link':
              (Du('error', e), Du('load', e));
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
              for (u in n)
                if (n.hasOwnProperty(u) && null != (a = n[u]))
                  switch (u) {
                    case 'children':
                    case 'dangerouslySetInnerHTML':
                      throw Error(i(137, t));
                    default:
                      Ju(e, t, u, a, n, null);
                  }
              return;
            default:
              if (Ct(t)) {
                for (d in n) n.hasOwnProperty(d) && void 0 !== (a = n[d]) && Zu(e, t, d, a, n, void 0);
                return;
              }
          }
          for (s in n) n.hasOwnProperty(s) && null != (a = n[s]) && Ju(e, t, s, a, n, null);
        }
        var td = null,
          nd = null;
        function rd(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function ad(e) {
          switch (e) {
            case 'http://www.w3.org/2000/svg':
              return 1;
            case 'http://www.w3.org/1998/Math/MathML':
              return 2;
            default:
              return 0;
          }
        }
        function ld(e, t) {
          if (0 === e)
            switch (t) {
              case 'svg':
                return 1;
              case 'math':
                return 2;
              default:
                return 0;
            }
          return 1 === e && 'foreignObject' === t ? 0 : e;
        }
        function id(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            'bigint' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var od = null;
        var sd = 'function' === typeof setTimeout ? setTimeout : void 0,
          cd = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          ud = 'function' === typeof Promise ? Promise : void 0,
          dd =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ud
                ? function (e) {
                    return ud.resolve(null).then(e).catch(fd);
                  }
                : sd;
        function fd(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function pd(e) {
          return 'head' === e;
        }
        function hd(e, t) {
          var n = t,
            r = 0,
            a = 0;
          do {
            var l = n.nextSibling;
            if ((e.removeChild(n), l && 8 === l.nodeType))
              if ('/$' === (n = l.data)) {
                if (0 < r && 8 > r) {
                  n = r;
                  var i = e.ownerDocument;
                  if ((1 & n && wd(i.documentElement), 2 & n && wd(i.body), 4 & n))
                    for (wd((n = i.head)), i = n.firstChild; i; ) {
                      var o = i.nextSibling,
                        s = i.nodeName;
                      (i[Fe] || 'SCRIPT' === s || 'STYLE' === s || ('LINK' === s && 'stylesheet' === i.rel.toLowerCase()) || n.removeChild(i), (i = o));
                    }
                }
                if (0 === a) return (e.removeChild(l), void Tf(t));
                a--;
              } else '$' === n || '$?' === n || '$!' === n ? a++ : (r = n.charCodeAt(0) - 48);
            else r = 0;
            n = l;
          } while (n);
          Tf(t);
        }
        function md(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case 'HTML':
              case 'HEAD':
              case 'BODY':
                (md(n), We(n));
                continue;
              case 'SCRIPT':
              case 'STYLE':
                continue;
              case 'LINK':
                if ('stylesheet' === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function gd(e) {
          return '$!' === e.data || ('$?' === e.data && 'complete' === e.ownerDocument.readyState);
        }
        function vd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t || 'F!' === t || 'F' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        var yd = null;
        function bd(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function xd(e, t, n) {
          switch (((t = rd(n)), e)) {
            case 'html':
              if (!(e = t.documentElement)) throw Error(i(452));
              return e;
            case 'head':
              if (!(e = t.head)) throw Error(i(453));
              return e;
            case 'body':
              if (!(e = t.body)) throw Error(i(454));
              return e;
            default:
              throw Error(i(451));
          }
        }
        function wd(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          We(e);
        }
        var kd = new Map(),
          Sd = new Set();
        function Ed(e) {
          return 'function' === typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument;
        }
        var Nd = A.d;
        A.d = {
          f: function () {
            var e = Nd.f(),
              t = Bc();
            return e || t;
          },
          r: function (e) {
            var t = He(e);
            null !== t && 5 === t.tag && 'form' === t.type ? zi(t) : Nd.r(e);
          },
          D: function (e) {
            (Nd.D(e), jd('dns-prefetch', e, null));
          },
          C: function (e, t) {
            (Nd.C(e, t), jd('preconnect', e, t));
          },
          L: function (e, t, n) {
            Nd.L(e, t, n);
            var r = Cd;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + mt(t) + '"]';
              'image' === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'), 'string' === typeof n.imageSizes && (a += '[imagesizes="' + mt(n.imageSizes) + '"]'))
                : (a += '[href="' + mt(e) + '"]');
              var l = a;
              switch (t) {
                case 'style':
                  l = Pd(e);
                  break;
                case 'script':
                  l = zd(e);
              }
              kd.has(l) ||
                ((e = f({ rel: 'preload', href: 'image' === t && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
                kd.set(l, e),
                null !== r.querySelector(a) ||
                  ('style' === t && r.querySelector(Ld(l))) ||
                  ('script' === t && r.querySelector(_d(l))) ||
                  (ed((t = r.createElement('link')), 'link', e), qe(t), r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            Nd.m(e, t);
            var n = Cd;
            if (n && e) {
              var r = t && 'string' === typeof t.as ? t.as : 'script',
                a = 'link[rel="modulepreload"][as="' + mt(r) + '"][href="' + mt(e) + '"]',
                l = a;
              switch (r) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                  l = zd(e);
              }
              if (!kd.has(l) && ((e = f({ rel: 'modulepreload', href: e }, t)), kd.set(l, e), null === n.querySelector(a))) {
                switch (r) {
                  case 'audioworklet':
                  case 'paintworklet':
                  case 'serviceworker':
                  case 'sharedworker':
                  case 'worker':
                  case 'script':
                    if (n.querySelector(_d(l))) return;
                }
                (ed((r = n.createElement('link')), 'link', e), qe(r), n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            Nd.X(e, t);
            var n = Cd;
            if (n && e) {
              var r = Ue(n).hoistableScripts,
                a = zd(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(_d(a))) || ((e = f({ src: e, async: !0 }, t)), (t = kd.get(a)) && Dd(e, t), qe((l = n.createElement('script'))), ed(l, 'link', e), n.head.appendChild(l)),
                (l = { type: 'script', instance: l, count: 1, state: null }),
                r.set(a, l));
            }
          },
          S: function (e, t, n) {
            Nd.S(e, t, n);
            var r = Cd;
            if (r && e) {
              var a = Ue(r).hoistableStyles,
                l = Pd(e);
              t = t || 'default';
              var i = a.get(l);
              if (!i) {
                var o = { loading: 0, preload: null };
                if ((i = r.querySelector(Ld(l)))) o.loading = 5;
                else {
                  ((e = f({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = kd.get(l)) && Rd(e, n));
                  var s = (i = r.createElement('link'));
                  (qe(s),
                    ed(s, 'link', e),
                    (s._p = new Promise(function (e, t) {
                      ((s.onload = e), (s.onerror = t));
                    })),
                    s.addEventListener('load', function () {
                      o.loading |= 1;
                    }),
                    s.addEventListener('error', function () {
                      o.loading |= 2;
                    }),
                    (o.loading |= 4),
                    Ad(i, t, r));
                }
                ((i = { type: 'stylesheet', instance: i, count: 1, state: o }), a.set(l, i));
              }
            }
          },
          M: function (e, t) {
            Nd.M(e, t);
            var n = Cd;
            if (n && e) {
              var r = Ue(n).hoistableScripts,
                a = zd(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(_d(a))) ||
                  ((e = f({ src: e, async: !0, type: 'module' }, t)), (t = kd.get(a)) && Dd(e, t), qe((l = n.createElement('script'))), ed(l, 'link', e), n.head.appendChild(l)),
                (l = { type: 'script', instance: l, count: 1, state: null }),
                r.set(a, l));
            }
          },
        };
        var Cd = 'undefined' === typeof document ? null : document;
        function jd(e, t, n) {
          var r = Cd;
          if (r && 'string' === typeof t && t) {
            var a = mt(t);
            ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
              'string' === typeof n && (a += '[crossorigin="' + n + '"]'),
              Sd.has(a) || (Sd.add(a), (e = { rel: e, crossOrigin: n, href: t }), null === r.querySelector(a) && (ed((t = r.createElement('link')), 'link', e), qe(t), r.head.appendChild(t))));
          }
        }
        function Td(e, t, n, r) {
          var a,
            l,
            o,
            s,
            c = (c = U.current) ? Ed(c) : null;
          if (!c) throw Error(i(446));
          switch (e) {
            case 'meta':
            case 'title':
              return null;
            case 'style':
              return 'string' === typeof n.precedence && 'string' === typeof n.href
                ? ((t = Pd(n.href)), (r = (n = Ue(c).hoistableStyles).get(t)) || ((r = { type: 'style', instance: null, count: 0, state: null }), n.set(t, r)), r)
                : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
              if ('stylesheet' === n.rel && 'string' === typeof n.href && 'string' === typeof n.precedence) {
                e = Pd(n.href);
                var u = Ue(c).hoistableStyles,
                  d = u.get(e);
                if (
                  (d ||
                    ((c = c.ownerDocument || c),
                    (d = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
                    u.set(e, d),
                    (u = c.querySelector(Ld(e))) && !u._p && ((d.instance = u), (d.state.loading = 5)),
                    kd.has(e) ||
                      ((n = { rel: 'preload', as: 'style', href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }),
                      kd.set(e, n),
                      u ||
                        ((a = c),
                        (l = e),
                        (o = n),
                        (s = d.state),
                        a.querySelector('link[rel="preload"][as="style"][' + l + ']')
                          ? (s.loading = 1)
                          : ((l = a.createElement('link')),
                            (s.preload = l),
                            l.addEventListener('load', function () {
                              return (s.loading |= 1);
                            }),
                            l.addEventListener('error', function () {
                              return (s.loading |= 2);
                            }),
                            ed(l, 'link', o),
                            qe(l),
                            a.head.appendChild(l))))),
                  t && null === r)
                )
                  throw Error(i(528, ''));
                return d;
              }
              if (t && null !== r) throw Error(i(529, ''));
              return null;
            case 'script':
              return (
                (t = n.async),
                'string' === typeof (n = n.src) && t && 'function' !== typeof t && 'symbol' !== typeof t
                  ? ((t = zd(n)), (r = (n = Ue(c).hoistableScripts).get(t)) || ((r = { type: 'script', instance: null, count: 0, state: null }), n.set(t, r)), r)
                  : { type: 'void', instance: null, count: 0, state: null }
              );
            default:
              throw Error(i(444, e));
          }
        }
        function Pd(e) {
          return 'href="' + mt(e) + '"';
        }
        function Ld(e) {
          return 'link[rel="stylesheet"][' + e + ']';
        }
        function Md(e) {
          return f({}, e, { 'data-precedence': e.precedence, precedence: null });
        }
        function zd(e) {
          return '[src="' + mt(e) + '"]';
        }
        function _d(e) {
          return 'script[async]' + e;
        }
        function Od(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case 'style':
                var r = e.querySelector('style[data-href~="' + mt(n.href) + '"]');
                if (r) return ((t.instance = r), qe(r), r);
                var a = f({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
                return (qe((r = (e.ownerDocument || e).createElement('style'))), ed(r, 'style', a), Ad(r, n.precedence, e), (t.instance = r));
              case 'stylesheet':
                a = Pd(n.href);
                var l = e.querySelector(Ld(a));
                if (l) return ((t.state.loading |= 4), (t.instance = l), qe(l), l);
                ((r = Md(n)), (a = kd.get(a)) && Rd(r, a), qe((l = (e.ownerDocument || e).createElement('link'))));
                var o = l;
                return (
                  (o._p = new Promise(function (e, t) {
                    ((o.onload = e), (o.onerror = t));
                  })),
                  ed(l, 'link', r),
                  (t.state.loading |= 4),
                  Ad(l, n.precedence, e),
                  (t.instance = l)
                );
              case 'script':
                return (
                  (l = zd(n.src)),
                  (a = e.querySelector(_d(l)))
                    ? ((t.instance = a), qe(a), a)
                    : ((r = n), (a = kd.get(l)) && Dd((r = f({}, n)), a), qe((a = (e = e.ownerDocument || e).createElement('script'))), ed(a, 'link', r), e.head.appendChild(a), (t.instance = a))
                );
              case 'void':
                return null;
              default:
                throw Error(i(443, t.type));
            }
          else 'stylesheet' === t.type && 0 === (4 & t.state.loading) && ((r = t.instance), (t.state.loading |= 4), Ad(r, n.precedence, e));
          return t.instance;
        }
        function Ad(e, t, n) {
          for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, l = a, i = 0; i < r.length; i++) {
            var o = r[i];
            if (o.dataset.precedence === t) l = o;
            else if (l !== a) break;
          }
          l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Rd(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title));
        }
        function Dd(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity));
        }
        var Id = null;
        function Fd(e, t, n) {
          if (null === Id) {
            var r = new Map(),
              a = (Id = new Map());
            a.set(n, r);
          } else (r = (a = Id).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var l = n[a];
            if (!(l[Fe] || l[ze] || ('link' === e && 'stylesheet' === l.getAttribute('rel'))) && 'http://www.w3.org/2000/svg' !== l.namespaceURI) {
              var i = l.getAttribute(t) || '';
              i = e + i;
              var o = r.get(i);
              o ? o.push(l) : r.set(i, [l]);
            }
          }
          return r;
        }
        function Wd(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(n, 'title' === t ? e.querySelector('head > title') : null);
        }
        function Bd(e) {
          return 'stylesheet' !== e.type || 0 !== (3 & e.state.loading);
        }
        var Hd = null;
        function Vd() {}
        function Ud() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) Gd(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              ((this.unsuspend = null), e());
            }
        }
        var qd = null;
        function Gd(e, t) {
          ((e.stylesheets = null), null !== e.unsuspend && (e.count++, (qd = new Map()), t.forEach(Yd, e), (qd = null), Ud.call(e)));
        }
        function Yd(e, t) {
          if (!(4 & t.state.loading)) {
            var n = qd.get(e);
            if (n) var r = n.get(null);
            else {
              ((n = new Map()), qd.set(e, n));
              for (var a = e.querySelectorAll('link[data-precedence],style[data-precedence]'), l = 0; l < a.length; l++) {
                var i = a[l];
                ('LINK' !== i.nodeName && 'not all' === i.getAttribute('media')) || (n.set(i.dataset.precedence, i), (r = i));
              }
              r && n.set(null, r);
            }
            ((i = (a = t.instance).getAttribute('data-precedence')),
              (l = n.get(i) || r) === r && n.set(null, a),
              n.set(i, a),
              this.count++,
              (r = Ud.bind(this)),
              a.addEventListener('load', r),
              a.addEventListener('error', r),
              l ? l.parentNode.insertBefore(a, l.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
              (t.state.loading |= 4));
          }
        }
        var $d = { $$typeof: w, Provider: null, Consumer: null, _currentValue: R, _currentValue2: R, _threadCount: 0 };
        function Qd(e, t, n, r, a, l, i, o) {
          ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Ee(-1)),
            (this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
            (this.entanglements = Ee(0)),
            (this.hiddenUpdates = Ee(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = l),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = o),
            (this.incompleteTransitions = new Map()));
        }
        function Xd(e, t, n, r, a, l, i, o, s, c, u, d) {
          return (
            (e = new Qd(e, t, n, i, o, s, c, d)),
            (t = 1),
            !0 === l && (t |= 24),
            (l = Rr(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (t = _a()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (l.memoizedState = { element: r, isDehydrated: n, cache: t }),
            nl(l),
            e
          );
        }
        function Kd(e) {
          return e ? (e = Or) : Or;
        }
        function Jd(e, t, n, r, a, l) {
          ((a = Kd(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = al(t)).payload = { element: n }),
            null !== (l = void 0 === l ? null : l) && (r.callback = l),
            null !== (n = ll(e, r, t)) && (Rc(n, 0, t), il(n, e, t)));
        }
        function Zd(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ef(e, t) {
          (Zd(e, t), (e = e.alternate) && Zd(e, t));
        }
        function tf(e) {
          if (13 === e.tag) {
            var t = Mr(e, 67108864);
            (null !== t && Rc(t, 0, 67108864), ef(e, 67108864));
          }
        }
        var nf = !0;
        function rf(e, t, n, r) {
          var a = O.T;
          O.T = null;
          var l = A.p;
          try {
            ((A.p = 2), lf(e, t, n, r));
          } finally {
            ((A.p = l), (O.T = a));
          }
        }
        function af(e, t, n, r) {
          var a = O.T;
          O.T = null;
          var l = A.p;
          try {
            ((A.p = 8), lf(e, t, n, r));
          } finally {
            ((A.p = l), (O.T = a));
          }
        }
        function lf(e, t, n, r) {
          if (nf) {
            var a = of(r);
            if (null === a) (Hu(e, t, r, sf, n), bf(e, r));
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case 'focusin':
                    return ((ff = xf(ff, e, t, n, r, a)), !0);
                  case 'dragenter':
                    return ((pf = xf(pf, e, t, n, r, a)), !0);
                  case 'mouseover':
                    return ((hf = xf(hf, e, t, n, r, a)), !0);
                  case 'pointerover':
                    var l = a.pointerId;
                    return (mf.set(l, xf(mf.get(l) || null, e, t, n, r, a)), !0);
                  case 'gotpointercapture':
                    return ((l = a.pointerId), gf.set(l, xf(gf.get(l) || null, e, t, n, r, a)), !0);
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((bf(e, r), 4 & t && -1 < yf.indexOf(e))) {
              for (; null !== a; ) {
                var l = He(a);
                if (null !== l)
                  switch (l.tag) {
                    case 3:
                      if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                        var i = ye(l.pendingLanes);
                        if (0 !== i) {
                          var o = l;
                          for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                            var s = 1 << (31 - pe(i));
                            ((o.entanglements[1] |= s), (i &= ~s));
                          }
                          (ku(l), 0 === (6 & nc) && ((kc = te() + 500), Su(0, !1)));
                        }
                      }
                      break;
                    case 13:
                      (null !== (o = Mr(l, 2)) && Rc(o, 0, 2), Bc(), ef(l, 2));
                  }
                if ((null === (l = of(r)) && Hu(e, t, r, sf, n), l === a)) break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Hu(e, t, r, null, n);
          }
        }
        function of(e) {
          return cf((e = Mt(e)));
        }
        var sf = null;
        function cf(e) {
          if (((sf = null), null !== (e = Be(e)))) {
            var t = s(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = c(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return ((sf = e), null);
        }
        function uf(e) {
          switch (e) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 2;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 8;
            case 'message':
              switch (ne()) {
                case re:
                  return 2;
                case ae:
                  return 8;
                case le:
                case ie:
                  return 32;
                case oe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var df = !1,
          ff = null,
          pf = null,
          hf = null,
          mf = new Map(),
          gf = new Map(),
          vf = [],
          yf =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
              ' ',
            );
        function bf(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              ff = null;
              break;
            case 'dragenter':
            case 'dragleave':
              pf = null;
              break;
            case 'mouseover':
            case 'mouseout':
              hf = null;
              break;
            case 'pointerover':
            case 'pointerout':
              mf.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              gf.delete(t.pointerId);
          }
        }
        function xf(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }), null !== t && null !== (t = He(t)) && tf(t), e)
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
        }
        function wf(e) {
          var t = Be(e.target);
          if (null !== t) {
            var n = s(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = c(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = A.p;
                      try {
                        return ((A.p = e), t());
                      } finally {
                        A.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Oc();
                        e = Te(e);
                        var t = Mr(n, e);
                        (null !== t && Rc(t, 0, e), ef(n, e));
                      }
                    })
                  );
              } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function kf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = of(e.nativeEvent);
            if (null !== n) return (null !== (t = He(n)) && tf(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Lt = r), n.target.dispatchEvent(r), (Lt = null), t.shift());
          }
          return !0;
        }
        function Sf(e, t, n) {
          kf(e) && n.delete(t);
        }
        function Ef() {
          ((df = !1), null !== ff && kf(ff) && (ff = null), null !== pf && kf(pf) && (pf = null), null !== hf && kf(hf) && (hf = null), mf.forEach(Sf), gf.forEach(Sf));
        }
        function Nf(e, t) {
          e.blockedOn === t && ((e.blockedOn = null), df || ((df = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, Ef)));
        }
        var Cf = null;
        function jf(e) {
          Cf !== e &&
            ((Cf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              Cf === e && (Cf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ('function' !== typeof r) {
                  if (null === cf(r || n)) continue;
                  break;
                }
                var l = He(n);
                null !== l && (e.splice(t, 3), (t -= 3), Li(l, { pending: !0, data: a, method: n.method, action: r }, r, a));
              }
            }));
        }
        function Tf(e) {
          function t(t) {
            return Nf(t, e);
          }
          (null !== ff && Nf(ff, e), null !== pf && Nf(pf, e), null !== hf && Nf(hf, e), mf.forEach(t), gf.forEach(t));
          for (var n = 0; n < vf.length; n++) {
            var r = vf[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < vf.length && null === (n = vf[0]).blockedOn; ) (wf(n), null === n.blockedOn && vf.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                l = n[r + 1],
                i = a[_e] || null;
              if ('function' === typeof l) i || jf(n);
              else if (i) {
                var o = null;
                if (l && l.hasAttribute('formAction')) {
                  if (((a = l), (i = l[_e] || null))) o = i.formAction;
                  else if (null !== cf(a)) continue;
                } else o = i.action;
                ('function' === typeof o ? (n[r + 1] = o) : (n.splice(r, 3), (r -= 3)), jf(n));
              }
            }
        }
        function Pf(e) {
          this._internalRoot = e;
        }
        function Lf(e) {
          this._internalRoot = e;
        }
        ((Lf.prototype.render = Pf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Jd(t.current, Oc(), e, t, null, null);
          }),
          (Lf.prototype.unmount = Pf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (Jd(e.current, 2, null, e, null, null), Bc(), (t[Oe] = null));
              }
            }),
          (Lf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Le();
              e = { blockedOn: null, target: e, priority: t };
              for (var n = 0; n < vf.length && 0 !== t && t < vf[n].priority; n++);
              (vf.splice(n, 0, e), 0 === n && wf(e));
            }
          }));
        var Mf = a.version;
        if ('19.1.1' !== Mf) throw Error(i(527, Mf, '19.1.1'));
        A.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ('function' === typeof e.render) throw Error(i(188));
            throw ((e = Object.keys(e).join(',')), Error(i(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = s(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return (u(a), e);
                    if (l === r) return (u(a), t);
                    l = l.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) ((n = a), (r = l));
                else {
                  for (var o = !1, c = a.child; c; ) {
                    if (c === n) {
                      ((o = !0), (n = a), (r = l));
                      break;
                    }
                    if (c === r) {
                      ((o = !0), (r = a), (n = l));
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!o) {
                    for (c = l.child; c; ) {
                      if (c === n) {
                        ((o = !0), (n = l), (r = a));
                        break;
                      }
                      if (c === r) {
                        ((o = !0), (r = l), (n = a));
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!o) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? d(e) : null) ? null : e.stateNode)
          );
        };
        var zf = { bundleType: 0, version: '19.1.1', rendererPackageName: 'react-dom', currentDispatcherRef: O, reconcilerVersion: '19.1.1' };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var _f = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!_f.isDisabled && _f.supportsFiber)
            try {
              ((ue = _f.inject(zf)), (de = _f));
            } catch (Af) {}
        }
        ((t.createRoot = function (e, t) {
          if (!o(e)) throw Error(i(299));
          var n = !1,
            r = '',
            a = yo,
            l = bo,
            s = xo;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (l = t.onCaughtError),
              void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks),
            (t = Xd(e, 1, !1, null, 0, n, r, a, l, s, 0, null)),
            (e[Oe] = t.current),
            Wu(e),
            new Pf(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!o(e)) throw Error(i(299));
            var r = !1,
              a = '',
              l = yo,
              s = bo,
              c = xo,
              u = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (l = n.onUncaughtError),
                void 0 !== n.onCaughtError && (s = n.onCaughtError),
                void 0 !== n.onRecoverableError && (c = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks,
                void 0 !== n.formState && (u = n.formState)),
              ((t = Xd(e, 1, !0, t, 0, r, a, l, s, c, 0, u)).context = Kd(null)),
              (n = t.current),
              ((a = al((r = Te((r = Oc()))))).callback = null),
              ll(n, a, r),
              (n = r),
              (t.current.lanes = n),
              Ne(t, n),
              ku(t),
              (e[Oe] = t.current),
              Wu(e),
              new Lf(t)
            );
          }),
          (t.version = '19.1.1'));
      },
      557: (e, t, n) => {
        e.exports = n(696);
      },
      592: (e, t) => {
        var n = Symbol.for('react.transitional.element'),
          r = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          l = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          o = Symbol.for('react.consumer'),
          s = Symbol.for('react.context'),
          c = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h));
        }
        function y() {}
        function b(e, t, n) {
          ((this.props = e), (this.context = t), (this.refs = g), (this.updater = n || h));
        }
        ((v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e) throw Error('takes an object of state variables to update or a function which returns an object of state variables.');
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (y.prototype = v.prototype));
        var x = (b.prototype = new y());
        ((x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0));
        var w = Array.isArray,
          k = { H: null, A: null, T: null, S: null, V: null },
          S = Object.prototype.hasOwnProperty;
        function E(e, t, r, a, l, i) {
          return ((r = i.ref), { $$typeof: n, type: e, key: t, ref: void 0 !== r ? r : null, props: i });
        }
        function N(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function j(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function T() {}
        function P(e, t, a, l, i) {
          var o = typeof e;
          ('undefined' !== o && 'boolean' !== o) || (e = null);
          var s,
            c,
            u = !1;
          if (null === e) u = !0;
          else
            switch (o) {
              case 'bigint':
              case 'string':
              case 'number':
                u = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                    break;
                  case f:
                    return P((u = e._init)(e._payload), t, a, l, i);
                }
            }
          if (u)
            return (
              (i = i(e)),
              (u = '' === l ? '.' + j(e, 0) : l),
              w(i)
                ? ((a = ''),
                  null != u && (a = u.replace(C, '$&/') + '/'),
                  P(i, t, a, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) && ((s = i), (c = a + (null == i.key || (e && e.key === i.key) ? '' : ('' + i.key).replace(C, '$&/') + '/') + u), (i = E(s.type, c, void 0, 0, 0, s.props))), t.push(i)),
              1
            );
          u = 0;
          var d,
            h = '' === l ? '.' : l + ':';
          if (w(e)) for (var m = 0; m < e.length; m++) u += P((l = e[m]), t, a, (o = h + j(l, m)), i);
          else if ('function' === typeof (m = null === (d = e) || 'object' !== typeof d ? null : 'function' === typeof (d = (p && d[p]) || d['@@iterator']) ? d : null))
            for (e = m.call(e), m = 0; !(l = e.next()).done; ) u += P((l = l.value), t, a, (o = h + j(l, m++)), i);
          else if ('object' === o) {
            if ('function' === typeof e.then)
              return P(
                (function (e) {
                  switch (e.status) {
                    case 'fulfilled':
                      return e.value;
                    case 'rejected':
                      throw e.reason;
                    default:
                      switch (
                        ('string' === typeof e.status
                          ? e.then(T, T)
                          : ((e.status = 'pending'),
                            e.then(
                              function (t) {
                                'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t));
                              },
                              function (t) {
                                'pending' === e.status && ((e.status = 'rejected'), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case 'fulfilled':
                          return e.value;
                        case 'rejected':
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                l,
                i,
              );
            throw (
              (t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              )
            );
          }
          return u;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, '', '', function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function M(e) {
          if (-1 === e._status) {
            var t = e._result;
            ((t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t)));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                if ('object' === typeof window && 'function' === typeof window.ErrorEvent) {
                  var t = new window.ErrorEvent('error', {
                    bubbles: !0,
                    cancelable: !0,
                    message: 'object' === typeof e && null !== e && 'string' === typeof e.message ? String(e.message) : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if ('object' === typeof process && 'function' === typeof process.emit) return void process.emit('uncaughtException', e);
                console.error(e);
              };
        function _() {}
        ((t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e)) throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = u),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
          (t.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (e) {
              return k.H.useMemoCache(e);
            },
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error('The argument must be a React element, but you passed ' + e + '.');
            var r = m({}, e.props),
              a = e.key;
            if (null != t)
              for (l in (void 0 !== t.ref && void 0, void 0 !== t.key && (a = '' + t.key), t))
                !S.call(t, l) || 'key' === l || '__self' === l || '__source' === l || ('ref' === l && void 0 === t.ref) || (r[l] = t[l]);
            var l = arguments.length - 2;
            if (1 === l) r.children = n;
            else if (1 < l) {
              for (var i = Array(l), o = 0; o < l; o++) i[o] = arguments[o + 2];
              r.children = i;
            }
            return E(e.type, a, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (((e = { $$typeof: s, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = e), (e.Consumer = { $$typeof: o, _context: e }), e);
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              l = null;
            if (null != t) for (r in (void 0 !== t.key && (l = '' + t.key), t)) S.call(t, r) && 'key' !== r && '__self' !== r && '__source' !== r && (a[r] = t[r]);
            var i = arguments.length - 2;
            if (1 === i) a.children = n;
            else if (1 < i) {
              for (var o = Array(i), s = 0; s < i; s++) o[s] = arguments[s + 2];
              a.children = o;
            }
            if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
            return E(e, l, void 0, 0, 0, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: M };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = k.T,
              n = {};
            k.T = n;
            try {
              var r = e(),
                a = k.S;
              (null !== a && a(n, r), 'object' === typeof r && null !== r && 'function' === typeof r.then && r.then(_, z));
            } catch (l) {
              z(l);
            } finally {
              k.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return k.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return k.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return k.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return k.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return k.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return k.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t, n) {
            var r = k.H;
            if ('function' === typeof n) throw Error('useEffect CRUD overload is not enabled in this build of React.');
            return r.useEffect(e, t);
          }),
          (t.useId = function () {
            return k.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return k.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return k.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return k.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return k.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return k.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return k.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return k.H.useRef(e);
          }),
          (t.useState = function (e) {
            return k.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return k.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return k.H.useTransition();
          }),
          (t.version = '19.1.1'));
      },
      696: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            ((e[r] = t), (e[n] = a), (n = r));
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                c = o + 1,
                u = e[c];
              if (0 > l(s, n)) c < a && 0 > l(u, s) ? ((e[r] = u), (e[c] = n), (r = c)) : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(c < a && 0 > l(u, n))) break e;
                ((e[r] = u), (e[c] = n), (r = c));
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (((t.unstable_now = void 0), 'object' === typeof performance && 'function' === typeof performance.now)) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = !1,
          y = 'function' === typeof setTimeout ? setTimeout : null,
          b = 'function' === typeof clearTimeout ? clearTimeout : null,
          x = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              (a(u), (t.sortIndex = t.expirationTime), n(c, t));
            }
            t = r(u);
          }
        }
        function k(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(c)) ((m = !0), E || ((E = !0), S()));
            else {
              var t = r(u);
              null !== t && z(k, t.startTime - e);
            }
        }
        var S,
          E = !1,
          N = -1,
          C = 5,
          j = -1;
        function T() {
          return !!v || !(t.unstable_now() - j < C);
        }
        function P() {
          if (((v = !1), E)) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              e: {
                ((m = !1), g && ((g = !1), b(N), (N = -1)), (h = !0));
                var l = p;
                try {
                  t: {
                    for (w(e), f = r(c); null !== f && !(f.expirationTime > e && T()); ) {
                      var i = f.callback;
                      if ('function' === typeof i) {
                        ((f.callback = null), (p = f.priorityLevel));
                        var o = i(f.expirationTime <= e);
                        if (((e = t.unstable_now()), 'function' === typeof o)) {
                          ((f.callback = o), w(e), (n = !0));
                          break t;
                        }
                        (f === r(c) && a(c), w(e));
                      } else a(c);
                      f = r(c);
                    }
                    if (null !== f) n = !0;
                    else {
                      var s = r(u);
                      (null !== s && z(k, s.startTime - e), (n = !1));
                    }
                  }
                  break e;
                } finally {
                  ((f = null), (p = l), (h = !1));
                }
                n = void 0;
              }
            } finally {
              n ? S() : (E = !1);
            }
          }
        }
        if ('function' === typeof x)
          S = function () {
            x(P);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var L = new MessageChannel(),
            M = L.port2;
          ((L.port1.onmessage = P),
            (S = function () {
              M.postMessage(null);
            }));
        } else
          S = function () {
            y(P, 0);
          };
        function z(e, n) {
          N = y(function () {
            e(t.unstable_now());
          }, n);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_requestPaint = function () {
            v = !0;
          }),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (('object' === typeof l && null !== l ? (l = 'number' === typeof (l = l.delay) && 0 < l ? i + l : i) : (l = i), e)) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = { id: d++, callback: a, priorityLevel: e, startTime: l, expirationTime: (o = l + o), sortIndex: -1 }),
              l > i
                ? ((e.sortIndex = l), n(u, e), null === r(c) && e === r(u) && (g ? (b(N), (N = -1)) : (g = !0), z(k, l - i)))
                : ((e.sortIndex = o), n(c, e), m || h || ((m = !0), E || ((E = !0), S()))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          }));
      },
      719: (e, t) => {
        var n = Symbol.for('react.transitional.element'),
          r = Symbol.for('react.fragment');
        function a(e, t, r) {
          var a = null;
          if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t)) for (var l in ((r = {}), t)) 'key' !== l && (r[l] = t[l]);
          else r = t;
          return ((t = r.ref), { $$typeof: n, type: e, key: a, ref: void 0 !== t ? t : null, props: r });
        }
        ((t.Fragment = r), (t.jsx = a), (t.jsxs = a));
      },
      723: (e, t, n) => {
        e.exports = n(719);
      },
      775: (e, t, n) => {
        (!(function e() {
          if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && 'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(556)));
      },
      904: (e, t, n) => {
        var r = n(483);
        function a(e) {
          var t = 'https://react.dev/errors/' + e;
          if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
          }
          return 'Minified React error #' + e + '; visit ' + t + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.';
        }
        function l() {}
        var i = {
            d: {
              f: l,
              r: function () {
                throw Error(a(522));
              },
              D: l,
              C: l,
              L: l,
              m: l,
              X: l,
              S: l,
              M: l,
            },
            p: 0,
            findDOMNode: null,
          },
          o = Symbol.for('react.portal');
        var s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function c(e, t) {
          return 'font' === e ? '' : 'string' === typeof t ? ('use-credentials' === t ? t : '') : void 0;
        }
        ((t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
          (t.createPortal = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(a(299));
            return (function (e, t, n) {
              var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return { $$typeof: o, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = s.T,
              n = i.p;
            try {
              if (((s.T = null), (i.p = 2), e)) return e();
            } finally {
              ((s.T = t), (i.p = n), i.d.f());
            }
          }),
          (t.preconnect = function (e, t) {
            'string' === typeof e && (t ? (t = 'string' === typeof (t = t.crossOrigin) ? ('use-credentials' === t ? t : '') : void 0) : (t = null), i.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            'string' === typeof e && i.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ('string' === typeof e && t && 'string' === typeof t.as) {
              var n = t.as,
                r = c(n, t.crossOrigin),
                a = 'string' === typeof t.integrity ? t.integrity : void 0,
                l = 'string' === typeof t.fetchPriority ? t.fetchPriority : void 0;
              'style' === n
                ? i.d.S(e, 'string' === typeof t.precedence ? t.precedence : void 0, { crossOrigin: r, integrity: a, fetchPriority: l })
                : 'script' === n && i.d.X(e, { crossOrigin: r, integrity: a, fetchPriority: l, nonce: 'string' === typeof t.nonce ? t.nonce : void 0 });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ('string' === typeof e)
              if ('object' === typeof t && null !== t) {
                if (null == t.as || 'script' === t.as) {
                  var n = c(t.as, t.crossOrigin);
                  i.d.M(e, { crossOrigin: n, integrity: 'string' === typeof t.integrity ? t.integrity : void 0, nonce: 'string' === typeof t.nonce ? t.nonce : void 0 });
                }
              } else null == t && i.d.M(e);
          }),
          (t.preload = function (e, t) {
            if ('string' === typeof e && 'object' === typeof t && null !== t && 'string' === typeof t.as) {
              var n = t.as,
                r = c(n, t.crossOrigin);
              i.d.L(e, n, {
                crossOrigin: r,
                integrity: 'string' === typeof t.integrity ? t.integrity : void 0,
                nonce: 'string' === typeof t.nonce ? t.nonce : void 0,
                type: 'string' === typeof t.type ? t.type : void 0,
                fetchPriority: 'string' === typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: 'string' === typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: 'string' === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: 'string' === typeof t.imageSizes ? t.imageSizes : void 0,
                media: 'string' === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ('string' === typeof e)
              if (t) {
                var n = c(t.as, t.crossOrigin);
                i.d.m(e, { as: 'string' === typeof t.as && 'script' !== t.as ? t.as : void 0, crossOrigin: n, integrity: 'string' === typeof t.integrity ? t.integrity : void 0 });
              } else i.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            i.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return s.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return s.H.useHostTransitionStatus();
          }),
          (t.version = '19.1.1'));
      },
      998: (e, t, n) => {
        (!(function e() {
          if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && 'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(904)));
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return (e[r](l, l.exports, n), l.exports);
  }
  n.p = '/';
  var r = n(483),
    a = n(775);
  function l(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]));
        return a;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])));
    }
    return a;
  }
  function i(e) {
    return (
      (i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            }),
      i(e)
    );
  }
  function o(e) {
    var t = (function (e, t) {
      if ('object' !== i(e) || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(e, t || 'default');
        if ('object' !== i(r)) return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === i(t) ? t : String(t);
  }
  function s(e, t, n) {
    return ((t = o(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e);
  }
  function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r));
    }
    return n;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? c(Object(n), !0).forEach(function (t) {
            s(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
    }
    return e;
  }
  const d = ['sri'],
    f = ['page'],
    p = ['page', 'matches'],
    h = ['onClick', 'discover', 'prefetch', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'viewTransition'],
    m = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'viewTransition', 'children'],
    g = ['discover', 'fetcherKey', 'navigate', 'reloadDocument', 'replace', 'state', 'method', 'action', 'onSubmit', 'relative', 'preventScrollReset', 'viewTransition'];
  var v = 'popstate';
  function y() {
    return N(
      function (e, t) {
        let { pathname: n, search: r, hash: a } = e.location;
        return k('', { pathname: n, search: r, hash: a }, (t.state && t.state.usr) || null, (t.state && t.state.key) || 'default');
      },
      function (e, t) {
        return 'string' === typeof t ? t : S(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    );
  }
  function b(e, t) {
    if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
  }
  function x(e, t) {
    if (!e) {
      'undefined' !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function w(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0;
    return u(
      u({ pathname: 'string' === typeof e ? e : e.pathname, search: '', hash: '' }, 'string' === typeof t ? E(t) : t),
      {},
      { state: n, key: (t && t.key) || r || Math.random().toString(36).substring(2, 10) },
    );
  }
  function S(e) {
    let { pathname: t = '/', search: n = '', hash: r = '' } = e;
    return (n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n), r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r), t);
  }
  function E(e) {
    let t = {};
    if (e) {
      let n = e.indexOf('#');
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf('?');
      (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))), e && (t.pathname = e));
    }
    return t;
  }
  function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: a = document.defaultView, v5Compat: l = !1 } = r,
      i = a.history,
      o = 'POP',
      s = null,
      c = d();
    function d() {
      return (i.state || { idx: null }).idx;
    }
    function f() {
      o = 'POP';
      let e = d(),
        t = null == e ? null : e - c;
      ((c = e), s && s({ action: o, location: h.location, delta: t }));
    }
    function p(e) {
      return C(e);
    }
    null == c && ((c = 0), i.replaceState(u(u({}, i.state), {}, { idx: c }), ''));
    let h = {
      get action() {
        return o;
      },
      get location() {
        return e(a, i);
      },
      listen(e) {
        if (s) throw new Error('A history only accepts one active listener');
        return (
          a.addEventListener(v, f),
          (s = e),
          () => {
            (a.removeEventListener(v, f), (s = null));
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: p,
      encodeLocation(e) {
        let t = p(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        o = 'PUSH';
        let r = k(h.location, e, t);
        (n && n(r, e), (c = d() + 1));
        let u = w(r, c),
          f = h.createHref(r);
        try {
          i.pushState(u, '', f);
        } catch (p) {
          if (p instanceof DOMException && 'DataCloneError' === p.name) throw p;
          a.location.assign(f);
        }
        l && s && s({ action: o, location: h.location, delta: 1 });
      },
      replace: function (e, t) {
        o = 'REPLACE';
        let r = k(h.location, e, t);
        (n && n(r, e), (c = d()));
        let a = w(r, c),
          u = h.createHref(r);
        (i.replaceState(a, '', u), l && s && s({ action: o, location: h.location, delta: 0 }));
      },
      go: (e) => i.go(e),
    };
    return h;
  }
  function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = 'http://localhost';
    ('undefined' !== typeof window && (n = 'null' !== window.location.origin ? window.location.origin : window.location.href), b(n, 'No window.location.(origin|href) available to create URL'));
    let r = 'string' === typeof e ? e : S(e);
    return ((r = r.replace(/ $/, '%20')), !t && r.startsWith('//') && (r = n + r), new URL(r, n));
  }
  new WeakMap();
  function j(e, t) {
    return T(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '/', !1);
  }
  function T(e, t, n, r) {
    let a = V(('string' === typeof t ? E(t) : t).pathname || '/', n);
    if (null == a) return null;
    let l = P(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n = e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex),
            ),
      );
    })(l);
    let i = null;
    for (let o = 0; null == i && o < l.length; ++o) {
      let e = H(a);
      i = F(l[o], e, r);
    }
    return i;
  }
  function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      l = function (e, l) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
          o = arguments.length > 3 ? arguments[3] : void 0,
          s = { relativePath: void 0 === o ? e.path || '' : o, caseSensitive: !0 === e.caseSensitive, childrenIndex: l, route: e };
        if (s.relativePath.startsWith('/')) {
          if (!s.relativePath.startsWith(r) && i) return;
          (b(
            s.relativePath.startsWith(r),
            'Absolute route path "'
              .concat(s.relativePath, '" nested under path "')
              .concat(r, '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),
          ),
            (s.relativePath = s.relativePath.slice(r.length)));
        }
        let c = $([r, s.relativePath]),
          u = n.concat(s);
        (e.children &&
          e.children.length > 0 &&
          (b(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "'.concat(c, '".')), P(e.children, t, u, c, i)),
          (null != e.path || e.index) && t.push({ path: c, score: I(c, e.index), routesMeta: u }));
      };
    return (
      e.forEach((e, t) => {
        var n;
        if ('' !== e.path && null !== (n = e.path) && void 0 !== n && n.includes('?')) for (let r of L(e.path)) l(e, t, !0, r);
        else l(e, t);
      }),
      t
    );
  }
  function L(e) {
    let t = e.split('/');
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith('?'),
      l = n.replace(/\?$/, '');
    if (0 === r.length) return a ? [l, ''] : [l];
    let i = L(r.join('/')),
      o = [];
    return (o.push(...i.map((e) => ('' === e ? l : [l, e].join('/')))), a && o.push(...i), o.map((t) => (e.startsWith('/') && '' === t ? '/' : t)));
  }
  var M = /^:[\w-]+$/,
    z = 3,
    _ = 2,
    O = 1,
    A = 10,
    R = -2,
    D = (e) => '*' === e;
  function I(e, t) {
    let n = e.split('/'),
      r = n.length;
    return (n.some(D) && (r += R), t && (r += _), n.filter((e) => !D(e)).reduce((e, t) => e + (M.test(t) ? z : '' === t ? O : A), r));
  }
  function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      a = {},
      l = '/',
      i = [];
    for (let o = 0; o < r.length; ++o) {
      let e = r[o],
        s = o === r.length - 1,
        c = '/' === l ? t : t.slice(l.length) || '/',
        u = W({ path: e.relativePath, caseSensitive: e.caseSensitive, end: s }, c),
        d = e.route;
      if ((!u && s && n && !r[r.length - 1].route.index && (u = W({ path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 }, c)), !u)) return null;
      (Object.assign(a, u.params), i.push({ params: a, pathname: $([l, u.pathname]), pathnameBase: Q($([l, u.pathnameBase])), route: d }), '/' !== u.pathnameBase && (l = $([l, u.pathnameBase])));
    }
    return i;
  }
  function W(e, t) {
    'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = B(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let l = a[0],
      i = l.replace(/(.)\/+$/, '$1'),
      o = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ('*' === r) {
          let e = o[n] || '';
          i = l.slice(0, l.length - e.length).replace(/(.)\/+$/, '$1');
        }
        const s = o[n];
        return ((e[r] = a && !s ? void 0 : (s || '').replace(/%2F/g, '/')), e);
      }, {}),
      pathname: l,
      pathnameBase: i,
      pattern: e,
    };
  }
  function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    x(
      '*' === e || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "'
        .concat(e, '" will be treated as if it were "')
        .concat(e.replace(/\*$/, '/*'), '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "')
        .concat(e.replace(/\*$/, '/*'), '".'),
    );
    let r = [],
      a =
        '^' +
        e
          .replace(/\/*\*?$/, '')
          .replace(/^\/*/, '/')
          .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
          .replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => (r.push({ paramName: t, isOptional: null != n }), n ? '/?([^\\/]+)?' : '/([^\\/]+)'))
          .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
    return (
      e.endsWith('*') ? (r.push({ paramName: '*' }), (a += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$')) : n ? (a += '\\/*$') : '' !== e && '/' !== e && (a += '(?:(?=\\/|$))'),
      [new RegExp(a, t ? void 0 : 'i'), r]
    );
  }
  function H(e) {
    try {
      return e
        .split('/')
        .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
        .join('/');
    } catch (t) {
      return (x(!1, 'The URL path "'.concat(e, '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(t, ').')), e);
    }
  }
  function V(e, t) {
    if ('/' === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith('/') ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && '/' !== r ? null : e.slice(n) || '/';
  }
  function U(e, t, n, r) {
    return "Cannot include a '"
      .concat(e, "' character in a manually specified `to.")
      .concat(t, '` field [')
      .concat(JSON.stringify(r), '].  Please separate it out to the `to.')
      .concat(n, '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.');
  }
  function q(e) {
    return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
  }
  function G(e) {
    let t = q(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function Y(e, t, n) {
    let r,
      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    'string' === typeof e
      ? (r = E(e))
      : ((r = u({}, e)),
        b(!r.pathname || !r.pathname.includes('?'), U('?', 'pathname', 'search', r)),
        b(!r.pathname || !r.pathname.includes('#'), U('#', 'pathname', 'hash', r)),
        b(!r.search || !r.search.includes('#'), U('#', 'search', 'hash', r)));
    let l,
      i = '' === e || '' === r.pathname,
      o = i ? '/' : r.pathname;
    if (null == o) l = n;
    else {
      let e = t.length - 1;
      if (!a && o.startsWith('..')) {
        let t = o.split('/');
        for (; '..' === t[0]; ) (t.shift(), (e -= 1));
        r.pathname = t.join('/');
      }
      l = e >= 0 ? t[e] : '/';
    }
    let s = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '/',
          { pathname: n, search: r = '', hash: a = '' } = 'string' === typeof e ? E(e) : e,
          l = n
            ? n.startsWith('/')
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, '').split('/');
                  return (
                    e.split('/').forEach((e) => {
                      '..' === e ? n.length > 1 && n.pop() : '.' !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join('/') : '/'
                  );
                })(n, t)
            : t;
        return { pathname: l, search: X(r), hash: K(a) };
      })(r, l),
      c = o && '/' !== o && o.endsWith('/'),
      d = (i || '.' === o) && n.endsWith('/');
    return (s.pathname.endsWith('/') || (!c && !d) || (s.pathname += '/'), s);
  }
  var $ = (e) => e.join('/').replace(/\/\/+/g, '/'),
    Q = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    X = (e) => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
    K = (e) => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
  function J(e) {
    return null != e && 'number' === typeof e.status && 'string' === typeof e.statusText && 'boolean' === typeof e.internal && 'data' in e;
  }
  var Z = ['POST', 'PUT', 'PATCH', 'DELETE'],
    ee = (new Set(Z), ['GET', ...Z]);
  (new Set(ee), Symbol('ResetLoaderData'));
  var te = r.createContext(null);
  te.displayName = 'DataRouter';
  var ne = r.createContext(null);
  ne.displayName = 'DataRouterState';
  var re = r.createContext(!1);
  var ae = r.createContext({ isTransitioning: !1 });
  ae.displayName = 'ViewTransition';
  var le = r.createContext(new Map());
  le.displayName = 'Fetchers';
  var ie = r.createContext(null);
  ie.displayName = 'Await';
  var oe = r.createContext(null);
  oe.displayName = 'Navigation';
  var se = r.createContext(null);
  se.displayName = 'Location';
  var ce = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  ce.displayName = 'Route';
  var ue = r.createContext(null);
  ue.displayName = 'RouteError';
  function de() {
    return null != r.useContext(se);
  }
  function fe() {
    return (b(de(), 'useLocation() may be used only in the context of a <Router> component.'), r.useContext(se).location);
  }
  var pe = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
  function he(e) {
    r.useContext(oe).static || r.useLayoutEffect(e);
  }
  function me() {
    let { isDataRoute: e } = r.useContext(ce);
    return e
      ? (function () {
          let { router: e } = Ee('useNavigate'),
            t = Ce('useNavigate'),
            n = r.useRef(!1);
          he(() => {
            n.current = !0;
          });
          let a = r.useCallback(
            async function (r) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              (x(n.current, pe), n.current && ('number' === typeof r ? e.navigate(r) : await e.navigate(r, u({ fromRouteId: t }, a))));
            },
            [e, t],
          );
          return a;
        })()
      : (function () {
          b(de(), 'useNavigate() may be used only in the context of a <Router> component.');
          let e = r.useContext(te),
            { basename: t, navigator: n } = r.useContext(oe),
            { matches: a } = r.useContext(ce),
            { pathname: l } = fe(),
            i = JSON.stringify(G(a)),
            o = r.useRef(!1);
          he(() => {
            o.current = !0;
          });
          let s = r.useCallback(
            function (r) {
              let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if ((x(o.current, pe), !o.current)) return;
              if ('number' === typeof r) return void n.go(r);
              let s = Y(r, JSON.parse(i), l, 'path' === a.relative);
              (null == e && '/' !== t && (s.pathname = '/' === s.pathname ? t : $([t, s.pathname])), (a.replace ? n.replace : n.push)(s, a.state, a));
            },
            [t, n, i, l, e],
          );
          return s;
        })();
  }
  r.createContext(null);
  function ge(e) {
    let { relative: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = r.useContext(ce),
      { pathname: a } = fe(),
      l = JSON.stringify(G(n));
    return r.useMemo(() => Y(e, JSON.parse(l), a, 'path' === t), [e, l, a, t]);
  }
  function ve(e, t, n, a, l) {
    b(de(), 'useRoutes() may be used only in the context of a <Router> component.');
    let { navigator: i } = r.useContext(oe),
      { matches: o } = r.useContext(ce),
      s = o[o.length - 1],
      c = s ? s.params : {},
      d = s ? s.pathname : '/',
      f = s ? s.pathnameBase : '/',
      p = s && s.route;
    {
      let e = (p && p.path) || '';
      Pe(
        d,
        !p || e.endsWith('*') || e.endsWith('*?'),
        'You rendered descendant <Routes> (or called `useRoutes()`) at "'
          .concat(d, '" (under <Route path="')
          .concat(
            e,
            '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="',
          )
          .concat(e, '"> to <Route path="')
          .concat('/' === e ? '*' : ''.concat(e, '/*'), '">.'),
      );
    }
    let h,
      m = fe();
    if (t) {
      var g;
      let e = 'string' === typeof t ? E(t) : t;
      (b(
        '/' === f || (null === (g = e.pathname) || void 0 === g ? void 0 : g.startsWith(f)),
        'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'
          .concat(f, '" but pathname "')
          .concat(e.pathname, '" was given in the `location` prop.'),
      ),
        (h = e));
    } else h = m;
    let v = h.pathname || '/',
      y = v;
    if ('/' !== f) {
      let e = f.replace(/^\//, '').split('/');
      y = '/' + v.replace(/^\//, '').split('/').slice(e.length).join('/');
    }
    let w = j(e, { pathname: y });
    (x(p || null != w, 'No routes matched location "'.concat(h.pathname).concat(h.search).concat(h.hash, '" ')),
      x(
        null == w || void 0 !== w[w.length - 1].route.element || void 0 !== w[w.length - 1].route.Component || void 0 !== w[w.length - 1].route.lazy,
        'Matched leaf route at location "'
          .concat(h.pathname)
          .concat(h.search)
          .concat(h.hash, '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'),
      ));
    let k = ke(
      w &&
        w.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: $([f, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
            pathnameBase: '/' === e.pathnameBase ? f : $([f, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]),
          }),
        ),
      o,
      n,
      a,
      l,
    );
    return t && k ? r.createElement(se.Provider, { value: { location: u({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, h), navigationType: 'POP' } }, k) : k;
  }
  function ye() {
    let e = je(),
      t = J(e) ? ''.concat(e.status, ' ').concat(e.statusText) : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      a = 'rgba(200,200,200, 0.5)',
      l = { padding: '0.5rem', backgroundColor: a },
      i = { padding: '2px 4px', backgroundColor: a },
      o = null;
    return (
      console.error('Error handled by React Router default ErrorBoundary:', e),
      (o = r.createElement(
        r.Fragment,
        null,
        r.createElement('p', null, '\ud83d\udcbf Hey developer \ud83d\udc4b'),
        r.createElement(
          'p',
          null,
          'You can provide a way better UX than this when your app throws errors by providing your own ',
          r.createElement('code', { style: i }, 'ErrorBoundary'),
          ' or',
          ' ',
          r.createElement('code', { style: i }, 'errorElement'),
          ' prop on your route.',
        ),
      )),
      r.createElement(
        r.Fragment,
        null,
        r.createElement('h2', null, 'Unexpected Application Error!'),
        r.createElement('h3', { style: { fontStyle: 'italic' } }, t),
        n ? r.createElement('pre', { style: l }, n) : null,
        o,
      )
    );
  }
  var be = r.createElement(ye, null),
    xe = class extends r.Component {
      constructor(e) {
        (super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || ('idle' !== t.revalidation && 'idle' === e.revalidation)
          ? { error: e.error, location: e.location, revalidation: e.revalidation }
          : { error: void 0 !== e.error ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation };
      }
      componentDidCatch(e, t) {
        this.props.unstable_onError ? this.props.unstable_onError(e, t) : console.error('React Router caught the following error during render', e);
      }
      render() {
        return void 0 !== this.state.error
          ? r.createElement(ce.Provider, { value: this.props.routeContext }, r.createElement(ue.Provider, { value: this.state.error, children: this.props.component }))
          : this.props.children;
      }
    };
  function we(e) {
    let { routeContext: t, match: n, children: a } = e,
      l = r.useContext(te);
    return (
      l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
      r.createElement(ce.Provider, { value: t }, a)
    );
  }
  function ke(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (null == e) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (0 !== t.length || n.initialized || !(n.matches.length > 0)) return null;
        e = n.matches;
      }
    }
    let l = e,
      i = null === n || void 0 === n ? void 0 : n.errors;
    if (null != i) {
      let e = l.findIndex((e) => e.route.id && void 0 !== (null === i || void 0 === i ? void 0 : i[e.route.id]));
      (b(e >= 0, 'Could not find a matching route for errors on route IDs: '.concat(Object.keys(i).join(','))), (l = l.slice(0, Math.min(l.length, e + 1))));
    }
    let o = !1,
      s = -1;
    if (n)
      for (let r = 0; r < l.length; r++) {
        let e = l[r];
        if (((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (s = r), e.route.id)) {
          let { loaderData: t, errors: r } = n,
            a = e.route.loader && !t.hasOwnProperty(e.route.id) && (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || a) {
            ((o = !0), (l = s >= 0 ? l.slice(0, s + 1) : [l[0]]));
            break;
          }
        }
      }
    return l.reduceRight((e, c, u) => {
      let d,
        f = !1,
        p = null,
        h = null;
      n &&
        ((d = i && c.route.id ? i[c.route.id] : void 0),
        (p = c.route.errorElement || be),
        o &&
          (s < 0 && 0 === u
            ? (Pe('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'), (f = !0), (h = null))
            : s === u && ((f = !0), (h = c.route.hydrateFallbackElement || null))));
      let m = t.concat(l.slice(0, u + 1)),
        g = () => {
          let t;
          return (
            (t = d ? p : f ? h : c.route.Component ? r.createElement(c.route.Component, null) : c.route.element ? c.route.element : e),
            r.createElement(we, { match: c, routeContext: { outlet: e, matches: m, isDataRoute: null != n }, children: t })
          );
        };
      return n && (c.route.ErrorBoundary || c.route.errorElement || 0 === u)
        ? r.createElement(xe, {
            location: n.location,
            revalidation: n.revalidation,
            component: p,
            error: d,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
            unstable_onError: a,
          })
        : g();
    }, null);
  }
  function Se(e) {
    return ''.concat(e, ' must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.');
  }
  function Ee(e) {
    let t = r.useContext(te);
    return (b(t, Se(e)), t);
  }
  function Ne(e) {
    let t = r.useContext(ne);
    return (b(t, Se(e)), t);
  }
  function Ce(e) {
    let t = (function (e) {
        let t = r.useContext(ce);
        return (b(t, Se(e)), t);
      })(e),
      n = t.matches[t.matches.length - 1];
    return (b(n.route.id, ''.concat(e, ' can only be used on routes that contain a unique "id"')), n.route.id);
  }
  function je() {
    var e;
    let t = r.useContext(ue),
      n = Ne('useRouteError'),
      a = Ce('useRouteError');
    return void 0 !== t ? t : null === (e = n.errors) || void 0 === e ? void 0 : e[a];
  }
  var Te = {};
  function Pe(e, t, n) {
    t || Te[e] || ((Te[e] = !0), x(!1, n));
  }
  var Le = {};
  function Me(e, t) {
    e || Le[t] || ((Le[t] = !0), console.warn(t));
  }
  r.memo(function (e) {
    let { routes: t, future: n, state: r, unstable_onError: a } = e;
    return ve(t, void 0, r, a, n);
  });
  function ze(e) {
    b(!1, 'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.');
  }
  function _e(e) {
    let { basename: t = '/', children: n = null, location: a, navigationType: l = 'POP', navigator: i, static: o = !1 } = e;
    b(!de(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.');
    let s = t.replace(/^\/*/, '/'),
      c = r.useMemo(() => ({ basename: s, navigator: i, static: o, future: {} }), [s, i, o]);
    'string' === typeof a && (a = E(a));
    let { pathname: u = '/', search: d = '', hash: f = '', state: p = null, key: h = 'default' } = a,
      m = r.useMemo(() => {
        let e = V(u, s);
        return null == e ? null : { location: { pathname: e, search: d, hash: f, state: p, key: h }, navigationType: l };
      }, [s, u, d, f, p, h, l]);
    return (
      x(
        null != m,
        '<Router basename="'.concat(s, '"> is not able to match the URL "').concat(u).concat(d).concat(f, '" because it does not start with the basename, so the <Router> won\'t render anything.'),
      ),
      null == m ? null : r.createElement(oe.Provider, { value: c }, r.createElement(se.Provider, { children: n, value: m }))
    );
  }
  function Oe(e) {
    let { children: t, location: n } = e;
    return ve(Ae(t), n);
  }
  r.Component;
  function Ae(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    return (
      r.Children.forEach(e, (e, a) => {
        if (!r.isValidElement(e)) return;
        let l = [...t, a];
        if (e.type === r.Fragment) return void n.push.apply(n, Ae(e.props.children, l));
        (b(e.type === ze, '['.concat('string' === typeof e.type ? e.type : e.type.name, '] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>')),
          b(!e.props.index || !e.props.children, 'An index route cannot have child routes.'));
        let i = {
          id: e.props.id || l.join('-'),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary: !0 === e.props.hasErrorBoundary || null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        (e.props.children && (i.children = Ae(e.props.children, l)), n.push(i));
      }),
      n
    );
  }
  var Re = 'get',
    De = 'application/x-www-form-urlencoded';
  function Ie(e) {
    return null != e && 'string' === typeof e.tagName;
  }
  var Fe = null;
  var We = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
  function Be(e) {
    return null == e || We.has(e) ? e : (x(!1, '"'.concat(e, '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(De, '"')), null);
  }
  function He(e, t) {
    let n, r, a, l, i;
    if (Ie((o = e)) && 'form' === o.tagName.toLowerCase()) {
      let i = e.getAttribute('action');
      ((r = i ? V(i, t) : null), (n = e.getAttribute('method') || Re), (a = Be(e.getAttribute('enctype')) || De), (l = new FormData(e)));
    } else if (
      (function (e) {
        return Ie(e) && 'button' === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return Ie(e) && 'input' === e.tagName.toLowerCase();
      })(e) &&
        ('submit' === e.type || 'image' === e.type))
    ) {
      let i = e.form;
      if (null == i) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let o = e.getAttribute('formaction') || i.getAttribute('action');
      if (
        ((r = o ? V(o, t) : null),
        (n = e.getAttribute('formmethod') || i.getAttribute('method') || Re),
        (a = Be(e.getAttribute('formenctype')) || Be(i.getAttribute('enctype')) || De),
        (l = new FormData(i, e)),
        !(function () {
          if (null === Fe)
            try {
              (new FormData(document.createElement('form'), 0), (Fe = !1));
            } catch (e) {
              Fe = !0;
            }
          return Fe;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ('image' === n) {
          let e = t ? ''.concat(t, '.') : '';
          (l.append(''.concat(e, 'x'), '0'), l.append(''.concat(e, 'y'), '0'));
        } else t && l.append(t, r);
      }
    } else {
      if (Ie(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      ((n = Re), (r = null), (a = De), (i = e));
    }
    var o;
    return (l && 'text/plain' === a && ((i = l), (l = void 0)), { action: r, method: n.toLowerCase(), encType: a, formData: l, body: i });
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
  'undefined' !== typeof window ? window : 'undefined' !== typeof globalThis && globalThis;
  function Ve(e) {
    return { __html: e };
  }
  function Ue(e, t) {
    if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
  }
  Symbol('SingleFetchRedirect');
  function qe(e, t, n) {
    let r = 'string' === typeof e ? new URL(e, 'undefined' === typeof window ? 'server://singlefetch/' : window.location.origin) : e;
    return (
      '/' === r.pathname
        ? (r.pathname = '_root.'.concat(n))
        : t && '/' === V(r.pathname, t)
          ? (r.pathname = ''.concat(t.replace(/\/$/, ''), '/_root.').concat(n))
          : (r.pathname = ''.concat(r.pathname.replace(/\/$/, ''), '.').concat(n)),
      r
    );
  }
  async function Ge(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return ((t[e.id] = n), n);
    } catch (n) {
      return (
        console.error('Error loading route module `'.concat(e.module, '`, reloading page...')),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Ye(e) {
    return null != e && 'string' === typeof e.page;
  }
  function $e(e) {
    return null != e && (null == e.href ? 'preload' === e.rel && 'string' === typeof e.imageSrcSet && 'string' === typeof e.imageSizes : 'string' === typeof e.rel && 'string' === typeof e.href);
  }
  function Qe(e, t, n, r, a, l) {
    let i = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      o = (e, t) => {
        var r;
        return n[t].pathname !== e.pathname || ((null === (r = n[t].route.path) || void 0 === r ? void 0 : r.endsWith('*')) && n[t].params['*'] !== e.params['*']);
      };
    return 'assets' === l
      ? t.filter((e, t) => i(e, t) || o(e, t))
      : 'data' === l
        ? t.filter((t, l) => {
            let s = r.routes[t.route.id];
            if (!s || !s.hasLoader) return !1;
            if (i(t, l) || o(t, l)) return !0;
            if (t.route.shouldRevalidate) {
              var c;
              let r = t.route.shouldRevalidate({
                currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
                currentParams: (null === (c = n[0]) || void 0 === c ? void 0 : c.params) || {},
                nextUrl: new URL(e, window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0,
              });
              if ('boolean' === typeof r) return r;
            }
            return !0;
          })
        : [];
  }
  function Xe(e, t) {
    let { includeHydrateFallback: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (
      (r = e
        .map((e) => {
          let r = t.routes[e.route.id];
          if (!r) return [];
          let a = [r.module];
          return (
            r.clientActionModule && (a = a.concat(r.clientActionModule)),
            r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
            n && r.hydrateFallbackModule && (a = a.concat(r.hydrateFallbackModule)),
            r.imports && (a = a.concat(r.imports)),
            a
          );
        })
        .flat(1)),
      [...new Set(r)]
    );
    var r;
  }
  function Ke(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, a) => {
      if (t && !Ye(a) && 'script' === a.as && a.href && r.has(a.href)) return e;
      let l = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(a),
      );
      return (n.has(l) || (n.add(l), e.push({ key: l, link: a })), e);
    }, []);
  }
  function Je(e, t) {
    return 'lazy' === e.mode && !0 === t;
  }
  function Ze() {
    let e = r.useContext(te);
    return (Ue(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e);
  }
  function et() {
    let e = r.useContext(ne);
    return (Ue(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'), e);
  }
  var tt = r.createContext(void 0);
  function nt() {
    let e = r.useContext(tt);
    return (Ue(e, 'You must render this element inside a <HydratedRouter> element'), e);
  }
  function rt(e, t) {
    return (n) => {
      (e && e(n), n.defaultPrevented || t(n));
    };
  }
  function at(e, t, n) {
    if (n && !st) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  tt.displayName = 'FrameworkContext';
  function lt(e) {
    let { page: t } = e,
      n = l(e, f),
      { router: a } = Ze(),
      i = r.useMemo(() => j(a.routes, t, a.basename), [a.routes, t, a.basename]);
    return i ? r.createElement(ot, u({ page: t, matches: i }, n)) : null;
  }
  function it(e) {
    let { manifest: t, routeModules: n } = nt(),
      [a, l] = r.useState([]);
    return (
      r.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return Ke(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await Ge(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  }),
                )
              )
                .flat(1)
                .filter($e)
                .filter((e) => 'stylesheet' === e.rel || 'preload' === e.rel)
                .map((e) => ('stylesheet' === e.rel ? u(u({}, e), {}, { rel: 'prefetch', as: 'style' }) : u(u({}, e), {}, { rel: 'prefetch' }))),
            );
          })(e, t, n).then((e) => {
            r || l(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      a
    );
  }
  function ot(e) {
    let { page: t, matches: n } = e,
      a = l(e, p),
      i = fe(),
      { manifest: o, routeModules: s } = nt(),
      { basename: c } = Ze(),
      { loaderData: d, matches: f } = et(),
      h = r.useMemo(() => Qe(t, n, f, o, i, 'data'), [t, n, f, o, i]),
      m = r.useMemo(() => Qe(t, n, f, o, i, 'assets'), [t, n, f, o, i]),
      g = r.useMemo(() => {
        if (t === i.pathname + i.search + i.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            var n;
            let a = o.routes[t.route.id];
            a &&
              a.hasLoader &&
              ((!h.some((e) => e.route.id === t.route.id) && t.route.id in d && null !== (n = s[t.route.id]) && void 0 !== n && n.shouldRevalidate) || a.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let a = qe(t, c, 'data');
        return (
          r &&
            e.size > 0 &&
            a.searchParams.set(
              '_routes',
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(','),
            ),
          [a.pathname + a.search]
        );
      }, [c, d, i, o, h, n, t, s]),
      v = r.useMemo(() => Xe(m, o), [m, o]),
      y = it(m);
    return r.createElement(
      r.Fragment,
      null,
      g.map((e) => r.createElement('link', u({ key: e, rel: 'prefetch', as: 'fetch', href: e }, a))),
      v.map((e) => r.createElement('link', u({ key: e, rel: 'modulepreload', href: e }, a))),
      y.map((e) => {
        let { key: t, link: n } = e;
        return r.createElement('link', u({ key: t, nonce: a.nonce }, n));
      }),
    );
  }
  var st = !1;
  function ct(e) {
    let { manifest: t, serverHandoffString: n, isSpaMode: a, renderMeta: i, routeDiscovery: o, ssr: s } = nt(),
      { router: c, static: f, staticContext: p } = Ze(),
      { matches: h } = et(),
      m = r.useContext(re),
      g = Je(o, s);
    i && (i.didRenderScripts = !0);
    let v = at(h, null, a);
    r.useEffect(() => {
      st = !0;
    }, []);
    let y = r.useMemo(() => {
        var a;
        if (m) return null;
        let i = p
            ? 'window.__reactRouterContext = '
                .concat(n, ';')
                .concat(
                  'window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());',
                )
            : ' ',
          o = f
            ? ''
                .concat(null !== (a = t.hmr) && void 0 !== a && a.runtime ? 'import '.concat(JSON.stringify(t.hmr.runtime), ';') : '')
                .concat(g ? '' : 'import '.concat(JSON.stringify(t.url)), ';\n')
                .concat(
                  v
                    .map((e, n) => {
                      let r = 'route'.concat(n),
                        a = t.routes[e.route.id];
                      Ue(a, 'Route '.concat(e.route.id, ' not found in manifest'));
                      let { clientActionModule: l, clientLoaderModule: i, clientMiddlewareModule: o, hydrateFallbackModule: s, module: c } = a,
                        u = [
                          ...(l ? [{ module: l, varName: ''.concat(r, '_clientAction') }] : []),
                          ...(i ? [{ module: i, varName: ''.concat(r, '_clientLoader') }] : []),
                          ...(o ? [{ module: o, varName: ''.concat(r, '_clientMiddleware') }] : []),
                          ...(s ? [{ module: s, varName: ''.concat(r, '_HydrateFallback') }] : []),
                          { module: c, varName: ''.concat(r, '_main') },
                        ];
                      return 1 === u.length
                        ? 'import * as '.concat(r, ' from ').concat(JSON.stringify(c), ';')
                        : [
                            u.map((e) => 'import * as '.concat(e.varName, ' from "').concat(e.module, '";')).join('\n'),
                            'const '.concat(r, ' = {').concat(u.map((e) => '...'.concat(e.varName)).join(','), '};'),
                          ].join('\n');
                    })
                    .join('\n'),
                  '\n  ',
                )
                .concat(
                  g
                    ? 'window.__reactRouterManifest = '.concat(
                        JSON.stringify(
                          (function (e, t) {
                            let { sri: n } = e,
                              r = l(e, d),
                              a = new Set(t.state.matches.map((e) => e.route.id)),
                              i = t.state.location.pathname.split('/').filter(Boolean),
                              o = ['/'];
                            for (i.pop(); i.length > 0; ) (o.push('/'.concat(i.join('/'))), i.pop());
                            o.forEach((e) => {
                              let n = j(t.routes, e, t.basename);
                              n && n.forEach((e) => a.add(e.route.id));
                            });
                            let s = [...a].reduce((e, t) => Object.assign(e, { [t]: r.routes[t] }), {});
                            return u(u({}, r), {}, { routes: s, sri: !!n || void 0 });
                          })(t, c),
                          null,
                          2,
                        ),
                        ';',
                      )
                    : '',
                  '\n  window.__reactRouterRouteModules = {',
                )
                .concat(v.map((e, t) => ''.concat(JSON.stringify(e.route.id), ':route').concat(t)).join(','), '};\n\nimport(')
                .concat(JSON.stringify(t.entry.module), ');')
            : ' ';
        return r.createElement(
          r.Fragment,
          null,
          r.createElement('script', u(u({}, e), {}, { suppressHydrationWarning: !0, dangerouslySetInnerHTML: Ve(i), type: void 0 })),
          r.createElement('script', u(u({}, e), {}, { suppressHydrationWarning: !0, dangerouslySetInnerHTML: Ve(o), type: 'module', async: !0 })),
        );
      }, []),
      b = st || m ? [] : ((x = t.entry.imports.concat(Xe(v, t, { includeHydrateFallback: !0 }))), [...new Set(x)]);
    var x;
    let w = 'object' === typeof t.sri ? t.sri : {};
    return (
      Me(!m, 'The <Scripts /> element is a no-op when using RSC and can be safely removed.'),
      st || m
        ? null
        : r.createElement(
            r.Fragment,
            null,
            'object' === typeof t.sri
              ? r.createElement('script', { 'rr-importmap': '', type: 'importmap', suppressHydrationWarning: !0, dangerouslySetInnerHTML: { __html: JSON.stringify({ integrity: w }) } })
              : null,
            g ? null : r.createElement('link', { rel: 'modulepreload', href: t.url, crossOrigin: e.crossOrigin, integrity: w[t.url], suppressHydrationWarning: !0 }),
            r.createElement('link', { rel: 'modulepreload', href: t.entry.module, crossOrigin: e.crossOrigin, integrity: w[t.entry.module], suppressHydrationWarning: !0 }),
            b.map((t) => r.createElement('link', { key: t, rel: 'modulepreload', href: t, crossOrigin: e.crossOrigin, integrity: w[t], suppressHydrationWarning: !0 })),
            y,
          )
    );
  }
  function ut() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        'function' === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  r.Component;
  function dt(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let a,
      l = r.createElement('script', {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      ',
        },
      });
    if (J(t)) return r.createElement(ft, { title: 'Unhandled Thrown Response!' }, r.createElement('h1', { style: { fontSize: '24px' } }, t.status, ' ', t.statusText), l);
    if (t instanceof Error) a = t;
    else {
      let e = null == t ? 'Unknown Error' : 'object' === typeof t && 'toString' in t ? t.toString() : JSON.stringify(t);
      a = new Error(e);
    }
    return r.createElement(
      ft,
      { title: 'Application Error!', isOutsideRemixApp: n },
      r.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
      r.createElement('pre', { style: { padding: '2rem', background: 'hsla(10, 50%, 50%, 0.1)', color: 'red', overflow: 'auto' } }, a.stack),
      l,
    );
  }
  function ft(e) {
    var t;
    let { title: n, renderScripts: a, isOutsideRemixApp: l, children: i } = e,
      { routeModules: o } = nt();
    return null !== (t = o.root) && void 0 !== t && t.Layout && !l
      ? i
      : r.createElement(
          'html',
          { lang: 'en' },
          r.createElement(
            'head',
            null,
            r.createElement('meta', { charSet: 'utf-8' }),
            r.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,viewport-fit=cover' }),
            r.createElement('title', null, n),
          ),
          r.createElement('body', null, r.createElement('main', { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } }, i, a ? r.createElement(ct, null) : null)),
        );
  }
  var pt = 'undefined' !== typeof window && 'undefined' !== typeof window.document && 'undefined' !== typeof window.document.createElement;
  try {
    pt && (window.__reactRouterVersion = '7.8.2');
  } catch (Pa) {}
  function ht(e) {
    let { basename: t, children: n, window: a } = e,
      l = r.useRef();
    null == l.current && (l.current = y({ window: a, v5Compat: !0 }));
    let i = l.current,
      [o, s] = r.useState({ action: i.action, location: i.location }),
      c = r.useCallback(
        (e) => {
          r.startTransition(() => s(e));
        },
        [s],
      );
    return (r.useLayoutEffect(() => i.listen(c), [i, c]), r.createElement(_e, { basename: t, children: n, location: o.location, navigationType: o.action, navigator: i }));
  }
  var mt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    gt = r.forwardRef(function (e, t) {
      let n,
        { onClick: a, discover: i = 'render', prefetch: o = 'none', relative: s, reloadDocument: c, replace: d, state: f, target: p, to: m, preventScrollReset: g, viewTransition: v } = e,
        y = l(e, h),
        { basename: w } = r.useContext(oe),
        k = 'string' === typeof m && mt.test(m),
        E = !1;
      if ('string' === typeof m && k && ((n = m), pt))
        try {
          let e = new URL(window.location.href),
            t = m.startsWith('//') ? new URL(e.protocol + m) : new URL(m),
            n = V(t.pathname, w);
          t.origin === e.origin && null != n ? (m = n + t.search + t.hash) : (E = !0);
        } catch (Pa) {
          x(!1, '<Link to="'.concat(m, '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'));
        }
      let N = (function (e) {
          let { relative: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          b(de(), 'useHref() may be used only in the context of a <Router> component.');
          let { basename: n, navigator: a } = r.useContext(oe),
            { hash: l, pathname: i, search: o } = ge(e, { relative: t }),
            s = i;
          return ('/' !== n && (s = '/' === i ? n : $([n, i])), a.createHref({ pathname: s, search: o, hash: l }));
        })(m, { relative: s }),
        [C, j, T] = (function (e, t) {
          let n = r.useContext(tt),
            [a, l] = r.useState(!1),
            [i, o] = r.useState(!1),
            { onFocus: s, onBlur: c, onMouseEnter: u, onMouseLeave: d, onTouchStart: f } = t,
            p = r.useRef(null);
          (r.useEffect(() => {
            if (('render' === e && o(!0), 'viewport' === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    o(e.isIntersecting);
                  });
                },
                { threshold: 0.5 },
              );
              return (
                p.current && e.observe(p.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            r.useEffect(() => {
              if (a) {
                let e = setTimeout(() => {
                  o(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [a]));
          let h = () => {
              l(!0);
            },
            m = () => {
              (l(!1), o(!1));
            };
          return n ? ('intent' !== e ? [i, p, {}] : [i, p, { onFocus: rt(s, h), onBlur: rt(c, m), onMouseEnter: rt(u, h), onMouseLeave: rt(d, m), onTouchStart: rt(f, h) }]) : [!1, p, {}];
        })(o, y),
        P = (function (e) {
          let { target: t, replace: n, state: a, preventScrollReset: l, relative: i, viewTransition: o } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = me(),
            c = fe(),
            u = ge(e, { relative: i });
          return r.useCallback(
            (r) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || '_self' === t) &&
                    !(function (e) {
                      return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                    })(e)
                  );
                })(r, t)
              ) {
                r.preventDefault();
                let t = void 0 !== n ? n : S(c) === S(u);
                s(e, { replace: t, state: a, preventScrollReset: l, relative: i, viewTransition: o });
              }
            },
            [c, s, u, n, a, t, e, l, i, o],
          );
        })(m, { replace: d, state: f, target: p, preventScrollReset: g, relative: s, viewTransition: v });
      let L = r.createElement(
        'a',
        u(
          u(u({}, y), T),
          {},
          {
            href: n || N,
            onClick:
              E || c
                ? a
                : function (e) {
                    (a && a(e), e.defaultPrevented || P(e));
                  },
            ref: ut(t, j),
            target: p,
            'data-discover': k || 'render' !== i ? void 0 : 'true',
          },
        ),
      );
      return C && !k ? r.createElement(r.Fragment, null, L, r.createElement(lt, { page: N })) : L;
    });
  ((gt.displayName = 'Link'),
    (r.forwardRef(function (e, t) {
      let { 'aria-current': n = 'page', caseSensitive: a = !1, className: i = '', end: o = !1, style: s, to: c, viewTransition: d, children: f } = e,
        p = l(e, m),
        h = ge(c, { relative: p.relative }),
        g = fe(),
        v = r.useContext(ne),
        { navigator: y, basename: x } = r.useContext(oe),
        w =
          null != v &&
          (function (e) {
            let { relative: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = r.useContext(ae);
            b(null != n, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
            let { basename: a } = bt('useViewTransitionState'),
              l = ge(e, { relative: t });
            if (!n.isTransitioning) return !1;
            let i = V(n.currentLocation.pathname, a) || n.currentLocation.pathname,
              o = V(n.nextLocation.pathname, a) || n.nextLocation.pathname;
            return null != W(l.pathname, o) || null != W(l.pathname, i);
          })(h) &&
          !0 === d,
        k = y.encodeLocation ? y.encodeLocation(h).pathname : h.pathname,
        S = g.pathname,
        E = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
      (a || ((S = S.toLowerCase()), (E = E ? E.toLowerCase() : null), (k = k.toLowerCase())), E && x && (E = V(E, x) || E));
      const N = '/' !== k && k.endsWith('/') ? k.length - 1 : k.length;
      let C,
        j = S === k || (!o && S.startsWith(k) && '/' === S.charAt(N)),
        T = null != E && (E === k || (!o && E.startsWith(k) && '/' === E.charAt(k.length))),
        P = { isActive: j, isPending: T, isTransitioning: w },
        L = j ? n : void 0;
      C = 'function' === typeof i ? i(P) : [i, j ? 'active' : null, T ? 'pending' : null, w ? 'transitioning' : null].filter(Boolean).join(' ');
      let M = 'function' === typeof s ? s(P) : s;
      return r.createElement(gt, u(u({}, p), {}, { 'aria-current': L, className: C, ref: t, style: M, to: c, viewTransition: d }), 'function' === typeof f ? f(P) : f);
    }).displayName = 'NavLink'));
  var vt = r.forwardRef((e, t) => {
    let {
        discover: n = 'render',
        fetcherKey: a,
        navigate: i,
        reloadDocument: o,
        replace: s,
        state: c,
        method: d = Re,
        action: f,
        onSubmit: p,
        relative: h,
        preventScrollReset: m,
        viewTransition: v,
      } = e,
      y = l(e, g),
      x = kt(),
      w = (function (e) {
        let { relative: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = r.useContext(oe),
          a = r.useContext(ce);
        b(a, 'useFormAction must be used inside a RouteContext');
        let [l] = a.matches.slice(-1),
          i = u({}, ge(e || '.', { relative: t })),
          o = fe();
        if (null == e) {
          i.search = o.search;
          let e = new URLSearchParams(i.search),
            t = e.getAll('index');
          if (t.some((e) => '' === e)) {
            (e.delete('index'), t.filter((e) => e).forEach((t) => e.append('index', t)));
            let n = e.toString();
            i.search = n ? '?'.concat(n) : '';
          }
        }
        (e && '.' !== e) || !l.route.index || (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index');
        '/' !== n && (i.pathname = '/' === i.pathname ? n : $([n, i.pathname]));
        return S(i);
      })(f, { relative: h }),
      k = 'get' === d.toLowerCase() ? 'get' : 'post',
      E = 'string' === typeof f && mt.test(f);
    return r.createElement(
      'form',
      u(
        u(
          {
            ref: t,
            method: k,
            action: w,
            onSubmit: o
              ? p
              : (e) => {
                  if ((p && p(e), e.defaultPrevented)) return;
                  e.preventDefault();
                  let t = e.nativeEvent.submitter,
                    n = (null === t || void 0 === t ? void 0 : t.getAttribute('formmethod')) || d;
                  x(t || e.currentTarget, { fetcherKey: a, method: n, navigate: i, replace: s, state: c, relative: h, preventScrollReset: m, viewTransition: v });
                },
          },
          y,
        ),
        {},
        { 'data-discover': E || 'render' !== n ? void 0 : 'true' },
      ),
    );
  });
  function yt(e) {
    return ''.concat(e, ' must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.');
  }
  function bt(e) {
    let t = r.useContext(te);
    return (b(t, yt(e)), t);
  }
  vt.displayName = 'Form';
  var xt = 0,
    wt = () => '__'.concat(String(++xt), '__');
  function kt() {
    let { router: e } = bt('useSubmit'),
      { basename: t } = r.useContext(oe),
      n = Ce('useRouteId');
    return r.useCallback(
      async function (r) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: l, method: i, encType: o, formData: s, body: c } = He(r, t);
        if (!1 === a.navigate) {
          let t = a.fetcherKey || wt();
          await e.fetch(t, n, a.action || l, { preventScrollReset: a.preventScrollReset, formData: s, body: c, formMethod: a.method || i, formEncType: a.encType || o, flushSync: a.flushSync });
        } else
          await e.navigate(a.action || l, {
            preventScrollReset: a.preventScrollReset,
            formData: s,
            body: c,
            formMethod: a.method || i,
            formEncType: a.encType || o,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [e, t, n],
    );
  }
  const St = (e) => {
      const t = ((e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())))(e);
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    Et = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return t
        .filter((e, t, n) => Boolean(e) && '' !== e.trim() && n.indexOf(e) === t)
        .join(' ')
        .trim();
    };
  var Nt = { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const Ct = ['color', 'size', 'strokeWidth', 'absoluteStrokeWidth', 'className', 'children', 'iconNode'],
    jt = (0, r.forwardRef)((e, t) => {
      let { color: n = 'currentColor', size: a = 24, strokeWidth: i = 2, absoluteStrokeWidth: o, className: s = '', children: c, iconNode: d } = e,
        f = l(e, Ct);
      return (0, r.createElement)(
        'svg',
        u(
          u(
            u({ ref: t }, Nt),
            {},
            { width: a, height: a, stroke: n, strokeWidth: o ? (24 * Number(i)) / Number(a) : i, className: Et('lucide', s) },
            !c &&
              !((e) => {
                for (const t in e) if (t.startsWith('aria-') || 'role' === t || 'title' === t) return !0;
              })(f) && { 'aria-hidden': 'true' },
          ),
          f,
        ),
        [
          ...d.map((e) => {
            let [t, n] = e;
            return (0, r.createElement)(t, n);
          }),
          ...(Array.isArray(c) ? c : [c]),
        ],
      );
    }),
    Tt = ['className'],
    Pt = (e, t) => {
      const n = (0, r.forwardRef)((n, a) => {
        let { className: i } = n,
          o = l(n, Tt);
        return (0, r.createElement)(jt, u({ ref: a, iconNode: t, className: Et('lucide-'.concat(((s = St(e)), s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())), 'lucide-'.concat(e), i) }, o));
        var s;
      });
      return ((n.displayName = St(e)), n);
    },
    Lt = Pt('chevron-left', [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]]),
    Mt = Pt('chevron-right', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]]),
    zt =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAaCAYAAAD2dwHCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPaSURBVHgB3ZlrUtpQFMfPvYmUb7U7iCsodqYqbUVYQXUFwviY6Sd1BdUVqJ86Ux/QFdQdgNL6QGdkB8Yd6LeWkHt6TkpCoISCEB7+RmfyvEn+3nPO/x4FhMx1NvH5beZsB/pM6SiBMECEhO3m75AQMqhgmwWEMafVd4QuXtCDxxH+jpvjxLK7LyBk/OGFiEuzq8UT6AONYYs5G+AUBkRUaifTmcKDDgNEKJiEMLDhNL5ezMGAGah4YXNzOL+oBHzs5FpU4l4TWLYsqxz/dGnCE3hW4tkoYkJAupNrqXqCoqylRSKcAkzKXyfVSmW/GyEHUjDGAIMS6CYJeVc6ms9efJkzOrnpeYuHWGj5C2AG3yTSLGIn7uBZhW0zM6vFVLvzP7++i0lNi2kIyyBE0n+ObQmFc9quVFJBoTwyM+82mwynErfh/fp5Ob5SzLHItpRTiPCt6RKDZmE+KIxHRjxL4S7lmzQMiXimYM6unqXZi0JjWAcKqNPUvIMe0LGafLN6fg+9IpQBKNJX2cTrCMgdNqEwBNjEX2STZQ3Vd0CI1Q47AlJ0TPvfi3OeASMEGenN36imaHMRhgTPQhIqZYHK+wWsgOIisuVeR2ErTBgxJOBLGDI8wyaE5IJjusf4D3tx8CHp7usCoYzCm30mV5e2o+q6oUmZd7ap7Ast8gidosMy5bWFludQGN62EDH2W9AjTxnDsu19LiS8zQJSRV6a0PRb97ymCZ59Bd7WbVSnUgg3RAwWJ772oxA0OOUDsuaKfnBrbq24B92AjXagDZPst6Bnuh+DhEr6cxsLeXWQ2KEVyV/fR9/As481ki90Lee/uaZsIFGAB8uuTnct3Pjg5jaPiC75W71C4WrktKRKx/N5/6wIr3XkvEDfqyi975ZTJcnqOIa3D9iWlfGbY5p9297sIyakfOWIR6FoaEpxXLtGlWdXyo39XmgQz8bMzBBaR/2AQ9XL9Qx9i2OSuTRTDvP35ycp9vPDNK2jRq0O1KNGgwVvhcE5rGl5wkk7yxWrRGtACJFSNrHhd/C8VLs+Gr22vUBRqO9Q+6v5gtJhYo8y4ca/d0KZbE2BCu2jkGhC54+s24UWYcvdC16EQ80mRaPRBwtdc4q5mZViBjqERbeUHZ65FpRP67XBbPk/jObk2DeaxLs+mN9EKXah/nJlSv70Up51ApSwN5s52+r0EZc0pvSPGSItGwOza2fbAV2GvqKzTSLBarsPVrWaUVJjoczaMVP9quxDF3D6YSsFbXt2/SGwq+J2GVhENsT/byJ2j7cEElhwqzs/l56Z4ue166W1g8dxxghZwD80duXBtKBBPAAAAABJRU5ErkJggg==',
    _t = n.p + 'static/media/home.ed0d02d86829d5380c3f.png',
    Ot = n.p + 'static/media/Profile.58c3bd14d9fa00ac2d75.png',
    At = n.p + 'static/media/wakiels-list.07aa87b0f7addf6288ca.png',
    Rt = n.p + 'static/media/userprofile.696a4653f66badbd0ae3.png',
    Dt = n.p + 'static/media/chat.4249ddad8f337f3dcd0d.png',
    It = n.p + 'static/media/shedule.1c4d7dbe1709f0beae75.png',
    Ft = n.p + 'static/media/shedule-2.e206ccd0a5e506dd9bb2.png',
    Wt = n.p + 'static/media/emoji.0ada6ea4934b32a95e94.png',
    Bt = (n.p, n.p, { line: 'Download the latest version of ', link: 'https://play.google.com/store/apps', appname: 'Wakiel-App', emoji: Wt });
  var Ht = n(723);
  const Vt = function () {
      return (0, Ht.jsx)('div', {
        className: 'bg-gray-900 text-white py-2 px-4 text-sm font-light tracking-wide',
        children: (0, Ht.jsx)('div', {
          className: 'max-w-7xl mx-auto flex items-center justify-center',
          children: (0, Ht.jsxs)('div', {
            className: 'flex items-center space-x-2',
            children: [
              (0, Ht.jsxs)('div', { className: 'flex items-center text-gray-400', children: [(0, Ht.jsx)(Lt, { className: 'w-3 h-3 -mr-1' }), (0, Ht.jsx)(Lt, { className: 'w-3 h-3' })] }),
              (0, Ht.jsx)('span', { className: 'text-gray-300', children: Bt.line }),
              (0, Ht.jsxs)(gt, {
                to: Bt.link,
                className: 'text-primary-green hover:text-accent-gold transition-colors duration-300 font-medium relative group px-2',
                target: '_blank',
                children: [Bt.appname, (0, Ht.jsx)('span', { className: 'absolute bottom-0 left-2 w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-[calc(100%-1rem)]' })],
              }),
              (0, Ht.jsx)('img', { src: Bt.emoji, alt: Bt.appname, className: 'w-4 h-4' }),
              (0, Ht.jsxs)('div', { className: 'flex items-center text-gray-400', children: [(0, Ht.jsx)(Mt, { className: 'w-3 h-3' }), (0, Ht.jsx)(Mt, { className: 'w-3 h-3 -ml-1' })] }),
            ],
          }),
        }),
      });
    },
    Ut = Pt('download', [
      ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
      ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
      ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
    ]),
    qt = [
      { id: 0, title: 'Home', link: '#hero' },
      { id: 1, title: 'About', link: '#about' },
      { id: 2, title: 'Feature', link: '#features' },
      { id: 3, title: 'Services', link: '#services' },
      { id: 4, title: 'Online Dealings', link: '#online-dealings' },
      { id: 5, title: 'Connect With Us', link: '#connect-with-us' },
    ];
  const Gt = function () {
    const [e, t] = (0, r.useState)(!1),
      [n, a] = (0, r.useState)(!1),
      l = me(),
      i = () => {
        window.pageYOffset >= 200 ? a(!0) : a(!1);
      };
    (0, r.useEffect)(
      () => (
        window.addEventListener('scroll', i),
        () => {
          window.removeEventListener('scroll', i);
        }
      ),
      [],
    );
    const o = ((e) => {
        const t = e.split('/'),
          n = t[t.length - 1];
        return n.startsWith('#') ? '' : n;
      })(window.location.href),
      s = (e) => {
        (t(!1), ('' !== o && '/' !== o) || e.stopPropagation());
      };
    return (0, Ht.jsxs)('nav', {
      className: '\n      sticky top-0 z-40 transition-all duration-300\n      '.concat(
        n ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' : 'backdrop-blur-md shadow-lg border-b border-gray-800/30',
        '\n    ',
      ),
      style: { backgroundColor: n ? void 0 : '#0a130a' },
      children: [
        (0, Ht.jsx)('div', {
          className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: (0, Ht.jsxs)('div', {
            className: 'flex justify-between items-center h-16 lg:h-20',
            children: [
              (0, Ht.jsx)('div', {
                className: 'flex-shrink-0 cursor-pointer group',
                children: (0, Ht.jsx)('img', {
                  src: zt,
                  alt: 'Wakeel App Logo',
                  className: 'h-8 lg:h-10 w-auto transform group-hover:scale-105 transition-transform duration-300',
                  onClick: () => l('/'),
                }),
              }),
              (0, Ht.jsx)('div', {
                className: 'hidden lg:flex items-center space-x-8',
                children: qt.map((e) =>
                  (0, Ht.jsxs)(
                    gt,
                    {
                      to: '/'.concat(e.link),
                      className: '\n                  relative font-medium text-lg transition-all duration-300 group\n                  '.concat(
                        n ? 'text-gray-800 hover:text-primary-green' : 'text-white hover:text-primary-green',
                        '\n                ',
                      ),
                      onClick: (e) => {
                        ('' !== o && '/' !== o) || e.stopPropagation();
                      },
                      children: [e.title, (0, Ht.jsx)('span', { className: 'absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full' })],
                    },
                    e.id,
                  ),
                ),
              }),
              (0, Ht.jsx)('div', {
                className: 'hidden lg:flex',
                children: (0, Ht.jsx)(gt, {
                  to: 'https://play.google.com/store/apps',
                  target: '_blank',
                  children: (0, Ht.jsxs)('button', {
                    className:
                      'bg-gradient-to-r from-accent-gold to-yellow-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:from-yellow-500 hover:to-accent-gold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl',
                    children: [(0, Ht.jsx)(Ut, { className: 'w-5 h-5' }), (0, Ht.jsx)('span', { children: 'Download' })],
                  }),
                }),
              }),
              (0, Ht.jsxs)('button', {
                className: 'lg:hidden relative w-10 h-10 flex flex-col justify-center items-center space-y-1 group',
                onClick: () => t(!e),
                children: [
                  (0, Ht.jsx)('span', {
                    className: '\n              block w-6 h-0.5 transition-all duration-300 transform origin-center\n              '
                      .concat(e ? 'rotate-45 translate-y-1' : 'rotate-0', '\n              ')
                      .concat(n ? 'bg-gray-800' : 'bg-white', '\n            '),
                  }),
                  (0, Ht.jsx)('span', {
                    className: '\n              block w-6 h-0.5 transition-all duration-300\n              '
                      .concat(e ? 'opacity-0' : 'opacity-100', '\n              ')
                      .concat(n ? 'bg-gray-800' : 'bg-white', '\n            '),
                  }),
                  (0, Ht.jsx)('span', {
                    className: '\n              block w-6 h-0.5 transition-all duration-300 transform origin-center\n              '
                      .concat(e ? '-rotate-45 -translate-y-1' : 'rotate-0', '\n              ')
                      .concat(n ? 'bg-gray-800' : 'bg-white', '\n            '),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Ht.jsx)('div', {
          className: '\n        lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-2xl transform transition-all duration-300 overflow-hidden\n        '.concat(
            e ? 'opacity-100 translate-y-0 max-h-screen' : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none',
            '\n      ',
          ),
          children: (0, Ht.jsxs)('div', {
            className: 'max-w-7xl mx-auto px-4 py-6 space-y-4',
            children: [
              qt.map((t, n) =>
                (0, Ht.jsx)(
                  gt,
                  {
                    to: '/'.concat(t.link),
                    className: '\n                block text-xl font-medium text-gray-800 hover:text-primary-green transition-all duration-300 transform\n                '.concat(
                      e ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                      '\n              ',
                    ),
                    style: { transitionDelay: ''.concat(50 * n, 'ms') },
                    onKeyDown: (e) =>
                      ((e, t) => {
                        ('Enter' !== e.key && 'Space' !== e.key) || s(t);
                      })(e, t.link),
                    onClick: s,
                    children: t.title,
                  },
                  t.id,
                ),
              ),
              (0, Ht.jsx)('div', {
                className: 'pt-4',
                children: (0, Ht.jsx)(gt, {
                  to: 'https://play.google.com/store/apps',
                  target: '_blank',
                  children: (0, Ht.jsxs)('button', {
                    className:
                      '\n                  w-full bg-gradient-to-r from-accent-gold to-yellow-500 text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-yellow-500 hover:to-accent-gold transition-all duration-300 shadow-lg transform\n                  '.concat(
                        e ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                        '\n                ',
                      ),
                    style: { transitionDelay: ''.concat(50 * qt.length, 'ms') },
                    onClick: () => t(!1),
                    children: [(0, Ht.jsx)(Ut, { className: 'w-5 h-5' }), (0, Ht.jsx)('span', { children: 'Download App' })],
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
  const Yt = function () {
      return (0, Ht.jsxs)(Ht.Fragment, { children: [(0, Ht.jsx)(Vt, {}), (0, Ht.jsx)(Gt, {})] });
    },
    $t = [
      { id: 1, title: 'Privacy Policy', link: '/privacy-policy' },
      { id: 2, title: 'FAQs', link: '/faqs' },
      { id: 3, title: 'Terms & Conditions', link: '/terms-and-conditions' },
    ];
  const Qt = function () {
    return (0, Ht.jsxs)('footer', {
      className: 'bg-gradient-to-br from-secondary-green to-gray-900 text-white relative overflow-hidden',
      children: [
        (0, Ht.jsxs)('div', {
          className: 'absolute inset-0',
          children: [
            (0, Ht.jsx)('div', { className: 'absolute top-0 left-0 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl' }),
            (0, Ht.jsx)('div', { className: 'absolute bottom-0 right-0 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl' }),
          ],
        }),
        (0, Ht.jsx)('div', {
          className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16',
          children: (0, Ht.jsxs)('div', {
            className: 'grid lg:grid-cols-4 gap-12',
            children: [
              (0, Ht.jsxs)('div', {
                className: 'lg:col-span-2',
                children: [
                  (0, Ht.jsxs)('div', {
                    className: 'flex items-center mb-6',
                    children: [
                      (0, Ht.jsxs)('div', {
                        className: 'relative group',
                        children: [
                          (0, Ht.jsx)('div', { className: 'absolute inset-0 bg-primary-green/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300' }),
                          (0, Ht.jsx)('img', { src: zt, className: 'relative w-16 h-auto transform group-hover:scale-110 transition-transform duration-300', alt: 'Wakeel App Logo' }),
                        ],
                      }),
                      (0, Ht.jsxs)('div', {
                        className: 'ml-4',
                        children: [
                          (0, Ht.jsx)('h3', { className: 'text-2xl font-bold text-primary-green', children: 'Wakeel App' }),
                          (0, Ht.jsx)('p', { className: 'text-accent-gold text-sm', children: 'Your Legal Partner' }),
                        ],
                      }),
                    ],
                  }),
                  (0, Ht.jsx)('p', {
                    className: 'text-gray-300 mb-6 leading-relaxed',
                    children: 'Connecting you with expert legal professionals through innovative technology. Experience seamless legal consultation at your fingertips with our trusted platform.',
                  }),
                  (0, Ht.jsxs)('div', {
                    className: 'grid grid-cols-3 gap-6 mb-8',
                    children: [
                      (0, Ht.jsxs)('div', {
                        className: 'text-center p-4 bg-white/5 rounded-lg border border-white/10',
                        children: [
                          (0, Ht.jsx)('div', { className: 'text-2xl font-bold text-primary-green', children: '500+' }),
                          (0, Ht.jsx)('div', { className: 'text-xs text-gray-400', children: 'Expert Lawyers' }),
                        ],
                      }),
                      (0, Ht.jsxs)('div', {
                        className: 'text-center p-4 bg-white/5 rounded-lg border border-white/10',
                        children: [
                          (0, Ht.jsx)('div', { className: 'text-2xl font-bold text-accent-gold', children: '10k+' }),
                          (0, Ht.jsx)('div', { className: 'text-xs text-gray-400', children: 'Cases Solved' }),
                        ],
                      }),
                      (0, Ht.jsxs)('div', {
                        className: 'text-center p-4 bg-white/5 rounded-lg border border-white/10',
                        children: [
                          (0, Ht.jsx)('div', { className: 'text-2xl font-bold text-primary-green', children: '24/7' }),
                          (0, Ht.jsx)('div', { className: 'text-xs text-gray-400', children: 'Support' }),
                        ],
                      }),
                    ],
                  }),
                  (0, Ht.jsxs)('div', {
                    className: 'flex space-x-4',
                    children: [
                      (0, Ht.jsx)('a', {
                        href: 'https://twitter.com/wakeelapp',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green/20 transition-all duration-300 group',
                        children: (0, Ht.jsx)('svg', {
                          className: 'w-5 h-5 text-gray-400 group-hover:text-primary-green',
                          fill: 'currentColor',
                          viewBox: '0 0 24 24',
                          children: (0, Ht.jsx)('path', {
                            d: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                          }),
                        }),
                      }),
                      (0, Ht.jsx)('a', {
                        href: 'https://facebook.com/wakeelapp',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green/20 transition-all duration-300 group',
                        children: (0, Ht.jsx)('svg', {
                          className: 'w-5 h-5 text-gray-400 group-hover:text-primary-green',
                          fill: 'currentColor',
                          viewBox: '0 0 24 24',
                          children: (0, Ht.jsx)('path', {
                            d: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
                          }),
                        }),
                      }),
                      (0, Ht.jsx)('a', {
                        href: 'https://linkedin.com/company/wakeelapp',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green/20 transition-all duration-300 group',
                        children: (0, Ht.jsx)('svg', {
                          className: 'w-5 h-5 text-gray-400 group-hover:text-primary-green',
                          fill: 'currentColor',
                          viewBox: '0 0 24 24',
                          children: (0, Ht.jsx)('path', {
                            d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                          }),
                        }),
                      }),
                      (0, Ht.jsx)('a', {
                        href: 'https://pinterest.com/wakeelapp',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green/20 transition-all duration-300 group',
                        children: (0, Ht.jsx)('svg', {
                          className: 'w-5 h-5 text-gray-400 group-hover:text-primary-green',
                          fill: 'currentColor',
                          viewBox: '0 0 24 24',
                          children: (0, Ht.jsx)('path', {
                            d: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Ht.jsxs)('div', {
                children: [
                  (0, Ht.jsx)('h4', { className: 'text-lg font-semibold text-accent-gold mb-6', children: 'Quick Links' }),
                  (0, Ht.jsx)('ul', {
                    className: 'space-y-3',
                    children: $t
                      .slice(0, 6)
                      .map((e) =>
                        (0, Ht.jsx)(
                          'li',
                          {
                            children: (0, Ht.jsxs)(gt, {
                              to: ''.concat(e.link),
                              className: 'text-gray-300 hover:text-primary-green flex items-center transition-all duration-300 group',
                              children: [(0, Ht.jsx)('span', { className: 'w-2 h-2 bg-primary-green/30 rounded-full mr-3 group-hover:bg-primary-green transition-all duration-300' }), e.title],
                            }),
                          },
                          e.id,
                        ),
                      ),
                  }),
                ],
              }),
              (0, Ht.jsxs)('div', {
                children: [
                  (0, Ht.jsx)('h4', { className: 'text-lg font-semibold text-accent-gold mb-6', children: 'Get In Touch' }),
                  (0, Ht.jsxs)('ul', {
                    className: 'space-y-4',
                    children: [
                      (0, Ht.jsxs)('li', {
                        className: 'flex items-center text-gray-300',
                        children: [
                          (0, Ht.jsx)('div', {
                            className: 'w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center mr-3',
                            children: (0, Ht.jsx)('svg', {
                              className: 'w-5 h-5 text-primary-green',
                              fill: 'none',
                              stroke: 'currentColor',
                              viewBox: '0 0 24 24',
                              children: (0, Ht.jsx)('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: '2',
                                d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                              }),
                            }),
                          }),
                          (0, Ht.jsxs)('div', {
                            children: [
                              (0, Ht.jsx)('div', { className: 'font-medium', children: '+1 (555) 123-4567' }),
                              (0, Ht.jsx)('div', { className: 'text-sm text-gray-400', children: '24/7 Support' }),
                            ],
                          }),
                        ],
                      }),
                      (0, Ht.jsxs)('li', {
                        className: 'flex items-center text-gray-300',
                        children: [
                          (0, Ht.jsx)('div', {
                            className: 'w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center mr-3',
                            children: (0, Ht.jsx)('svg', {
                              className: 'w-5 h-5 text-primary-green',
                              fill: 'none',
                              stroke: 'currentColor',
                              viewBox: '0 0 24 24',
                              children: (0, Ht.jsx)('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: '2',
                                d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                              }),
                            }),
                          }),
                          (0, Ht.jsxs)('div', {
                            children: [
                              (0, Ht.jsx)('div', { className: 'font-medium', children: 'info@wakeelapp.com' }),
                              (0, Ht.jsx)('div', { className: 'text-sm text-gray-400', children: 'General Inquiries' }),
                            ],
                          }),
                        ],
                      }),
                      (0, Ht.jsxs)('li', {
                        className: 'flex items-center text-gray-300',
                        children: [
                          (0, Ht.jsx)('div', {
                            className: 'w-10 h-10 bg-primary-green/20 rounded-lg flex items-center justify-center mr-3',
                            children: (0, Ht.jsxs)('svg', {
                              className: 'w-5 h-5 text-primary-green',
                              fill: 'none',
                              stroke: 'currentColor',
                              viewBox: '0 0 24 24',
                              children: [
                                (0, Ht.jsx)('path', {
                                  strokeLinecap: 'round',
                                  strokeLinejoin: 'round',
                                  strokeWidth: '2',
                                  d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
                                }),
                                (0, Ht.jsx)('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' }),
                              ],
                            }),
                          }),
                          (0, Ht.jsxs)('div', {
                            children: [(0, Ht.jsx)('div', { className: 'font-medium', children: 'New York, NY' }), (0, Ht.jsx)('div', { className: 'text-sm text-gray-400', children: 'Main Office' })],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Ht.jsxs)('div', {
                    className: 'mt-8 p-4 bg-white/5 rounded-lg border border-white/10',
                    children: [
                      (0, Ht.jsx)('h5', { className: 'text-primary-green font-semibold mb-3', children: 'Stay Updated' }),
                      (0, Ht.jsx)('p', { className: 'text-sm text-gray-400 mb-3', children: 'Get legal tips and updates' }),
                      (0, Ht.jsxs)('div', {
                        className: 'flex gap-2',
                        children: [
                          (0, Ht.jsx)('input', {
                            type: 'email',
                            placeholder: 'Your email',
                            className: 'flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary-green',
                          }),
                          (0, Ht.jsx)('button', {
                            className: 'px-4 py-2 bg-primary-green text-white rounded text-sm font-medium hover:bg-green-600 transition-colors duration-300',
                            children: 'Subscribe',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Ht.jsx)('div', {
          className: 'relative z-10 border-t border-white/10 bg-black/20',
          children: (0, Ht.jsx)('div', {
            className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6',
            children: (0, Ht.jsxs)('div', {
              className: 'flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0',
              children: [
                (0, Ht.jsx)('div', {
                  className: 'text-center lg:text-left text-gray-400',
                  children: (0, Ht.jsxs)('p', {
                    className: 'text-sm',
                    children: [
                      'Copyright \xa9 2024',
                      ' ',
                      (0, Ht.jsx)(gt, { to: '/', className: 'text-primary-green hover:text-accent-gold transition-colors duration-300 font-medium', children: 'Wakeel App' }),
                      ' ',
                      '| All rights reserved',
                    ],
                  }),
                }),
                (0, Ht.jsxs)('div', {
                  className: 'flex flex-wrap justify-center lg:justify-end gap-6 text-sm',
                  children: [
                    (0, Ht.jsx)(gt, { to: '/privacy', className: 'text-gray-400 hover:text-primary-green transition-colors duration-300', children: 'Privacy Policy' }),
                    (0, Ht.jsx)(gt, { to: '/terms', className: 'text-gray-400 hover:text-primary-green transition-colors duration-300', children: 'Terms of Service' }),
                    (0, Ht.jsx)(gt, { to: '/cookies', className: 'text-gray-400 hover:text-primary-green transition-colors duration-300', children: 'Cookie Policy' }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  };
  const Xt = function (e) {
    let { isLoading: t } = e;
    const [n, a] = (0, r.useState)(0);
    return (
      (0, r.useEffect)(() => {
        let e;
        return (
          t
            ? (e = setInterval(() => {
                a((e) => (e < 100 ? e + 1 : e));
              }, 30))
            : (setTimeout(() => {
                a(100);
              }, 500),
              setTimeout(() => {
                clearInterval(e);
              }, 1e3)),
          () => clearInterval(e)
        );
      }, [t]),
      t
        ? (0, Ht.jsxs)('div', {
            className: 'fixed inset-0 z-[9999] bg-gradient-to-br from-secondary-green via-gray-900 to-dark-bg flex items-center justify-center',
            children: [
              (0, Ht.jsxs)('div', {
                className: 'absolute inset-0 overflow-hidden',
                children: [
                  (0, Ht.jsx)('div', { className: 'absolute top-1/4 left-1/4 w-32 h-32 bg-primary-green/20 rounded-full blur-3xl animate-pulse' }),
                  (0, Ht.jsx)('div', { className: 'absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-gold/20 rounded-full blur-2xl animate-pulse delay-1000' }),
                  (0, Ht.jsx)('div', { className: 'absolute top-3/4 left-1/2 w-16 h-16 bg-primary-green/30 rounded-full blur-xl animate-bounce' }),
                ],
              }),
              (0, Ht.jsxs)('div', {
                className: 'relative z-10 flex flex-col items-center space-y-8',
                children: [
                  (0, Ht.jsxs)('div', {
                    className: 'relative',
                    children: [
                      (0, Ht.jsx)('div', { className: 'absolute inset-0 bg-primary-green/30 rounded-full blur-2xl animate-pulse' }),
                      (0, Ht.jsx)('div', {
                        className: 'relative w-32 h-12 bg-cover bg-center bg-no-repeat transition-all duration-300 transform hover:scale-105',
                        style: { backgroundImage: 'linear-gradient(to top, transparent '.concat(n, '%, rgba(255,255,255,0.9) ').concat(n, '%), url(').concat(zt, ')') },
                      }),
                    ],
                  }),
                  (0, Ht.jsxs)('div', {
                    className: 'text-center space-y-4',
                    children: [
                      (0, Ht.jsx)('h2', { className: 'text-2xl font-semibold text-white', children: 'Loading Wakeel App' }),
                      (0, Ht.jsx)('div', {
                        className: 'w-64 h-2 bg-white/20 rounded-full overflow-hidden',
                        children: (0, Ht.jsx)('div', {
                          className: 'h-full bg-gradient-to-r from-primary-green to-accent-gold transition-all duration-300 ease-out',
                          style: { width: ''.concat(n, '%') },
                        }),
                      }),
                      (0, Ht.jsxs)('p', { className: 'text-lg font-light text-gray-300', children: [n, '%'] }),
                    ],
                  }),
                  (0, Ht.jsxs)('div', {
                    className: 'flex space-x-2',
                    children: [
                      (0, Ht.jsx)('div', { className: 'w-3 h-3 bg-primary-green rounded-full animate-bounce' }),
                      (0, Ht.jsx)('div', { className: 'w-3 h-3 bg-primary-green rounded-full animate-bounce delay-100' }),
                      (0, Ht.jsx)('div', { className: 'w-3 h-3 bg-primary-green rounded-full animate-bounce delay-200' }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : null
    );
  };
  const Kt = function () {
      return (0, Ht.jsxs)('div', {
        id: 'hero',
        className: 'relative min-h-screen bg-gradient-to-br from-dark-bg via-secondary-green to-gray-900 overflow-hidden',
        children: [
          (0, Ht.jsxs)('div', {
            className: 'absolute inset-0',
            children: [
              (0, Ht.jsx)('div', { className: 'absolute top-1/4 left-0 w-40 h-40 bg-primary-green/30 rounded-full blur-3xl animate-pulse' }),
              (0, Ht.jsx)('div', { className: 'absolute bottom-0 right-0 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl animate-pulse delay-1000' }),
              (0, Ht.jsx)('div', { className: 'absolute top-1/2 right-1/4 w-24 h-24 bg-primary-green/20 rounded-full blur-2xl animate-bounce' }),
            ],
          }),
          (0, Ht.jsx)('div', {
            className: 'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24',
            children: (0, Ht.jsxs)('div', {
              className: 'grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen',
              children: [
                (0, Ht.jsxs)('div', {
                  className: 'flex flex-col justify-center space-y-8 text-center lg:text-left',
                  children: [
                    (0, Ht.jsxs)('div', {
                      children: [
                        (0, Ht.jsxs)('h1', {
                          className: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight',
                          children: [
                            (0, Ht.jsx)('span', { className: 'block', children: 'Hire Your' }),
                            (0, Ht.jsx)('span', { className: 'block text-primary-green', children: 'Legal Expert' }),
                            (0, Ht.jsx)('span', { className: 'block', children: 'Online Now!' }),
                          ],
                        }),
                        (0, Ht.jsx)('div', { className: 'mt-6 w-24 h-1 bg-accent-gold rounded-full mx-auto lg:mx-0' }),
                      ],
                    }),
                    (0, Ht.jsx)('p', {
                      className: 'text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0',
                      children:
                        'Access top-notch legal expertise from home. Our platform connects you with skilled attorneys across all practice areas. Browse profiles, read reviews, and schedule consultations seamlessly.',
                    }),
                    (0, Ht.jsxs)('div', {
                      className: 'flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4',
                      children: [
                        (0, Ht.jsx)('button', {
                          className:
                            'bg-gradient-to-r from-primary-green to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-500 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl',
                          children: 'Get Started',
                        }),
                        (0, Ht.jsx)('button', {
                          className:
                            'border-2 border-accent-gold text-accent-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-gold hover:text-white transform hover:scale-105 transition-all duration-300',
                          children: 'Learn More',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Ht.jsx)('div', {
                  className: 'flex justify-center lg:justify-end',
                  children: (0, Ht.jsxs)('div', {
                    className: 'relative group',
                    children: [
                      (0, Ht.jsx)('div', {
                        className: 'absolute inset-0 bg-gradient-to-br from-primary-green/30 to-accent-gold/30 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700',
                      }),
                      (0, Ht.jsxs)('div', {
                        className: 'relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]',
                        children: [
                          (0, Ht.jsx)('div', { className: 'absolute inset-0 border-2 border-primary-green/30 rounded-full animate-spin slow' }),
                          (0, Ht.jsx)('div', { className: 'absolute inset-4 border border-accent-gold/30 rounded-full animate-spin reverse slow' }),
                          (0, Ht.jsx)('div', {
                            className: 'absolute inset-0 flex items-center justify-center',
                            children: (0, Ht.jsx)('img', {
                              src: _t,
                              alt: 'Legal Professional',
                              className: 'h-80 lg:h-96 xl:h-[28rem] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-500',
                            }),
                          }),
                        ],
                      }),
                      (0, Ht.jsx)('div', { className: 'absolute -top-8 -right-8 w-16 h-16 bg-primary-green/20 rounded-full animate-float' }),
                      (0, Ht.jsx)('div', { className: 'absolute -bottom-8 -left-8 w-12 h-12 bg-accent-gold/20 rounded-full animate-float delay-1000' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    },
    Jt = Pt('target', [
      ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
      ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
      ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
    ]),
    Zt = Pt('users', [
      ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
      ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744', key: '16gr8j' }],
      ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
      ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
    ]),
    en = Pt('scale', [
      ['path', { d: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', key: '7g6ntu' }],
      ['path', { d: 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z', key: 'ijws7r' }],
      ['path', { d: 'M7 21h10', key: '1b0cd5' }],
      ['path', { d: 'M12 3v18', key: '108xh3' }],
      ['path', { d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2', key: '3gwbw2' }],
    ]),
    tn = Pt('shield', [
      [
        'path',
        { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', key: 'oel41y' },
      ],
    ]),
    nn = Pt('circle-check-big', [
      ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
      ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
    ]),
    rn = Pt('star', [
      [
        'path',
        {
          d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z',
          key: 'r04s7s',
        },
      ],
    ]);
  function an() {
    const e = [
      {
        icon: (0, Ht.jsx)(Jt, { className: 'w-8 h-8 text-accent-gold' }),
        title: 'Our Mission',
        description:
          'Empowering Your Legal Journey - At our app, our mission is simple - to empower individuals with reliable legal advice and support. We believe in demystifying the complexities of the law, making it accessible to everyone, anytime, and anywhere.',
      },
      {
        icon: (0, Ht.jsx)(Zt, { className: 'w-8 h-8 text-accent-gold' }),
        title: 'Our Team',
        description:
          'Experts You Can Trust - Meet the dedicated team of skilled attorneys behind our app. With a passion for justice and a commitment to excellence, our experts are here to guide you through your legal challenges and ensure your rights are protected.',
      },
    ];
    return (0, Ht.jsx)('div', {
      className: 'space-y-8 lg:space-y-12',
      children: e.map((e, t) =>
        (0, Ht.jsxs)(
          'div',
          {
            className: 'group',
            children: [
              (0, Ht.jsxs)('div', {
                className: 'flex items-start space-x-4 mb-4',
                children: [
                  (0, Ht.jsx)('div', {
                    className:
                      'flex-shrink-0 p-3 bg-gradient-to-br from-accent-gold/10 to-yellow-500/10 rounded-xl group-hover:from-accent-gold/20 group-hover:to-yellow-500/20 transition-all duration-300',
                    children: e.icon,
                  }),
                  (0, Ht.jsx)('h3', { className: 'text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-primary-green transition-colors duration-300', children: e.title }),
                ],
              }),
              (0, Ht.jsx)('p', { className: 'text-gray-600 leading-relaxed text-lg pl-16', children: e.description }),
            ],
          },
          t,
        ),
      ),
    });
  }
  const ln = function () {
    return (0, Ht.jsx)(Ht.Fragment, {
      children: (0, Ht.jsxs)('section', {
        id: 'about',
        className: 'relative py-16 lg:py-24 overflow-hidden',
        children: [
          (0, Ht.jsx)('div', { className: 'absolute inset-0 bg-gradient-to-br from-gray-50 to-white' }),
          (0, Ht.jsx)('div', { className: 'absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary-green/5 to-transparent' }),
          (0, Ht.jsx)('div', { className: 'absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-accent-gold/5 to-transparent' }),
          (0, Ht.jsxs)('div', {
            className: 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
            children: [
              (0, Ht.jsxs)('div', {
                className: 'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
                children: [
                  (0, Ht.jsxs)('div', {
                    className: 'space-y-8',
                    children: [
                      (0, Ht.jsxs)('div', {
                        className: 'space-y-4',
                        children: [
                          (0, Ht.jsxs)('div', {
                            className:
                              'inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-gold/10 to-yellow-500/10 rounded-full text-accent-gold font-semibold text-sm tracking-wide uppercase',
                            children: [(0, Ht.jsx)(en, { className: 'w-4 h-4 mr-2' }), 'Legal Excellence'],
                          }),
                          (0, Ht.jsxs)('h1', {
                            className: 'text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight',
                            children: ['About', (0, Ht.jsx)('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600', children: ' Wakeel ' }), 'App'],
                          }),
                        ],
                      }),
                      (0, Ht.jsx)('div', {
                        className: 'space-y-6',
                        children: (0, Ht.jsxs)('div', {
                          className: 'flex items-start space-x-4',
                          children: [
                            (0, Ht.jsx)('div', {
                              className: 'flex-shrink-0 p-3 bg-gradient-to-br from-primary-green/10 to-emerald-600/10 rounded-xl',
                              children: (0, Ht.jsx)(tn, { className: 'w-8 h-8 text-primary-green' }),
                            }),
                            (0, Ht.jsxs)('div', {
                              children: [
                                (0, Ht.jsx)('h3', { className: 'text-2xl lg:text-3xl font-bold text-gray-800 mb-3', children: 'Our App' }),
                                (0, Ht.jsx)('p', {
                                  className: 'text-gray-600 leading-relaxed text-lg mb-6',
                                  children:
                                    'Access Legal Expertise at Your Fingertips. Discover the ultimate online legal advisor that puts the power of legal knowledge in your hands. Our app provides instant access to:',
                                }),
                                (0, Ht.jsx)('div', {
                                  className: 'grid sm:grid-cols-2 gap-3',
                                  children: ['Experienced attorneys', 'Making legal guidance just a tap away', '24/7 Legal Support', 'Secure & Confidential'].map((e, t) =>
                                    (0, Ht.jsxs)(
                                      'div',
                                      {
                                        className: 'flex items-center space-x-3 group',
                                        children: [
                                          (0, Ht.jsx)(nn, { className: 'w-5 h-5 text-primary-green group-hover:scale-110 transition-transform duration-300' }),
                                          (0, Ht.jsx)('span', { className: 'text-gray-700 group-hover:text-primary-green transition-colors duration-300', children: e }),
                                        ],
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, Ht.jsx)('div', { className: 'hidden lg:block', children: (0, Ht.jsx)(an, {}) }),
                    ],
                  }),
                  (0, Ht.jsx)('div', {
                    className: 'relative',
                    children: (0, Ht.jsxs)('div', {
                      className: 'relative',
                      children: [
                        (0, Ht.jsx)('div', { className: 'absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-gold/20 to-yellow-500/20 rounded-full blur-xl' }),
                        (0, Ht.jsx)('div', { className: 'absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary-green/20 to-emerald-600/20 rounded-full blur-xl' }),
                        (0, Ht.jsxs)('div', {
                          className: 'relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500',
                          children: [
                            (0, Ht.jsx)('div', {
                              className: 'absolute top-4 right-4 flex space-x-1',
                              children: [...Array(5)].map((e, t) => (0, Ht.jsx)(rn, { className: 'w-4 h-4 text-accent-gold fill-current' }, t)),
                            }),
                            (0, Ht.jsx)('img', { src: Ot, alt: 'Legal professionals at work', className: 'w-full h-auto rounded-2xl shadow-lg' }),
                            (0, Ht.jsx)('div', {
                              className: 'absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100',
                              children: (0, Ht.jsxs)('div', {
                                className: 'text-center',
                                children: [
                                  (0, Ht.jsx)('div', { className: 'text-2xl font-bold text-primary-green', children: '500+' }),
                                  (0, Ht.jsx)('div', { className: 'text-sm text-gray-600', children: 'Legal Experts' }),
                                ],
                              }),
                            }),
                            (0, Ht.jsx)('div', {
                              className: 'absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100',
                              children: (0, Ht.jsxs)('div', {
                                className: 'text-center',
                                children: [
                                  (0, Ht.jsx)('div', { className: 'text-2xl font-bold text-accent-gold', children: '24/7' }),
                                  (0, Ht.jsx)('div', { className: 'text-sm text-gray-600', children: 'Support' }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Ht.jsx)('div', { className: 'lg:hidden mt-16', children: (0, Ht.jsx)(an, {}) }),
              (0, Ht.jsx)('div', {
                className: 'mt-20 text-center',
                children: (0, Ht.jsxs)('div', {
                  className: 'bg-gradient-to-r from-primary-green to-emerald-600 rounded-3xl p-8 lg:p-12 text-white',
                  children: [
                    (0, Ht.jsx)('h3', { className: 'text-2xl lg:text-3xl font-bold mb-4', children: 'Ready to Get Legal Help?' }),
                    (0, Ht.jsx)('p', { className: 'text-lg lg:text-xl mb-8 text-green-100', children: 'Join thousands of satisfied users who trust Wakeel App for their legal needs' }),
                    (0, Ht.jsx)('button', {
                      className: 'bg-white text-primary-green px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg',
                      children: 'Get Started Today',
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
  function on(e) {
    return null !== e && 'object' === typeof e && 'constructor' in e && e.constructor === Object;
  }
  function sn(e, t) {
    (void 0 === e && (e = {}), void 0 === t && (t = {}));
    const n = ['__proto__', 'constructor', 'prototype'];
    Object.keys(t)
      .filter((e) => n.indexOf(e) < 0)
      .forEach((n) => {
        'undefined' === typeof e[n] ? (e[n] = t[n]) : on(t[n]) && on(e[n]) && Object.keys(t[n]).length > 0 && sn(e[n], t[n]);
      });
  }
  const cn = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
  };
  function un() {
    const e = 'undefined' !== typeof document ? document : {};
    return (sn(e, cn), e);
  }
  const dn = {
    document: cn,
    navigator: { userAgent: '' },
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) => ('undefined' === typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
    cancelAnimationFrame(e) {
      'undefined' !== typeof setTimeout && clearTimeout(e);
    },
  };
  function fn() {
    const e = 'undefined' !== typeof window ? window : {};
    return (sn(e, dn), e);
  }
  function pn(e, t) {
    return (void 0 === t && (t = 0), setTimeout(e, t));
  }
  function hn() {
    return Date.now();
  }
  function mn(e, t) {
    void 0 === t && (t = 'x');
    const n = fn();
    let r, a, l;
    const i = (function (e) {
      const t = fn();
      let n;
      return (t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n);
    })(e);
    return (
      n.WebKitCSSMatrix
        ? ((a = i.transform || i.webkitTransform),
          a.split(',').length > 6 &&
            (a = a
              .split(', ')
              .map((e) => e.replace(',', '.'))
              .join(', ')),
          (l = new n.WebKitCSSMatrix('none' === a ? '' : a)))
        : ((l = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
          (r = l.toString().split(','))),
      'x' === t && (a = n.WebKitCSSMatrix ? l.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])),
      'y' === t && (a = n.WebKitCSSMatrix ? l.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])),
      a || 0
    );
  }
  function gn(e) {
    return 'object' === typeof e && null !== e && e.constructor && 'Object' === Object.prototype.toString.call(e).slice(8, -1);
  }
  function vn(e) {
    return 'undefined' !== typeof window && 'undefined' !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function yn() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ['__proto__', 'constructor', 'prototype'];
    for (let n = 1; n < arguments.length; n += 1) {
      const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (void 0 !== r && null !== r && !vn(r)) {
        const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, a = n.length; t < a; t += 1) {
          const a = n[t],
            l = Object.getOwnPropertyDescriptor(r, a);
          void 0 !== l &&
            l.enumerable &&
            (gn(e[a]) && gn(r[a]) ? (r[a].__swiper__ ? (e[a] = r[a]) : yn(e[a], r[a])) : !gn(e[a]) && gn(r[a]) ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : yn(e[a], r[a])) : (e[a] = r[a]));
        }
      }
    }
    return e;
  }
  function bn(e, t, n) {
    e.style.setProperty(t, n);
  }
  function xn(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const a = fn(),
      l = -t.translate;
    let i,
      o = null;
    const s = t.params.speed;
    ((t.wrapperEl.style.scrollSnapType = 'none'), a.cancelAnimationFrame(t.cssModeFrameID));
    const c = n > l ? 'next' : 'prev',
      u = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
      d = () => {
        ((i = new Date().getTime()), null === o && (o = i));
        const e = Math.max(Math.min((i - o) / s, 1), 0),
          c = 0.5 - Math.cos(e * Math.PI) / 2;
        let f = l + c * (n - l);
        if ((u(f, n) && (f = n), t.wrapperEl.scrollTo({ [r]: f }), u(f, n)))
          return (
            (t.wrapperEl.style.overflow = 'hidden'),
            (t.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              ((t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: f }));
            }),
            void a.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = a.requestAnimationFrame(d);
      };
    d();
  }
  function wn(e, t) {
    void 0 === t && (t = '');
    const n = fn(),
      r = [...e.children];
    return (n.HTMLSlotElement && e instanceof HTMLSlotElement && r.push(...e.assignedElements()), t ? r.filter((e) => e.matches(t)) : r);
  }
  function kn(e) {
    try {
      return void console.warn(e);
    } catch (t) {}
  }
  function Sn(e, t) {
    void 0 === t && (t = []);
    const n = document.createElement(e);
    return (
      n.classList.add(
        ...(Array.isArray(t)
          ? t
          : (function (e) {
              return (
                void 0 === e && (e = ''),
                e
                  .trim()
                  .split(' ')
                  .filter((e) => !!e.trim())
              );
            })(t)),
      ),
      n
    );
  }
  function En(e, t) {
    return fn().getComputedStyle(e, null).getPropertyValue(t);
  }
  function Nn(e) {
    let t,
      n = e;
    if (n) {
      for (t = 0; null !== (n = n.previousSibling); ) 1 === n.nodeType && (t += 1);
      return t;
    }
  }
  function Cn(e, t, n) {
    const r = fn();
    return n
      ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
          parseFloat(r.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-right' : 'margin-top')) +
          parseFloat(r.getComputedStyle(e, null).getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom'))
      : e.offsetWidth;
  }
  function jn(e) {
    return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
  }
  function Tn(e, t) {
    (void 0 === t && (t = ''), 'undefined' !== typeof trustedTypes ? (e.innerHTML = trustedTypes.createPolicy('html', { createHTML: (e) => e }).createHTML(t)) : (e.innerHTML = t));
  }
  let Pn, Ln, Mn;
  function zn() {
    return (
      Pn ||
        (Pn = (function () {
          const e = fn(),
            t = un();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
            touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
          };
        })()),
      Pn
    );
  }
  function _n(e) {
    return (
      void 0 === e && (e = {}),
      Ln ||
        (Ln = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const n = zn(),
            r = fn(),
            a = r.navigator.platform,
            l = t || r.navigator.userAgent,
            i = { ios: !1, android: !1 },
            o = r.screen.width,
            s = r.screen.height,
            c = l.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = l.match(/(iPad).*OS\s([\d_]+)/);
          const d = l.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !u && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            p = 'Win32' === a;
          let h = 'MacIntel' === a;
          return (
            !u &&
              h &&
              n.touch &&
              ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'].indexOf(''.concat(o, 'x').concat(s)) >=
                0 &&
              ((u = l.match(/(Version)\/([\d.]+)/)), u || (u = [0, 1, '13_0_0']), (h = !1)),
            c && !p && ((i.os = 'android'), (i.android = !0)),
            (u || f || d) && ((i.os = 'ios'), (i.ios = !0)),
            i
          );
        })(e)),
      Ln
    );
  }
  function On() {
    return (
      Mn ||
        (Mn = (function () {
          const e = fn(),
            t = _n();
          let n = !1;
          function r() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
          }
          if (r()) {
            const t = String(e.navigator.userAgent);
            if (t.includes('Version/')) {
              const [e, r] = t
                .split('Version/')[1]
                .split(' ')[0]
                .split('.')
                .map((e) => Number(e));
              n = e < 16 || (16 === e && r < 2);
            }
          }
          const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            l = r();
          return { isSafari: n || l, needPerspectiveFix: n, need3dFix: l || (a && t.ios), isWebView: a };
        })()),
      Mn
    );
  }
  var An = {
    on(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed) return r;
      if ('function' !== typeof t) return r;
      const a = n ? 'unshift' : 'push';
      return (
        e.split(' ').forEach((e) => {
          (r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][a](t));
        }),
        r
      );
    },
    once(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed) return r;
      if ('function' !== typeof t) return r;
      function a() {
        (r.off(e, a), a.__emitterProxy && delete a.__emitterProxy);
        for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
        t.apply(r, l);
      }
      return ((a.__emitterProxy = t), r.on(e, a, n));
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed) return n;
      if ('function' !== typeof e) return n;
      const r = t ? 'unshift' : 'push';
      return (n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n);
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return (n >= 0 && t.eventsAnyListeners.splice(n, 1), t);
    },
    off(e, t) {
      const n = this;
      return !n.eventsListeners || n.destroyed
        ? n
        : n.eventsListeners
          ? (e.split(' ').forEach((e) => {
              'undefined' === typeof t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((r, a) => {
                    (r === t || (r.__emitterProxy && r.__emitterProxy === t)) && n.eventsListeners[e].splice(a, 1);
                  });
            }),
            n)
          : n;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, n, r;
      for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i];
      ('string' === typeof l[0] || Array.isArray(l[0]) ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e)) : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)), n.unshift(r));
      return (
        (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
          (e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(r, [t, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(r, n);
              }));
        }),
        e
      );
    },
  };
  const Rn = (e, t, n) => {
    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
  };
  const Dn = (e, t, n) => {
    t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
  };
  const In = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const n = t.closest(e.isElement ? 'swiper-slide' : '.'.concat(e.params.slideClass));
      if (n) {
        let t = n.querySelector('.'.concat(e.params.lazyPreloaderClass));
        (!t &&
          e.isElement &&
          (n.shadowRoot
            ? (t = n.shadowRoot.querySelector('.'.concat(e.params.lazyPreloaderClass)))
            : requestAnimationFrame(() => {
                n.shadowRoot && ((t = n.shadowRoot.querySelector('.'.concat(e.params.lazyPreloaderClass))), t && t.remove());
              })),
          t && t.remove());
      }
    },
    Fn = (e, t) => {
      if (!e.slides[t]) return;
      const n = e.slides[t].querySelector('[loading="lazy"]');
      n && n.removeAttribute('loading');
    },
    Wn = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const n = e.slides.length;
      if (!n || !t || t < 0) return;
      t = Math.min(t, n);
      const r = 'auto' === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        a = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const n = a,
          l = [n - t];
        return (
          l.push(...Array.from({ length: t }).map((e, t) => n + r + t)),
          void e.slides.forEach((t, n) => {
            l.includes(t.column) && Fn(e, n);
          })
        );
      }
      const l = a + r - 1;
      if (e.params.rewind || e.params.loop)
        for (let i = a - t; i <= l + t; i += 1) {
          const t = ((i % n) + n) % n;
          (t < a || t > l) && Fn(e, t);
        }
      else for (let i = Math.max(a - t, 0); i <= Math.min(l + t, n - 1); i += 1) i !== a && (i > l || i < a) && Fn(e, i);
    };
  var Bn = {
    updateSize: function () {
      const e = this;
      let t, n;
      const r = e.el;
      ((t = 'undefined' !== typeof e.params.width && null !== e.params.width ? e.params.width : r.clientWidth),
        (n = 'undefined' !== typeof e.params.height && null !== e.params.height ? e.params.height : r.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === n && e.isVertical()) ||
          ((t = t - parseInt(En(r, 'padding-left') || 0, 10) - parseInt(En(r, 'padding-right') || 0, 10)),
          (n = n - parseInt(En(r, 'padding-top') || 0, 10) - parseInt(En(r, 'padding-bottom') || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(n) && (n = 0),
          Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n })));
    },
    updateSlides: function () {
      const e = this;
      function t(t, n) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0);
      }
      const n = e.params,
        { wrapperEl: r, slidesEl: a, size: l, rtlTranslate: i, wrongRTL: o } = e,
        s = e.virtual && n.virtual.enabled,
        c = s ? e.virtual.slides.length : e.slides.length,
        u = wn(a, '.'.concat(e.params.slideClass, ', swiper-slide')),
        d = s ? e.virtual.slides.length : u.length;
      let f = [];
      const p = [],
        h = [];
      let m = n.slidesOffsetBefore;
      'function' === typeof m && (m = n.slidesOffsetBefore.call(e));
      let g = n.slidesOffsetAfter;
      'function' === typeof g && (g = n.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        y = e.slidesGrid.length;
      let b = n.spaceBetween,
        x = -m,
        w = 0,
        k = 0;
      if ('undefined' === typeof l) return;
      ('string' === typeof b && b.indexOf('%') >= 0 ? (b = (parseFloat(b.replace('%', '')) / 100) * l) : 'string' === typeof b && (b = parseFloat(b)),
        (e.virtualSize = -b),
        u.forEach((e) => {
          (i ? (e.style.marginLeft = '') : (e.style.marginRight = ''), (e.style.marginBottom = ''), (e.style.marginTop = ''));
        }),
        n.centeredSlides && n.cssMode && (bn(r, '--swiper-centered-offset-before', ''), bn(r, '--swiper-centered-offset-after', '')));
      const S = n.grid && n.grid.rows > 1 && e.grid;
      let E;
      S ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
      const N = 'auto' === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e) => 'undefined' !== typeof n.breakpoints[e].slidesPerView).length > 0;
      for (let C = 0; C < d; C += 1) {
        let r;
        if (((E = 0), u[C] && (r = u[C]), S && e.grid.updateSlide(C, r, u), !u[C] || 'none' !== En(r, 'display'))) {
          if ('auto' === n.slidesPerView) {
            N && (u[C].style[e.getDirectionLabel('width')] = '');
            const a = getComputedStyle(r),
              l = r.style.transform,
              i = r.style.webkitTransform;
            if ((l && (r.style.transform = 'none'), i && (r.style.webkitTransform = 'none'), n.roundLengths)) E = e.isHorizontal() ? Cn(r, 'width', !0) : Cn(r, 'height', !0);
            else {
              const e = t(a, 'width'),
                n = t(a, 'padding-left'),
                l = t(a, 'padding-right'),
                i = t(a, 'margin-left'),
                o = t(a, 'margin-right'),
                s = a.getPropertyValue('box-sizing');
              if (s && 'border-box' === s) E = e + i + o;
              else {
                const { clientWidth: t, offsetWidth: a } = r;
                E = e + n + l + i + o + (a - t);
              }
            }
            (l && (r.style.transform = l), i && (r.style.webkitTransform = i), n.roundLengths && (E = Math.floor(E)));
          } else ((E = (l - (n.slidesPerView - 1) * b) / n.slidesPerView), n.roundLengths && (E = Math.floor(E)), u[C] && (u[C].style[e.getDirectionLabel('width')] = ''.concat(E, 'px')));
          (u[C] && (u[C].swiperSlideSize = E),
            h.push(E),
            n.centeredSlides
              ? ((x = x + E / 2 + w / 2 + b),
                0 === w && 0 !== C && (x = x - l / 2 - b),
                0 === C && (x = x - l / 2 - b),
                Math.abs(x) < 0.001 && (x = 0),
                n.roundLengths && (x = Math.floor(x)),
                k % n.slidesPerGroup === 0 && f.push(x),
                p.push(x))
              : (n.roundLengths && (x = Math.floor(x)), (k - Math.min(e.params.slidesPerGroupSkip, k)) % e.params.slidesPerGroup === 0 && f.push(x), p.push(x), (x = x + E + b)),
            (e.virtualSize += E + b),
            (w = E),
            (k += 1));
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, l) + g),
        i && o && ('slide' === n.effect || 'coverflow' === n.effect) && (r.style.width = ''.concat(e.virtualSize + b, 'px')),
        n.setWrapperSize && (r.style[e.getDirectionLabel('width')] = ''.concat(e.virtualSize + b, 'px')),
        S && e.grid.updateWrapperSize(E, f),
        !n.centeredSlides)
      ) {
        const t = [];
        for (let r = 0; r < f.length; r += 1) {
          let a = f[r];
          (n.roundLengths && (a = Math.floor(a)), f[r] <= e.virtualSize - l && t.push(a));
        }
        ((f = t), Math.floor(e.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - l));
      }
      if (s && n.loop) {
        const t = h[0] + b;
        if (n.slidesPerGroup > 1) {
          const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
            a = t * n.slidesPerGroup;
          for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + a);
        }
        for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) (1 === n.slidesPerGroup && f.push(f[f.length - 1] + t), p.push(p[p.length - 1] + t), (e.virtualSize += t));
      }
      if ((0 === f.length && (f = [0]), 0 !== b)) {
        const t = e.isHorizontal() && i ? 'marginLeft' : e.getDirectionLabel('marginRight');
        u.filter((e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1).forEach((e) => {
          e.style[t] = ''.concat(b, 'px');
        });
      }
      if (n.centeredSlides && n.centeredSlidesBounds) {
        let e = 0;
        (h.forEach((t) => {
          e += t + (b || 0);
        }),
          (e -= b));
        const t = e > l ? e - l : 0;
        f = f.map((e) => (e <= 0 ? -m : e > t ? t + g : e));
      }
      if (n.centerInsufficientSlides) {
        let e = 0;
        (h.forEach((t) => {
          e += t + (b || 0);
        }),
          (e -= b));
        const t = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
        if (e + t < l) {
          const n = (l - e - t) / 2;
          (f.forEach((e, t) => {
            f[t] = e - n;
          }),
            p.forEach((e, t) => {
              p[t] = e + n;
            }));
        }
      }
      if ((Object.assign(e, { slides: u, snapGrid: f, slidesGrid: p, slidesSizesGrid: h }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)) {
        (bn(r, '--swiper-centered-offset-before', ''.concat(-f[0], 'px')), bn(r, '--swiper-centered-offset-after', ''.concat(e.size / 2 - h[h.length - 1] / 2, 'px')));
        const t = -e.snapGrid[0],
          n = -e.slidesGrid[0];
        ((e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + n)));
      }
      if (
        (d !== c && e.emit('slidesLengthChange'),
        f.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
        p.length !== y && e.emit('slidesGridLengthChange'),
        n.watchSlidesProgress && e.updateSlidesOffset(),
        e.emit('slidesUpdated'),
        !s && !n.cssMode && ('slide' === n.effect || 'fade' === n.effect))
      ) {
        const t = ''.concat(n.containerModifierClass, 'backface-hidden'),
          r = e.el.classList.contains(t);
        d <= n.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        n = [],
        r = t.virtual && t.params.virtual.enabled;
      let a,
        l = 0;
      'number' === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      const i = (e) => (r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
      if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            n.push(e);
          });
        else
          for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
            const e = t.activeIndex + a;
            if (e > t.slides.length && !r) break;
            n.push(i(e));
          }
      else n.push(i(t.activeIndex));
      for (a = 0; a < n.length; a += 1)
        if ('undefined' !== typeof n[a]) {
          const e = n[a].offsetHeight;
          l = e > l ? e : l;
        }
      (l || 0 === l) && (t.wrapperEl.style.height = ''.concat(l, 'px'));
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
      for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        n = t.params,
        { slides: r, rtlTranslate: a, snapGrid: l } = t;
      if (0 === r.length) return;
      'undefined' === typeof r[0].swiperSlideOffset && t.updateSlidesOffset();
      let i = -e;
      (a && (i = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []));
      let o = n.spaceBetween;
      'string' === typeof o && o.indexOf('%') >= 0 ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size) : 'string' === typeof o && (o = parseFloat(o));
      for (let s = 0; s < r.length; s += 1) {
        const e = r[s];
        let c = e.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
        const u = (i + (n.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + o),
          d = (i - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + o),
          f = -(i - c),
          p = f + t.slidesSizesGrid[s],
          h = f >= 0 && f <= t.size - t.slidesSizesGrid[s],
          m = (f >= 0 && f < t.size - 1) || (p > 1 && p <= t.size) || (f <= 0 && p >= t.size);
        (m && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(s)),
          Rn(e, m, n.slideVisibleClass),
          Rn(e, h, n.slideFullyVisibleClass),
          (e.progress = a ? -u : u),
          (e.originalProgress = a ? -d : d));
      }
    },
    updateProgress: function (e) {
      const t = this;
      if ('undefined' === typeof e) {
        const n = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * n) || 0;
      }
      const n = t.params,
        r = t.maxTranslate() - t.minTranslate();
      let { progress: a, isBeginning: l, isEnd: i, progressLoop: o } = t;
      const s = l,
        c = i;
      if (0 === r) ((a = 0), (l = !0), (i = !0));
      else {
        a = (e - t.minTranslate()) / r;
        const n = Math.abs(e - t.minTranslate()) < 1,
          o = Math.abs(e - t.maxTranslate()) < 1;
        ((l = n || a <= 0), (i = o || a >= 1), n && (a = 0), o && (a = 1));
      }
      if (n.loop) {
        const n = t.getSlideIndexByData(0),
          r = t.getSlideIndexByData(t.slides.length - 1),
          a = t.slidesGrid[n],
          l = t.slidesGrid[r],
          i = t.slidesGrid[t.slidesGrid.length - 1],
          s = Math.abs(e);
        ((o = s >= a ? (s - a) / i : (s + i - l) / i), o > 1 && (o -= 1));
      }
      (Object.assign(t, { progress: a, progressLoop: o, isBeginning: l, isEnd: i }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
        l && !s && t.emit('reachBeginning toEdge'),
        i && !c && t.emit('reachEnd toEdge'),
        ((s && !l) || (c && !i)) && t.emit('fromEdge'),
        t.emit('progress', a));
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: n, slidesEl: r, activeIndex: a } = e,
        l = e.virtual && n.virtual.enabled,
        i = e.grid && n.grid && n.grid.rows > 1,
        o = (e) => wn(r, '.'.concat(n.slideClass).concat(e, ', swiper-slide').concat(e))[0];
      let s, c, u;
      if (l)
        if (n.loop) {
          let t = a - e.virtual.slidesBefore;
          (t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), (s = o('[data-swiper-slide-index="'.concat(t, '"]'))));
        } else s = o('[data-swiper-slide-index="'.concat(a, '"]'));
      else i ? ((s = t.find((e) => e.column === a)), (u = t.find((e) => e.column === a + 1)), (c = t.find((e) => e.column === a - 1))) : (s = t[a]);
      (s &&
        (i ||
          ((u = (function (e, t) {
            const n = [];
            for (; e.nextElementSibling; ) {
              const r = e.nextElementSibling;
              (t ? r.matches(t) && n.push(r) : n.push(r), (e = r));
            }
            return n;
          })(s, '.'.concat(n.slideClass, ', swiper-slide'))[0]),
          n.loop && !u && (u = t[0]),
          (c = (function (e, t) {
            const n = [];
            for (; e.previousElementSibling; ) {
              const r = e.previousElementSibling;
              (t ? r.matches(t) && n.push(r) : n.push(r), (e = r));
            }
            return n;
          })(s, '.'.concat(n.slideClass, ', swiper-slide'))[0]),
          n.loop && 0 === !c && (c = t[t.length - 1]))),
        t.forEach((e) => {
          (Dn(e, e === s, n.slideActiveClass), Dn(e, e === u, n.slideNextClass), Dn(e, e === c, n.slidePrevClass));
        }),
        e.emitSlidesClasses());
    },
    updateActiveIndex: function (e) {
      const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        { snapGrid: r, params: a, activeIndex: l, realIndex: i, snapIndex: o } = t;
      let s,
        c = e;
      const u = (e) => {
        let n = e - t.virtual.slidesBefore;
        return (n < 0 && (n = t.virtual.slides.length + n), n >= t.virtual.slides.length && (n -= t.virtual.slides.length), n);
      };
      if (
        ('undefined' === typeof c &&
          (c = (function (e) {
            const { slidesGrid: t, params: n } = e,
              r = e.rtlTranslate ? e.translate : -e.translate;
            let a;
            for (let l = 0; l < t.length; l += 1)
              'undefined' !== typeof t[l + 1] ? (r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2 ? (a = l) : r >= t[l] && r < t[l + 1] && (a = l + 1)) : r >= t[l] && (a = l);
            return (n.normalizeSlideIndex && (a < 0 || 'undefined' === typeof a) && (a = 0), a);
          })(t)),
        r.indexOf(n) >= 0)
      )
        s = r.indexOf(n);
      else {
        const e = Math.min(a.slidesPerGroupSkip, c);
        s = e + Math.floor((c - e) / a.slidesPerGroup);
      }
      if ((s >= r.length && (s = r.length - 1), c === l && !t.params.loop)) return void (s !== o && ((t.snapIndex = s), t.emit('snapIndexChange')));
      if (c === l && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = u(c));
      const d = t.grid && a.grid && a.grid.rows > 1;
      let f;
      if (t.virtual && a.virtual.enabled && a.loop) f = u(c);
      else if (d) {
        const e = t.slides.find((e) => e.column === c);
        let n = parseInt(e.getAttribute('data-swiper-slide-index'), 10);
        (Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)), (f = Math.floor(n / a.grid.rows)));
      } else if (t.slides[c]) {
        const e = t.slides[c].getAttribute('data-swiper-slide-index');
        f = e ? parseInt(e, 10) : c;
      } else f = c;
      (Object.assign(t, { previousSnapIndex: o, snapIndex: s, previousRealIndex: i, realIndex: f, previousIndex: l, activeIndex: c }),
        t.initialized && Wn(t),
        t.emit('activeIndexChange'),
        t.emit('snapIndexChange'),
        (t.initialized || t.params.runCallbacksOnInit) && (i !== f && t.emit('realIndexChange'), t.emit('slideChange')));
    },
    updateClickedSlide: function (e, t) {
      const n = this,
        r = n.params;
      let a = e.closest('.'.concat(r.slideClass, ', swiper-slide'));
      !a &&
        n.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
          !a && e.matches && e.matches('.'.concat(r.slideClass, ', swiper-slide')) && (a = e);
        });
      let l,
        i = !1;
      if (a)
        for (let o = 0; o < n.slides.length; o += 1)
          if (n.slides[o] === a) {
            ((i = !0), (l = o));
            break;
          }
      if (!a || !i) return ((n.clickedSlide = void 0), void (n.clickedIndex = void 0));
      ((n.clickedSlide = a),
        n.virtual && n.params.virtual.enabled ? (n.clickedIndex = parseInt(a.getAttribute('data-swiper-slide-index'), 10)) : (n.clickedIndex = l),
        r.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide());
    },
  };
  var Hn = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
      const { params: t, rtlTranslate: n, translate: r, wrapperEl: a } = this;
      if (t.virtualTranslate) return n ? -r : r;
      if (t.cssMode) return r;
      let l = mn(a, e);
      return ((l += this.cssOverflowAdjustment()), n && (l = -l), l || 0);
    },
    setTranslate: function (e, t) {
      const n = this,
        { rtlTranslate: r, params: a, wrapperEl: l, progress: i } = n;
      let o,
        s = 0,
        c = 0;
      (n.isHorizontal() ? (s = r ? -e : e) : (c = e),
        a.roundLengths && ((s = Math.floor(s)), (c = Math.floor(c))),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? s : c),
        a.cssMode
          ? (l[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -s : -c)
          : a.virtualTranslate ||
            (n.isHorizontal() ? (s -= n.cssOverflowAdjustment()) : (c -= n.cssOverflowAdjustment()), (l.style.transform = 'translate3d('.concat(s, 'px, ').concat(c, 'px, ').concat(0, 'px)'))));
      const u = n.maxTranslate() - n.minTranslate();
      ((o = 0 === u ? 0 : (e - n.minTranslate()) / u), o !== i && n.updateProgress(e), n.emit('setTranslate', n.translate, t));
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, n, r, a) {
      (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === r && (r = !0));
      const l = this,
        { params: i, wrapperEl: o } = l;
      if (l.animating && i.preventInteractionOnTransition) return !1;
      const s = l.minTranslate(),
        c = l.maxTranslate();
      let u;
      if (((u = r && e > s ? s : r && e < c ? c : e), l.updateProgress(u), i.cssMode)) {
        const e = l.isHorizontal();
        if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -u;
        else {
          if (!l.support.smoothScroll) return (xn({ swiper: l, targetPosition: -u, side: e ? 'left' : 'top' }), !0);
          o.scrollTo({ [e ? 'left' : 'top']: -u, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        0 === t
          ? (l.setTransition(0), l.setTranslate(u), n && (l.emit('beforeTransitionStart', t, a), l.emit('transitionEnd')))
          : (l.setTransition(t),
            l.setTranslate(u),
            n && (l.emit('beforeTransitionStart', t, a), l.emit('transitionStart')),
            l.animating ||
              ((l.animating = !0),
              l.onTranslateToWrapperTransitionEnd ||
                (l.onTranslateToWrapperTransitionEnd = function (e) {
                  l &&
                    !l.destroyed &&
                    e.target === this &&
                    (l.wrapperEl.removeEventListener('transitionend', l.onTranslateToWrapperTransitionEnd),
                    (l.onTranslateToWrapperTransitionEnd = null),
                    delete l.onTranslateToWrapperTransitionEnd,
                    (l.animating = !1),
                    n && l.emit('transitionEnd'));
                }),
              l.wrapperEl.addEventListener('transitionend', l.onTranslateToWrapperTransitionEnd))),
        !0
      );
    },
  };
  function Vn(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: a } = e;
    const { activeIndex: l, previousIndex: i } = t;
    let o = r;
    (o || (o = l > i ? 'next' : l < i ? 'prev' : 'reset'),
      t.emit('transition'.concat(a)),
      n && 'reset' === o
        ? t.emit('slideResetTransition'.concat(a))
        : n && l !== i && (t.emit('slideChangeTransition'.concat(a)), 'next' === o ? t.emit('slideNextTransition'.concat(a)) : t.emit('slidePrevTransition'.concat(a))));
  }
  var Un = {
    setTransition: function (e, t) {
      const n = this;
      (n.params.cssMode || ((n.wrapperEl.style.transitionDuration = ''.concat(e, 'ms')), (n.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')), n.emit('setTransition', e, t));
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      const n = this,
        { params: r } = n;
      r.cssMode || (r.autoHeight && n.updateAutoHeight(), Vn({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      const n = this,
        { params: r } = n;
      ((n.animating = !1), r.cssMode || (n.setTransition(0), Vn({ swiper: n, runCallbacks: e, direction: t, step: 'End' })));
    },
  };
  var qn = {
    slideTo: function (e, t, n, r, a) {
      (void 0 === e && (e = 0), void 0 === n && (n = !0), 'string' === typeof e && (e = parseInt(e, 10)));
      const l = this;
      let i = e;
      i < 0 && (i = 0);
      const { params: o, snapGrid: s, slidesGrid: c, previousIndex: u, activeIndex: d, rtlTranslate: f, wrapperEl: p, enabled: h } = l;
      if ((!h && !r && !a) || l.destroyed || (l.animating && o.preventInteractionOnTransition)) return !1;
      'undefined' === typeof t && (t = l.params.speed);
      const m = Math.min(l.params.slidesPerGroupSkip, i);
      let g = m + Math.floor((i - m) / l.params.slidesPerGroup);
      g >= s.length && (g = s.length - 1);
      const v = -s[g];
      if (o.normalizeSlideIndex)
        for (let w = 0; w < c.length; w += 1) {
          const e = -Math.floor(100 * v),
            t = Math.floor(100 * c[w]),
            n = Math.floor(100 * c[w + 1]);
          'undefined' !== typeof c[w + 1] ? (e >= t && e < n - (n - t) / 2 ? (i = w) : e >= t && e < n && (i = w + 1)) : e >= t && (i = w);
        }
      if (l.initialized && i !== d) {
        if (!l.allowSlideNext && (f ? v > l.translate && v > l.minTranslate() : v < l.translate && v < l.minTranslate())) return !1;
        if (!l.allowSlidePrev && v > l.translate && v > l.maxTranslate() && (d || 0) !== i) return !1;
      }
      let y;
      (i !== (u || 0) && n && l.emit('beforeSlideChangeStart'), l.updateProgress(v), (y = i > d ? 'next' : i < d ? 'prev' : 'reset'));
      const b = l.virtual && l.params.virtual.enabled;
      if (!(b && a) && ((f && -v === l.translate) || (!f && v === l.translate)))
        return (
          l.updateActiveIndex(i),
          o.autoHeight && l.updateAutoHeight(),
          l.updateSlidesClasses(),
          'slide' !== o.effect && l.setTranslate(v),
          'reset' !== y && (l.transitionStart(n, y), l.transitionEnd(n, y)),
          !1
        );
      if (o.cssMode) {
        const e = l.isHorizontal(),
          n = f ? v : -v;
        if (0 === t)
          (b && ((l.wrapperEl.style.scrollSnapType = 'none'), (l._immediateVirtual = !0)),
            b && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
              ? ((l._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  p[e ? 'scrollLeft' : 'scrollTop'] = n;
                }))
              : (p[e ? 'scrollLeft' : 'scrollTop'] = n),
            b &&
              requestAnimationFrame(() => {
                ((l.wrapperEl.style.scrollSnapType = ''), (l._immediateVirtual = !1));
              }));
        else {
          if (!l.support.smoothScroll) return (xn({ swiper: l, targetPosition: n, side: e ? 'left' : 'top' }), !0);
          p.scrollTo({ [e ? 'left' : 'top']: n, behavior: 'smooth' });
        }
        return !0;
      }
      const x = On().isSafari;
      return (
        b && !a && x && l.isElement && l.virtual.update(!1, !1, i),
        l.setTransition(t),
        l.setTranslate(v),
        l.updateActiveIndex(i),
        l.updateSlidesClasses(),
        l.emit('beforeTransitionStart', t, r),
        l.transitionStart(n, y),
        0 === t
          ? l.transitionEnd(n, y)
          : l.animating ||
            ((l.animating = !0),
            l.onSlideToWrapperTransitionEnd ||
              (l.onSlideToWrapperTransitionEnd = function (e) {
                l &&
                  !l.destroyed &&
                  e.target === this &&
                  (l.wrapperEl.removeEventListener('transitionend', l.onSlideToWrapperTransitionEnd),
                  (l.onSlideToWrapperTransitionEnd = null),
                  delete l.onSlideToWrapperTransitionEnd,
                  l.transitionEnd(n, y));
              }),
            l.wrapperEl.addEventListener('transitionend', l.onSlideToWrapperTransitionEnd)),
        !0
      );
    },
    slideToLoop: function (e, t, n, r) {
      if ((void 0 === e && (e = 0), void 0 === n && (n = !0), 'string' === typeof e)) {
        e = parseInt(e, 10);
      }
      const a = this;
      if (a.destroyed) return;
      'undefined' === typeof t && (t = a.params.speed);
      const l = a.grid && a.params.grid && a.params.grid.rows > 1;
      let i = e;
      if (a.params.loop)
        if (a.virtual && a.params.virtual.enabled) i += a.virtual.slidesBefore;
        else {
          let e;
          if (l) {
            const t = i * a.params.grid.rows;
            e = a.slides.find((e) => 1 * e.getAttribute('data-swiper-slide-index') === t).column;
          } else e = a.getSlideIndexByData(i);
          const t = l ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length,
            { centeredSlides: n } = a.params;
          let o = a.params.slidesPerView;
          'auto' === o ? (o = a.slidesPerViewDynamic()) : ((o = Math.ceil(parseFloat(a.params.slidesPerView, 10))), n && o % 2 === 0 && (o += 1));
          let s = t - e < o;
          if ((n && (s = s || e < Math.ceil(o / 2)), r && n && 'auto' !== a.params.slidesPerView && !l && (s = !1), s)) {
            const r = n ? (e < a.activeIndex ? 'prev' : 'next') : e - a.activeIndex - 1 < a.params.slidesPerView ? 'next' : 'prev';
            a.loopFix({ direction: r, slideTo: !0, activeSlideIndex: 'next' === r ? e + 1 : e - t + 1, slideRealIndex: 'next' === r ? a.realIndex : void 0 });
          }
          if (l) {
            const e = i * a.params.grid.rows;
            i = a.slides.find((t) => 1 * t.getAttribute('data-swiper-slide-index') === e).column;
          } else i = a.getSlideIndexByData(i);
        }
      return (
        requestAnimationFrame(() => {
          a.slideTo(i, t, n, r);
        }),
        a
      );
    },
    slideNext: function (e, t, n) {
      void 0 === t && (t = !0);
      const r = this,
        { enabled: a, params: l, animating: i } = r;
      if (!a || r.destroyed) return r;
      'undefined' === typeof e && (e = r.params.speed);
      let o = l.slidesPerGroup;
      'auto' === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic('current', !0), 1));
      const s = r.activeIndex < l.slidesPerGroupSkip ? 1 : o,
        c = r.virtual && l.virtual.enabled;
      if (l.loop) {
        if (i && !c && l.loopPreventsSliding) return !1;
        if ((r.loopFix({ direction: 'next' }), (r._clientLeft = r.wrapperEl.clientLeft), r.activeIndex === r.slides.length - 1 && l.cssMode))
          return (
            requestAnimationFrame(() => {
              r.slideTo(r.activeIndex + s, e, t, n);
            }),
            !0
          );
      }
      return l.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + s, e, t, n);
    },
    slidePrev: function (e, t, n) {
      void 0 === t && (t = !0);
      const r = this,
        { params: a, snapGrid: l, slidesGrid: i, rtlTranslate: o, enabled: s, animating: c } = r;
      if (!s || r.destroyed) return r;
      'undefined' === typeof e && (e = r.params.speed);
      const u = r.virtual && a.virtual.enabled;
      if (a.loop) {
        if (c && !u && a.loopPreventsSliding) return !1;
        (r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft));
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const f = d(o ? r.translate : -r.translate),
        p = l.map((e) => d(e)),
        h = a.freeMode && a.freeMode.enabled;
      let m = l[p.indexOf(f) - 1];
      if ('undefined' === typeof m && (a.cssMode || h)) {
        let e;
        (l.forEach((t, n) => {
          f >= t && (e = n);
        }),
          'undefined' !== typeof e && (m = h ? l[e] : l[e > 0 ? e - 1 : e]));
      }
      let g = 0;
      if (
        ('undefined' !== typeof m &&
          ((g = i.indexOf(m)),
          g < 0 && (g = r.activeIndex - 1),
          'auto' === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && ((g = g - r.slidesPerViewDynamic('previous', !0) + 1), (g = Math.max(g, 0)))),
        a.rewind && r.isBeginning)
      ) {
        const a = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
        return r.slideTo(a, e, t, n);
      }
      return a.loop && 0 === r.activeIndex && a.cssMode
        ? (requestAnimationFrame(() => {
            r.slideTo(g, e, t, n);
          }),
          !0)
        : r.slideTo(g, e, t, n);
    },
    slideReset: function (e, t, n) {
      void 0 === t && (t = !0);
      const r = this;
      if (!r.destroyed) return ('undefined' === typeof e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n));
    },
    slideToClosest: function (e, t, n, r) {
      (void 0 === t && (t = !0), void 0 === r && (r = 0.5));
      const a = this;
      if (a.destroyed) return;
      'undefined' === typeof e && (e = a.params.speed);
      let l = a.activeIndex;
      const i = Math.min(a.params.slidesPerGroupSkip, l),
        o = i + Math.floor((l - i) / a.params.slidesPerGroup),
        s = a.rtlTranslate ? a.translate : -a.translate;
      if (s >= a.snapGrid[o]) {
        const e = a.snapGrid[o];
        s - e > (a.snapGrid[o + 1] - e) * r && (l += a.params.slidesPerGroup);
      } else {
        const e = a.snapGrid[o - 1];
        s - e <= (a.snapGrid[o] - e) * r && (l -= a.params.slidesPerGroup);
      }
      return ((l = Math.max(l, 0)), (l = Math.min(l, a.slidesGrid.length - 1)), a.slideTo(l, e, t, n));
    },
    slideToClickedSlide: function () {
      const e = this;
      if (e.destroyed) return;
      const { params: t, slidesEl: n } = e,
        r = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let a,
        l = e.getSlideIndexWhenGrid(e.clickedIndex);
      const i = e.isElement ? 'swiper-slide' : '.'.concat(t.slideClass),
        o = e.grid && e.params.grid && e.params.grid.rows > 1;
      if (t.loop) {
        if (e.animating) return;
        ((a = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
          t.centeredSlides
            ? e.slideToLoop(a)
            : l > (o ? (e.slides.length - r) / 2 - (e.params.grid.rows - 1) : e.slides.length - r)
              ? (e.loopFix(),
                (l = e.getSlideIndex(wn(n, ''.concat(i, '[data-swiper-slide-index="').concat(a, '"]'))[0])),
                pn(() => {
                  e.slideTo(l);
                }))
              : e.slideTo(l));
      } else e.slideTo(l);
    },
  };
  var Gn = {
    loopCreate: function (e, t) {
      const n = this,
        { params: r, slidesEl: a } = n;
      if (!r.loop || (n.virtual && n.params.virtual.enabled)) return;
      const l = () => {
          wn(a, '.'.concat(r.slideClass, ', swiper-slide')).forEach((e, t) => {
            e.setAttribute('data-swiper-slide-index', t);
          });
        },
        i = n.grid && r.grid && r.grid.rows > 1;
      r.loopAddBlankSlides &&
        (r.slidesPerGroup > 1 || i) &&
        (() => {
          const e = wn(a, '.'.concat(r.slideBlankClass));
          (e.forEach((e) => {
            e.remove();
          }),
            e.length > 0 && (n.recalcSlides(), n.updateSlides()));
        })();
      const o = r.slidesPerGroup * (i ? r.grid.rows : 1),
        s = n.slides.length % o !== 0,
        c = i && n.slides.length % r.grid.rows !== 0,
        u = (e) => {
          for (let t = 0; t < e; t += 1) {
            const e = n.isElement ? Sn('swiper-slide', [r.slideBlankClass]) : Sn('div', [r.slideClass, r.slideBlankClass]);
            n.slidesEl.append(e);
          }
        };
      if (s) {
        if (r.loopAddBlankSlides) {
          (u(o - (n.slides.length % o)), n.recalcSlides(), n.updateSlides());
        } else kn('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        l();
      } else if (c) {
        if (r.loopAddBlankSlides) {
          (u(r.grid.rows - (n.slides.length % r.grid.rows)), n.recalcSlides(), n.updateSlides());
        } else kn('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
        l();
      } else l();
      n.loopFix({ slideRealIndex: e, direction: r.centeredSlides ? void 0 : 'next', initial: t });
    },
    loopFix: function (e) {
      let { slideRealIndex: t, slideTo: n = !0, direction: r, setTranslate: a, activeSlideIndex: l, initial: i, byController: o, byMousewheel: s } = void 0 === e ? {} : e;
      const c = this;
      if (!c.params.loop) return;
      c.emit('beforeLoopFix');
      const { slides: d, allowSlidePrev: f, allowSlideNext: p, slidesEl: h, params: m } = c,
        { centeredSlides: g, initialSlide: v } = m;
      if (((c.allowSlidePrev = !0), (c.allowSlideNext = !0), c.virtual && m.virtual.enabled))
        return (
          n &&
            (m.centeredSlides || 0 !== c.snapIndex
              ? m.centeredSlides && c.snapIndex < m.slidesPerView
                ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0)
                : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0)
              : c.slideTo(c.virtual.slides.length, 0, !1, !0)),
          (c.allowSlidePrev = f),
          (c.allowSlideNext = p),
          void c.emit('loopFix')
        );
      let y = m.slidesPerView;
      'auto' === y ? (y = c.slidesPerViewDynamic()) : ((y = Math.ceil(parseFloat(m.slidesPerView, 10))), g && y % 2 === 0 && (y += 1));
      const b = m.slidesPerGroupAuto ? y : m.slidesPerGroup;
      let x = g ? Math.max(b, Math.ceil(y / 2)) : b;
      (x % b !== 0 && (x += b - (x % b)), (x += m.loopAdditionalSlides), (c.loopedSlides = x));
      const w = c.grid && m.grid && m.grid.rows > 1;
      d.length < y + x || ('cards' === c.params.effect && d.length < y + 2 * x)
        ? kn(
            'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
          )
        : w && 'row' === m.grid.fill && kn('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
      const k = [],
        S = [],
        E = w ? Math.ceil(d.length / m.grid.rows) : d.length,
        N = i && E - v < y && !g;
      let C = N ? v : c.activeIndex;
      'undefined' === typeof l ? (l = c.getSlideIndex(d.find((e) => e.classList.contains(m.slideActiveClass)))) : (C = l);
      const j = 'next' === r || !r,
        T = 'prev' === r || !r;
      let P = 0,
        L = 0;
      const M = (w ? d[l].column : l) + (g && 'undefined' === typeof a ? -y / 2 + 0.5 : 0);
      if (M < x) {
        P = Math.max(x - M, b);
        for (let e = 0; e < x - M; e += 1) {
          const t = e - Math.floor(e / E) * E;
          if (w) {
            const e = E - t - 1;
            for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && k.push(t);
          } else k.push(E - t - 1);
        }
      } else if (M + y > E - x) {
        ((L = Math.max(M - (E - 2 * x), b)), N && (L = Math.max(L, y - E + v + 1)));
        for (let e = 0; e < L; e += 1) {
          const t = e - Math.floor(e / E) * E;
          w
            ? d.forEach((e, n) => {
                e.column === t && S.push(n);
              })
            : S.push(t);
        }
      }
      if (
        ((c.__preventObserver__ = !0),
        requestAnimationFrame(() => {
          c.__preventObserver__ = !1;
        }),
        'cards' === c.params.effect && d.length < y + 2 * x && (S.includes(l) && S.splice(S.indexOf(l), 1), k.includes(l) && k.splice(k.indexOf(l), 1)),
        T &&
          k.forEach((e) => {
            ((d[e].swiperLoopMoveDOM = !0), h.prepend(d[e]), (d[e].swiperLoopMoveDOM = !1));
          }),
        j &&
          S.forEach((e) => {
            ((d[e].swiperLoopMoveDOM = !0), h.append(d[e]), (d[e].swiperLoopMoveDOM = !1));
          }),
        c.recalcSlides(),
        'auto' === m.slidesPerView
          ? c.updateSlides()
          : w &&
            ((k.length > 0 && T) || (S.length > 0 && j)) &&
            c.slides.forEach((e, t) => {
              c.grid.updateSlide(t, e, c.slides);
            }),
        m.watchSlidesProgress && c.updateSlidesOffset(),
        n)
      )
        if (k.length > 0 && T) {
          if ('undefined' === typeof t) {
            const e = c.slidesGrid[C],
              t = c.slidesGrid[C + P] - e;
            s
              ? c.setTranslate(c.translate - t)
              : (c.slideTo(C + Math.ceil(P), 0, !1, !0),
                a && ((c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t), (c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t)));
          } else if (a) {
            const e = w ? k.length / m.grid.rows : k.length;
            (c.slideTo(c.activeIndex + e, 0, !1, !0), (c.touchEventsData.currentTranslate = c.translate));
          }
        } else if (S.length > 0 && j)
          if ('undefined' === typeof t) {
            const e = c.slidesGrid[C],
              t = c.slidesGrid[C - L] - e;
            s
              ? c.setTranslate(c.translate - t)
              : (c.slideTo(C - L, 0, !1, !0),
                a && ((c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t), (c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t)));
          } else {
            const e = w ? S.length / m.grid.rows : S.length;
            c.slideTo(c.activeIndex - e, 0, !1, !0);
          }
      if (((c.allowSlidePrev = f), (c.allowSlideNext = p), c.controller && c.controller.control && !o)) {
        const e = { slideRealIndex: t, direction: r, setTranslate: a, activeSlideIndex: l, byController: !0 };
        Array.isArray(c.controller.control)
          ? c.controller.control.forEach((t) => {
              !t.destroyed && t.params.loop && t.loopFix(u(u({}, e), {}, { slideTo: t.params.slidesPerView === m.slidesPerView && n }));
            })
          : c.controller.control instanceof c.constructor &&
            c.controller.control.params.loop &&
            c.controller.control.loopFix(u(u({}, e), {}, { slideTo: c.controller.control.params.slidesPerView === m.slidesPerView && n }));
      }
      c.emit('loopFix');
    },
    loopDestroy: function () {
      const e = this,
        { params: t, slidesEl: n } = e;
      if (!t.loop || !n || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const r = [];
      (e.slides.forEach((e) => {
        const t = 'undefined' === typeof e.swiperSlideIndex ? 1 * e.getAttribute('data-swiper-slide-index') : e.swiperSlideIndex;
        r[t] = e;
      }),
        e.slides.forEach((e) => {
          e.removeAttribute('data-swiper-slide-index');
        }),
        r.forEach((e) => {
          n.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0));
    },
  };
  var Yn = {
    setGrabCursor: function (e) {
      const t = this;
      if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
      const n = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
      (t.isElement && (t.__preventObserver__ = !0),
        (n.style.cursor = 'move'),
        (n.style.cursor = e ? 'grabbing' : 'grab'),
        t.isElement &&
          requestAnimationFrame(() => {
            t.__preventObserver__ = !1;
          }));
    },
    unsetGrabCursor: function () {
      const e = this;
      (e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode ||
        (e.isElement && (e.__preventObserver__ = !0),
        (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = ''),
        e.isElement &&
          requestAnimationFrame(() => {
            e.__preventObserver__ = !1;
          }));
    },
  };
  function $n(e, t, n) {
    const r = fn(),
      { params: a } = e,
      l = a.edgeSwipeDetection,
      i = a.edgeSwipeThreshold;
    return !l || !(n <= i || n >= r.innerWidth - i) || ('prevent' === l && (t.preventDefault(), !0));
  }
  function Qn(e) {
    const t = this,
      n = un();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    const a = t.touchEventsData;
    if ('pointerdown' === r.type) {
      if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
      a.pointerId = r.pointerId;
    } else 'touchstart' === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
    if ('touchstart' === r.type) return void $n(t, r, r.targetTouches[0].pageX);
    const { params: l, touches: i, enabled: o } = t;
    if (!o) return;
    if (!l.simulateTouch && 'mouse' === r.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let s = r.target;
    if (
      'wrapper' === l.touchEventsTarget &&
      !(function (e, t) {
        const n = fn();
        let r = t.contains(e);
        !r &&
          n.HTMLSlotElement &&
          t instanceof HTMLSlotElement &&
          ((r = [...t.assignedElements()].includes(e)),
          r ||
            (r = (function (e, t) {
              const n = [t];
              for (; n.length > 0; ) {
                const t = n.shift();
                if (e === t) return !0;
                n.push(...t.children, ...(t.shadowRoot ? t.shadowRoot.children : []), ...(t.assignedElements ? t.assignedElements() : []));
              }
            })(e, t)));
        return r;
      })(s, t.wrapperEl)
    )
      return;
    if ('which' in r && 3 === r.which) return;
    if ('button' in r && r.button > 0) return;
    if (a.isTouched && a.isMoved) return;
    const c = !!l.noSwipingClass && '' !== l.noSwipingClass,
      u = r.composedPath ? r.composedPath() : r.path;
    c && r.target && r.target.shadowRoot && u && (s = u[0]);
    const d = l.noSwipingSelector ? l.noSwipingSelector : '.'.concat(l.noSwipingClass),
      f = !(!r.target || !r.target.shadowRoot);
    if (
      l.noSwiping &&
      (f
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(n) {
                if (!n || n === un() || n === fn()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const r = n.closest(e);
                return r || n.getRootNode ? r || t(n.getRootNode().host) : null;
              })(t)
            );
          })(d, s)
        : s.closest(d))
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !s.closest(l.swipeHandler)) return;
    ((i.currentX = r.pageX), (i.currentY = r.pageY));
    const p = i.currentX,
      h = i.currentY;
    if (!$n(t, r, p)) return;
    (Object.assign(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
      (i.startX = p),
      (i.startY = h),
      (a.touchStartTime = hn()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (a.allowThresholdMove = !1));
    let m = !0;
    (s.matches(a.focusableElements) && ((m = !1), 'SELECT' === s.nodeName && (a.isTouched = !1)),
      n.activeElement &&
        n.activeElement.matches(a.focusableElements) &&
        n.activeElement !== s &&
        ('mouse' === r.pointerType || ('mouse' !== r.pointerType && !s.matches(a.focusableElements))) &&
        n.activeElement.blur());
    const g = m && t.allowTouchMove && l.touchStartPreventDefault;
    ((!l.touchStartForcePreventDefault && !g) || s.isContentEditable || r.preventDefault(),
      l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
      t.emit('touchStart', r));
  }
  function Xn(e) {
    const t = un(),
      n = this,
      r = n.touchEventsData,
      { params: a, touches: l, rtlTranslate: i, enabled: o } = n;
    if (!o) return;
    if (!a.simulateTouch && 'mouse' === e.pointerType) return;
    let s,
      c = e;
    if ((c.originalEvent && (c = c.originalEvent), 'pointermove' === c.type)) {
      if (null !== r.touchId) return;
      if (c.pointerId !== r.pointerId) return;
    }
    if ('touchmove' === c.type) {
      if (((s = [...c.changedTouches].find((e) => e.identifier === r.touchId)), !s || s.identifier !== r.touchId)) return;
    } else s = c;
    if (!r.isTouched) return void (r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', c));
    const u = s.pageX,
      d = s.pageY;
    if (c.preventedByNestedSwiper) return ((l.startX = u), void (l.startY = d));
    if (!n.allowTouchMove)
      return (c.target.matches(r.focusableElements) || (n.allowClick = !1), void (r.isTouched && (Object.assign(l, { startX: u, startY: d, currentX: u, currentY: d }), (r.touchStartTime = hn()))));
    if (a.touchReleaseOnEdges && !a.loop)
      if (n.isVertical()) {
        if ((d < l.startY && n.translate <= n.maxTranslate()) || (d > l.startY && n.translate >= n.minTranslate())) return ((r.isTouched = !1), void (r.isMoved = !1));
      } else {
        if (i && ((u > l.startX && -n.translate <= n.maxTranslate()) || (u < l.startX && -n.translate >= n.minTranslate()))) return;
        if (!i && ((u < l.startX && n.translate <= n.maxTranslate()) || (u > l.startX && n.translate >= n.minTranslate()))) return;
      }
    if (
      (t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== c.target && 'mouse' !== c.pointerType && t.activeElement.blur(),
      t.activeElement && c.target === t.activeElement && c.target.matches(r.focusableElements))
    )
      return ((r.isMoved = !0), void (n.allowClick = !1));
    (r.allowTouchCallbacks && n.emit('touchMove', c), (l.previousX = l.currentX), (l.previousY = l.currentY), (l.currentX = u), (l.currentY = d));
    const f = l.currentX - l.startX,
      p = l.currentY - l.startY;
    if (n.params.threshold && Math.sqrt(f ** 2 + p ** 2) < n.params.threshold) return;
    if ('undefined' === typeof r.isScrolling) {
      let e;
      (n.isHorizontal() && l.currentY === l.startY) || (n.isVertical() && l.currentX === l.startX)
        ? (r.isScrolling = !1)
        : f * f + p * p >= 25 && ((e = (180 * Math.atan2(Math.abs(p), Math.abs(f))) / Math.PI), (r.isScrolling = n.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle));
    }
    if (
      (r.isScrolling && n.emit('touchMoveOpposite', c),
      'undefined' === typeof r.startMoving && ((l.currentX === l.startX && l.currentY === l.startY) || (r.startMoving = !0)),
      r.isScrolling || ('touchmove' === c.type && r.preventTouchMoveFromPointerMove))
    )
      return void (r.isTouched = !1);
    if (!r.startMoving) return;
    ((n.allowClick = !1), !a.cssMode && c.cancelable && c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation());
    let h = n.isHorizontal() ? f : p,
      m = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
    (a.oneWayMovement && ((h = Math.abs(h) * (i ? 1 : -1)), (m = Math.abs(m) * (i ? 1 : -1))), (l.diff = h), (h *= a.touchRatio), i && ((h = -h), (m = -m)));
    const g = n.touchesDirection;
    ((n.swipeDirection = h > 0 ? 'prev' : 'next'), (n.touchesDirection = m > 0 ? 'prev' : 'next'));
    const v = n.params.loop && !a.cssMode,
      y = ('next' === n.touchesDirection && n.allowSlideNext) || ('prev' === n.touchesDirection && n.allowSlidePrev);
    if (!r.isMoved) {
      if ((v && y && n.loopFix({ direction: n.swipeDirection }), (r.startTranslate = n.getTranslate()), n.setTransition(0), n.animating)) {
        const e = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0, detail: { bySwiperTouchMove: !0 } });
        n.wrapperEl.dispatchEvent(e);
      }
      ((r.allowMomentumBounce = !1), !a.grabCursor || (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) || n.setGrabCursor(!0), n.emit('sliderFirstMove', c));
    }
    if ((new Date().getTime(), !1 !== a._loopSwapReset && r.isMoved && r.allowThresholdMove && g !== n.touchesDirection && v && y && Math.abs(h) >= 1))
      return (Object.assign(l, { startX: u, startY: d, currentX: u, currentY: d, startTranslate: r.currentTranslate }), (r.loopSwapReset = !0), void (r.startTranslate = r.currentTranslate));
    (n.emit('sliderMove', c), (r.isMoved = !0), (r.currentTranslate = h + r.startTranslate));
    let b = !0,
      x = a.resistanceRatio;
    if (
      (a.touchReleaseOnEdges && (x = 0),
      h > 0
        ? (v &&
            y &&
            r.allowThresholdMove &&
            r.currentTranslate >
              (a.centeredSlides
                ? n.minTranslate() -
                  n.slidesSizesGrid[n.activeIndex + 1] -
                  ('auto' !== a.slidesPerView && n.slides.length - a.slidesPerView >= 2 ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween : 0) -
                  n.params.spaceBetween
                : n.minTranslate()) &&
            n.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
          r.currentTranslate > n.minTranslate() && ((b = !1), a.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + h) ** x)))
        : h < 0 &&
          (v &&
            y &&
            r.allowThresholdMove &&
            r.currentTranslate <
              (a.centeredSlides
                ? n.maxTranslate() +
                  n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                  n.params.spaceBetween +
                  ('auto' !== a.slidesPerView && n.slides.length - a.slidesPerView >= 2 ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween : 0)
                : n.maxTranslate()) &&
            n.loopFix({
              direction: 'next',
              setTranslate: !0,
              activeSlideIndex: n.slides.length - ('auto' === a.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10))),
            }),
          r.currentTranslate < n.maxTranslate() && ((b = !1), a.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - h) ** x))),
      b && (c.preventedByNestedSwiper = !0),
      !n.allowSlideNext && 'next' === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev && 'prev' === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
      n.allowSlidePrev || n.allowSlideNext || (r.currentTranslate = r.startTranslate),
      a.threshold > 0)
    ) {
      if (!(Math.abs(h) > a.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
      if (!r.allowThresholdMove)
        return (
          (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          void (l.diff = n.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
        );
    }
    a.followFinger &&
      !a.cssMode &&
      (((a.freeMode && a.freeMode.enabled && n.freeMode) || a.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()),
      a.freeMode && a.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function Kn(e) {
    const t = this,
      n = t.touchEventsData;
    let r,
      a = e;
    a.originalEvent && (a = a.originalEvent);
    if ('touchend' === a.type || 'touchcancel' === a.type) {
      if (((r = [...a.changedTouches].find((e) => e.identifier === n.touchId)), !r || r.identifier !== n.touchId)) return;
    } else {
      if (null !== n.touchId) return;
      if (a.pointerId !== n.pointerId) return;
      r = a;
    }
    if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(a.type)) {
      if (!(['pointercancel', 'contextmenu'].includes(a.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    ((n.pointerId = null), (n.touchId = null));
    const { params: l, touches: i, rtlTranslate: o, slidesGrid: s, enabled: c } = t;
    if (!c) return;
    if (!l.simulateTouch && 'mouse' === a.pointerType) return;
    if ((n.allowTouchCallbacks && t.emit('touchEnd', a), (n.allowTouchCallbacks = !1), !n.isTouched))
      return (n.isMoved && l.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), void (n.startMoving = !1));
    l.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const u = hn(),
      d = u - n.touchStartTime;
    if (t.allowClick) {
      const e = a.path || (a.composedPath && a.composedPath());
      (t.updateClickedSlide((e && e[0]) || a.target, e), t.emit('tap click', a), d < 300 && u - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', a));
    }
    if (
      ((n.lastClickTime = hn()),
      pn(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched || !n.isMoved || !t.swipeDirection || (0 === i.diff && !n.loopSwapReset) || (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
    )
      return ((n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1));
    let f;
    if (((n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1), (f = l.followFinger ? (o ? t.translate : -t.translate) : -n.currentTranslate), l.cssMode)) return;
    if (l.freeMode && l.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: f });
    const p = f >= -t.maxTranslate() && !t.params.loop;
    let h = 0,
      m = t.slidesSizesGrid[0];
    for (let x = 0; x < s.length; x += x < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
      const e = x < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
      'undefined' !== typeof s[x + e] ? (p || (f >= s[x] && f < s[x + e])) && ((h = x), (m = s[x + e] - s[x])) : (p || f >= s[x]) && ((h = x), (m = s[s.length - 1] - s[s.length - 2]));
    }
    let g = null,
      v = null;
    l.rewind && (t.isBeginning ? (v = l.virtual && l.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (g = 0));
    const y = (f - s[h]) / m,
      b = h < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    if (d > l.longSwipesMs) {
      if (!l.longSwipes) return void t.slideTo(t.activeIndex);
      ('next' === t.swipeDirection && (y >= l.longSwipesRatio ? t.slideTo(l.rewind && t.isEnd ? g : h + b) : t.slideTo(h)),
        'prev' === t.swipeDirection && (y > 1 - l.longSwipesRatio ? t.slideTo(h + b) : null !== v && y < 0 && Math.abs(y) > l.longSwipesRatio ? t.slideTo(v) : t.slideTo(h)));
    } else {
      if (!l.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (a.target === t.navigation.nextEl || a.target === t.navigation.prevEl)
        ? a.target === t.navigation.nextEl
          ? t.slideTo(h + b)
          : t.slideTo(h)
        : ('next' === t.swipeDirection && t.slideTo(null !== g ? g : h + b), 'prev' === t.swipeDirection && t.slideTo(null !== v ? v : h));
    }
  }
  function Jn() {
    const e = this,
      { params: t, el: n } = e;
    if (n && 0 === n.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: a, snapGrid: l } = e,
      i = e.virtual && e.params.virtual.enabled;
    ((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses());
    const o = i && t.loop;
    (!('auto' === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o
      ? e.params.loop && !i
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = a),
      (e.allowSlideNext = r),
      e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow());
  }
  function Zn(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function er() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    let a;
    ((e.previousTranslate = e.translate),
      e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
    const l = e.maxTranslate() - e.minTranslate();
    ((a = 0 === l ? 0 : (e.translate - e.minTranslate()) / l), a !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit('setTranslate', e.translate, !1));
  }
  function tr(e) {
    const t = this;
    (In(t, e.target), t.params.cssMode || ('auto' !== t.params.slidesPerView && !t.params.autoHeight) || t.update());
  }
  function nr() {
    const e = this;
    e.documentTouchHandlerProceeded || ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
  }
  const rr = (e, t) => {
    const n = un(),
      { params: r, el: a, wrapperEl: l, device: i } = e,
      o = !!r.nested,
      s = 'on' === t ? 'addEventListener' : 'removeEventListener',
      c = t;
    a &&
      'string' !== typeof a &&
      (n[s]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: o }),
      a[s]('touchstart', e.onTouchStart, { passive: !1 }),
      a[s]('pointerdown', e.onTouchStart, { passive: !1 }),
      n[s]('touchmove', e.onTouchMove, { passive: !1, capture: o }),
      n[s]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
      n[s]('touchend', e.onTouchEnd, { passive: !0 }),
      n[s]('pointerup', e.onTouchEnd, { passive: !0 }),
      n[s]('pointercancel', e.onTouchEnd, { passive: !0 }),
      n[s]('touchcancel', e.onTouchEnd, { passive: !0 }),
      n[s]('pointerout', e.onTouchEnd, { passive: !0 }),
      n[s]('pointerleave', e.onTouchEnd, { passive: !0 }),
      n[s]('contextmenu', e.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) && a[s]('click', e.onClick, !0),
      r.cssMode && l[s]('scroll', e.onScroll),
      r.updateOnWindowResize ? e[c](i.ios || i.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', Jn, !0) : e[c]('observerUpdate', Jn, !0),
      a[s]('load', e.onLoad, { capture: !0 }));
  };
  var ar = {
    attachEvents: function () {
      const e = this,
        { params: t } = e;
      ((e.onTouchStart = Qn.bind(e)),
        (e.onTouchMove = Xn.bind(e)),
        (e.onTouchEnd = Kn.bind(e)),
        (e.onDocumentTouchStart = nr.bind(e)),
        t.cssMode && (e.onScroll = er.bind(e)),
        (e.onClick = Zn.bind(e)),
        (e.onLoad = tr.bind(e)),
        rr(e, 'on'));
    },
    detachEvents: function () {
      rr(this, 'off');
    },
  };
  const lr = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var ir = {
    setBreakpoint: function () {
      const e = this,
        { realIndex: t, initialized: n, params: r, el: a } = e,
        l = r.breakpoints;
      if (!l || (l && 0 === Object.keys(l).length)) return;
      const i = un(),
        o = 'window' !== r.breakpointsBase && r.breakpointsBase ? 'container' : r.breakpointsBase,
        s = ['window', 'container'].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : i.querySelector(r.breakpointsBase),
        c = e.getBreakpoint(l, o, s);
      if (!c || e.currentBreakpoint === c) return;
      const u = (c in l ? l[c] : void 0) || e.originalParams,
        d = lr(e, r),
        f = lr(e, u),
        p = e.params.grabCursor,
        h = u.grabCursor,
        m = r.enabled;
      (d && !f
        ? (a.classList.remove(''.concat(r.containerModifierClass, 'grid'), ''.concat(r.containerModifierClass, 'grid-column')), e.emitContainerClasses())
        : !d &&
          f &&
          (a.classList.add(''.concat(r.containerModifierClass, 'grid')),
          ((u.grid.fill && 'column' === u.grid.fill) || (!u.grid.fill && 'column' === r.grid.fill)) && a.classList.add(''.concat(r.containerModifierClass, 'grid-column')),
          e.emitContainerClasses()),
        p && !h ? e.unsetGrabCursor() : !p && h && e.setGrabCursor(),
        ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
          if ('undefined' === typeof u[t]) return;
          const n = r[t] && r[t].enabled,
            a = u[t] && u[t].enabled;
          (n && !a && e[t].disable(), !n && a && e[t].enable());
        }));
      const g = u.direction && u.direction !== r.direction,
        v = r.loop && (u.slidesPerView !== r.slidesPerView || g),
        y = r.loop;
      (g && n && e.changeDirection(), yn(e.params, u));
      const b = e.params.enabled,
        x = e.params.loop;
      (Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
        m && !b ? e.disable() : !m && b && e.enable(),
        (e.currentBreakpoint = c),
        e.emit('_beforeBreakpoint', u),
        n && (v ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !y && x ? (e.loopCreate(t), e.updateSlides()) : y && !x && e.loopDestroy()),
        e.emit('breakpoint', u));
    },
    getBreakpoint: function (e, t, n) {
      if ((void 0 === t && (t = 'window'), !e || ('container' === t && !n))) return;
      let r = !1;
      const a = fn(),
        l = 'window' === t ? a.innerHeight : n.clientHeight,
        i = Object.keys(e).map((e) => {
          if ('string' === typeof e && 0 === e.indexOf('@')) {
            const t = parseFloat(e.substr(1));
            return { value: l * t, point: e };
          }
          return { value: e, point: e };
        });
      i.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let o = 0; o < i.length; o += 1) {
        const { point: e, value: l } = i[o];
        'window' === t ? a.matchMedia('(min-width: '.concat(l, 'px)')).matches && (r = e) : l <= n.clientWidth && (r = e);
      }
      return r || 'max';
    },
  };
  var or = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: n, rtl: r, el: a, device: l } = e,
        i = (function (e, t) {
          const n = [];
          return (
            e.forEach((e) => {
              'object' === typeof e
                ? Object.keys(e).forEach((r) => {
                    e[r] && n.push(t + r);
                  })
                : 'string' === typeof e && n.push(t + e);
            }),
            n
          );
        })(
          [
            'initialized',
            n.direction,
            { 'free-mode': e.params.freeMode && n.freeMode.enabled },
            { autoheight: n.autoHeight },
            { rtl: r },
            { grid: n.grid && n.grid.rows > 1 },
            { 'grid-column': n.grid && n.grid.rows > 1 && 'column' === n.grid.fill },
            { android: l.android },
            { ios: l.ios },
            { 'css-mode': n.cssMode },
            { centered: n.cssMode && n.centeredSlides },
            { 'watch-progress': n.watchSlidesProgress },
          ],
          n.containerModifierClass,
        );
      (t.push(...i), a.classList.add(...t), e.emitContainerClasses());
    },
    removeClasses: function () {
      const { el: e, classNames: t } = this;
      e && 'string' !== typeof e && (e.classList.remove(...t), this.emitContainerClasses());
    },
  };
  var sr = {
      checkOverflow: function () {
        const e = this,
          { isLocked: t, params: n } = e,
          { slidesOffsetBefore: r } = n;
        if (r) {
          const t = e.slides.length - 1,
            n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
          e.isLocked = e.size > n;
        } else e.isLocked = 1 === e.snapGrid.length;
        (!0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
          !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
          t && t !== e.isLocked && (e.isEnd = !1),
          t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'));
      },
    },
    cr = {
      init: !0,
      direction: 'horizontal',
      oneWayMovement: !1,
      swiperElementNodeName: 'SWIPER-CONTAINER',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: 'swiper',
      enabled: !0,
      focusableElements: 'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: 'swiper-',
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-blank',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideFullyVisibleClass: 'swiper-slide-fully-visible',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      lazyPreloaderClass: 'swiper-lazy-preloader',
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function ur(e, t) {
    return function (n) {
      void 0 === n && (n = {});
      const r = Object.keys(n)[0],
        a = n[r];
      'object' === typeof a && null !== a
        ? (!0 === e[r] && (e[r] = { enabled: !0 }),
          'navigation' === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0),
          ['pagination', 'scrollbar'].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0),
          r in e && 'enabled' in a ? ('object' !== typeof e[r] || 'enabled' in e[r] || (e[r].enabled = !0), e[r] || (e[r] = { enabled: !1 }), yn(t, n)) : yn(t, n))
        : yn(t, n);
    };
  }
  const dr = { eventsEmitter: An, update: Bn, translate: Hn, transition: Un, slide: qn, loop: Gn, grabCursor: Yn, events: ar, breakpoints: ir, checkOverflow: sr, classes: or },
    fr = {};
  class pr {
    constructor() {
      let e, t;
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
      (1 === r.length && r[0].constructor && 'Object' === Object.prototype.toString.call(r[0]).slice(8, -1) ? (t = r[0]) : ([e, t] = r), t || (t = {}), (t = yn({}, t)), e && !t.el && (t.el = e));
      const l = un();
      if (t.el && 'string' === typeof t.el && l.querySelectorAll(t.el).length > 1) {
        const e = [];
        return (
          l.querySelectorAll(t.el).forEach((n) => {
            const r = yn({}, t, { el: n });
            e.push(new pr(r));
          }),
          e
        );
      }
      const i = this;
      ((i.__swiper__ = !0),
        (i.support = zn()),
        (i.device = _n({ userAgent: t.userAgent })),
        (i.browser = On()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        t.modules && Array.isArray(t.modules) && i.modules.push(...t.modules));
      const o = {};
      i.modules.forEach((e) => {
        e({ params: t, swiper: i, extendParams: ur(t, o), on: i.on.bind(i), once: i.once.bind(i), off: i.off.bind(i), emit: i.emit.bind(i) });
      });
      const s = yn({}, cr, o);
      return (
        (i.params = yn({}, s, fr, t)),
        (i.originalParams = yn({}, i.params)),
        (i.passedParams = yn({}, t)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => 'horizontal' === i.params.direction,
          isVertical: () => 'vertical' === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit('_swiper'),
        i.params.init && i.init(),
        i
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            marginRight: 'marginBottom',
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: n } = this,
        r = Nn(wn(t, '.'.concat(n.slideClass, ', swiper-slide'))[0]);
      return Nn(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.find((t) => 1 * t.getAttribute('data-swiper-slide-index') === e));
    }
    getSlideIndexWhenGrid(e) {
      return (
        this.grid &&
          this.params.grid &&
          this.params.grid.rows > 1 &&
          ('column' === this.params.grid.fill ? (e = Math.floor(e / this.params.grid.rows)) : 'row' === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))),
        e
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = wn(e, '.'.concat(t.slideClass, ', swiper-slide'));
    }
    enable() {
      const e = this;
      e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
    }
    disable() {
      const e = this;
      e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
    }
    setProgress(e, t) {
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = n.minTranslate(),
        a = (n.maxTranslate() - r) * e + r;
      (n.translateTo(a, 'undefined' === typeof t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses());
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(' ').filter((t) => 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass));
      e.emit('_containerClasses', t.join(' '));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ''
        : e.className
            .split(' ')
            .filter((e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass))
            .join(' ');
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      (e.slides.forEach((n) => {
        const r = e.getSlideClasses(n);
        (t.push({ slideEl: n, classNames: r }), e.emit('_slideClass', n, r));
      }),
        e.emit('_slideClasses', t));
    }
    slidesPerViewDynamic(e, t) {
      (void 0 === e && (e = 'current'), void 0 === t && (t = !1));
      const { params: n, slides: r, slidesGrid: a, slidesSizesGrid: l, size: i, activeIndex: o } = this;
      let s = 1;
      if ('number' === typeof n.slidesPerView) return n.slidesPerView;
      if (n.centeredSlides) {
        let e,
          t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
        for (let n = o + 1; n < r.length; n += 1) r[n] && !e && ((t += Math.ceil(r[n].swiperSlideSize)), (s += 1), t > i && (e = !0));
        for (let n = o - 1; n >= 0; n -= 1) r[n] && !e && ((t += r[n].swiperSlideSize), (s += 1), t > i && (e = !0));
      } else if ('current' === e)
        for (let c = o + 1; c < r.length; c += 1) {
          (t ? a[c] + l[c] - a[o] < i : a[c] - a[o] < i) && (s += 1);
        }
      else
        for (let c = o - 1; c >= 0; c -= 1) {
          a[o] - a[c] < i && (s += 1);
        }
      return s;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: n } = e;
      function r() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        (e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses());
      }
      let a;
      if (
        (n.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && In(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        n.freeMode && n.freeMode.enabled && !n.cssMode)
      )
        (r(), n.autoHeight && e.updateAutoHeight());
      else {
        if (('auto' === n.slidesPerView || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
          const t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
          a = e.slideTo(t.length - 1, 0, !1, !0);
        } else a = e.slideTo(e.activeIndex, 0, !1, !0);
        a || r();
      }
      (n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update'));
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const n = this,
        r = n.params.direction;
      return (
        e || (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
        e === r ||
          ('horizontal' !== e && 'vertical' !== e) ||
          (n.el.classList.remove(''.concat(n.params.containerModifierClass).concat(r)),
          n.el.classList.add(''.concat(n.params.containerModifierClass).concat(e)),
          n.emitContainerClasses(),
          (n.params.direction = e),
          n.slides.forEach((t) => {
            'vertical' === e ? (t.style.width = '') : (t.style.height = '');
          }),
          n.emit('changeDirection'),
          t && n.update()),
        n
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && 'rtl' === e) ||
        (!t.rtl && 'ltr' === e) ||
        ((t.rtl = 'rtl' === e),
        (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(''.concat(t.params.containerModifierClass, 'rtl')), (t.el.dir = 'rtl'))
          : (t.el.classList.remove(''.concat(t.params.containerModifierClass, 'rtl')), (t.el.dir = 'ltr')),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let n = e || t.params.el;
      if (('string' === typeof n && (n = document.querySelector(n)), !n)) return !1;
      ((n.swiper = t), n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0));
      const r = () => '.'.concat((t.params.wrapperClass || '').trim().split(' ').join('.'));
      let a = (() => {
        if (n && n.shadowRoot && n.shadowRoot.querySelector) {
          return n.shadowRoot.querySelector(r());
        }
        return wn(n, r())[0];
      })();
      return (
        !a &&
          t.params.createElements &&
          ((a = Sn('div', t.params.wrapperClass)),
          n.append(a),
          wn(n, '.'.concat(t.params.slideClass)).forEach((e) => {
            a.append(e);
          })),
        Object.assign(t, {
          el: n,
          wrapperEl: a,
          slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : a,
          hostEl: t.isElement ? n.parentNode.host : n,
          mounted: !0,
          rtl: 'rtl' === n.dir.toLowerCase() || 'rtl' === En(n, 'direction'),
          rtlTranslate: 'horizontal' === t.params.direction && ('rtl' === n.dir.toLowerCase() || 'rtl' === En(n, 'direction')),
          wrongRTL: '-webkit-box' === En(a, 'display'),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      (t.emit('beforeInit'),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0)
          : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents());
      const n = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        n.forEach((e) => {
          e.complete
            ? In(t, e)
            : e.addEventListener('load', (e) => {
                In(t, e.target);
              });
        }),
        Wn(t),
        (t.initialized = !0),
        Wn(t),
        t.emit('init'),
        t.emit('afterInit'),
        t
      );
    }
    destroy(e, t) {
      (void 0 === e && (e = !0), void 0 === t && (t = !0));
      const n = this,
        { params: r, el: a, wrapperEl: l, slides: i } = n;
      return (
        'undefined' === typeof n.params ||
          n.destroyed ||
          (n.emit('beforeDestroy'),
          (n.initialized = !1),
          n.detachEvents(),
          r.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            a && 'string' !== typeof a && a.removeAttribute('style'),
            l && l.removeAttribute('style'),
            i &&
              i.length &&
              i.forEach((e) => {
                (e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                  e.removeAttribute('style'),
                  e.removeAttribute('data-swiper-slide-index'));
              })),
          n.emit('destroy'),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          !1 !== e &&
            (n.el && 'string' !== typeof n.el && (n.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (Pa) {}
                try {
                  delete t[e];
                } catch (Pa) {}
              });
            })(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      yn(fr, e);
    }
    static get extendedDefaults() {
      return fr;
    }
    static get defaults() {
      return cr;
    }
    static installModule(e) {
      pr.prototype.__modules__ || (pr.prototype.__modules__ = []);
      const t = pr.prototype.__modules__;
      'function' === typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((e) => pr.installModule(e)), pr) : (pr.installModule(e), pr);
    }
  }
  (Object.keys(dr).forEach((e) => {
    Object.keys(dr[e]).forEach((t) => {
      pr.prototype[t] = dr[e][t];
    });
  }),
    pr.use([
      function (e) {
        let { swiper: t, on: n, emit: r } = e;
        const a = fn();
        let l = null,
          i = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (r('beforeResize'), r('resize'));
          },
          s = () => {
            t && !t.destroyed && t.initialized && r('orientationchange');
          };
        (n('init', () => {
          t.params.resizeObserver && 'undefined' !== typeof a.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((l = new ResizeObserver((e) => {
                i = a.requestAnimationFrame(() => {
                  const { width: n, height: r } = t;
                  let a = n,
                    l = r;
                  (e.forEach((e) => {
                    let { contentBoxSize: n, contentRect: r, target: i } = e;
                    (i && i !== t.el) || ((a = r ? r.width : (n[0] || n).inlineSize), (l = r ? r.height : (n[0] || n).blockSize));
                  }),
                    (a === n && l === r) || o());
                });
              })),
              l.observe(t.el))
            : (a.addEventListener('resize', o), a.addEventListener('orientationchange', s));
        }),
          n('destroy', () => {
            (i && a.cancelAnimationFrame(i), l && l.unobserve && t.el && (l.unobserve(t.el), (l = null)), a.removeEventListener('resize', o), a.removeEventListener('orientationchange', s));
          }));
      },
      function (e) {
        let { swiper: t, extendParams: n, on: r, emit: a } = e;
        const l = [],
          i = fn(),
          o = function (e, n) {
            void 0 === n && (n = {});
            const r = new (i.MutationObserver || i.WebkitMutationObserver)((e) => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a('observerUpdate', e[0]);
              const n = function () {
                a('observerUpdate', e[0]);
              };
              i.requestAnimationFrame ? i.requestAnimationFrame(n) : i.setTimeout(n, 0);
            });
            (r.observe(e, {
              attributes: 'undefined' === typeof n.attributes || n.attributes,
              childList: t.isElement || ('undefined' === typeof n.childList || n).childList,
              characterData: 'undefined' === typeof n.characterData || n.characterData,
            }),
              l.push(r));
          };
        (n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          r('init', () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = (function (e, t) {
                  const n = [];
                  let r = e.parentElement;
                  for (; r; ) (t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement));
                  return n;
                })(t.hostEl);
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              (o(t.hostEl, { childList: t.params.observeSlideChildren }), o(t.wrapperEl, { attributes: !1 }));
            }
          }),
          r('destroy', () => {
            (l.forEach((e) => {
              e.disconnect();
            }),
              l.splice(0, l.length));
          }));
      },
    ]));
  const hr = [
    'eventsPrefix',
    'injectStyles',
    'injectStylesUrls',
    'modules',
    'init',
    '_direction',
    'oneWayMovement',
    'swiperElementNodeName',
    'touchEventsTarget',
    'initialSlide',
    '_speed',
    'cssMode',
    'updateOnWindowResize',
    'resizeObserver',
    'nested',
    'focusableElements',
    '_enabled',
    '_width',
    '_height',
    'preventInteractionOnTransition',
    'userAgent',
    'url',
    '_edgeSwipeDetection',
    '_edgeSwipeThreshold',
    '_freeMode',
    '_autoHeight',
    'setWrapperSize',
    'virtualTranslate',
    '_effect',
    'breakpoints',
    'breakpointsBase',
    '_spaceBetween',
    '_slidesPerView',
    'maxBackfaceHiddenSlides',
    '_grid',
    '_slidesPerGroup',
    '_slidesPerGroupSkip',
    '_slidesPerGroupAuto',
    '_centeredSlides',
    '_centeredSlidesBounds',
    '_slidesOffsetBefore',
    '_slidesOffsetAfter',
    'normalizeSlideIndex',
    '_centerInsufficientSlides',
    '_watchOverflow',
    'roundLengths',
    'touchRatio',
    'touchAngle',
    'simulateTouch',
    '_shortSwipes',
    '_longSwipes',
    'longSwipesRatio',
    'longSwipesMs',
    '_followFinger',
    'allowTouchMove',
    '_threshold',
    'touchMoveStopPropagation',
    'touchStartPreventDefault',
    'touchStartForcePreventDefault',
    'touchReleaseOnEdges',
    'uniqueNavElements',
    '_resistance',
    '_resistanceRatio',
    '_watchSlidesProgress',
    '_grabCursor',
    'preventClicks',
    'preventClicksPropagation',
    '_slideToClickedSlide',
    '_loop',
    'loopAdditionalSlides',
    'loopAddBlankSlides',
    'loopPreventsSliding',
    '_rewind',
    '_allowSlidePrev',
    '_allowSlideNext',
    '_swipeHandler',
    '_noSwiping',
    'noSwipingClass',
    'noSwipingSelector',
    'passiveListeners',
    'containerModifierClass',
    'slideClass',
    'slideActiveClass',
    'slideVisibleClass',
    'slideFullyVisibleClass',
    'slideNextClass',
    'slidePrevClass',
    'slideBlankClass',
    'wrapperClass',
    'lazyPreloaderClass',
    'lazyPreloadPrevNext',
    'runCallbacksOnInit',
    'observer',
    'observeParents',
    'observeSlideChildren',
    'a11y',
    '_autoplay',
    '_controller',
    'coverflowEffect',
    'cubeEffect',
    'fadeEffect',
    'flipEffect',
    'creativeEffect',
    'cardsEffect',
    'hashNavigation',
    'history',
    'keyboard',
    'mousewheel',
    '_navigation',
    '_pagination',
    'parallax',
    '_scrollbar',
    '_thumbs',
    'virtual',
    'zoom',
    'control',
  ];
  function mr(e) {
    return 'object' === typeof e && null !== e && e.constructor && 'Object' === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__;
  }
  function gr(e, t) {
    const n = ['__proto__', 'constructor', 'prototype'];
    Object.keys(t)
      .filter((e) => n.indexOf(e) < 0)
      .forEach((n) => {
        'undefined' === typeof e[n] ? (e[n] = t[n]) : mr(t[n]) && mr(e[n]) && Object.keys(t[n]).length > 0 ? (t[n].__swiper__ ? (e[n] = t[n]) : gr(e[n], t[n])) : (e[n] = t[n]);
      });
  }
  function vr(e) {
    return (void 0 === e && (e = {}), e.navigation && 'undefined' === typeof e.navigation.nextEl && 'undefined' === typeof e.navigation.prevEl);
  }
  function yr(e) {
    return (void 0 === e && (e = {}), e.pagination && 'undefined' === typeof e.pagination.el);
  }
  function br(e) {
    return (void 0 === e && (e = {}), e.scrollbar && 'undefined' === typeof e.scrollbar.el);
  }
  function xr(e) {
    void 0 === e && (e = '');
    const t = e
        .split(' ')
        .map((e) => e.trim())
        .filter((e) => !!e),
      n = [];
    return (
      t.forEach((e) => {
        n.indexOf(e) < 0 && n.push(e);
      }),
      n.join(' ')
    );
  }
  function wr(e) {
    return (void 0 === e && (e = ''), e ? (e.includes('swiper-wrapper') ? e : 'swiper-wrapper '.concat(e)) : 'swiper-wrapper');
  }
  const kr = ['className', 'tag', 'wrapperTag', 'children', 'onSwiper'],
    Sr = ['tag', 'children', 'className', 'swiper', 'zoom', 'lazy', 'virtualIndex', 'swiperSlideIndex'];
  function Er() {
    return (
      (Er = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Er.apply(this, arguments)
    );
  }
  function Nr(e) {
    return e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide');
  }
  function Cr(e) {
    const t = [];
    return (
      r.Children.toArray(e).forEach((e) => {
        Nr(e) ? t.push(e) : e.props && e.props.children && Cr(e.props.children).forEach((e) => t.push(e));
      }),
      t
    );
  }
  function jr(e) {
    const t = [],
      n = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
    return (
      r.Children.toArray(e).forEach((e) => {
        if (Nr(e)) t.push(e);
        else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
        else if (e.props && e.props.children) {
          const r = Cr(e.props.children);
          r.length > 0 ? r.forEach((e) => t.push(e)) : n['container-end'].push(e);
        } else n['container-end'].push(e);
      }),
      { slides: t, slots: n }
    );
  }
  function Tr(e, t) {
    return 'undefined' === typeof window ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
  }
  const Pr = (0, r.createContext)(null),
    Lr = (0, r.createContext)(null),
    Mr = (0, r.forwardRef)(function (e, t) {
      let n = void 0 === e ? {} : e,
        { className: a, tag: i = 'div', wrapperTag: o = 'div', children: s, onSwiper: c } = n,
        d = l(n, kr),
        f = !1;
      const [p, h] = (0, r.useState)('swiper'),
        [m, g] = (0, r.useState)(null),
        [v, y] = (0, r.useState)(!1),
        b = (0, r.useRef)(!1),
        x = (0, r.useRef)(null),
        w = (0, r.useRef)(null),
        k = (0, r.useRef)(null),
        S = (0, r.useRef)(null),
        E = (0, r.useRef)(null),
        N = (0, r.useRef)(null),
        C = (0, r.useRef)(null),
        j = (0, r.useRef)(null),
        {
          params: T,
          passedParams: P,
          rest: L,
          events: M,
        } = (function (e, t) {
          (void 0 === e && (e = {}), void 0 === t && (t = !0));
          const n = { on: {} },
            r = {},
            a = {};
          (gr(n, cr), (n._emitClasses = !0), (n.init = !1));
          const l = {},
            i = hr.map((e) => e.replace(/_/, '')),
            o = Object.assign({}, e);
          return (
            Object.keys(o).forEach((o) => {
              'undefined' !== typeof e[o] &&
                (i.indexOf(o) >= 0
                  ? mr(e[o])
                    ? ((n[o] = {}), (a[o] = {}), gr(n[o], e[o]), gr(a[o], e[o]))
                    : ((n[o] = e[o]), (a[o] = e[o]))
                  : 0 === o.search(/on[A-Z]/) && 'function' === typeof e[o]
                    ? t
                      ? (r[''.concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o])
                      : (n.on[''.concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o])
                    : (l[o] = e[o]));
            }),
            ['navigation', 'pagination', 'scrollbar'].forEach((e) => {
              (!0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]);
            }),
            { params: n, passedParams: a, rest: l, events: r }
          );
        })(d),
        { slides: z, slots: _ } = jr(s),
        O = () => {
          y(!v);
        };
      Object.assign(T.on, {
        _containerClasses(e, t) {
          h(t);
        },
      });
      const A = () => {
        (Object.assign(T.on, M), (f = !0));
        const e = u({}, T);
        if ((delete e.wrapperClass, (w.current = new pr(e)), w.current.virtual && w.current.params.virtual.enabled)) {
          w.current.virtual.slides = z;
          const e = { cache: !1, slides: z, renderExternal: g, renderExternalUpdate: !1 };
          (gr(w.current.params.virtual, e), gr(w.current.originalParams.virtual, e));
        }
      };
      (x.current || A(), w.current && w.current.on('_beforeBreakpoint', O));
      return (
        (0, r.useEffect)(() => () => {
          w.current && w.current.off('_beforeBreakpoint', O);
        }),
        (0, r.useEffect)(() => {
          !b.current && w.current && (w.current.emitSlidesClasses(), (b.current = !0));
        }),
        Tr(() => {
          if ((t && (t.current = x.current), x.current))
            return (
              w.current.destroyed && A(),
              (function (e, t) {
                let { el: n, nextEl: r, prevEl: a, paginationEl: l, scrollbarEl: i, swiper: o } = e;
                (vr(t) && r && a && ((o.params.navigation.nextEl = r), (o.originalParams.navigation.nextEl = r), (o.params.navigation.prevEl = a), (o.originalParams.navigation.prevEl = a)),
                  yr(t) && l && ((o.params.pagination.el = l), (o.originalParams.pagination.el = l)),
                  br(t) && i && ((o.params.scrollbar.el = i), (o.originalParams.scrollbar.el = i)),
                  o.init(n));
              })({ el: x.current, nextEl: E.current, prevEl: N.current, paginationEl: C.current, scrollbarEl: j.current, swiper: w.current }, T),
              c && !w.current.destroyed && c(w.current),
              () => {
                w.current && !w.current.destroyed && w.current.destroy(!0, !1);
              }
            );
        }, []),
        Tr(() => {
          !f &&
            M &&
            w.current &&
            Object.keys(M).forEach((e) => {
              w.current.on(e, M[e]);
            });
          const e = (function (e, t, n, r, a) {
            const l = [];
            if (!t) return l;
            const i = (e) => {
              l.indexOf(e) < 0 && l.push(e);
            };
            if (n && r) {
              const e = r.map(a),
                t = n.map(a);
              (e.join('') !== t.join('') && i('children'), r.length !== n.length && i('children'));
            }
            return (
              hr
                .filter((e) => '_' === e[0])
                .map((e) => e.replace(/_/, ''))
                .forEach((n) => {
                  if (n in e && n in t)
                    if (mr(e[n]) && mr(t[n])) {
                      const r = Object.keys(e[n]),
                        a = Object.keys(t[n]);
                      r.length !== a.length
                        ? i(n)
                        : (r.forEach((r) => {
                            e[n][r] !== t[n][r] && i(n);
                          }),
                          a.forEach((r) => {
                            e[n][r] !== t[n][r] && i(n);
                          }));
                    } else e[n] !== t[n] && i(n);
                }),
              l
            );
          })(P, k.current, z, S.current, (e) => e.key);
          return (
            (k.current = P),
            (S.current = z),
            e.length &&
              w.current &&
              !w.current.destroyed &&
              (function (e) {
                let { swiper: t, slides: n, passedParams: r, changedParams: a, nextEl: l, prevEl: i, scrollbarEl: o, paginationEl: s } = e;
                const c = a.filter((e) => 'children' !== e && 'direction' !== e && 'wrapperClass' !== e),
                  { params: u, pagination: d, navigation: f, scrollbar: p, virtual: h, thumbs: m } = t;
                let g, v, y, b, x, w, k, S;
                (a.includes('thumbs') && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && u.thumbs && (!u.thumbs.swiper || u.thumbs.swiper.destroyed) && (g = !0),
                  a.includes('controller') && r.controller && r.controller.control && u.controller && !u.controller.control && (v = !0),
                  a.includes('pagination') && r.pagination && (r.pagination.el || s) && (u.pagination || !1 === u.pagination) && d && !d.el && (y = !0),
                  a.includes('scrollbar') && r.scrollbar && (r.scrollbar.el || o) && (u.scrollbar || !1 === u.scrollbar) && p && !p.el && (b = !0),
                  a.includes('navigation') &&
                    r.navigation &&
                    (r.navigation.prevEl || i) &&
                    (r.navigation.nextEl || l) &&
                    (u.navigation || !1 === u.navigation) &&
                    f &&
                    !f.prevEl &&
                    !f.nextEl &&
                    (x = !0));
                const E = (e) => {
                  t[e] &&
                    (t[e].destroy(),
                    'navigation' === e
                      ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), (u[e].prevEl = void 0), (u[e].nextEl = void 0), (t[e].prevEl = void 0), (t[e].nextEl = void 0))
                      : (t.isElement && t[e].el.remove(), (u[e].el = void 0), (t[e].el = void 0)));
                };
                (a.includes('loop') && t.isElement && (u.loop && !r.loop ? (w = !0) : !u.loop && r.loop ? (k = !0) : (S = !0)),
                  c.forEach((e) => {
                    if (mr(u[e]) && mr(r[e])) (Object.assign(u[e], r[e]), ('navigation' !== e && 'pagination' !== e && 'scrollbar' !== e) || !('enabled' in r[e]) || r[e].enabled || E(e));
                    else {
                      const t = r[e];
                      (!0 !== t && !1 !== t) || ('navigation' !== e && 'pagination' !== e && 'scrollbar' !== e) ? (u[e] = r[e]) : !1 === t && E(e);
                    }
                  }),
                  c.includes('controller') && !v && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control),
                  a.includes('children') && n && h && u.virtual.enabled ? ((h.slides = n), h.update(!0)) : a.includes('virtual') && h && u.virtual.enabled && (n && (h.slides = n), h.update(!0)),
                  a.includes('children') && n && u.loop && (S = !0),
                  g && m.init() && m.update(!0));
                (v && (t.controller.control = u.controller.control),
                  y &&
                    (!t.isElement || (s && 'string' !== typeof s) || ((s = document.createElement('div')), s.classList.add('swiper-pagination'), s.part.add('pagination'), t.el.appendChild(s)),
                    s && (u.pagination.el = s),
                    d.init(),
                    d.render(),
                    d.update()),
                  b &&
                    (!t.isElement || (o && 'string' !== typeof o) || ((o = document.createElement('div')), o.classList.add('swiper-scrollbar'), o.part.add('scrollbar'), t.el.appendChild(o)),
                    o && (u.scrollbar.el = o),
                    p.init(),
                    p.updateSize(),
                    p.setTranslate()),
                  x &&
                    (t.isElement &&
                      ((l && 'string' !== typeof l) ||
                        ((l = document.createElement('div')), l.classList.add('swiper-button-next'), Tn(l, t.hostEl.constructor.nextButtonSvg), l.part.add('button-next'), t.el.appendChild(l)),
                      (i && 'string' !== typeof i) ||
                        ((i = document.createElement('div')), i.classList.add('swiper-button-prev'), Tn(i, t.hostEl.constructor.prevButtonSvg), i.part.add('button-prev'), t.el.appendChild(i))),
                    l && (u.navigation.nextEl = l),
                    i && (u.navigation.prevEl = i),
                    f.init(),
                    f.update()),
                  a.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
                  a.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
                  a.includes('direction') && t.changeDirection(r.direction, !1),
                  (w || S) && t.loopDestroy(),
                  (k || S) && t.loopCreate(),
                  t.update());
              })({ swiper: w.current, slides: z, passedParams: P, changedParams: e, nextEl: E.current, prevEl: N.current, scrollbarEl: j.current, paginationEl: C.current }),
            () => {
              M &&
                w.current &&
                Object.keys(M).forEach((e) => {
                  w.current.off(e, M[e]);
                });
            }
          );
        }),
        Tr(() => {
          ((e) => {
            !e ||
              e.destroyed ||
              !e.params.virtual ||
              (e.params.virtual && !e.params.virtual.enabled) ||
              (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit('_virtualUpdated'), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
          })(w.current);
        }, [m]),
        r.createElement(
          i,
          Er({ ref: x, className: xr(''.concat(p).concat(a ? ' '.concat(a) : '')) }, L),
          r.createElement(
            Lr.Provider,
            { value: w.current },
            _['container-start'],
            r.createElement(
              o,
              { className: wr(T.wrapperClass) },
              _['wrapper-start'],
              T.virtual
                ? (function (e, t, n) {
                    if (!n) return null;
                    const a = (e) => {
                        let n = e;
                        return (e < 0 ? (n = t.length + e) : n >= t.length && (n -= t.length), n);
                      },
                      l = e.isHorizontal() ? { [e.rtlTranslate ? 'right' : 'left']: ''.concat(n.offset, 'px') } : { top: ''.concat(n.offset, 'px') },
                      { from: i, to: o } = n,
                      s = e.params.loop ? -t.length : 0,
                      c = e.params.loop ? 2 * t.length : t.length,
                      u = [];
                    for (let r = s; r < c; r += 1) r >= i && r <= o && u.push(t[a(r)]);
                    return u.map((t, n) => r.cloneElement(t, { swiper: e, style: l, key: t.props.virtualIndex || t.key || 'slide-'.concat(n) }));
                  })(w.current, z, m)
                : z.map((e, t) => r.cloneElement(e, { swiper: w.current, swiperSlideIndex: t })),
              _['wrapper-end'],
            ),
            vr(T) && r.createElement(r.Fragment, null, r.createElement('div', { ref: N, className: 'swiper-button-prev' }), r.createElement('div', { ref: E, className: 'swiper-button-next' })),
            br(T) && r.createElement('div', { ref: j, className: 'swiper-scrollbar' }),
            yr(T) && r.createElement('div', { ref: C, className: 'swiper-pagination' }),
            _['container-end'],
          ),
        )
      );
    });
  Mr.displayName = 'Swiper';
  const zr = (0, r.forwardRef)(function (e, t) {
    let n = void 0 === e ? {} : e,
      { tag: a = 'div', children: i, className: o = '', swiper: s, zoom: c, lazy: u, virtualIndex: d, swiperSlideIndex: f } = n,
      p = l(n, Sr);
    const h = (0, r.useRef)(null),
      [m, g] = (0, r.useState)('swiper-slide'),
      [v, y] = (0, r.useState)(!1);
    function b(e, t, n) {
      t === h.current && g(n);
    }
    (Tr(() => {
      if (('undefined' !== typeof f && (h.current.swiperSlideIndex = f), t && (t.current = h.current), h.current && s)) {
        if (!s.destroyed)
          return (
            s.on('_slideClass', b),
            () => {
              s && s.off('_slideClass', b);
            }
          );
        'swiper-slide' !== m && g('swiper-slide');
      }
    }),
      Tr(() => {
        s && h.current && !s.destroyed && g(s.getSlideClasses(h.current));
      }, [s]));
    const x = {
        isActive: m.indexOf('swiper-slide-active') >= 0,
        isVisible: m.indexOf('swiper-slide-visible') >= 0,
        isPrev: m.indexOf('swiper-slide-prev') >= 0,
        isNext: m.indexOf('swiper-slide-next') >= 0,
      },
      w = () => ('function' === typeof i ? i(x) : i);
    return r.createElement(
      a,
      Er(
        {
          ref: h,
          className: xr(''.concat(m).concat(o ? ' '.concat(o) : '')),
          'data-swiper-slide-index': d,
          onLoad: () => {
            y(!0);
          },
        },
        p,
      ),
      c &&
        r.createElement(
          Pr.Provider,
          { value: x },
          r.createElement(
            'div',
            { className: 'swiper-zoom-container', 'data-swiper-zoom': 'number' === typeof c ? c : void 0 },
            w(),
            u && !v && r.createElement('div', { className: 'swiper-lazy-preloader' }),
          ),
        ),
      !c && r.createElement(Pr.Provider, { value: x }, w(), u && !v && r.createElement('div', { className: 'swiper-lazy-preloader' })),
    );
  });
  function _r(e) {
    let { swiper: t, extendParams: n, on: r, emit: a } = e;
    function l(e) {
      let n;
      return e && 'string' === typeof e && t.isElement && ((n = t.el.querySelector(e) || t.hostEl.querySelector(e)), n)
        ? n
        : (e &&
            ('string' === typeof e && (n = [...document.querySelectorAll(e)]),
            t.params.uniqueNavElements && 'string' === typeof e && n && n.length > 1 && 1 === t.el.querySelectorAll(e).length ? (n = t.el.querySelector(e)) : n && 1 === n.length && (n = n[0])),
          e && !n ? e : n);
    }
    function i(e, n) {
      const r = t.params.navigation;
      (e = jn(e)).forEach((e) => {
        e &&
          (e.classList[n ? 'add' : 'remove'](...r.disabledClass.split(' ')),
          'BUTTON' === e.tagName && (e.disabled = n),
          t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? 'add' : 'remove'](r.lockClass));
      });
    }
    function o() {
      const { nextEl: e, prevEl: n } = t.navigation;
      if (t.params.loop) return (i(n, !1), void i(e, !1));
      (i(n, t.isBeginning && !t.params.rewind), i(e, t.isEnd && !t.params.rewind));
    }
    function s(e) {
      (e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a('navigationPrev')));
    }
    function c(e) {
      (e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a('navigationNext')));
    }
    function u() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = (function (e, t, n, r) {
          return (
            e.params.createElements &&
              Object.keys(r).forEach((a) => {
                if (!n[a] && !0 === n.auto) {
                  let l = wn(e.el, '.'.concat(r[a]))[0];
                  (l || ((l = Sn('div', r[a])), (l.className = r[a]), e.el.append(l)), (n[a] = l), (t[a] = l));
                }
              }),
            n
          );
        })(t, t.originalParams.navigation, t.params.navigation, { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' })),
        !e.nextEl && !e.prevEl)
      )
        return;
      let n = l(e.nextEl),
        r = l(e.prevEl);
      (Object.assign(t.navigation, { nextEl: n, prevEl: r }), (n = jn(n)), (r = jn(r)));
      const a = (n, r) => {
        (n && n.addEventListener('click', 'next' === r ? c : s), !t.enabled && n && n.classList.add(...e.lockClass.split(' ')));
      };
      (n.forEach((e) => a(e, 'next')), r.forEach((e) => a(e, 'prev')));
    }
    function d() {
      let { nextEl: e, prevEl: n } = t.navigation;
      ((e = jn(e)), (n = jn(n)));
      const r = (e, n) => {
        (e.removeEventListener('click', 'next' === n ? c : s), e.classList.remove(...t.params.navigation.disabledClass.split(' ')));
      };
      (e.forEach((e) => r(e, 'next')), n.forEach((e) => r(e, 'prev')));
    }
    (n({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock',
        navigationDisabledClass: 'swiper-navigation-disabled',
      },
    }),
      (t.navigation = { nextEl: null, prevEl: null }),
      r('init', () => {
        !1 === t.params.navigation.enabled ? f() : (u(), o());
      }),
      r('toEdge fromEdge lock unlock', () => {
        o();
      }),
      r('destroy', () => {
        d();
      }),
      r('enable disable', () => {
        let { nextEl: e, prevEl: n } = t.navigation;
        ((e = jn(e)), (n = jn(n)), t.enabled ? o() : [...e, ...n].filter((e) => !!e).forEach((e) => e.classList.add(t.params.navigation.lockClass)));
      }),
      r('click', (e, n) => {
        let { nextEl: r, prevEl: l } = t.navigation;
        ((r = jn(r)), (l = jn(l)));
        const i = n.target;
        let o = l.includes(i) || r.includes(i);
        if (t.isElement && !o) {
          const e = n.path || (n.composedPath && n.composedPath());
          e && (o = e.find((e) => r.includes(e) || l.includes(e)));
        }
        if (t.params.navigation.hideOnClick && !o) {
          if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === i || t.pagination.el.contains(i))) return;
          let e;
          (r.length ? (e = r[0].classList.contains(t.params.navigation.hiddenClass)) : l.length && (e = l[0].classList.contains(t.params.navigation.hiddenClass)),
            a(!0 === e ? 'navigationShow' : 'navigationHide'),
            [...r, ...l].filter((e) => !!e).forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass)));
        }
      }));
    const f = () => {
      (t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), d());
    };
    Object.assign(t.navigation, {
      enable: () => {
        (t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')), u(), o());
      },
      disable: f,
      update: o,
      init: u,
      destroy: d,
    });
  }
  zr.displayName = 'SwiperSlide';
  const Or = [
    {
      id: 1,
      heading: 'Wakiel: Your one-to-one brilliance partner!',
      paragraph:
        'Discover your true brilliance with Wakiel, your one-to-one partner in unlocking your potential! Our service connects you with dedicated brilliance partners who will guide and inspire you on your journey to success.',
      detail:
        "With Wakiel, you're not just embarking on a coaching or mentoring journey \u2013 you're entering a transformative partnership designed to unleash your inner genius. Our handpicked brilliance partners are more than just experts; they are visionaries, motivators, and catalysts for growth. Through personalized one-on-one sessions, our brilliance partners will delve deep into your unique strengths and challenges, helping you cultivate skills, break barriers, and exceed expectations. Whether you're aiming to excel in your career, nurture creativity, or foster personal development, Wakiel's brilliance partners will provide unwavering support and guidance, ensuring you achieve your goals with unwavering confidence. Experience the unparalleled impact of having a trusted brilliance partner at your side, propelling you towards greatness, one brilliant step at a time. Wakiel: Your one-to-one brilliance partner!",
      link: '/one-to-one-messages',
      img: Dt,
    },
    {
      id: 2,
      heading: "Delve into Wakiel's profile for insights into his illustrious career and a trail of successful cases.",
      paragraph: 'Meet Wakiel, your one-to-one brilliance partner! Unleash your full potential with a dedicated guide who will inspire and support you on your journey to greatness',
      detail:
        "With Wakiel by your side, you're not just getting a mentor; you're gaining access to a remarkable individual with a wealth of experience and a track record of success. Wakiel's profile is a testament to an illustrious career spanning various industries, where he has achieved exceptional feats and made a lasting impact. As you delve deeper into his profile, you'll discover a trail of successful cases and inspiring stories of individuals who have flourished under his guidance. With an unwavering commitment to empowering others, Wakiel's approach is rooted in personalized strategies tailored to your unique aspirations and challenges. From startup entrepreneurs to seasoned executives, Wakiel has nurtured countless talents, helping them navigate complexities and emerge victorious. Don't miss the opportunity to partner with Wakiel and experience the transformative journey that has earned him a reputation as a true brilliance partner. Delve into Wakiel's profile for insights into his illustrious career and a trail of successful cases.",
      link: '/wakiel-profile',
      img: Rt,
    },
    {
      id: 3,
      heading: 'Simplify hiring! Choose from a range of available Wakiels and their services online with ease.',
      paragraph: 'Simplify success with Wakiel, your one-to-one partner! Connect with passionate Wakiels for goal-oriented guidance.',
      detail:
        "When you choose Wakiel, you're choosing convenience and efficiency. Our user-friendly platform allows you to explore a wide selection of available Wakiels, each with a comprehensive profile showcasing their skills, experience, and areas of specialization. Say goodbye to the lengthy hiring processes and enjoy the ease of selecting your ideal brilliance partner from the comfort of your home or office. With transparent pricing and service options, you can effortlessly compare the Wakiels' offerings, ensuring you find the perfect match for your specific needs. Whether you're seeking career guidance, personal development insights, or entrepreneurial expertise, Wakiel's platform empowers you to make informed decisions and take charge of your journey to success. Simplify hiring! Choose from a range of available Wakiels and their services online with ease. Let the brilliance unfold as you embark on a transformative partnership, driving you towards a future of limitless possibilities.",
      link: '/easy-hiring',
      img: At,
    },
    {
      id: 4,
      heading: 'Empower your schedule: Wakiels offer online consultations and physical meetings!',
      paragraph: 'Unleash your brilliance with Wakiel, your one-to-one partner! Connect with dedicated brilliance partners for transformative guidance towards success.',
      detail:
        'We understand that your time is valuable, and flexibility is key to your success. With Wakiel, you have the freedom to choose between convenient online consultations and face-to-face meetings to suit your schedule and preferences. Need a quick brainstorming session during your lunch break? Opt for a virtual chat with your brilliance partner. Prefer a more in-depth discussion over a cup of coffee? Arrange a physical meeting at a location that works best for you. Our platform empowers you to take control of your journey, making it seamless and hassle-free to connect with your brilliance partner whenever and wherever you need guidance. With Wakiel, your schedule becomes a tool for growth, allowing you to maximize productivity and achieve exceptional results. Empower your schedule: Wakiels offer online consultations and physical meetings! Embrace the freedom to learn and thrive on your own terms, with a brilliance partner who adapts to your unique rhythm and helps you shine brighter with each interaction.',
      link: '/manage-schedules',
      img: It,
    },
    {
      id: 5,
      heading: 'Seamless, secure online transactions: complete payments with confidence and convenience.',
      paragraph: 'Transform with Wakiel, your one-to-one brilliance partner! Connect with handpicked brilliance partners dedicated to guiding you towards success.',
      detail:
        "At Wakiel, we prioritize your peace of mind, and that extends to our payment process. With our seamless and secure online transaction system, you can complete payments with confidence and convenience. Whether you're booking a single session or committing to a long-term partnership with your brilliance partner, our platform ensures that your financial transactions are protected with state-of-the-art security measures. Say goodbye to worries about data breaches or unauthorized access; our encrypted payment gateway guarantees the utmost privacy for your sensitive information. Embrace the simplicity of managing payments online, allowing you to focus on what truly matters \u2013 your growth and development with your trusted brilliance partner. With Wakiel, every step of your journey is designed to empower and uplift you, and our secure payment system is just one more way we make your experience exceptional. Seamless, secure online transactions: complete payments with confidence and convenience. Trust in our commitment to your success, and embark on a journey of self-discovery and achievement with your brilliance partner by your side.",
      link: '/online-transactions',
      img: Ft,
    },
  ];
  const Ar = function () {
      const [e, t] = (0, r.useState)(2),
        [n, a] = (0, r.useState)(30),
        l = me(),
        i = () => {
          window.innerWidth > 768 ? (t(2), a(40)) : window.innerWidth > 425 && window.innerWidth <= 768 ? (t(1), a(20)) : (t(1), a(15));
        };
      return (
        (0, r.useEffect)(
          () => (
            i(),
            window.addEventListener('resize', i),
            () => {
              window.removeEventListener('resize', i);
            }
          ),
          [],
        ),
        (0, Ht.jsxs)('section', {
          id: 'connect-with-us',
          className: 'px-4 py-12 max-w-7xl mx-auto',
          children: [
            (0, Ht.jsxs)('h1', {
              className: 'text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 relative inline-block',
              children: ['Connect With Us', (0, Ht.jsx)('span', { className: 'block w-16 h-1 bg-indigo-600 mx-auto mt-3 rounded' })],
            }),
            (0, Ht.jsx)(Mr, {
              spaceBetween: n,
              slidesPerView: e,
              modules: [_r],
              className: 'mySwiper',
              children: Or.map((e) =>
                (0, Ht.jsxs)(
                  zr,
                  {
                    className: 'p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center',
                    children: [
                      (0, Ht.jsx)('h2', { className: 'text-xl font-semibold text-gray-800 mb-3', children: e.heading }),
                      (0, Ht.jsx)('p', { className: 'text-gray-600 mb-5', children: e.paragraph }),
                      (0, Ht.jsx)('button', {
                        className: 'px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300',
                        onClick: () => l(e.link),
                        children: 'Read More',
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        })
      );
    },
    Rr = Pt('sparkles', [
      [
        'path',
        {
          d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
          key: '1s2grr',
        },
      ],
      ['path', { d: 'M20 2v4', key: '1rf3ol' }],
      ['path', { d: 'M22 4h-4', key: 'gwowj6' }],
      ['circle', { cx: '4', cy: '20', r: '2', key: '6kqj1y' }],
    ]),
    Dr = Pt('zap', [
      ['path', { d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z', key: '1xq2db' }],
    ]),
    Ir = Pt('arrow-right', [
      ['path', { d: 'M5 12h14', key: '1ays0h' }],
      ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
    ]),
    Fr = Pt('message-circle', [['path', { d: 'M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719', key: '1sd12s' }]]),
    Wr = Pt('user-check', [
      ['path', { d: 'm16 11 2 2 4-4', key: '9rsbq5' }],
      ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
      ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
    ]),
    Br = Pt('search', [
      ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
      ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
    ]),
    Hr = [
      {
        id: 1,
        title: 'Message',
        greenTitle: 'Privately',
        detail:
          'Your privacy is our priority. With end-to-end encryption, you can be sure that your personal messages stay between you and your lawyer, to ensure the privacy and security of the communication.',
        icon: (0, Ht.jsx)(Fr, { size: 40, strokeWidth: 1.5 }),
      },
      {
        id: 2,
        title: 'Easy',
        greenTitle: 'To Hire',
        detail:
          'Hiring a lawyer through Wakeel is simple and efficient. You can begin by providing essential details about your legal situation within a few clicks. Our intuitive case evaluation feature helps match you with lawyers who have expertise in handling cases similar to yours, ensuring you receive tailored legal assistance.',
        icon: (0, Ht.jsx)(Wr, { size: 40, strokeWidth: 1.5 }),
      },
      {
        id: 3,
        title: 'Find The',
        greenTitle: 'Best lawyer',
        detail:
          "With Wakiel's smart search and filtering options, users can quickly narrow down their search for the best lawyer. Whether it's based on specialization, location, ratings, or fee structure, the app's intuitive interface simplifies the process of finding the most suitable legal expert.",
        icon: (0, Ht.jsx)(Br, { size: 40, strokeWidth: 1.5 }),
      },
    ];
  const Vr = function () {
    return (0, Ht.jsxs)('section', {
      id: 'features',
      className: 'relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden',
      children: [
        (0, Ht.jsxs)('div', {
          className: 'absolute inset-0',
          children: [
            (0, Ht.jsx)('div', { className: 'absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary-green/10 to-emerald-600/10 rounded-full blur-3xl' }),
            (0, Ht.jsx)('div', { className: 'absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-accent-gold/10 to-yellow-500/10 rounded-full blur-3xl' }),
          ],
        }),
        (0, Ht.jsxs)('div', {
          className: 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: [
            (0, Ht.jsxs)('div', {
              className: 'text-center mb-16 lg:mb-20',
              children: [
                (0, Ht.jsxs)('div', {
                  className:
                    'inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-green/10 to-emerald-600/10 rounded-full text-primary-green font-semibold text-sm tracking-wide uppercase mb-4',
                  children: [(0, Ht.jsx)(Rr, { className: 'w-4 h-4 mr-2' }), 'Powerful Features'],
                }),
                (0, Ht.jsxs)('h2', {
                  className: 'text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-6',
                  children: [
                    'Everything You Need for',
                    (0, Ht.jsx)('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600', children: ' Legal Success' }),
                  ],
                }),
                (0, Ht.jsx)('p', {
                  className: 'text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed',
                  children: 'Discover powerful features designed to make legal assistance accessible, efficient, and reliable for everyone.',
                }),
              ],
            }),
            (0, Ht.jsx)('div', {
              className: 'space-y-16 lg:space-y-24',
              children: Hr.map((e, t) =>
                (0, Ht.jsxs)(
                  'div',
                  {
                    className: '\n                grid lg:grid-cols-2 gap-8 lg:gap-16 items-center\n                '.concat(t % 2 === 1 ? 'lg:grid-flow-col-dense' : '', '\n              '),
                    children: [
                      (0, Ht.jsxs)('div', {
                        className: 'space-y-6 '.concat(t % 2 === 1 ? 'lg:col-start-2' : ''),
                        children: [
                          (0, Ht.jsxs)('div', {
                            className: 'inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium text-gray-600',
                            children: [(0, Ht.jsx)('div', { className: 'w-2 h-2 bg-primary-green rounded-full mr-2 animate-pulse' }), 'Feature ', String(t + 1).padStart(2, '0')],
                          }),
                          (0, Ht.jsxs)('h3', {
                            className: 'text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight',
                            children: [
                              e.title,
                              e.greenTitle &&
                                (0, Ht.jsx)('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600', children: ' '.concat(e.greenTitle) }),
                            ],
                          }),
                          (0, Ht.jsx)('p', { className: 'text-lg lg:text-xl text-gray-600 leading-relaxed', children: e.detail }),
                          (0, Ht.jsxs)('div', {
                            className: 'flex flex-wrap gap-3 pt-4',
                            children: [
                              (0, Ht.jsxs)('div', {
                                className: 'flex items-center space-x-2 bg-primary-green/5 px-4 py-2 rounded-full',
                                children: [
                                  (0, Ht.jsx)(tn, { className: 'w-4 h-4 text-primary-green' }),
                                  (0, Ht.jsx)('span', { className: 'text-sm font-medium text-primary-green', children: 'Secure' }),
                                ],
                              }),
                              (0, Ht.jsxs)('div', {
                                className: 'flex items-center space-x-2 bg-accent-gold/5 px-4 py-2 rounded-full',
                                children: [(0, Ht.jsx)(Dr, { className: 'w-4 h-4 text-accent-gold' }), (0, Ht.jsx)('span', { className: 'text-sm font-medium text-accent-gold', children: 'Fast' })],
                              }),
                              (0, Ht.jsxs)('div', {
                                className: 'flex items-center space-x-2 bg-blue-500/5 px-4 py-2 rounded-full',
                                children: [(0, Ht.jsx)(Rr, { className: 'w-4 h-4 text-blue-500' }), (0, Ht.jsx)('span', { className: 'text-sm font-medium text-blue-500', children: 'Reliable' })],
                              }),
                            ],
                          }),
                          (0, Ht.jsx)('div', {
                            className: 'pt-6',
                            children: (0, Ht.jsxs)('button', {
                              className:
                                'group inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-green to-emerald-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl',
                              children: ['Learn More', (0, Ht.jsx)(Ir, { className: 'w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' })],
                            }),
                          }),
                        ],
                      }),
                      (0, Ht.jsx)('div', {
                        className: 'relative '.concat(t % 2 === 1 ? 'lg:col-start-1' : ''),
                        children: (0, Ht.jsxs)('div', {
                          className: 'relative group',
                          children: [
                            (0, Ht.jsx)('div', {
                              className:
                                '\n                    absolute inset-0 bg-gradient-to-br rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500\n                    '.concat(
                                  t % 2 === 0 ? 'from-primary-green/50 to-emerald-600/50' : 'from-accent-gold/50 to-yellow-500/50',
                                  '\n                  ',
                                ),
                            }),
                            (0, Ht.jsxs)('div', {
                              className: 'relative bg-white rounded-3xl p-4 lg:p-6 shadow-2xl group-hover:shadow-3xl transform group-hover:-translate-y-2 transition-all duration-500',
                              children: [
                                (0, Ht.jsxs)('div', {
                                  className: 'flex items-center space-x-2 mb-4',
                                  children: [
                                    (0, Ht.jsx)('div', { className: 'w-3 h-3 bg-red-400 rounded-full' }),
                                    (0, Ht.jsx)('div', { className: 'w-3 h-3 bg-yellow-400 rounded-full' }),
                                    (0, Ht.jsx)('div', { className: 'w-3 h-3 bg-green-400 rounded-full' }),
                                  ],
                                }),
                                (0, Ht.jsxs)('div', {
                                  className: 'relative overflow-hidden rounded-2xl',
                                  children: [
                                    (0, Ht.jsx)('img', {
                                      src: e.img,
                                      alt: ''.concat(e.title, ' feature illustration'),
                                      className: 'w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700',
                                    }),
                                    (0, Ht.jsx)('div', {
                                      className:
                                        '\n                        absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500\n                      ',
                                    }),
                                  ],
                                }),
                                (0, Ht.jsx)('div', {
                                  className:
                                    '\n                      absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300\n                      '.concat(
                                      t % 2 === 0 ? 'bg-gradient-to-br from-primary-green to-emerald-600' : 'bg-gradient-to-br from-accent-gold to-yellow-500',
                                      '\n                    ',
                                    ),
                                  children: (0, Ht.jsx)(Rr, { className: 'w-6 h-6' }),
                                }),
                              ],
                            }),
                            (0, Ht.jsx)('div', {
                              className: 'absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 transform group-hover:scale-105 transition-transform duration-300',
                              children: (0, Ht.jsxs)('div', {
                                className: 'text-center',
                                children: [
                                  (0, Ht.jsx)('div', { className: 'text-2xl font-bold '.concat(t % 2 === 0 ? 'text-primary-green' : 'text-accent-gold'), children: '99%' }),
                                  (0, Ht.jsx)('div', { className: 'text-sm text-gray-600', children: 'Success Rate' }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            (0, Ht.jsx)('div', {
              className: 'mt-20 text-center',
              children: (0, Ht.jsxs)('div', {
                className: 'bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 text-white',
                children: [
                  (0, Ht.jsx)('h3', { className: 'text-2xl lg:text-3xl font-bold mb-4', children: 'Ready to Experience These Features?' }),
                  (0, Ht.jsx)('p', { className: 'text-lg lg:text-xl mb-8 text-gray-300', children: 'Download Wakeel App today and transform your legal experience' }),
                  (0, Ht.jsxs)('div', {
                    className: 'flex flex-col sm:flex-row gap-4 justify-center',
                    children: [
                      (0, Ht.jsx)('button', {
                        className:
                          'bg-gradient-to-r from-primary-green to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-lg',
                        children: 'Download Now',
                      }),
                      (0, Ht.jsx)('button', {
                        className:
                          'bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300',
                        children: 'Watch Demo',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
  var Ur = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    qr = r.createContext && r.createContext(Ur),
    Gr = ['attr', 'size', 'title'];
  function Yr(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = (function (e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r];
          }
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])));
    }
    return a;
  }
  function $r() {
    return (
      ($r = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      $r.apply(this, arguments)
    );
  }
  function Qr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r));
    }
    return n;
  }
  function Xr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Qr(Object(n), !0).forEach(function (t) {
            Kr(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Qr(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
    }
    return e;
  }
  function Kr(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ('object' != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' != typeof r) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' == typeof t ? t : t + '';
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function Jr(e) {
    return e && e.map((e, t) => r.createElement(e.tag, Xr({ key: t }, e.attr), Jr(e.child)));
  }
  function Zr(e) {
    return (t) => r.createElement(ea, $r({ attr: Xr({}, e.attr) }, t), Jr(e.child));
  }
  function ea(e) {
    var t = (t) => {
      var n,
        { attr: a, size: l, title: i } = e,
        o = Yr(e, Gr),
        s = l || t.size || '1em';
      return (
        t.className && (n = t.className),
        e.className && (n = (n ? n + ' ' : '') + e.className),
        r.createElement(
          'svg',
          $r({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, a, o, {
            className: n,
            style: Xr(Xr({ color: e.color || t.color }, t.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          }),
          i && r.createElement('title', null, i),
          e.children,
        )
      );
    };
    return void 0 !== qr ? r.createElement(qr.Consumer, null, (e) => t(e)) : t(Ur);
  }
  function ta(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 1024 1024' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function na(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        {
          tag: 'path',
          attr: {
            fill: 'none',
            strokeWidth: '2',
            d: 'M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function ra(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        {
          tag: 'path',
          attr: {
            fill: 'none',
            strokeWidth: '2',
            d: 'M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M7,12 L11,15 L16,8',
          },
          child: [],
        },
      ],
    })(e);
  }
  function aa(e) {
    return Zr({
      tag: 'svg',
      attr: { version: '1.1', viewBox: '0 0 16 16' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M5 3c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM12.001 7h-0.553l-3.111 6.316 1.163-5.816-1.5-1.5-1.5 1.5 1.163 5.816-3.111-6.316h-0.554c-1.999 0-1.999 1.344-1.999 3v5h12v-5c0-1.656 0-3-1.999-3z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function la(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24', fill: 'currentColor' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function ia(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function oa(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
        { tag: 'path', attr: { d: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' }, child: [] },
      ],
    })(e);
  }
  function sa(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 24 24' },
      child: [
        { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
        {
          tag: 'path',
          attr: {
            d: 'M19.88 18.47c.44-.7.7-1.51.7-2.39 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5 2.01 4.5 4.49 4.5c.88 0 1.7-.26 2.39-.7L21.58 23 23 21.58l-3.12-3.11zm-3.8.11a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm-.36-8.5c-.74.02-1.45.18-2.1.45l-.55-.83-3.8 6.18-3.01-3.52-3.63 5.81L1 17l5-8 3 3.5L13 6l2.72 4.08zm2.59.5c-.64-.28-1.33-.45-2.05-.49L21.38 2 23 3.18l-4.69 7.4z',
          },
          child: [],
        },
      ],
    })(e);
  }
  const ca = [
    {
      id: 1,
      icon: (0, Ht.jsx)(ta, {}),
      text: 'Live chats with Wakiel',
      detail: "Step into a world of knowledge and inspiration with 'Live chats with Wakiel.' Engage, learn, and grow as Wakiel sparks enlightening conversations, igniting your curiosity.",
    },
    {
      id: 2,
      icon: (0, Ht.jsx)(ra, {}),
      text: 'Watch Status of your case',
      detail: 'Track your case effortlessly. Stay updated with real-time status updates, ensuring peace of mind and a smooth journey.',
    },
    {
      id: 3,
      icon: (0, Ht.jsx)(aa, {}),
      text: 'Hiring Available Wakiels',
      detail: 'Unlock excellence: hiring available Wakiels. Embrace brilliance, expertise, and innovation with our exceptional team of Wakiels ready to conquer challenges.',
    },
    {
      id: 4,
      icon: (0, Ht.jsx)(la, {}),
      text: 'Manage your account in secure form',
      detail: 'Safeguard your account with ease. Manage it securely, ensuring peace of mind and complete control over your valuable information.',
    },
    { id: 5, icon: (0, Ht.jsx)(oa, {}), text: 'Payments Method integration', detail: 'Effortless, secure payments. Seamless method integration for your convenience.' },
    { id: 6, icon: (0, Ht.jsx)(ia, {}), text: 'Customer Support', detail: 'Reliable assistance, always there. Exceptional customer support, your satisfaction our priority.' },
  ];
  const ua = function () {
    return (0, Ht.jsxs)('section', {
      id: 'online-dealings',
      className: 'relative py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden',
      children: [
        (0, Ht.jsxs)('div', {
          className: 'absolute inset-0',
          children: [
            (0, Ht.jsx)('div', { className: 'absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-l from-primary-green/10 to-emerald-600/10 rounded-full blur-3xl' }),
            (0, Ht.jsx)('div', { className: 'absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-r from-accent-gold/10 to-yellow-500/10 rounded-full blur-3xl' }),
          ],
        }),
        (0, Ht.jsxs)('div', {
          className: 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: [
            (0, Ht.jsxs)('div', {
              className: 'text-center mb-12 lg:mb-16',
              children: [
                (0, Ht.jsxs)('div', {
                  className:
                    'inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-green/10 to-emerald-600/10 rounded-full text-primary-green font-semibold text-sm tracking-wide uppercase mb-4',
                  children: [(0, Ht.jsx)(Rr, { className: 'w-4 h-4 mr-2' }), 'Digital Solutions'],
                }),
                (0, Ht.jsxs)('h1', {
                  className: 'text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4',
                  children: ['Online', (0, Ht.jsx)('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600', children: ' Legal ' }), 'Services'],
                }),
                (0, Ht.jsx)('p', {
                  className: 'text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed',
                  children: 'Comprehensive digital legal solutions tailored to your needs, accessible anytime, anywhere',
                }),
              ],
            }),
            (0, Ht.jsxs)('div', {
              className: 'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
              children: [
                (0, Ht.jsx)('div', {
                  className: 'flex justify-center items-center',
                  children: (0, Ht.jsxs)('div', {
                    className: 'relative group',
                    children: [
                      (0, Ht.jsx)('div', {
                        className:
                          'absolute -inset-8 bg-gradient-to-br from-primary-green/20 via-emerald-500/10 to-accent-gold/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transform group-hover:scale-110 transition-all duration-500',
                      }),
                      (0, Ht.jsx)('div', { className: 'absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-primary-green/30 to-emerald-600/30 rounded-full blur-lg animate-pulse' }),
                      (0, Ht.jsx)('div', { className: 'absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-accent-gold/30 to-yellow-500/30 rounded-full blur-lg animate-bounce' }),
                      (0, Ht.jsxs)('div', {
                        className: 'relative',
                        children: [
                          (0, Ht.jsx)('div', {
                            className: 'absolute inset-0 bg-gradient-to-br from-primary-green/20 to-accent-gold/20 rounded-full opacity-30',
                            style: { animation: 'spin 20s linear infinite' },
                          }),
                          (0, Ht.jsx)('div', { className: 'absolute inset-4 bg-gradient-to-tl from-emerald-500/10 to-yellow-400/10 rounded-full' }),
                          (0, Ht.jsx)('div', {
                            className: 'relative w-80 h-80 lg:w-96 lg:h-96 bg-white/80 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500',
                            children: (0, Ht.jsx)('img', {
                              src: Rt,
                              alt: 'Online Legal Services Platform',
                              className: 'w-full h-full object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform duration-300 filter group-hover:brightness-110',
                            }),
                          }),
                          (0, Ht.jsx)('div', {
                            className: 'absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 transform group-hover:scale-105 transition-transform duration-300',
                            children: (0, Ht.jsxs)('div', {
                              className: 'text-center',
                              children: [
                                (0, Ht.jsx)('div', { className: 'text-lg font-bold text-primary-green', children: '24/7' }),
                                (0, Ht.jsx)('div', { className: 'text-xs text-gray-600', children: 'Available' }),
                              ],
                            }),
                          }),
                          (0, Ht.jsx)('div', {
                            className: 'absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 transform group-hover:scale-105 transition-transform duration-300',
                            children: (0, Ht.jsxs)('div', {
                              className: 'text-center',
                              children: [
                                (0, Ht.jsx)('div', { className: 'text-lg font-bold text-accent-gold', children: '1000+' }),
                                (0, Ht.jsx)('div', { className: 'text-xs text-gray-600', children: 'Cases' }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, Ht.jsxs)('div', {
                  className: 'space-y-8',
                  children: [
                    (0, Ht.jsxs)('div', {
                      className: 'space-y-6',
                      children: [
                        (0, Ht.jsxs)('h2', {
                          className: 'text-2xl lg:text-3xl font-bold text-gray-800 mb-6',
                          children: [
                            'Why Choose Our',
                            (0, Ht.jsx)('span', { className: 'text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-emerald-600', children: ' Digital Platform?' }),
                          ],
                        }),
                        ca.map((e, t) =>
                          (0, Ht.jsx)(
                            'div',
                            {
                              className:
                                'group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-100/50 hover:bg-white hover:shadow-lg hover:border-primary-green/20 transition-all duration-300',
                              children: (0, Ht.jsxs)('div', {
                                className: 'flex items-start space-x-4',
                                children: [
                                  (0, Ht.jsxs)('div', {
                                    className: 'flex-shrink-0 relative',
                                    children: [
                                      (0, Ht.jsx)('div', {
                                        className:
                                          'w-12 h-12 bg-gradient-to-br from-primary-green to-emerald-600 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg',
                                        children: e.icon,
                                      }),
                                      (0, Ht.jsx)('div', {
                                        className:
                                          'absolute -inset-1 bg-gradient-to-r from-primary-green/20 to-emerald-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                                      }),
                                    ],
                                  }),
                                  (0, Ht.jsxs)('div', {
                                    className: 'flex-1 space-y-2',
                                    children: [
                                      (0, Ht.jsx)('h3', {
                                        className: 'text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-primary-green transition-colors duration-300',
                                        children: e.text,
                                      }),
                                      (0, Ht.jsx)('p', { className: 'text-gray-600 leading-relaxed', children: e.detail }),
                                    ],
                                  }),
                                  (0, Ht.jsx)('div', {
                                    className: 'flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0',
                                    children: (0, Ht.jsx)(Ir, { className: 'w-5 h-5 text-primary-green' }),
                                  }),
                                ],
                              }),
                            },
                            e.id,
                          ),
                        ),
                      ],
                    }),
                    (0, Ht.jsxs)('div', {
                      className: 'pt-6 space-y-4',
                      children: [
                        (0, Ht.jsxs)('div', {
                          className: 'flex flex-col sm:flex-row gap-4',
                          children: [
                            (0, Ht.jsxs)('button', {
                              className:
                                'group bg-gradient-to-r from-primary-green to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center',
                              children: ['Explore All Services', (0, Ht.jsx)(Ir, { className: 'w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' })],
                            }),
                            (0, Ht.jsx)('button', {
                              className:
                                'bg-white border-2 border-primary-green text-primary-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-green hover:text-white transform hover:scale-105 transition-all duration-300',
                              children: 'Watch Demo',
                            }),
                          ],
                        }),
                        (0, Ht.jsxs)('div', {
                          className: 'flex items-center justify-center sm:justify-start space-x-4 text-sm text-gray-500',
                          children: [
                            (0, Ht.jsxs)('span', { className: 'flex items-center', children: [(0, Ht.jsx)('div', { className: 'w-2 h-2 bg-green-500 rounded-full mr-2' }), 'Secure & Confidential'] }),
                            (0, Ht.jsxs)('span', { className: 'flex items-center', children: [(0, Ht.jsx)('div', { className: 'w-2 h-2 bg-blue-500 rounded-full mr-2' }), 'Expert Legal Team'] }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Ht.jsx)('div', {
              className: 'mt-16 lg:mt-20 text-center',
              children: (0, Ht.jsxs)('div', {
                className: 'bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12 text-white',
                children: [
                  (0, Ht.jsx)('h3', { className: 'text-2xl lg:text-3xl font-bold mb-4', children: 'Join Thousands of Satisfied Users' }),
                  (0, Ht.jsx)('p', { className: 'text-lg text-gray-300 mb-8 max-w-2xl mx-auto', children: 'Experience the future of legal services with our comprehensive digital platform' }),
                  (0, Ht.jsxs)('div', {
                    className: 'flex flex-wrap justify-center gap-8 text-center',
                    children: [
                      (0, Ht.jsxs)('div', {
                        children: [
                          (0, Ht.jsx)('div', { className: 'text-3xl font-bold text-primary-green', children: '5000+' }),
                          (0, Ht.jsx)('div', { className: 'text-gray-400', children: 'Happy Clients' }),
                        ],
                      }),
                      (0, Ht.jsxs)('div', {
                        children: [
                          (0, Ht.jsx)('div', { className: 'text-3xl font-bold text-accent-gold', children: '99%' }),
                          (0, Ht.jsx)('div', { className: 'text-gray-400', children: 'Success Rate' }),
                        ],
                      }),
                      (0, Ht.jsxs)('div', {
                        children: [(0, Ht.jsx)('div', { className: 'text-3xl font-bold text-blue-400', children: '24/7' }), (0, Ht.jsx)('div', { className: 'text-gray-400', children: 'Support' })],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
  function da(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M236.34,187.09A84,84,0,0,0,172.29,68.9,84,84,0,0,0,19.66,139.09l-6.84,23.26a20,20,0,0,0,24.83,24.83l23.26-6.84a83.94,83.94,0,0,0,22.76,6.74,84.06,84.06,0,0,0,111.42,41.26l23.26,6.84a20,20,0,0,0,24.83-24.83ZM62,155.5a11.88,11.88,0,0,0-3.39.49l-20.72,6.09L44,141.35a12,12,0,0,0-.93-9A60,60,0,1,1,67.7,156.92,12,12,0,0,0,62,155.5Zm150.89,24.8a12,12,0,0,0-.93,9l6.09,20.73L197.36,204a12,12,0,0,0-9.06.93A60,60,0,0,1,111,186.63a83.93,83.93,0,0,0,68.55-91.37,60,60,0,0,1,33.38,85Z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function fa(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 320 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function pa(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 448 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function ha(e) {
    return Zr({
      tag: 'svg',
      attr: { viewBox: '0 0 512 512' },
      child: [
        {
          tag: 'path',
          attr: {
            d: 'M298.9 24.31c-14.9.3-25.6 3.2-32.7 8.4l-97.3 52.1-54.1 73.59c-11.4 17.6-3.3 51.6 32.3 29.8l39-51.4c49.5-42.69 150.5-23.1 102.6 62.6-23.5 49.6-12.5 73.8 17.8 84l13.8-46.4c23.9-53.8 68.5-63.5 66.7-106.9l107.2 7.7-1-112.09-194.3-1.4zM244.8 127.7c-17.4-.3-34.5 6.9-46.9 17.3l-39.1 51.4c10.7 8.5 21.5 3.9 32.2-6.4 12.6 6.4 22.4-3.5 30.4-23.3 3.3-13.5 8.2-23 23.4-39zm-79.6 96c-.4 0-.9 0-1.3.1-3.3.7-7.2 4.2-9.8 12.2-2.7 8-3.3 19.4-.9 31.6 2.4 12.1 7.4 22.4 13 28.8 5.4 6.3 10.4 8.1 13.7 7.4 3.4-.6 7.2-4.2 9.8-12.1 2.7-8 3.4-19.5 1-31.6-2.5-12.2-7.5-22.5-13-28.8-4.8-5.6-9.2-7.6-12.5-7.6zm82.6 106.8c-7.9.1-17.8 2.6-27.5 7.3-11.1 5.5-19.8 13.1-24.5 20.1-4.7 6.9-5.1 12.1-3.6 15.2 1.5 3 5.9 5.9 14.3 6.3 8.4.5 19.7-1.8 30.8-7.3 11.1-5.5 19.8-13 24.5-20 4.7-6.9 5.1-12.2 3.6-15.2-1.5-3.1-5.9-5.9-14.3-6.3-1.1-.1-2.1-.1-3.3-.1zm-97.6 95.6c-4.7.1-9 .8-12.8 1.9-8.5 2.5-13.4 7-15 12.3-1.7 5.4 0 11.8 5.7 18.7 5.8 6.8 15.5 13.3 27.5 16.9 11.9 3.6 23.5 3.5 32.1.9 8.6-2.5 13.5-7 15.1-12.3 1.6-5.4 0-11.8-5.8-18.7-5.7-6.8-15.4-13.3-27.4-16.9-6.8-2-13.4-2.9-19.4-2.8z',
          },
          child: [],
        },
      ],
    })(e);
  }
  function ma(e) {
    return Zr({
      tag: 'svg',
      attr: { version: '1.1', viewBox: '0 0 17 17' },
      child: [
        { tag: 'g', attr: {}, child: [] },
        {
          tag: 'path',
          attr: {
            d: 'M15.668 6.017c-0.957-3.557-3.863-6.017-7.168-6.017-3.295 0-6.212 2.464-7.168 6.017-0.747 0.082-1.332 0.712-1.332 1.483v4c0 0.625 0.382 1.16 0.924 1.385 0.194 1.747 1.663 3.115 3.461 3.115h2.707c0.207 0.581 0.757 1 1.408 1h3c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-3c-0.651 0-1.201 0.419-1.408 1h-2.707c-1.208 0-2.217-0.86-2.449-2h1.064v-1h1v-5h-1v-1h-0.606c0.913-2.961 3.352-5 6.106-5 2.762 0 5.193 2.037 6.106 5h-0.606v1h-1v5h1v1h1.506c0.824 0 1.494-0.673 1.494-1.5v-4c0-0.771-0.585-1.401-1.332-1.483zM8.5 15h3c0.275 0 0.5 0.224 0.5 0.5s-0.225 0.5-0.5 0.5h-3c-0.275 0-0.5-0.224-0.5-0.5s0.225-0.5 0.5-0.5zM2 12h-0.506c-0.272 0-0.494-0.224-0.494-0.5v-4c0-0.276 0.222-0.5 0.494-0.5h0.506v5zM16 11.5c0 0.276-0.222 0.5-0.494 0.5h-0.506v-5h0.506c0.272 0 0.494 0.224 0.494 0.5v4z',
          },
          child: [],
        },
      ],
    })(e);
  }
  const ga = [
    { title: 'Live Chats with Lawyers', description: 'Real-time Solutions, Right at Your Fingertips!', image: (0, Ht.jsx)(da, {}) },
    { title: 'Watch Status of Your Case', description: 'Stay Informed, Stay Confident!', image: (0, Ht.jsx)(sa, {}) },
    { title: 'Hiring Available Lawyers', description: 'Your Perfect Legal Match Awaits.', image: (0, Ht.jsx)(pa, {}) },
    { title: 'Manage Your Account in Secure Form', description: 'Your Data, Your Control.', image: (0, Ht.jsx)(na, {}) },
    { title: 'Payments Method Integration', description: 'Hassle-free Transactions, Total Peace of Mind', image: (0, Ht.jsx)(ha, {}) },
    { title: 'Customer Support', description: 'Our Team, Your Advocates, Always by Your Side', image: (0, Ht.jsx)(ma, {}) },
  ];
  const va = function () {
    return (0, Ht.jsx)('section', {
      id: 'services',
      className: 'py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white',
      children: (0, Ht.jsxs)('div', {
        className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        children: [
          (0, Ht.jsxs)('div', {
            className: 'text-center mb-16',
            children: [
              (0, Ht.jsxs)('h2', {
                className: 'text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-green mb-6 relative inline-block',
                children: ['Our Services', (0, Ht.jsx)('span', { className: 'absolute -bottom-2 left-0 w-full h-1 bg-accent-gold rounded-full' })],
              }),
              (0, Ht.jsx)('p', {
                className: 'text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto',
                children:
                  'Wakeel App revolutionizes legal consultations. Clients register, search attorneys by location or specialty, and book appointments instantly. Post cases for competitive bidding, while lawyers manage schedules and create digital prescriptions seamlessly.',
              }),
            ],
          }),
          (0, Ht.jsx)('div', {
            className: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10',
            children: ga.map((e, t) =>
              (0, Ht.jsxs)(
                'div',
                {
                  className:
                    'group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100 hover:border-primary-green/20',
                  children: [
                    (0, Ht.jsx)('div', {
                      className: 'flex justify-center mb-6',
                      children: (0, Ht.jsx)('div', {
                        className:
                          'w-20 h-20 bg-gradient-to-br from-primary-green to-green-500 rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300',
                        children: e.image,
                      }),
                    }),
                    (0, Ht.jsx)('h3', { className: 'text-2xl font-semibold text-gray-900 mb-4 text-center group-hover:text-primary-green transition-colors duration-300', children: e.title }),
                    (0, Ht.jsx)('p', { className: 'text-gray-600 text-center leading-relaxed mb-6 line-clamp-3', children: e.description }),
                    (0, Ht.jsx)('div', {
                      className: 'flex justify-center',
                      children: (0, Ht.jsx)(gt, {
                        to: 'https://play.google.com/store/apps',
                        target: '_blank',
                        children: (0, Ht.jsx)('button', {
                          className:
                            'bg-gradient-to-r from-accent-gold to-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:from-yellow-500 hover:to-accent-gold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl',
                          children: 'Explore Now',
                        }),
                      }),
                    }),
                    (0, Ht.jsx)('div', {
                      className: 'absolute top-4 right-4 w-6 h-6 bg-primary-green/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150',
                    }),
                  ],
                },
                e.title,
              ),
            ),
          }),
          (0, Ht.jsx)('div', {
            className: 'text-center mt-16',
            children: (0, Ht.jsxs)('div', {
              className: 'bg-gradient-to-r from-secondary-green to-gray-900 rounded-3xl p-8 lg:p-12',
              children: [
                (0, Ht.jsx)('h3', { className: 'text-3xl lg:text-4xl font-bold text-white mb-4', children: 'Ready to Get Started?' }),
                (0, Ht.jsx)('p', { className: 'text-gray-300 text-lg mb-8 max-w-2xl mx-auto', children: 'Join thousands of satisfied clients who trust Wakeel App for their legal needs' }),
                (0, Ht.jsx)(gt, {
                  to: 'https://play.google.com/store/apps',
                  target: '_blank',
                  children: (0, Ht.jsx)('button', {
                    className:
                      'bg-gradient-to-r from-primary-green to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-500 hover:to-primary-green transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl',
                    children: 'Download Now',
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  };
  const ya = function () {
    return (0, Ht.jsxs)('div', { children: [(0, Ht.jsx)(Kt, {}), (0, Ht.jsx)(ln, {}), (0, Ht.jsx)(Vr, {}), (0, Ht.jsx)(va, {}), (0, Ht.jsx)(ua, {}), (0, Ht.jsx)(Ar, {})] });
  };
  const ba = function (e) {
    let { post: t } = e;
    return (0, Ht.jsxs)('section', {
      children: [
        (0, Ht.jsx)('div', { className: 'global-spacer global-bg header-setting', children: (0, Ht.jsx)('div', { className: 'global-spacer blog-post-heading', children: t.heading }) }),
        (0, Ht.jsxs)('div', {
          className: 'global-container blog-post',
          children: [
            (0, Ht.jsx)('h1', { className: 'global-heading', children: t.heading }),
            (0, Ht.jsx)('div', { className: 'center-flex', children: (0, Ht.jsx)('img', { src: t.img, alt: 'blog-img' }) }),
            (0, Ht.jsx)('p', { className: 'global-paragraph', children: ''.concat(t.paragraph, ' ').concat(t.detail) }),
          ],
        }),
      ],
    });
  };
  const xa = function () {
      const e = me();
      return (0, Ht.jsxs)('div', {
        className: 'page-404',
        children: [
          (0, Ht.jsxs)('div', { className: 'container', children: [(0, Ht.jsx)('div', { className: 'shade1' }), (0, Ht.jsx)('div', { className: 'shade2' })] }),
          (0, Ht.jsxs)('div', {
            className: 'global-container page-not-found',
            children: [
              (0, Ht.jsxs)('div', { className: 'page-404-heading', children: [(0, Ht.jsx)('h1', { children: '404' }), (0, Ht.jsx)('h2', { children: 'Page Not Found' })] }),
              (0, Ht.jsx)('p', { children: 'You are lost in space' }),
              (0, Ht.jsx)('button', { className: 'global-btn', onClick: () => e('/'), children: 'Go Back' }),
            ],
          }),
        ],
      });
    },
    wa = [
      {
        id: 1,
        title: 'Acceptance of Terms',
        content:
          'By accessing or using the Wakiel app, you agree to comply with these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this app.',
      },
      {
        id: 2,
        title: 'User Eligibility',
        content: 'You must be of legal age and have the legal capacity to enter into agreements to use this app. By accessing and using the app, you confirm that you meet these requirements.',
      },
      {
        id: 3,
        title: 'Account Information',
        content:
          'You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account or other breach of security.',
      },
      {
        id: 4,
        title: 'User Content',
        content:
          'Any content you provide on the app, including messages, reviews, or feedback, may be visible to other users. You retain ownership of your content, but you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute your content.',
      },
      {
        id: 5,
        title: 'Use of Services',
        content:
          'You agree to use the Wakiel app solely for lawful purposes. You will not use the app to engage in any activities that violate local, national, or international laws and regulations.',
      },
      {
        id: 6,
        title: 'Intellectual Property',
        content:
          'The Wakiel app and its content, including logos, design, and text, are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.',
      },
      {
        id: 7,
        title: 'Disclaimer of Warranties',
        content: "The app is provided 'as is' without any warranties. We do not guarantee the accuracy, completeness, or reliability of any content. Your use of the app is at your own risk.",
      },
      {
        id: 8,
        title: 'Limitation of Liability',
        content: 'To the extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the app.',
      },
      {
        id: 9,
        title: 'Modification of Terms',
        content:
          'We reserve the right to modify or replace these Terms and Conditions at any time. Any changes will be posted on this page. Your continued use of the app after such modifications constitutes your acceptance of the updated terms.',
      },
      { id: 10, title: 'Governing Law', content: 'These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where your business is registered.' },
    ];
  const ka = function () {
      return (0, Ht.jsxs)('div', {
        className: 'terms-container global-bg',
        children: [
          (0, Ht.jsx)('div', { className: 'global-spacer global-bg header-setting', children: (0, Ht.jsx)('div', { className: 'global-spacer blog-post-heading', children: 'Terms and Conditions' }) }),
          (0, Ht.jsxs)('div', {
            className: 'global-container',
            children: [
              (0, Ht.jsx)('h2', { className: 'terms-title global-heading', children: 'Terms and Conditions' }),
              (0, Ht.jsx)('div', {
                className: 'terms-content',
                children: wa.map((e) =>
                  (0, Ht.jsxs)(Ht.Fragment, {
                    children: [(0, Ht.jsx)('h3', { className: 'heading', children: e.title }), (0, Ht.jsx)('p', { className: 'terms-paragraph global-paragraph', children: e.content }, e.id)],
                  }),
                ),
              }),
            ],
          }),
        ],
      });
    },
    Sa = [
      {
        id: 1,
        title: 'Who We Are',
        content: 'Wakeel App (\u201cwe\u201d, \u201cour\u201d, or \u201cus\u201d) is a legal service platform connecting users with legal professionals for advice, appointments, and case management.',
      },
      {
        id: 2,
        title: 'Information We Collect',
        content:
          'We collect the following types of information:\n- Personal Information such as name, email, phone, profile photo, legal case details, and payment info (if applicable).\n- Usage Information including IP address, browser/device details, session data, visited pages, and timestamps.\n- Permissions (Mobile App) such as internet access, file upload access, notifications, and camera (if required).',
      },
      {
        id: 3,
        title: 'How We Use Your Information',
        content:
          'Your information is used to:\n- Create and manage user accounts.\n- Match users with Wakeels (lawyers).\n- Facilitate legal service communication.\n- Process payments securely.\n- Improve app functionality and performance.\n- Fulfill legal or regulatory requirements.',
      },
      {
        id: 4,
        title: 'Data Sharing',
        content: 'We only share your information with trusted third parties like verified Wakeels, payment processors, or law enforcement (when legally required). We never sell your data.',
      },
      {
        id: 5,
        title: 'Cookies & Tracking',
        content: 'Wakeel App may use cookies to improve your experience, remember preferences, and monitor traffic. You may disable cookies in your browser settings.',
      },
      { id: 6, title: 'Data Security', content: 'We use industry-standard security practices to protect your personal data. However, no system is completely immune from breaches.' },
      { id: 7, title: 'Data Retention', content: 'We retain user data only as long as needed for legal, operational, or user service purposes. You may request deletion at any time.' },
      { id: 8, title: 'Your Rights', content: 'Users may have rights under GDPR or CCPA to access, correct, or delete their data, and to withdraw consent for data use.' },
      { id: 9, title: "Children's Privacy", content: 'Wakeel App is not intended for children under 13. We do not knowingly collect information from minors. Please contact us to remove such data.' },
      { id: 10, title: 'Third-Party Links', content: 'The app may contain links to external websites. We are not responsible for their privacy practices. Please review their policies separately.' },
      { id: 11, title: 'Changes to This Policy', content: 'We may update this policy from time to time. Material changes will be notified through the app or on this page.' },
      { id: 12, title: 'Contact Us', content: 'If you have any questions or privacy-related requests, contact us at: ' },
    ];
  const Ea = function () {
      return (0, Ht.jsxs)(Ht.Fragment, {
        children: [
          (0, Ht.jsxs)('head', {
            children: [
              (0, Ht.jsx)('title', { children: 'Privacy Policy | Wakeel App' }),
              (0, Ht.jsx)('meta', { name: 'description', content: 'This Privacy Policy explains how Wakeel App collects, uses, and protects your information.' }),
            ],
          }),
          (0, Ht.jsxs)('div', {
            className: 'privacy-policy-container global-bg',
            children: [
              (0, Ht.jsx)('div', { className: 'global-spacer global-bg header-setting', children: (0, Ht.jsx)('div', { className: 'global-spacer blog-post-heading', children: 'Privacy Policy' }) }),
              (0, Ht.jsxs)('div', {
                className: 'global-container',
                children: [
                  (0, Ht.jsx)('h2', { className: 'privacy-policy-title global-heading', children: 'Privacy Policy' }),
                  (0, Ht.jsx)('p', { className: 'privacy-paragraph global-paragraph', children: 'Effective Date: June 24, 2025' }),
                  (0, Ht.jsx)('div', {
                    className: 'privacy-policy-content',
                    children: Sa.map((e) =>
                      (0, Ht.jsxs)(
                        'div',
                        {
                          className: 'privacy-section',
                          children: [
                            (0, Ht.jsx)('h3', { className: 'heading', children: e.title }),
                            12 === e.id
                              ? (0, Ht.jsxs)('p', {
                                  className: 'privacy-paragraph global-paragraph',
                                  style: { whiteSpace: 'pre-wrap' },
                                  children: [e.content, (0, Ht.jsx)(gt, { href: 'mailto:support@wakeelapp.com', className: 'text-blue-600 underline', children: 'support@wakeelapp.com' })],
                                })
                              : (0, Ht.jsx)('p', { className: 'privacy-paragraph global-paragraph', style: { whiteSpace: 'pre-wrap' }, dangerouslySetInnerHTML: { __html: e.content } }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    },
    Na = [
      {
        id: 1,
        question: 'What types of legal services can I find on Wakiel app?',
        answer:
          'Wakiel app offers an extensive array of legal services to cater to diverse needs. Our accomplished lawyers specialize in various areas, including criminal law, family law, personal injury, estate planning, business law, intellectual property, and more. We understand that legal challenges are multifaceted, and our skilled legal professionals are here to provide tailored solutions for your specific needs.',
      },
      {
        id: 2,
        question: 'How do I go about scheduling a consultation with a lawyer?',
        answer:
          'Scheduling a consultation is a streamlined process. You can initiate it by accessing our user-friendly Wakiel app. Through the app, you can provide details about your legal matter, your preferred consultation date and time, and any specific requirements you have. Our dedicated team will then work closely with you to confirm the appointment, ensuring a convenient and efficient process for your legal consultation.',
      },
      {
        id: 3,
        question: 'What factors determine the cost of legal services?',
        answer:
          'The cost of legal services is influenced by multiple factors. These include the complexity of your legal matter, the expertise required, the anticipated duration of the case, and any associated administrative or court fees. During your initial consultation, our experienced lawyers will thoroughly assess your situation and provide you with a comprehensive breakdown of the potential costs involved.',
      },
      {
        id: 4,
        question: "How can I ensure that I'm choosing the right lawyer for my specific case?",
        answer:
          "Selecting the right lawyer is pivotal to achieving a positive outcome. Our Wakiel app simplifies this process by providing detailed profiles of our lawyers, showcasing their areas of specialization, experience, and successful case history. Additionally, you can read reviews from clients who have previously engaged their services. If you're uncertain, our team is available to provide guidance tailored to your unique legal requirements.",
      },
      {
        id: 5,
        question: 'Can I modify or cancel a scheduled appointment?',
        answer:
          'Absolutely, we understand that plans can change. Should you need to modify or cancel a scheduled appointment, you can easily do so through our Wakiel app. Simply log in to your account, navigate to your bookings, and make the necessary changes. To ensure optimal scheduling for both you and our lawyers, we appreciate your consideration in providing advance notice for any adjustments.',
      },
      {
        id: 6,
        question: 'How does the security of online consultations work?',
        answer:
          'We prioritize the security and confidentiality of your online consultations. Our Wakiel app employs advanced encrypted communication platforms to ensure that your discussions with our lawyers remain private and protected. We understand that discussing legal matters requires a safe environment, and our commitment to security means you can engage in meaningful conversations and receive expert advice securely from anywhere.',
      },
      {
        id: 7,
        question: 'What should I prepare for my initial consultation with a lawyer?',
        answer:
          "Preparing for your initial consultation is essential to make the most of your time. It's helpful to gather any relevant documents, such as contracts, legal notices, or any written information about your case. Additionally, jot down a list of questions or concerns you want to address. Being organized and well-prepared ensures that the consultation is productive and that the lawyer can provide accurate advice tailored to your situation.",
      },
      {
        id: 8,
        question: 'How do I make payments for legal services through the app?',
        answer:
          "Making payments for legal services through our app is seamless. We've integrated a secure online payment system that allows you to conveniently pay for services rendered. After your consultation or legal service, you'll receive a detailed invoice with payment instructions. Our secure payment gateway ensures that your financial information is protected throughout the process.",
      },
      {
        id: 9,
        question: 'What happens if I encounter technical issues during an online consultation?',
        answer:
          "Technical issues can occasionally arise, but we're here to support you. If you encounter any challenges during an online consultation, our dedicated technical support team is available to assist. You can contact our customer service or technical support hotline, and we'll work swiftly to resolve any issues so that your consultation can continue smoothly.",
      },
      {
        id: 10,
        question: 'How do I join the network of lawyers on the Wakiel app?',
        answer:
          "Joining our network of lawyers is a straightforward process. If you're a qualified lawyer interested in expanding your reach and offering your expertise through our platform, please contact our partnership team. We'll guide you through the onboarding process, help you create a comprehensive profile, and assist you in leveraging our app to connect with clients seeking legal assistance.",
      },
    ];
  const Ca = function () {
    const [e, t] = (0, r.useState)(null);
    return (0, Ht.jsxs)('div', {
      className: 'faqs-container',
      children: [
        (0, Ht.jsx)('div', {
          className: 'global-spacer global-bg header-setting',
          children: (0, Ht.jsx)('div', { className: 'global-spacer blog-post-heading', children: 'Frequently Asked Questions' }),
        }),
        (0, Ht.jsxs)('div', {
          className: 'global-container',
          children: [
            (0, Ht.jsx)('h2', { className: 'faqs-title global-heading', children: 'Frequently Asked Questions' }),
            (0, Ht.jsx)('div', {
              className: 'faq-list',
              children: Na.map((n, r) =>
                (0, Ht.jsxs)(
                  'div',
                  {
                    className: 'faq-item',
                    children: [
                      (0, Ht.jsxs)('button', {
                        className: 'accordion '.concat(e === r ? 'active' : ''),
                        onClick: () =>
                          ((n) => {
                            t(e === n ? null : n);
                          })(r),
                        children: [n.question, (0, Ht.jsx)('span', { className: 'arrow '.concat(e === r ? 'rotate' : ''), children: (0, Ht.jsx)(fa, {}) })],
                      }),
                      (0, Ht.jsx)('div', { className: 'panel '.concat(e === r ? 'open' : ''), children: (0, Ht.jsx)('p', { className: 'faq-answer global-paragraph', children: n.answer }) }),
                    ],
                  },
                  n.id,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  };
  function ja(e) {
    let { children: t } = e;
    const n = fe();
    return (
      (0, r.useEffect)(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, [n]),
      t
    );
  }
  const Ta = function () {
    const [e, t] = (0, r.useState)(!0);
    return (
      (0, r.useEffect)(() => {
        const e = document.createElement('style');
        ((e.textContent =
          "\n  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n  \n  * {\n    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n  }\n  \n  .animate-float {\n    animation: float 3s ease-in-out infinite;\n  }\n  \n  @keyframes float {\n    0%, 100% { transform: translateY(0px); }\n    50% { transform: translateY(-20px); }\n  }\n  \n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  \n  .line-clamp-6 {\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  \n  .backdrop-blur-xs {\n    backdrop-filter: blur(2px);\n  }\n  \n  .shadow-3xl {\n    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);\n  }\n  \n  .bg-gradient-conic {\n    background: conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops));\n  }\n  \n  .animate-spin-slow {\n    animation: spin 20s linear infinite;\n  }\n  \n  .animate-spin-reverse {\n    animation: spin 20s linear infinite reverse;\n  }\n  \n  /* FAQ Styles */\n  .accordion {\n    transition: all 0.3s ease;\n  }\n  \n  .accordion.active {\n    background-color: rgb(243, 244, 246);\n  }\n  \n  .panel {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.3s ease-out, padding 0.3s ease-in-out;\n  }\n  \n  .panel.open {\n    max-height: 500px;\n  }\n  \n  /* Terms and Privacy Policy Styles */\n  .terms-paragraph, .privacy-paragraph {\n    font-style: italic;\n  }\n  \n  /* Smooth scrolling */\n  html {\n    scroll-behavior: smooth;\n  }\n  \n  /* Custom scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  \n  ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  \n  ::-webkit-scrollbar-thumb {\n    background: #03da03;\n    border-radius: 4px;\n  }\n  \n  ::-webkit-scrollbar-thumb:hover {\n    background: #ca9d3e;\n  }\n"),
          document.head.appendChild(e));
        const n = setTimeout(() => {
          t(!1);
        }, 4e3);
        return () => {
          (clearTimeout(n), e.parentNode && e.parentNode.removeChild(e));
        };
      }, []),
      (0, Ht.jsxs)(Ht.Fragment, {
        children: [
          (0, Ht.jsx)(Xt, { isLoading: e }),
          !e &&
            (0, Ht.jsx)('div', {
              className: 'min-h-screen bg-white',
              children: (0, Ht.jsx)(ht, {
                children: (0, Ht.jsx)(ja, {
                  children: (0, Ht.jsxs)('div', {
                    className: 'flex flex-col min-h-screen',
                    children: [
                      (0, Ht.jsx)(Yt, {}),
                      (0, Ht.jsx)('main', {
                        className: 'flex-1',
                        children: (0, Ht.jsxs)(Oe, {
                          children: [
                            (0, Ht.jsx)(ze, { path: '/', element: (0, Ht.jsx)(ya, {}) }),
                            Or.map((e) => (0, Ht.jsx)(ze, { path: e.link, element: (0, Ht.jsx)(ba, { post: e }) }, e.link)),
                            (0, Ht.jsx)(ze, { path: '/terms-and-conditions', element: (0, Ht.jsx)(ka, {}) }),
                            (0, Ht.jsx)(ze, { path: '/privacy-policy', element: (0, Ht.jsx)(Ea, {}) }),
                            (0, Ht.jsx)(ze, { path: '/faqs', element: (0, Ht.jsx)(Ca, {}) }),
                            (0, Ht.jsx)(ze, { path: '*', element: (0, Ht.jsx)(xa, {}) }),
                          ],
                        }),
                      }),
                      (0, Ht.jsx)(Qt, {}),
                    ],
                  }),
                }),
              }),
            }),
        ],
      })
    );
  };
  a.createRoot(document.getElementById('root')).render((0, Ht.jsx)(Ta, {}));
})();
//# sourceMappingURL=main.820ac6ee.js.map
