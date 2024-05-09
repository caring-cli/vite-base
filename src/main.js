/*
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-17 02:06:42
 * @Description:
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/config'
const app = createApp(App)

const store = createPinia()
store.use(piniaPluginPersistedstate)

app.use(store)
app.use(router)

app.mount('#app')
