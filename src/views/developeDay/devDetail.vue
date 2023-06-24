<template>
  <div class="container mt-5 min-vh-100" style="max-width:768px">
    <h5>{{ devData[$route.params.dev].title }}</h5>
    <div v-html="$marked(this.devData[this.$route.params.dev].content)"></div>
    <p style="text-align: right;">작성일:{{ devData[$route.params.dev].date }}</p>
  </div>
</template>

<script>
export default {

  name:'detail',
  data(){
    return{
        
    }
  },
  props:{
    devData:Array
  },
  
  mounted() {
    // 마운트된 후에 Prism.js 적용
    this.$nextTick(() => {
      this.$Prism.highlightAll();
    });
  }
}
</script>

<style>
  
</style>