const slugify = require('slugify');

const text = 'şampiyon trabzonspor merhaba dunya'
const slugText = slugify(text);
console.log(slugText);