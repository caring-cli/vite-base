<!--
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-17 14:09:57
 * @Description: 
-->
<script setup>
import request from '@/apis'
import storage from '@/utils/storage'
import { useUserStore } from '@/stores/user'
import { useStore } from '@/stores'
const getuserlist = async () => {
  // const userlist = await request.get('/users')
  // storage.set('user', userlist)
  // console.log('🚀 ===>storage.get(user)：', storage.get('user'))
}
const num = ref(0)
const onClick = () => {
  num.value++
}
onMounted(() => {
  const store = useStore()
  store.text = 'jello'
  store.setToken('2222222')
  store.token2 = 'token2'
  // getuserlist()
  console.log('🚀 ===>: ', 'onMounted')
})

const router = useRouter()
const toHome = () => {
  router.push('home')
}

const onDelete = () => {
  request.delete('/users/661c84b4522d4eccde230b34').then((res) => {
    console.log(res)
  })
}
const onSingerPerson = () => {
  request.get('/users/661c84b4522d4eccde230b31').then((res) => {
    console.log(res)
  })
}

const onDeleteUser = () => {
  storage.delete('user')
  console.log(storage.get('user'))
}

// 登录
const name = ref('')
const userStore = useUserStore()
const onLogin = async () => {
  const res = await request.post('/users/login', {
    name: name.value
  })
  userStore.setToken(res.token)

  console.log('🚀 ===>userStore.token：', userStore.token)

  console.log('🚀 ===> localStorage:', localStorage.getItem('token'))
}
</script>

<template>
  <div>{{ num }}</div>
  <div></div>
  <button @click="onClick">++</button>
  <button @click="toHome">跳转home页面</button>
  <button @click="onDelete">删除用户</button>
  <button @click="onSingerPerson">获取单个用户</button>
  <button @click="onDeleteUser">删除用户</button>
  <div>
    <input type="text" v-model="name" />
    <button @click="onLogin">登录</button>
  </div>
</template>
