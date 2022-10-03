/* When objects are created through the constructor function and contain the nameproperty,
further objects created with the same constructor function will also have the same property,
 as shown below: */

function Movie(title) {
    this.title = title
}

const harryPotter = new Movie('Harry Potter')
const rushHour2 = new Movie('Rush Hour 2')
const fastAndFurious = new Movie('Fast And Furious')

console.log(harryPotter.constructor.name)
console.log(rushHour2.constructor.name)
console.log(fastAndFurious.constructor.name)

/* It sounds like typical class objects, but in reality, it avoids using classes altogether.
The prototype design pattern simply creates copies of existing functional objects as opposed to
defining brand - new objects. */

/* The biggest benefit of using the pattern in JavaScript is the performance boost gained compared to
object - oriented classes.This means that when you define functions inside an object, they will be
created by reference.In other words, all child objects will point to the same method instead of
creating their own individual copies! */

/* Here’s an example of the pattern in action: */


const Warrior = function (name) {
    this.name = name
    this.hp = 100
}

Warrior.prototype = {
    bash(target) {
        target.hp -= 15
    },
    omniSlash(target) {
        // The target's hp may not be under 50 or this attack will fail on the opponent
        if (target.hp < 50) return
        target.hp -= 50
    }
}
const sam = new Warrior('Sam')
const lenardo = new Warrior('Lenardo')

console.log(sam.bash === lenardo.bash) // true