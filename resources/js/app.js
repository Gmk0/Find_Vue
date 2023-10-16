import './bootstrap';
import '../css/app.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;





import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import AppLayout from './Layouts/AppLayout.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Multiselect from 'vue-multiselect';
import PrimeVue from 'primevue/config';
import Pagination from '@/Components/Pagination.vue';


// register globally

//import Tailwind from "primevue/passthrough/tailwind";


// Assurez-vous d'importer votre layout


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pinia = createPinia();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(VueSweetalert2)
            .use(PrimeVue)

           // .use(PrimeVue, { unstyled: true, pt: Tailwind })
            .use(ZiggyVue)
            .component('AppLayout', AppLayout)
            .component('pagination',Pagination)
            .component('multiselect', Multiselect);

             // Enregistrez votre composant de layout

        const vm = app.mount(el);

        AOS.init(); // Initialisez AOS après le montage de l'application Vue

        return vm;
    },
    progress: {
        color: '#4B5563',
    },
});
