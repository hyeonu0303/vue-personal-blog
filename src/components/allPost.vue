<template>
  <div class="container card-container">
    <!--최신글-->
    <div class="row newpost">
      <h2 class="mt-3">
        최신 글 <font-awesome-icon :icon="['fas', 'star']" style="color: #f3fa39ea;" />
      </h2>
      <div class=" col-sm-12 col-md-6 col-lg-4 mt-4" v-for="(item,index) in newPost" :key="index" >
        <div class="card card-post card-shadow" >
          <div class="card-body">
            <router-link :to="`/${item.link}/` " class="text-decoration-none text-dark" >
              <h5 class="card-title">{{ newPost[index].title}}</h5>
              <p class="card-text" style="font-size:16px;">{{ newPost[index].subtitle}}</p>
            </router-link>
            <p class="mt-3 card-date" style="font-size:14px;">{{ newPost[index].date }}</p>
          </div>
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
  .card-container{
    padding:20px;
    
  }
  .card-wrapper{
    margin: 10px; 
  }
  .card-post{
    width: 100%; 
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