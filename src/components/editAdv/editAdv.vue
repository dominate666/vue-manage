<template>
    <form>
       <div class="advPos">
         <label>广告位</label>
          <span class="form-tips">首页-分类广告-办公用品px</span>
       </div>
      <div class="advType">
        <label>广告类型</label>
        <span class="form-tips">图片</span>
      </div>
      <div class="advSize">
        <label>广告尺寸</label>
        <span class="form-tips">宽：373px, 高：282px</span>
      </div>
      <div class="advCall">
        <label>广告名称</label>
        <input type="text" value="首页办公用品分类右侧广告" >
        <span class="no">*</span>
      </div>
      <div class="advTime">
        <label>投放时间</label>
        <input type="text" value="2017-11-15 16:00:00">-
        <input type="text" value="2017-11-15 16:00:00">
        <span class="no">*</span>
        <span class="form-tips">格式为：1970-01-01 08:00:01</span>
      </div>
      <div class="state">
        <label  style="vertical-align:bottom;">状态</label>
        <input type="radio" value='开启' v-model="state"><span>开启</span>
         <i style="display: inline-block; width:10px;height:26px"></i>
        <input type="radio" value='关闭' v-model="state"><span>关闭</span>
        <span class="no">*</span>
      </div>
      <div class="order">
        <label>排序</label>
        <input type="text" value="1">
        <span class="no">*</span>
      </div>
      <div class="upload">
        <label >上传图片</label>
        <label class="upPic" style="border: 1px dotted lime;"> <input type="file" style="opacity:0;" class="upPic"></label>
        <span class="no">*</span>
        <!--<span>(最大0.50M)</span>-->
      </div>
      <div class="linkAddress">
        <label >链接地址</label>
        <input type="text" value="http://www.shopcms.cn">
        <span class="no">*</span>
      </div>
      <div class="target">
        <label>目标窗口</label>
        <input type="text" value="_blank">
      </div>
      <btn></btn>
    </form>
</template>

<script>
  import btn from "../btn/btn"
    export default {
        name: "editAdv",
      components:{
        btn
      },
      data(){
          return{
            state:"开启"
          }
      }

    }
</script>

<style lang="scss" scoped>
    form{
      margin-top: 20px;
      div{
        border-bottom: 1px dotted #d4d4d4;
        padding: 8px 0;
      }
      .no{
        color: #FF0000;
        vertical-align: middle;
        margin-left: 10px;
      }
      .advCall{
         input{
           width: 300px;
           height: 26px;
           text-indent: 10px;
         }
      }
      .advTime{
        input{
          width: 162px;
          height: 26px;
          padding-left: 10px;
        }
      }
      .order{
         input{
           width: 60px;
           height: 26px;
         }
      }
      .linkAddress{
         input{
           width: 500px;
           height: 26px;
           text-indent: 10px;
         }
      }
      .state{
        font-size: 12px;
        span{
          vertical-align: middle;
        }
        input{
          vertical-align: middle;
        }
      }
      .target{
          input{
            width: 200px;
            height: 26px;
            text-indent: 10px;
          }
      }
      .upload{
        .upPic{
          width: 30px;
          height: 30px;
          margin: 0;
        }
      }
      label{
        display: inline-block;
        width: 80px;
        height: 32px;
        text-align: right;
        font-size: 14px;
        margin-right: 10px;
      }
      .form-tips{
        font-size: 14px;
        color: #aaaaaa;
      }
      .btn{
          border:none;
          width: 106px;
          height: 46px;
          line-height: 46px;
          text-align: center;
          background:rgb(40,96,144);
          font-size: 18px;
          color: white;
          border-radius:3px;
          margin-top: 30px;
          margin-left: 200px;
        }
    }
</style>
