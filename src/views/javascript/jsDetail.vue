<template>
  <div class="container mt-5">
    <h5>{{ jsData[$route.params.js].title }}</h5>
    <div v-html="markedContent"></div>
    <p>{{ jsData[$route.params.js].date }}</p>
    <hr>
  </div>
</template>

<script>
import {marked} from 'marked';
export default {
  name:'detail',
  data(){
    return{
      
    }
  },
  props:{
    jsData:Array,
  },
  computed:{
    markedContent() {
      return marked(this.jsData[this.$route.params.js].content);
    }
  }
}
</script>

<style>
  img{
    width:70%; height:auto;
  }
</style>