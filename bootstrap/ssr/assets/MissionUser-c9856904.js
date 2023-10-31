import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-abf6b96a.js";
import "./store-9e809cfe.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./OtherPanelUser-0912d387.js";
import "vue3-popper";
import "./userInfo-500c6318.js";
import "@inertiajs/vue3";
import "./ResponsiveNavLink-cc961511.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "MissionUser",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="py-2"><ul class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-100"><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Mission`);
          } else {
            return [
              createTextVNode("Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><span class="mx-2 text-base">&gt;</span></li><li class="text-gray-700 dark:text-gray-200"> Liste </li></ul></nav></div><h1 class="text-3xl font-bold text-black dark:text-white">Liste</h1></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Mission/MissionUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
