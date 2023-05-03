<template>
  <!-- <div class="container col-4">
    
    <h3>List</h3>
    <hr>
    <h5><router-link to="/detail/0" class="blog-link">{{ blogData[0].title }}</router-link></h5>
    <p>{{ blogData[0].date}}</p>
    
    <h5><router-link to="/detail/1" class="blog-link"></router-link>{{ blogData[1].title }}</h5>
    <p>{{ blogData[1].date}}</p>
    <h5>{{ blogData[2].title }}</h5>
    <p>{{ blogData[2].date}}</p>
  </div> -->
  <div class="container">
  <hr>
  <div v-for="(post, index) in blogData" :key="index">
    <h5><router-link :to="'/detail/' + index" class="blog-link">{{ post.title }}</router-link></h5>
    <p>{{ post.content }}</p>
    <p>{{ post.date }}</p>
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
    blogData: Array,
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