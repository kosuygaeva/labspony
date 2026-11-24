const suma = (...args) => {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}
console.log(suma(1, 2, 6, 7)); 