function soyle(text,func){
    console.log(text);
    func();
}

function cayDemle(){
    console.log("cay demleniyor..");
}

soyle("merhaba",cayDemle);


soyle("selam",function () {
    console.log("kahve icelim..")
});

soyle("merhaba",function(){
    console.log("süt icelim..");

});