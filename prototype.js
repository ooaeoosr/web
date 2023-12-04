// Person.prototype __proto__ << object.prototype
Person.prototype.getVersion = function(){
    return this.version; 
};
Person.prototype.version = 1.5;

//생성자 함수
//객체를 만들 용도로 사용
function Person(name,age) {
    //새로운 객체가 만들어지고 {}=> this binding
    // {__proto__: Person.prototype}
    //새로 만들어진 객체를 반환한다
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `이름 : ${this.name}, 나이: ${this.age}`;
    };
    this.showInfo = () => {
        console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
    };
    //return this;
}

//{__proto__ : Person.prototype, name: "kang", age:25};
const p = new Person("kang", 25);
//{__proto__ : Person.prototype, name: "gang", age:23};
const p2 = new Person("gang", 23);
console.log(p.getInfo());
p.showInfo();
// prototype chaining
// 자바스크립트 객체는 함수에서 객체의 프로퍼티를 접근하려고 하는데
// 객체 자신의 프로퍼티가 없을 경우 __proto__ 이용하여 탐색을 이어감
const v = p.getVersion();
console.log(v);
