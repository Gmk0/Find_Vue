import { computed, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-abf6b96a.js";
import ProgressBar from "primevue/progressbar/progressbar.esm.js";
import Avatar from "primevue/avatar/avatar.esm.js";
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
  __name: "CommandeGestion",
  __ssrInlineRender: true,
  props: {
    commande: Object
  },
  setup(__props) {
    const props = __props;
    const order = computed(() => props.commande.data);
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Link = resolveComponent("Link");
      const _component_Collapse = resolveComponent("Collapse");
      const _component_Span = resolveComponent("Span");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 mx-auto md:p-6 lg:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="py-2"><ul class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-100"><li>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Commande`);
          } else {
            return [
              createTextVNode("Commande")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><span class="mx-2 text-base">&gt;</span></li><li class="text-gray-700 dark:text-gray-200">${ssrInterpolate(__props.commande.data.order_numero)}</li></ul></nav></div><h1 class="text-3xl font-bold text-black dark:text-white">Commandes</h1></div><div class=""><div class="overflow-hidden bg-white rounded-lg shadow-md"><div class="grid grid-cols-1 px-6 py-4 lg:grid-cols-2"><p class="mb-4 font-sans text-lg text-gray-800 dark:text-gray-300">Commande <span class="font-bold font-inter">${ssrInterpolate(order.value.order_numero)}</span></p><p class="mb-4 text-lg text-gray-800 md:mb-2 dark:text-gray-300">Service : <span>${ssrInterpolate(order.value.service.title)}</span></p><p class="mb-4 text-base text-gray-600 dark:text-gray-400 md:mb-2">Date de commande : <span>${ssrInterpolate(order.value.created_at)}</span></p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Date de livraison : <span class="text-green-500">${ssrInterpolate((_a = order.value.feedback) == null ? void 0 : _a.created_at)}</span></p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement : `);
      if (order.value.status === "pending") {
        _push(`<span class="text-red-300 px-1.5 py-0.5 rounded-lg">en Attente</span>`);
      } else if (order.value.status === "completed") {
        _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">Payé</span>`);
      } else {
        _push(`<span class="bg-red-500 px-1.5 py-0.5 rounded-lg">Rejeter</span>`);
      }
      _push(`</p><p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">Paiement au Freelance : `);
      if (order.value.is_paid != null) {
        _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">Payé</span>`);
      } else {
        _push(`<span class="text-red-300 px-1.5 py-0.5 rounded-lg">en Attente</span>`);
      }
      _push(`</p>`);
      if (order.value.feedback != null) {
        _push(`<p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300">statut : `);
        if (order.value.feedback.etat === "En attente de traitement") {
          _push(`<span class="text-blue-300 px-1.5 py-0.5 rounded-lg">En attente de traitement</span>`);
        } else if (order.value.feedback.etat === "Livré") {
          _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">Livré</span>`);
        } else if (order.value.feedback.etat === "En cours de préparation") {
          _push(`<span class="text-red-200 px-1.5 py-0.5 rounded-lg">En cours de préparation</span>`);
        } else {
          _push(`<span class="bg-red-500 px-1.5 py-0.5 rounded-lg">En transit</span>`);
        }
        _push(`</p>`);
      } else {
        _push(`<p class="mb-4 text-base text-gray-600 md:mb-2 dark:text-gray-300"> Etat de la commande : <span>Pas d&#39;etat disponible</span></p>`);
      }
      _push(`</div><div class="px-6 py-4 border-t border-gray-200"><p class="mb-2 text-lg text-gray-800">Avancement</p><div class="flex items-center"><div class="flex-1">`);
      _push(ssrRenderComponent(unref(ProgressBar), {
        value: order.value.progress
      }, null, _parent));
      _push(`</div><p class="ml-2 text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(order.value.progress)}%</p></div></div><div class="px-6 py-4 border-t border-gray-300"><h1 class="flex items-start gap-2 text-lg font-bold cursor-pointer lg:text-xl"> Freelance lié </h1><div class="flex items-center mt-4">`);
      _push(ssrRenderComponent(unref(Avatar), {
        image: "/storage/" + order.value.freelance_user.profile_photo_path,
        class: "mr-2",
        size: "xlarge",
        shape: "circle"
      }, null, _parent));
      _push(`<div class="ml-4"><a href="" class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(order.value.freelance_user.name)}</a></div></div></div><div class="px-6 py-4 border-t border-gray-200"><h1 class="flex items-start gap-2 text-lg font-bold cursor-pointer lg:text-xl"> Rapport Envoyer <button><svg class="${ssrRenderClass([{ "rotate-180": open.value }, "w-6 h-6 fill-current"])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.707 7.293a1 1 0 0 0-1.414 0L10 10.586 6.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"></path></svg></button></h1>`);
      _push(ssrRenderComponent(_component_Collapse, {
        when: open.value,
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            {
              _push2(`<div${_scopeId}><p class="text-base text-gray-600 dark:text-gray-300"${_scopeId}>{!! $rappors-&gt;description !!}</p>`);
              _push2(ssrRenderComponent(_component_Span, { class: "mt-4 text-sm text-gray-500" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("p", { class: "text-base text-gray-600 dark:text-gray-300" }, "{!! $rappors->description !!}"),
                createVNode(_component_Span, { class: "mt-4 text-sm text-gray-500" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-6 py-4 border-t border-gray-200"><p class="mb-2 text-lg text-gray-800">Options supplémentaires</p><div class="grid grid-cols-2 gap-2 lg:grid-cols-5 md:grid-cols-4 lg:flex-row">`);
      if (order.value.transaction == null) {
        _push(`<div><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = order.value.feedback) == null ? void 0 : _b.etat) == "Livré") {
        _push(`<div class="w-full"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">feedback</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Payer</button></div><div class=""><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Annuler</button></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Commande/CommandeGestion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
