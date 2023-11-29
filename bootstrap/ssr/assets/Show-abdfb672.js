import { computed, mergeProps, useSSRContext, ref, onMounted, resolveComponent, resolveDirective, unref, withCtx, createVNode, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./UserLayout-6a7b0e19.js";
import "./DeleteUserForm-d0eca4a8.js";
import _sfc_main$8 from "./LogoutOtherBrowserSessionsForm-b01b45ca.js";
import { S as SectionBorder } from "./SectionBorder-50fdc36f.js";
import _sfc_main$7 from "./TwoFactorAuthenticationForm-e47c43ab.js";
import _sfc_main$6 from "./UpdatePasswordForm-393dc99d.js";
import _sfc_main$5 from "./UpdateProfileInformationForm-7c79df2c.js";
import { c as useNotification, d as useParrainage } from "./userInfo-2152bb8f.js";
import "@inertiajs/vue3";
import axios from "axios";
import { _ as _sfc_main$3 } from "./TextInput-14bc0530.js";
import "./FormSection-a8f26aba.js";
import "./PrimaryButton-b82fb16e.js";
import "./SecondaryButton-0974b11b.js";
import Skeleton from "primevue/skeleton/skeleton.esm.js";
import "./OtherPanelUser-8f154558.js";
import "vue3-popper";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@vueuse/core";
import "./DialogModal-589bf386.js";
import "./SectionTitle-1fb44ea7.js";
import "./DangerButton-5ac62031.js";
import "./ActionMessage-c43f20d9.js";
import "./InputLabel-d47442f5.js";
import "pinia";
import "./ResponsiveNavLink-79527a9d.js";
const _sfc_main$2 = {
  __name: "NotificationSeeting",
  __ssrInlineRender: true,
  setup(__props) {
    const notification = useNotification();
    const userParamaitres = computed(() => notification.getParametres);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-1 md:gap-6" }, _attrs))}><div class="md:col-span-1 flex justify-between"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium dark:text-gray-50 text-gray-900"> Paramètres de notifications </h3><p class="mt-1 text-sm dark:text-gray-100 text-gray-600"> Restez informé(e) sur les dernières opportunités! Personnalisez vos notifications et profitez d&#39;avantages exclusifs en mettant à jour votre profil. </p></div></div><div class="mt-5 md:mt-0 md:col-span-2 rounded-md"><div class="p-4 space-y-4 bg-white dark:bg-gray-800"><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.push_notifications_enabled) ? ssrLooseContain(userParamaitres.value.push_notifications_enabled, null) : userParamaitres.value.push_notifications_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir des notifications par push</span></label></div></div><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.email_notifications_enabled) ? ssrLooseContain(userParamaitres.value.email_notifications_enabled, null) : userParamaitres.value.email_notifications_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir des notifications par email </span></label></div></div><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.number_notifications_enabled) ? ssrLooseContain(userParamaitres.value.number_notifications_enabled, null) : userParamaitres.value.number_notifications_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir des notifications par telephone </span></label></div></div><div class="flex items-center"><div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" class="sr-only peer"${ssrIncludeBooleanAttr(Array.isArray(userParamaitres.value.send_invoice_enabled) ? ssrLooseContain(userParamaitres.value.send_invoice_enabled, null) : userParamaitres.value.send_invoice_enabled) ? " checked" : ""}><div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div><span class="ml-3 text-sm font-medium text-gray-400 dark:text-gray-500">Recevoir les facture par telephone </span></label></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NotificationSeeting.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Parainage",
  __ssrInlineRender: true,
  setup(__props) {
    const parrainageStore = useParrainage();
    const codeParainage = computed(() => parrainageStore.getReferalCode);
    const utilisateurParainer = computed(() => parrainageStore.getUsers);
    const loading = ref(false);
    const skeleton = ref(true);
    onMounted(async () => {
      parrainageStore.getCodeUser();
      parrainageStore.getAllUser();
      setTimeout(() => {
        skeleton.value = false;
      }, 2e3);
    });
    const genererCode = async () => {
      try {
        loading.value = true;
        const response = await axios.post("/api/generate-code-parainage");
        if (response.status == 200) {
          parrainageStore.getCodeUser();
        } else {
          alert("error lors de la generation du code");
        }
        loading.value = false;
      } catch (e) {
        loading.value = false;
        console.log(e);
      }
    };
    const link = route("auth.register", codeParainage.value);
    const modal = ref(false);
    const modelShare = () => {
      modal.value = !modal.value;
    };
    const onCopy = (e) => {
      alert("You just copied: " + e.text);
    };
    const onError = (e) => {
      alert("Failed to copy texts");
    };
    const networks = [
      { network: "email", name: "Email", icon: "far fah fa-lg fa-envelope", color: "#333333" },
      { network: "facebook", name: "Facebook", icon: "fab fah fa-lg fa-facebook-f", color: "#1877f2" },
      { network: "linkedin", name: "LinkedIn", icon: "fab fah fa-lg fa-linkedin", color: "#007bb5" },
      { network: "messenger", name: "Messenger", icon: "fab fah fa-lg fa-facebook-messenger", color: "#0084ff" },
      { network: "sms", name: "SMS", icon: "far fah fa-lg fa-comment-dots", color: "#333333" },
      { network: "telegram", name: "Telegram", icon: "fab fah fa-lg fa-telegram-plane", color: "#0088cc" },
      { network: "twitter", name: "Twitter", icon: "fab fah fa-lg fa-twitter", color: "#1da1f2" },
      { network: "whatsapp", name: "Whatsapp", icon: "fab fah fa-lg fa-whatsapp", color: "#25d366" }
    ];
    const sharing = {
      url: link,
      title: "Rejoignez-nous sur FIND!.",
      description: "Inscrivez-vous sur Find Freelance et découvrez un monde d'opportunités.Utilisez mon lien de parrainage pour une inscription rapide et facile!.",
      quote: "Explorez de nouvelles opportunités et élargissez vos horizons sur Find Freelance. Rejoignez-moi dès maintenant!",
      hashtags: "Freelance, Opportunités,Photographies,Design,Progammation",
      twitterUser: "Find Freelance"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _component_Photo = resolveComponent("Photo");
      const _component_Dialog = resolveComponent("Dialog");
      const _component_ShareNetwork = resolveComponent("ShareNetwork");
      const _directive_clipboard = resolveDirective("clipboard");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-1 md:gap-6" }, _attrs))}><div class="md:col-span-1 flex justify-between"><div class="px-4 sm:px-0"><h3 class="text-lg font-medium dark:text-gray-50 text-gray-900"> Boostez vos Avantages avec le Parrainage! </h3><p class="mt-1 text-sm dark:text-gray-100 text-gray-600"><span class="dark:text-gray-50">Mettez à jour votre profil et votre adresse e-mail pour débloquer des avantages exclusifs grâce à notre programme de parrainage. Invitez vos amis à rejoindre et profitez ensemble des opportunités exceptionnelles qui vous attendent!</span></p></div></div><div class="mt-5 md:mt-0 md:col-span-2 rounded-md"><div><div class="px-4 py-5 bg-white shadow dark:bg-gray-800 sm:p-6"><div class="">`);
      if (!skeleton.value) {
        _push(`<div class="mb-6">`);
        if (codeParainage.value != null) {
          _push(`<h2 class="mb-2 text-2xl dark:text-gray-100 font-bold">Votre code Parainage : <span class="dark:text-gray-50">${ssrInterpolate(codeParainage.value)}</span></h2>`);
        } else {
          _push(`<div class="flex flex-col gap-4"><p class="text-base text-gray-800 dark:text-gray-50">Vous n&#39;avez pas encore de code de parainage veuillez en generer Un</p><div>`);
          _push(ssrRenderComponent(_component_Button, {
            loading: loading.value,
            onClick: ($event) => genererCode(),
            label: "Generer un code de parainage",
            outlined: ""
          }, null, _parent));
          _push(`</div></div>`);
        }
        if (codeParainage.value != null) {
          _push(ssrRenderComponent(_component_Button, {
            label: "Partager",
            onClick: ($event) => modelShare(),
            outlined: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div></div>`);
      if (skeleton.value) {
        _push(`<div class="border-round border-1 surface-border p-4 surface-card"><ul class="m-0 p-0 list-none"><li class="mb-3"><div class="flex">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          shape: "circle",
          size: "4rem",
          class: "mr-2"
        }, null, _parent));
        _push(`<div class="align-self-center" style="${ssrRenderStyle({ "flex": "1" })}">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          width: "100%",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeleton), { width: "75%" }, null, _parent));
        _push(`</div></div></li><li class="mb-3"><div class="flex">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          shape: "circle",
          size: "4rem",
          class: "mr-2"
        }, null, _parent));
        _push(`<div class="align-self-center" style="${ssrRenderStyle({ "flex": "1" })}">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          width: "100%",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeleton), { width: "75%" }, null, _parent));
        _push(`</div></div></li><li class="mb-3"><div class="flex">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          shape: "circle",
          size: "4rem",
          class: "mr-2"
        }, null, _parent));
        _push(`<div class="align-self-center" style="${ssrRenderStyle({ "flex": "1" })}">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          width: "100%",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeleton), { width: "75%" }, null, _parent));
        _push(`</div></div></li><li><div class="flex">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          shape: "circle",
          size: "4rem",
          class: "mr-2"
        }, null, _parent));
        _push(`<div class="align-self-center" style="${ssrRenderStyle({ "flex": "1" })}">`);
        _push(ssrRenderComponent(unref(Skeleton), {
          width: "100%",
          class: "mb-2"
        }, null, _parent));
        _push(ssrRenderComponent(unref(Skeleton), { width: "75%" }, null, _parent));
        _push(`</div></div></li></ul></div>`);
      } else {
        _push(`<div>`);
        if (utilisateurParainer.value.length > 0) {
          _push(`<div class="mt-4"><div class="py-4"><h1 class="text-base dark:text-gray-100">Utilisateurs Parrainés</h1></div><!--[-->`);
          ssrRenderList(utilisateurParainer.value, (user) => {
            _push(`<div class="flex items-center mt-4">`);
            _push(ssrRenderComponent(_component_Photo, { user }, null, _parent));
            _push(`<div class="ml-4"><a href="" class="text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(user.name)}</a></div></div>`);
          });
          _push(`<!--]-->`);
          if (utilisateurParainer.value.length >= 10) {
            _push(`<div class="mt-4"><p class="text-green-500">Félicitations! Vous avez parrainé 10 utilisateurs et vous avez gagné un cadeau spécial!</p></div>`);
          } else {
            _push(`<div class="mt-4"><p>Parrainez encore ${ssrInterpolate(10 - utilisateurParainer.value.length)} utilisateurs pour recevoir un cadeau spécial!</p></div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: modal.value,
        "onUpdate:visible": ($event) => modal.value = $event,
        style: { width: "25rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" },
        position: "center",
        modal: true,
        header: "Partager",
        draggable: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><div class="flex flex-row overflow-auto py-2"${_scopeId}><!--[-->`);
            ssrRenderList(networks, (network) => {
              _push2(`<button class="p-2 flex items-center flex-col"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ShareNetwork, {
                class: "rounded-full text-white p-4",
                network: network.network,
                key: network.network,
                style: { backgroundColor: network.color },
                url: sharing.url,
                title: sharing.title,
                description: sharing.description,
                quote: sharing.quote,
                hashtags: sharing.hashtags,
                twitterUser: sharing.twitterUser
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="${ssrRenderClass(network.icon)}"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", {
                        class: network.icon
                      }, null, 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<span class="p-2"${_scopeId}>${ssrInterpolate(network.name)}</span></button>`);
            });
            _push2(`<!--]--></div><div class="flex mt-4 gap-2"${_scopeId}><div class="w-[80%]"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(link),
              "onUpdate:modelValue": ($event) => isRef(link) ? link.value = $event : null,
              class: "block w-full mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-[20%]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, mergeProps({
              label: "copier",
              size: "small",
              outlined: ""
            }, ssrGetDirectiveProps(_ctx, _directive_clipboard, unref(link), "copy"), ssrGetDirectiveProps(_ctx, _directive_clipboard, onCopy, "success"), ssrGetDirectiveProps(_ctx, _directive_clipboard, onError, "error")), null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("div", { class: "flex flex-row overflow-auto py-2" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(networks, (network) => {
                    return createVNode("button", { class: "p-2 flex items-center flex-col" }, [
                      (openBlock(), createBlock(_component_ShareNetwork, {
                        class: "rounded-full text-white p-4",
                        network: network.network,
                        key: network.network,
                        style: { backgroundColor: network.color },
                        url: sharing.url,
                        title: sharing.title,
                        description: sharing.description,
                        quote: sharing.quote,
                        hashtags: sharing.hashtags,
                        twitterUser: sharing.twitterUser
                      }, {
                        default: withCtx(() => [
                          createVNode("i", {
                            class: network.icon
                          }, null, 2)
                        ]),
                        _: 2
                      }, 1032, ["network", "style", "url", "title", "description", "quote", "hashtags", "twitterUser"])),
                      createVNode("span", { class: "p-2" }, toDisplayString(network.name), 1)
                    ]);
                  }), 64))
                ]),
                createVNode("div", { class: "flex mt-4 gap-2" }, [
                  createVNode("div", { class: "w-[80%]" }, [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(link),
                      "onUpdate:modelValue": ($event) => isRef(link) ? link.value = $event : null,
                      class: "block w-full mt-1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "w-[20%]" }, [
                    withDirectives(createVNode(_component_Button, {
                      label: "copier",
                      size: "small",
                      outlined: ""
                    }, null, 512), [
                      [_directive_clipboard, unref(link), "copy"],
                      [_directive_clipboard, onCopy, "success"],
                      [_directive_clipboard, onError, "error"]
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Parainage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$4
}, {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array
  },
  setup(__props) {
    const activeTab = ref("AccountP");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
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
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Profile</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Profile</h1></div><div><div class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"><div class="col-span-12 lg:col-span-4"><div style="${ssrRenderStyle({ "top": "8rem" })}" class="sticky p-4 bg-white rounded-[25px] dark:bg-gray-800 sm:p-5"><div class="flex items-center space-x-4"><div class="avatar h-14 w-14">`);
      if (_ctx.$page.props.auth.user.profile_photo_path != null) {
        _push(`<img class="object-cover rounded-full"${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)} alt="">`);
      } else {
        _push(`<img class="rounded-full"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)} alt="">`);
      }
      _push(`</div><div><h3 class="text-base font-medium text-slate-700 dark:text-navy-100">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</h3></div></div><ul class="mt-6 space-y-1.5 font-inter font-medium"><li><a class="${ssrRenderClass([activeTab.value === "AccountP" ? "border-amber-600 border-b" : "hover:bg-slate-100 hover:text-slate-800 text-gray-700 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "AccountP" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="${ssrRenderClass(activeTab.value === "AccountP" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}">Comptes Utilisateur</span></a></li><li><a class="${ssrRenderClass([activeTab.value === "Parainage" ? "border-amber-600 border-b text-slate-800 " : "hover:bg-slate-100  hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "Parainage" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span class="${ssrRenderClass(activeTab.value === "Parainage" ? "dark:text-white text-slate-800" : "text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}">Parainage</span></a></li><li><a class="${ssrRenderClass([activeTab.value === "Notification" ? "border-amber-600 border-b text-slate-800 " : "hover:bg-slate-100  hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "Notification" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg><span class="${ssrRenderClass(activeTab.value === "Notification" ? "dark:text-white text-slate-800" : "text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}">Notification</span></a></li><li><a class="${ssrRenderClass([activeTab.value === "Security" ? "border-amber-600 border-b" : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "Security" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg><span class="${ssrRenderClass(activeTab.value === "Security" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}">Securité</span></a></li><li><a class="${ssrRenderClass([activeTab.value === "Privacy" ? "border-amber-600 border-b" : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100", "group flex items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide text-white outline-none transition-all"])}" href="#"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeTab.value === "Privacy" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200", "w-5 h-5"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg><span class="${ssrRenderClass(activeTab.value === "Privacy" ? "dark:text-white text-slate-800" : "transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200")}"> Activites </span></a></li></ul></div></div><div style="${ssrRenderStyle(activeTab.value === "AccountP" ? null : { display: "none" })}" class="col-span-12 lg:col-span-8">`);
      if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$5, {
          user: _ctx.$page.props.auth.user
        }, null, _parent));
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (activeTab.value === "Security") {
        _push(`<div x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">`);
        if (_ctx.$page.props.jetstream.canUpdatePassword) {
          _push(`<div>`);
          _push(ssrRenderComponent(_sfc_main$6, { class: "mt-10 sm:mt-0" }, null, _parent));
          _push(ssrRenderComponent(SectionBorder, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
          _push(`<div>`);
          _push(ssrRenderComponent(_sfc_main$7, {
            "requires-confirmation": __props.confirmsTwoFactorAuthentication,
            class: "mt-10 sm:mt-0"
          }, null, _parent));
          _push(ssrRenderComponent(SectionBorder, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "Notification") {
        _push(`<div x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">`);
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "Parainage") {
        _push(`<div x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "Privacy") {
        _push(`<div x-transition:enter="transition-all duration-300 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">`);
        _push(ssrRenderComponent(_sfc_main$8, {
          sessions: __props.sessions,
          class: "mt-10 sm:mt-0"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
