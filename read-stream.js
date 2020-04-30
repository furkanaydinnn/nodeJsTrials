const fs = require('fs');
const file = 'video.mp4';

let progress = 0;
const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4');

fs.stat(file, (err, data) => {
    const total = data.size;
    console.log(total);
    readStream.on('data', (chunk) => {
        progress += chunk.length;
        console.log(Math.round((100 * progress) / total) + '%');
    });

    readStream.pipe(writeStream);

    writeStream.on('finish',()=>{
        console.log("new file created");
    });
});