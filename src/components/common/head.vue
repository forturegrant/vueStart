<template>
  <header class="header">
    <span>ele.me</span>
<<<<<<< HEAD
    <span @click="con()">登录|注册</span>
    <span>{{go}}</span>
=======
    <span>登录|注册</span>
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
  </header>
</template>

<script>
  export default {
    data() {
      return {

      }
<<<<<<< HEAD
    },
    props:['go'],
    methods:{
      con(){
        this.$emit('con')
      }
=======
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
    }
  }
</script>

<style>
  .header{
    display: flex;
    justify-content: space-between;
<<<<<<< HEAD
    background-color: #3190e8;
=======
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
  }
</style>
