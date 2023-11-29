console.log("hello world"); //console에 출력

document.addEventListener("DOMContentLoaded", function(){
    const plusBtn = document.querySelector("#plusBtn");//js에서 변수 선언 시 사용
    const minusBtn = document.querySelector("#minusBtn");
    const squareBtn = document.querySelector("#squareBtn"); //제곱 버튼 추가
    const showIpt = document.querySelector("#showIpt");

    plusBtn.addEventListener("click", function(){
        showIpt.value = parseInt(showIpt.value) + 1 ;//value를 int형으로 바꿔주는 것 = parseInt
    }); //이벤트의 종류는 click, click 시 뒤의 function 실행
    minusBtn.addEventListener("click", function(){
        showIpt.value = parseInt(showIpt.value) - 1 ;
    });
    squareBtn.addEventListener("click", function(){
        showIpt.value = parseInt(showIpt.value) * parseInt(showIpt.value) ;
    });
}); //괄호 안에 파라미터 , 함수