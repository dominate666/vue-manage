<template>
  <div id="app">
    <cms-header :style="cmsStyle"></cms-header>
    <el-container class="container">
      <el-container class="container">
        <el-aside class="aside" style="overflow: hidden;width: 160px;" >
          <Nav/>
        </el-aside>

        <el-main class="main">
          <breadcrumb/>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import  Nav from "./pages/Nav/Nav"
  import breadcrumb  from "./components/breadcrumb/breadcrumb"
  import cmsHeader  from "./components/cmsHeader/cmsHeader"
 export default {
  name: 'App',
  components:{
    Nav,
    breadcrumb,
    cmsHeader
  },
   data(){
    return{
      mainStyle:{
         padding:0
      },
      cmsStyle:{
         width:"100%",
         height:"45px",
        background:"rgb(67,142,185)"
      }
    }
   },
  methods:{
    desilver(obj){
      console.log(obj)
    }
  }
 }
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
