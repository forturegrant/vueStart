<template>
  <div>
    <div class="top">
      <header>{{$route.query.city}}
        <router-link to="/home" class="change-city">切换城市</router-link>
      </header>
    </div>
    <input type="text" v-model="keyword"/>
    <div @click="submit()">提交</div>
  </div>
</template>

<script>
  import {searchplace} from '../service/getData'

  export default {
    data() {
      return {
        keyword: '',
        cityid: ''
      }
    },
    components: {},
    methods: {
      submit() {
        /*searchplace(this.cityid, this.keyword).then(res => {

        })*/
        this.$router.push({path: '/msite', query: {geohash: '22.70165,114.09097'}},);
      }
    },
    mounted() {
      this.cityid = this.$route.params.id
    }
  }
</script>

<style>
  .top {
    background-color: #3190e8;
  }

  .change-city {
    float: right;
  }
</style>
