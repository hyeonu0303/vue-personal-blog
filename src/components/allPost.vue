<template>
  <div class="container mt-5">
    <div class="mt-2" v-for="(item,index) in newPost" :key="index">
      <h4>{{ newPost[index].title}}</h4>
      <p>{{ newPost[index].subTitle}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    newPost:Array
  }
}
</script>

<style>

</style>