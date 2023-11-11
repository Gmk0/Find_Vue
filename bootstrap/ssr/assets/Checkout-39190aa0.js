import { ref, computed, resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-479a9465.js";
import { d as cartStore } from "./userInfo-683bc3e6.js";
import "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "vue-collapsed";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
const Checkout_vue_vue_type_style_index_0_scoped_7189e00a_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const usecartStore = cartStore();
    const form = ref({
      name: "",
      numero: ""
    });
    const items = computed(() => usecartStore.items);
    const totalPrice = computed(() => usecartStore.totalCost);
    const isShow = ref(false);
    const isCard = ref(false);
    const isOther = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Error = resolveComponent("Error");
      const _component_TextInput = resolveComponent("TextInput");
      const _component_InputText = resolveComponent("InputText");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7189e00a><div class="min-h-screen py-5 pt-16 custom overflow-y-auto-scrollbar bg-gray-50 min-w-screen dark:bg-gray-900" data-v-7189e00a><div class="px-6 md:px-12" data-v-7189e00a><div data-v-7189e00a><div class="mb-2" data-v-7189e00a></div><div class="mb-2" data-v-7189e00a><h1 class="text-5xl font-bold text-gray-600 md:text-2xl dark:text-gray-200" data-v-7189e00a>Panier</h1></div></div><div data-v-7189e00a>`);
      _push(ssrRenderComponent(_component_Error, null, null, _parent));
      _push(`</div>`);
      if (items.value.length > 0) {
        _push(`<div class="w-full px-5 py-10 mx-0 text-gray-800 bg-white border-t border-b border-gray-200 rounded-md dark:bg-gray-800" data-v-7189e00a><div class="w-full" data-v-7189e00a><div class="items-start -mx-3 md:flex" data-v-7189e00a><div class="px-3 md:w-7/12 lg:pr-10" data-v-7189e00a><ul class="flex flex-col divide-y divide-gray-700" data-v-7189e00a><!--[-->`);
        ssrRenderList(items.value, (item) => {
          _push(`<li class="flex flex-col py-6 sm:flex-row sm:justify-between" data-v-7189e00a><div class="flex w-full space-x-2 sm:space-x-4" data-v-7189e00a><img class="flex-shrink-0 object-cover w-20 h-20 rounded outline-none dark:border-transparent sm:w-32 sm:h-32 dark:bg-gray-500"${ssrRenderAttr("src", item.image)} alt="service" data-v-7189e00a><div class="flex flex-col justify-between w-full pb-4" data-v-7189e00a><div class="flex justify-between w-full pb-2 space-x-2" data-v-7189e00a><div class="space-y-1" data-v-7189e00a><h3 class="text-lg font-semibold leading-snug dark:text-gray-100 sm:pr-8" data-v-7189e00a>${ssrInterpolate(item.name)}</h3><p class="text-sm dark:text-gray-100" data-v-7189e00a>${ssrInterpolate(item.basic)}</p></div><div class="text-right dark:text-gray-100" data-v-7189e00a><p class="text-lg font-semibold" data-v-7189e00a>$${ssrInterpolate(item.price * item.quantity)}</p><p class="text-sm line-through" data-v-7189e00a> $</p></div></div><div class="flex text-sm divide-x dark:text-white" data-v-7189e00a><button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1" data-v-7189e00a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current" data-v-7189e00a><path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z" data-v-7189e00a></path><rect width="32" height="200" x="168" y="216" data-v-7189e00a></rect><rect width="32" height="200" x="240" y="216" data-v-7189e00a></rect><rect width="32" height="200" x="312" y="216" data-v-7189e00a></rect><path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z" data-v-7189e00a></path></svg><span data-v-7189e00a>Retirer</span></button><div data-v-7189e00a><div x-data="{ productQuantity: @json($item[&#39;quantity&#39;]) }" data-v-7189e00a><label for="Quantity" class="sr-only" data-v-7189e00a> Quantity </label><div class="flex items-center gap-1" data-v-7189e00a><button type="button"${ssrIncludeBooleanAttr(item.quantity === 1) ? " disabled" : ""} class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75" data-v-7189e00a> − </button><input disabled type="number" id="Quantity"${ssrRenderAttr("value", item.quantity)} class="h-10 w-16 rounded border-gray-200 dark:bg-gray-700 text-center [-moz-appearance:_textfield] sm:text-sm [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none" data-v-7189e00a><button type="button" class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75" data-v-7189e00a> + </button></div></div></div></div></div></div></li>`);
        });
        _push(`<!--]--></ul><div class="pb-6 mb-6 border-b border-gray-200" data-v-7189e00a><button class="" data-v-7189e00a><label class="flex gap-1 mb-2 ml-1 text-sm font-semibold text-gray-600 dark:text-gray-200" data-v-7189e00a>Coupon de reduction code <span class="py-1.5" data-v-7189e00a><svg style="${ssrRenderStyle(!isShow.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-7189e00a><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" data-v-7189e00a></path></svg></span><span class="py-1.5" data-v-7189e00a><svg style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-7189e00a><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" data-v-7189e00a></path></svg></span></label></button><div class="flex items-end justify-end" style="${ssrRenderStyle(isShow.value ? null : { display: "none" })}" data-v-7189e00a><div class="flex-grow px-2 lg:max-w-md" data-v-7189e00a><div class="p-2" data-v-7189e00a>`);
        _push(ssrRenderComponent(_component_TextInput, null, null, _parent));
        _push(`</div></div><div class="p-2" data-v-7189e00a><button class="block w-full max-w-xs px-5 py-2 mx-auto font-semibold text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:bg-gray-500" data-v-7189e00a>APPLIQUER</button></div></div></div><div class="pb-6 mb-6 text-gray-800 border-b border-gray-200" data-v-7189e00a><div class="flex items-center w-full mb-3" data-v-7189e00a><div class="flex-grow" data-v-7189e00a><span class="text-gray-600 dark:text-gray-200" data-v-7189e00a>Sous total</span></div><div class="pl-3" data-v-7189e00a><span class="font-semibold dark:text-gray-50" data-v-7189e00a>${ssrInterpolate(totalPrice.value)} $</span></div></div><div class="flex items-center w-full" data-v-7189e00a><div class="flex-grow" data-v-7189e00a><span class="text-gray-600 dark:text-gray-200" data-v-7189e00a>Taxes(GST)</span></div><div class="pl-3" data-v-7189e00a><span class="font-semibold dark:text-gray-50" data-v-7189e00a>$0</span></div></div></div><div class="pb-6 mb-6 text-xl text-gray-800 border-b border-gray-200 md:border-none" data-v-7189e00a><div class="flex items-center w-full" data-v-7189e00a><div class="flex-grow" data-v-7189e00a><span class="text-gray-600 dark:text-gray-200" data-v-7189e00a>Total</span></div><div class="pl-3" data-v-7189e00a><span class="text-sm font-semibold text-gray-400 dark:text-gray-20" data-v-7189e00a></span><span class="font-semibold" data-v-7189e00a>${ssrInterpolate(totalPrice.value)} $</span></div></div></div></div><div class="px-3 md:w-5/12" data-v-7189e00a><div class="w-full p-4 mb-4 font-semibold bg-white border border-gray-200 rounded-md dark:bg-gray-900" data-v-7189e00a><div class="flex flex-col gap-4" data-v-7189e00a>`);
        _push(ssrRenderComponent(_component_InputText, { placeholder: "Addresse" }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, { placeholder: "commune" }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, { placeholder: "ville" }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, { placeholder: "Pays" }, null, _parent));
        _push(`</div></div><div class="w-full mx-auto mb-6 text-gray-800 bg-white border border-gray-200 rounded-lg top-8 dark:bg-gray-900" data-v-7189e00a><div class="hidden w-full p-3 border-b border-gray-200" data-v-7189e00a><div class="mb-5" data-v-7189e00a><label for="type1" class="flex items-center cursor-pointer" data-v-7189e00a><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type1"${ssrIncludeBooleanAttr(Array.isArray(isCard.value) ? ssrLooseContain(isCard.value, null) : isCard.value) ? " checked" : ""} data-v-7189e00a><img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3" data-v-7189e00a></label></div>`);
        if (isCard.value) {
          _push(`<div class="px-2" data-v-7189e00a><div class="relative grid grid-cols-3 gap-2 mb-3" data-v-7189e00a></div><div class="mt-4" data-v-7189e00a><button class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true" data-v-7189e00a><span data-v-7189e00a>PAYER ($)</span></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="w-full p-6 border-b border-gray-200" data-v-7189e00a><div class="mb-5" data-v-7189e00a><label for="type2" class="flex items-center cursor-pointer" data-v-7189e00a><input type="checkbox" class="w-5 h-5 text-indigo-500 form-radio" id="type2"${ssrIncludeBooleanAttr(Array.isArray(isOther.value) ? ssrLooseContain(isOther.value, null) : isOther.value) ? " checked" : ""} data-v-7189e00a><img src="/images/icon/maxicash.png" class="h-6 ml-3" data-v-7189e00a></label></div>`);
        if (isOther.value) {
          _push(`<div data-v-7189e00a><form data-v-7189e00a><div class="grid grid-cols-1 gap-4 px-4 mb-4" data-v-7189e00a>`);
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
          _push(`</div><div class="flex flex-col gap-4 px-3 mb-3" data-v-7189e00a><button type="submit" class="block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-v-7189e00a> payer </button></div></form></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<div class="flex flex-col items-center justify-center gap-4 py-8" data-v-7189e00a><h1 class="text-2xl" data-v-7189e00a>Votre panier est vide</h1></div>`);
      }
      _push(`</div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Checkout/Checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7189e00a"]]);
export {
  Checkout as default
};
