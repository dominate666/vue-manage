<template>
      <div>
           <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
			            ShopCMS后台管理系统
            </span>
           <!--<span class="demonstration" style="float:right;padding:5px;color:white;margin-left:2%;width:15%">-->
                <!---->
            <!--</span>-->
        <span class="demonstration" style="float:right;padding-top:15px;margin-right:1%">
                 <span style="font-size: 12px;color: #fff;margin-right: 5px;">刷新 欢迎您:</span>
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="color:white">
                    admin<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
      </div>
</template>

<script>
    export default {
        name: "cmsHeader"
    }
</script>

<style scoped>

</style>
