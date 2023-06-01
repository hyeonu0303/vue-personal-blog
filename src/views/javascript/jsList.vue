<template>
  <div class="container mt-5 min-vh-100">
    <div v-for="(post, index) in jsData" :key="index">
      <router-link :to="'jsdetail/' + index" class="blog-link">
        <h5 :class="{'text-white':modeCheck}">{{ post.title }}</h5>
        <p :class="{'text-white':modeCheck}">{{ post.subtitle}}</p>
      </router-link>
      <p style="font-size:16px;" >{{ post.date }}</p>
      <hr :class="{'text-white':modeCheck}">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    jsData:Object,
    modeCheck:Boolean
  },
  mounted(){
    
  }
}
</script>

<style>

</style>