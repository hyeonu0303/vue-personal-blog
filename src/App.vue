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
          <a class="nav-link active" aria-current="page" href="#">소개</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            목록
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/jslist" class="dropdown-item" >JavaScript</router-link>
            </li>
            <li><router-link to="/vuelist" class="dropdown-item">Vue</router-link></li>
            <li><a class="dropdown-item" href="#">Svelte</a></li>
            <li><a class="dropdown-item" href="#">Python</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
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
    :homeImg="homeImg"
  >
  </router-view>
</template>

<script>
import vueData from './assets/vueData.js';
import jsData from './assets/jsData.js';
import newPost from './assets/newPost.js';
import wolfImage from '@/image/늑대아이3.png';
import zhangguImage from './image/짱구.png';
import totoroImage from '@/image/토토로2.png';
export default {
  name: 'App',
  data() {
    return {
      newPost: newPost,
      vueData: vueData,
      jsData: jsData,
      homeImg: [
        wolfImage,
        zhangguImage,
        totoroImage,
      ]
    }
  },
  components: {
  }
}
</script>

<style>
  
</style>
