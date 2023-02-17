// The Abstract Factory Pattern usually defines the interfaces of a collection of factory methods,
// without specifying concrete products.This allows an entire factory to be replaceable,
// in order to produce different products following the same production outline:

// REFER Image:
https://static.packt-cdn.com/products/9781785280832/graphics/image_03_002.jpg

abstract class AbstractProductA {
    abstract methodA(): void;
    abstract methodB(): void;
}

abstract class AbstractProductB {
    abstract methodA(): void;
    abstract methodB(): void;
}

class ProductA extends AbstractProductA {
    constructor(value: String) {
        super();
        console.log(value);
    }
    methodA(): void { }
    methodB(): void { }
}

class ProductB extends AbstractProductB {
    constructor(value: String) {
        super();
        console.log(value);
    }
    methodA(): void { }
    methodB(): void { }
}

abstract class AbstractFactory {
    abstract createProductA(): AbstractProductA;
    abstract createProductB(): AbstractProductA;
}

class NewYorkFactory extends AbstractFactory {
    createProductA(): ProductA {
        return new ProductA('ProductA made in New York');
    }

    createProductB(): ProductB {
        return new ProductB('ProductB made in New York');
    }
}

class CaliforniaFactory extends AbstractFactory {
    createProductA(): ProductA {
        return new ProductA('ProductA made in California');
    }

    createProductB(): ProductB {
        return new ProductB('ProductB made in California');
    }
}

(function main() {
    const nyFactory = new NewYorkFactory();
    nyFactory.createProductA();
    nyFactory.createProductB();

    const calFactory = new CaliforniaFactory();
    calFactory.createProductA();
    calFactory.createProductB();
})();