import { createWebHistory, createRouter } from "vue-router";

//라이브러리명을 임포트해봄 createRouter->라우터형식 
import List from './components/List.vue';
import Home from './components/home.vue';
import Detail from './components/detail.vue';
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    //detail/아무문자 :작명(정규식문법 \\d+ <- 숫자)
    //:id* 파라미터를 중복해라 vue-router4 참고
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
];

//createRouter()안에 설정 집어넣으면 됨
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 