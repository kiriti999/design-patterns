// REFER:
https://dev.to/vovaspace/dependency-injection-in-typescript-4mbf

// Dependency Injection(DI) is a design pattern used to implement IoC.
// It allows the creation of dependent objects outside of a class and provides those objects to a
// class through different ways.Using DI, we move the creation and binding of the dependent objects
// outside of the class that depends on them.

// The Dependency Injection pattern involves 3 types of classes.

// Client Class: The client class (dependent class) is a class which depends on the service class
// Service Class: The service class (dependency) is a class that provides service to the client class.
// Injector Class: The injector class injects the service class object into the client class.

// Types of Dependency Injection

// Constructor Injection: In the constructor injection, the injector supplies the service(dependency)
// through the client class constructor.

// Property Injection: In the property injection(aka the Setter Injection), the injector supplies the
// dependency through a public property of the client class.

// Method Injection: In this type of injection, the client class implements an interface which declares
// the method(s) to supply the dependency and the injector uses this interface to supply the dependency
// to the client class.

// Let's look at a function that takes two numbers and returns a random number in a range:
// const getRandomInRange = (min: number, max: number): number =>
//     Math.random() * (max - min) + min;

/* But you can see that the function depends not only on the arguments,// but also on the Math.random function.
If Math.random is not defined, our getRandomInRange function won't work either.
That is, getRandomInRange depends on the functionality of another module.
Therefore Math.random is also a dependency. */

// Let's explicitly pass the dependency through arguments:
// const getRandomInRange = (
//     min: number,
//     max: number,
//     random: () => number,
// ): number => random() * (max - min) + min;

// Now the function uses not only two numbers, but also a random function that returns number.
// We will call the getRandomInRange like this:
// const result = getRandomInRange(1, 10, Math.random);

// To avoid passing Math.random all the time, we can make it the default value for the last argument.
const getRandomInRange = (
    min: number,
    max: number,
    random: () => number = Math.random
): number => random() * (max - min) + min;

// This is the primitive implementation of the Dependency Inversion.
// We pass to our module all the dependencies it needs to work.

// Why Is It Needed?

// Testability
/* When all dependencies are explicitly declared, the module is easier to test.
We can see what needs to be prepared to run a test.We know which parts affect the operation of this module,
so we can replace them with some simple implementation or mock implementation if needed. */

/* Mock implementations make testing a lot easier, and sometimes you can't test anything at all without them.
As in the case of our function getRandomInRange, we cannot test the final result it returns,
because it is....random. */

/*
 * We can create a mock function
 * that will always return 0.1 instead of a random number:
 */
const mockRandom = () => 0.1;

/* Next, we call our function by passing the mock object as its last argument: */
const result = getRandomInRange(1, 10, mockRandom);

/*
 * Now, since the algorithm within the function is known and deterministic,
 * the result will always be the same:
 */
console.log(result === 1); // -> true

/* Replacing an Dependency With Another Dependency
Swapping dependencies during tests is a special case.
In general, we may want to swap one module for another for some other reason. */

// If the new module behaves the same as the old one, we can replace one with the other:
const otherRandom = (): any => {
    /* Another implementation of getting a random number... */
};

const result2 = getRandomInRange(1, 10, otherRandom);

// Dependency Injection
// Let's write yet another counter. Our counter can increase and decrease. And it also logs the state of.
// class Counter {
//     public state: number = 0;

//     public increase(): void {
//         this.state += 1;
//         console.log(`State increased. Current state is ${this.state}.`);
//     }

//     public decrease(): void {
//         this.state -= 1;
//         console.log(`State decreased. Current state is ${this.state}.`);
//     }
// }
// Here we run into the same problem as before — we use not only the internal state of the class instance, but also another module — console. We have to inject this dependence.

// If in functions we passed dependencies through arguments, then in classes we will inject dependencies through the constructor.

// Our Counter class uses the log method of the console object. This means that the class needs to pass some object with the log method as a dependency. It doesn't have to be console — we keep in mind the testability and replaceability of modules.

// interface Logger {
//     log(message: string): void;
// }

// class Counter {
//     constructor(
//         private logger: Logger,
//     ) { }

//     public state: number = 0;

//     public increase(): void {
//         this.state += 1;
//         this.logger.log(`State increased. Current state is ${this.state}.`);
//     }

//     public decrease(): void {
//         this.state -= 1;
//         this.logger.log(`State decreased. Current state is ${this.state}.`);
//     }
// }
// We will then create instances of this class as follows:
// const counter = new Counter(console);
// And if we want to replace console with something else, we just have to make sure that the new dependency implements the Logger interface:
// const alertLogger: Logger = {
//     log: (message: string): void => {
//         alert(message);
//     },
// };

// const counter = new Counter(alertLogger);

// Automatic Injections and DI Containers

/* Now the class doesn't use implicit dependencies. This is good, but this injection is still awkward: you have to add references to objects by hand every time, try not to mix up the order if there are several of them, and so on…
This should be handled by a special thing — a DI Container. In general terms, a DI Container is a module that only provides dependencies to other modules.
The container knows which dependencies which module needs, creates and injects them when needed. We free objects from the obligation to keep track of their dependencies, the control goes elsewhere, as the letters S and D in SOLID imply.
The container will know which objects with which interfaces are required by each of the modules. It will also know which objects implement those interfaces. And when creating objects that depend on such interfaces, the container will create them and access them automatically. */

// Automatic Injections in Practice
// We will use the Brandi DI Container, which does exactly what we described above.

// Let's begin by declaring the Logger interface and creating its ConsoleLogger implementation:
/* Logger.ts */

// export interface Logger {
//     log(message: string): void;
// }

// export class ConsoleLogger implements Logger {
//     public log(message: string): void {
//         console.log(message)
//     }
// }
// Now we need to get to know the tokens. Since we are compiling TypeScript into JavaScript, there will be no interfaces and types in our code. Brandi uses tokens to bind dependencies to their implementations in JavaScript runtime.
/* tokens.ts */



// FOR COMPLETE INFO REFER:
// https://dev.to/vovaspace/dependency-injection-in-typescript-4mbf