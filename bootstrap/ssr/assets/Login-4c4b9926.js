import { mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Checkbox-a72bbed4.js";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.js";
import { _ as _sfc_main$2 } from "./InputLabel-86c36d58.js";
import { _ as _sfc_main$3 } from "./TextInput-4f082d1a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Login_vue_vue_type_style_index_0_scoped_0a0304a9_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: _sfc_main$1 }, {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="container sticky top-0 z-sticky" data-v-0a0304a9><div class="flex flex-wrap -mx-3" data-v-0a0304a9><div class="w-full max-w-full px-3 flex-0" data-v-0a0304a9><nav class="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 dark:bg-gray-800 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start" data-v-0a0304a9><div class="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit" data-v-0a0304a9>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="to-amber-400" data-v-0a0304a9${_scopeId}>FIND</span>`);
          } else {
            return [
              createVNode("span", { class: "to-amber-400" }, "FIND")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button navbar-trigger class="px-3 py-1 ml-2 text-lg leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation" data-v-0a0304a9><span class="inline-block w-6 h-6 mt-2 align-middle bg-center bg-no-repeat bg-cover bg-none" data-v-0a0304a9><span bar1 class="w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300" data-v-0a0304a9></span><span bar2 class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300" data-v-0a0304a9></span><span bar3 class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300" data-v-0a0304a9></span></span></button><div navbar-menu class="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto" data-v-0a0304a9><ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto" data-v-0a0304a9><li data-v-0a0304a9>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "flex items-center px-4 py-2 mr-2 text-sm font-normal transition-all dark:text-gray-200 lg-max:opacity-0 duration-250 ease-soft-in-out text-slate-700 lg:px-2",
        "aria-current": "page"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 fa fa-chart-pie opacity-60" data-v-0a0304a9${_scopeId}></i> Accueil `);
          } else {
            return [
              createVNode("i", { class: "mr-1 fa fa-chart-pie opacity-60" }),
              createTextVNode(" Accueil ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-0a0304a9>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profile.show"),
        class: "block px-4 py-2 mr-2 text-sm font-normal transition-all dark:text-gray-200 lg-max:opacity-0 duration-250 ease-soft-in-out text-slate-700 lg:px-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 fa fa-user opacity-60" data-v-0a0304a9${_scopeId}></i> Profile `);
          } else {
            return [
              createVNode("i", { class: "mr-1 fa fa-user opacity-60" }),
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-0a0304a9>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register"),
        class: "block px-4 py-2 mr-2 text-sm font-normal transition-all dark:text-gray-200 lg-max:opacity-0 duration-250 ease-soft-in-out text-slate-700 lg:px-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1 fas fa-user-circle opacity-60" data-v-0a0304a9${_scopeId}></i> s&#39;inscrire `);
          } else {
            return [
              createVNode("i", { class: "mr-1 fas fa-user-circle opacity-60" }),
              createTextVNode(" s'inscrire ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div data-v-0a0304a9></div></div></nav></div></div></div><main class="mt-0 transition-all duration-200 ease-soft-in-out" data-v-0a0304a9><form method="POST" action="" data-v-0a0304a9><div class="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen" data-v-0a0304a9><div class="container z-10" data-v-0a0304a9><div class="flex flex-wrap mt-0 -mx-3" data-v-0a0304a9><div data-v-0a0304a9></div><div class="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12" data-v-0a0304a9><div class="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border" data-v-0a0304a9><div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl" data-v-0a0304a9><h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text" data-v-0a0304a9> Content de te revoir</h3><p class="mb-0" data-v-0a0304a9>Entrez votre email et votre mot de passe pour vous connecter</p></div><div class="flex-auto p-6" data-v-0a0304a9><form role="form" data-v-0a0304a9><div data-v-0a0304a9>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        class: "block w-full mt-1",
        required: "",
        autofocus: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4" data-v-0a0304a9>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        for: "password",
        value: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        id: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "block w-full mt-1",
        required: "",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="flex justify-between" data-v-0a0304a9><div class="block mt-4" data-v-0a0304a9><label class="flex items-center" data-v-0a0304a9>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        checked: unref(form).remember,
        "onUpdate:checked": ($event) => unref(form).remember = $event,
        name: "remember"
      }, null, _parent));
      _push(`<span class="ml-2 text-sm text-gray-600" data-v-0a0304a9>Remember me</span></label></div>`);
      if (__props.canResetPassword) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("password.request"),
          class: "text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Forgot your password? `);
            } else {
              return [
                createTextVNode(" Forgot your password? ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-center" data-v-0a0304a9><button type="submit" class="${ssrRenderClass([{ "opacity-25": unref(form).processing }, "inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft gradient hover:scale-102 hover:shadow-soft-xs active:opacity-85"])}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} data-v-0a0304a9><span data-v-0a0304a9>Connexion</span></button></div><div class="relative w-full max-w-full px-3 mt-2 text-center shrink-0" data-v-0a0304a9><p class="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white rounded text-slate-400" data-v-0a0304a9> or </p></div><div class="flex flex-wrap px-3 mt-3 -mx-3 sm:px-6 xl:px-12" data-v-0a0304a9><div class="w-4/12 max-w-full px-1 ml-auto flex-0" data-v-0a0304a9><a class="inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="{{ url(&#39;auth/facebook&#39;) }}" data-v-0a0304a9><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink32" data-v-0a0304a9><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-0a0304a9><g transform="translate(3.000000, 3.000000)" fill-rule="nonzero" data-v-0a0304a9><circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047" data-v-0a0304a9></circle><path d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z" fill="#FFFFFF" data-v-0a0304a9></path></g></g></svg></a></div><div class="w-4/12 max-w-full px-1 mr-auto flex-0" data-v-0a0304a9><a class="inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75" href="{{ url(&#39;auth/google&#39;) }}" data-v-0a0304a9><svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-0a0304a9><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-0a0304a9><g transform="translate(3.000000, 2.000000)" fill-rule="nonzero" data-v-0a0304a9><path d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267" fill="#4285F4" data-v-0a0304a9></path><path d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667" fill="#34A853" data-v-0a0304a9></path><path d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782" fill="#FBBC05" data-v-0a0304a9></path><path d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769" fill="#EB4335" data-v-0a0304a9></path></g></g></svg></a></div></div></form></div><div class="p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2" data-v-0a0304a9><p class="mx-auto mb-2 text-sm leading-normal" data-v-0a0304a9> Vous avez déjà un compte? `);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register"),
        class: "relative z-10 font-semibold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`S&#39;inscrire`);
          } else {
            return [
              createTextVNode("S'inscrire")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div><div class="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12" data-v-0a0304a9><div class="absolute top-0 hidden w-3/5 h-full overflow-hidden -mr-26 -skew-x-10 -right-40 rounded-bl-xl md:block" data-v-0a0304a9><div class="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10" style="${ssrRenderStyle({ "background-image": "url('./images/logo/ff3.png')" })}" data-v-0a0304a9></div></div></div></div></div></div></form></main><footer class="py-12" data-v-0a0304a9><div class="container" data-v-0a0304a9><div class="flex flex-wrap -mx-3" data-v-0a0304a9><div class="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12" data-v-0a0304a9><a href="{{url(&#39;/services&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-0a0304a9> Servives </a><a href="{{url(&#39;/apropos&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-0a0304a9> A propos </a><a href="{{url(&#39;/categories&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-0a0304a9> Categories </a><a href="{{url(&#39;/faq&#39;)}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12" data-v-0a0304a9> FaQ </a></div><div class="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12" data-v-0a0304a9><a href="" target="_blank" class="mr-6 text-slate-400" data-v-0a0304a9><span class="text-lg fab fa-dribbble" data-v-0a0304a9></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-0a0304a9><span class="text-lg fab fa-twitter" data-v-0a0304a9></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-0a0304a9><span class="text-lg fab fa-instagram" data-v-0a0304a9></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-0a0304a9><span class="text-lg fab fa-pinterest" data-v-0a0304a9></span></a><a href="" target="_blank" class="mr-6 text-slate-400" data-v-0a0304a9><span class="text-lg fab fa-github" data-v-0a0304a9></span></a></div></div><div class="flex flex-wrap -mx-3" data-v-0a0304a9><div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0" data-v-0a0304a9><p class="mb-0 text-slate-400" data-v-0a0304a9> Copyright © Find 2034 </p></div></div><div class="flex flex-wrap mt-8 -mx-3" data-v-0a0304a9><div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0" data-v-0a0304a9><label class="relative inline-flex items-center mb-5 cursor-pointer" data-v-0a0304a9><input type="checkbox" x-model="dark" class="sr-only peer" data-v-0a0304a9><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" data-v-0a0304a9></div><div class="px-2" data-v-0a0304a9><template x-if="!dark" data-v-0a0304a9><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-0a0304a9><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" data-v-0a0304a9></path></svg></template><template x-if="dark" data-v-0a0304a9><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" data-v-0a0304a9><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" data-v-0a0304a9></path></svg></template></div></label></div></div></div></footer><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a0304a9"]]);
export {
  Login as default
};