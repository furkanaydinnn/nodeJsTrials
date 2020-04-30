const names = {
    name1: 'name1',
    name2: 'name2',
    name3:'name3',
    name5:{
        surname:'surname1'
    }
};

/*const name1 = names.name1;
const name2 = names.name2; */

const {name1,name5:{surname}} = names;

console.log(name1);
console.log(surname);


