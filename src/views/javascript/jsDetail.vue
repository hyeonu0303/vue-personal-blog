<template>
  <div class="container mt-5 min-vh-100" style="max-width:768px">
    <h5>{{ jsData[$route.params.js].title }}</h5>
    <div v-html="$marked(this.jsData[this.$route.params.js].content)"></div>
    <p style="text-align: right;">작성일:{{ jsData[$route.params.js].date }}</p>
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
    jsData:Array,
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
  img{
    width:70%; height:auto;
  }
</style>