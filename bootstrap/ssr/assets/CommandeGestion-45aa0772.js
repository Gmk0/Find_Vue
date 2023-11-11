import { ref, computed, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-d852c974.js";
import { useForm } from "@inertiajs/vue3";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import "./userInfo-683bc3e6.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./ResponsiveNavLink-79527a9d.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
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
    const toast = useToast();
    const rapport = useForm({
      description: "",
      order_id: props.commande.data.id
    });
    const form = useForm({
      etat: props.commande.data.feedback.etat,
      progression: props.commande.data.progress,
      delai: props.commande.data.feedback.delai_livraison_estimee,
      order_id: props.commande.data.id
    });
    const open = ref(false);
    const addElement = () => {
      form.post(route("commande.feedback"), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          toast.add({ severity: "success", summary: "Message", detail: "Feedback enviyer avec success", group: "br", life: 3e3 });
        },
        onError: (error) => {
          toast.add({ severity: "error", summary: "Message", detail: error.message, group: "br", life: 3e3 });
        }
      });
    };
    const etat = ref([
      { name: "En attente de traitement", code: "En attente de traitement" },
      { name: "En cours de préparation", code: "En cours de préparation" },
      { name: "En transit", code: "En transit" },
      { name: "Livré", code: "Livré" }
    ]);
    const percent = ref([
      { name: "10 %", code: 10 },
      { name: "30 %", code: 30 },
      { name: "50 %", code: 50 },
      { name: "70 %", code: 70 },
      { name: "90 %", code: 90 },
      { name: "100 %", code: 100 }
    ]);
    useForm({
      order_id: props.commande.data.id
    });
    const commande = computed(() => props.commande.data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      const _component_Link = resolveComponent("Link");
      const _component_Photo = resolveComponent("Photo");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_InputError = resolveComponent("InputError");
      const _component_Calendar = resolveComponent("Calendar");
      const _component_Button = resolveComponent("Button");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Collapse = resolveComponent("Collapse");
      const _component_Span = resolveComponent("Span");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
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
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("freelance.commandes"),
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"${_scopeId}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"${_scopeId}></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"${_scopeId}>Commande</span>`);
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
              createVNode("span", { class: "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" }, "Commande")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">${ssrInterpolate(commande.value.order_numero)}</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Commandes Gestion</h1></div><div><div class="lg:mx-auto lg:max-w-8xl"><div class="relative overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"><div class="grid grid-cols-1 px-6 py-4 md:grid-cols-2"><p class="mb-2 text-lg text-gray-800 font-inter dark:text-gray-200">Commande #${ssrInterpolate(commande.value.order_numero)}</p><p class="mb-2 text-lg"><span class="text-gray-600 dark:text-gray-300">Service : </span><span class="text-lg text-gray-800 dark:text-gray-200">${ssrInterpolate(commande.value.service.title)}</span></p><p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de commande : ${ssrInterpolate(commande.value.created_at)}</p><p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de livraison : <span class="text-green-600">${ssrInterpolate(commande.value.feedback.delai_livraison_estimee)}</span></p><p class="mt-4 text-base text-gray-600 dark:text-gray-300">Paiement : <span class="font-bold text-green-600">${ssrInterpolate(commande.value.status)}</span></p><p class="mt-4 text-base text-gray-600 dark:text-gray-300">Versement : `);
      if (commande.value.is_paid != null) {
        _push(`<span class="text-green-500 px-1.5 py-0.5 rounded-lg">${ssrInterpolate(commande.value.is_paid)}</span>`);
      } else {
        _push(`<span class="text-red-300 px-1.5 py-0.5 rounded-lg">en Attente</span>`);
      }
      _push(`</p><p class="mt-4 text-base text-gray-600 dark:text-gray-300">statut : `);
      if (commande.value.feedback.etat == "Livré") {
        _push(`<span class="font-bold text-green-600">${ssrInterpolate(commande.value.feedback.etat)}</span>`);
      } else {
        _push(`<span class="font-bold text-yellow-200">${ssrInterpolate(commande.value.feedback.etat)}</span>`);
      }
      _push(`</p><p class="mt-4 text-base text-gray-600 dark:text-gray-300">Progression : <span class="font-bold text-green-600">${ssrInterpolate(commande.value.progress)} %</span></p></div><div class="px-6 py-4 bcommande-t bcommande-gray-200"><p class="mb-2 text-lg text-gray-800">Client </p><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Photo, {
        user: commande.value.user
      }, null, _parent));
      _push(`<div class="ml-4"><p class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(commande.value.user.name)}</p><p class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(commande.value.user.email)}</p></div></div></div><div x-data="{open:false}" class="px-6 py-4 bcommande-t bcommande-gray-200"><h2 class="mb-4 text-lg font-semibold">Gestion de Commande</h2>`);
      if (commande.value.feedback.etat == "Livré" && commande.value.progress == 100) {
        _push(`<div><h1 class="mb-4 text-gray-800 dark:text-gray-200">Vous avez deja livrer (realiser) la commande</h1><div class="mb-4"><h1 class="text-gray-800 dark:text-gray-200">Le Feedback du client</h1></div><div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-700"><p class="text-sm text-gray-700 md:text-base dark:text-gray-300">${ssrInterpolate(commande.value.feedback.commentaires ? commande.value.feedback.commentaires : "pas de commentaire")}</p><div class="flex items-center my-4"><svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z"></path></svg><span class="text-sm font-semibold text-gray-700 dark:text-gray-100">(${ssrInterpolate(commande.value.feedback.satisfaction ? commande.value.feedback.satisfaction : 0)}) </span></div><div class="flex items-center gap-3 mb-4">`);
        _push(ssrRenderComponent(_component_Photo, {
          user: commande.value.user
        }, null, _parent));
        _push(`<p class="font-bold text-gray-800 dark:text-gray-100">${ssrInterpolate(commande.value.user.name)}</p></div><div class="flex gap-4">`);
        if (commande.value.feedback.commentaires != null) {
          _push(`<div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(props.commande.data.feedback.is_publish) ? ssrLooseContain(props.commande.data.feedback.is_publish, null) : props.commande.data.feedback.is_publish) ? " checked" : ""} class="sr-only peer"><div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:bcommande-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:bcommande-gray-300 after:bcommande after:rounded-full after:h-5 after:w-5 after:transition-all dark:bcommande-gray-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Publier</span></label></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mb-2"></div></div></div></div>`);
      } else {
        _push(`<div class=""><div class="grid gap-4 mb-4 lg:grid-cols-3"><div>`);
        _push(ssrRenderComponent(_component_Dropdown, {
          modelValue: unref(form).etat,
          "onUpdate:modelValue": ($event) => unref(form).etat = $event,
          options: etat.value,
          optionValue: "name",
          showClear: "",
          optionLabel: "name",
          placeholder: "Etat de la commande",
          class: "!w-full"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_Dropdown, {
          modelValue: unref(form).progression,
          "onUpdate:modelValue": ($event) => unref(form).progression = $event,
          options: percent.value,
          optionLabel: "name",
          optionValue: "code",
          placeholder: "pourcentage",
          showClear: "",
          class: "!w-full"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputError, {
          message: unref(form).errors.progression
        }, null, _parent));
        _push(`</div><div class="w-full">`);
        _push(ssrRenderComponent(_component_Calendar, {
          modelValue: unref(form).delai,
          "onUpdate:modelValue": ($event) => unref(form).delai = $event,
          placeholder: "date de livraison",
          class: "w-full"
        }, null, _parent));
        _push(`</div></div><div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => addElement(),
          label: "Soumettre"
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div><div class="w-full p-4 bg-white rounded-lg shadow-md bcommande-t bcommande-gray-200 dark:bg-gray-800"><form class="flex flex-col p-3 space-y-4"><label class="text-sm font-semibold" for="progress">Rapport d&#39;avancement</label>`);
      _push(ssrRenderComponent(_component_Textarea, {
        required: "",
        modelValue: unref(rapport).description,
        "onUpdate:modelValue": ($event) => unref(rapport).description = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_InputError, {
        message: unref(rapport).errors.description
      }, null, _parent));
      _push(`<button type="submit" class="self-end px-4 py-2 mb-3 text-white bg-blue-500 rounded-md"><span>Soumettre</span></button></form><div><div x-data="{open:false}" class="relative mb-3"><h6 class="mb-0"><button class="relative flex items-center w-full p-4 text-base font-semibold text-left text-gray-600 transition-all ease-in cursor-pointer bcommande-b bcommande-solid bcommande-slate-100 dark:text-gray-500 rounded-t-1 group text-dark-500" data-collapse-target="animated-collapse-1"><span>Rapport Envoyer</span><i class="${ssrRenderClass([open.value ? "rotate-180 transition-transform" : "", "absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down"])}"></i></button></h6>`);
      _push(ssrRenderComponent(_component_Collapse, { when: open.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 mb-3 text-sm leading-normal rapport"${_scopeId}><!--[-->`);
            ssrRenderList(props.commande.data.rapports, (rapport2) => {
              _push2(`<div class="p-3 bcommande-b bcommande-gray-400"${_scopeId}><div class="mb-3 text-base text-gray-600 cursor-pointer dark:text-gray-300"${_scopeId}>${ssrInterpolate(rapport2.description)}</div>`);
              _push2(ssrRenderComponent(_component_Span, { class: "mt-4 text-sm text-gray-500" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(rapport2.created_at)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(rapport2.created_at), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div x-collapse x-show="show" class="p-2"${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 mb-3 text-sm leading-normal rapport" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.commande.data.rapports, (rapport2) => {
                  return openBlock(), createBlock("div", { class: "p-3 bcommande-b bcommande-gray-400" }, [
                    createVNode("div", { class: "mb-3 text-base text-gray-600 cursor-pointer dark:text-gray-300" }, toDisplayString(rapport2.description), 1),
                    createVNode(_component_Span, { class: "mt-4 text-sm text-gray-500" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(rapport2.created_at), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", {
                      "x-collapse": "",
                      "x-show": "show",
                      class: "p-2"
                    })
                  ]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Commande/CommandeGestion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
