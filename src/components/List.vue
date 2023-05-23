<template>
  <!--라우터뷰에다가 거기로가게끔 설정-->
    <ul class="dropdown-menu">
      <li><router-link to="/jslist" class="dropdown-item">JavaScript</router-link></li>
      <li><router-link to="/vuelist" class="dropdown-item">Vue</router-link></li>
      <li><router-link to="/devlist" class="dropdown-item">개발일지</router-link></li>
    </ul>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props:{
    
  },
  methods:{

  },
}
</script>

<style>

</style>