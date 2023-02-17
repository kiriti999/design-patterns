// Another way of using the Prototype Design pattern is by specifying the prototype in the "class".
// You can see an example below:


const atvPrototype = {
    mud: () => {
        console.log('Mudding');
    }
};

function Atv(make, model, year) {
    function constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    constructor.prototype = atvPrototype;

    let instance = new constructor(make, model, year);
    return instance;
};

const atv1 = Atv();
const atv2 = Atv('Honda', 'Rincon 650', '2018');

// On the same note, both instances have access to whatever is defined in the atvPrototype object.
// Moreover, they point to the same function, instead of having their "mud" function.

// In conclusion, the Prototype design pattern is useful, especially when you want your objects to
// share the same functions or properties.It also acts as a blueprint for all your new objects.

// To recap:

// JavaScript is a Prototype - baed language.
// It uses prototypal inheritance.
// Each object inherits from other objects.
// New objects are created by following a blueprint, called Prototype.
// A function defined on the prototype is inherited by all new classes.
// The new classes point to the same function, rather than having individual copies.