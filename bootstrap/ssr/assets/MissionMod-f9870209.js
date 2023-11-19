import { computed, ref, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./UserLayout-9b2e98eb.js";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import { useForm, Link, router } from "@inertiajs/vue3";
import { a as useCategoryStore } from "./userInfo-1ade63c0.js";
import "./OtherPanelUser-46280d26.js";
import "vue3-popper";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "pinia";
import "axios";
import "./ResponsiveNavLink-79527a9d.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "MissionMod",
  __ssrInlineRender: true,
  props: {
    mission: Object
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const useCategory = useCategoryStore();
    const category = computed(() => useCategory.categoriesGet.categories);
    const mission = computed(() => props.mission.data);
    const form = useForm({
      title: props.mission.data.title,
      exigence: props.mission.data.exigences,
      description: props.mission.data.description,
      dateD: props.mission.data.begin_mission,
      dateF: props.mission.data.end_mission,
      budget: props.mission.data.budget,
      category_id: props.mission.data.category.id,
      mission_id: props.mission.data.id,
      image: null
    });
    const remove = (index) => {
      router.post(route("removeFileMission"), {
        file_index: index,
        mission_id: props.mission.data.id
      }, {
        preserveScroll: true,
        onSuccess: () => {
          form.image = null;
          toast.add({ severity: "info", summary: "Message", detail: "Photo supprimer", group: "br", life: 1e3 });
        }
      });
    };
    const onAdvancedUpload = () => {
    };
    ref(1);
    ref("");
    const onSelect = (event) => {
      form.image = event.files;
    };
    const isImage = (fileName) => {
      let imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
      let extension = fileName.split(".").pop().toLowerCase();
      return imageExtensions.includes(extension);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      const _component_InputText = resolveComponent("InputText");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_Calendar = resolveComponent("Calendar");
      const _component_Button = resolveComponent("Button");
      const _component_FileUpload = resolveComponent("FileUpload");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user.dashboard"),
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
        href: _ctx.route("user.missions"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Edit</span>`);
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Edit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Mission Modification</h1></div><div><form class="p-4 mt-2 border border-gray-100 rounded-md min-h-72"><div class="flex flex-col mt-4"><div class="w-full">`);
      _push(ssrRenderComponent(_component_InputText, {
        id: "name",
        required: "",
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event,
        autofocus: "",
        class: "w-full",
        placeholder: "Titre"
      }, null, _parent));
      _push(`</div><div class="w-full mt-4">`);
      _push(ssrRenderComponent(_component_Textarea, {
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event,
        rows: "4",
        cols: "10",
        class: "w-full",
        placeholder: "Decrivez votre mission.data.."
      }, null, _parent));
      _push(`</div><div class="mt-4 W-full">`);
      _push(ssrRenderComponent(_component_Dropdown, {
        modelValue: unref(form).category_id,
        "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
        optionValue: "id",
        options: category.value,
        showClear: "",
        optionLabel: "name",
        placeholder: "Categories",
        class: "!w-full"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col w-full mt-4"><div class="flex gap-8"><div class="flex w-full">`);
      _push(ssrRenderComponent(_component_Calendar, {
        modelValue: unref(form).dateD,
        "onUpdate:modelValue": ($event) => unref(form).dateD = $event,
        class: "w-full",
        placeholder: "Date debut"
      }, null, _parent));
      _push(`</div><div class="flex w-full">`);
      _push(ssrRenderComponent(_component_Calendar, {
        modelValue: unref(form).dateF,
        "onUpdate:modelValue": ($event) => unref(form).dateF = $event,
        class: "w-full",
        inputId: "birth_date",
        placeholder: "Date Fin"
      }, null, _parent));
      _push(`</div></div><div class="mt-4 mb-4"><label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exigences</label>`);
      _push(ssrRenderComponent(_component_Textarea, {
        id: "message",
        modelValue: unref(form).exigence,
        "onUpdate:modelValue": ($event) => unref(form).exigence = $event,
        rows: "4",
        cols: "10",
        class: "w-full",
        placeholder: "Exigences pour la mission"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_InputText, {
        id: "name",
        type: "text",
        class: "block w-full mt-1",
        required: "",
        placeholder: "Budget",
        modelValue: unref(form).budget,
        "onUpdate:modelValue": ($event) => unref(form).budget = $event
      }, null, _parent));
      _push(`</div></div><div class="grid mt-6 lg:grid-cols-2"><div class="flex flex-col items-start justify-start py-4"><div class="flex flex-wrap mt-4 space-x-2"><!--[-->`);
      ssrRenderList(mission.value.files, (file, index) => {
        _push(`<div>`);
        if (!isImage(file)) {
          _push(`<div><div class="relative group"><div class="flex flex-wrap items-center"><p>${ssrInterpolate(file.name)}</p><i class="fas fa-file-alt"></i></div><div class="absolute top-0 right-0 mt-2 mr-2">`);
          _push(ssrRenderComponent(_component_Button, {
            onClick: ($event) => remove(index),
            size: "small",
            outlined: "",
            icon: "pi pi-trash"
          }, null, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<div class="flex-flex-wrap"><div class="relative group"><img${ssrRenderAttr("src", "/storage/" + file)} alt="Product Name" class="w-16 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80"><div class="absolute top-0 right-0 mt-2 mr-2">`);
          _push(ssrRenderComponent(_component_Button, {
            onClick: ($event) => remove(index),
            size: "small",
            outlined: "",
            icon: "pi pi-trash"
          }, null, _parent));
          _push(`</div></div></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="lg:col-span-1 card">`);
      _push(ssrRenderComponent(_component_Toast, null, null, _parent));
      _push(ssrRenderComponent(_component_FileUpload, {
        auto: true,
        onSelect,
        onUpload: ($event) => onAdvancedUpload(),
        multiple: true,
        accept: "image/*",
        maxFileSize: 1e6
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Drag and drop files to here to upload.</p>`);
          } else {
            return [
              createVNode("p", null, "Drag and drop files to here to upload.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-center mt-4">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        label: "Modifier",
        outlined: ""
      }, null, _parent));
      _push(`</div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Mission/MissionMod.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
