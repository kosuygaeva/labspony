const removeNames = (array1, ...names) => {
    for (const name of names) {
    const index = array1.indexOf(name);
        if (index !== -1) {
            array1.splice(index, 1);
        }
    }
};
const array = ['Lily', 'Phrolova', 'Calcharo', 'Rebecca', 'Lucy', 'Zani', 'Sigrika', 'Suisui' ];
removeNames(array, 'Calcharo','Lucy','Zani');
console.log(array);