document.addEventListener("DOMContentLoaded", function(){
    const animalArr = [{name: "Cucu", src: "squ.jpg", job : "도토리도둑 & 애교쟁이"},
                        {name: "Kitty", src: "cat.jpg", job : "생선도둑 & 집사브러커"}];

    const itemImg = document.querySelector("#itemImg");
    const itemName = document.querySelector("#itemName");
    const itemJob = document.querySelector("#itemJob");

    const firstBtn = document.querySelector("#firstBtn");
    const secondBtn = document.querySelector("#secondBtn");
    firstBtn.addEventListener("click", function(){
        itemImg.src = animalArr[0].src;
        itemName.innerHTML = animalArr[0].name;
        itemJob.innerHTML = animalArr[0].job;
    });
    secondBtn.addEventListener("click", function(){
        itemImg.src = animalArr[1].src;
        itemName.innerHTML = animalArr[1].name;
        itemJob.innerHTML = animalArr[1].job;
    });
}); //load가 다 되었을 때 함수 적용