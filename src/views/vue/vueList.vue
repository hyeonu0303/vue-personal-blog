<template>
  <div class="container mt-5">
    <div v-for="(post, index) in vueData" :key="index">
      <h5><router-link :to="'vuedetail/' + index" class="blog-link">{{ post.title }}</router-link></h5>
      <p>{{ post.content }}</p>
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
  .blog-link {
  color: black;
  text-decoration: none;
  transition: transform 0.2s ease-out;
}

.blog-link:hover {
  transform: translateY(-3px);
}
</style>