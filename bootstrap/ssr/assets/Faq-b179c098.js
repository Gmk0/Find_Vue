import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-685a02f3.js";
import { useSSRContext } from "vue";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./userInfo-500c6318.js";
import "./store-9e809cfe.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-cc961511.js";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
