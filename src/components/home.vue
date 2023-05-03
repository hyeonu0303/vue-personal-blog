<template>
<div class="image-wrapper">
  <div class="container-fluid p-0">
    <div class="position-relative">
      <div class="image-wrapper" >
        <img :src="homeImg" class="img-fluid w-100 h-auto" alt="">
        <div class="image-overlay"></div>
      </div>
      </div>
      <div class="position-absolute top-50 start-50 translate-middle text-center dialog-box">
        <h2 class="text-light">"코멘트 제목"<br>안녕</h2>
      </div>
    </div>

    <div class="container">
      <!-- 여기에 다른 콘텐츠를 추가하세요 -->
      <br>
      <br>

      <h2>최신글</h2>
      <!--향후 데이터가 늘어나면 추가할예정-->
      <List :blogData="blogData.slice(0,blogDataCount)"/>
    </div>
  </div>
</template>

<script>
import List from './List.vue';
export default {
  name: 'home',
  data(){
    return{
    }
  },
  props: {
    homeImg: String,
    blogData: Array,
  },
  components:{
    List,    
  },
  computed:{
    blogDataCount(){
      return this.blogData.length;
    }
  }
};
</script>

<style>
.container-fluid {
  overflow: hidden;
}
.image-wrapper {
  position: relative;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
}

.dialog-box {
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 10px;
}
</style>
