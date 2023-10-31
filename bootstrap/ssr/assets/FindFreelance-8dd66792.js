import { resolveComponent, useSSRContext, ref, computed, watch, mergeProps, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./WebLayout-c53e9a6e.js";
import { Link, router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$5 } from "./FreelanceCard-1ffd4b1e.js";
import { _ as _sfc_main$3 } from "./TextInput-4f082d1a.js";
import { _ as _sfc_main$4 } from "./SecondaryButton-0974b11b.js";
import { Collapse } from "vue-collapsed";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import { a as useCategoryStore } from "./store-9e809cfe.js";
import "@vueuse/core";
import "./userInfo-500c6318.js";
import "./ResponsiveNavLink-cc961511.js";
import "primevue/image/image.esm.js";
import "pinia";
import "axios";
const _sfc_main$1 = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="px-4 py-3 mb-1 mr-1 text-sm leading-4 text-gray-400 border rounded">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          class: ["px-4 py-3 mb-1 mr-1 text-sm leading-4 border rounded focus:text-indigo-500 hover:bg-white focus:border-indigo-500", { "bg-white": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const FindFreelance_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "FindFreelance",
  __ssrInlineRender: true,
  props: {
    freelances: Object,
    filters: Object
  },
  setup(__props) {
    const props = __props;
    const useCategory = useCategoryStore();
    const form = ref({
      search: props.filters.search,
      category: props.filters.category,
      price: props.filters.price,
      level: props.filters.level,
      localisation: props.filters.localisation,
      disponible: props.filters.disponibilite,
      sub_category: props.filters.sub_category
    });
    ref("");
    const niveauFiltre = ref([
      { name: "Nouveau 1", code: "1" },
      { name: "Nouveau 2", code: "2" },
      { name: "Nouveau 3", code: "3" },
      { name: "Nouveau 4", code: "4" }
    ]);
    ref([
      {
        name: "Plus recent",
        code: "created_at-asc"
      },
      {
        name: "Plus ancient",
        code: "created_at-desc"
      },
      {
        name: "Prix descendant",
        code: "basic_price-desc"
      },
      {
        name: "Prix ascendant",
        code: "basic_price-asc"
      },
      {
        name: "populaire",
        code: "populaire-asc"
      }
    ]);
    const categories = computed(() => useCategory.categoriesGet.categories);
    const showCategoryFilter = ref(false);
    const Specialite = ref(false);
    const experience = ref(false);
    const showPriceFilter = ref(false);
    const disponibilteFilter = ref(false);
    const niveauFilter = ref(false);
    const localisationFilter = ref(false);
    const subcategories = ref([]);
    ref(null);
    ref(null);
    const fetchSubcategories = async () => {
      try {
        if (form.value.category) {
          const response = await axios.get(`/api/subcategories/${form.value.category}`);
          subcategories.value = response.data.subcategories;
        } else {
          subcategories.value = [];
        }
      } catch (error) {
        console.error("An error occurred while fetching subcategories:", error);
      }
    };
    watch(form, () => {
      fetchSubcategories();
    });
    watch(form, throttle(() => {
      fetchSubcategories();
      router.get(
        "/find-freelance",
        pickBy(form.value),
        {
          preserveState: true,
          preserveScroll: true,
          only: ["freelances", "filters"]
        }
      );
    }, 1e3), { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dropdown = resolveComponent("Dropdown");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-16" }, _attrs))}><div class="relative flex flex-col pb-8 bg-gray-100 dark:bg-gray-900"><div class="relative h-20 bg-green-500 dark:bg-gray-600"><div class="absolute inset-0 flex items-center justify-center"><h1 class="text-4xl font-bold text-white">Trouver un freelance</h1></div></div><div class="sticky top-0 z-30 grid h-auto grid-cols-12 py-2 bg-white lg:z-0 lg:bg-transparent lg:relative"><div class="hidden lg:col-span-3 lg:flex"></div><div class="relative grid col-span-12 gap-4 py-4 lg:grid-cols-12 lg:col-span-9 lg:gap-2"><div class="px-4 lg:col-span-9">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: form.value.search,
        "onUpdate:modelValue": ($event) => form.value.search = $event,
        class: "!rounded-full w-full !shadow-sm",
        placeholder: "recherche"
      }, null, _parent));
      _push(`</div><div class="sticky top-0 flex flex-row justify-between gap-2 px-4 lg:col-span-3"><div class="block lg:hidden">`);
      _push(ssrRenderComponent(_sfc_main$4, { label: "filtre" }, null, _parent));
      _push(`</div><div class="flex gap-2"><div></div><div class="z-40"><select placeholder="Trier par" class="z-30 !rounded-xl !shadow-md"><option value="">Trier par</option><option value="level-asc">Niveau ascendant</option><option value="level-desc">Niveau Descendant</option><option value="populaire-desc">Populaire</option><option value="nouveau-desc">Nouveau</option></select></div></div></div></div></div><div class="grid grid-cols-12 px-2"><div class="w-full col-span-3 mt-4 leading-normal text-gray-800 lg:px-2"><div class="${ssrRenderClass([_ctx.showFilters ? "fixed inset-0  top-0  bottom-0  dark:bg-gray-800 bg-white z-[600] p-4 transition-all duration-200 w-full" : "hidden w-full h-auto mt-0  md:top-[6rem]  inset-0 z-20", "overflow-x-hidden overflow-y-auto border border-gray-400 rounded-md shadow lg:h-auto lg:block lg:border-transparent lg:shadow-none lg:bg-transparent custom-scrollbar"])}" id="menu-content"><nav class="overflow-y-auto"><div class="w-full p-4 overflow-y-auto bg-white rounded-lg custom-scrollbar dark:bg-gray-800"><h3 class="mb-6 font-bold text-gray-700 dark:text-gray-100">Filtres</h3><div class="mt-4 mb-4 border-t py-2.5 border-b relative border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Catégorie</span><svg style="${ssrRenderStyle(!showCategoryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(showCategoryFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: showCategoryFilter.value,
        class: "overflow-hidden leading-normal collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: form.value.category,
              "onUpdate:modelValue": ($event) => form.value.category = $event,
              options: categories.value,
              optionValue: "id",
              optionLabel: "name",
              placeholder: "Votre categorie",
              showClear: "",
              class: "w-full border border-gray-300 md:w-12rem"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" }, [
                createVNode(_component_Dropdown, {
                  modelValue: form.value.category,
                  "onUpdate:modelValue": ($event) => form.value.category = $event,
                  options: categories.value,
                  optionValue: "id",
                  optionLabel: "name",
                  placeholder: "Votre categorie",
                  showClear: "",
                  class: "w-full border border-gray-300 md:w-12rem"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-3 mb-4 border-b border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 dark:text-gray-100 focus:outline-none"><span class="text-base dark:text-gray-100">Specialite</span><svg style="${ssrRenderStyle(!Specialite.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(Specialite.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: Specialite.value,
        class: "overflow-hidden leading-normal collapse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: form.value.sub_category,
              "onUpdate:modelValue": ($event) => form.value.sub_category = $event,
              options: subcategories.value,
              optionValue: "id",
              optionLabel: "name",
              placeholder: "Votre sous categories",
              showClear: "",
              class: "w-full border border-gray-300 md:w-12rem"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" }, [
                createVNode(_component_Dropdown, {
                  modelValue: form.value.sub_category,
                  "onUpdate:modelValue": ($event) => form.value.sub_category = $event,
                  options: subcategories.value,
                  optionValue: "id",
                  optionLabel: "name",
                  placeholder: "Votre sous categories",
                  showClear: "",
                  class: "w-full border border-gray-300 md:w-12rem"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-3 mb-4 border-b border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 dark:text-gray-100 focus:outline-none"><span class="text-base dark:text-gray-100">Annee Experience</span><svg style="${ssrRenderStyle(!experience.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(experience.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), { when: experience.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: form.value.sub_category,
              "onUpdate:modelValue": ($event) => form.value.sub_category = $event,
              options: subcategories.value,
              optionValue: "id",
              optionLabel: "name",
              placeholder: "Votre sous categories",
              showClear: "",
              class: "w-full border border-gray-300 md:w-12rem"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" }, [
                createVNode(_component_Dropdown, {
                  modelValue: form.value.sub_category,
                  "onUpdate:modelValue": ($event) => form.value.sub_category = $event,
                  options: subcategories.value,
                  optionValue: "id",
                  optionLabel: "name",
                  placeholder: "Votre sous categories",
                  showClear: "",
                  class: "w-full border border-gray-300 md:w-12rem"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-3 mb-4 border-b border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100">Taux Journalier</span><svg style="${ssrRenderStyle(!showPriceFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(showPriceFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: showPriceFilter.value,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="relative py-3 mt-4 mb-4 border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100">Disponibilte</span><svg style="${ssrRenderStyle(!disponibilteFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(disponibilteFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), {
        when: disponibilteFilter.value,
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: form.value.disponible,
              "onUpdate:modelValue": ($event) => form.value.disponible = $event,
              options: niveauFiltre.value,
              optionValue: "id",
              optionLabel: "name",
              placeholder: "Disponibilite",
              showClear: "",
              class: "w-full border border-gray-300 md:w-12rem"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" }, [
                createVNode(_component_Dropdown, {
                  modelValue: form.value.disponible,
                  "onUpdate:modelValue": ($event) => form.value.disponible = $event,
                  options: niveauFiltre.value,
                  optionValue: "id",
                  optionLabel: "name",
                  placeholder: "Disponibilite",
                  showClear: "",
                  class: "w-full border border-gray-300 md:w-12rem"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative py-3 mt-4 mb-4 border-t border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Niveau Freelannce</span><svg style="${ssrRenderStyle(!niveauFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(niveauFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), { when: niveauFilter.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: form.value.level,
              "onUpdate:modelValue": ($event) => form.value.level = $event,
              options: niveauFiltre.value,
              optionValue: "code",
              optionLabel: "name",
              placeholder: "Disponibilite",
              showClear: "",
              class: "w-full border border-gray-300 md:w-12rem"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" }, [
                createVNode(_component_Dropdown, {
                  modelValue: form.value.level,
                  "onUpdate:modelValue": ($event) => form.value.level = $event,
                  options: niveauFiltre.value,
                  optionValue: "code",
                  optionLabel: "name",
                  placeholder: "Disponibilite",
                  showClear: "",
                  class: "w-full border border-gray-300 md:w-12rem"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative py-3 mt-4 mb-4 border-t border-gray-400"><button class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none"><span class="text-base dark:text-gray-100"> Localisation</span><svg style="${ssrRenderStyle(!localisationFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg><svg style="${ssrRenderStyle(localisationFilter.value ? null : { display: "none" })}" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg></button>`);
      _push(ssrRenderComponent(unref(Collapse), { when: localisationFilter.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="m-2"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "m-2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav><div class="flex w-full gap-4 md:hidden"><button>appliquer</button><button>Fermer</button>- </div></div></div><div class="col-span-12 pt-2 lg:col-span-9"><div class="px-4 py-4"><div class="hidden">`);
      _push(ssrRenderComponent(Pagination, {
        class: "mt-6",
        links: props.freelances.links
      }, null, _parent));
      _push(`</div></div><div class="z-0 grid gap-4 p-2 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(props.freelances.data, (freelance) => {
        _push(`<div class="mx-auto lg:mx-0 w-[80%]">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          freelance,
          key: freelance.id
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (props.freelances.data.length === 0) {
        _push(`<h1 class="text-lg text-gray-800 md:text-2xl">Pas de Resultat</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(Pagination, {
        class: "mt-6",
        links: props.freelances.links
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Web/Freelance/FindFreelance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
