<template>
  <div :class="{'bg-dark':modeCheck,'text-white':modeCheck,}">
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg" :class="{'bg-dark':modeCheck,'text-white':modeCheck}">
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
              <router-link to="/introduce" class="nav-link active" :class="{'text-white':modeCheck}">소개</router-link>
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
      :nodeData="nodeData"
      :reactData="reactData"
      :modeCheck="modeCheck"
    >
    </router-view>
  </div>
</template>

<script>
import newPost from './assets/newPost.js';
import List from './components/List.vue';
import vueData from './assets/vueData.js';
import jsData from './assets/jsData.js';
import devData from './assets/develope.js';
import cssData from './assets/css.js';
import nodeData from './assets/node.js';
import reactData from './assets/react.js';
import homeImg from './image/homeImg.jpg';

export default {
  name: 'App',
  data() {
    return {
      newPost: newPost,
      vueData: vueData,
      jsData: jsData,
      devData: devData,
      cssData: cssData,
      nodeData: nodeData,
      reactData: reactData,
      homeImg: homeImg,
      modeCheck: false,
      count: 0
    }
  },
  mounted(){
    window.matchMedia('(prefers-color-scheme: dark)').addListener(this.detectColorScheme);
    this.detectColorScheme(window.matchMedia('(prefers-color-scheme: dark)'));
  },
  components: {
    List,
  },
  methods:{
    detectColorScheme(e) {
      this.modeCheck = e.matches;
    },
    modeChange(){
      this.modeCheck = !this.modeCheck;
    },
  }
}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
.moon{
  margin-right:20px;
  font-size:30px;
}

::selection{
  background:#96FFFF;
  color:black;
}

blockquote{
  padding:20px;
  border-left: 10px solid #62a1ff;
  background-color: rgb(226, 225, 225);
  color:black;
}

blockquote p{
  margin:0;
  padding:0;
}

@font-face {
  font-family: 'Yeongdo-Rg';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
