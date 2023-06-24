import { createWebHistory, createRouter } from "vue-router";
import Home from './components/home.vue';
import allPost from './components/allPost.vue';
import introduce from './views/introduce.vue'
import vueList from './views/vue/vueList.vue';
import vueDetail from './views/vue/vueDetail.vue';
import jsList from './views/javascript/jsList.vue';
import jsDetail from './views/javascript/jsDetail.vue';
import devList from './views/developeDay/devList.vue';
import devDetail from './views/developeDay/devDetail.vue';
import cssList from './views/CSS/cssList.vue';
import cssDetail from './views/CSS/cssDetail.vue';
import nodeList from './views/Nodejs/nodeList.vue';
import nodeDetail from './views/Nodejs/nodeDetail.vue';
import reactList from './views/react/reactList.vue';
import reactDetail from './views/react/reactDetail.vue';
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
    path: "/introduce",
    component: introduce
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
    path:"/cssdetail/:css",
    component:cssDetail
  },
  {
    path:"/nodelist",
    component:nodeList,
  },
  {
    path:"/nodedetail/:node",
    component:nodeDetail
  },
  {
    path:"/reactlist",
    component:reactList
  },
  {
    path:"/reactdetail/:react",
    component:reactDetail
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
