<template>
  <div class="container mt-5 min-vh-100">
    <div v-for="(post, index) in vueData" :key="index">
      <router-link :to="'vuedetail/' + index" class="blog-link">
        <h5 :class="{'text-white':modeCheck}">{{ post.title }}</h5>
        <p :class="{'text-white':modeCheck}">{{ post.subtitle }}</p>
      </router-link>
      <p style="font-size:16px;" :class="{'text-white':modeCheck}">{{ post.date }}</p>
      <hr :class="{'text-white':modeCheck}">
    </div>
  </div>
</template>
<script>
export default {
  name:'list',
  data(){
    return{
      
    }
  },
  props : {
    vueData: Array,
    modeCheck: Boolean
  }
}
</script>

<style>
  
</style>