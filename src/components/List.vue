<template>
  <!--라우터뷰에다가 거기로가게끔 설정-->
    <ul class="dropdown-menu">
      <li><router-link to="/jslist" class="dropdown-item">JavaScript</router-link></li>
      <li><router-link to="/vuelist" class="dropdown-item">Vue</router-link></li>
      <li><a class="dropdown-item" href="#">Svelte</a></li>
      <li><a class="dropdown-item" href="#">Python</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
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