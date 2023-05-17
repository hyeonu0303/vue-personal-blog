<template>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <!--이미지 2000X1150-->
      <transition name="fade">
        <div class="quote-box">
          <p>가는거니?<br>
            난 아직 너에게 아무것도
            해준게 없어...
          </p>
          </div>
      </transition>
        <img :src="homeImg[0]" class="d-block w-100" s tyle="max-height:1150px;" alt="...">
        
    </div>
    <div class="carousel-item">
      <div class="quote-box">
        <p>""</p>
      </div>
      <img :src="homeImg[1]" class="d-block w-100" style="max-height:1150px;" alt="...">
    </div>
    <div class="carousel-item">
      <div class="quote-box">
        <p>""</p>
      </div>
      <img :src="homeImg[2]" class="d-block w-100" style="max-height:1150px;" alt="...">
    </div>
    
    
  </div>
  <div id="carouselExampleAutoplayiWng"></div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container">
  <br>
  <br>
  <h2>최신글</h2>
  <!--향후 데이터가 늘어나면 추가할예정-->
  <AllPost :newPost="newPost.slice(0,3)"/>
</div>
</template>

<script>
import AllPost from './allPost.vue'
export default {
  name: 'home',
  data(){
    return{
      
    }
  },
  props: {
    homeImg: Array,
    newPost: Array,
  },
  components:{
    AllPost,
  },
  methods:{

  },
  computed:{
    newPostDataCount(){
      return this.newPost.length;
    }
  }
};
</script>

<style>
.carousel-item {
  position: relative;
}

.carousel-item .quote-box {
  position: absolute;
  width:50%;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  /* background-color: rgba(0, 0, 0, 0.6); */
  padding: 20px;
  color:white;
  font-size:30px;
  border-radius: 12px;
}
.carousel-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

}

.carousel-item img {
  position: relative;
  filter: brightness(60%);
  z-index: 2;
}

@media (max-width: 600px) {
  .carousel-item .quote-box {
    font-size: 15px;
  }
}

.fade-enter-from{opacity: 0;}
.fade-enter-active{transition:all 1s;}
.fade-enter-to{opacity: 1;}

@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

body{
  font-family: 'SUITE-Regular';
  font-size:20px;
}


</style>
