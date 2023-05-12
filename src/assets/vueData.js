export default[{
  title:'[Vue] v-if문법을 쓰는방법',
  subTitle:'props를 사용해서 부모의 데이터를 받는법을 알아봅시다.',
  content:`Vue에서 if문은 항상 if의 조건이 참일때 태그를 화면에 표출해준다.
          v-if문은 data에 boolean타입으로 true인지 false인지 입력을해주고,
          만약 checkModal:false로 데이터를 저장해주면
          <div v-if=="checkModal == true">로 했을때 div안의 내용이 보이지않게된다. 
          아직 checkModal은 false여서, 함수를 사용해 이벤트가 발생할때 
          checkModal을 true로 바꿔주면 div가 안에 내용이 보이게 되는것이다.`,
  date:'2023.05.02',
  number:0,
},{
  title:'[Vue] v-for문법을 쓰는방법',
  subTitle:'props를 사용해서 부모의 데이터를 받는법을 알아봅시다.',
  content:'Vue에서 for문은 v-for="(a,i) in 3" :key="i"\n이런식으로 사용한다.',
  date:'2023,05.03',
  number:1,
}]