import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-249097a5.js";
import "primevue/datatable/datatable.esm.js";
import "primevue/column/column.esm.js";
import "primevue/columngroup/columngroup.esm.js";
import "primevue/row/row.esm.js";
import "primevue/paginator/paginator.esm.js";
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
  __name: "CommandeUser",
  __ssrInlineRender: true,
  props: {
    commandes: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-col"><div><h1 class="text-lg font-semibold text-gray-800 lg:text-2xl dark:text-gray-100">Commandes</h1></div></div><div class="mt-8">${ssrInterpolate(__props.commandes)}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Commande/CommandeUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
