<template>
  <div>
    <div class="flex-box">
      <span>当前定位城市:</span>
      <span>定位不准时，请在城市列表中选择</span>
    </div>
    <router-link :to="{ path: `/city/${guessCityid}`, query: {city}}" class="cityName">
    <!--<router-link :to="'/city/' + guessCityid" class="guess_city">-->
      {{city}}
    </router-link>
  </div>
</template>

<script>
  import {cityGuess} from '../service/getData'

  export default {
    data() {
      return {
        city: '',
        guessCityid: '', //当前城市id
      }
    },
    mounted() {
      cityGuess().then(res => {
        this.city = res.name;
        this.guessCityid = res.id;
      })
    }
  }
</script>

<style>
  .flex-box {
    display: flex;
    justify-content: space-between;
  }
</style>
