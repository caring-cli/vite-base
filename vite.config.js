/*
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-16 11:14:06
 * @Description:
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      // 如果配置了eslint需要配置这个，默认false
      eslintrc: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
