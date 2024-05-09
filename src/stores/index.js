/*
 * @Author: Wanko
 * @Date: 2024-04-17 03:24:31
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-17 14:08:06
 * @Description:
 */
import { defineStore } from 'pinia'

export const useStore = defineStore('', {
  state: () => {
    return {
      token: ''
    }
  },
  persist: true,
  actions: {
    setToken(token) {
      this.token = token
    },
    logout() {
      this.token = ''
    }
  }
})
