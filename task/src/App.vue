<template>
  <div id="app">
    <!-- <ul >
      <li><router-link to='/'>index</router-link></li>
      <li><router-link to='/index'>hello</router-link></li>
    </ul> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
/*ul{
  width: 40%;
  list-style: none;
  float: left;
}
ul li{
  text-align: center;
  height: 24px;
  border: 1px solid gray;
  margin-top: -1px;
}*/
</style>
