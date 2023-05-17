import vueData from './vueData.js';
import jsData from './jsData.js';

var allData = [...vueData, ...jsData];

allData = allData.sort((a, b) => {
  // 날짜 문자열을 'YYYY,MM.DD'에서 'YYYY-MM-DD' 형식으로 변환
  const dateA = new Date(a.date.replace(/,/g, '-'));
  const dateB = new Date(b.date.replace(/,/g, '-'));
  
  return dateB - dateA;  // 최신 날짜순으로 정렬
});

console.log(allData);
export default allData;


