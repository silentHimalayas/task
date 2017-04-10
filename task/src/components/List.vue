<template>
  <div>
    {{hello}}
  </div>
</template>
<script>
  export default{
    name: 'list',
    data () {
      return {
        hello: 'ni shi zhu me '
      }
    }
  }

</script>
<style scoped>
  div{
    float: left;
    margin-left: 20px;
    padding: 10px;border: 1px solid gray;
  }
</style>
