

<script setup>
import {ref,computed, onMounted, nextTick } from 'vue';


import { Link, useForm, router, usePage } from '@inertiajs/vue3';


import { useLayoutStore } from '@/store/store';

const layoutStore = useLayoutStore();
const isShowChatInfo = ref(true);
const activeTab = ref('tabImages');

function initWindow() {

    if (typeof window !== "undefined") {

        if (window.innerWidth > 800) {
              isShowChatInfo.value = true;

        }else{

               isShowChatInfo.value = false;
        }
    }
}

initWindow();
const page = usePage();

const user= computed(()=> props.user);

const visible = ref(false);

let lastIndex = ref(0); // Dernier index des messages affichés
const pageSize = 5; // Nombre d'éléments à afficher à la fois
const scrollContainer = ref(null);
const visibleMessages = ref([]);


const props= defineProps({
    messages:Array,
    user : Object,
    chatId: String,
})
const form = useForm({
    message:'',
    chat:props.chatId,
    user:props.user?.id,
    files:null,
})


const sendMessage=()=>{

    let date= new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let formattedDate = `${year}-${month}-${day}`;

     const temporaryMessage = {
        id: null,
        body: form.message,
        //created_at: formattedDate,
        sender_id: page.props.auth.user.id,
        receiver_id: props.user?.id,
        temporary : true,
    };

    props.messages.push(temporaryMessage);

    bottomScroll2();




    form.post(route('chat.Send'),{
        preserveScroll: true,
        onSuccess:()=> {},
    })



    cancelFile();



    form.reset('message');

}

const bottomScroll2 = () => {

     setTimeout(() => {
        // Réinitialisation du défilement à la position de la hauteur du contenu
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
    }, 0);
};

const groupedMessages =computed(() => {
    if (!props.messages) return null;
    const grouped = {};
    props.messages.forEach(message => {
          const date = message.created_at ? formatMessageDate(message.created_at) : null; // Assuming timestamp is the property containing the date

            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push(message);

    });
    return grouped;
});

const groupedMessages2 = computed(() => {
    if (!props.messages) return null;
    const grouped = {};

    let currentDate = null;

    props.messages.forEach((message, index) => {
        if (message.created_at) {
            const date = formatMessageDate(message.created_at);

            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push(message);

            currentDate = date; // Mettre à jour la date courante pour la comparaison ultérieure
        } else {
            // Si le message précédent est daté ultérieurement et c'est un message temporaire, utiliser la date actuelle
            if (currentDate && index > 0) {
                const previousDate = formatMessageDate(props.messages[index - 1].created_at);
                if (currentDate < previousDate) {
                    const date = formatMessageDate(new Date()); // Date actuelle
                    if (!grouped[date]) {
                        grouped[date] = [];
                    }
                    grouped[date].push(message);
                }
            }
        }
    });

    return grouped;
});







const onSelect = (event) => {
    form.files = event.files;
};

const cancelFile=()=>{

    visible.value=false;
    form.reset('files','message');
}

const formatMessageDate = timestamp => {
    const date = new Date(timestamp);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};





onMounted(()=>{

    topScroll();
})



