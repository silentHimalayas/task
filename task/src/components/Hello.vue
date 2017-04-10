<template>
  <el-table :data='users' stripe>
    <el-table-column prop='name' label='姓名'></el-table-column>
    <el-table-column prop='old' label='年龄'></el-table-column>
    <el-table-column prop='tel' label='电话'></el-table-column>
    <el-table-column prop='status' label='状态'></el-table-column>
    <el-table-column prop='area' label='地区'></el-table-column>
    <el-table-column prop='pmd' label='部门'></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      users: [
        {
          name: 'wangyanxin',
          old: 21,
          tel: 123123123,
          status: '在职',
          area: '江西',
          pmd: 'web前端'
        },
        {
          name: 'wangyan',
          old: 12,
          tel: 1156523123,
          status: '请假',
          area: '北京',
          pmd: 'web前端'
        },
        {
          name: 'wangrui',
          old: 17,
          tel: 1231235634123,
          status: '在职',
          area: '江西',
          pmd: 'PHP'
        },
        {
          name: 'wangshuaixin',
          old: 20,
          tel: 123123123,
          status: '在职',
          area: '江西',
          pmd: 'web前端'
        },
        {
          name: 'yangyanxin',
          old: 32,
          tel: 13789089764,
          status: '在职',
          area: '上海',
          pmd: 'web前端'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    width: 80%;
    margin: 30px auto;
  }
  .list table{
    width: 100%;
    border: 1px solid gray;
  }
  .list table tr{
    border-bottom: 1px solid gray;
  }
  .list table tr td{
    text-align: center;
  }
</style>
