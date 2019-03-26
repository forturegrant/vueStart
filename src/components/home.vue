<template>
<<<<<<< HEAD
  <div>
    <head-top :go="go" @con="con"></head-top>
    <nav-top></nav-top>
  </div>
=======
  <head-top></head-top>
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
</template>

<script>
  import headTop from './common/head'
<<<<<<< HEAD
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
=======
  export default {
    data() {
      return {}
    },
    components: {
      headTop
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
    }
  }
</script>

