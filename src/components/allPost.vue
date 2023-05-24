<template>
  <div class="container mt-5">
    <div class="mt-2" v-for="(item,index) in newPost" :key="index">
      <router-link :to="`/${item.link}/` + index " class="text-decoration-none text-dark" >
        <h4>{{ newPost[index].title}}</h4>
        <p style="font-size:20px;">{{ newPost[index].subtitle}}</p>
      </router-link>
      <p style="font-size:18px;">{{ newPost[index].date }}</p>
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