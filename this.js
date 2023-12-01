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