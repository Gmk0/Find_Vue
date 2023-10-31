import { ref, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination, Scrollbar, EffectFade, A11y } from "swiper/modules";
/* empty css                   */import { useToast } from "primevue/usetoast/usetoast.esm.js";
import Avatar from "primevue/avatar/avatar.esm.js";
import { c as cartStore } from "./store-9e809cfe.js";
const _sfc_main = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    service: Object
  },
  setup(__props) {
    const props = __props;
    useToast();
    cartStore();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="md:h-[23rem] h-52 overflow-hidden bg-white rounded-xl shadow-md dark:text-gray-200 dark:bg-gray-900"><div class="relative flex flex-row lg:flex-col"><div class="relative group w-[48%] md:w-full">`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules: [unref(Navigation), unref(Autoplay), unref(Pagination), unref(Scrollbar), unref(EffectFade), unref(A11y)],
        effect: "fade",
        "slides-per-view": 1,
        navigation: "",
        autoplay: {
          delay: 4e3,
          disableOnInteraction: false
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.service.image, (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-2"${_scopeId2}><div class="w-full h-48 transition duration-500 ease-out bg-center bg-cover border rounded-xl lg:h-44" style="${ssrRenderStyle("background-image: url(/storage/" + image + ")")}"${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-2" }, [
                        createVNode("div", {
                          class: "w-full h-48 transition duration-500 ease-out bg-center bg-cover border rounded-xl lg:h-44",
                          style: "background-image: url(/storage/" + image + ")"
                        }, null, 4)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.service.image, (image, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-2" }, [
                      createVNode("div", {
                        class: "w-full h-48 transition duration-500 ease-out bg-center bg-cover border rounded-xl lg:h-44",
                        style: "background-image: url(/storage/" + image + ")"
                      }, null, 4)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (props.service.image.lenght > 1) {
        _push(`<div class="px-4"><button type="button" class="absolute left-0 z-50 p-4 ml-3 transition-opacity opacity-0 top-1/2 btn-outline btn-circle btn-sm group-hover:opacity-100 btn"> prev </button><button type="button" class="absolute right-0 z-50 p-4 mr-3 transition-opacity opacity-0 top-1/2 group-hover:opacity-100 btn btn-outline btn-circle btn-sm"> next </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="w-[52%] md:w-full flex gap-1 lg:px-4 px-2 pt-1 pb-2 flex-col"><div class="flex justify-between mt-1 lg:mt-0"><div class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-1 text-yellow-200" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.165l-4.53 2.73 1.088-5.997L.976 6.305l6.018-.873L10 0l2.006 5.432 6.018.873-4.582 3.593 1.088 5.997L10 13.165z"></path></svg><p class="text-sm text-gray-700 dark:text-gray-300">${ssrInterpolate(props.service.average)} (${ssrInterpolate(props.service.orderCount)}) </p></div><div class="flex"><p class="text-sm text-gray-700 dark:text-gray-300">${ssrInterpolate(props.service.freelance.level)}</p></div></div><div class="mt-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("oneService", props.service.service_numero),
        class: "mr-1 font-bold text-gray-600 hover:text-amber-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.service.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.service.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-2"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(unref(Avatar), {
        image: "/storage/" + props.service.user.profile_photo_path,
        class: "mr-2",
        shape: "circle"
      }, null, _parent));
      _push(`<a href="" class="flex"><span class="text-xs md:flex">${ssrInterpolate(props.service.user.name)}</span></a></div></div><div class="flex justify-between mt-auto mb-2 md:mt-3"><div class=""><button class="hidden"></button></div><div class="flex items-center gap-2"><div class="text-gray-600"> a partir de </div><button class="p-2 text-amber-600 font-bold text-lg !rounded-br-xl !rounded-md"><span class="font-semibold">${ssrInterpolate(props.service.basic_price)} $</span></button></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ServiceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
