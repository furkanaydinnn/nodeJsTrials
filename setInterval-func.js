let sayi = 1;
let myInterval = setInterval(function () {
    if(sayi == 5)
        clearInterval(myInterval);
    console.log("selam :" + sayi);
    sayi++;
},1000);