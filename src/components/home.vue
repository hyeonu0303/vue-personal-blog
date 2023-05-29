<template>
  <div class="main-background">
    <div class="mainImg">
      <img :src="homeImg" class="w-100 h-100"/>
    </div>
    <div class="content mt-5 allpost">
        <!--Card부분-->
        <div class="container card-container">
          <!--vue Icon-->
          <h2 class="mt-5">카테고리 <font-awesome-icon :icon="['fas', 'code']" style="color: #0048ff;" /></h2>
          <div class="row mt-3">
            <div class="col-sm-6 col-md-3 col-lg-3 card-sm-box">
              <div class="card card-iconBox card-shadow">
              <div class="card-iconBox-inner mt-3">
                <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568683636/noticon/hkuhbyocl2mx2keas7ng.png" class="card-img-top" alt="vue아이콘"/>
              </div>
                <div class="card-body p-0 mt-3">
                  <p style="text-align:center; font-weight: bold;">Vue</p>
                </div>
              </div>
            </div>
          <div class="col-sm-6 col-md-3 col-lg-3 card-sm-box">
            <div class="card card-iconBox card-shadow">
              <div class="card-iconBox-inner-js mt-3">
                <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png" class="card-img-top" alt="JS아이콘"/>
              </div>
              <div class="card-body p-0 mt-3">
                <p style="text-align:center; font-weight: bold;">JavaScript</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3 card-sm-box">
            <div class="card card-iconBox card-shadow ">
              <div class="card-iconBox-inner-js mt-3">
                <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1678672480/noticon/qblxu9uo0uuitucuzhjy.png" class="card-img-top" alt="CSS"/>
              </div>
              <div class="card-body p-0 mt-3">
                <p style="text-align:center; font-weight: bold;">CSS</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3 card-sm-box">
            <div class="card card-iconBox card-shadow">
              <div class="card-iconBox-inner-js mt-3">
                <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567001196/noticon/aziehs8hf3w3kwinelzf.png" class="card-img-top" alt="개발일지아이콘"/>
              </div>
              <div class="card-body p-0 mt-3">
                <p style="text-align:center; font-weight: bold;">개발 일지</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--최신글-->
      <AllPost :newPost="newPost.slice(0, 6)"/>
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
.allpost{
  height: 1000px;
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

/* 아이콘 카드박스 */
.card-iconBox{
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius:15px;
}

.card-iconBox-inner{
  padding:10px;
  border:1px solid rgba(46, 46, 46, 0.562);
  border-radius:50%;
  background-color:rgba(8, 8, 8, 0.8);
  width:100px;
}
.card-iconBox-inner-js{
  width:100px;
}

.card-iconBox-inner-js img{
  border-radius: 15px;
}

/*card 마우스 올려놨을때 에니메이션 */

.card-shadow:hover {
  border:none;
  background:#eeeeeed7;
  box-shadow: -3px -3px 30px 3px #FF4646 , 3px 3px 30px 3px #3232FF;
  transition:all 0.5s;
}


  /*창최소크기*/
  @media (max-width:576px){
    .card-iconBox{
      width:200px;
      height:150px;
      margin-top:10px;
    }
    .card-sm-box{
      width:160px;
      margin-left:17px;
      margin-right:60px;
    }
    .card-body p {
      font-size: 15px;
    }
    .card-body{
      margin:0;
    }
  }
  /*핸드폰 */
  @media (max-width:470px){
    .card-iconBox{
      width:140px;
      height:150px;
      margin-top:10px;
    }
    .card-sm-box{
      width:130px;
      margin-left:17px;
      margin-right:40px;
    }
    .card-body p {
      font-size: 15px;
    }
    .card-body{
      margin:0;
    }
}

</style>
