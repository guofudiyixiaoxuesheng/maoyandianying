import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"全国",
    cityid:"",
    damaiid:""
  },
  mutations: {
    changecity(state,payload){
      state.name = payload.name;
      state.cityid =payload.cityid;
      state.damaiid =payload.damaiid;
    }
  },
  actions: {
  },
  modules: {
  }
})
