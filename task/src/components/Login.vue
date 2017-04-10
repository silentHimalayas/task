<template>
  <div class="contianer">
    <input type="text" placeholder="用户名" v-model='account'>
    <input type="password" placeholder="密码" v-model='pwd'>
    <button type="button" name="button" @click='login'>登入</button>
    <span @click='info'>da </span>
  </div>
</template>
<script>

  export default {
    name: 'login',
    data () {
      return {
        account: '',
        pwd: ''
      }
    },
    methods: {
      login () {
        let user = {
          account: this.account,
          pwd: this.pwd
        }
        this.$http.post('/api/login', user).then(function (data) {
          console.log(data)
        }, function (err) {
          console.log(err)
        })
      },
      info () {
        console.log('cool')
      }
    }

  }
</script>
<style scoped>
  input{
    display: block;
    margin: 20px 20px;
  }
</style>
