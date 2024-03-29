//  Written by Tershixia for this PROJECT.
//  Copyright (C) 2022 TershiXia
//  This file is distributed under the same license as the PROJECT project.
//  mmm25002500 <admin@tershi.com>, 2022.

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers';

// 樣式
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import BootstrapVue3 from 'bootstrap-vue-3'

library.add(fas, fab, far)

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
