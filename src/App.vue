<template>
  <div id="app">
<<<<<<< HEAD
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
=======
    <!--<router-view/>-->
    <home></home>
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
  </div>
</template>

<script>
<<<<<<< HEAD
  //import home from './components/home'
  export default {

  }
</script>

<style lang="scss">
  @import './style/common.scss';
=======
  import home from './components/home'
  export default {
    name: 'App',
    components: {
      home
    }
  }
</script>

<style>
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
