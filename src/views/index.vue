<!--
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-15 19:40:37
 * @Description: 
-->
<script setup>
const num = ref(0)
const onClick = () => {
  num.value++
}
onMounted(() => {
  console.log('🚀 ===>: ', 1111)
})

const router = useRouter()
const toHome = () => {
  router.push('home')
}
</script>

<template>
  <div>{{ num }}</div>
  <div></div>
  <button @click="onClick">++</button>
  <button @click="toHome">跳转home页面</button>
</template>
