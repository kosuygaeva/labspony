const array = () => {
    const items = [];

    const get = (index) => {
        return items[index];
    };

    get.push = (value) => {
        items.push(value);
    };

    get.pop = () => {
        return items.pop();
    };

    return get;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());