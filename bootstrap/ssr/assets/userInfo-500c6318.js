import { onMounted, withCtx, createVNode, openBlock, createBlock, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "@inertiajs/vue3";
import "./store-9e809cfe.js";
import { a as _sfc_main$1, b as _sfc_main$2 } from "./ResponsiveNavLink-cc961511.js";
import { useDark, useToggle } from "@vueuse/core";
const _sfc_main = {
  __name: "userInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    const dark = useToggle(isDark);
    const ToggleDark = () => {
      dark();
      if (isDark.value) {
        toggleTheme("lara-light-blue");
      } else {
        toggleTheme("lara-dark-blue");
      }
    };
    const toggleTheme = (current) => {
      let nextTheme = "lara-light-blue";
      if (current === "lara-light-blue")
        nextTheme = "lara-dark-blue";
      else if (current === "lara-dark-blue")
        nextTheme = "lara-light-blue";
      console.log(current, nextTheme);
    };
    onMounted(() => {
      if (isDark.value) {
        toggleTheme("lara-light-blue");
      } else {
        toggleTheme("lara-dark-blue");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.profile_photo_path != null) {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}><img class="object-cover w-8 h-8 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></div>`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300" }, [
                _ctx.$page.props.auth.user.profile_photo_path != null ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("img", {
                    class: "object-cover w-8 h-8 rounded-full",
                    src: "/storage/" + _ctx.$page.props.auth.user.profile_photo_path,
                    alt: _ctx.$page.props.auth.user.name
                  }, null, 8, ["src", "alt"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("img", {
                    class: "object-cover w-8 h-8 rounded-full",
                    src: _ctx.$page.props.auth.user.profile_photo_url,
                    alt: _ctx.$page.props.auth.user.name
                  }, null, 8, ["src", "alt"])
                ]))
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Account </div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("user.dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dashboard `);
                } else {
                  return [
                    createTextVNode(" Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              onClick: ($event) => ToggleDark(),
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dark `);
                } else {
                  return [
                    createTextVNode(" Dark ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-t border-gray-200"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Account "),
              createVNode(_sfc_main$2, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                href: _ctx.route("user.dashboard")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Dashboard ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$2, {
                onClick: ($event) => ToggleDark(),
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Dark ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "border-t border-gray-200" }),
              createVNode("form", {
                onSubmit: withModifiers(_ctx.logout, ["prevent"])
              }, [
                createVNode(_sfc_main$2, { as: "button" }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/userInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
