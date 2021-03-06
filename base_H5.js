 /*! js weidian 2015-03-19 */
var $ = function(a) {
    return a ? "object" == typeof a ? new B(a, a) : "string" == typeof a ? 0 === a.indexOf("#") ? new B(document.querySelector(a), a) : new B(document.querySelectorAll(a), a) : void 0 : null
}, $$ = function(a) {
    return 0 === a.indexOf("#") ? document.querySelector(a) : document.querySelectorAll(a)
}, B = function(a, b) {
    this.parent = function() {
        return new B(a.parentNode)
    }, this.find = function(b) {
        return new B(a.querySelectorAll(b))
    }, this.children = function(b) {
        return new B(b ? a.querySelectorAll(b) : a.children)
    }, this.eq = function(b) {
        return new B(a[b])
    }, this.each = function(b) {
        if (!(a && a.length && b))
            return 0;
        for (var c = a.length, d = 0; c > d; d++)
            b.call(a[d], d)
    }, this.length = function() {
        return a ? a.length ? a.length : a.innerHTML || a.value || a.tagName ? 1 : 0 : 0
    }, this.css = function(b, c) {
        if ("object" == typeof b) {
            for (var d in b) {
                var e = d, f = d.indexOf("-");
                if (-1 != f) {
                    var g = d.substring(f + 1, f + 2);
                    d = d.replace("-" + g, g.toUpperCase())
                }
                a.style[d] = b[e]
            }
            return this
        }
        var f = b.indexOf("-");
        if (-1 != f) {
            var g = b.substring(f + 1, f + 2);
            b = b.replace("-" + g, g.toUpperCase())
        }
        return b && !c ? a.style[b] : (a.style[b] = c, this)
    }, this.attr = function(b, c) {
        if ("object" == typeof b) {
            for (var d in b)
                a.setAttribute(d, b[d]);
            return this
        }
        return b && 1 === arguments.length ? a.getAttribute(b) : (a.setAttribute(b, c), this)
    }, this.val = function(b) {
        return b || "string" == typeof b ? (a.value = b, this) : a.value
    }, this.html = function(b) {
        var c = "number" == typeof b ? b.toString() : b;
        return c || "string" == typeof arguments[0] ? (a.innerHTML = c, this) : a.length ? a[0].innerHTML : a.innerHTML
    }, this.prev = function() {
        return new B(a.previousElementSibling)
    }, this.next = function() {
        return new B(a.nextElementSibling)
    }, this.addClass = function(b, c) {
        if (b) {
            var d = Number(this.length());
            if (d) {
                var e, f = document.createElement("div");
                if (e = f.classList ? c ? function(a) {
                    a.classList.remove(b)
                } : function(a) {
                    a.classList.add(b)
                } : c ? function(a) {
                    var c = a.className;
                    -1 != c.indexOf(b) && (a.className = c.replace(b, ""))
                } : function(a) {
                    var c = a.className;
                    -1 == c.indexOf(b) && (a.className = c + " " + b)
                }, 1 === d)
                    return e(a.length ? a[0] : a), this;
                for (var g = d; g--; )
                    e(a[g]);
                return a[d - 1]
            }
            return null
        }
        return this
    }, this.removeClass = function(a) {
        return this.addClass(a, !0)
    }, this.hasClass = function(b) {
        return a.classList ? a.classList.contains(b) : -1 != a.className.indexOf(b) ? !0 : !1
    }, this.hide = function() {
        return a.style.display = "none", this
    }, this.show = function() {
        return a.style.display = "block", this
    }, this.remove = function() {
        a.parentNode.removeChild(a)
    }, this.trigger = function(b) {
        var c = document.createEvent("Event");
        return c.initEvent(b, !0, !0), a.dispatchEvent(c), this
    }, this.bind = function(b, c) {
        if (a.length) {
            if (1 != a.length) {
                for (var d = this.length(), e = d; e--; )
                    a[e].addEventListener(b, function(a) {
                        c.call(this, a)
                    }, !1);
                return a[d - 1]
            }
            a[0].addEventListener(b, function(a) {
                c.call(this, a)
            }, !1)
        } else {
            if (!(a.innerHTML || a === window || a.value || a.tagName))
                return null;
            a.addEventListener(b, function(a) {
                c.call(this, a)
            }, !1)
        }
        return this
    }, this.live = function(a, c) {
        var d = b.substr(1);
        return document.addEventListener("click", function(a) {
            var b = $(a.target);
            b.hasClass(d) && c && c.call(a.target, a)
        }, !1), this
    }, this.unbind = function(b, c) {
        return a.removeEventListener(b, c, !1), this
    }, this.width = function() {
        return a.offsetWidth
    }, this.height = function() {
        return a.offsetHeight
    }, this.offset = function() {
        return {top: a.offsetTop,left: a.offsetLeft}
    }, this.append = function(b) {
        return "string" == typeof b ? a.innerHTML += b : a.appendChild(b), this
    }, this.prepend = function(b) {
        if ("string" == typeof b) {
            var c = a.innerHTML;
            a.innerHTML = b + c
        }
        return this
    }, this.fadeIn = function(b, c, d) {
        var e, f, g = document.createElement("div").style;
        "webkitTransition" in g ? (e = "webkitTransition", f = "webkitTransitionEnd") : (e = "transition", f = "transitionend");
        var h, i = this, j = !1;
        "function" == typeof b ? (h = 200, j = !0) : h = b > 200 ? b : 200, d ? (i.css(e, "opacity 200ms ease"), setTimeout(function() {
            i.css("opacity", .1);
            var d = function() {
                $(this).hide(), j ? b.call(this) : c && c.call(this), a.removeEventListener(f, d, !1)
            };
            a.addEventListener(f, d, !1)
        }, 100)) : (i.css(e, "opacity " + h + "ms ease").css({opacity: 0,display: "block"}), setTimeout(function() {
            i.css("opacity", 1);
            var d = function() {
                j ? b.call(this) : c && c.call(this), a.removeEventListener(f, d, !1)
            };
            a.addEventListener(f, d, !1)
        }, 100))
    }, this.fadeOut = function(a, b) {
        this.fadeIn(a, b, !0)
    }, this.animate = function(b, c, d, e, f) {
        var g, h, i = document.createElement("div").style, j = new Array;
        for (var k in b)
            j.push(k);
        "webkitTransition" in i ? (g = "webkitTransition", h = "webkitTransitionEnd") : (g = "transition", h = "transitionend");
        for (var l = function(a) {
            d ? d.call(this) : "", a.target.removeEventListener(h, l, !1)
        }, m = new Array, n = j.length, o = n; o--; )
            m.push(j[o] + " " + (c ? c / 1e3 + "s" : ".2s") + " " + (f ? f / 1e3 + "s" : "0s"));
        this.css(g, m.join(",")), a.addEventListener(h, l, !1);
        for (var p = n; p--; ) {
            var q = j[p];
            this.css(q, b[q])
        }
        return this
    }
}, M = {baseHost: "http://" + location.host,version: "1503190101",sUrl: function(a, b, c) {
        return a ? b ? "/item.html?itemID=" + b + (c ? "&" + c : "") : "/?userid=" + a + (c ? "&" + c : "") : void 0
    },toJSON: function(a) {
        return JSON.stringify(a)
    },json: function(a) {
        return JSON.parse(a)
    },post: function(a, b, c) {
        var d = new Date, e = d.getTime() + "_" + Math.random().toString().substr(2), f = "post_" + e;
        window[f] = function(a) {
            window[f] = void 0, c(a), h.removeChild(j), h.removeChild(i)
        };
        var g = document, h = g.body, i = g.createElement("iframe");
        i.style.display = "none", i.name = "post_iframe", i.src = "about:blank", h.appendChild(i);
        var j = g.createElement("form");
        j.action = a, j.method = "post", j.target = "post_iframe", j.style.display = "none";
        var k = g.createElement("textarea");
        k.name = "param", k.value = b, j.appendChild(k);
        var l = g.createElement("textarea");
        l.name = "callback", l.value = f, j.appendChild(l);
        var m = g.createElement("textarea");
        m.name = "callbackURL", m.value = M.baseHost + "/others/post_callback.html", j.appendChild(m), h.appendChild(j), j.submit()
    },orignPost: function(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("POST", a, !0), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d.onreadystatechange = function() {
            4 == d.readyState && 200 == d.status && c(M.json(d.responseText))
        }, d.send("param=" + b)
    },jsonp: function(a, b, c) {
        var d = new Date, e = d.getTime() + "_" + Math.random().toString().substr(2), f = "jsonpcallback_" + e, g = "interval_" + e;
        window[f] = function(a) {
            window[f] = void 0, b && b(a)
        }, window[g] = setInterval(function() {
            new Date - d > 8e3 && (clearInterval(window[g]), c && c())
        }, 100), M.loadScript(a + (-1 == a.indexOf("?") ? "?callback=" : "&callback=") + f, function() {
            clearInterval(window[g])
        })
    },ajax: function(a) {
        function b() {
            d.abort(), a.error && a.error()
        }
        var c = function(b) {
            "UDC" !== a.part || a.complate ? a.complate && a.complate(b) : 0 === Number(b.status.status_code) ? (console.log("请求ok"), a.success && a.success(b)) : (console.log("请求失败= " + b.status.status_reason), a.error ? a.error(b) : M._alert(b.status.status_reason))
        };
        if ("jsonp" === a.type)
            M.jsonp(a.url, function(a) {
                c(a)
            });
        else if ("get" === a.type) {
            var d = new XMLHttpRequest;
            d.open("GET", a.url, !0), d.send(), d.onreadystatechange = function() {
                if (4 == d.readyState)
                    switch (d.status) {
                        case 200:
                            a.success && a.success(M.json(d.responseText));
                            break;
                        case 404:
                            console.log("404--URL地址未找到"), b();
                            break;
                        case 500:
                            console.log("500--服务器错误"), b()
                    }
            }
        } else if ("post" === a.type) {
            var e = new XMLHttpRequest;
            e.open("POST", a.url, !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.onreadystatechange = function() {
                4 != e.readyState || 200 != e.status && 304 != e.status || a.complate(e.responseText)
            }, e.send(a.param)
        }
    },get: function(a, b) {
        function c() {
            d.abort()
        }
        var d = new XMLHttpRequest;
        d.open("GET", a, !0), d.send(), window.getAJAXVariable = d, d.onreadystatechange = function() {
            if (4 == d.readyState)
                switch (d.status) {
                    case 200:
                        b(M.json(d.responseText));
                        break;
                    case 404:
                        console.log("404--URL地址未找到"), c();
                        break;
                    case 500:
                        console.log("500--服务器错误"), c()
                }
        }
    },abortAJAX: function(a) {
        "get" == a.methond.toLowerCase() && (window.postAJAXVariable && window.postAJAXVariable.abort(), window.getAJAXVariable && window.getAJAXVariable.abort())
    },loadScript: function(a, b) {
        var c = document.createElement("script");
        c.readyState ? c.onreadystatechange = function() {
            ("loaded" == c.readyState || "complete" == c.readyState) && (c.onreadystatechange = null, b && b())
        } : c.onload = function() {
            b && b()
        }, c.src = a.indexOf("?") > 0 ? a + "&ver=" + M.version : a + "?ver=" + M.version;
        var d = document.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(c, d)
    },urlQuery: function(a) {
        var b = location.search;
        b = b.replace(/#[^&]*$/, "");
        var c = b.indexOf(a + "=");
        if (-1 != c) {
            var d = b.substr(c), e = new Array;
            return e = -1 == d.indexOf("&") ? d.split("=") : d.substr(0, d.indexOf("&")).split("="), e[1]
        }
        return ""
    },f_seller_id: function() {
        return M.urlQuery("f_seller_id")
    },getsellerUrl: function() {
        var a = M.urlQuery("f_seller_id");
        if (a) {
            M.setCookie("f_seller_id", a);
            var b = "&f_seller_id=" + a;
            return b
        }
        return ""
    },getCookie: function(a) {
        var b = document.cookie.indexOf(a + "="), c = document.cookie.indexOf(";", b);
        return -1 == b ? "" : unescape(document.cookie.substring(b + a.length + 1, c > b ? c : document.cookie.length))
    },setCookie: function(a, b, c) {
        var d = new Date;
        d.setTime(d.getTime() + 2592e6);
        var e = "; path=/" + (-1 != document.domain.indexOf("vdian.com") ? "; domain=vdian.com" : -1 != document.domain.indexOf("koudai.com") ? "; domain=koudai.com" : -1 != document.domain.indexOf("weidian.com") ? "; domain=weidian.com" : "");
        if ("object" == typeof a)
            for (var f in a) {
                var g = escape(f) + "=" + escape(a[f]);
                document.cookie = g + "; expires=" + d.toGMTString() + e
            }
        else {
            var g = escape(a) + "=" + escape(b);
            document.cookie = g + (c ? "" : "; expires=" + d.toGMTString()) + e
        }
    },delCookie: function(a) {
        var b = "; path=/" + (-1 != document.domain.indexOf("vdian.com") ? "; domain=vdian.com" : -1 != document.domain.indexOf("koudai.com") ? "; domain=koudai.com" : -1 != document.domain.indexOf("weidian.com") ? "; domain=weidian.com" : "");
        document.cookie = escape(a) + "=; expires=" + new Date(0).toUTCString() + b
    },clearCookie: function() {
        var a = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (a)
            for (var b = a.length, c = b; c--; )
                M.delCookie(a[c])
    },switchCookie: function() {
        var a = M.getCookie("WD_clear_domain"), b = M.getCookie("WD_a"), c = M.getCookie("WD_close_favor"), d = M.getCookie("WD_visit_log"), e = M.getCookie("lastReqTime"), f = M.getCookie("WD_guid"), g = M.getCookie("buyer_id"), h = M.getCookie("WD_s_id"), i = M.getCookie("WD_s_client"), j = M.getCookie("WD_s_wduss"), k = M.getCookie("WD_b_id"), l = M.getCookie("WD_b_wduss"), m = M.getCookie("WD_b_kduss"), n = M.getCookie("WD_b_tele"), o = M.getCookie("WD_b_country"), p = M.getCookie("unreadMsg"), q = M.getCookie("WD_wfr"), r = M.getCookie("from_appid"), s = M.getCookie("WD_pay"), t = M.getCookie("WD_NowPay"), u = M.getCookie("WD_unpay_oID"), v = M.getCookie("WD_unpay_oString"), w = M.getCookie("WD_dlBuyerAppBanner"), x = M.getCookie("IM_enter"), y = M.getCookie("IM_login_token"), z = M.getCookie("IM_anonymous_token"), A = M.getCookie("IM_unRead_fromID"), B = M.getCookie("IM_entry"), C = M.getCookie("IM_basePortUrl"), D = M.getCookie("IM_from_user_id"), E = M.getCookie("cart_seller_list"), F = new Array, G = M.getCookie("cart_inner_item_count");
        if (E)
            for (var H = E.split(","), I = H.length, J = 0; I > J; J++)
                F.push(M.getCookie("cart_" + H[J] + "_i"));
        if (!b)
            var K = M.getCookie("WD_temp_nam"), L = M.getCookie("WD_temp_tele"), N = M.getCookie("WD_temp_province"), O = M.getCookie("WD_temp_city"), P = M.getCookie("WD_temp_district"), Q = M.getCookie("WD_temp_add"), R = M.getCookie("WD_temp_remark"), S = M.getCookie("WD_temp_wxID");
        var T = M.getCookie("Market_go_market");
        if (T)
            var U = M.getCookie("Market_userid"), V = M.getCookie("Market_client"), W = M.getCookie("Market_wduss"), X = M.getCookie("Market_viewedPage"), Y = M.getCookie("Market_viewedPX"), Z = M.getCookie("Market_items_viewedPage"), $ = M.getCookie("Market_items_viewedPX");
        if (M.clearCookie(), M.setCookie({WD_clear_domain: a,buyer_id: g,WD_guid: f,WD_close_favor: c,WD_s_id: h,WD_s_client: i,WD_s_wduss: j,WD_b_id: k,WD_b_wduss: l,WD_b_kduss: m,WD_b_tele: n,WD_b_country: o,unreadMsg: p,WD_visit_log: d,lastReqTime: e,IM_enter: x,WD_wfr: q,from_appid: r,WD_pay: s,WD_NowPay: t,WD_unpay_oID: u,WD_unpay_oString: v,WD_dlBuyerAppBanner: w,IM_login_token: y,IM_anonymous_token: z,IM_unRead_fromID: A,IM_entry: B,IM_basePortUrl: C,IM_from_user_id: D,cart_seller_list: E,cart_inner_item_count: G}), E)
            for (var H = E.split(","), I = H.length, J = 0; I > J; J++)
                M.setCookie("cart_" + H[J] + "_i", F[J]);
        b ? M.setCookie("WD_a", b) : M.setCookie({WD_temp_nam: K,WD_temp_tele: L,WD_temp_province: N,WD_temp_city: O,WD_temp_district: P,WD_temp_add: Q,WD_temp_remark: R,WD_temp_wxID: S}), T && M.setCookie({Market_go_market: T,Market_userid: U,Market_client: V,Market_wduss: W,Market_viewedPage: X,Market_viewedPX: Y,Market_items_viewedPage: Z,Market_items_viewedPX: $})
    },ua: function() {
        return navigator.userAgent.toLowerCase()
    },isMobile: function() {
        return M.ua().match(/iPhone|iPad|iPod|Android|IEMobile/i)
    },isAndroid: function() {
        return -1 != M.ua().indexOf("android") ? 1 : 0
    },isIOS: function() {
        var a = M.ua();
        return -1 != a.indexOf("iphone") || -1 != a.indexOf("ipad") || -1 != a.indexOf("ipod") ? 1 : 0
    },platform: function() {
        return M.isMobile() ? M.isIOS() ? "IOS" : M.isAndroid() ? "Android" : "other-mobile" : "PC"
    },isWeixin: function() {
        return -1 != M.ua().indexOf("micromessenger") ? 1 : 0
    },isWeixinPay: function() {
        if (M.isWeixin()) {
            var a = M.ua(), b = a.substr(a.indexOf("micromessenger"), 18).split("/");
            return Number(b[1]) >= 5 ? 1 : 0
        }
        return 0
    },_alert: function(a, b, c) {
        function d(a) {
            c ? b && b() : setTimeout(function() {
                a.fadeOut(function() {
                    a.parent().fadeOut(function() {
                        $(this).remove()
                    }), b && b()
                })
            }, 1500)
        }
        if ($("#_alert_bg").length())
            $("#_alert_content").html(a), d($("#_alert_content"));
        else {
            var e = window.top.document, f = e.createElement("div");
            f.setAttribute("id", "_alert_bg"), e.body.appendChild(f);
            var g = e.createElement("div");
            g.setAttribute("id", "_alert_content"), f.appendChild(g), $(g).html(a).fadeIn(function() {
                d($(this))
            })
        }
    },_remove_alert: function(a) {
        $("#_alert_bg").length() ? $("#_alert_bg").fadeOut(function() {
            $(this).remove(), a && a()
        }) : a && a()
    },_confirm: function(a, b, c, d, e) {
        $("#_confirm_bg").length() && $("#_confirm_bg").remove();
        var f = document, g = f.createElement("div");
        g.setAttribute("id", "_confirm_bg"), f.body.appendChild(g);
        var h = f.createElement("div");
        h.setAttribute("id", "_confirm_content"), g.appendChild(h);
        var i = $("#_confirm_content"), j = "";
        j = j + "<div id='_confirm_text'>" + a + "</div>", j += "<div id='_confirm_btnW'>", c && c[0] ? (j = j + "<div id='_confirm_btnA' class='" + b[1] + "'>" + b[0] + "</div>", j = j + "<div id='_confirm_btnB' class='" + c[1] + "'>" + c[0] + "</div>") : j = j + "<div id='_confirm_btnA' class='" + b[1] + "' style='width:100%;border-right:none'>" + b[0] + "</div>", j += "</div>", i.html(j).fadeIn(), $("#_confirm_btnA").bind("click", function() {
            e && e(), i.fadeOut(), $("#_confirm_bg").fadeOut(function() {
                $(this).remove()
            })
        }), c && c[0] && $("#_confirm_btnB").bind("click", function() {
            d && d(), i.fadeOut(), $("#_confirm_bg").fadeOut(function() {
                $(this).remove()
            })
        })
    },isLogin: function() {
        return M.getCookie("WD_b_id") && M.getCookie("WD_b_wduss") && M.getCookie("WD_b_kduss") && M.getCookie("WD_b_tele") && M.getCookie("WD_b_country") ? 1 : 0
    },doLogin: function() {
        M.loadScript("http://s.koudai.com/script/common/doLogin.js")
    },doLogout: function(a) {
        M.delCookie("WD_b_id"), M.delCookie("WD_b_wduss"), M.delCookie("WD_b_kduss"), M.delCookie("WD_s_id"), M.delCookie("WD_s_wduss"), M.delCookie("defaultAdress"), M.delCookie("WD_pay"), M.delCookie("WD_NowPay"), M.delCookie("WD_unpay_oID"), M.delCookie("WD_unpay_oString"), M.delCookie("unreadMsg"), M.delCookie("cart_inner_item_count"), M.delCookie("IM_login_token"), a && a()
    },extend: function(a) {
        "object" == typeof E ? a && a() : M.loadScript("http://s.koudai.com/script/common/extend.js", function() {
            a && a()
        })
    },doHistory: function(a) {
        console.log("开始 doHistory " + a);
        var b = document.referrer, c = location.pathname;
        if (b && !M.urlQuery("hd_back") && -1 == b.indexOf(c)) {
            var d = -1 == b.indexOf("hd_back=1") ? -1 != b.indexOf("?") ? b + "&hd_back=1" : b + "?hd_back=1" : b;
            if (-1 != d.indexOf("code=") && -1 != d.indexOf("&state=isWXAddr")) {
                var e = d.indexOf("code="), f = d.substr(e), g = f.substr(0, f.indexOf("&state=isWXAddr")), h = -1 != d.indexOf("isWXAddr&") ? "isWXAddr&" : "isWXAddr", i = -1 != d.indexOf("&code=") ? "&" : "";
                d = d.replace(i + g + "&state=" + h, "")
            }
            M.setCookie(a, d, !0)
        } else if (!M.getCookie(a)) {
            var j = M.urlQuery("umk") || M.urlQuery("userid");
            j && M.setCookie(a, M.sUrl(j), !0)
        }
        M.getCookie(a) && $("#hd_back").attr("href", M.getCookie(a)).show()
    },cartUrl: function() {
        return "mycart.html"
    },gaq: function(a) {
        _paq.push(["trackEvent", a, "click", M.platform()])
    },trackVisit: function(a) {
        var b = a.frid ? "&frid=" + a.frid : "";
        M.jsonp("http://wd.koudai.com/stat/h5?buyer_id=" + M.getCookie("buyer_id") + "&track_type=" + a.track_type + "&item_id=" + a.item_id + "&user_id=" + a.user_id + "&guid=" + M.getCookie("WD_guid") + "&wfr=" + M.getCookie("WD_wfr") + b)
    },init: function() {
        if (-1 != M.ua().indexOf("msie 6.") || -1 != M.ua().indexOf("msie 7.") || -1 != M.ua().indexOf("msie 8.") || -1 != M.ua().indexOf("msie 9.")) {
            console = new Object, console.log = function() {
                return ""
            };
            var a = document, b = a.createElement("div");
            b.setAttribute("id", "ie_div"), b.innerHTML = "由于浏览器版本较低，部分结果可能无法正常展示，建议升级浏览器或使用Chrome Firefox Opera等浏览器", a.body.insertBefore(b, a.body.children[0])
        }
        console.log("%c手机开店用微店", "color:red"), console.log("http://weidian.com"), console.log("%c欢迎各路技术大牛携各门派语言入驻微店", "color:blue"), console.log("%c简历发送至 hr@koudai.com [注明-来自console]", "color:blue"), console.log("%c就！！等！！你！！来！！", "color:red"), console = new Object, console.log = function() {
            return ""
        };
        var c = document.domain;
        if (-1 != c.indexOf("vdian.com"))
            document.domain = "vdian.com";
        else if (-1 != c.indexOf("koudai.com")) {
            if (document.domain = "koudai.com", 1 !== Number(M.getCookie("WD_clear_domain"))) {
                console.log("begin_clear_domain");
                var d = function(a) {
                    document.cookie = escape(a) + "=; expires=" + new Date(0).toUTCString() + "; path=/", document.cookie = escape(a) + "=; expires=" + new Date(0).toUTCString() + "; path=/; domain=wd.koudai.com"
                }, e = function() {
                    var a = document.cookie.match(/[^ =;]+(?=\=)/g);
                    if (a)
                        for (var b = a.length, c = b; c--; )
                            d(a[c])
                };
                e(), M.setCookie("WD_clear_domain", 1)
            }
        } else
            -1 != c.indexOf("weidian.com") && (document.domain = "weidian.com");
        if (M.getCookie("WD_guid") || M.setCookie("WD_guid", (new Date).getTime() + "_" + Math.random().toString().substr(2)), M.urlQuery("appid") && M.setCookie("from_appid", M.urlQuery("appid")), M.getCookie("WD_i") && M.getCookie("WD_seller")) {
            console.log("base_H5 exchange");
            var f = M.getCookie("WD_seller"), g = M.getCookie("WD_i"), h = g.split("|"), i = h.length, j = "cart_" + f + "_i", k = new Array;
            M.setCookie("cart_seller_list", f);
            for (var l = 0; i > l; l++)
                Number(M.getCookie("WD_" + h[l])) && k.push(h[l] + "_" + M.getCookie("WD_" + h[l]));
            M.setCookie(j, k.join(",")), M.delCookie("WD_i")
        }
        if (M.urlQuery("b_id") && M.urlQuery("b_uss")) {
            M.switchCookie();
            var m = M.urlQuery("b_id"), n = M.urlQuery("b_uss");
            "wdapp" !== M.getCookie("WD_platform") && M.setCookie("WD_platform", "wdapp", !0);
            var o = {userID: m,wduss: n};
            M.jsonp("http://login.koudai.com/weidian/convertBuyerIdentity?param=" + M.toJSON(o), function(a) {
                if (0 === Number(a.status.status_code)) {
                    var b = a.result;
                    M.setCookie({WD_b_id: b.koudaiID,WD_b_wduss: b.wduss,WD_b_kduss: b.kduss,WD_b_tele: b.telephone,WD_b_country: b.country_code})
                }
            })
        }
        if (localStorage.length > 1) {
            for (var l in localStorage)
                M.setCookie(l, localStorage[l]);
            localStorage.clear()
        }
        $(".for_gaq").bind("click", function() {
            M.gaq($(this).attr("data-for-gaq"))
        }), (0 === location.href.indexOf("http://wd.koudai.com") || 0 === location.href.indexOf("http://weidian.com")) && (M.getCookie("WD_pay") || M.getCookie("WD_NowPay")) && M.getCookie("WD_unpay_oID") && M.getCookie("WD_unpay_oString") && M.loadScript("http://s.koudai.com/script/common/unpay_top_notice.js"), $("#common_hd_logo").length() && $("#common_hd_logo").attr("href", "##")
    }};
M.init();
var _paq = _paq || [];
_paq.push(["setCustomVariable", 1, "appname", "vdian.com", "visit"]), _paq.push(["trackPageView"]), _paq.push(["enableLinkTracking"]), function() {
    var a = "https:" === document.location.protocol ? 1 : 0, b = (a ? "https" : "http") + "://analysis.koudai.com/";
    _paq.push(["setTrackerUrl", b + "index.php"]), _paq.push(["setSiteId", 1]);
    var c = document, d = c.createElement("script"), e = c.getElementsByTagName("script")[0];
    d.type = "text/javascript", d.defer = !0, d.async = !0, d.src = a ? "https://analysis.koudai.com/piwik.js" : "http://static.koudai.com/analysis/piwik.js", e.parentNode.insertBefore(d, e)
}();
