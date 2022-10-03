/* The Command pattern encapsulates actions as objects.Command objects allow for loosely coupled systems
by separating the objects that issue a request from the objects that actually process the request.
These requests are called events and the code that processes the requests are called event handlers.
 */

/* The command pattern decouples the objects executing the commands from objects issuing the commands. */

const calculationMethods = {
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    }
};

const calculator = {
    execute: function (method, num1, num2) {
        if (!(method in calculationMethods)) return null;
        return calculationMethods[method](num1, num2);
    }
};

console.log(calculator.execute('add', 1, 2));
console.log(calculator.execute('subtract', 5, 2));
console.log(calculator.execute('multiply', 11, 2));
console.log(calculator.execute('divide', 10, 2));
console.log(calculator.execute('square root', 20));