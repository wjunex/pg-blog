import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/css/element/index.scss'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import 'element-plus/dist/index.css'

import '@/assets/css/main.css'
import '@/assets/css/global.css'

import myHeader from '@/components/myHeader.vue'
import myLayout from '@/layout/myLayout.vue'





const app = createApp(App)  //传入根组件(App.vue)

app.component('myHeader', myHeader).component('myLayout', myLayout)

/* 注册elementUI图标组件 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
