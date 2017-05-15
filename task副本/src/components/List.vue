<template>
  <div class="list">
    <div class="nav">
      <el-form ref="form" v-model='form' class="demo-form-inline" :inline="true" >
        <span class='filter'>筛选：</span>
        <el-form-item  prop='dept' class="select">
        <el-select v-model="form.dept" placeholder="请选择部门" @change="handleDeptsChange(form.dept)" >
          <el-option label="所有部门" value=""></el-option>
          <el-option label="研发部" value="研发部"></el-option>
          <el-option label="人事部" value="人事部"></el-option>
          <el-option label="销售部" value="销售部"></el-option>
          <el-option label="财务部" value="财务部"></el-option>
          <el-option label="后勤部" value="后勤部"></el-option>
          <el-option label="宣传部" value="宣传部"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item  prop='dept' class="select">
        <el-select v-model="form.state" placeholder="员工状态" @change="handleStateChange(form.state)" >
          <el-option label="员工状态" value=""></el-option>
          <el-option label="在职" value="在职"></el-option>
          <el-option label="出差" value="出差"></el-option>
          <el-option label="请假" value="请假"></el-option>
        </el-select>
        </el-form-item>
        <router-link to='/add' class="add"><el-button type='primary' icon='plus'></el-button></router-link>
        <el-form-item prop='inputText'class='search'>
          <el-input  placeholder='请输入查询内容' v-model='form.inputText' icon='search' :on-icon-click='handleIconClick'></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data='users' stripe border  >
      <el-table-column type="index" width="55"></el-table-column>
      <el-table-column prop='name' label='姓名'></el-table-column>
      <el-table-column prop='age' label='年龄'></el-table-column>
      <el-table-column prop='tel' label='电话'></el-table-column>
      <el-table-column prop='status' label='状态'></el-table-column>
      <el-table-column prop='area' label='地区'></el-table-column>
      <el-table-column prop='pmb' label='部门'></el-table-column>
      <el-table-column label='操作' width="80">
        <template scope='scope'>
          <i class="el-icon-delete" @click="handleDelete(scope.$index,users)"></i>
          <i class="el-icon-edit" @click='handleEdit(scope.$index,users)' style="margin-left:10px"></i>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination small  :current-Page="pageIndex" :page-size="pageSize" layout="prev, pager, next" :total.number="total" v-on:current-change='pageIndexChange' class="page"></el-pagination>
    </div>
  </div>

</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      users: [],
      option: {},
      tog: true,
      total: 0,
      pageSize: 10,
      pageIndex: 1,
      form: {
        dept: '',
        state: '',
        inputText: ''
      },
      searchParams: []
    }
  },
  computed: {
    start: function () {
      return (this.pageIndex - 1) * this.pageSize
    }
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    handleDeptsChange (val) {
      if (val) {
        this.option.pmb = val
      } else {
        delete this.option.pmb
      }
      this.fetchData()
    },
    handleStateChange (val) {
      if (val) {
        this.option.status = val
      } else {
        delete this.option.status
      }
      this.fetchData()
    },
    handleIconClick () {
      this.searchParams.push({name: this.form.inputText})
      this.searchParams.push({pmb: this.form.inputText})
      this.searchParams.push({status: this.form.inputText})
      this.searchParams.push({area: this.form.inputText})
      this.$http.post('/api/search', this.searchParams).then(
        res => {
          this.total = res.body.length
          this.users = res.body.reverse().splice(this.start, this.pageSize)
        },
        res => {
          console.log(res)
        }
      )
    },
    handleDelete (index, rows) {
      this.$http.post('/api/delete', rows[index]).then(function (data) {
        this.$message('成功删除')
        this.fetchData()
      }, function (err) {
        this.$message(err)
      })
    },
    handleEdit (index, rows) {
      this.$router.push('/add' + rows[index]._id + '')
    },
    fetchData () {
      this.$http.post('/api/list', this.option).then(function (data) {
        this.total = data.body.length
        this.users = data.body.reverse().splice(this.start, this.pageSize)
      }, function (err) {
        console.log(err)
      })
    },
    pageIndexChange (pageIndex) {
      this.pageIndex = pageIndex
      this.fetchData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    width: 80%;
    margin: 80px auto;
  }
  .page{
    margin:40px auto;
    text-align: center;
  }
  .nav{
    margin:0px 10px;
  }
  .nav .select{
    width: 150px;
    margin-left: 20px;
    float: left;
  }
  .nav .search{
    width: 150px;
    float: right;
  }
  .nav .filter{
    line-height: 38px;
    float: left;
    color: #727679;
  }
  .nav .add{
    float: right;
    margin-left: 20px;
  }
</style>
