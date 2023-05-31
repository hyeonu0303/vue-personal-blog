<template>
  <div class="container mt-5">
    <h5>{{ cssData[$route.params.css].title }}</h5>
    <div v-html="markedContent"></div>
    <p>{{ cssData[$route.params.css].date }}</p>
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
    cssData:Array
  },
  components:{
    
  },
  computed:{
    markedContent() {
      return marked(this.cssData[this.$route.params.css].content);
    }
  }
}
</script>

<style>
  
</style>