<template>
  <div class="container mt-5">
    <div v-for="(post, index) in cssData" :key="index">
      <router-link  :to="'cssdetail/' + index" class="blog-link">
        <h5>{{ post.title }}</h5>
        <p>{{ post.subtitle }}</p>
      </router-link>
      <p style="font-size:15px">{{ post.date }}</p>
      <hr>
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
    cssData:Array
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