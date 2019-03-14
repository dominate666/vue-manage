<template>
    <div class="container">
        <formTable/>
         <listPage/>
    </div>
</template>
<script>
  import formTable  from "../formTable/formTable"
  import listPage  from "../listPage/listPage"
  export default {
    name: "adverContent",
    components:{
      formTable,
      listPage
    },
    data(){
          return{
            // stateStyle:{
            //    color:"rgb(76,181,113)"
            // },
           advHeader:{
             height: "40px",
             lineHeight: "40px",
             color:" skyblue",
             backgroundColor: "#f5f5f5"
           },
            adv:[]
           // adv:[
           //   {
           //     ID:68,
           //     name:"全站-页脚通栏广告",
           //     state:"启用",
           //     advPos:"首页-分类广告-办公用品",
           //     type:"图片",
           //     order:1,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:{edit:"编辑",delete:"删除",scan:"预览"}
           //   },
           //   {
           //     ID:67,
           //     name:"网站保证",
           //     state:"启用",
           //     advPos:"全站-页脚通栏广告",
           //     type:"图片",
           //     order:1,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:72,
           //     name:"首页办公设备分类右侧广告",
           //     state:"启用",
           //     advPos:"首页-分类广告-办公设备",
           //     type:"图片",
           //     order:2,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:50,
           //     name:"高效品质",
           //     state:"启用",
           //     advPos:"首页-焦点轮播",
           //     type:"图片",
           //     order:2,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:49,
           //     name:"办公用品1",
           //     state:"关闭",
           //     advPos:"首页-焦点轮播",
           //     type:"图片",
           //     order:2,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:51,
           //     name:"个性办公",
           //     state:"启用",
           //     advPos:"首页-分类广告-办公用品",
           //     type:"图片",
           //     order:3,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:52,
           //     name:"专业品质",
           //     state:"启用",
           //     advPos:"首页-分类广告-办公用品",
           //     type:"图片",
           //     order:4,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:76,
           //     name:"在线办公商城-专业的办公用品商城",
           //     state:"启用",
           //     advPos:"全站-页脚广告语",
           //     type:"图片",
           //     order:100,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:74,
           //     name:"首页办公生活商品分类右侧广告",
           //     state:"启用",
           //     advPos:"首页-分类广告-办公生活",
           //     type:"图片",
           //     order:100,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:73,
           //     name:"首页分类商品-办公耗材右侧广告",
           //     state:"启用",
           //     advPos:"首页-分类广告-办公耗材",
           //     type:"图片",
           //     order:100,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:60,
           //     name:"tasdfasdf",
           //     state:"过期",
           //     advPos:"首页-焦点轮播",
           //     type:"图片",
           //     order:1,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:53,
           //     name:"质量保证",
           //     state:"启用",
           //     advPos:"首页-焦点轮播",
           //     type:"图片",
           //     order:1,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //   {
           //     ID:48,
           //     name:"周年庆满800送50",
           //     state:"启用",
           //     advPos:"首页-顶部广告",
           //     type:"图片",
           //     order:100,
           //     startTime:"2017-11-15 16:00:00",
           //     endTime:"2021-11-27 16:00:00",
           //     operate:[
           //       {edit:"编辑",},
           //       {delete:"删除"},
           //       {scan:"预览"}
           //     ]
           //   },
           //
           // ]
        }
    },
    methods:{
      transfer(adv){
          this.adv=adv;
      }
    },
    mounted() {
      this.transfer()
    }
  }
</script>

<style lang="scss" scoped>
</style>
