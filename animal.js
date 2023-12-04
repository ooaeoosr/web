// 즉시실행함수(IIFE)
// 선언하면서 실행
(function() {
    function Animal(species, livingPlace){
        this.typeOfSpecies = species;
        this.whereLives = livingPlace;
        this.move = function() {
            console.log("animal moves");
        }
        this.describe = function() {
            console.log("species "+this.typeOfSpecies);
            console.log("whereLives "+this.whereLives);
        };
    }
        var dog = new Animal("개과", "육지");
        var cat = new Animal("고양이과","육지");
        dog.describe();
        cat.describe();
    
})();