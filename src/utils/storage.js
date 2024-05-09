/*
 * @Author: Wanko
 * @Date: 2024-04-16 18:03:54
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-16 18:43:36
 * @Description:
 */
export default {
  // 存储数据
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  // 获取数据
  get(key) {
    return JSON.parse(localStorage.getItem(key))
  },
  // 删除数据
  delete(key) {
    localStorage.removeItem(key)
  },
  // 清空数据
  clear() {
    localStorage.clear()
  }
}
