const compose = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error('All compose arguments should be functions');
        }
    }

    const errorHandlers = [];

    const f = (x) => {
        let value = x;
        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                value = fns[i](value);
            }
        } catch (error) {
            for (const handler of errorHandlers) {
                handler(error);
            }
            return undefined;
        }
        return value;
    };

    f.on = (event, handler) => {
        if (event === 'error') {
            errorHandlers.push(handler);
        }
    };

    return f;
};

const inc = (x) => x + 1;
const twice = (x) => x * 2;
const fail = () => {
    throw new Error('Function failed!');
};

const f1 = compose(inc, twice);
console.log(f1(5)); 

const f2 = compose(inc, fail, twice);
f2.on('error', (e) => console.log('error:', e.message));
console.log(f2(5)); 