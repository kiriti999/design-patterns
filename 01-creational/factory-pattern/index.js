
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