<!--
  1.데이터처리를 어떻게할건지 블로그에대한 새로운 글을 쓸때,
    제목하고 부제는 
  2.Vue부분은 Vue부분만 보이게하기
  3.검색기능 활성화하기
  4.목록에 개발일지 추가하기
  5.모바일로 들어왔을때 이미지, 폰트크기등 조절하기
  
-->
<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">혀누 Blog</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/allpost" class="nav-link active">한눈에보기</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/introduce" class="nav-link active">자기소개</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            목록
          </a>
          <List/>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  <router-view 
    :newPost="newPost"
    :vueData="vueData"
    :jsData="jsData"
<<<<<<< HEAD
    :homeImg="homeImg"
=======
    :devData="devData"
>>>>>>> test
  >
  </router-view>
</template>

<script>

//데이터
import newPost from './assets/newPost.js';
import List from './components/List.vue';
import vueData from './assets/vueData.js';
import jsData from './assets/jsData.js';
<<<<<<< HEAD
import wolfImage from './image/늑대아이3.png';
import zhangguImage from './image/짱구.png';
import totoroImage from './image/토토로2.png';
=======
import devData from './assets/develope.js';
//이미지
import wolfImage from './image/늑대아이3.png';
import zhangguImage from './image/짱구.png';
import totoroImage from './image/토토로2.png';

>>>>>>> test
export default {

  name: 'App',
  data() {
    return {
      newPost: newPost,
      vueData: vueData,
<<<<<<< HEAD
      jsData: jsData,
=======
      devData: devData,
>>>>>>> test
      homeImg: [
        wolfImage,
        zhangguImage,
        totoroImage,
      ],
    }
  },
  components: {
    List
  }
}
</script>

<style>
/* @font-face {
    font-family: 'omyu_pretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
} */


</style>
