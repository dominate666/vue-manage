<template>
  <div>
    <form-table></form-table>
    <list-page></list-page>
  </div>
</template>

<script>
  import  formTable from "../formTable/formTable"
  import  listPage from "../listPage/listPage"
    export default {
        name: "advList",
      components:{
        formTable,
        listPage
      }
    }
</script>

<style lang="scss" scoped>
 @import "../../../static/scss/adverContent";
</style>
