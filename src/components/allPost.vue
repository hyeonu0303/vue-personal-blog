<template>
  <div class="container mt-5">
    <h4>{{ newPost[0].title}}</h4>
    <p>{{ newPost[0].subTitle}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    newPost:Array
  }
}
</script>

<style>

</style>