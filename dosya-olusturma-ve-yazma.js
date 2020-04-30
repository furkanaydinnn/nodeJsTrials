const fs = require('fs');

fs.appendFile('dnm.txt','furkan',(err)=>{
    if(err)
        throw  err;

    console.log("dosyaya ekleme yapıldı");
});