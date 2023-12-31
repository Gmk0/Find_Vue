import { ref, resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-5b08289a.js";
import { e as cartStore } from "./userInfo-b7520541.js";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "vue-collapsed";
import "./Checkbox-74b17051.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
const CheckoutCustom_vue_vue_type_style_index_0_scoped_57edb46d_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "CheckoutCustom",
  __ssrInlineRender: true,
  props: {
    userSetting: Object,
    proposal: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    cartStore();
    const props = __props;
    const form = ref({
      name: "",
      numero: "",
      adresse: (_b = (_a = props.userSetting) == null ? void 0 : _a.addresse_facturation) == null ? void 0 : _b.adresse,
      commune: (_d = (_c = props.userSetting) == null ? void 0 : _c.addresse_facturation) == null ? void 0 : _d.commune,
      ville: (_f = (_e = props.userSetting) == null ? void 0 : _e.addresse_facturation) == null ? void 0 : _f.ville,
      pays: (_h = (_g = props.userSetting) == null ? void 0 : _g.addresse_facturation) == null ? void 0 : _h.pays
    });
    const isShow = ref(false);
    const isCard = ref(false);
    const isOther = ref(false);
    const loadingPayement = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Error = resolveComponent("Error");
      const _component_TextInput = resolveComponent("TextInput");
      const _component_InputText = resolveComponent("InputText");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-57edb46d><div class="min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900" data-v-57edb46d><div class="px-6 md:px-12" data-v-57edb46d><div data-v-57edb46d><div class="mb-2" data-v-57edb46d></div><div class="mb-2" data-v-57edb46d><h1 class="text-5xl font-bold text-gray-600 md:text-2xl dark:text-gray-200" data-v-57edb46d>Panier Personnaliser</h1></div></div><div data-v-57edb46d>`);
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`</div>`);
      if (props.proposal != null) {
        _push(`<div class="w-full px-5 py-10 mx-0 text-gray-800 bg-white border-t border-b border-gray-200 rounded-md dark:bg-gray-800" data-v-57edb46d><div class="w-full" data-v-57edb46d><div class="items-start -mx-3 md:flex" data-v-57edb46d><div class="px-3 md:w-7/12 lg:pr-10" data-v-57edb46d><ul class="flex flex-col divide-y divide-gray-700" data-v-57edb46d><li class="flex flex-col py-6 sm:flex-row sm:justify-between" data-v-57edb46d><div class="flex w-full space-x-2 sm:space-x-4" data-v-57edb46d><img class="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500"${ssrRenderAttr("src", "/storage/" + props.proposal.service.files[0])} alt="service" data-v-57edb46d><div class="flex flex-col justify-between w-full pb-4" data-v-57edb46d><div class="flex justify-between w-full pb-2 space-x-2" data-v-57edb46d><div class="space-y-1" data-v-57edb46d><h3 class="text-lg font-semibold leading-snug dark:text-gray-100 sm:pr-8" data-v-57edb46d>${ssrInterpolate(props.proposal.service.title)}</h3><p class="text-sm dark:text-gray-100" data-v-57edb46d></p></div><div class="text-right dark:text-gray-100" data-v-57edb46d><p class="text-lg font-semibold" data-v-57edb46d>$${ssrInterpolate(props.proposal.proposed_price)}</p><p class="text-sm line-through" data-v-57edb46d> $</p></div></div></div></div></li></ul><div class="pb-6 mb-6 border-b border-gray-200" data-v-57edb46d><div class="flex items-end justify-end" style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}" data-v-57edb46d><div class="flex-grow px-2 lg:max-w-md" data-v-57edb46d><div class="p-2" data-v-57edb46d>`);
        _push(ssrRenderComponent(_component_TextInput, null, null, _parent));
        _push(`</div></div><div class="p-2" data-v-57edb46d><button class="block w-full max-w-xs px-5 py-2 mx-auto font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:bg-gray-500" data-v-57edb46d>APPLIQUER</button></div></div></div><div class="pb-6 mb-6 text-gray-800 border-b border-gray-200" data-v-57edb46d><div class="flex items-center w-full mb-3" data-v-57edb46d><div class="flex-grow" data-v-57edb46d><span class="text-gray-600 dark:text-gray-200" data-v-57edb46d>Sous total</span></div><div class="pl-3" data-v-57edb46d><span class="font-semibold dark:text-gray-50" data-v-57edb46d>${ssrInterpolate(props.proposal.proposed_price)} $</span></div></div><div class="flex items-center w-full" data-v-57edb46d><div class="flex-grow" data-v-57edb46d><span class="text-gray-600 dark:text-gray-200" data-v-57edb46d>Taxes(GST)</span></div><div class="pl-3" data-v-57edb46d><span class="font-semibold dark:text-gray-50" data-v-57edb46d>$0</span></div></div></div><div class="pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none" data-v-57edb46d><div class="flex items-center w-full" data-v-57edb46d><div class="flex-grow" data-v-57edb46d><span class="text-gray-600 dark:text-gray-200" data-v-57edb46d>Total</span></div><div class="pl-3" data-v-57edb46d><span class="text-sm font-semibold text-gray-400 dark:text-gray-20" data-v-57edb46d></span><span class="font-semibold" data-v-57edb46d>${ssrInterpolate(props.proposal.proposed_price)} $</span></div></div></div></div><form class="px-3 md:w-5/12" data-v-57edb46d><div class="w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900" data-v-57edb46d><div class="flex flex-col gap-4" data-v-57edb46d>`);
        _push(ssrRenderComponent(_component_InputText, {
          required: "",
          modelValue: form.value.adresse,
          "onUpdate:modelValue": ($event) => form.value.adresse = $event,
          placeholder: "Addresse"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          required: "",
          modelValue: form.value.commune,
          "onUpdate:modelValue": ($event) => form.value.commune = $event,
          placeholder: "commune"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          required: "",
          modelValue: form.value.ville,
          "onUpdate:modelValue": ($event) => form.value.ville = $event,
          placeholder: "ville"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          required: "",
          modelValue: form.value.pays,
          "onUpdate:modelValue": ($event) => form.value.pays = $event,
          placeholder: "Pays"
        }, null, _parent));
        _push(`</div></div><div class="w-full mx-auto mb-6 text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900" data-v-57edb46d><div class="hidden w-full p-3 border-b border-gray-200" data-v-57edb46d><div class="mb-5" data-v-57edb46d><label for="type1" class="flex items-center cursor-pointer" data-v-57edb46d><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type1"${ssrIncludeBooleanAttr(Array.isArray(isCard.value) ? ssrLooseContain(isCard.value, null) : isCard.value) ? " checked" : ""} data-v-57edb46d><img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3" data-v-57edb46d></label></div>`);
        if (isCard.value) {
          _push(`<div class="px-2" data-v-57edb46d><div class="relative grid grid-cols-3 gap-2 mb-3" data-v-57edb46d></div><div class="mt-4" data-v-57edb46d><button class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true" data-v-57edb46d><span data-v-57edb46d>PAYER ($)</span></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full p-6 border-b border-gray-200" data-v-57edb46d><div class="mb-5" data-v-57edb46d><label for="type2" class="flex items-center cursor-pointer" data-v-57edb46d><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type2"${ssrIncludeBooleanAttr(Array.isArray(isOther.value) ? ssrLooseContain(isOther.value, null) : isOther.value) ? " checked" : ""} data-v-57edb46d><img src="/images/icon/maxicash.png" class="h-6 ml-3" data-v-57edb46d></label></div>`);
        if (isOther.value) {
          _push(`<div data-v-57edb46d><div data-v-57edb46d><div class="grid grid-cols-1 gap-4 px-4 mb-4" data-v-57edb46d>`);
          _push(ssrRenderComponent(_component_InputText, {
            required: "",
            modelValue: form.value.name,
            "onUpdate:modelValue": ($event) => form.value.name = $event,
            placeholder: "Nom",
            class: "rounded-md"
          }, null, _parent));
          _push(ssrRenderComponent(_component_InputText, {
            modelValue: form.value.numero,
            "onUpdate:modelValue": ($event) => form.value.numero = $event,
            placeholder: "Telephone",
            required: "",
            class: "rounded-md"
          }, null, _parent));
          _push(`</div><div class="flex flex-col gap-4 px-3 mb-3" data-v-57edb46d><button type="submit" class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-v-57edb46d> payer </button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></form></div></div></div>`);
      } else {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-8" data-v-57edb46d><h1 class="text-2xl" data-v-57edb46d>Votre panier est vide</h1></div>`);
      }
      _push(`</div>`);
      if (loadingPayement.value) {
        _push(`<div data-v-57edb46d><div data-v-57edb46d><div class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen" style="${ssrRenderStyle({ "background": "rgba(0, 0, 0, 0.3)" })}" data-v-57edb46d><div class="flex flex-col items-center px-5 py-2 bg-white border rounded-lg" data-v-57edb46d><div class="relative block w-20 h-5 mt-2 loader-dots" data-v-57edb46d><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-57edb46d></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-57edb46d></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-57edb46d></div><div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full" data-v-57edb46d></div></div><div class="mt-2 text-xs font-medium text-center text-gray-500" data-v-57edb46d> Paiement en cours... </div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Checkout/CheckoutCustom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckoutCustom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57edb46d"]]);
export {
  CheckoutCustom as default
};
