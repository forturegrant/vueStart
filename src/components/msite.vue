<template>
  <div>
    <header>龙华区松和小学</header>
    <div>
      <figure><img src="" alt=""></figure>
      <figure><img src="" alt=""></figure>
      <figure><img src="" alt=""></figure>
      <figure><img src="" alt=""></figure>
      <figure><img src="" alt=""></figure>
      <figure><img src="" alt=""></figure>
      <figure><img src="" alt=""></figure>
      <figure><img src="" alt=""></figure>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {cityGuess} from '../service/getData'
  import {msiteFoodTypes} from '../service/getData'
  import {msiteAddress} from '../service/getData'
  export default {
    data() {
      return {
        geohash : ''
      }
    },
    components: {

    },
    async beforeMount(){
      console.log(this.$route.query.geohash);
      if(!this.$route.query.geohash){
        const res = await cityGuess();
        this.geohash = res.name;
      }else{
        this.geohash = this.$route.query.geohash;
      }

      let res = await msiteAddress(this.geohash)
      this.recordAddress(res);
    },
    methods:{
      ...mapMutations([
        'recordAddress'
      ])
    },
    mounted(){
      msiteFoodTypes(this.geohash).then((res) => {

      })
    }
  }
</script>

