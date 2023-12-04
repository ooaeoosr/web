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

// (function(){
//     let funcArr = [];
//     var i;
//     for(var i=0; i<10; i++){
//         funcArr.push(function() {
//             return i;
//         });
//     }
//     // i = 10
//     for(let func of funcArr){
//         console.log(func());
//     }
// })();
//위의 내용은 10만 출력

(function(){
    let funcArr = [];
    for(let i=0; i<10; i++){
        funcArr.push(function() {
            return i;
        });
    }
    // i = 10
    for(let func of funcArr){
        console.log(func());
    }
    //화살표 함수, lambda
    const func = (x,y) => x+y;
    console.log(func(1,2));
})();// 지역스코프 let?

