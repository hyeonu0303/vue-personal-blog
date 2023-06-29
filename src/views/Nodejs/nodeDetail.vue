<template>
  <div class="container mt-5 min-vh-100" style="max-width:768px">
    <h1 style="text-align: center; margin-bottom: 50px;">{{ nodeData[$route.params.node].title }}</h1>
    <div class="post-content" v-html="$marked(this.nodeData[this.$route.params.node].content)"></div>
    <p style="text-align: right;">작성일:{{ nodeData[$route.params.node].date }}</p>
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
    nodeData:Array,
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
  .post-content{
    line-height: 2;
  }
</style>