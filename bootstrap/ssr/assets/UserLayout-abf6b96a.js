import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { u as useLayoutStore } from "./store-9e809cfe.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, O as OtherPanelUser } from "./OtherPanelUser-0912d387.js";
const _sfc_main = {
  __name: "UserLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const layoutStore = useLayoutStore();
    function resize() {
      if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();
      }
    }
    resize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["", { "is-sidebar-open": unref(layoutStore).SidebarExpanded }]
      }, _attrs))}><div id="root" class="flex min-h-100vh grow bg-slate-50 dark:bg-gray-950"><div class="sidebar">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(OtherPanelUser, null, null, _parent));
      _push(`<div class="main-content pt-4 w-full px-[var(--margin-x)] pb-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/UserLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
