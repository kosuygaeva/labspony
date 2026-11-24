const suma = (...args) => {
    let result = 0;
    for (const number of args) {
        result += number;
}
    return result;
}
console.log(suma(1, 2, 3, 5)); 