/* Consider an application where we have to create and use all types of vehicles.
There are motor vehicles(cars, buses, trucks, motorcycles), railed vehicles(trains, trams),
aircraft(airplanes, helicopters), and watercraft(ships, boats).

Thus, instead of creating instances by calling the constructor of each class individually,
we can implement the Factory pattern as follows: */

class MotorVehicle { }
class Aircraft { }
class Railvehicle { }

const VehicleFactory = (type, make, model, year) => {
    if (type === car) {
        return new MotorVehicle('car', make, model, year);
    } else if (type === airplane) {
        return new Aircraft('airplane', make, model, year);
    } else if (type === helicopter) {
        return new Aircraft('helicopter', make, model, year);
    } else {
        return new Railvehicle('train', make, model, year);
    }
}

const audiAllRoad = VehicleFactory('car', 'Audi', 'A6 Allroad', '2020');

module.exports = VehicleFactory;