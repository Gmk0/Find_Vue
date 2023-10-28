import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { ref, onUnmounted, resolveComponent, withCtx, createVNode, openBlock, createBlock, unref, useSSRContext, mergeProps } from "vue";
import { u as useLayoutStore, a as useCategoryStore } from "./store-0ea3a1d1.js";
import Popper from "vue3-popper";
import "pinia";
import "axios";
import "@vueuse/core";
const _sfc_main$4 = {
  __name: "MainSidebarF",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref(null);
    ref("");
    ref(null);
    onUnmounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="main-sidebar"><div class="flex flex-col items-center w-full h-full bg-white border-r border-slate-150 dark:border-navy-700 dark:bg-navy-800"><div class="flex pt-4">`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-10 transition-transform duration-500 ease-in-out hover:rotate-[360deg]" src="/images/logo/find_01.png" alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-10 transition-transform duration-500 ease-in-out hover:rotate-[360deg]",
                src: "/images/logo/find_01.png",
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col pt-6 space-y-4 overflow-y-auto is-scrollbar-hidden grow">`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "user.dashboard" },
        class: "flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 {{ request()->routeIs('freelance.dashboard') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25' }}"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" fill-opacity=".3" d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"${_scopeId}></path><path fill="currentColor" d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"${_scopeId}></path><path fill="currentColor" d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"${_scopeId}></path><path fill="currentColor" d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-7 w-7",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  "fill-opacity": ".3",
                  d: "M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
                }),
                createVNode("path", {
                  fill: "currentColor",
                  d: "M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
                }),
                createVNode("path", {
                  fill: "currentColor",
                  d: "M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
                }),
                createVNode("path", {
                  fill: "currentColor",
                  d: "M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "user.commandes" },
        class: "flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 {{ request()->routeIs('freelance.commande.list') ?'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25' }}",
        "x-tooltip.placement.right": "'Commande'"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-7 h-7",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="" class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 {{ request()-&gt;routeIs(&#39;freelance.PaiementInfo&#39;) ?&#39;text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&#39; : &#39;hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&#39; }}" x-tooltip.placement.right="&#39;Paiment&#39;"><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></a>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "user.missions" },
        class: "flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 {{ request()->routeIs('freelance.projet.list') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25' }}",
        "x-tooltip.placement.right": "'Mission'"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-7 h-7",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M4 6h16M4 10h16M4 14h16M4 18h16"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        to: { name: "user.transactions" },
        class: "flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 {{ request()->routeIs('freelance.transaction.list')? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25' }}",
        "x-tooltip.placement.right": "'Transaction'"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-7 h-7",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="" class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 {{ request()-&gt;routeIs(&#39;freelance.messages&#39;)? &#39;text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&#39; : &#39;hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&#39; }}" x-tooltip.placement.right="&#39;Message&#39;"><svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></a></div><div class="flex flex-col items-center py-3 space-y-3"><a href="" class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 {{ request()-&gt;routeIs(&#39;freelance.projet.list&#39;) ? &#39;text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90&#39; : &#39;hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25&#39; }}"><svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-opacity="0.3" fill="currentColor" d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"></path><path fill="currentColor" d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"></path></svg></a><div class="">`);
      _push(ssrRenderComponent(unref(Popper), { placement: "right" }, {
        content: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bottom-0 left-20"${_scopeId}><div class="w-64 bg-white border rounded-lg popper-box border-slate-150 shadow-soft dark:border-navy-600 dark:bg-navy-700"${_scopeId}><div class="flex items-center px-4 py-5 space-x-4 rounded-t-lg bg-slate-100 dark:bg-navy-800"${_scopeId}><div class="avatar h-14 w-14"${_scopeId}><img class="object-cover rounded-full" src="" alt=""${_scopeId}></div><div${_scopeId}><a href="#" class="text-base font-medium text-slate-700 hover:text-amber-600 focus:text-amber-600 dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"${_scopeId}></a><p class="text-xs text-slate-400 dark:text-navy-300"${_scopeId}></p></div></div><div class="flex flex-col pt-2 pb-5"${_scopeId}><a href="{{route(&#39;freelance.profile&#39;)}}" class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"${_scopeId}><div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-warning"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"${_scopeId}></path></svg></div><div${_scopeId}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId}> Profile </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId}> Paramètre de votre profil </div></div></a><a href="{{route(&#39;freelance.messages&#39;)}}" class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"${_scopeId}><div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-info"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"${_scopeId}></path></svg></div><div${_scopeId}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId}> Messages </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId}> Vos messages </div></div></a><a href="#" class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"${_scopeId}><div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-error"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg></div><div${_scopeId}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId}> Activité </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId}> Votre activité et événements </div></div></a><a href="{{route(&#39;freelance.profile&#39;)}}" class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"${_scopeId}><div class="flex items-center justify-center w-8 h-8 text-white rounded-lg bg-success"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg></div><div${_scopeId}><h2 class="font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"${_scopeId}> Paramètres </h2><div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"${_scopeId}> Paramètres de l&#39;application Web </div></div></a><div class="px-4 mt-3"${_scopeId}><form method="POST" action="{{ route(&#39;logout&#39;)}}"${_scopeId}><button type="submit" class="w-full space-x-2 text-white btn h-9 bg-amber-600 hover:bg-amber-600-focus focus:bg-amber-600-focus active:bg-amber-600-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"${_scopeId}></path></svg><span${_scopeId}>Deconnexion</span></button></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bottom-0 left-20" }, [
                createVNode("div", { class: "w-64 bg-white border rounded-lg popper-box border-slate-150 shadow-soft dark:border-navy-600 dark:bg-navy-700" }, [
                  createVNode("div", { class: "flex items-center px-4 py-5 space-x-4 rounded-t-lg bg-slate-100 dark:bg-navy-800" }, [
                    createVNode("div", { class: "avatar h-14 w-14" }, [
                      createVNode("img", {
                        class: "object-cover rounded-full",
                        src: "",
                        alt: ""
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("a", {
                        href: "#",
                        class: "text-base font-medium text-slate-700 hover:text-amber-600 focus:text-amber-600 dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                      }),
                      createVNode("p", { class: "text-xs text-slate-400 dark:text-navy-300" })
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col pt-2 pb-5" }, [
                    createVNode("a", {
                      href: "{{route('freelance.profile')}}",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, [
                      createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-warning" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-4.5 w-4.5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Profile "),
                        createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètre de votre profil ")
                      ])
                    ]),
                    createVNode("a", {
                      href: "{{route('freelance.messages')}}",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, [
                      createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-info" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-4.5 w-4.5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Messages "),
                        createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Vos messages ")
                      ])
                    ]),
                    createVNode("a", {
                      href: "#",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, [
                      createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-error" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-4.5 w-4.5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Activité "),
                        createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Votre activité et événements ")
                      ])
                    ]),
                    createVNode("a", {
                      href: "{{route('freelance.profile')}}",
                      class: "flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    }, [
                      createVNode("div", { class: "flex items-center justify-center w-8 h-8 text-white rounded-lg bg-success" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-4.5 w-4.5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          })
                        ]))
                      ]),
                      createVNode("div", null, [
                        createVNode("h2", { class: "font-medium transition-colors text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light" }, " Paramètres "),
                        createVNode("div", { class: "text-xs text-slate-400 line-clamp-1 dark:text-navy-300" }, " Paramètres de l'application Web ")
                      ])
                    ]),
                    createVNode("div", { class: "px-4 mt-3" }, [
                      createVNode("form", {
                        method: "POST",
                        action: "{{ route('logout')}}"
                      }, [
                        createVNode("button", {
                          type: "submit",
                          class: "w-full space-x-2 text-white btn h-9 bg-amber-600 hover:bg-amber-600-focus focus:bg-amber-600-focus active:bg-amber-600-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                        }, [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "w-5 h-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "1.5",
                              d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            })
                          ])),
                          createVNode("span", null, "Deconnexion")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="w-12 h-12 avatar"${_scopeId}><img class="object-cover rounded-full" src="" alt=""${_scopeId}><span class="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", { class: "w-12 h-12 avatar" }, [
                createVNode("img", {
                  class: "object-cover rounded-full",
                  src: "",
                  alt: ""
                }),
                createVNode("span", { class: "absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/MainSidebarF.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "SidebarPanelF",
  __ssrInlineRender: true,
  setup(__props) {
    const pageName = ref("");
    const expandedItems = ref([]);
    useLayoutStore();
    const sidebarMenu = {
      title: "Applications",
      items: [
        {
          service: {
            title: "Service",
            submenu: [
              {
                title: "Ajouter un service",
                route_name: "freelance.service.create"
              },
              {
                title: "Liste service",
                route_name: "freelance.service.list"
              }
            ]
          },
          freelance: {
            title: "freelance",
            submenu: [
              {
                title: "Ajouter un service",
                route_name: "freelance.service.create"
              },
              {
                title: "Liste service",
                route_name: "freelance.service.list"
              }
            ]
          }
        }
        // ... Autres éléments du menu
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-panel" }, _attrs))}><div class="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"><div class="flex items-center justify-between w-full h-16 pl-4 pr-1"><p class="text-base tracking-wider text-slate-800 dark:text-navy-100">${ssrInterpolate(sidebarMenu.title)}</p><button class="p-0 text-blue-600 rounded-full h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button></div><div class="h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"><!--[-->`);
      ssrRenderList(sidebarMenu.items, (menuItems, key) => {
        _push(`<!--[-->`);
        if (key > 0) {
          _push(`<div class="h-px mx-4 my-3 bg-slate-200 dark:bg-navy-500"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="flex flex-col flex-1 px-4 font-inter"><!--[-->`);
        ssrRenderList(menuItems, (menu, keyMenu) => {
          _push(`<!--[-->`);
          if (menu.submenu) {
            _push(`<li><a class="${ssrRenderClass([{
              "text-slate-800 font-semibold dark:text-navy-50": expandedItems.value.includes(keyMenu),
              "text-slate-600 dark:text-navy-200": !expandedItems.value.includes(keyMenu)
            }, "flex items-center justify-between py-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:hover:text-navy-50"])}"><span>${ssrInterpolate(menu.title)}</span><svg class="${ssrRenderClass([{ "rotate-90": expandedItems.value.includes(keyMenu) }, "w-4 h-4 transition-transform ease-in-out text-slate-400"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>`);
            if (expandedItems.value.includes(keyMenu)) {
              _push(`<ul><!--[-->`);
              ssrRenderList(menu.submenu, (submenu, keySubMenu) => {
                _push(`<li><a${ssrRenderAttr("href", submenu.route_name)} class="${ssrRenderClass([{ "text-primary dark:text-accent-light font-medium": submenu.route_name === pageName.value, "text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50": submenu.route_name !== pageName.value }, "flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"])}"><div class="flex items-center space-x-2"><div class="h-1.5 w-1.5 rounded-full border border-current opacity-40"></div><span>${ssrInterpolate(submenu.title)}</span></div></a></li>`);
              });
              _push(`<!--]--></ul>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</li>`);
          } else {
            _push(`<li><a${ssrRenderAttr("href", menu.route_name)} class="${ssrRenderClass([{ "text-primary dark:text-accent-light font-medium": menu.route_name === pageName.value, "text-slate-600  hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50": menu.route_name !== pageName.value }, "flex text-xs+ py-2 tracking-wide outline-none transition-colors duration-300 ease-in-out"])}">${ssrInterpolate(menu.title)}</a></li>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></ul><!--]-->`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/SidebarPanelF.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PartialHeaderF_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  __name: "PartialHeaderF",
  __ssrInlineRender: true,
  setup(__props) {
    useLayoutStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NotificationComponent = resolveComponent("NotificationComponent");
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="header print:hidden"><div class="relative flex w-full bg-white header-container dark:bg-navy-750 print:hidden"><div class="flex items-center justify-between w-full"><div class="h-7 w-7"><button class="menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80"><span></span><span></span><span></span></button></div><div><a href="" class="flex ml-2 md:hidden"><img src="/images/logo/find_02.png" class="h-8 lg:mr-3" alt="FIND"></a></div><div class="-mr-1.5 flex items-center space-x-2"><button class="w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600 !dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>`);
      _push(ssrRenderComponent(_component_NotificationComponent, null, null, _parent));
      _push(`<button class="w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg x-show="$store.global.isDarkModeEnabled" x-transition:enter="transition-transform duration-200 ease-out absolute origin-top" x-transition:enter-start="scale-75" x-transition:enter-end="scale-100 static" class="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" x-show="!$store.global.isDarkModeEnabled" x-transition:enter="transition-transform duration-200 ease-out absolute origin-top" x-transition:enter-start="scale-75" x-transition:enter-end="scale-100 static" class="w-6 h-6 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg></button><button class="w-8 h-8 p-0 rounded-full hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button></div></div></div></nav></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelancePartial/PartialHeaderF.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FreelanceLayout",
  __ssrInlineRender: true,
  setup(__props) {
    useCategoryStore();
    const layoutStore = useLayoutStore();
    function resize() {
      if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();
      }
    }
    resize();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OtherPanelF = resolveComponent("OtherPanelF");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["", { "is-sidebar-open": unref(layoutStore).SidebarExpanded }]
      }, _attrs))}><div id="root" class="flex min-h-100vh grow bg-slate-50 dark:bg-navy-900"><div class="sidebar">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_OtherPanelF, null, null, _parent));
      _push(`<div class="main-content pt-4 w-full px-[var(--margin-x)] pb-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FreelanceLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="p-2"><div class="flex flex-col min-h-screen gap-6 mx-auto bg-gray-100 md:p-6 md:max-w-7xl md:container px-auto dark:bg-gray-900"><div class="grid grid-cols-2 gap-4 px-auto lg:grid-cols-4"><a href="" class="px-4 py-6 bg-white rounded-lg shadow-xl cursor-pointer lg:px-6 lg:py-6"><div class="flex items-center justify-between"><span class="text-sm font-bold text-indigo-600">Total Depense</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default md:flex hover:bg-gray-500 dark:text-gray-900 hover:text-gray-200">Today</span></div><div class="flex items-center justify-between mt-6"><div><svg class="w-8 h-8 p-1 text-indigo-600 bg-indigo-400 border border-indigo-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div class="flex flex-col"><div class="flex items-end"><span class="text-xl font-bold text-gray-800 2xl:text-3xl">250</span><div class="flex items-center hidden mb-1 ml-2"><svg class="w-12 h-12 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg><span class="font-bold text-sm text-gray-500 ml-0.5">2</span></div></div></div></div></a><a href="" class="px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer"><div class="flex items-center justify-between"><span class="text-sm font-bold text-green-600">Commande</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default md:hidden dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200">7 days</span></div><div class="flex items-center justify-between mt-6"><div><svg class="w-8 h-8 p-1 text-green-600 bg-green-400 border border-green-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></div><div class="flex flex-col"><div class="flex items-end"><span class="text-2xl font-bold text-gray-800 2xl:text-4xl">36</span><div class="flex items-center mb-1 ml-2"></div></div></div></div></a><a href="" class="px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer"><div class="flex items-center justify-between"><span class="text-sm font-bold text-blue-600">Transaction</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200">7 days</span></div><div class="flex items-center justify-between mt-6"><div><svg class="w-8 h-8 p-1 text-blue-600 bg-blue-400 border border-blue-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div><div class="flex-col"><div class="flex items-end"><span class="text-2xl font-bold text-gray-800 2xl:text-4xl">24</span><div class="items-center hidden mb-1 ml-2"><svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg><span class="font-bold text-sm text-gray-500 ml-0.5">7%</span></div></div></div></div></a><a href="" class="px-6 py-6 bg-white rounded-lg shadow-xl cursor-pointer"><div class="flex items-center justify-between"><span class="text-sm font-bold text-gray-800">Mission en attente</span><span class="hidden px-2 py-1 text-xs text-gray-500 transition duration-200 bg-gray-200 rounded-lg cursor-default md:flex dark:text-gray-900 hover:bg-gray-500 hover:text-gray-200">30 days</span></div><div class="flex items-center justify-between mt-6"><div><svg class="w-8 h-8 p-1 text-yellow-600 bg-yellow-400 border border-yellow-600 rounded-full md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:p-3 bg-opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></div><div class="flex flex-col"><div class="flex items-end"><span class="text-2xl font-bold text-gray-800 2xl:text-4xl">Test</span><div class="flex items-center hidden mb-1 ml-2"><svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg><span class="font-bold text-sm text-gray-500 ml-0.5">-1%</span></div></div></div></div></a></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Dashboard/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
