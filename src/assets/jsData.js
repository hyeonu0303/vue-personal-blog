export default[{
  title:'[Vue] v-if문법을 쓰는방법',
  subtitle:'props를 사용해서 부모의 데이터를 받는법을 알아봅시다.',
  content:`>v에서는 if문을 어떻게사용할까?
\`\`\`html
  <div v-if="check == true">
    <p>Hello World!</p>
  </div>
  <div>
    <button v-on:click="check = true"></button>
  </div>
  \`\`\`
  >그럼 데이터는?
  \`\`\`javascript
    export default{
      name:'app',
      data(){
        retrun{
          check:false
        }
      }
    }
  \`\`\`
  Vue에서 if문은 ""안에 조건을 넣어 결과가 true일때만 div안의 내용이 보이게된다
`
          ,
  date:'2023.05.02',
  link:'vuedetail/0',
},
]