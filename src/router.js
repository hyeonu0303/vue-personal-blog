import { createWebHistory, createRouter } from "vue-router";

import Home from './components/home.vue';
import allPost from './components/allPost.vue';
import vueList from './components/vue/vueList.vue';
import vueDetail from './components/vue/vueDetail.vue';
import jsList from './components/javascript/jsList.vue';
import jsDetail from './components/javascript/jsDetail.vue';
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
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
