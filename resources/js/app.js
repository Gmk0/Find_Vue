import './bootstrap';
import '../css/app.css';
import '../css/nav.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;





//import { createSSRApp, h } from 'vue'
import { createApp, h } from 'vue'
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

import Checkbox from '@/components/Checkbox.vue';

import Skeleton from 'primevue/skeleton';
import InputText from 'primevue/InputText';
import Sidebar from 'primevue/sidebar';

import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Calendar from 'primevue/calendar';

import ServiceCard from './Components/ServiceCard.vue';

import ButtonMt from '@/Components/ButtonMT.vue';
import Tailwind from 'primevue/passthrough/tailwind';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputError from '@/Components/InputError.vue';
import Textarea from 'primevue/textarea';
import Photo from '@/Components/Photo.vue';

import RadioButton from 'primevue/radiobutton';
import Tooltip from 'primevue/tooltip';

import Error from '@/Components/Error.vue';
import Tag from 'primevue/tag';
import FileUpload from 'primevue/fileupload';

import Fieldset from 'primevue/fieldset';
import InputLabel from '@/Components/InputLabel.vue';

import InputNumber from 'primevue/inputnumber';

import Chips from 'primevue/chips';

import InputSwitch from 'primevue/inputswitch';

import Editor from 'primevue/editor';

import Panel from 'primevue/panel';

import ProgressBar from 'primevue/progressbar';

import FsLightbox from "fslightbox-vue/v3";
import FooterGuest from '@/Layouts/Partials/FooterGuest.vue';
import CardGuest from '@/Components/CardGuest.vue';
import NavGuest from '@/Layouts/Partials/NavGuest.vue';





const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(pinia)
            .use(VueSweetalert2)
            .use(PrimeVue, { unstyled: true, pt: Tailwind })
            .use(ToastService)
            .directive('Tooltip', Tooltip)
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
            .component('DataTable', DataTable)
            .component('Column', Column)
            .component('Calendar', Calendar)
            .component('ButtonMt', ButtonMt)
            .component('Dialog', Dialog)
            .component('Button', Button)
            .component('Textarea', Textarea)
            .component('InputError', InputError)
            .component('Photo', Photo)
            .component('RadioButton', RadioButton)
            .component('Checkbox', Checkbox)
            .component('Error', Error)
            .component('Tag',Tag)
            .component('FileUpload', FileUpload)
            .component('ServiceCard', ServiceCard)
            .component('Fieldset', Fieldset)
            .component('InputLabel', InputLabel)
            .component('InputNumber', InputNumber)
            .component('Chips', Chips)
            .component('InputSwitch', InputSwitch)
            .component('Editor', Editor)
            .component('Panel', Panel)
            .component('ProgressBar', ProgressBar)
            .component('FsLightbox', FsLightbox)
            .component('FooterGuest', FooterGuest)
            .component('CardGuest', CardGuest)
            .component('NavGuest', NavGuest)
           // .component('Show', Show)
             // Enregistrez votre composant de layout

        const vm = app.mount(el);

        AOS.init(); // Initialisez AOS après le montage de l'application Vue

        return vm;
    },
    progress: {
        color: '#FFA500',
        showSpinner: true,

    },
});
