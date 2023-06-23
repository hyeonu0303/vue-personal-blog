<template>
  <div class="container mt-5 min-vh-100" style="max-width:768px">
    <div v-for="(post, index) in vueData" :key="index">
      <router-link :to="'vuedetail/' + index" class="blog-link" :class="{'text-white':modeCheck}">
        <h4>{{ post.title }}</h4>
        <p style="font-size:18px;">{{ post.subtitle }}</p>
      </router-link>
      <p style="font-size:15px;" :class="{'text-white':modeCheck}">{{ post.date }}</p>
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