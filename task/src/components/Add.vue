<template>
  <div class="container">
    <div class="thead">
      <span class="title">{{info}}</span>
    </div>
    <div class="add">
      <el-form ref="form" :model="form" label-width="83px" class="info" :rules="rules">
        <el-form-item label="姓名" prop='name' class="item">
          <el-input v-model="form.name"  ></el-input>
        </el-form-item>
        <el-form-item class="item" label="年龄" prop="age" :rules="[{ required: true, message: '年龄不能为空'},{ type: 'number', message: '年龄必须为数字值'}]">
          <el-input type="age" v-model.number="form.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="item" label="电话" prop="tel" :rules="[{ required: true, message: '电话不能为空'},{ type: 'number', message: '电话必须为数字值'}]">
          <el-input type="tel" v-model.number="form.tel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="item" label="部门" prop='pmb'>
        <el-select v-model="form.pmb" placeholder="请选择部门">
          <el-option label="研发部" value="研发部"></el-option>
          <el-option label="人事部" value="人事部"></el-option>
          <el-option label="销售部" value="销售部"></el-option>
          <el-option label="财务部" value="财务部"></el-option>
          <el-option label="后勤部" value="后勤部"></el-option>
          <el-option label="宣传部" value="宣传部"></el-option>
        </el-select>
        </el-form-item>
        <el-form-item class="item" label="员工状态" prop='status'>
        <el-select v-model="form.status" placeholder="请选择员工状态">
          <el-option label="在职" value="在职"></el-option>
          <el-option label="请假" value="请假"></el-option>
          <el-option label="出差" value="出差"></el-option>
        </el-select>
      </el-form-item>
        <el-form-item class="item" label="工作地区" prop='area'>
          <el-input v-model="form.area" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
          <el-button @click='cancle'>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'add',
    data () {
      return {
        userId: null,
        info: '',
        form: {
          name: '',
          age: '',
          tel: '',
          pmb: '',
          status: '',
          area: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入员工姓名', trigger: 'blur'}
          ],
          tel: [
            {required: true, message: '请输入员工电话号码', trigger: 'blur'},
            {type: 'number', message: '电话号码必须为数字', trigger: 'blur'},
            {min: 1, max: 11, message: '请输入有效电话号码', trigger: 'blur'}
          ],
          pmb: [
            {required: true, message: '请输入员工所在部门', trigger: 'change'}
          ],
          status: [
            {required: true, message: '请输入员工状态', trigger: 'change'}
          ],
          area: [
            {required: true, message: '请输入员工所在地区', trigger: 'blur'}
          ]
        }
      }
    },
    mounted: function () {
      if (this.$route.params.id) {
        this.userId = this.$route.params.id
        this.info = '编辑人员信息'
        this.$http.get('/api/add/' + this.userId).then(
          res => {
            this.form = res.body
          },
          res => {
            console.log(res)
          }
        )
      } else {
        this.info = '添加人员信息'
      }
    },
    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/api/add/', this.form).then(function (data) {
              if (this.$route.params.id) {
                this.$message({
                  message: '修改成功!',
                  type: 'success'
                })
              } else {
                this.$message({
                  message: '添加成功!',
                  type: 'success'
                })
              }
              this.$router.push('./list')
            }, function (err) {
              this.$message(err)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      cancle () {
        this.$router.push('./list')
      }
    }
  }
</script>
<style scoped>
  .container{
    background-color: rgba(82, 84, 84, 0.09);
    padding-top:80px;
    height: 100%;
  }
  .add{
    width: 530px;
    margin: 0 auto;
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .thead{
    width: 530px;
    margin: 0 auto;
    background-color: #FFC107;
    text-align: center;
  }
  .title{
    display: inline-block;
    padding: 15px 20px;
    color: #fff;
  }
  .info{
    width: 425px;
    margin: 0 auto;
  }
  .item{
    margin-bottom: 20px;
  }
</style>
