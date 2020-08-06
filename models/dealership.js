const Vehicle = require('./vehicle');
const Car = require('./car');
const Motorcycle = require('./motorcycle');

class Dealership {

    constructor() {
        this.vehicles = initVehicles();

    }

    sortByPrice() {
        this.vehicles.sort(function compare(vehicle1, vehicle2) { return vehicle2.price - vehicle1.price });
    }

    search(conditionFunction){
        return this.vehicles.filter(conditionFunction);
    }

    get cheapest() {
        return this.vehicles.reduce(function (a, b) {
            if (a.price < b.price)
                return a;
            else
                return b;
        });
    }

    get mostExpensive() {
        return this.vehicles.reduce(function (a, b) {
            if (a.price > b.price)
                return a;
            else
                return b;
        });
    }



}

module.exports = Dealership;


function initVehicles() {
    let vehicles = [];
    vehicles.push(new Car('Peugeot', '206', 200_000, 4));
    vehicles.push(new Motorcycle('Honda', 'Titan', 60_000, 125));
    vehicles.push(new Car('Peugeot', '208', 250_000, 5));
    vehicles.push(new Motorcycle('Yamaha', 'YBR', 80_500, 160));

    return vehicles;
}
