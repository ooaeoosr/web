//var, const, let  <- 자바스크립트에서 변수 선언
// var : 선언 후에 값을 바꿀 수 있음OO
// const :  값 할당 후 바꿀 수 없음XX
// let : 선언 후에 값을 바꿀 수 있음OO

const person = {name : "oh", age : 23}; //콜론 앞이 프로퍼티, 값   //json

console.log(person.name);
console.log(person.age);

const result = concat(person);

console.log(result);

function concat(p) { //객체를 받는데 파라미터 p를 받는다?
    return `이 사람의 정보는 : ${p.name} ${p.age}` ;  // `<= 백틱? string 템플릿? 문자열하고 변수가 있을 때 쉽게 문자열을 만들 수 있음  
}

//배열,  배열 또한 객체
const personArr = [{name : "kim", age : 12}, {name: "kang", age : 25}];

console.log(personArr[0]); // 배열 0인덱스의 요소를 접근 
console.log(personArr[1]);

for(const p of personArr) { //personArr 중의 하나(p)
    console.log(p);
}

modify(person); // 인자로 person 을 넘겨줌

console.log(person);

function modify(p) { //p는 파라미터
    p.name = "hwang";
}

// js의 객체들은 reference type? 바꾸면 같이 바뀐다


//js는 동적으로 property 생성 가능
const p = {};
p.name = "kim";
const o = new Object();
o.name = "kang";
