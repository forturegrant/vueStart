<template>
  <header class="header">
    <span>ele.me</span>
    <span @click="con()">登录|注册</span>
  </header>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>
  .header{
    display: flex;
    justify-content: space-between;
  }
</style>
