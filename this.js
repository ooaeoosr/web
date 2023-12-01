// this 는 호출에 관련
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function(){  //getInfo 또한 프로퍼티, 함수 레퍼런스 가지고 있음
        return `이름은 : ${this.name}, 나이는 ${this.age}`; 
    }
}
// new + 함수 호출(생성자)
// {} 객체가 생성이 되고, this에 바인딩됨(연결됨) -> 새로 생성된 객체를 this라는 걸로 접근할 수 있게 됨
// 객체는 property를 동적으로 할 수 있다 -> this 또한 객체
const p = new Person("hong",25);
console.log(p.getInfo());
console.log(p);

const p2 = new Person("king",87);
console.log(p2);

//지금까지는 생성자 함수를 호출했을 때 this임

function foo() {
    console.log(this.age);
}

// 함수는 function 객체
// Function.prototype.apply 라는 함수가 있음
foo.apply(p);
foo.apply(p2);

p.foo = foo; 
// this <= Person {name: "hong", age: 25}
p.foo(); //객체.함수 호출하면 그 함수의 this는 앞쪽에 있는 객체가 됨?

//this <= window
foo();

// 그냥 함수 호출 시 this는 window or null
//  생성자 함수로 호출되었을 때 this는 새로 만들어진 빈 객체가 this로 바인딩 된다

