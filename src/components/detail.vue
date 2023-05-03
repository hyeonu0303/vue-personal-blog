<template>
  <div class="container col-7">
    <!--파라미터를 다 가져옴 $route.params.작명한것-->
    <!-- {{$route.params.id}} -->
    <!--URL에있는 숫자를 넣으면됨-->
    <h5>{{ detail[$route.params.id].title }}</h5>
    <p style="white-space: pre-line">{{ detail[$route.params.id].content }}</p>
    <p>{{ detail[$route.params.id].date }}</p>
    <img :src="detail[$route.params.id].image">
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
    detail:Array,
  }
}
</script>

<style>
  img{
    width:70%; height:auto;
  }
</style>