<template>
  <div class="container mt-5 min-vh-100">
    <h5>{{ vueData[$route.params.vue].title }}</h5>
    <div v-html="$marked(this.vueData[this.$route.params.vue].content)"></div>
    <p>{{ vueData[$route.params.vue].date }}</p>
    <hr>
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
    vueData:Array,
    
  },
  computed:{
    // markedContent() {
    //   return marked(this.vueData[this.$route.params.vue].content);
    // }
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