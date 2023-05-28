<template>
  <div class="container">
    <div class="row">
      <div class="card col-3 mt-3" v-for="(item,index) in newPost" :key="index">
        <div class="card-body" >
          <router-link :to="`/${item.link}/` + index " class="text-decoration-none text-dark" >
            <h5 class="card-title">{{ newPost[index].title}}</h5>
            <p class="card-text" style="font-size:16px;">{{ newPost[index].subtitle}}</p>
          </router-link>
          <p class="mt-3 card-date" style="font-size:14px;">{{ newPost[index].date }}</p>
        </div>
      </div>
    </div>
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
  .card {
    width:40vh;
    margin-right:40px;
  }
  /* Card정렬 */
  .card-title{
    height:48px;
  }
  .card-text{
    height:48px;
  }
  .card-date{
    margin:0;
  }
</style>