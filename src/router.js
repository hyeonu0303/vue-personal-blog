import { createWebHistory, createRouter } from "vue-router";

import Home from './components/home.vue';
import allPost from './components/allPost.vue';
import vueList from './views/vue/vueList.vue';
import vueDetail from './views/vue/vueDetail.vue';
import jsList from './views/javascript/jsList.vue';
import jsDetail from './views/javascript/jsDetail.vue';
import devList from './views/developeDay/devList.vue';
import devDetail from './views/developeDay/devDetail.vue';
import cssList from './views/CSS/cssList.vue';
import cssDetail from './views/CSS/cssDetail.vue';
//변수list -> 변수detail
//


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/allPost",
    component: allPost,
  },
  {
    path: "/jslist",
    component: jsList,
    
  },
  {
    path: "/jsdetail/:js",
    component: jsDetail,
  },
  {
    path: "/vuelist",
    component: vueList,
    
  },
  {
    path:"/vuedetail/:vue",
    component:vueDetail,
  },
  {
    path:"/devlist",
    component: devList,
  },
  {
    path:"/devdetail/:dev",
    component:devDetail
  },
  {
    path:"/csslist",
    component:cssList,
  },
  {
    path:"/cssDetail/:css",
    component:cssDetail
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
