<template>
  <div class="box">
    <div class="left">
    </div>
    <div class="right">
      <div class="container">
        <div class="photo">
        </div>
        <el-form class="form" ref="form" :model="form"  label-width='50px':rules="rules">
          <el-form-item prop='account'>
            <el-input v-model="form.account" ></el-input>
          </el-form-item>
          <el-form-item prop='pwd'>
            <el-input type='password' v-model="form.pwd"  ></el-input>
          </el-form-item>
          <el-form-item >
            <el-button  class="button" type='primary' @click="login('form')">登录</el-button>
            <el-button  class="button" type='default' @click="register('form')">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'login',
    data () {
      return {
        form: {
          account: '',
          pwd: ''
        },
        rules: {
          account: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          pwd: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }
      }
    },
    methods: {
      login (form) {
        this.$refs[form].validate((vaild) => {
          if (vaild) {
            this.$http.post('/api/login', this.form).then(function (data) {
              if (data.body) {
                this.$message({
                  message: '登录成功',
                  type: 'success'
                })
                this.$router.push('/list')
              } else {
                this.$message.error('用户名或密码错误，请重新登录')
              }
            }, function (err) {
              console.log(err)
            })
          } else {
            console.log('err login')
            return false
          }
        })
      },
      register (form) {
        this.$refs[form].validate((vaild) => {
          if (vaild) {
            this.$http.post('/api/register', this.form).then(function (data) {
              this.$message({
                message: '注册成功，登录!',
                type: 'success'
              })
              this.$router.push('/list')
            }, function (err) {
              this.$message({
                message: err,
                type: 'error'
              })
            })
          } else {
            console.log('err login')
            return false
          }
        })
      }
    }
  }
</script>
<style scoped>
  .box{
    height: 100%;
    overflow: hidden;
  }
  .left{
    height: 100%;
    width: 60%;
    float: left;
    background-color: #20a0ff;
  }
  .right{
    height: 100%;
    width: 40%;
    float: left;
    background-color: rgba(82, 84, 84, 0.09);
  }
  .container{
    background-color: #fff;
    width: 70%;
    margin-left: 90px;
    position: relative;
    margin-top: 200px;
    padding-top: 140px;
    padding-bottom: 20px;
  }
  .photo{
    width: 170px;
    height: 170px;
    border-radius: 170px;
    background-color: #99e20b;
    margin-bottom: 50px;
    position: absolute;
    top:0;
    left:50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    border: 6px solid #fff;
  }
  .form{
    height: 100%;
    width: 90%;
  }
  .form .button{
    width: 100%;
    margin-bottom: 8px;
    margin-left: 0;
  }
</style>
