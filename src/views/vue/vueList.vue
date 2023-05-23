<template>
  <div class="container mt-5">
    <div v-for="(post, index) in vueData" :key="index">
      <router-link :to="'vuedetail/' + index" class="blog-link">
        <h5>{{ post.title }}</h5>
        <p>{{ post.subtitle }}</p>
      </router-link>
      <p>{{ post.date }}</p>
      <hr>
    </div>
  </div>
</template>
<router-view
  :vueData="vueData"
></router-view>
<script>
export default {
  name:'list',
  data(){
    return{
      
    }
  },
  props : {
    vueData: Array,
  }
}
</script>

<style>
  
</style>