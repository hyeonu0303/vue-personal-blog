<template>
  <div class="container col-7 mt-5">
    <!--파라미터를 다 가져옴 $route.params.작명한것-->
    <!-- {{$route.params.id}} -->
    <!--URL에있는 숫자를 넣으면됨-->
    <h5>{{ vueData[$route.params.vue].title }}</h5>
    <p style="white-space: pre-line">{{ vueData[$route.params.vue].content }}</p>
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
    
  }
}
</script>

<style>
  img{
    width:70%; height:auto;
  }
</style>