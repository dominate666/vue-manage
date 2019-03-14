<template>
  <div>
    <div style="background-color: #EBEBEB;min-height:800px;">
      <div :style="manageHeadStyle">
        管理菜单
      </div>
      <div>
        <el-row >
          <el-col>
            <div>
              <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
                <!--<el-menu-item index="11" :style="manageStyle">管理菜单</el-menu-item>-->

                <!--index和他的内容相关联，只让当前的显示，其他的隐藏-->
                <!--<el-submenu  index="/adver" v-for="(p,index) in infos" :key="index" @open>-->
                <!--<template slot="title"><el-menu-item><i class="el-icon-message"></i>{{p.title}}</el-menu-item></template>-->
                <!--<el-menu-item v-if='p.childs' v-for="(child,index) in p.childs" :key="index" :style="commonStyle"  index="/adver/adverPos">{{child}}</el-menu-item>-->
                <!--</el-submenu>-->

                <el-submenu  :index="p.title.path" v-for="(p,index) in infos" :key="index">
                  <template slot="title"><el-menu-item><i class="el-icon-message"></i>{{p.title.title}}</el-menu-item></template>
                  <el-menu-item v-if='p.childs' v-for="(child,index) in p.childs" :key="index" :style="commonStyle"  :index="child.path" @click="desilver({path:child.path,title:child.title})" >{{child.title}}</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import  {mapState} from  "vuex"
    export default {
        name: "Nav",
      data(){
        return {
          breads:[],
          searchCriteria: '',
          manageHeadStyle:{
               width:"100%",
               height:"40px",
                backgroundColor:"rgb(98,168,209)",
                fontSize:"13px",
                textAlign: "center",
                color:"#fff",
                width:"100%",
                height:"40px",
                lineHeight:"40px",
                overflow: "hidden"
          },
          manageStyle:{
             background:"skyblue",
             color:"#fff",
             textAlign:"center",
            height:"40px",
            lineHeight:"40px"
          },
          commonStyle:{
              paddingLeft:"40px!important",
               color:"gray"
          },
          infos:[
            {
              title:{path:"/adver",title:"广告管理"},
              childs:[
                {path:"/adver/adverContent",title:"广告位管理"},
                {path:"/adver/adverPos",title:"广告内容管理"},
              ]
            },
            {
              title:{path:"/system",title:"系统管理"},
              childs:[
                {path:"/system/config",title:"系统配置"},
                {path:"/system/way",title:"配送方式"},
              ]
            },

          ],
        }
      },
      methods:{
        handleSelect(index,indexPath){
          this.breads=indexPath;
          // console.log(indexPath)
        },
        desilver(obj){
           console.log(obj)
        },

      },
    }
</script>

<style scoped>
  /*el-menu-item{*/
    /*height: 56px;*/
    /*line-height: 56px;*/
  /*}*/
  .el-submenu .el-menu-item{
    padding-left: 0!important;
    min-width: auto;
  }

  .el-submenu .el-menu-item{

  }


</style>
