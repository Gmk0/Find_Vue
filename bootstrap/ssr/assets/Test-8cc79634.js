import { ref, onMounted, onBeforeUnmount, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-5b08289a.js";
import { useForm } from "@inertiajs/vue3";
import MazBtn from "maz-ui/components/MazBtn";
import "maz-ui/components/MazStepper";
import "maz-ui/components/MazPhoneNumberInput";
import "maz-ui/components/MazInput";
import "maz-ui/components/MazSelect";
import "@vueuse/core";
import "./userInfo-b7520541.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
import "vue-collapsed";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const Test_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Test",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    ref("333333");
    const form = useForm({
      message: ""
    });
    const filtres = ref(false);
    const isMobile = ref(false);
    const handleResize = () => {
      if (window.innerWidth <= 768)
        filtres.value = false;
    };
    onMounted(() => {
      isMobile.value = window.innerWidth <= 768;
      window.addEventListener("resize", handleResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MazTextarea = resolveComponent("MazTextarea");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen py-20" }, _attrs))}><div class="container relative hidden px-4 py-4 overflow-auto bg-gray-200"><div class="sticky flex items-center justify-center py-12 mx-auto"><h1 class="text-5xl">Cultiver, Concevoir &amp; S&#39;Éclater</h1></div><div class="top-0 flex px-4 mt-auto sticky-test"><div class="flex flex-wrap justify-end gap-4"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<div><a class="text-lg font-bold text-gray-400 transition border-b-2 border-transparent cursor-pointer hover:text-gray-700 hover:border-b-2 hover:border-amber-500 hover:shadow-md">Programmation &amp; Tech</a></div>`);
      });
      _push(`<!--]--></div></div></div><div class="px-6 pt-20">test <form class="flex flex-col gap-6"><div>`);
      _push(ssrRenderComponent(_component_MazTextarea, {
        required: "",
        modelValue: unref(form).message,
        "onUpdate:modelValue": ($event) => unref(form).message = $event
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(MazBtn), { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` valider `);
          } else {
            return [
              createTextVNode(" valider ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Test/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
