let human = {
    age  : 26,
    name : "furki",
    act  : function (){
        console.log("walking");
    }
};
human.weight = 80;

let animal = {
    name : "Lion",
    weight : 150,
    color : "black",
    act : function () {
        console.log("running");
    }
};

let myFunc = function(){
  console.log("Merhaba");
};

console.log(animal.act());