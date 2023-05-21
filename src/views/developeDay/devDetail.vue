<template>
  <div class="container mt-5">
    <!--파라미터를 다 가져옴 $route.params.작명한것-->
    <!-- {{$route.params.id}} -->
    <!--URL에있는 숫자를 넣으면됨-->
    <h5>{{ devData[$route.params.dev].title }}</h5>
    <p style="white-space: pre-line">{{ devData[$route.params.dev].content }}</p>
    <p>{{ devData[$route.params.dev].date }}</p>
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
    devData:Array
  }
}
</script>

<style>
  img{
    width:70%; height:auto;
  }
</style>