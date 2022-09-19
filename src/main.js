import { createApp } from 'vue';
import MyVueUi from '@ibrahimanshor/my-vue-ui';
import router from './router';
import locale from './locale';

import '@ibrahimanshor/my-vue-ui/dist/my-vue-ui.css';
import './style.css';

import App from './App.vue';

const app = createApp(App);

app.use(MyVueUi);
app.use(router);
app.use(locale);

app.mount('#app');
