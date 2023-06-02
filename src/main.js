import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.js'
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
//mitt
import mitt from 'mitt'
let emitter = mitt()
//prismjs

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';


//marked
import {marked} from 'marked';

marked.setOptions({
  mangle: false, // mangle 경고 해제
  headerIds: false, // headerIds 경고 해제
})
// 전역 디렉티브 등록
//marked
const app=createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon) 
app.use(router)
app.config.globalProperties.$Prism = Prism;
app.config.globalProperties.$marked = marked;
app.config.globalProperties.emitter = emitter;
app.mount('#app')

/*
marked사용법
# 제목
*이탤릭체*
**굵은글씨**
~~취소선~~
`[OpenAI](https://openai.com)` <- 링크생성
![대체 텍스트](이미지링크) <-
*/