<template>
       <div class="container">
         <form>
           <label>名称:</label><input type="text" id="username" v-model="filterName"/>
           <label>别名:</label><input type="text" id="alias" v-model="filterAlias"/>
           <label>页面:</label><input type="text" id="page" />
           <label>类型:</label>
           <select>
             <option value="全部">全部</option>
             <option value="图片">图片</option>
             <option value="文字">文字</option>
             <option value="Flash">Flash</option>
             <option value="图文">图文</option>
           </select>
           <input type="button" class='btn-search' value="搜索" >
           <input type="button" class='btn-all' value="全部">
           <input type="button" class='add-adv' @click="addAdv" value="添加广告位">
         </form>
         <table>
           <thead>
               <th width="30">ID</th>
               <th width="174">广告位名称</th>
               <th width="122">别名</th>
               <th width="99">所在页面</th>
               <th width="76">广告数量</th>
               <th width="76">广告类型</th>
               <th width="76">广告宽度</th>
               <th width="76">广告高度</th>
               <th width="44">排序</th>
               <th width="275" style="text-align: left;">操作</th>
           </thead>
           <tbody>
              <tr v-for="p in filterBy(adv,[filterName,filterAlias])">
                  <td><a href="#">{{p.ID}}</a></td>
                  <td><a href="#">{{p.name}}</a></td>
                  <td>{{p.alias}}</td>
                  <td>{{p.pages}}</td>
                  <td>{{p.amount}}</td>
                  <td>{{p.type}}</td>
                  <td>{{p.width}}</td>
                  <td>{{p.height}}</td>
                  <td>{{p.order}}</td>
                  <td>
                    <router-link to="/adver/advList">{{p.operate.list}}</router-link>|
                     <router-link to="/adver/addAdv">{{p.operate.addAdv}}</router-link>|
                    <a href="#">{{p.operate.scan}}</a>|
                     <router-link to="/adver/editAdvPos">{{p.operate.edit}}</router-link>|
                    <a href="#" @click="deleteById(p.id)">{{p.operate.delete}}</a>
                  </td>
              </tr>
           </tbody>
         </table>
         <div class="list-page">当前第1页 共1页</div>
       </div>
</template>

<script>
    export default {
        name: "adverPos",
        data(){
          return{
            filterName:"",
            filterAlias:"",
            advHeader:{
              height: "40px",
              lineHeight: "40px",
              color:" skyblue",
              backgroundColor: "#f5f5f5"
            },
            adv:[]
            // adv:[
            //   {
            //     ID:"68",
            //     name:"全站-页脚通栏广告",
            //     alias:"site_footer_img",
            //     page:"",
            //     amount:1,
            //     type:"图片",
            //     width:960,
            //     height:68,
            //     order:101,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            //   {
            //     ID:"74",
            //     name:"全站-页脚广告语",
            //     alias:"site_footer_text",
            //     page:"",
            //     amount:1,
            //     type:"图片",
            //     width:500,
            //     height:20,
            //     order:102,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            //   {
            //     ID:"61",
            //     name:"首页-焦点轮播",
            //     alias:"index_slide",
            //     page:"/index/main",
            //     amount:6,
            //     type:"图片",
            //     width:725,
            //     height:310,
            //     order:201,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            //   {
            //     ID:"60",
            //     name:"首页-顶部广告",
            //     alias:"/index-top",
            //     page:"/index/main",
            //     amount:1,
            //     type:"图片",
            //     width:958,
            //     height:52,
            //     order:101,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            //   {
            //     ID:"70",
            //     name:"首页-分类广告-办公用品",
            //     alias:"index_cat_0",
            //     page:"/index/main",
            //     amount:1,
            //     type:"图片",
            //     width:373,
            //     height:282,
            //     order:211,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            //   {
            //     ID:"71",
            //     name:"首页-分类广告-办公设备",
            //     alias:"index_cat_1",
            //     page:"/index/main",
            //     amount:1,
            //     type:"图片",
            //     width:373,
            //     height:282,
            //     order:212,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            //   {
            //     ID:"72",
            //     name:"首页-分类广告-办公耗材",
            //     alias:"index_cat_1",
            //     page:"/index/main",
            //     amount:1,
            //     type:"图片",
            //     width:373,
            //     height:282,
            //     order:213,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            //   {
            //     ID:"73",
            //     name:"首页-分类广告-办公生活",
            //     alias:"index_cat_3",
            //     page:"/index/main",
            //     amount:1,
            //     type:"图片",
            //     width:373,
            //     height:282,
            //     order:214,
            //     operate:{
            //       list:"广告列表",
            //       addAdv:"添加广告",
            //       scan:"预览",
            //       edit:"编辑",
            //       delete:"删除"
            //     }
            //   },
            // ]
          }
        },
         methods:{
           getData(){
              this.$http.get("http://localhost:3000/adv").then(res=>{
                this.adv=res.body;
                // console.log(this.adv)
              })
           },
           filterBy(adv,arr){
             return adv.filter(function (item) {
               // console.log(arr[0]);
               // return ((item.name=arr[0])&&(item.alias=arr[1]))||item
               return item;
             })
           },
           deleteById(id){
              if(confirm("你确定要删除吗")){
                this.$http.delete("http://localhost:3000/adv/"+id).then(res=>{
                  console.log(res)
                })
              }

           },
           addAdv(){
              this.$router.push({path:"/adver/addAdv"})
           }


        },
       created(){
          this.getData();
       }
    }
</script>

<style lang="scss" scoped>
  .container{
    width: 1069px;
    margin: 0 auto;
    .advHeader{
      height: 40px;
      line-height: 40px;
      color: #646464;
      background-color: #f5f5f5;
    }
    form{
      margin-top: 20px;
      margin-bottom: 10px;
      input{
        border: 1px solid gray;
        vertical-align: middle;
      }
      input[type=text]{
        width: 120px;
        height: 23px;
        border-radius: 3px;
      }
      .btn-search,.btn-all{
        width: 42px;
        height: 26px;
      }
      input[type=button]{
        background:rgb(51,122,183);
        color:white;
      }
      label{
        margin-right: 5px;
      }
      select{
        width: 59px;
        height: 23px;
      }
      .add-adv{
        float: right;
        width: 84px;
        height: 26px;
      }
    }
    table{
      padding-top: 10px;
      font-size: 12px;
      border: 1px solid #dedede;
      padding-left: 4px;
      line-height: 40px;
        thead{
        text-align: left;
        background:rgb(241,241,241);
        font-weight: 700;
      }

    }
    .list-page{
      height: 45px;
      background:rgba(239,243,248,.5) ;
      text-align: right;
      font-size: 12px;
    }

  }

</style>
