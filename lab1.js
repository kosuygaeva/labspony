function inc (n) {
return n+1 
}

const a = 5;
const b = inc(a);
console.dir({a, b});


function inc(num) {
return num.m = num.m+1
}
const object = {
m: 6
}
inc(object)
console.dir(object);

const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 'bow', 'pony'] 
const objectTypes = { number: 0, string: 0, boolean: 0} 

for (const element of arr) {
const type = typeof element 
 if (type in objectTypes) {
objectTypes [type] += 1
}
}

console.dir(objectTypes) 
const objectTypesDynamic = {
} 
const arraySecond = [67, 69, 11037, false, true, true, 'button', 'coffee'] 
 for (const element of arraySecond) {
const typeDynamic = typeof element 
if (objectTypesDynamic[typeDynamic] === undefined) {
objectTypesDynamic[typeDynamic] = 1
}
else {
objectTypesDynamic[typeDynamic] += 1
}
}
console.dir(objectTypesDynamic)
