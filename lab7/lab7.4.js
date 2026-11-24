const difference = (array6, array9) => {
    return array6.filter(name => !array9.includes(name));
};
const array1 = ['Lily', 'Phrolova', 'Calcharo', 'Rebecca', 'Lucy', 'Zani', 'Sigrika', 'Suisui' ];
const array2 = ['Calcharo', 'Lucy', 'Zani'];
const result = difference(array1, array2);
console.log(result);

const array3 = ['Obukhiv', 'Kyiv'];
const array4 = ['Obukhiv', 'London', 'Cherkasy'];
const result1 = difference(array3, array4);
console.log(result1);