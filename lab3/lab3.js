//1
const random = (min, max) => {
    if (max == undefined) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10));
console.log(random(5));


//2
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const generateKey = (length, characters) => {
    let result = "";

    for (let i = 0; i < length; i++) {
        const index = random(0, characters.length - 1);
        result += characters[index];
    }

    return result;
}

console.log(generateKey(10,  characters)); 


//4
const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};
const inspectObject = (iface) => {
    const result = [];

    for (const key in iface) {
        if (typeof iface[key] === 'function') {
            result.push([key, iface[key].length]);
        }
    }

    return result;
}

console.log(inspectObject(iface));
