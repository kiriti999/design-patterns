/* JavaScript is a Prototype - based language, which means it uses Prototypal inheritance.
That means each object inherits from other objects.

Thus, we create new objects by cloning the prototype's values, which can also be called a sample object.
That means the prototype acts as a blueprint for the new objects.One significant benefit of using this
design pattern is that functions defined in objects are created by reference.

That means all objects point to the same function instead of having their copies of that function.
In simpler terms, the prototype's functions are available to all the objects inherited from the prototype.

Ok, enough talk. Let's see an example so you can understand better what this design pattern is about.
We continue with the car scenario. */

const atv = {
    make: 'Honda',
    model: 'Rincon 650',
    year: 2018,
    mud: () => {
        console.log('Mudding');
    }
};

const secondATV = Object.create(atv);

// To create a new object from a prototype, we can use the Object.create() method.
// The second object - secondATV - has the same values as the first object - atv.
// To make sure it works correctly,try calling the "mud" function or printing any object property.

secondATV.mud();