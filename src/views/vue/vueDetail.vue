<template>
  <div class="container mt-5">
    <h5>{{ vueData[$route.params.vue].title }}</h5>
    <div v-html="markedContent"></div>
    <p>{{ vueData[$route.params.vue].date }}</p>
    <hr>
  </div>
</template>

<script>
import {marked} from 'marked'
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
    markedContent() {
      return marked(this.vueData[this.$route.params.vue].content);
    }
  }
}
</script>

<style>
  img{
    width:70%; height:auto;
  }
</style>