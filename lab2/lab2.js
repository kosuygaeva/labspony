//1-3
let name = 'Eva';
const yearOfBirth = 2010;
const greeting = (name) => {
    console.log('hello, ' + name);
};
console.log(name);
console.log(yearOfBirth); 
greeting('Eva');
//4
const range = (start, end) => {
const numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
};
console.log(range(15, 30));
//5
const rangeOdd = (start, end) => {
const numbers = [];
for (let i = start; i <= end; i++){
 if (i % 2 !== 0) {
numbers.push(i);
}
}
return numbers;
};
console.log(rangeOdd(15, 30));
//6
const average = (a, b) => {
    return (a + b) / 2;
};
const square = (x) => {
  return (x * x);
};
const cube = (x) => {
  return (x * x * x);
};

const calculate = () => {
  const results = [];
for (let i = 0; i < 10; i++) {
  const squared = square(i);
  const cubed = cube(i);
  const result = average(squared, cubed);
results.push(result)
}
return results;
}
console.log(calculate()) 
//7
const fn = () => {
const namecnst = { name: 'Sevika'};
let namelt = { name: 'Vi'};

namecnst.name = 'Caitlyn';
namelt.name = 'Powder';
// namecnst = {'Jinx'}; // видає помилку
namelt = { name: 'Mel'}; 
console.log(namecnst);
console.log(namelt);
}
fn();
//8
const createUser = (name, city) => {
    return {
        name: name,
        city: city
    };
};

const user = createUser('Robin', 'Obukhiv');

console.log(user);
//9
const phones = [
    { name: 'Clervie', phone: '+380445554433' },
    { name: 'Phrolova', phone: '+380501112233' },
    { name: 'Lily', phone: '+380671234567' }
];

const findPhoneByName1 = (name) => {
    for (let i = 0; i < phones.length; i++) {
        if (phones[i].name === name) {
            return phones[i].phone;
        }
    }
}

console.log(findPhoneByName1('Phrolova'));
//10
 const hash = {
    'Silco Ddl': '+380445554433',
    'Eva': '+380501112233',
    'Robin': '+380671234567'
};

const findPhoneByName = (name) => {
    return hash[name];
};

console.log(findPhoneByName('Robin'));