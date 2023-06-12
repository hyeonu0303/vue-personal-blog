<template>
  <div class="container introBox min-vh-100">
    <div class="card introcard mt-5 p-4">
      <div class="row">
        <!-- 이미지입력 -->
        <div class="col-md-4 col-sm-12 introImg">
          <img src="../image/introImg.jpeg" alt="introImg">
        </div>
        <!--소개입력란-->
        <div class="col-md-8 col-sm-12" :class="{'text-white':modeCheck}">
          <div class="row w-100 h-50" >
            <h2>Hello World!</h2>
            <p class="m-0">개발을 시작한지 10개월된 컴소과 학생입니다<br>
              현재 목표는 웹페이지를 혼자 서비스해보는 겁니다!<br>
              방문해주셔서 감사합니다.😊
            </p>
          </div>
        </div>
      </div>
      <!--기술입력란-->
      <div class="row w-100 h-50 mt-4">
        <div class="col-md-12 col-sm-12 ">
          <h3 :class="{'text-white':modeCheck}">😎Tech Stack</h3>
        </div>
        <div class="row">
          <div class="col badge">
            <img src="https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5 Badge">
            <img src="https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS3 Badge">
            <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black" alt="CSS3 Badge">
            <img src="https://img.shields.io/badge/Vue-%234FC08D?style=for-the-badge&logo=Vue.js&logoColor=black" alt="Vue.js Badge">
            <img src="https://img.shields.io/badge/React-%2361DAFB?style=for-the-badge&logo=React&logoColor=black" alt="CSS3 Badge">
            <img src="https://img.shields.io/badge/Svelte-%23FF3E00?style=for-the-badge&logo=Svelte&logoColor=black" alt="CSS3 Badge">
            <img src="https://img.shields.io/badge/NodeJs-%23339933?style=for-the-badge&logo=Node.js&logoColor=black" alt="CSS3 Badge">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props:{
    modeCheck:Boolean
  }
}
</script>

<style>
  .introcard{
    background:#e0a9fe28;
  }
  .introImg{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .introImg img{
    width:100%;
    height:100%;
    border-radius:50%;
    margin:auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .badge {
    display:flex;
    flex-wrap: wrap;
    overflow: auto;
    padding:0 30px;
    justify-content: left;
  }
  
  @media (min-width: 1400px){
    .badge img{
      width:130px;
      height: 70%;
      border-radius:10px;
      margin-right:20px;
      margin-top:10px;
    }
  }
  
  @media (min-width: 1025px)and (max-width:1399px){
    .badge img{
      width:130px;
      height: 45%;
      border-radius:10px;
      margin-right:20px;
      margin-top:10px;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  .badge img {
      width: 20%;
      height: 40%; 
      margin-right:10px;
      margin-top:10px;
      border-radius:10px;
  }
}
@media (max-width: 768px) {
  .badge img {
    width: 30%;
    height: 30%; 
    margin-right:10px;
    margin-top:10px;
    border-radius: 10px;
  }
}
</style>