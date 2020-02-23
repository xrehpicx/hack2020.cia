! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(o, i, function(n) {
                return e[n]
            }.bind(null, i));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function(e, n) {
    var t = function() {
        const e = document.getElementById.bind(document);
        let n = document.createElement("script");
        n.src = "https://www.google.com/recaptcha/api.js", n.async = !0, n.defer = !0, document.head.append(n);
        const t = "https://devfolio.co/",
            o = `${t}api/`,
            i = document.createElement("div");
        i.style.cssText = "box-sizing: border-box;display: none;height: 100%;left: 0px;overflow-y: visible;position: fixed;top: 0px;width: 100%;z-index: 1000000000;";
        const s = document.createElement("div");
        s.style.cssText = "align-items: center;background-color: rgba(39, 51, 57, 0.9);box-sizing: border-box;display: flex;font-family: Nunito Sans;height: 100%;justify-content: center;left: 0px;min-height: 100%;overflow-y: scroll;position: fixed;top: 0px;width: 100%;z-index: 1000000000;";
        const r = document.createElement("div");
        r.style.cssText = "display: inherit;max-width: 432px;padding: 0 24px 24px;width: 100%;";
        const a = document.createElement("div");
        a.style.cssText = "background-color: #FFFFFF;border-radius: 6px;box-shadow: 0 5px 16px 0 rgba(0,0,0,0.05);box-sizing: border-box;margin-bottom: 144px;max-width: 432px;padding: 0 24px 24px;position: absolute;transform: translateY(-86px);width: 100%;z-index: 1000000001;", document.createElement("div").style.cssText = "width: 48px;height: 48px;animation: devfolio-rotate360 1.2s linear 0s infinite;border-width: 3px;border-style: solid;border-color: #f1f2f3 #f1f2f3 #f1f2f3 #3770ff;border-image: initial;border-radius: 50%;margin: 0px 16px 0px 0px;position: absolute;";
        const l = "\n    @import url('https://fonts.googleapis.com/css?family=Montserrat:500,600|Nunito+Sans:400,600');\n    .devfolio-textfield:focus {\n        background-color: #fafbfb !important;\n        border: 2px solid #3770ff !important;\n    }\n    .devfolio-textfield:focus::-webkit-input-placeholder { color: #273339; }\n    .devfolio-btn:not([disabled]) { cursor: pointer; }\n    .devfolio-btn:hover { background-color:#2954bf !important; }\n    @media only screen and (max-width: 600px) {\n        #devfolio-blocks { display:none !important; }\n        #devfolio-close-button { right: -24px !important; }\n    }\n    #devfolio-close-button {\n        position: absolute;\n        right: 24px;\n        top: 24px;\n        border: none;\n        background: transparent;\n        cursor: pointer\n    }\n    @keyframes devfolio-rotate360 {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n    }\n    .devfolio-spinner { display: inline-block !important; }\n    #devfolio-loading-spinner {\n        width: 64px;\n        height: 64px;\n    }\n    .devfolio-textfield.error {\n        border: 2px solid #ff4d4d !important;\n        background-color: #f4e7e7 !important;\n    }\n    .grecaptcha-badge { \n        visibility: hidden;\n    }\n    ",
            d = "left: 0; position: absolute; width: 100%; border-radius: 3px; background-color: #3770FF; color: #FFFFFF; height: 56px; font-size: 21px;font-weight: 600;line-height: 28px;text-align: center; padding: 0; border: none; font-family: Nunito Sans; bottom: -88px; display: flex; justify-content: center;",
            c = "background: none; display: inline-flex; border: none; padding: 0; font-size: 16px; font-family: Nunito Sans; cursor: pointer; color: #3770ff",
            p = "display: flex; flex-direction: column;",
            h = "background-color: #CBF8F0; border-radius: 3px; height: 48px; outline: none; color: #125045; font-size: 17px; line-height: 25px; margin-top: 8px; padding: 0 16px; border: 2px solid #CBF8F0';",
            f = "display: none; color: #ff3838; font-weight: 400; font-size: 13px; line-height: 18px; margin-top: 4px;",
            u = "height: 19px; color: #273339; font-family: Montserrat; font-size: 15px; font-weight: 500; line-height: 19px; margin-top: 24px",
            g = "margin-top: 16px; font-size: 16px",
            m = "display: none; height: 20px; width: 20px; animation: devfolio-rotate360 1.2s linear 0s infinite; border-width: 3px; border-style: solid; border-color: #f1f2f3 #f1f2f3 #f1f2f3 #3770ff; border-image: initial; border-radius: 50%; margin: 0px 16px 0px 0px;",
            y = `\n    <form id='devfolio-register-form' style='${p}'>\n    <label style='${u}' for='devfolio-si-em'>Email</label>\n    <input style='${h}' type='email' id='devfolio-si-em' class='devfolio-textfield' required />\n    <span style='${f}' id='error-signup-email-exists'>Someone (maybe you?) has already created an account using this email.</span>\n    <span style='${f}' id='error-signup-email-invalid'>Please enter a valid email address. For eg. example@email.com</span>\n    <label style='${u}' for='devfolio-si-us'>Username</label>\n    <input style='${h}' type='text' id='devfolio-si-us' class='devfolio-textfield' required /><span style='${f}' id='error-signup-username-unavailable'>Another user with this username already exists. Please try a different username.</span>\n    <span style='${f}' id='error-signup-username-invalid'>Invalid username</span>\n    <label style='${u}' for='devfolio-si-pa'>Password</label>\n    <input style='${h}' type='password' id='devfolio-si-pa' class='devfolio-textfield' required />\n    <span style='${f}' id='error-signup-password-invalid'>A password must be at least eight characters long</span>     <span style='${g}'>\n        Already have an account?\n        <button style='${c}' type='button' id='devfolio-has-account'>Log in here</button>\n    </span>\n    <button class='devfolio-btn' id='devfolio-register-btn' style='${d}'>\n        <span id='devfolio-register-spinner' style='${m}'></span>\n        Continue\n    </button>\n    </form>\n    `,
            v = `\n    <form id='devfolio-login-form' style='${p}'>\n    <label style='${u}' for='devfolio-us'>Username or Email</label>\n    <input style='${h}' type='text' id='devfolio-us' class='devfolio-textfield' required />\n    <span style='${f}' id='error-invalid-username'>Sorry, we couldn't find an account with that username or email.</span>\n    <label style='${u}' for='devfolio-pa'>Password</label>\n    <input style='${h}' type='password' id='devfolio-pa' class='devfolio-textfield' required/>\n    <span style='${f}' id='error-invalid-password'>Sorry, that password isn't right.</span>\n    <span style='${g}'>\n        <button style='${c}' type='button' id='devfolio-fp'>Forgot password?</button>\n    </span>\n    <span style='${g}'>\n        Don't have an account?\n        <button style='${c}' type='button' id='devfolio-no-account'>Create one here</button>\n    </span>\n    <div id='recaptcha' class="g-recaptcha"\n          data-sitekey="6LexNNUUAAAAAN_eHY_-SHuzT1JjQZ-hbUebX35S"\n          data-callback="executeLogin"\n          data-size="invisible"></div>\n    <span style='${"display:block; font-family:Nunito Sans; font-size:14px; color:#69757A; margin-top:16px;"}'>\n        This site is protected by reCAPTCHA and the Google&nbsp;\n        <a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;\n        <a href="https://policies.google.com/terms">Terms of Service</a> apply.\n    </span>\n    <button class='devfolio-btn' id='devfolio-login-btn' style='${d}'>\n        <span id='devfolio-login-spinner' style='${m}'></span>\n        Continue\n    </button>\n    </form>\n    `,
            b = `\n    <div style='${"position: absolute; top: -250px; left: 0"}'>\n    <div style='${"display: flex; align-items: center; border-radius: 8px; background-color: #F2F2F3; padding: 16px 24px; max-width: 432px; box-sizing: border-box;margin-bottom: 30px; margin-top: 24px;"}'><span id="devfolio-hint" style='${" height: 47px; color: #273339; font-size: 17px; font-weight: bold; line-height: 23px;"}'>Create a Devfolio account to continue your application <span id='devfolio-hackathon-name'></span></span></div>\n    <div style='${"max-height: 32px"}'>\n    <svg height="32" enable-background="new 0 0 137 30" viewBox="0 0 137 30" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" transform="translate(-1)"><g>\n    <path d="m35.3 6.5h7.4c1.8 0 3.6.3 5.2 1.1 1.4.7 2.6 1.8 3.3 3.1.8 1.5 1.2 3.2 1.2 4.9s-.4 3.4-1.2 4.9c-.8 1.4-1.9 2.5-3.3 3.1-1.6.8-3.4 1.1-5.2 1.1h-7.4zm7.1 14.4c1.5.1 2.9-.4 4-1.3 1-1.1 1.4-2.5 1.3-4 .1-1.5-.4-2.9-1.3-4-1.1-.9-2.5-1.4-4-1.3h-2.4v10.6z"/><path d="m66.6 19.2h-7.8c.1.7.4 1.3.9 1.8.6.4 1.3.6 2 .5 1.3 0 2.5-.4 3.6-1.2l1.2 3c-.7.5-1.5.9-2.3 1.1-.9.3-1.8.4-2.7.4-1.3 0-2.6-.2-3.8-.8-1-.5-1.9-1.3-2.5-2.3-.6-1.1-.9-2.3-.9-3.5s.3-2.4.8-3.4 1.3-1.8 2.3-2.4 2.1-.9 3.3-.8c1.6-.1 3.2.6 4.3 1.8 1.1 1.3 1.7 3 1.6 4.8zm-7.9-2.2h4c-.1-1.5-.8-2.3-2-2.3s-1.9.8-2 2.3z"/><path d="m77.1 12h4.5l-5.7 12.7h-3.8l-5.5-12.7h4.8l2.8 7.1z"/><path d="m89.6 12h3v3.4h-3v9.3h-4.6v-9.3h-2.3v-3.4h2.3c0-1.5.6-3 1.7-4 1.4-1 3.1-1.6 4.8-1.5l1.6-.1.3 3.3-1.2.1c-.7 0-1.4.1-2 .4-.4.3-.6.8-.6 1.4z"/><path d="m96.7 24.1c-1-.5-1.9-1.3-2.4-2.3-.6-1.1-.9-2.3-.9-3.5s.3-2.4.9-3.5c.6-1 1.4-1.8 2.4-2.3 2.3-1.1 5-1.1 7.4 0 1 .5 1.9 1.3 2.4 2.3.6 1.1.9 2.3.9 3.5s-.3 2.4-.9 3.5c-.6 1-1.4 1.8-2.5 2.3-2.3 1.1-5 1.1-7.3 0zm6.1-5.9c0-2.1-.8-3.2-2.4-3.2s-2.4 1.1-2.4 3.2.8 3.2 2.4 3.2 2.4-1 2.4-3.2z"/><path d="m109.4 24.7v-18.2h4.6v18.2z"/><path d="m116.6 5.6h4.8v4.2h-4.8zm.1 19v-12.6h4.6v12.7z"/><path d="m126.7 24.1c-1-.5-1.9-1.3-2.4-2.3-.6-1.1-.9-2.3-.9-3.5s.3-2.4.9-3.5c.6-1 1.4-1.8 2.4-2.3 2.3-1.1 5-1.1 7.4 0 1 .5 1.9 1.3 2.4 2.3.6 1.1.9 2.3.9 3.5s-.3 2.4-.9 3.5c-.6 1-1.4 1.8-2.5 2.3-2.3 1.1-5 1.1-7.3 0zm6.1-5.9c0-2.1-.8-3.2-2.4-3.2s-2.4 1.1-2.4 3.2.8 3.2 2.4 3.2 2.4-1 2.4-3.2z"/></g><g><path d="m27 16.7c.1 6.6-4.9 12.1-11.4 12.7 0 0-8.2.2-10.9 0-1-.1-1.9-.8-2.3-1.7.3.2.7.3 1.1.3.9.1 2.4.1 4.5.1 3.1 0 6.5-.1 6.5-.1h.1c3.4-.3 6.5-1.9 8.8-4.4 1.9-2.1 3.2-4.8 3.5-7.7z"/><path d="m26 13.9c.1 6.6-4.9 12.1-11.5 12.7 0 0-8.2.2-10.9 0-1.5-.2-2.6-1.5-2.6-3.1v-19.3c0-1.5 1.1-2.9 2.7-3.1 2.7-.2 10.9 0 10.9 0 6.5.6 11.5 6.2 11.4 12.8z"/>\n    </g></g></svg>\n    </div><span style='${"color: #FFFFFF; font-size: 22px; font-weight: 600; line-height: 30px; margin: 16px 0; display: flex"}'>Your one application<br/>to the best hackathons</span>\n    </div>\n    `,
            x = document.createElement("button");

        function w(n, o, i = !1) {
            const {
                access_token: s,
                refresh_token: r,
                username: a
            } = n, l = Date.now(), d = o.hackathon_setting, c = `${t}apply/${o.slug}?hackathon_id=${o.uuid}&username=${a}&access_token=${s}&refresh_token=${r.concat(i?"&ref=signin":"")}`;
            Date.parse(d.reg_ends_at) >= l && l >= Date.parse(d.reg_starts_at) && (_.apply(a, o.uuid, s).then(function(n) {
                if (n.hasOwnProperty("error")) {
                    const t = e("devfolio-hint");
                    t.style.border = "2px solid #FF3838", t.style.backgroundColor = "#F4E7E7", "Can't apply, hackathon registration are close." === n.error.message ? t.innerHTML = "Unable to apply since the hackathon registration period is now over" : t.innerHTML = "Unable to apply to the hackathon"
                } else window.location.replace(c)
            }).catch(function(e) {
                console.error("Apply error", e)
            }), e("devfolio-login-spinner").removeAttribute("class"), e("devfolio-register-spinner").removeAttribute("class"))
        }
        x.setAttribute("id", "devfolio-close-button"), x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', a.innerHTML = b + y + v, r.appendChild(a), s.appendChild(r), s.appendChild(x), i.appendChild(s);
        const k = {
            "Content-Type": "application/json; charset=utf-8"
        };

        function $(e = "", n = {}, t = k) {
            return fetch(e, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: t,
                referrer: "no-referrer",
                body: JSON.stringify(n)
            }).then(function(e) {
                return e.json()
            }).catch(function(e) {
                return e
            })
        }
        const _ = {
            login: function(e, n, t) {
                return $(`${o}users/signin`, {
                    username: e,
                    password: n,
                    captcha_response: t
                })
            },
            register: function(e, n, t) {
                return $(`${o}users`, {
                    email: n,
                    password: t,
                    username: e
                })
            },
            apply: function(e, n, t) {
                return $(`${o}users/${e}/hackathon/${n}/apply`, {}, {
                    "Content-Type": "application/json; charset=utf-8",
                    access_token: t
                })
            },
            getHackathon: function(e) {
                return function(e = "", n = k) {
                    return fetch(e, {
                        method: "GET",
                        mode: "cors",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: n,
                        referrer: "no-referrer"
                    }).then(function(e) {
                        return e.json()
                    }).catch(function(e) {
                        return e
                    })
                }(`${o}hackathons/${e}`)
            }
        };
        return function({
            persistModal: n,
            buttonSelector: o,
            key: r
        }) {
            document.body.appendChild(i);
            const a = document.querySelector(o),
                d = '<svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 115.46 123.46" style="height:24px;width:24px;margin-right:8px"><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"/><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>';
            a.innerHTML = `${d}Apply with Devfolio`, a.style.textTransform = "none";
            const c = document.getElementsByTagName("head")[0],
                p = document.createElement("style");
            p.type = "text/css", p.appendChild(document.createTextNode(l)), c.appendChild(p), n || _.getHackathon(r).then(function(e) {
                this.hackathon = e, this.hackathon.is_online && (this.hackathon.hackathon_setting.reg_ends_at = this.hackathon.ends_at, this.hackathon.hackathon_setting.reg_starts_at = this.hackathon.hackathon_setting.reg_starts_at || (new Date).toISOString()), Date.parse(this.hackathon.hackathon_setting.reg_ends_at) <= Date.now() ? (a.innerHTML = `${d}Go to Dashboard`, a.addEventListener("click", function() {
                    window.location.href = t + this.hackathon.slug + "/dashboard"
                }.bind(this))) : Date.now() >= Date.parse(this.hackathon.hackathon_setting.reg_starts_at) ? (a.disabled = !1, a.addEventListener("click", function() {
                    this.open()
                }.bind(this))) : (a.disabled = !0, a.innerHTML = `${d}Applications open soon`)
            }.bind(this)).catch(function() {
                a.addEventListener("click", function() {
                    window.location.href = t + "external-apply/" + r
                })
            }), this.open = async function() {
                n && await _.getHackathon(r).then(function(e) {
                    this.hackathon = e, this.hackathon.is_online && (this.hackathon.hackathon_setting.reg_ends_at = this.hackathon.ends_at, this.hackathon.hackathon_setting.reg_starts_at = this.hackathon.hackathon_setting.reg_starts_at || (new Date).toISOString())
                }.bind(this)), this.hackathon.hasOwnProperty("name") && (e("devfolio-hackathon-name").innerHTML = "to " + this.hackathon.name), i.style.display = "block";
                const o = {
                        login: e("devfolio-login-form"),
                        register: e("devfolio-register-form")
                    },
                    s = {
                        username: e("devfolio-us"),
                        password: e("devfolio-pa")
                    },
                    a = {
                        username: e("devfolio-si-us"),
                        email: e("devfolio-si-em"),
                        password: e("devfolio-si-pa")
                    },
                    l = e("error-invalid-username"),
                    d = e("error-invalid-password"),
                    c = e("error-signup-email-exists"),
                    p = e("error-signup-email-invalid"),
                    h = e("error-signup-password-invalid"),
                    f = e("error-signup-username-invalid"),
                    u = e("error-signup-username-unavailable"),
                    g = {
                        login: e("devfolio-login-spinner"),
                        register: e("devfolio-register-spinner")
                    };
                document.body.style.overflow = "hidden", o.login.style.display = "none", o.register.style.display = "flex", e("devfolio-no-account").addEventListener("click", function() {
                    o.login.style.display = "none", o.register.style.display = "flex"
                }), e("devfolio-fp").addEventListener("click", function() {
                    window.open(`${t}forgot-password/`, "_blank").focus()
                }), e("devfolio-has-account").addEventListener("click", function() {
                    o.login.style.display = "flex", o.register.style.display = "none"
                }), x.addEventListener("click", function() {
                    this.close()
                }.bind(this)), s.username.addEventListener("input", function() {
                    s.username.classList.contains("error") && (s.username.classList.remove("error"), l.style.display = "none")
                }), s.password.addEventListener("input", function() {
                    s.password.classList.contains("error") && (s.password.classList.remove("error"), d.style.display = "none")
                }), a.username.addEventListener("input", function() {
                    a.username.classList.contains("error") && (a.username.classList.remove("error"), f.style.display = "none", u.style.display = "none")
                }), a.password.addEventListener("input", function() {
                    a.password.classList.contains("error") && (a.password.classList.remove("error"), h.style.display = "none")
                }), a.email.addEventListener("input", function() {
                    a.email.classList.contains("error") && (a.email.classList.remove("error"), c.style.display = "none", p.style.display = "none")
                }), window.executeLogin = function(n) {
                    g.login.setAttribute("class", "devfolio-spinner");
                    const t = e("devfolio-us"),
                        o = e("devfolio-pa");
                    _.login(t.value, o.value, n).then(function(e) {
                        if (e.hasOwnProperty("error")) {
                            if (g.login.removeAttribute("class"), e.hasOwnProperty("error")) switch (e.error.message) {
                                case "Invalid username":
                                    t.classList.add("error"), l.style.display = "inline";
                                    break;
                                case "Invalid Password":
                                    o.classList.add("error"), d.style.display = "inline"
                            }
                        } else w(e, this.hackathon, !0)
                    }.bind(this)).catch(function(e) {
                        g.login.removeAttribute("class"), console.error("Unknown login error", e)
                    }).finally(function() {
                        grecaptcha.reset()
                    })
                }.bind(this), o.login.addEventListener("submit", function(e) {
                    e.preventDefault(), grecaptcha.execute()
                }.bind(this)), o.register.addEventListener("submit", function(n) {
                    n.preventDefault(), g.register.setAttribute("class", "devfolio-spinner");
                    const t = e("devfolio-si-us"),
                        o = e("devfolio-si-em"),
                        i = e("devfolio-si-pa");
                    _.register(t.value, o.value, i.value).then(function(e) {
                        if (e.hasOwnProperty("error")) {
                            if (g.register.removeAttribute("class"), e.hasOwnProperty("error") && "The server received a request that could not be processed." === e.error.message) {
                                const n = e.error.source;
                                if (n.hasOwnProperty("email")) switch (o.classList.add("error"), n.email.msg) {
                                    case "must be an email":
                                        p.style.display = "inline";
                                        break;
                                    case "email already in use":
                                        c.style.display = "inline";
                                        break;
                                    default:
                                        throw new Error("Error with email")
                                }
                                if (n.hasOwnProperty("username")) switch (t.classList.add("error"), n.username.msg) {
                                    case "username not available":
                                        u.style.display = "inline";
                                        break;
                                    case "invalid username":
                                        f.style.display = "inline";
                                        break;
                                    default:
                                        throw new Error("Error with username")
                                }
                                if (n.hasOwnProperty("password")) switch (i.classList.add("error"), n.password.msg) {
                                    case "password must be atleast 8 characters long":
                                        h.style.display = "inline";
                                        break;
                                    default:
                                        throw new Error("Error with password")
                                }
                            }
                        } else w(e, this.hackathon)
                    }.bind(this)).catch(function(e) {
                        g.register.removeAttribute("class"), console.error("Unknown registration error", e)
                    })
                }.bind(this))
            }, n && (x.style.display = "none", this.open()), this.close = function() {
                i.style.display = "none", document.body.style.overflow = "auto", window.removeEventListener("keydown", h), window.removeEventListener("click", f)
            };
            var h = function(e) {
                    27 == e.keyCode && this.close()
                }.bind(this),
                f = function(e) {
                    e.target == s && this.close()
                }.bind(this);
            n || (window.addEventListener("keydown", h), window.addEventListener("click", f))
        }
    }();
    window.Devfolio = t
}]);
! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(o, i, function(n) {
                return e[n]
            }.bind(null, i));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function(e, n) {
    var t = function() {
        const e = document.getElementById.bind(document);
        let n = document.createElement("script");
        n.src = "https://www.google.com/recaptcha/api.js", n.async = !0, n.defer = !0, document.head.append(n);
        const t = "https://devfolio.co/",
            o = `${t}api/`,
            i = document.createElement("div");
        i.style.cssText = "box-sizing: border-box;display: none;height: 100%;left: 0px;overflow-y: visible;position: fixed;top: 0px;width: 100%;z-index: 1000000000;";
        const s = document.createElement("div");
        s.style.cssText = "align-items: center;background-color: rgba(39, 51, 57, 0.9);box-sizing: border-box;display: flex;font-family: Nunito Sans;height: 100%;justify-content: center;left: 0px;min-height: 100%;overflow-y: scroll;position: fixed;top: 0px;width: 100%;z-index: 1000000000;";
        const r = document.createElement("div");
        r.style.cssText = "display: inherit;max-width: 432px;padding: 0 24px 24px;width: 100%;";
        const a = document.createElement("div");
        a.style.cssText = "background-color: #FFFFFF;border-radius: 6px;box-shadow: 0 5px 16px 0 rgba(0,0,0,0.05);box-sizing: border-box;margin-bottom: 144px;max-width: 432px;padding: 0 24px 24px;position: absolute;transform: translateY(-86px);width: 100%;z-index: 1000000001;", document.createElement("div").style.cssText = "width: 48px;height: 48px;animation: devfolio-rotate360 1.2s linear 0s infinite;border-width: 3px;border-style: solid;border-color: #f1f2f3 #f1f2f3 #f1f2f3 #3770ff;border-image: initial;border-radius: 50%;margin: 0px 16px 0px 0px;position: absolute;";
        const l = "\n    @import url('https://fonts.googleapis.com/css?family=Montserrat:500,600|Nunito+Sans:400,600');\n    .devfolio-textfield:focus {\n        background-color: #fafbfb !important;\n        border: 2px solid #3770ff !important;\n    }\n    .devfolio-textfield:focus::-webkit-input-placeholder { color: #273339; }\n    .devfolio-btn:not([disabled]) { cursor: pointer; }\n    .devfolio-btn:hover { background-color:#2954bf !important; }\n    @media only screen and (max-width: 600px) {\n        #devfolio-blocks { display:none !important; }\n        #devfolio-close-button { right: -24px !important; }\n    }\n    #devfolio-close-button {\n        position: absolute;\n        right: 24px;\n        top: 24px;\n        border: none;\n        background: transparent;\n        cursor: pointer\n    }\n    @keyframes devfolio-rotate360 {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n    }\n    .devfolio-spinner { display: inline-block !important; }\n    #devfolio-loading-spinner {\n        width: 64px;\n        height: 64px;\n    }\n    .devfolio-textfield.error {\n        border: 2px solid #ff4d4d !important;\n        background-color: #f4e7e7 !important;\n    }\n    .grecaptcha-badge { \n        visibility: hidden;\n    }\n    ",
            d = "left: 0; position: absolute; width: 100%; border-radius: 3px; background-color: #3770FF; color: #FFFFFF; height: 56px; font-size: 21px;font-weight: 600;line-height: 28px;text-align: center; padding: 0; border: none; font-family: Nunito Sans; bottom: -88px; display: flex; justify-content: center;",
            c = "background: none; display: inline-flex; border: none; padding: 0; font-size: 16px; font-family: Nunito Sans; cursor: pointer; color: #3770ff",
            p = "display: flex; flex-direction: column;",
            h = "background-color: #CBF8F0; border-radius: 3px; height: 48px; outline: none; color: #125045; font-size: 17px; line-height: 25px; margin-top: 8px; padding: 0 16px; border: 2px solid #CBF8F0';",
            f = "display: none; color: #ff3838; font-weight: 400; font-size: 13px; line-height: 18px; margin-top: 4px;",
            u = "height: 19px; color: #273339; font-family: Montserrat; font-size: 15px; font-weight: 500; line-height: 19px; margin-top: 24px",
            g = "margin-top: 16px; font-size: 16px",
            m = "display: none; height: 20px; width: 20px; animation: devfolio-rotate360 1.2s linear 0s infinite; border-width: 3px; border-style: solid; border-color: #f1f2f3 #f1f2f3 #f1f2f3 #3770ff; border-image: initial; border-radius: 50%; margin: 0px 16px 0px 0px;",
            y = `\n    <form id='devfolio-register-form' style='${p}'>\n    <label style='${u}' for='devfolio-si-em'>Email</label>\n    <input style='${h}' type='email' id='devfolio-si-em' class='devfolio-textfield' required />\n    <span style='${f}' id='error-signup-email-exists'>Someone (maybe you?) has already created an account using this email.</span>\n    <span style='${f}' id='error-signup-email-invalid'>Please enter a valid email address. For eg. example@email.com</span>\n    <label style='${u}' for='devfolio-si-us'>Username</label>\n    <input style='${h}' type='text' id='devfolio-si-us' class='devfolio-textfield' required /><span style='${f}' id='error-signup-username-unavailable'>Another user with this username already exists. Please try a different username.</span>\n    <span style='${f}' id='error-signup-username-invalid'>Invalid username</span>\n    <label style='${u}' for='devfolio-si-pa'>Password</label>\n    <input style='${h}' type='password' id='devfolio-si-pa' class='devfolio-textfield' required />\n    <span style='${f}' id='error-signup-password-invalid'>A password must be at least eight characters long</span>     <span style='${g}'>\n        Already have an account?\n        <button style='${c}' type='button' id='devfolio-has-account'>Log in here</button>\n    </span>\n    <button class='devfolio-btn' id='devfolio-register-btn' style='${d}'>\n        <span id='devfolio-register-spinner' style='${m}'></span>\n        Continue\n    </button>\n    </form>\n    `,
            v = `\n    <form id='devfolio-login-form' style='${p}'>\n    <label style='${u}' for='devfolio-us'>Username or Email</label>\n    <input style='${h}' type='text' id='devfolio-us' class='devfolio-textfield' required />\n    <span style='${f}' id='error-invalid-username'>Sorry, we couldn't find an account with that username or email.</span>\n    <label style='${u}' for='devfolio-pa'>Password</label>\n    <input style='${h}' type='password' id='devfolio-pa' class='devfolio-textfield' required/>\n    <span style='${f}' id='error-invalid-password'>Sorry, that password isn't right.</span>\n    <span style='${g}'>\n        <button style='${c}' type='button' id='devfolio-fp'>Forgot password?</button>\n    </span>\n    <span style='${g}'>\n        Don't have an account?\n        <button style='${c}' type='button' id='devfolio-no-account'>Create one here</button>\n    </span>\n    <div id='recaptcha' class="g-recaptcha"\n          data-sitekey="6LexNNUUAAAAAN_eHY_-SHuzT1JjQZ-hbUebX35S"\n          data-callback="executeLogin"\n          data-size="invisible"></div>\n    <span style='${"display:block; font-family:Nunito Sans; font-size:14px; color:#69757A; margin-top:16px;"}'>\n        This site is protected by reCAPTCHA and the Google&nbsp;\n        <a href="https://policies.google.com/privacy">Privacy Policy</a> and&nbsp;\n        <a href="https://policies.google.com/terms">Terms of Service</a> apply.\n    </span>\n    <button class='devfolio-btn' id='devfolio-login-btn' style='${d}'>\n        <span id='devfolio-login-spinner' style='${m}'></span>\n        Continue\n    </button>\n    </form>\n    `,
            b = `\n    <div style='${"position: absolute; top: -250px; left: 0"}'>\n    <div style='${"display: flex; align-items: center; border-radius: 8px; background-color: #F2F2F3; padding: 16px 24px; max-width: 432px; box-sizing: border-box;margin-bottom: 30px; margin-top: 24px;"}'><span id="devfolio-hint" style='${" height: 47px; color: #273339; font-size: 17px; font-weight: bold; line-height: 23px;"}'>Create a Devfolio account to continue your application <span id='devfolio-hackathon-name'></span></span></div>\n    <div style='${"max-height: 32px"}'>\n    <svg height="32" enable-background="new 0 0 137 30" viewBox="0 0 137 30" xmlns="http://www.w3.org/2000/svg"><g fill="#fff" transform="translate(-1)"><g>\n    <path d="m35.3 6.5h7.4c1.8 0 3.6.3 5.2 1.1 1.4.7 2.6 1.8 3.3 3.1.8 1.5 1.2 3.2 1.2 4.9s-.4 3.4-1.2 4.9c-.8 1.4-1.9 2.5-3.3 3.1-1.6.8-3.4 1.1-5.2 1.1h-7.4zm7.1 14.4c1.5.1 2.9-.4 4-1.3 1-1.1 1.4-2.5 1.3-4 .1-1.5-.4-2.9-1.3-4-1.1-.9-2.5-1.4-4-1.3h-2.4v10.6z"/><path d="m66.6 19.2h-7.8c.1.7.4 1.3.9 1.8.6.4 1.3.6 2 .5 1.3 0 2.5-.4 3.6-1.2l1.2 3c-.7.5-1.5.9-2.3 1.1-.9.3-1.8.4-2.7.4-1.3 0-2.6-.2-3.8-.8-1-.5-1.9-1.3-2.5-2.3-.6-1.1-.9-2.3-.9-3.5s.3-2.4.8-3.4 1.3-1.8 2.3-2.4 2.1-.9 3.3-.8c1.6-.1 3.2.6 4.3 1.8 1.1 1.3 1.7 3 1.6 4.8zm-7.9-2.2h4c-.1-1.5-.8-2.3-2-2.3s-1.9.8-2 2.3z"/><path d="m77.1 12h4.5l-5.7 12.7h-3.8l-5.5-12.7h4.8l2.8 7.1z"/><path d="m89.6 12h3v3.4h-3v9.3h-4.6v-9.3h-2.3v-3.4h2.3c0-1.5.6-3 1.7-4 1.4-1 3.1-1.6 4.8-1.5l1.6-.1.3 3.3-1.2.1c-.7 0-1.4.1-2 .4-.4.3-.6.8-.6 1.4z"/><path d="m96.7 24.1c-1-.5-1.9-1.3-2.4-2.3-.6-1.1-.9-2.3-.9-3.5s.3-2.4.9-3.5c.6-1 1.4-1.8 2.4-2.3 2.3-1.1 5-1.1 7.4 0 1 .5 1.9 1.3 2.4 2.3.6 1.1.9 2.3.9 3.5s-.3 2.4-.9 3.5c-.6 1-1.4 1.8-2.5 2.3-2.3 1.1-5 1.1-7.3 0zm6.1-5.9c0-2.1-.8-3.2-2.4-3.2s-2.4 1.1-2.4 3.2.8 3.2 2.4 3.2 2.4-1 2.4-3.2z"/><path d="m109.4 24.7v-18.2h4.6v18.2z"/><path d="m116.6 5.6h4.8v4.2h-4.8zm.1 19v-12.6h4.6v12.7z"/><path d="m126.7 24.1c-1-.5-1.9-1.3-2.4-2.3-.6-1.1-.9-2.3-.9-3.5s.3-2.4.9-3.5c.6-1 1.4-1.8 2.4-2.3 2.3-1.1 5-1.1 7.4 0 1 .5 1.9 1.3 2.4 2.3.6 1.1.9 2.3.9 3.5s-.3 2.4-.9 3.5c-.6 1-1.4 1.8-2.5 2.3-2.3 1.1-5 1.1-7.3 0zm6.1-5.9c0-2.1-.8-3.2-2.4-3.2s-2.4 1.1-2.4 3.2.8 3.2 2.4 3.2 2.4-1 2.4-3.2z"/></g><g><path d="m27 16.7c.1 6.6-4.9 12.1-11.4 12.7 0 0-8.2.2-10.9 0-1-.1-1.9-.8-2.3-1.7.3.2.7.3 1.1.3.9.1 2.4.1 4.5.1 3.1 0 6.5-.1 6.5-.1h.1c3.4-.3 6.5-1.9 8.8-4.4 1.9-2.1 3.2-4.8 3.5-7.7z"/><path d="m26 13.9c.1 6.6-4.9 12.1-11.5 12.7 0 0-8.2.2-10.9 0-1.5-.2-2.6-1.5-2.6-3.1v-19.3c0-1.5 1.1-2.9 2.7-3.1 2.7-.2 10.9 0 10.9 0 6.5.6 11.5 6.2 11.4 12.8z"/>\n    </g></g></svg>\n    </div><span style='${"color: #FFFFFF; font-size: 22px; font-weight: 600; line-height: 30px; margin: 16px 0; display: flex"}'>Your one application<br/>to the best hackathons</span>\n    </div>\n    `,
            x = document.createElement("button");

        function w(n, o, i = !1) {
            const {
                access_token: s,
                refresh_token: r,
                username: a
            } = n, l = Date.now(), d = o.hackathon_setting, c = `${t}apply/${o.slug}?hackathon_id=${o.uuid}&username=${a}&access_token=${s}&refresh_token=${r.concat(i?"&ref=signin":"")}`;
            Date.parse(d.reg_ends_at) >= l && l >= Date.parse(d.reg_starts_at) && (_.apply(a, o.uuid, s).then(function(n) {
                if (n.hasOwnProperty("error")) {
                    const t = e("devfolio-hint");
                    t.style.border = "2px solid #FF3838", t.style.backgroundColor = "#F4E7E7", "Can't apply, hackathon registration are close." === n.error.message ? t.innerHTML = "Unable to apply since the hackathon registration period is now over" : t.innerHTML = "Unable to apply to the hackathon"
                } else window.location.replace(c)
            }).catch(function(e) {
                console.error("Apply error", e)
            }), e("devfolio-login-spinner").removeAttribute("class"), e("devfolio-register-spinner").removeAttribute("class"))
        }
        x.setAttribute("id", "devfolio-close-button"), x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', a.innerHTML = b + y + v, r.appendChild(a), s.appendChild(r), s.appendChild(x), i.appendChild(s);
        const k = {
            "Content-Type": "application/json; charset=utf-8"
        };

        function $(e = "", n = {}, t = k) {
            return fetch(e, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: t,
                referrer: "no-referrer",
                body: JSON.stringify(n)
            }).then(function(e) {
                return e.json()
            }).catch(function(e) {
                return e
            })
        }
        const _ = {
            login: function(e, n, t) {
                return $(`${o}users/signin`, {
                    username: e,
                    password: n,
                    captcha_response: t
                })
            },
            register: function(e, n, t) {
                return $(`${o}users`, {
                    email: n,
                    password: t,
                    username: e
                })
            },
            apply: function(e, n, t) {
                return $(`${o}users/${e}/hackathon/${n}/apply`, {}, {
                    "Content-Type": "application/json; charset=utf-8",
                    access_token: t
                })
            },
            getHackathon: function(e) {
                return function(e = "", n = k) {
                    return fetch(e, {
                        method: "GET",
                        mode: "cors",
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: n,
                        referrer: "no-referrer"
                    }).then(function(e) {
                        return e.json()
                    }).catch(function(e) {
                        return e
                    })
                }(`${o}hackathons/${e}`)
            }
        };
        return function({
            persistModal: n,
            buttonSelector: o,
            key: r
        }) {
            document.body.appendChild(i);
            const a = document.querySelector(o),
                d = '<svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 115.46 123.46" style="height:24px;width:24px;margin-right:8px"><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"/><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>';
            a.innerHTML = `${d}Apply with Devfolio`, a.style.textTransform = "none";
            const c = document.getElementsByTagName("head")[0],
                p = document.createElement("style");
            p.type = "text/css", p.appendChild(document.createTextNode(l)), c.appendChild(p), n || _.getHackathon(r).then(function(e) {
                this.hackathon = e, this.hackathon.is_online && (this.hackathon.hackathon_setting.reg_ends_at = this.hackathon.ends_at, this.hackathon.hackathon_setting.reg_starts_at = this.hackathon.hackathon_setting.reg_starts_at || (new Date).toISOString()), Date.parse(this.hackathon.hackathon_setting.reg_ends_at) <= Date.now() ? (a.innerHTML = `${d}Go to Dashboard`, a.addEventListener("click", function() {
                    window.location.href = t + this.hackathon.slug + "/dashboard"
                }.bind(this))) : Date.now() >= Date.parse(this.hackathon.hackathon_setting.reg_starts_at) ? (a.disabled = !1, a.addEventListener("click", function() {
                    this.open()
                }.bind(this))) : (a.disabled = !0, a.innerHTML = `${d}Applications open soon`)
            }.bind(this)).catch(function() {
                a.addEventListener("click", function() {
                    window.location.href = t + "external-apply/" + r
                })
            }), this.open = async function() {
                n && await _.getHackathon(r).then(function(e) {
                    this.hackathon = e, this.hackathon.is_online && (this.hackathon.hackathon_setting.reg_ends_at = this.hackathon.ends_at, this.hackathon.hackathon_setting.reg_starts_at = this.hackathon.hackathon_setting.reg_starts_at || (new Date).toISOString())
                }.bind(this)), this.hackathon.hasOwnProperty("name") && (e("devfolio-hackathon-name").innerHTML = "to " + this.hackathon.name), i.style.display = "block";
                const o = {
                        login: e("devfolio-login-form"),
                        register: e("devfolio-register-form")
                    },
                    s = {
                        username: e("devfolio-us"),
                        password: e("devfolio-pa")
                    },
                    a = {
                        username: e("devfolio-si-us"),
                        email: e("devfolio-si-em"),
                        password: e("devfolio-si-pa")
                    },
                    l = e("error-invalid-username"),
                    d = e("error-invalid-password"),
                    c = e("error-signup-email-exists"),
                    p = e("error-signup-email-invalid"),
                    h = e("error-signup-password-invalid"),
                    f = e("error-signup-username-invalid"),
                    u = e("error-signup-username-unavailable"),
                    g = {
                        login: e("devfolio-login-spinner"),
                        register: e("devfolio-register-spinner")
                    };
                document.body.style.overflow = "hidden", o.login.style.display = "none", o.register.style.display = "flex", e("devfolio-no-account").addEventListener("click", function() {
                    o.login.style.display = "none", o.register.style.display = "flex"
                }), e("devfolio-fp").addEventListener("click", function() {
                    window.open(`${t}forgot-password/`, "_blank").focus()
                }), e("devfolio-has-account").addEventListener("click", function() {
                    o.login.style.display = "flex", o.register.style.display = "none"
                }), x.addEventListener("click", function() {
                    this.close()
                }.bind(this)), s.username.addEventListener("input", function() {
                    s.username.classList.contains("error") && (s.username.classList.remove("error"), l.style.display = "none")
                }), s.password.addEventListener("input", function() {
                    s.password.classList.contains("error") && (s.password.classList.remove("error"), d.style.display = "none")
                }), a.username.addEventListener("input", function() {
                    a.username.classList.contains("error") && (a.username.classList.remove("error"), f.style.display = "none", u.style.display = "none")
                }), a.password.addEventListener("input", function() {
                    a.password.classList.contains("error") && (a.password.classList.remove("error"), h.style.display = "none")
                }), a.email.addEventListener("input", function() {
                    a.email.classList.contains("error") && (a.email.classList.remove("error"), c.style.display = "none", p.style.display = "none")
                }), window.executeLogin = function(n) {
                    g.login.setAttribute("class", "devfolio-spinner");
                    const t = e("devfolio-us"),
                        o = e("devfolio-pa");
                    _.login(t.value, o.value, n).then(function(e) {
                        if (e.hasOwnProperty("error")) {
                            if (g.login.removeAttribute("class"), e.hasOwnProperty("error")) switch (e.error.message) {
                                case "Invalid username":
                                    t.classList.add("error"), l.style.display = "inline";
                                    break;
                                case "Invalid Password":
                                    o.classList.add("error"), d.style.display = "inline"
                            }
                        } else w(e, this.hackathon, !0)
                    }.bind(this)).catch(function(e) {
                        g.login.removeAttribute("class"), console.error("Unknown login error", e)
                    }).finally(function() {
                        grecaptcha.reset()
                    })
                }.bind(this), o.login.addEventListener("submit", function(e) {
                    e.preventDefault(), grecaptcha.execute()
                }.bind(this)), o.register.addEventListener("submit", function(n) {
                    n.preventDefault(), g.register.setAttribute("class", "devfolio-spinner");
                    const t = e("devfolio-si-us"),
                        o = e("devfolio-si-em"),
                        i = e("devfolio-si-pa");
                    _.register(t.value, o.value, i.value).then(function(e) {
                        if (e.hasOwnProperty("error")) {
                            if (g.register.removeAttribute("class"), e.hasOwnProperty("error") && "The server received a request that could not be processed." === e.error.message) {
                                const n = e.error.source;
                                if (n.hasOwnProperty("email")) switch (o.classList.add("error"), n.email.msg) {
                                    case "must be an email":
                                        p.style.display = "inline";
                                        break;
                                    case "email already in use":
                                        c.style.display = "inline";
                                        break;
                                    default:
                                        throw new Error("Error with email")
                                }
                                if (n.hasOwnProperty("username")) switch (t.classList.add("error"), n.username.msg) {
                                    case "username not available":
                                        u.style.display = "inline";
                                        break;
                                    case "invalid username":
                                        f.style.display = "inline";
                                        break;
                                    default:
                                        throw new Error("Error with username")
                                }
                                if (n.hasOwnProperty("password")) switch (i.classList.add("error"), n.password.msg) {
                                    case "password must be atleast 8 characters long":
                                        h.style.display = "inline";
                                        break;
                                    default:
                                        throw new Error("Error with password")
                                }
                            }
                        } else w(e, this.hackathon)
                    }.bind(this)).catch(function(e) {
                        g.register.removeAttribute("class"), console.error("Unknown registration error", e)
                    })
                }.bind(this))
            }, n && (x.style.display = "none", this.open()), this.close = function() {
                i.style.display = "none", document.body.style.overflow = "auto", window.removeEventListener("keydown", h), window.removeEventListener("click", f)
            };
            var h = function(e) {
                    27 == e.keyCode && this.close()
                }.bind(this),
                f = function(e) {
                    e.target == s && this.close()
                }.bind(this);
            n || (window.addEventListener("keydown", h), window.addEventListener("click", f))
        }
    }();
    window.Devfolio = t
}]);