/*
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-17 02:09:27
 * @Description:
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    someState: 'hell0',
    token: ''
  }),
  persist: true,
  getters: {
    hasLogin: (state) => !!state.token
  },
  actions: {
    setToken(token) {
      this.token = token
    },
    logout() {
      this.token = ''
    }
  }
})
