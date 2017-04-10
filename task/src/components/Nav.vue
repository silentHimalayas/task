<template>
  <div class="nav">
    <ul >
      <li v-on:click="read()">read</li>
      <li><router-link to='/index'>hello</router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'vhead',
    data () {
      return {

      }
    },
    methods: {
      read: function () {
        this.$http.get('/api/info').then(
                function (res) {
                  console.log(res)
                }
            )
      }
    }
  }
</script>
<style scoped>
  .nav {
    width: 100%;
    height: 60px;
    border: 1px solid gray;
  }
  .nav ul {
    list-style: none;
  }
  .nav ul li {
    display: inline-block;
  }
</style>
