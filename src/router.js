import { createWebHistory, createRouter } from "vue-router";

import Home from './components/home.vue';
import allPost from './components/allPost.vue';
<<<<<<< HEAD
import vueList from './components/vue/vueList.vue';
import vueDetail from './components/vue/vueDetail.vue';
import jsList from './components/javascript/jsList.vue';
import jsDetail from './components/javascript/jsDetail.vue';
=======
import vueList from './views/vue/vueList.vue';
import vueDetail from './views/vue/vueDetail.vue';
import jsList from './views/javascript/jsList.vue';
import jsDetail from './views/javascript/jsDetail.vue';
import devList from './views/developeDay/devList.vue';
import devDetail from './views/developeDay/devDetail.vue';
//변수list -> 변수detail
//

>>>>>>> test

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/allpost",
    component: allPost,
  },
  {
    path: "/jslist",
    component: jsList,

  },
  {
    path: "/jsdetail/:js(\\d+)",
    component: jsDetail, 
  },
  {
    path: "/vuelist",
    component: vueList 
  },
  {
<<<<<<< HEAD
    path: "/vuedetail/:vue(\\d+)",
    component: vueDetail 
  },
  ]
=======
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
  }
]
>>>>>>> test


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
