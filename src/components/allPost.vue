<template>
  <div class="container mt-5">
    <div class="mt-2" v-for="(item,index) in newPost" :key="index">
      <router-link :to="`/${item.link}/` + index " class="text-decoration-none text-dark" >
        <h3>{{ newPost[index].title}}</h3>
        <p>{{ newPost[index].subtitle}}</p>
      </router-link>
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