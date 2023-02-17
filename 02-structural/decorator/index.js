/* This pattern is used to dynamically extend or even change the behavior of an object during run - time.
 The effect might seem a lot like class inheritance, but this pattern allows you to switch between
 behaviors during the same execution, which is something inheritance does not.

 Attach additional responsibilities to an object dynamically keeping the same interface.
 Decorators provide a flexible alternative to subclassing for extending functionality. */


 const Animal = function(type) {
    this.type = type || 'dog';
  }

  const dog = new Animal('dog');
  const cat = new Animal('cat');

  dog.bark = function() {
    console.log('woof woof!');
    return this;
  }

  cat.meow = function() {
    console.log('meow meooooooow!');
    return this;
  }

  dog.bark();
  cat.meow();