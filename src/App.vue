<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-fixed-top bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" style="font-weight: bold;">HY.blog</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/allPost" class="nav-link active">한눈에보기</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link active">소개</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            develope  
          </a>
        <List/>
      </li>
    </ul>
    <font-awesome-icon :icon="['fass', 'moon']" class="moon"/>
    </div>
  </div>
</nav>
  <router-view 
    :homeImg="homeImg"
    :newPost="newPost" 
    :vueData="vueData"
    :jsData="jsData"
    :devData="devData"
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
      homeImg: homeImg,
    }
  },
  components: {
    List,
  },
  conputed:{

  }
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
