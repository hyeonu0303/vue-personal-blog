<template>
  <div class="container mt-5 min-vh-100">
    <div v-for="(post, index) in cssData" :key="index">
      <router-link  :to="'cssdetail/' + index" class="blog-link">
          <h5 :class="{'text-white':modeCheck}">{{ post.title }}</h5>
          <p :class="{'text-white':modeCheck}">{{ post.subtitle }}</p>
      </router-link>
      <p style="font-size:16px">{{ post.date }}</p>
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
    cssData:Array,
    modeCheck:Boolean
  }
}
</script>

<style>

  .blog-link {
  color: black;
  text-decoration: none;
  transition: transform 0.2s ease-out;
}

.blog-link:hover {
  transform: translateY(-3px);
}
</style>