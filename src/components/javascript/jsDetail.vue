<template>
  <div class="container col-7 mt-5">
    <h5>{{ jsData[$route.params.js].title }}</h5>
    <p style="white-space: pre-line">{{ jsData[$route.params.js].content }}</p>
    <p>{{ jsData[$route.params.js].date }}</p>
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
    jsData:Array,
  }
}
</script>

<style>
  img{
    width:70%; height:auto;
  }
</style>