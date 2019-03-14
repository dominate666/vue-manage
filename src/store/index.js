import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
let store=new Vuex.Store({
     state:{
         adv:[]
     },
     actions:{
        submitCook(store,payloads){
            store.commit("produceState",payloads)
        }
     },
     mutations:{
       produceState(state,args){
         state.adv.push(args)
       }
     },

})
export default store;
