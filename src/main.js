import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router).mount('#app');

import VueGoogleMaps from '@fawmi/vue-google-maps'
app.use(VueGoogleMaps).mount('#app');