window.Echo.private(`chat.${page.props.auth.user.id}`)
    .listen('MessageSent', (e) => {


       // topScroll();
         bottomScroll();

        // props.messages.push(e.message);
       // console.log(e.message);
        // Traitez les données reçues lors de l'événement
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

    // Faites défiler vers le bas en réglant scrollTop sur la hauteur de défilement

        container.scrollTop = container.scrollHeight;
};


const handleScroll = () => {
    const container = scrollContainer.value;
    if (container.scrollTop === 0) {
        //updateVisibleMessages();


    }
};

const isImage = (fileName) => {
    let imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp']; // Liste des extensions d'image
    let extension = fileName.split('.').pop().toLowerCase(); // Récupérer l'extension du fichier

    return imageExtensions.includes(extension); // Vérifier si l'extension est dans la liste des extensions d'image
}

const getFileName=(file)=> {
    // Récupère le nom du fichier à partir du chemin complet
    return file.split('/').pop();
}

const getHourFromDate = created_at => {
    const date = new Date(created_at);
    const hour = date.getHours().toString().padStart(2, '0'); // Obtenez l'heure au format 'hh'
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Obtenez les minutes au format 'mm'
    return `${hour}:${minutes}`;
};



</script>

<template>



           <main

            class="flex flex-col w-full mt-0 main-content h-100vh chat-app" :class="isShowChatInfo && 'lg:mr-80'">
            <div
                class="chat-header h-[61px] border-b border-slate-150 dark:border-navy-700 relative z-10 flex w-full shrink-0 items-center justify-between bg-white px-[calc(var(--margin-x)-.5rem)] shadow-sm transition-[padding,width] duration-[.25s] dark:bg-navy-800">
                <div class="flex items-center space-x-5">
                    <div class="ml-1 h-7 w-7">
                        <button
                            class="menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                            :class="layoutStore.isSidebarExpanded && 'active'"
                                    @click="layoutStore.toogleRight()">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div @click="isShowChatInfo = true" class="flex items-center space-x-4 cursor-pointer font-inter">
                        <div v-if="user!= null" class="avatar">
                            <Photo :user="user" />

                        </div>


                        <div>
                            <p class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                x-text="activeChat.name"> {{user?.name}}</p>
                                <template v-if="user?.is_online">
                                    <p class="mt-0.5 text-xs">En ligne </p>

                                </template>
                                <template v-else>
                                    <p class="mt-0.5 text-xs">{{ user?.last_activity }} </p>
                                </template>

                        </div>
                    </div>
                </div>
                <div class="flex px-4 -mr-1 gap-4items-center">

                    <button
                        class="w-6 h-6 p-0 rounded-full btn2 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button @click="isShowChatInfo = !isShowChatInfo"
                        :class="isShowChatInfo ? 'text-primary dark:text-accent-light' : 'text-slate-500 dark:text-navy-200'"
                        class="p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" stroke="currentColor"
                            stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9.25 21.167h5.5c4.584 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417ZM13.834 2.833v18.334" />
                        </svg>
                    </button>

                    <!--
                    <div x-data="usePopper({ placement: 'bottom-end', offset: 4 })" @click.outside="if (isShowPopper) isShowPopper = false"
                        class="inline-flex">
                        <button x-ref="popperRef" @click="isShowPopper = !isShowPopper"
                            class="p-0 rounded-full btn22 h-9 w-9 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>

                        <div x-ref="popperRoot" class="popper-root" :class="isShowPopper && 'show'">
                            <div
                                class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                                <ul>
                                    <li>
                                        <a href="#"
                                            class="flex items-center h-8 px-3 pr-8 space-x-3 font-medium tracking-wide transition-all outline-none hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-px" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                                    clip-rule="evenodd" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                            </svg>
                                            <span>Unmute</span></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center h-8 px-3 pr-8 space-x-3 font-medium tracking-wide transition-all outline-none hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-px" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>Chat Setting</span></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center h-8 px-3 pr-8 space-x-3 font-medium tracking-wide transition-all outline-none hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-px" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            <span>Block User</span></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center h-8 px-3 pr-8 space-x-3 font-medium tracking-wide transition-all outline-none text-error hover:bg-error/20 focus:bg-error/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span> Delete chat</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    -->
                </div>
            </div>

            <div
                class="grow overflow-y-auto scrollbar-sm px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]"
                  ref="scrollContainer"
                @scroll="handleScroll">
                 <transition
                        enter-class="transition-all duration-500 easy-in-out"
                          enter-active-class="transition-all duration-500 easy-in-out"
                          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                        >
                <div v-if="groupedMessages"
                    class="space-y-5">


                    <template v-for="(messages, date) in groupedMessages" :key="date">
                    <div v-if="date !== 'null'" class="flex items-center mx-4 space-x-3">
                        <div class="flex-1 h-px bg-slate-200 dark:bg-navy-500"></div>
                        <p>{{ date }}</p>
                        <div class="flex-1 h-px bg-slate-200 dark:bg-navy-500"></div>
                    </div>



                    <div v-for="message in messages" :key="message">
                        <div
                            :class="message.receiver_id == props.user.id ?'justify-end ':'items-start'"
                                class="flex  space-x-2.5 sm:space-x-5">
                            <div :class="message.receiver_id == props.user.id ?'hidden':'flex'"
                            class="avatar">
                            <Photo :user="user" />


                            </div>

                            <div class="flex flex-col items-start space-y-3.5">
                                <div
                                :class="message.receiver_id == props.user.id ? 'ml-4 md:ml-10 ':'mr-4 sm:mr-10'"
                                class="max-w-lg">
                                    <div v-if="message.body !=null"
                                        :class="message.receiver_id == props.user.id?'rounded-br-none dark:text-white bg-info/10 text-slate-700 dark:bg-accent':' bg-white text-slate-700 dark:text-navy-100 dark:bg-navy-700 rounded-tl-none '"
                                        class="p-3 shadow-sm rounded-2xl">
                                        {{ message.body }}


                                    </div>
                                    <span class="flex items-center justify-end" v-if="message.temporary != null">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                    </span>





                                <div v-if="message.file !=null">
                                    <template v-if="isImage(message.file[0])">
                                    <div class="relative group">
                                    <img class="object-cover rounded-lg h-44"
                                        :src="'/storage/'+ message.file[0]" alt="image" />

                                    <div
                                        class="absolute top-0 flex items-center justify-center w-full h-full transition-all duration-300 rounded-lg opacity-0 bg-black/30 group-hover:opacity-100">
                                        <a :href="'/storage/' + message.file[0]" target="_blank"
                                            class="p-0 font-medium text-white rounded-full btn2 h-9 w-9 bg-info hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </a>
                                    </div>
                                 </div>
                                 </template>
                                 <template v-else>
                                    <a :href="'/storage/' + message.file[0]" target="_blank"
                                            :class="message.receiver_id == props.user.id ? 'rounded-br-none dark:text-white bg-info/10 text-slate-700 dark:bg-accent' : ' bg-white text-slate-700 dark:text-navy-100 dark:bg-navy-700 rounded-tl-none '"
                                            class="p-3 mb-4 shadow-sm rounded-2xl">
                                           {{ getFileName(message.file[0]) }}
                                 </a>

                                 </template>
                                </div>
                                    <p v-if="getHourFromDate(message.created_at) !=='NaN:NaN'" :class="message.receiver_id == props.user.id ?' text-left':'text-right'"
                                    class="mt-2 ml-auto text-xs text-right text-slate-400 dark:text-navy-300" >
                                         {{ getHourFromDate(message.created_at)}}
                                    </p>
                                </div>

                            </div>



                        </div>



                    </div>
                    </template>

                </div>

                 </transition>

                  <div v-if="props.messages.length === 0">

                         <div class="flex flex-col items-center justify-center mt-8">
                        <div class="flex flex-col items-center mx-4 space-x-3">

                            <p class="text-lg">Pour plus de sécurité et votre protection, effectuez les paiements et les
                                communications
                                directement
                                sur FIND.</p>


                            <div class="w-4/12 py-8">
                                <img src="/images/illustrations/chat-ui.svg" alt="illustation">

                            </div>

                        </div>



                    </div>

                    </div>
            </div>

            <div
                class="chat-footer relative flex h-16 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800">
                <div class="-ml-1.5 flex flex-1 space-x-2">
                    <button  @click="visible = true"
                        class="w-6 h-6 p-0 rounded-full btn22 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                    </button>

                    <input type="text" v-model="form.message"
                    class="w-full h-10 bg-transparent border-none focus:ring-0 placeholder:text-slate-400/70"
                    placeholder="Write the message" />
                </div>

                <div class="-mr-1.5 flex">
                    <button
                        class="w-6 h-6 p-0 rounded-full btn22 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button @click="sendMessage()"
                        class="w-6 h-6 p-0 rounded-full btn22 shrink-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341" />
                        </svg>
                    </button>
                </div>
            </div>





                    <div v-if="isShowChatInfo" class="fixed sidebar-user right-0 top-0 z-[101] h-full w-full sm:w-80">

                         <transition
                        enter-class="ease-out transform-gpu "
                        enter-to-class="duration-500 translate-x-0"
                        enter-active-class="translate-x-full"
                        leave-class="ease-in transform-gpu"
                        leave-to-class="translate-x-0"
                        leave-active-class="-translate-x-full">
                        <div v-if="isShowChatInfo" class="flex flex-col w-full h-full transition-transform duration-200 bg-white border-l border-slate-150 dark:border-navy-600 dark:bg-navy-750">


                            <div class="flex h-[60px] items-center justify-between p-4">
                                    <h3 class="text-base font-medium text-slate-700 dark:text-navy-100">
                                        Chat Info
                                    </h3>
                                    <div class="-mr-1.5 flex space-x-1">
                                        <!--
                                    <button @click="$store.global.isRightSidebarExpanded = true"
                                        class="w-8 h-8 p-0 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </button>
                                    -->

                                        <!--

                                    <button @click="$store.global.isDarkModeEnabled = !$store.global.isDarkModeEnabled"
                                        class="w-8 h-8 p-0 rounded-full btn2 hover:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25">
                                        <svg x-show="$store.global.isDarkModeEnabled"
                                            x-transition:enter="transition-transform duration-200 ease-out absolute origin-top"
                                            x-transition:enter-start="scale-75"
                                            x-transition:enter-end="scale-100 static" class="w-6 h-6 text-amber-400"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            x-show="!$store.global.isDarkModeEnabled"
                                            x-transition:enter="transition-transform duration-200 ease-out absolute origin-top"
                                            x-transition:enter-start="scale-75"
                                            x-transition:enter-end="scale-100 static" class="w-6 h-6 text-amber-400"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    -->

                                        <button @click="isShowChatInfo = false"
                                            class="w-8 h-8 p-0 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center mt-5">
                                    <div v-if="user" class="w-20 h-20 avatar">
                                       <Photo :user="user" taille="'20'" />
                                    </div>
                                    <h3 v-text="user?.name"
                                        class="mt-2 text-lg font-medium text-slate-700 dark:text-navy-100"></h3>
                                    <p>Frontend Developer</p>
                                    <div class="mt-2 flex space-x-1.5">
                                        <button
                                            class="w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </button>
                                        <button
                                            class="w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                        <button
                                            class="w-10 h-10 p-0 rounded-full btn2 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="flex flex-col mt-6">
                                    <div class="px-4 overflow-x-auto is-scrollbar-hidden">
                                        <div class="flex tabs-list">
                                            <button @click="activeTab = 'tabImages'"
                                                :class="activeTab === 'tabImages' ?
                                                    'border-primary dark:border-accent text-primary dark:text-accent-light' :
                                                    'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
                                                class="px-3 py-2 font-medium border-b-2 rounded-none btn2 shrink-0">
                                                Images
                                            </button>
                                            <button @click="activeTab = 'tabFiles'"
                                                :class="activeTab === 'tabFiles' ?
                                                    'border-primary dark:border-accent text-primary dark:text-accent-light' :
                                                    'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
                                                class="px-3 py-2 font-medium border-b-2 rounded-none btn2 shrink-0">
                                                Files
                                            </button>
                                        </div>
                                    </div>
                                    <div class="px-4 pt-4 tab-content">
                                        <div v-if="activeTab === 'tabImages'">
                                            <Transition name="image" mode="out-in">


                                                <div class="grid grid-cols-4 gap-2">
                                                    <template v-for="message in props.messages">


                                                    <div v-if="message.file !=null">
                                                        <template v-if="isImage(message.file[0])">

                                                        <img class="object-cover object-center rounded-lg aspect-square"
                                                            :src="'/storage/'+ message.file[0] " :alt="message.file[0]" />
                                                    </template>


                                                    </div>
                                                    </template>

                                                </div>

                                            </Transition>


                                        </div>
                                        <div v-if="activeTab === 'tabFiles'"
                                            >
                                            <Transition  name="image" mode="out-in">
                                            <div class="flex flex-col space-y-3.5">

                                                 <template v-for="message in props.messages">
                                                     <div v-if="message.file != null">

                                                         <template v-if="!isImage(message.file[0])">

                                                <a :href="'/storage/' + message.file[0]" target="_blank"  class="flex items-center space-x-3 cursor-pointer">
                                                    <div
                                                        class="flex items-center justify-center text-white mask is-squircle h-11 w-11 bg-warning">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div class="block max-w-md">
                                                        <p class="block font-medium break-before-auto text-slate-700 dark:text-navy-100">
                                                             {{ getFileName(message.file[0]) }}
                                                        </p>

                                                    </div>
                                                </a>
                                                </template>

                                                </div>
                                                </template>

                                            </div>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>



                        </div>

                     </transition>

                    </div>




            <Dialog v-model:visible="visible"
            position="'bottom'"
             modal
              header="Fichier"
              :style="{ width: '50rem' }"
              :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
              >

              <div>
                    <div class="card">
                    <Toast />
                    <FileUpload name="demo[]"
                    :auto="true"
                    @select="onSelect"
                    :multiple="true"
                    :maxFileSize="5000000">
                        <template #empty>
                            <p>Tirez et déposez des fichiers ici pour les télécharger.</p>
                        </template>
                    </FileUpload>
                </div>
                <div class="mt-1">

                    <Textarea rows="1" v-model="form.message" cols="1" placeholder="Rajouter un message"  class="w-full" />

                </div>
                <div class="flex justify-end gap-4 mt-4">
                    <Button label="Envoyer" @click="sendMessage()" />
                     <Button  severity="'danger'" @click="cancelFile()" label="Annuler" />
                </div>
            </div>

        </Dialog>

  </main>










</template>
<style lang="css" scoped>


.image-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}

.image-enter-from {
  opacity: 0;
  transform: translate(1rem, 0);
}

.image-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}

.parent-enter-active,
.parent-leave-active {
  transition: opacity 5s ease, transform 5s ease;
}

.parent-enter-from,
.parent-leave-to {
  opacity: 0;
  transform: translateX(-40px); /* Ajustez cette valeur selon vos besoins */
}

.parent-enter-to,
.parent-leave-from {
  opacity: 1;
  transform: translateX(0);
}


</style>
