<template>
  <div>
    <header>{{address}}{{latitude}}</header>
    <div class="swiper">
      <figure v-for="item in array">
        <img :src="imgBaseUrl + item.image_url"/>
        <figcaption>{{item.title}}</figcaption>
      </figure>
    </div>

    <article>
      <header>附近商家</header>
      <ul>
        <li v-for="res"></li>
      </ul>
    </article>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  import {cityGuess,msiteFoodTypes,msiteAddress,shopList} from '../service/getData'

  export default {
    data() {
      return {
        geohash: '',
        address: '',
        array: [],
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
        offset: 0
      }
    },
    components: {},
    computed: {
      ...mapState([
        'latitude',
        'longitude'
      ]),
    },
    async beforeMount() {
      console.log(this.$route.query.geohash);
      if (!this.$route.query.geohash) {
        const res = await cityGuess();
        this.geohash = res.name;
      } else {
        this.geohash = this.$route.query.geohash;
      }

      let res = await msiteAddress(this.geohash)
      this.recordAddress(res);
      this.address = res.name;
    },
    methods: {
      ...mapMutations([
        'recordAddress'
      ]),
    },
    mounted() {
      msiteFoodTypes(this.geohash).then((res) => {
        this.array = res;
      });
      shopList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId);
    }
  }
</script>

<style lang="scss">
  .swiper {
    display: flex;
    flex-wrap: wrap;
    figure {
      flex: 25%;
      img{
        margin-bottom: 0.3rem;
        width: 1.8rem;
        height: 1.8rem;
      }
      figcaption{
        text-align: center;
        font-size: 0.55rem;
        color: #666;
        }
    }
  }
</style>

