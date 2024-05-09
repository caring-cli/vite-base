<!--
 * @Author: Wanko
 * @Date: 2024-04-09 22:02:08
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-15 22:35:02
 * @Description: 
-->
<script setup>
import { fetchUserList } from '@/apis/modules/user'
fetchUserList()
import { request } from '@/apis'

request()
</script>

<template>
  <div>home</div>
</template>
