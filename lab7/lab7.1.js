 const removeName = (array, name) => {
    const index = array.indexOf(name);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
const array = ['Lily', 'Phrolova', 'Calcharo', 'Rebecca', 'Lucy', 'Zani', 'Sigrika', 'Suisui' ];
removeName(array, 'Calcharo');
console.log(array);


 
 

 