import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./WebLayout-1f5db4b5.js";
import { useSSRContext } from "vue";
import "@inertiajs/vue3";
import "@vueuse/core";
import "./userInfo-2152bb8f.js";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
import "vue-collapsed";
import "./Checkbox-a72bbed4.js";
import "./TextInput-14bc0530.js";
import "./InputLabel-d47442f5.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative min-h-screen pt-20 pb-8 bg-gray-100 dark:bg-gray-900"><div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8"><div class="lg:text-center"><h2 class="text-base font-semibold tracking-wide uppercase text-amber-600">À Propos de FIND</h2><p class="mt-2 text-xl font-extrabold leading-8 tracking-tight dark:text-gray-100 text-gray-800 sm:text-4xl"> Trouvez le meilleur talent pour votre projet </p><p class="max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-200 lg:mx-auto"> FIND est une plateforme qui met en relation des freelances qualifiés avec des clients à la recherche de compétences spécifiques pour leurs projets. Que vous ayez besoin d&#39;un développeur, d&#39;un designer, d&#39;un responsable financier ou d&#39;un autre professionnel, nous avons les talents qu&#39;il vous faut pour mener à bien votre projet. </p></div><div class="mt-10 hidden"><h3 class="text-lg font-medium leading-6 text-gray-800">Notre Équipe</h3><div class="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-4"><div class="overflow-hidden bg-white rounded-lg shadow"><div class="flex items-center justify-center h-48 bg-gray-200 sm:h-56 md:h-64 lg:h-72 xl:h-80"><img class="object-cover object-center w-full h-full" src="/chemin/vers/image1.jpg" alt="Photo du fondateur de FIND"></div><div class="px-4 py-4 sm:px-6"><h4 class="text-lg font-semibold text-gray-800">Ulrich Lukemba</h4><p class="mt-1 text-sm text-gray-500">Fondateur et PDG</p></div></div><div class="overflow-hidden bg-white rounded-lg shadow"><div class="flex items-center justify-center h-48 bg-gray-200 sm:h-56 md:h-64 lg:h-72 xl:h-80"><img class="object-cover object-center w-full h-full" src="/chemin/vers/image2.jpg" alt="Photo de la responsable financière de FIND"></div><div class="px-4 py-4 sm:px-6"><h4 class="text-lg font-semibold text-gray-800">Naomie</h4><p class="mt-1 text-sm text-gray-500">Responsable Financière</p></div></div><div class="overflow-hidden bg-white rounded-lg shadow"><div class="flex items-center justify-center h-48 bg-gray-200 sm:h-56 md:h-64 lg:h-72 xl:h-80"><img class="object-cover object-center w-full h-full" src="/chemin/vers/image3.jpg" alt="Photo du développeur de FIND"></div><div class="px-4 py-4 sm:px-6"><h4 class="text-lg font-semibold text-gray-800"> GMK</h4><p class="mt-1 text-sm text-gray-500">Responsable Technique</p></div></div><div class="overflow-hidden bg-white rounded-lg shadow"><div class="flex items-center justify-center h-48 bg-gray-200 sm:h-56 md:h-64 lg:h-72 xl:h-80"><img class="object-cover object-center w-full h-full" src="/chemin/vers/image4.jpg" alt="Photo du designer de FIND"></div><div class="px-4 py-4 sm:px-6"><h4 class="text-lg font-semibold text-gray-800">Sophie Dupont</h4><p class="mt-1 text-sm text-gray-500">Designer Graphique</p></div></div></div></div><div class="absolute bottom-0 right-0 z-[-1]"><svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="1308.65" y1="1142.58" x2="602.827" y2="-418.681" gradientUnits="userSpaceOnUse"><stop stop-color="#3056D3" stop-opacity="0.36"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0"></stop><stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144"></stop></linearGradient></defs></svg></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
