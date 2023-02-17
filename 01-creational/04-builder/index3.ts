// The Builder Pattern is a creational pattern whose intent is to separate the construction of a complex object
// from its representation so that you can use the same construction process to create different representations.

// The Builder Pattern tries to solve,

// How can a class create different representations of a complex object?
// How can a class that includes creating a complex object be simplified ?

// The Builder and Factory patterns are very similar in the fact they both instantiate new objects at runtime.
// The difference is when the process of creating the object is more complex, so rather than the Factory returning
// a new instance of ObjectA, it calls the builders' director constructor method ObjectA.construct()
// that goes through a more complex construction process involving several steps.Both return an Object / Product.

export class House {
   doors = 0
   windows = 0
   wallMaterial = ''
   buildingType = ''

   construction(): string {
      return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
   }
}

interface IHouseBuilder {
   house: House
   setBuildingType(buildingType: string): this
   setWallMaterial(wallMaterial: string): this
   setNumberDoors(number: number): this
   setNumberWindows(number: number): this
   getResult(): House
}

export default class HouseBuilder implements IHouseBuilder {
   house: House

   constructor() {
      this.house = new House()
   }

   setBuildingType(buildingType: string): this {
      this.house.buildingType = buildingType
      return this
   }

   setWallMaterial(wallMaterial: string): this {
      this.house.wallMaterial = wallMaterial
      return this
   }

   setNumberDoors(number: number): this {
      this.house.doors = number
      return this
   }

   setNumberWindows(number: number): this {
      this.house.windows = number
      return this
   }

   getResult(): House {
      return this.house
   }
}

export class IglooDirector {
   static construct(): House {
      // Note that in this IglooDirector, it has omitted the
      // set_number_of windows call since this Igloo will have
      // no windows.
      return new HouseBuilder()
         .setBuildingType('Igloo')
         .setWallMaterial('Ice')
         .setNumberDoors(1)
         .getResult()
   }
}

export class CastleDirector {
   static construct(): House {
      return new HouseBuilder()
         .setBuildingType('Castle')
         .setWallMaterial('Sandstone')
         .setNumberDoors(100)
         .setNumberWindows(200)
         .getResult()
   }
}

export class HouseBoatDirector {
   static construct(): House {
      return new HouseBuilder()
         .setBuildingType('House Boat')
         .setWallMaterial('Wood')
         .setNumberDoors(6)
         .setNumberWindows(8)
         .getResult()
   }
}

const IGLOO = IglooDirector.construct()
const CASTLE = CastleDirector.construct()
const HOUSEBOAT = HouseBoatDirector.construct()

console.log(IGLOO.construction())
console.log(CASTLE.construction())
console.log(HOUSEBOAT.construction())

// Output
/* node ./dist/builder/client.js
This is a Ice Igloo with 1 door(s) and 0 window(s).
This is a Sandstone Castle with 100 door(s) and 200 window(s).
This is a Wood House Boat with 6 door(s) and 8 window(s). */

// SUMMARY
// The Builder pattern is a creational pattern that is used to create more complex objects than you'd expect from a factory.
// The Builder pattern should be able to construct complex objects in any order and include/exclude whichever available components it likes.
// For different combinations of products than can be returned from a Builder, use a specific Director to create the bespoke combination.
// You can use an Abstract Factory to add an abstraction between the client and Director.