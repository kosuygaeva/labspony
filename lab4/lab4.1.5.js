const suma = (...args) => {
    return args.reduce((result, number) => result + number, 0);
}
console.log(suma(2, 3, 4, 7)); 