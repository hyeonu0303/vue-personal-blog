<template>
  <div class="main-background" >
    <div class="mainImg">
      <img :src="homeImg" class="w-100"/>
    </div>
    <div class="content mt-5">
      <AllPost :newPost="newPost.slice(0,7)"/>
    </div>
  </div>
  
</template>

<script>
import AllPost from './allPost.vue'
export default {
  name: 'home',
  data(){
    return{
      높이:0,
      opacity:1
    }
  },
  props: {
    newPost: Array,
    homeImg: Image
  },
  components:{
    AllPost,
  },
  methods:{
    /* handleScroll(){
      //140시작 690끝
      this.높이 = window.scrollY;
      this.opacity = -1/970 * this.높이 + 1110/970;
    } */
  },
  computed:{
    newPostDataCount(){
      return this.newPost.length;
    }
  },
  /* mounted() {
    // 컴포넌트가 마운트되었을 때 스크롤 이벤트 리스너를 등록
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // 컴포넌트가 언마운트되기 전에 스크롤 이벤트 리스너를 제거
    window.removeEventListener('scroll', this.handleScroll);
  }, */
  
};
</script>


<style>


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
.main-background{
  margin-bottom: 0;
}

.mainImg img{
  display:block;
}
.mainImg{
  
  position:sticky;
  top:0px;
  z-index:1;
}
.content{
  width:100%;
  background:white;
  position:relative;
  display:block;
  z-index:2;
  padding:5px;
}


</style>
