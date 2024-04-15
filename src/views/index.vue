<!--
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-15 17:09:48
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
</script>

<template>
  <main>{{ num }}</main>
  <button @click="onClick">++</button>
</template>
