import { ref, resolveComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import "swiper/vue";
import "swiper/modules";
/* empty css                   */import { useToast } from "primevue/usetoast/usetoast.esm.js";
import "primevue/avatar/avatar.esm.js";
import { e as cartStore } from "./userInfo-b7520541.js";
const imageDefault = "/images/illustrations/missionF.svg";
const _sfc_main = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    service: Object
  },
  setup(__props) {
    useToast();
    const props = __props;
    cartStore();
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toast = resolveComponent("Toast");
      const _component_Photo = resolveComponent("Photo");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`<div class="md:h-[24rem] h-52 overflow-hidden bg-white rounded-xl shadow-md dark:text-gray-200 dark:bg-gray-900"><div class="relative flex flex-row lg:flex-col"><div class="relative group w-[48%] md:w-full"><div class="p-2">`);
      if (props.service.image != null) {
        _push(`<div class="h-48 transition duration-500 ease-out bg-center bg-cover border rounded-xl lg:h-44" style="${ssrRenderStyle("background-image: url(/storage/" + props.service.image[0] + ")")}"></div>`);
      } else {
        _push(`<div class="h-48 transition duration-500 ease-out bg-center bg-cover border rounded-xl lg:h-44" style="${ssrRenderStyle("background-image: url(" + imageDefault + ")")}"></div>`);
      }
      _push(`</div></div><div class="w-[52%] md:w-full flex gap-1 lg:px-4 px-2 pt-1 pb-2 flex-col"><div class="flex justify-between mt-1 lg:mt-0"><div class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="lg:w-6 lg:h-6 w-4 h-4 mr-1 text-yellow-200" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.165l-4.53 2.73 1.088-5.997L.976 6.305l6.018-.873L10 0l2.006 5.432 6.018.873-4.582 3.593 1.088 5.997L10 13.165z"></path></svg><p class="text-sm text-gray-700 dark:text-gray-300">${ssrInterpolate(props.service.average)} (${ssrInterpolate(props.service.orderCount)}) </p></div><div class="flex"><p class="text-sm text-gray-700 dark:text-gray-300">${ssrInterpolate(props.service.freelance.level)}</p></div></div><div class="mt-1">`);
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
      _push(`</div><div class="lg:mt-2 mt-3"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_Photo, {
        user: props.service.user,
        taille: "8"
      }, null, _parent));
      _push(`<a href="" class="flex"><span class="text-xs md:flex">${ssrInterpolate(props.service.user.name)}</span></a></div></div><div class="flex justify-between mt-auto mb-2 md:mt-3"><div class=""><button class="hidden"></button></div><div class="flex items-center gap-2 pt-auto"><div class="text-gray-600"> a partir de </div><button class="p-2 text-amber-600 font-bold text-lg !rounded-br-xl !rounded-md"><span class="font-semibold">${ssrInterpolate(props.service.basic_price)} $</span></button></div></div></div></div></div></div>`);
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
