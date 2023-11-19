import { ref, computed, watch, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-941c173b.js";
import { useForm, Link } from "@inertiajs/vue3";
import { a as useCategoryStore } from "./userInfo-1ade63c0.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
import "@vueuse/core";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const categoriesStore = useCategoryStore();
    const category = ref("");
    const form = useForm({
      title: "",
      tag: null,
      basic_price: 0,
      basic_revision: 0,
      need_service: "",
      sub_category: null,
      description: "",
      files: null,
      example: null,
      description_example: "",
      category_id: "",
      sub_categorie: null,
      video_url: "",
      basic_support: null,
      basic_delivery_time: 0,
      delivery_time_unit: "",
      is_publish: false
    });
    const unitTime = ref([
      { name: "jour(s)", id: "jour(s)" },
      { name: "heure(s)", id: "heure(s)" }
    ]);
    const categories = computed(() => categoriesStore.categoriesGet.categories);
    const subcategories = computed(() => categoriesStore.subCategoriesGet);
    const fetchSubcategories = async () => {
      categoriesStore.fetchSubCategoriesByCategoryid(category.value);
    };
    watch(category, () => {
      form.category_id = category.value;
      fetchSubcategories();
    });
    const onSelectExample = (event) => {
      form.example = event.files;
    };
    const onSelect = (event) => {
      form.files = event.files;
    };
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      const _component_InputLabel = resolveComponent("InputLabel");
      const _component_InputText = resolveComponent("InputText");
      const _component_Chips = resolveComponent("Chips");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_InputError = resolveComponent("InputError");
      const _component_MultiSelect = resolveComponent("MultiSelect");
      const _component_InputNumber = resolveComponent("InputNumber");
      const _component_Editor = resolveComponent("Editor");
      const _component_FileUpload = resolveComponent("FileUpload");
      const _component_Button = resolveComponent("Button");
      const _component_InputSwitch = resolveComponent("InputSwitch");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("freelance.dashboard"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Dashboard `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mr-2.5",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" })
              ])),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("freelance.services"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Services</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mx-1 text-gray-400",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 6 10"
              }, [
                createVNode("path", {
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "m1 9 4-4-4-4"
                })
              ])),
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Creation</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Services Creation</h1></div><form class="grid grid-cols-1 gap-4 p-4 mt-2 border border-gray-100 rounded-md min-h-72"><div class="lg:grid lg:grid-cols-2 gap-2"><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "titre"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputText, {
        required: "",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event,
        class: "w-full",
        id: "titre"
      }, null, _parent));
      _push(`</div><div class="col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "Tags de recherche"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Chips, {
        modelValue: unref(form).tag,
        "onUpdate:modelValue": ($event) => unref(form).tag = $event,
        placeholder: "Tags pour facileter la recherche",
        class: "w-full",
        id: "tag"
      }, null, _parent));
      _push(`</div></div><div class="grid lg:grid-cols-2 gap-2"><div class="mt-4 W-full">`);
      _push(ssrRenderComponent(_component_Dropdown, {
        modelValue: category.value,
        "onUpdate:modelValue": ($event) => category.value = $event,
        optionValue: "id",
        required: "",
        options: categories.value,
        showClear: "",
        optionLabel: "name",
        placeholder: "Categories",
        class: "!w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.category_id
      }, null, _parent));
      _push(`</div><div class="mt-4 W-full">`);
      _push(ssrRenderComponent(_component_MultiSelect, {
        modelValue: unref(form).sub_categorie,
        "onUpdate:modelValue": ($event) => unref(form).sub_categorie = $event,
        optionValue: "id",
        options: subcategories.value,
        showClear: "",
        optionLabel: "name",
        placeholder: "Sous categorie",
        class: "!w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.sub_categorie
      }, null, _parent));
      _push(`</div></div><div class="grid lg:grid-cols-2 gap-2"><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "Prix"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputNumber, {
        showButtons: "",
        modelValue: unref(form).basic_price,
        "onUpdate:modelValue": ($event) => unref(form).basic_price = $event,
        placeholder: "Prix du service",
        class: "w-full",
        inputId: "Prix"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.basic_price
      }, null, _parent));
      _push(`</div><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "revision",
        value: "Revision"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputNumber, {
        showButtons: "",
        modelValue: unref(form).basic_revision,
        "onUpdate:modelValue": ($event) => unref(form).basic_revision = $event,
        class: "w-full",
        placeholder: "nombre de revision pour ce prix",
        id: "titre"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.basic_revision
      }, null, _parent));
      _push(`</div></div><div class="grid lg:grid-cols-2 gap-2 mt-4"><div class="w-full col-span-2 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "description",
        value: "Description"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Editor, {
        required: "",
        formats: null,
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event,
        class: "mt-2",
        placeholder: "une Description pour ce service",
        editorStyle: "height: 250px"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.description
      }, null, _parent));
      _push(`</div><div class="w-full col-span-2 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "Besoin"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Editor, {
        required: "",
        modelValue: unref(form).need_service,
        "onUpdate:modelValue": ($event) => unref(form).need_service = $event,
        class: "mt-2",
        ceholder: "vous besoin de quoi pour la realisation de ce service",
        editorStyle: "height: 250px"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.need_service
      }, null, _parent));
      _push(`</div></div><div class="grid lg:grid-cols-2 gap-2 mt-4"><div class="w-full col-span-2 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "Image du services"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FileUpload, {
        showCancelButton: false,
        auto: true,
        fileLimit: "3",
        onClear: ($event) => _ctx.clearAll(),
        onSelect,
        onUpload: ($event) => _ctx.onAdvancedUpload($event),
        multiple: true,
        accept: "image/*",
        maxFileSize: 1e6
      }, {
        header: withCtx(({ chooseCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => chooseCallback(),
              icon: "pi pi-images",
              rounded: "",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" }, [
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => chooseCallback(),
                    icon: "pi pi-images",
                    rounded: "",
                    outlined: ""
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Tirez et déposez des fichiers ici pour les télécharger.</p>`);
          } else {
            return [
              createVNode("p", null, "Tirez et déposez des fichiers ici pour les télécharger.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.files
      }, null, _parent));
      _push(`</div><div class="w-full col-span-2 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "Example realiser"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FileUpload, {
        showCancelButton: false,
        auto: true,
        fileLimit: "3",
        onSelect: onSelectExample,
        onUpload: ($event) => _ctx.onAdvancedUpload($event),
        multiple: true,
        accept: "image/*",
        maxFileSize: 1e6
      }, {
        header: withCtx(({ chooseCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => chooseCallback(),
              icon: "pi pi-images",
              rounded: "",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap flex-1 gap-2 justify-content-between align-items-center" }, [
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => chooseCallback(),
                    icon: "pi pi-images",
                    rounded: "",
                    outlined: ""
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Tirez et déposez des fichiers ici pour les télécharger.</p>`);
          } else {
            return [
              createVNode("p", null, "Tirez et déposez des fichiers ici pour les télécharger.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4">`);
      _push(ssrRenderComponent(_component_InputText, {
        modelValue: unref(form).description_example,
        "onUpdate:modelValue": ($event) => unref(form).description_example = $event,
        placeholder: "titre de l'example",
        class: "w-full",
        id: "titre"
      }, null, _parent));
      _push(`</div></div></div><div class="grid lg:grid-cols-2 gap-2"><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "support",
        value: "support"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Chips, {
        required: "",
        modelValue: unref(form).basic_support,
        "onUpdate:modelValue": ($event) => unref(form).basic_support = $event,
        placeholder: "Le support du service",
        class: "w-full mt-2",
        id: "support"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: unref(form).errors.basic_support
      }, null, _parent));
      _push(`</div><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "titre"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputText, {
        modelValue: unref(form).video_url,
        "onUpdate:modelValue": ($event) => unref(form).video_url = $event,
        placeholder: "lien d'une video du  service",
        class: "w-full mt-2",
        id: "titre"
      }, null, _parent));
      _push(`</div></div><div class="grid lg:grid-cols-2 gap-2"><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "temps",
        value: "Temps"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputNumber, {
        required: "",
        modelValue: unref(form).basic_delivery_time,
        "onUpdate:modelValue": ($event) => unref(form).basic_delivery_time = $event,
        showButtons: "",
        placeholder: "Temps de livraison",
        class: "w-full mt-2",
        id: "titre"
      }, null, _parent));
      _push(`</div><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "titre"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Dropdown, {
        required: "",
        modelValue: unref(form).delivery_time_unit,
        "onUpdate:modelValue": ($event) => unref(form).delivery_time_unit = $event,
        optionValue: "id",
        options: unitTime.value,
        showClear: "",
        optionLabel: "name",
        placeholder: "Unite de temps en heures ou jours",
        class: "!w-full mt-2"
      }, null, _parent));
      _push(`</div></div><div class="grid lg:grid-cols-2 gap-2"><div class="w-full col-span-1 mb-4">`);
      _push(ssrRenderComponent(_component_InputLabel, {
        for: "titre",
        value: "Publier"
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputSwitch, {
        class: "mt-2",
        required: "",
        modelValue: unref(form).is_publish,
        "onUpdate:modelValue": ($event) => unref(form).is_publish = $event,
        id: "titre"
      }, null, _parent));
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        label: "Soumettre"
      }, null, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Service/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
