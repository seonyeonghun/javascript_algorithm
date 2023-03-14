// 다음과 같은 변수의 데이터가 있다고 하자

const scores = [100, 75, 80, 90, 85];
const N = scores.length;
let sum = 0;
for(var i=0; i<N; i++) {
    if(scores[i] >= 80) { // 80점 이상일때만
        sum += scores[i];
    }
}
console.log(sum);



// 디버깅 - 현재 파일 실행 (node.js)
// F9 : 중단점 설정
// F5 : 중단점까지 실행
// F11 : 한 단계씩 코드 실행
// F5 : 디버깅 끝