import { resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-5b08289a.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import { f as useStore } from "./userInfo-b7520541.js";
import "@vueuse/core";
import "vue-collapsed";
import "./Checkbox-74b17051.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "FeedBack",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const userStateLogin = useStore();
    const page = usePage();
    const form = useForm({
      name: (_a = page.props.auth.user) == null ? void 0 : _a.name,
      email: (_b = page.props.auth.user) == null ? void 0 : _b.email,
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonMt = resolveComponent("ButtonMt");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100 dark:bg-gray-900 pt-16 lg:mx-auto 2xl:mx-0 2xl:px-2 lg:px-8" }, _attrs))}><section class="relative overflow-hidden pt-8 pb-12 lg:pb-[90px]"><div class="container px-4 mx-auto"><div class="flex flex-wrap -mx-4"><div class="w-full px-4"><div class="mx-auto mb-[20px] max-w-[520px] text-center lg:mb-20"><span class="block mb-2 text-lg font-semibold tracking-wide uppercase text-amber-600"> Feedback </span><h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-2xl"> Votre Avis Compte </h2><p class="text-base text-body-color"> Besoin de plus d&#39;information contacter nou </p></div></div></div><div class="max-w-6xl px-8 pt-2 mx-auto"><form class="lg:grid flex lg:gap-2 gap-6 flex-col-reverse mb-8 lg:grid-cols-2 lg:mb-4"><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "nom",
        type: "text",
        placeholder: "Nom",
        class: "block w-full mt-1",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        disabled: "",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: "nom",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "text",
        placeholder: "Email",
        class: "block w-full mt-1",
        disabled: "",
        required: ""
      }, null, _parent));
      _push(`<div class="col-span-2"><textarea name="message" required class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message">${ssrInterpolate(unref(form).message)}</textarea></div>`);
      if (_ctx.$page.props.auth.user) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ButtonMt, { type: "submit" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>Envoyer</span>`);
            } else {
              return [
                createVNode("span", null, "Envoyer")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ButtonMt, {
          onClick: ($event) => unref(userStateLogin).loginUser()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>connecter vous </span>`);
            } else {
              return [
                createVNode("span", null, "connecter vous ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="px-4 lg:mt-0 mt-4"><div class="bg-white rounded-lg dark:bg-gray-700"><div class=""><div class="max-w-xl p-6 mx-auto mt-5 border rounded-lg"><p class="mb-4 text-lg font-bold text-center">Vous avez utilisé FIND pour faire une différence dans la vie des personnes et contribuer à répondre à leurs besoins.</p><p class="mb-4 text-center">Partagez votre expérience et aidez-nous à améliorer nos efforts pour créer une expérience encore plus positive pour nos utilisateurs.</p><p class="mb-6 text-center">Votre feedback est précieux pour nous et pour ceux qui cherchent à trouver des solutions et à faciliter leur quotidien.</p></div></div></div></div></form><hr><div class="pt-4"><div><h1 class="text-center text-gray-700 dark:text-gray-200">Les Avis</h1></div><div class="grid pt-4 lg:grid-cols-2"></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/FeedBack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
