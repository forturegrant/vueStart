<template>
  <div>
    <head-top :go="go" @con="con"></head-top>
    <nav-top></nav-top>
  </div>
</template>

<script>
  import headTop from './common/head'
  import navTop from './nav'
  export default {
    data() {
      return {
        go: 1
      }
    },
    components: {
      headTop,
      navTop
    },
    methods:{
      con(){
        console.log(go);
      }
    }
  }
</script>

