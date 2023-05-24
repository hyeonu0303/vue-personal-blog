import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 라우터만든거 from './router.js'

createApp(App).use(라우터만든거).mount('#app')


/*
marked사용법
# 제목
*이탤릭체*
**굵은글씨**
~~취소선~~
`[OpenAI](https://openai.com)` <- 링크생성
![대체 텍스트](이미지링크) <-
*/