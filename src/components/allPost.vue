<template>
  <div class="container card-container pt-0" :class="{'bg-dark': modeCheck}">
    <!--최신글-->
    <div class="row newpost">
      <div class=" col-sm-12 col-md-6 col-lg-4 mt-3" v-for="(item,index) in newPost" :key="index" >
        <div class="card card-post card-shadow" :class="{'card-dark':modeCheck}" >
          <div class="card-body">
            <router-link :to="`/${item.link}/` " class="text-decoration-none text-dark" >
              <h5 class="card-title" :class="{'text-white':modeCheck}">{{ newPost[index].title}}</h5>
              <p class="card-text" style="font-size:16px;" :class="{'text-white':modeCheck}">{{ newPost[index].subtitle}}</p>
            </router-link>
            <p class="mt-3 card-date" style="font-size:14px;" :class="{'text-white':modeCheck}">{{ newPost[index].date }}</p>
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
    newPost:Array,
    count:Number,
    modeCheck: Boolean,
    modeChange:Function,
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