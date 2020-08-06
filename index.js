const Vehicle = require('./models/vehicle');
const Car = require('./models/car');
const Motorcycle = require('./models/motorcycle');
const Dealership = require('./models/dealership');


console.log('\n');


let dealership = new Dealership();

console.log("Vehicles:");
console.log('');
dealership.vehicles.forEach(vehicle => {
    console.log(vehicle.toString());
});


console.log('');
console.log('===================================')

let mostExpensiveVehicle = dealership.mostExpensive;
let cheapestVehicle = dealership.cheapest;
let filteredVehicles = dealership.search(function(vehicle){
    return vehicle.model.includes('Y');
});

console.log('Vehículo más caro:',mostExpensiveVehicle.brand, mostExpensiveVehicle.model);
console.log('Vehículo más batato:',cheapestVehicle.brand, cheapestVehicle.model);
console.log('Vehículos que contienen en el modelo la letra ‘Y’:');
filteredVehicles.forEach(vehicle => {
    console.log('\t',vehicle.brand,vehicle.model,vehicle.price);
});

console.log('===================================')
console.log('\n');

dealership.sortByPrice();
console.log('Vehículos ordenados por precio de mayor a menor: \n');
dealership.vehicles.forEach(vehicle => {
    console.log('\t',vehicle.brand, vehicle.model);
});
console.log('\n');


