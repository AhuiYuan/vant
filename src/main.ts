import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*全局引入*/
//import Vant from 'vant'

/*按需引入*/
//import { Button } from 'vant';

//import 'vant/lib/index.css'
const app = createApp(App)

app.use(router)
//app.use(Vant)
//app.use(Button)
app.mount('#app')
