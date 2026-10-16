//1
function random(min, max) {
    if (max == undefined) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10));
console.log(random(5));
//2
function generateKey(length, characters) {
    let result = "";

    for (let i = 0; i < length; i++) {
        const index = random(characters.length - 1);
        result += characters[index];
    }

    return result;
}

console.log(generateKey(10, "697b1s10e37lian"));
//4
const iface = {
    start: function () {},
    move: function (x, y) {},
    attack: function (target, damage) {},
    name: "Robin",
    stop: function (force) {}
};

function inspectObject(iface) {
    const result = [];

    for (const key in iface) {
        if (typeof iface[key] === "function") {
            result.push([key, iface[key].length]);
        }
    }

    return result;
}

console.log(inspectObject(iface));
