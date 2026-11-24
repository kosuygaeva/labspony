
const seq = (...args) => {
    const functions = [...args];

    const chain = (value) => {

        if (typeof value == "number") {
            for (let i = functions.length - 1; i >= 0; i--) {
                value = functions[i](value);
            }

            return value;
        }

        if (typeof value == "function") {
            functions.push(value);
            return chain;
        }
    }

    return chain;
}

console.log(
    seq(x => x + 7)(x => x * 2)(5)
); 

console.log(
    seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); 