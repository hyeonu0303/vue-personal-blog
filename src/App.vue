<template>
  
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-fixed-top" :class="{'bg-dark':modeCheck,'text-white':modeCheck}">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" style="font-weight: bold;" :class="{'text-white':modeCheck}">HY.blog</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" :class="{'text-white':modeCheck}">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/allPost" class="nav-link active" :class="{'text-white':modeCheck}">한눈에보기</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link active" :class="{'text-white':modeCheck}">소개</router-link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" :class="{'text-white':modeCheck}">
            develope  
          </a>
          <ul class="dropdown-menu" :class="{'dropdown-menu-dark': modeCheck}">
            <List/>
          </ul>
      </li>
    </ul>
    <font-awesome-icon 
      v-on:click="modeChange" 
      v-if="modeCheck == false" 
      :icon="['fass', 'moon']"
      size="xl" 
      class="font-icon"/>
    <font-awesome-icon 
      v-on:click="modeChange" 
      v-if="modeCheck == true" 
      class="font-icon" 
      size="xl"
      :icon="['fas', 'sun']"/>
    </div>
  </div>
</nav>
  <router-view 
    :homeImg="homeImg"
    :newPost="newPost" 
    :vueData="vueData"
    :jsData="jsData"
    :devData="devData"
    :cssData="cssData"
  >
  </router-view>
</template>
<script>

//데이터
import newPost from './assets/newPost.js';
import List from './components/List.vue';
import vueData from './assets/vueData.js';
import jsData from './assets/jsData.js';
import devData from './assets/develope.js';
import cssData from './assets/css.js';
//이미지
import homeImg from './image/homeImg.jpg';
export default {

  name: 'App',
  data() {
    return {
      newPost: newPost,
      jsData : jsData,
      vueData: vueData,
      devData: devData,
      cssData: cssData,
      homeImg: homeImg,
      modeCheck:false,
      count:0
    }
  },
  components: {
    List,
  },
  conputed:{

  },
  methods:{
    modeChange(){
      if(this.count % 2 == 1){
        this.modeCheck = true;
      }
      else{
        this.modeCheck = false;
      }
      this.count++;
    }
  }
  //향후 progress-bar추가하기위한 로직
  /* methods:{
    handleScroll() {
  // 스크롤 이벤트 처리 로직 작성
      console.log('스크롤 이벤트가 발생했습니다.');
      console.log('스크롤 위치:', window.scrollY);
  }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }, */
}
</script>

<style>
/*dropdown nav hover */
.dropdown:hover .dropdown-menu {
  display: block;
}
.moon{
  margin-right:20px;
  font-size:30px;
}

.navbar{
  z-index: 1000;
}

@font-face {
  font-family: 'Yeongdo-Rg';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

</style>
