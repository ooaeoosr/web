// 재할당 안됨, 초기화하면 끝.
// 블럭 스코프
// 선언문이 실행되기 전에 사용 X
const a = 1;
// a = 2;

let b = 1;
b = 2;

// 함수 스코프
// 선언문이 실행되기 전에 사용 가능
var c = 1;
c = 3;

console.log(b);