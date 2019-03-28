import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
}

const getters = {

}

const mutations = {
  recordAddress(state,{latitude,longitude}){
    state.latitude = latitude;
    state.longitude = longitude;
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
