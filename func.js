//global scope
const x = 1;
const y = 2;
const name = "kang"; //변수 지정시 type 설정이 없음

let z;
foo(); //함수 호출

const f = function(){
    console.log(`anonymous function`);
}; //함수에 이름이 없어서 변수 f로 접근해야 함


f();

function foo() {
    console.log(`foo`);
}

//js에서 실행 가능한 것 : global, function

//lambda
const result = operator((x,y)=>{
    return x + y;
},1,2); //() 파라미터 , {}바디

// const result = operator((x,y)=>x+y, 1,2);    위에랑 동일

const result1 = operator(function(x,y){
    return x - y;
}, 2, 3);

function operator(opFunc, x, y) {
    return opFunc(x,y);
}

console.log(result);
console.log(result1);

const c = outer();

console.log(c());
console.log(c());
console.log(c()); 

//동일한 함수를 실행하더라도 다른 변수를 사용해서 실행했으므로 다른 실행 환경이다.
const d = outer();

console.log(d());
console.log(d());
console.log(d()); 

//closure
// 내부 함수가 외부 함수의 변수를 사용하고 내부 함수의 레퍼런스가 살아있을 때
// 외부 함수의 식별자 정보(변수,함수) 사라지지 않고 유지됨
function outer() { //외부 함수
    let counter = 0;
    return function(){ //내부 함수
        counter++;
        return counter;
    }; 
}