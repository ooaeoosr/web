//변수 선언
const [a,b] = [1,2]; //배열의 비구조화
const {name, age} = {name:"hong", age:25}; //객체의 비구조화

console.log(a,b,name, age);

foo({key: "pro1", value:"abcd"}); //비구조화 할당

function foo({key,value}){
    console.log(key, value);
}
