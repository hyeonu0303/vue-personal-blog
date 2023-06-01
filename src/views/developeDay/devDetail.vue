<template>
  <div class="container mt-5 min-vh-100">
    <h5>{{ devData[$route.params.dev].title }}</h5>
    <div v-html="markedContent"></div>
    <p>{{ devData[$route.params.dev].date }}</p>
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
    devData:Array
  },
  components:{
    
  },
  computed:{
    markedContent() {
      return marked(this.devData[this.$route.params.dev].content);
    }
  }
}
</script>

<style>
  
</style>