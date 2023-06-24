<template>
  <div class="container mt-5 min-vh-100" style="max-width:768px">
    <h5>{{ cssData[$route.params.css].title }}</h5>
    <div v-html="$marked(this.cssData[this.$route.params.css].content)"></div>
    <p style="text-align: right;">작성일:{{ cssData[$route.params.css].date }}</p>
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
    cssData:Array
  },
  components:{
    
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