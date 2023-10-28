import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-249097a5.js";
import { useSSRContext } from "vue";
import "./store-0ea3a1d1.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./OtherPanelUser-36f297b0.js";
import "vue3-popper";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "TransactionUser",
  __ssrInlineRender: true,
  props: ["transactions"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Transaction/TransactionUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
