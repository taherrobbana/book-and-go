import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/css/customtheme.scss";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faBell,
    faCoins,
    faFileInvoice,
    faFileLines,
    faGear,
    faGears,
    faSignOut,
    faTasks,
    faUserGroup,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import 'vue-slider-component/theme/antd.css'
import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'
import createI18n from "./i18n"

library.add(faGear, faGears, faSignOut, faBell, faTasks, faUserGroup, faUsers, faCoins, faFileInvoice, faFileLines);

//configure i18n
export const i18n = createI18n;

createApp(App)
    .use(i18n)
    .use(Quasar, quasarUserOptions)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
