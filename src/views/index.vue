<!--
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-15 17:45:00
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
  <div>{{ num }}</div>
  <div></div>
  <button @click="onClick">++</button>
</template>
