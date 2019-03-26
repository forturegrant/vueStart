<template>
  <header class="header">
    <span>ele.me</span>
    <span @click="con()">登录|注册</span>
    <span>{{go}}</span>
  </header>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props:['go'],
    methods:{
      con(){
        this.$emit('con')
      }
    }
  }
</script>

<style>
  .header{
    display: flex;
    justify-content: space-between;
    background-color: #3190e8;
  }
</style>
