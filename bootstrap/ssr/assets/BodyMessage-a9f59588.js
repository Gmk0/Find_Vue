import { mergeProps, unref, useSSRContext, ref, computed, onMounted, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { u as useLayoutStore } from "./userInfo-9512d7bb.js";
import "./OtherPanelUser-416db217.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {
  __name: "ChatLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const layoutStore = useLayoutStore();
    function resize() {
      if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();
      }
    }
    resize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["overflow-hidden has-min-sidebar", { "is-sidebar-open": unref(layoutStore).SidebarExpanded }]
      }, _attrs))}><main class="">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/ChatLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BodyMessage_vue_vue_type_style_index_0_scoped_76083768_lang = "";
const _sfc_main = {
  __name: "BodyMessage",
  __ssrInlineRender: true,
  props: {
    messages: Array,
    user: Object,
    chatId: String
  },
  setup(__props) {
    var _a;
    const props = __props;
    const layoutStore = useLayoutStore();
    const isShowChatInfo = ref(true);
    const activeTab = ref("tabImages");
    const page = usePage();
    const user = computed(() => props.user);
    const visible = ref(false);
    const form = useForm({
      message: "",
      chat: props.chatId,
      user: (_a = props.user) == null ? void 0 : _a.id,
      files: null
    });
    const sendMessage = () => {
      form.post(route("chat.Send"), {
        preserveScroll: true,
        onSuccess: () => bottomScroll()
      });
      bottomScroll();
      cancelFile();
      form.reset("message");
    };
    const groupedMessages = computed(() => {
      if (!props.messages)
        return null;
      const grouped = {};
      props.messages.forEach((message) => {
        const date = formatMessageDate(message.created_at);
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(message);
      });
      return grouped;
    });
    const onSelect = (event) => {
      form.files = event.files;
    };
    const cancelFile = () => {
      visible.value = false;
      form.reset("files", "message");
    };
    const formatMessageDate = (timestamp) => {
      const date = new Date(timestamp);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };
    ref(0);
    const scrollContainer = ref(null);
    ref([]);
    onMounted(() => {
      topScroll();
    });
    window.Echo.private(`chat.${page.props.auth.user.id}`).listen("MessageSent", (e) => {
      bottomScroll();
    });
    const topScroll = () => {
      const container = scrollContainer.value;
      const scrollHeight = container.scrollHeight;
      const duration = 500;
      const startTime = performance.now();
      const scrollStep = (timestamp) => {
        const currentTime = timestamp - startTime;
        const progress = currentTime / duration;
        container.scrollTop = Math.min(progress * scrollHeight, scrollHeight);
        if (currentTime < duration) {
          window.requestAnimationFrame(scrollStep);
        }
      };
      window.requestAnimationFrame(scrollStep);
    };
    const bottomScroll = () => {
      const container = scrollContainer.value;
      container.scrollTop = container.scrollHeight;
    };
    const isImage = (fileName) => {
      let imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
      let extension = fileName.split(".").pop().toLowerCase();
      return imageExtensions.includes(extension);
    };
    const getFileName = (file) => {
      return file.split("/").pop();
    };
    const getHourFromDate = (created_at) => {
      const date = new Date(created_at);
      const hour = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hour}:${minutes}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d;
      const _component_Photo = resolveComponent("Photo");
      const _component_Dialog = resolveComponent("Dialog");
      const _component_Toast = resolveComponent("Toast");
      const _component_FileUpload = resolveComponent("FileUpload");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Button = resolveComponent("Button");
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: ["flex flex-col w-full mt-0 main-content h-100vh chat-app", isShowChatInfo.value && "lg:mr-80"]
      }, _attrs))} data-v-76083768><div class="chat-header h-[61px] border-b border-slate-150 dark:border-navy-700 relative z-10 flex w-full shrink-0 items-center justify-between bg-white px-[calc(var(--margin-x)-.5rem)] shadow-sm transition-[padding,width] duration-[.25s] dark:bg-navy-800" data-v-76083768><div class="flex items-center space-x-5" data-v-76083768><div class="ml-1 h-7 w-7" data-v-76083768><button class="${ssrRenderClass([unref(layoutStore).isSidebarExpanded && "active", "menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"])}" data-v-76083768><span data-v-76083768></span><span data-v-76083768></span><span data-v-76083768></span></button></div><div class="flex items-center space-x-4 cursor-pointer font-inter" data-v-76083768>`);
      if (user.value != null) {
        _push(`<div class="avatar" data-v-76083768>`);
        _push(ssrRenderComponent(_component_Photo, { user: user.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-76083768><p class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100" x-text="activeChat.name" data-v-76083768>${ssrInterpolate((_a2 = user.value) == null ? void 0 : _a2.name)}</p>`);
      if ((_b = user.value) == null ? void 0 : _b.is_online) {
        _push(`<p class="mt-0.5 text-xs" data-v-76083768>En ligne </p>`);
      } else {
        _push(`<p class="mt-0.5 text-xs" data-v-76083768>${ssrInterpolate((_c = user.value) == null ? void 0 : _c.last_activity)}</p>`);
      }
      _push(`</div></div></div><div class="flex px-4 -mr-1 gap-4items-center" data-v-76083768><button class="w-6 h-6 p-0 rounded-full btn2 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-v-76083768></path></svg></button><button class="${ssrRenderClass([isShowChatInfo.value ? "text-primary dark:text-accent-light" : "text-slate-500 dark:text-navy-200", "p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"])}" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M9.25 21.167h5.5c4.584 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417ZM13.834 2.833v18.334" data-v-76083768></path></svg></button></div></div><div class="grow overflow-y-auto scrollbar-sm px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]" data-v-76083768>`);
      if (groupedMessages.value) {
        _push(`<div x-transition:enter="transition-all duration-500 easy-in-out" x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]" x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="space-y-5" data-v-76083768><!--[-->`);
        ssrRenderList(groupedMessages.value, (messages, date) => {
          _push(`<!--[--><div class="flex items-center mx-4 space-x-3" data-v-76083768><div class="flex-1 h-px bg-slate-200 dark:bg-navy-500" data-v-76083768></div><p data-v-76083768>${ssrInterpolate(date)}</p><div class="flex-1 h-px bg-slate-200 dark:bg-navy-500" data-v-76083768></div></div><!--[-->`);
          ssrRenderList(messages, (message) => {
            _push(`<div data-v-76083768><div class="${ssrRenderClass([message.receiver_id == props.user.id ? "justify-end " : "items-start", "flex space-x-2.5 sm:space-x-5"])}" data-v-76083768><div class="${ssrRenderClass([message.receiver_id == props.user.id ? "hidden" : "flex", "avatar"])}" data-v-76083768>`);
            _push(ssrRenderComponent(_component_Photo, { user: user.value }, null, _parent));
            _push(`</div><div class="flex flex-col items-start space-y-3.5" data-v-76083768><div class="${ssrRenderClass([message.receiver_id == props.user.id ? "ml-4 md:ml-10 " : "mr-4 sm:mr-10", "max-w-lg"])}" data-v-76083768>`);
            if (message.body != null) {
              _push(`<div class="${ssrRenderClass([message.receiver_id == props.user.id ? "rounded-br-none dark:text-white bg-info/10 text-slate-700 dark:bg-accent" : " bg-white text-slate-700 dark:text-navy-100 dark:bg-navy-700 rounded-tl-none ", "p-3 shadow-sm rounded-2xl"])}" data-v-76083768>${ssrInterpolate(message.body)}</div>`);
            } else {
              _push(`<!---->`);
            }
            if (message.file != null) {
              _push(`<div data-v-76083768>`);
              if (isImage(message.file[0])) {
                _push(`<div class="relative group" data-v-76083768><img class="object-cover rounded-lg h-44"${ssrRenderAttr("src", "/storage/" + message.file[0])} alt="image" data-v-76083768><div class="absolute top-0 flex items-center justify-center w-full h-full transition-all duration-300 rounded-lg opacity-0 bg-black/30 group-hover:opacity-100" data-v-76083768><a${ssrRenderAttr("href", "/storage/" + message.file[0])} target="_blank" class="p-0 font-medium text-white rounded-full btn2 h-9 w-9 bg-info hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" data-v-76083768></path></svg></a></div></div>`);
              } else {
                _push(`<a${ssrRenderAttr("href", "/storage/" + message.file[0])} target="_blank" class="${ssrRenderClass([message.receiver_id == props.user.id ? "rounded-br-none dark:text-white bg-info/10 text-slate-700 dark:bg-accent" : " bg-white text-slate-700 dark:text-navy-100 dark:bg-navy-700 rounded-tl-none ", "p-3 mb-4 shadow-sm rounded-2xl"])}" data-v-76083768>${ssrInterpolate(getFileName(message.file[0]))}</a>`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<p class="${ssrRenderClass([message.receiver_id == props.user.id ? " text-left" : "text-right", "mt-2 ml-auto text-xs text-right text-slate-400 dark:text-navy-300"])}" data-v-76083768>${ssrInterpolate(getHourFromDate(message.created_at))}</p></div></div></div></div>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="chat-footer relative flex h-16 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800" data-v-76083768><div class="-ml-1.5 flex flex-1 space-x-2" data-v-76083768><button class="w-6 h-6 p-0 rounded-full btn22 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" data-v-76083768></path></svg></button><input type="text"${ssrRenderAttr("value", unref(form).message)} class="w-full h-10 bg-transparent border-none focus:ring-0 placeholder:text-slate-400/70" placeholder="Write the message" data-v-76083768></div><div class="-mr-1.5 flex" data-v-76083768><button class="w-6 h-6 p-0 rounded-full btn22 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-76083768></path></svg></button><button class="w-6 h-6 p-0 rounded-full btn22 shrink-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341" data-v-76083768></path></svg></button></div></div>`);
      if (isShowChatInfo.value) {
        _push(`<div class="fixed sidebar-user right-0 top-0 z-[101] h-full w-full sm:w-80" data-v-76083768><div class="flex flex-col w-full h-full transition-transform duration-200 bg-white border-l border-slate-150 dark:border-navy-600 dark:bg-navy-750" data-v-76083768><div class="flex h-[60px] items-center justify-between p-4" data-v-76083768><h3 class="text-base font-medium text-slate-700 dark:text-navy-100" data-v-76083768> Chat Info </h3><div class="-mr-1.5 flex space-x-1" data-v-76083768><button class="w-8 h-8 p-0 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-v-76083768></path></svg></button></div></div><div class="flex flex-col items-center mt-5" data-v-76083768>`);
        if (user.value) {
          _push(`<div class="w-20 h-20 avatar" data-v-76083768>`);
          _push(ssrRenderComponent(_component_Photo, {
            user: user.value,
            taille: "'20'"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="mt-2 text-lg font-medium text-slate-700 dark:text-navy-100" data-v-76083768>${ssrInterpolate((_d = user.value) == null ? void 0 : _d.name)}</h3><p data-v-76083768>Frontend Developer</p><div class="mt-2 flex space-x-1.5" data-v-76083768><button class="w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-v-76083768></path></svg></button><button class="w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-v-76083768></path></svg></button><button class="w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-76083768></path></svg></button></div></div><div class="flex flex-col mt-6" data-v-76083768><div class="px-4 overflow-x-auto is-scrollbar-hidden" data-v-76083768><div class="flex tabs-list" data-v-76083768><button class="${ssrRenderClass([activeTab.value === "tabImages" ? "border-primary dark:border-accent text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "px-3 py-2 font-medium border-b-2 rounded-none btn2 shrink-0"])}" data-v-76083768> Images </button><button class="${ssrRenderClass([activeTab.value === "tabFiles" ? "border-primary dark:border-accent text-primary dark:text-accent-light" : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100", "px-3 py-2 font-medium border-b-2 rounded-none btn2 shrink-0"])}" data-v-76083768> Files </button></div></div><div class="px-4 pt-4 tab-content" data-v-76083768>`);
        if (activeTab.value === "tabImages") {
          _push(`<div data-v-76083768><div class="grid grid-cols-4 gap-2" data-v-76083768><!--[-->`);
          ssrRenderList(props.messages, (message) => {
            _push(`<!--[-->`);
            if (message.file != null) {
              _push(`<div data-v-76083768>`);
              if (isImage(message.file[0])) {
                _push(`<img class="object-cover object-center rounded-lg aspect-square"${ssrRenderAttr("src", "/storage/" + message.file[0])}${ssrRenderAttr("alt", message.file[0])} data-v-76083768>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "tabFiles") {
          _push(`<div data-v-76083768><div class="flex flex-col space-y-3.5" data-v-76083768><!--[-->`);
          ssrRenderList(props.messages, (message) => {
            _push(`<!--[-->`);
            if (message.file != null) {
              _push(`<div data-v-76083768>`);
              if (!isImage(message.file[0])) {
                _push(`<a${ssrRenderAttr("href", "/storage/" + message.file[0])} target="_blank" class="flex items-center space-x-3 cursor-pointer" data-v-76083768><div class="flex items-center justify-center text-white mask is-squircle h-11 w-11 bg-warning" data-v-76083768><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-76083768><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-v-76083768></path></svg></div><div class="block max-w-md" data-v-76083768><p class="block font-medium break-before-auto text-slate-700 dark:text-navy-100" data-v-76083768>${ssrInterpolate(getFileName(message.file[0]))}</p></div></a>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Dialog, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        position: "'bottom'",
        modal: "",
        header: "Fichier",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-76083768${_scopeId}><div class="card" data-v-76083768${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Toast, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FileUpload, {
              name: "demo[]",
              auto: true,
              onSelect,
              multiple: true,
              maxFileSize: 5e6
            }, {
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p data-v-76083768${_scopeId2}>Tirez et déposez des fichiers ici pour les télécharger.</p>`);
                } else {
                  return [
                    createVNode("p", null, "Tirez et déposez des fichiers ici pour les télécharger.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-1" data-v-76083768${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Textarea, {
              rows: "1",
              modelValue: unref(form).message,
              "onUpdate:modelValue": ($event) => unref(form).message = $event,
              cols: "1",
              placeholder: "Rajouter un message",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end gap-4 mt-4" data-v-76083768${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              label: "Envoyer",
              onClick: ($event) => sendMessage()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              severity: "'danger'",
              onClick: ($event) => cancelFile(),
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "card" }, [
                  createVNode(_component_Toast),
                  createVNode(_component_FileUpload, {
                    name: "demo[]",
                    auto: true,
                    onSelect,
                    multiple: true,
                    maxFileSize: 5e6
                  }, {
                    empty: withCtx(() => [
                      createVNode("p", null, "Tirez et déposez des fichiers ici pour les télécharger.")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mt-1" }, [
                  createVNode(_component_Textarea, {
                    rows: "1",
                    modelValue: unref(form).message,
                    "onUpdate:modelValue": ($event) => unref(form).message = $event,
                    cols: "1",
                    placeholder: "Rajouter un message",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "flex justify-end gap-4 mt-4" }, [
                  createVNode(_component_Button, {
                    label: "Envoyer",
                    onClick: ($event) => sendMessage()
                  }, null, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    severity: "'danger'",
                    onClick: ($event) => cancelFile(),
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BodyMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BodyMessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76083768"]]);
export {
  BodyMessage as B,
  _sfc_main$1 as _
};
