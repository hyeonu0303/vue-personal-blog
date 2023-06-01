<template>
  <div class="container mt-5 min-vh-100">
    <div v-for="(post, index) in devData" :key="index">
      <router-link  :to="'devdetail/' + index" class="blog-link">
        <h5 :class="{'text-white':modeCheck}">{{ post.title }}</h5>
        <p :class="{'text-white':modeCheck}">{{ post.subtitle }}</p>
      </router-link>
      <p :class="{'text-white':modeCheck}" style="font-size:15px">{{ post.date }}</p>
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
    devData:Array,
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