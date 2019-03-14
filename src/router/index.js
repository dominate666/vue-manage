import Vue from 'vue'
import VueRouter from 'vue-router'
import adverPos from "../components/adverPos/adverPos"
import adverContent from "../components/adverContent/adverContent"
import addAdv from "../components/addAdv/addAdv"
import editAdv from "../components/editAdv/editAdv"
import advList   from "../components/advList/advList"
import editAdvPos   from "../components/editAdvPos/editAdvPos"
import breadcrumb from "../components/breadcrumb/breadcrumb"
import Adver from "../pages/Adver/Adver"
import Nav from "../pages/Nav/Nav"

Vue.use(VueRouter)

const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path:"/",redirect:"/adver",
    },
    {
      path:"/adver",component:Adver,
      children:[
        {path:"/",redirect:"/adver/adverPos"},
        { path:"adverPos",component:adverPos},
        { path:"adverContent",component:adverContent,},
        { path:"addAdv",component:addAdv,},
        { path:"editAdv",component:editAdv,},
        { path:"advList",component:advList,},
        { path:"editAdvPos",component:editAdvPos,},
      ]
    },
    {
      path:"/adverContent",component:adverContent,
    },
  ]
});
export  default  router;
