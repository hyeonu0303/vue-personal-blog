<template>
  <div>
    <div class="container mt-5">
    <div v-for="(post, index) in jsData" :key="index">
      <router-link :to="'jsdetail/' + index" class="blog-link">
        <h5>{{ post.title }}</h5>
        <p>{{ post.subtitle}}</p>
      </router-link>
      <p style="font-size:16px;">{{ post.date }}</p>
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