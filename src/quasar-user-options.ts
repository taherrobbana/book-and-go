
import 'quasar/dist/quasar.css'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import { Dialog, Loading, Notify } from 'quasar'

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    notify: {
      progress: true,
      position: 'top-right',
      timeout: 5000,
      actions: [{ icon: "close", color: "white" }],
      html: true
    },
    loading: { /* look at QuasarConfOptions from the API card */ },
    dark: false, // or true or 'auto'
  },
  components: ['QPopover'],
  plugins: {
    Notify,
    Loading,
    Dialog
  },
  iconSet: iconSet
}
