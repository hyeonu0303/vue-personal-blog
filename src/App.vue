<!--
  1.데이터처리를 어떻게할건지 블로그에대한 새로운 글을 쓸때,
    제목하고 부제는 
  2.Vue부분은 Vue부분만 보이게하기
  
-->



<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <!-- <router-link to="/" class="nav-brand">혀누 Vlog</router-link> -->
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
          <router-link to="/list" class="nav-link active">한눈에보기</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">소개</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            목록
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">JavaScript</a></li>
            <li><router-link to="/list" class="dropdown-item">Vue</router-link></li>
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
    :blogData="blogData" 
    :detail="detail"
    :homeImg="homeImg"
  >
  </router-view>
</template>

<script>
import blogData from './assets/blog.js';
import detail from './assets/detail.js';
export default {
  name: 'App',
  data() {
    return {
      blogData: blogData,
      detail: detail,
      homeImg:'https://mblogthumb-phinf.pstatic.net/20120827_147/eyg90111_134603917566728Fta_JPEG/naver_com_20120827_124533.jpg?type=w800',
    }
  },
  components: {
  }
}
</script>

<style>

</style>
