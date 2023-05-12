import { createWebHistory, createRouter } from "vue-router";

import Home from './components/home.vue';
import allPost from './components/allPost.vue';
import vue_List from './components/vue/vueList.vue';
import vue_Detail from './components/vue/vueDetail.vue';
import jsList from './components/javascript/jsList.vue';
import js_Detail from './components/javascript/jsDetail.vue';

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
    path: "/detail/:id(\\d+)",
    component: js_Detail, 
  },
  {
    path: "/vuelist",
    component: vue_List 
  },
  {
    path: "/detail/:id(\\d+)",
    component: vue_Detail 
  },
  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
