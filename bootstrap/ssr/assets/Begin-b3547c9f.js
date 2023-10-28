import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-2a57e25f.js";
import { Link } from "@inertiajs/vue3";
import "@vueuse/core";
import "primevue/config/config.esm.js";
import "./store-0ea3a1d1.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-cc961511.js";
import "vue-collapsed";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Begin",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen pt-16"><div class="pb-8"><div class="px-6 m-auto text-gray-900 xl:container md:px-12 xl:px-16"><div class="md:bg-gray-100 dark:bg-gray-900 lg:p-16 p-8 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center"><div class="md:5/12 lg:w-1/2"><img src="/images/hero/find_freelance_presentation.jpg" alt="image" loading="lazy" class="rounded-lg" width="" height=""></div><div class="md:7/12 lg:w-1/2"><h2 class="hidden text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-50"> FIND </h2><p class="my-8 font-serif text-lg text-gray-800 dark:text-gray-50"> Nous sommes à la recherche de personnes talentueuses comme vous pour offrir leurs compétences dans l&#39;une ou plusieurs de nos 20 catégories et travailler sur des projets captivants de clients du monde entier. </p><div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register.etape.1"),
        class: "block w-full select-none rounded-lg bg-amber-600 py-2 px-2 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` S&#39;inscrire `);
          } else {
            return [
              createTextVNode(" S'inscrire ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="px-6 m-auto mt-6 text-gray-600 xl:container md:px-12 xl:px-16"><div class="flex items-center justify-center"><h2 class="text-2xl font-bold text-gray-900 md:text-4xl dark:text-gray-50"> Comment ça marche ? </h2></div><div class="grid gap-4 mt-5 md:grid-cols-3"><div><img src="/images/icon/presentation.gif" class="rounded-md w-28" alt=""><div><h1 class="mb-2 text-lg font-semibold dark:text-gray-50"><span>1.</span>Creer votre Service </h1><p class="text-gray-800 dark:text-gray-50"> Inscrivez-vous gratuitement, créez votre service, et proposez votre travail à notre public international. </p></div></div><div><img src="/images/icon/bubble-chat.gif" class="rounded-md w-28" alt=""><div><h1 class="mb-2 text-lg font-semibold dark:text-gray-50"><span>2.</span>Démarrez le travail </h1><p class="text-gray-800 dark:text-gray-50"> Recevez une notification lorsque vous obtenez une nouvelle commande sur FIND et discutez des détails avec les clients. </p></div></div><div><img src="/images/icon/save-money.gif" class="rounded-md w-28" alt=""><div><h1 class="mb-2 text-lg font-semibold dark:text-gray-50"><span>3.</span> Soyez payé</h1><p class="text-gray-800 dark:text-gray-50"> Recevez votre paiement à chaque fois que vous finaliserez une commande. </p></div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Registration/Begin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
