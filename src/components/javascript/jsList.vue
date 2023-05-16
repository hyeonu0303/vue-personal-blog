<template>
  <div>
    <div class="container mt-5">
    <div v-for="(post, index) in jsData" :key="index">
      <h5><router-link :to="'/jsdetail/' + index" class="blog-link">{{ post.title }}</router-link></h5>
      <p>{{ post.content }}</p>
      <p>{{ post.date }}</p>
      <hr>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props:{
    jsData:Array,
  }
}
</script>

<style>

</style>