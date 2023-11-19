import { ref, computed, resolveComponent, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./InputLabel-d47442f5.js";
import { _ as _sfc_main$1 } from "./FreelanceLayout-941c173b.js";
import { useForm, Link } from "@inertiajs/vue3";
import "./userInfo-1ade63c0.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./ResponsiveNavLink-79527a9d.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "MissionPostuler",
  __ssrInlineRender: true,
  props: {
    mission: Object,
    missionResponse: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const isOpen = ref(false);
    const form = useForm({
      message: (_a = props.missionResponse) == null ? void 0 : _a.content,
      budget: props.mission.data.budget,
      mission_id: props.mission.data.id
    });
    const mission = computed(() => props.mission.data);
    const isImage = (fileName) => {
      let imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
      let extension = fileName.split(".").pop().toLowerCase();
      return imageExtensions.includes(extension);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Message = resolveComponent("Message");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
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
        href: _ctx.route("freelance.missions"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Mission</span>`);
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Mission")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Postuler</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Mission ${ssrInterpolate(mission.value.mission_numero)}</h1></div><div>`);
      if (props.missionResponse != null) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Message, {
          closable: false,
          severity: "info"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Vous avez deja postuler pour cette mission`);
            } else {
              return [
                createTextVNode("Vous avez deja postuler pour cette mission")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container py-8 lg:px-2"><div class="p-6 mb-3 bg-white rounded-lg shadow-md dark:bg-navy-800"><h2 class="mb-4 text-lg font-bold text-gray-800 dark:text-gray-50 lg:text-xl">${ssrInterpolate(mission.value.title)}</h2><p class="mb-4 text-gray-600 dark:text-gray-200">Description de la mission :</p><p class="mb-4 leading-loose text-gray-800 dark:text-gray-50">${ssrInterpolate(mission.value.description)}</p><p class="mb-4 text-gray-600 dark:text-gray-200">Détails du projet :</p><ul class="mb-4 list-disc list-inside"><li class="text-gray-600 dark:text-gray-200">Durée du de la mission : Du <span class="font-bold text-gray-800 dark:text-gray-50">${ssrInterpolate(mission.value.begin_mission)}</span> au <span class="font-bold text-gray-800 dark:text-gray-50">${ssrInterpolate(mission.value.end_mission)}</span></li><li class="mt-4 text-gray-600 dark:text-gray-200">Budget : <span class="text-lg font-bold text-amber-600">${ssrInterpolate(mission.value.budget)} $</span></li></ul><p class="mb-4 text-gray-600 dark:text-gray-200">Exigences de la mission :</p><div>${mission.value.exigences}</div><div class="flex flex-col gap-1 mt-4 mb-3"><p class="mb-1 text-gray-600 dark:text-gray-200">Fichier Inclus : </p>`);
      if (mission.value.files != null) {
        _push(`<div><div class="flex flex-col items-start justify-start py-4"><!--[-->`);
        ssrRenderList(mission.value.files, (file, index) => {
          _push(`<div>`);
          if (!isImage(file)) {
            _push(`<div><div class="relative group"><div class="flex flex-wrap items-center"><p>${ssrInterpolate(file.name)}</p><i class="fas fa-file-alt"></i></div><div class="absolute top-0 right-0 mt-2 mr-2"></div></div></div>`);
          } else {
            _push(`<div class="flex-flex-wrap"><div class="relative group"><img${ssrRenderAttr("src", "/storage/" + file)} alt="Product Name" class="w-24 h-full border rounded-md cursor-pointer lg:w-24 2xl:w-24 hover:opacity-80"></div></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<p>Pas de fichier inclus</p>`);
      }
      _push(`</div><p class="mb-4 text-lg font-extrabold text-gray-800 dark:text-gray-200">Postuler à cette mission</p></div><div x-cloak x-show="show" x-collapse class="p-8 mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:"><form class="grid grid-cols-1 gap-4"><div class="flex flex-col w-full gap-4">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: "Message",
        value: "Message"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Textarea, {
        required: "",
        modelValue: unref(form).message,
        "onUpdate:modelValue": ($event) => unref(form).message = $event,
        rows: "10",
        class: "w-full",
        placeholder: "Message"
      }, null, _parent));
      _push(`</div><div><div class="flex"><label class="inline-flex items-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isOpen.value) ? ssrLooseContain(isOpen.value, "") : isOpen.value) ? " checked" : ""} class="w-5 h-5 text-gray-600 rounded-full form-checkbox" name="example" value=""><span class="ml-2 text-sm text-gray-700 md:text-base dark:text-gray-300">Proposer un prix </span></label></div>`);
      if (isOpen.value) {
        _push(`<div class="p-4"><div class="flex"><span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span><input type="number" required id="website-admin"${ssrRenderAttr("value", unref(form).budget)} class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-amber-500 focus:border-amber-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Prix"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (props.missionResponse == null) {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Button, {
          type: "submit",
          label: "Postuler",
          severity: "info"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Button, {
          type: "submit",
          label: "Changer",
          severity: "info"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</form></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Mission/MissionPostuler.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
