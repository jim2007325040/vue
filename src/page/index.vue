<template>
  <div>
    index page
  </div>
</template>
<script>
  export default {
    mounted (){
      this.$http.get('https://unpkg.com/axios@0.18.0/dist/axios.min.js')
        .then(res => {
          console.log(res);
        })
    }
  }
</script>
<style lang='scss'>
  @import '../style/style';
</style>
