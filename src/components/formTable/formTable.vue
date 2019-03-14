<template>
  <div >
    <div class="mask" v-if="isShow">
       <div class="ball" @click="toggleShow">X</div>
       <span>请在广告位管理中操作</span>
    </div>
      <form>
             <label>广告名称:</label><input type="text"/>
             <label>类型:</label>
             <select>
               <option value="全部">全部</option>
               <option value="图片">图片</option>
               <option value="文字">文字</option>
               <option value="Flash">Flash</option>
               <option value="图文">图文</option>
             </select>
             <label >状态</label>
             <select>
               <option value="全部">全部</option>
               <option value="关闭">关闭</option>
               <option value="启用">启用</option>
             </select>
             <input type="button" class='btn-search' value="搜索">
             <input type="button" class='btn-all' value="全部">
             <input type="button" class='add-adv' value="添加广告" @click.prevent="addAdv">
           </form>
      <table>
             <thead >
             <th width="30px">ID</th>
             <th width="266px">广告名称</th>
             <th width="44px">状态</th>
             <th width="173px">广告位</th>
             <th width="44px">类型</th>
             <th width="44px">排序</th>
             <th width="159px">开始时间</th>
             <th width="160px">END时间</th>
             <th width="128px">操作</th>
             </thead>
             <tbody>
             <tr v-for="(tr,index) in adv">
               <td><a href="#">{{tr.ID}}</a></td>
               <td><a href="#">{{tr.name}}</a></td>
               <td  :style="stateStyle">{{tr.state}}</td>
               <td>{{tr.advPos}}</td>
               <td>{{tr.type}}</td>
               <td>{{tr.order}}</td>
               <td>{{tr.startTime}}</td>
               <td>{{tr.endTime}}</td>
               <td>
                 <router-link to="/adver/editAdv">编辑</router-link>
                 <a href="#" @click="deleteById(tr.id)">删除</a>|
                 <a href="#">预览</a>
               </td>
             </tr>
             </tbody>
           </table>
  </div>
</template>

<script>
    export default {
        name: "formTable",
        data(){
          return{
            isShow:false,
            stateStyle:{
              color:"rgb(76,181,113)"
            },
            adv:[
              {
                ID:68,
                name:"全站-页脚通栏广告",
                state:"启用",
                advPos:"首页-分类广告-办公用品",
                type:"图片",
                order:1,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:{edit:"编辑",delete:"删除",scan:"预览"}
              },
              {
                ID:67,
                name:"网站保证",
                state:"启用",
                advPos:"全站-页脚通栏广告",
                type:"图片",
                order:1,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:72,
                name:"首页办公设备分类右侧广告",
                state:"启用",
                advPos:"首页-分类广告-办公设备",
                type:"图片",
                order:2,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:50,
                name:"高效品质",
                state:"启用",
                advPos:"首页-焦点轮播",
                type:"图片",
                order:2,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:49,
                name:"办公用品1",
                state:"关闭",
                advPos:"首页-焦点轮播",
                type:"图片",
                order:2,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:51,
                name:"个性办公",
                state:"启用",
                advPos:"首页-分类广告-办公用品",
                type:"图片",
                order:3,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:52,
                name:"专业品质",
                state:"启用",
                advPos:"首页-分类广告-办公用品",
                type:"图片",
                order:4,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:76,
                name:"在线办公商城-专业的办公用品商城",
                state:"启用",
                advPos:"全站-页脚广告语",
                type:"图片",
                order:100,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:74,
                name:"首页办公生活商品分类右侧广告",
                state:"启用",
                advPos:"首页-分类广告-办公生活",
                type:"图片",
                order:100,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:73,
                name:"首页分类商品-办公耗材右侧广告",
                state:"启用",
                advPos:"首页-分类广告-办公耗材",
                type:"图片",
                order:100,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:60,
                name:"tasdfasdf",
                state:"过期",
                advPos:"首页-焦点轮播",
                type:"图片",
                order:1,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:53,
                name:"质量保证",
                state:"启用",
                advPos:"首页-焦点轮播",
                type:"图片",
                order:1,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },
              {
                ID:48,
                name:"周年庆满800送50",
                state:"启用",
                advPos:"首页-顶部广告",
                type:"图片",
                order:100,
                startTime:"2017-11-15 16:00:00",
                endTime:"2021-11-27 16:00:00",
                operate:[
                  {edit:"编辑",},
                  {delete:"删除"},
                  {scan:"预览"}
                ]
              },

            ]

          }
        },
      methods:{
        addAdv(){
           this.isShow=true;
          document.body.style.overflow='hidden'
        },
        toggleShow(){
          this.isShow=false;
          document.body.style.overflow='auto'

        }
      },
        created() {
          this.$emit("transfer",this.adv)
        },


    }
</script>

<style lang="scss" scoped>
  @import "../../../static/scss/adverContent";
 .mask{
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background:rgba(0,0,0,0.5);
   color: #fff;
   text-align: center;
   padding-top: 100px;
   z-index: 100;
   .ball{
     width: 50px;
     height: 50px;
     line-height: 50px;
     text-align: center;
     border-radius: 100%;
     background: #fff;
     font-weight: 700;
     color:#666;
     font-size: 30px;
     margin: 0 auto;
     cursor: pointer;
   }
 }
</style>
