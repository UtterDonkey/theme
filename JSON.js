const JSONIcon = "data:image/png;base64,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"
'use strict';
(function() {
    function y(b) {
        "@babel/helpers - typeof";
        y = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" === typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        };
        return y(b)
    }

    function A(b, a) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            "value" in d && (d.writable = !0);
            Object.defineProperty(b, d.key, d)
        }
    }

    function E(b, a, c) {
        a && A(b.prototype, a);
        c && A(b, c);
        return b
    }

    function F(b, a) {
        if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(a && a.prototype, {
            constructor: {
                value: b,
                writable: !0,
                configurable: !0
            }
        });
        a && m(b, a)
    }

    function n(b) {
        n = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a)
        };
        return n(b)
    }

    function m(b, a) {
        m = Object.setPrototypeOf || function(a, b) {
            a.__proto__ = b;
            return a
        };
        return m(b, a)
    }

    function B() {
        if ("undefined" === typeof Reflect || !Reflect.construct ||
            Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
        } catch (b) {
            return !1
        }
    }

    function q(b, a, c) {
        q = B() ? Reflect.construct : function(a, b, c) {
            var d = [null];
            d.push.apply(d, b);
            a = new(Function.bind.apply(a, d));
            c && m(a, c.prototype);
            return a
        };
        return q.apply(null, arguments)
    }

    function v(b) {
        var a = "function" === typeof Map ? new Map : void 0;
        v = function(b) {
            function c() {
                return q(b, arguments, n(this).constructor)
            }
            if (null === b || -1 ===
                Function.toString.call(b).indexOf("[native code]")) return b;
            if ("function" !== typeof b) throw new TypeError("Super expression must either be null or a function");
            if ("undefined" !== typeof a) {
                if (a.has(b)) return a.get(b);
                a.set(b, c)
            }
            c.prototype = Object.create(b.prototype, {
                constructor: {
                    value: c,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            return m(c, b)
        };
        return v(b)
    }

    function w(b) {
        if (void 0 === b) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b
    }

    function G(b) {
        var a = B();
        return function() {
            var c = n(b);
            if (a) {
                var d = n(this).constructor;
                c = Reflect.construct(c, arguments, d)
            } else c = c.apply(this, arguments);
            c = !c || "object" !== typeof c && "function" !== typeof c ? w(this) : c;
            return c
        }
    }

    function C(b, a) {
        if (null == a || a > b.length) a = b.length;
        for (var c = 0, d = Array(a); c < a; c++) d[c] = b[c];
        return d
    }

    function p(b) {
        b = b.split(".");
        for (var a = [], c = 0; c < b.length; c++) {
            for (var d = b[c];
                "\\" === d[d.length - 1] && void 0 !== b[c + 1];) d = d.slice(0, -1) + ".", d += b[++c];
            a.push(d)
        }
        return H(a) ? a : []
    }
    var g = function(b) {
            var a = y(b);
            return null !==
                b && ("object" === a || "function" === a)
        },
        I = ["__proto__", "prototype", "constructor"],
        H = function(b) {
            return !b.some(function(a) {
                return I.includes(a)
            })
        },
        r = {
            get: function(b, a, c) {
                if (!g(b) || "string" !== typeof a) return void 0 === c ? b : c;
                a = p(a);
                if (0 !== a.length) {
                    for (var d = 0; d < a.length; d++) {
                        if (!Object.prototype.propertyIsEnumerable.call(b, a[d])) return c;
                        b = b[a[d]];
                        if (void 0 === b || null === b) {
                            if (d !== a.length - 1) return c;
                            break
                        }
                    }
                    return b
                }
            },
            set: function(b, a, c) {
                if (!g(b) || "string" !== typeof a) return b;
                var d = b;
                a = p(a);
                for (var f = 0; f < a.length; f++) {
                    var e =
                        a[f];
                    g(b[e]) || (b[e] = {});
                    f === a.length - 1 && (b[e] = c);
                    b = b[e]
                }
                return d
            },
            delete: function(b, a) {
                if (g(b) && "string" === typeof a) {
                    a = p(a);
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c];
                        if (c === a.length - 1) {
                            delete b[d];
                            break
                        }
                        b = b[d];
                        if (!g(b)) break
                    }
                }
            },
            has: function(b, a) {
                if (!g(b) || "string" !== typeof a) return !1;
                a = p(a);
                if (0 === a.length) return !1;
                for (var c = 0; c < a.length; c++)
                    if (g(b)) {
                        if (!(a[c] in b)) return !1;
                        b = b[a[c]]
                    } else return !1;
                return !0
            }
        },
        J = function(b) {
            b = b.charCodeAt(0).toString(16).toUpperCase();
            return "0x" + (b.length % 2 ? "0" : "") + b
        },
        D = function(b) {
            function a(b, f, e, h) {
                if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                var d = e || 20;
                if (f) {
                    var k = b.message.match(/^Unexpected token (.) .*position\s+(\d+)/i);
                    e = k ? +k[2] : b.message.match(/^Unexpected end of JSON.*/i) ? f.length - 1 : null;
                    k = k ? b.message.replace(/^Unexpected token ./, "Unexpected token ".concat(JSON.stringify(k[1]), " (").concat(J(k[1]), ")")) : b.message;
                    if (null !== e && void 0 !== e) {
                        var g = e <= d ? 0 : e - d;
                        d = e + d >= f.length ? f.length : e + d;
                        d = (0 === g ? "" : "...") + f.slice(g,
                            d) + (d === f.length ? "" : "...");
                        e = {
                            message: k + " while parsing ".concat(f === d ? "" : "near ").concat(JSON.stringify(d)),
                            position: e
                        }
                    } else e = {
                        message: k + " while parsing '".concat(f.slice(0, 2 * d), "'"),
                        position: 0
                    }
                } else e = {
                    message: b.message + " while parsing empty string",
                    position: 0
                };
                f = c.call(this, e.message);
                Object.assign(w(f), e);
                f.code = "EJSONPARSE";
                f.systemError = b;
                Error.captureStackTrace(w(f), h || f.constructor);
                return f
            }
            F(a, b);
            var c = G(a);
            E(a, [{
                    key: "name",
                    get: function() {
                        return this.constructor.name
                    },
                    set: function(a) {}
                },
                {
                    key: Symbol.toStringTag,
                    get: function() {
                        return this.constructor.name
                    }
                }
            ]);
            return a
        }(v(SyntaxError)),
        K = Symbol.for("indent"),
        L = Symbol.for("newline"),
        M = /^\s*[{\[]((?:\r?\n)+)([\s\t]*)/,
        l = function f(a, c, d) {
            var e = String(a).replace(/^\uFEFF/, "");
            d = d || 20;
            try {
                var h = e.match(M) || [, "", ""];
                var g = Array.isArray(h) ? h : void 0;
                var k;
                if (!(k = g))
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(h)) {
                        g = [];
                        var l = !0,
                            m = !1,
                            n = void 0;
                        try {
                            for (var p = h[Symbol.iterator](), r; !(l = (r = p.next()).done) && (g.push(r.value), 3 !== g.length); l = !0);
                        } catch (z) {
                            m = !0, n = z
                        } finally {
                            try {
                                if (!l && null != p["return"]) p["return"]()
                            } finally {
                                if (m) throw n;
                            }
                        }
                        k = g
                    } else k = void 0;
                var t;
                if (!(t = k)) a: {
                    if (h) {
                        if ("string" === typeof h) {
                            t = C(h, 3);
                            break a
                        }
                        var u = Object.prototype.toString.call(h).slice(8, -1);
                        "Object" === u && h.constructor && (u = h.constructor.name);
                        if ("Map" === u || "Set" === u) {
                            t = Array.from(h);
                            break a
                        }
                        if ("Arguments" === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) {
                            t = C(h, 3);
                            break a
                        }
                    }
                    t = void 0
                }
                var q;
                if (!(q = t)) throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                var v = q[1],
                    w = q[2],
                    x = JSON.parse(e, c);
                x && "object" === y(x) && (x[L] = v, x[K] = w);
                return x
            } catch (z) {
                if ("string" !== typeof a && !Buffer.isBuffer(a)) throw c = Array.isArray(a) && 0 === a.length, Object.assign(new TypeError("Cannot parse ".concat(c ? "an empty array" : String(a))), {
                    code: "EJSONPARSE",
                    systemError: z
                });
                throw new D(z, e, d, f);
            }
        };
    l.JSONParseError = D;
    l.noExceptions = function(a, c) {
        try {
            return JSON.parse(String(a).replace(/^\uFEFF/, ""), c)
        } catch (d) {}
    };
    class N {
        getInfo() {
            return {
                id: "JSON",
                name: "JSON",
                menuIconURI: JSONIcon,
                blockIconURI: JSONIcon,
                blocks: [{
                    opcode: "get",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Get [path] from [object] and use [defaultValue] if not found",
                    arguments: {
                        path: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "a.b"
                        },
                        object: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{"a":{"b":"Hello World"}}'
                        },
                        defaultValue: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Value not found"
                        }
                    }
                }, {
                    opcode: "set",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Set [path] in [object] to [value]",
                    arguments: {
                        path: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "a.c"
                        },
                        object: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{"a":{"b":"Hello World"}}'
                        },
                        value: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Lorem ipsum"
                        }
                    }
                }, {
                    opcode: "has",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Does [object] contain [path]",
                    arguments: {
                        object: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{"a":{"b":"Hello World"}}'
                        },
                        path: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "a.b"
                        }
                    }
                }, {
                    opcode: "delete",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "Delete [path] from [object]",
                    arguments: {
                        path: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "a.b"
                        },
                        object: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '{"a":{"b":"Hello World"}}'
                        }
                    }
                }]
            }
        }
        get({
            path: a,
            object: c,
            defaultValue: d
        }) {
            a = r.get(l(c), a, d);
            return "object" === typeof a ? JSON.stringify(a) : a
        }
        set({
            path: a,
            object: c,
            value: d
        }) {
            return JSON.stringify(r.set(l(c), a, d))
        }
        has({
            object: a,
            path: c
        }) {
            return r.has(l(a), c)
        }
        delete({
            object: a,
            path: c
        }) {
            a = l(a);
            r.delete(a, c);
            return JSON.stringify(a)
        }
    }
    Scratch.extensions.register(new N)
})()
