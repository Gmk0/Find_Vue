import './bootstrap';
import '../css/app.css';
import '../css/nav.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;





import { createSSRApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import AppLayout from './Layouts/AppLayout.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import PrimeVue from 'primevue/config';
import Pagination from '@/Components/Pagination.vue';
import ToastService from 'primevue/toastservice';
import CartComponent from '@/components/CartComponent.vue';
import { Collapse } from 'vue-collapsed';

import Toast from 'primevue/toast';


import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import NotificationComponent from '@/components/NotificationComponent.vue';

import MultiSelect from 'primevue/multiselect';

import Skeleton from 'primevue/skeleton';
import InputText from 'primevue/InputText';
import Sidebar from 'primevue/sidebar';



import Dropdown from 'primevue/dropdown';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue',{eager:true})),
    setup({ el, App, props, plugin }) {
        const app = createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(pinia)
            .use(VueSweetalert2)
            .use(PrimeVue)
            .use(ToastService)
            .component('AppLayout', AppLayout)
            .component('pagination',Pagination)
            .component('CartComponent', CartComponent)
            .component('NotificationComponent', NotificationComponent)
            .component('Link', Link)
            .component('MultiSelect', MultiSelect)
            .component('Skeleton', Skeleton)
            .component('Dropdown', Dropdown)
            .component('InputText', InputText)
            .component('Toast', Toast)
            .component('Sidebar', Sidebar)
            .component('Collapse', Collapse)

             // Enregistrez votre composant de layout

        const vm = app.mount(el);

        AOS.init(); // Initialisez AOS après le montage de l'application Vue

        return vm;
    },
    progress: {
        color: '#4B5563',
    },
});
