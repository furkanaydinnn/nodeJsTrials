/*const asenkronFunc = function (sayi,callback) {
    const sonuc = sayi +4;
    callback(sonuc);
};

asenkronFunc(5,function(sonuc){
    console.log(sonuc);
    asenkronFunc(6,function (sonuc) {
        console.log(sonuc);
        asenkronFunc(7,function (sonuc) {
            console.log(sonuc);
        })
    })
});*/


const myAsenkronFunc = (sayi) => {
    return new Promise((resolve,reject) =>{
        if(sayi === 1)
            resolve("OK");
        else
            reject("ERROR!!");
    })
};

myAsenkronFunc(1)
    .then((data)=>{
        console.log(data);
        return 2;
    })
    .then((data)=>{
        console.log(data);
        return 4;
    })
    .catch((error)=>{
        console.log(error);
    });