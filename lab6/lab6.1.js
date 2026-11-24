const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All pipe arguments should be functions');
    }
  }
   return (x) => fns.reduce((value, fn) => fn(value), x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(pipe(inc, twice, cube)(5)); 
console.log(pipe(inc, inc)(7)); 

try {
    pipe(inc, 7, cube);
} catch (e) {
    console.log(e.message);
}