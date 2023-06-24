<template>
  <div class="container-fluid mt-5 min-vh-100 " style="max-width:768px">
    <h3>{{ reactData[$route.params.react].title }}</h3>
    <div class="Dcontent" v-html="$marked(this.reactData[this.$route.params.react].content)"></div>
    <p style="text-align: right;">작성일: {{ reactData[$route.params.react].date }}</p>
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
    reactData:Array,
    modeCheck:Boolean
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