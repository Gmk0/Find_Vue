import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, withDirectives, vShow, withModifiers, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useForm, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./ActionMessage-c43f20d9.js";
import { _ as _sfc_main$1 } from "./FormSection-a8f26aba.js";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.js";
import { _ as _sfc_main$2 } from "./InputLabel-d47442f5.js";
import { _ as _sfc_main$7 } from "./PrimaryButton-b82fb16e.js";
import { _ as _sfc_main$3 } from "./SecondaryButton-0974b11b.js";
import { _ as _sfc_main$5 } from "./TextInput-4f082d1a.js";
import "./SectionTitle-1fb44ea7.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "PUT",
      name: props.user.name,
      email: props.user.email,
      photo: null
    });
    const verificationLinkSent = ref(null);
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const updateProfileInformation = () => {
      if (photoInput.value) {
        form.photo = photoInput.value.files[0];
      }
      form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput()
      });
    };
    const sendEmailVerification = () => {
      verificationLinkSent.value = true;
    };
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const updatePhotoPreview = () => {
      const photo = photoInput.value.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
    };
    const deletePhoto = () => {
      router.delete(route("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          photoPreview.value = null;
          clearPhotoFileInput();
        }
      });
    };
    const clearPhotoFileInput = () => {
      var _a;
      if ((_a = photoInput.value) == null ? void 0 : _a.value) {
        photoInput.value.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updateProfileInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-gray-50"${_scopeId}> Profile Information</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-gray-50" }, " Profile Information")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-gray-50"${_scopeId}> Mettre à jour les informations de profil et l&#39;adresse e-mail de votre compte</span>`);
          } else {
            return [
              createVNode("span", { class: "text-gray-50" }, " Mettre à jour les informations de profil et l'adresse e-mail de votre compte")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "photo",
                value: "Photo"
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}>`);
              if (__props.user.profile_photo_path != null) {
                _push2(`<img${ssrRenderAttr("src", "/storage/" + __props.user.profile_photo_path)}${ssrRenderAttr("alt", __props.user.name)} class="object-cover w-20 h-20 rounded-full"${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", __props.user.profile_photo_url)}${ssrRenderAttr("alt", __props.user.name)} class="object-cover w-20 h-20 rounded-full"${_scopeId}>`);
              }
              _push2(`</div><div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><span class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId}></span></div>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2 mr-2",
                type: "button",
                onClick: selectNewPhoto
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Selectionner une Nouvelle Photo `);
                  } else {
                    return [
                      createTextVNode(" Selectionner une Nouvelle Photo ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (__props.user.profile_photo_path) {
                _push2(ssrRenderComponent(_sfc_main$3, {
                  type: "button",
                  class: "mt-2",
                  onClick: deletePhoto
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Effacer la Photo `);
                    } else {
                      return [
                        createTextVNode(" Effacer la Photo ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$4, {
                message: unref(form).errors.photo,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "block w-full mt-1",
              required: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "block w-full mt-1",
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.email,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null) {
              _push2(`<div${_scopeId}><p class="mt-2 text-sm"${_scopeId}> Your email address is unverified. `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("verification.send"),
                method: "post",
                as: "button",
                class: "text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                onClick: sendEmailVerification
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Click here to re-send the verification email. `);
                  } else {
                    return [
                      createTextVNode(" Click here to re-send the verification email. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><div style="${ssrRenderStyle(verificationLinkSent.value ? null : { display: "none" })}" class="mt-2 text-sm font-medium text-green-600"${_scopeId}> A new verification link has been sent to your email address. </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6 sm:col-span-4"
              }, [
                createVNode("input", {
                  ref_key: "photoInput",
                  ref: photoInput,
                  type: "file",
                  class: "hidden",
                  onChange: updatePhotoPreview
                }, null, 544),
                createVNode(_sfc_main$2, {
                  for: "photo",
                  value: "Photo"
                }),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  __props.user.profile_photo_path != null ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: "/storage/" + __props.user.profile_photo_path,
                    alt: __props.user.name,
                    class: "object-cover w-20 h-20 rounded-full"
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                    key: 1,
                    src: __props.user.profile_photo_url,
                    alt: __props.user.name,
                    class: "object-cover w-20 h-20 rounded-full"
                  }, null, 8, ["src", "alt"]))
                ], 512), [
                  [vShow, !photoPreview.value]
                ]),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full",
                    style: "background-image: url('" + photoPreview.value + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, photoPreview.value]
                ]),
                createVNode(_sfc_main$3, {
                  class: "mt-2 mr-2",
                  type: "button",
                  onClick: withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Selectionner une Nouvelle Photo ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                __props.user.profile_photo_path ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  type: "button",
                  class: "mt-2",
                  onClick: withModifiers(deletePhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Effacer la Photo ")
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.photo,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "name",
                  value: "Name"
                }),
                createVNode(_sfc_main$5, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  type: "text",
                  class: "block w-full mt-1",
                  required: "",
                  autocomplete: "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "email",
                  value: "Email"
                }),
                createVNode(_sfc_main$5, {
                  id: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  type: "email",
                  class: "block w-full mt-1",
                  required: "",
                  autocomplete: "username"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.email,
                  class: "mt-2"
                }, null, 8, ["message"]),
                _ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("p", { class: "mt-2 text-sm" }, [
                    createTextVNode(" Your email address is unverified. "),
                    createVNode(unref(Link), {
                      href: _ctx.route("verification.send"),
                      method: "post",
                      as: "button",
                      class: "text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      onClick: withModifiers(sendEmailVerification, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Click here to re-send the verification email. ")
                      ]),
                      _: 1
                    }, 8, ["href", "onClick"])
                  ]),
                  withDirectives(createVNode("div", { class: "mt-2 text-sm font-medium text-green-600" }, " A new verification link has been sent to your email address. ", 512), [
                    [vShow, verificationLinkSent.value]
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$7, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};