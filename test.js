function addOneCarPerDay(cars, numDays){
	for(var i = 0; i < numDays; i++){
		var newCar = getNewCar();

		(addCar(cars, newCar));
	}
	commandFleet(cars)
}

function addCar(cars, newCar){
	cars.push(newCar);
	return ("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}

function getNewCar(){
	return {
		city: 'Toronto',
		passengers: 0,
		gas: 100,
	}
}

function commandFleet(cars){
	for(var i = 0; i < cars.length; i++){
		var action = act(cars[i]);
		return console.log('car ' + cars[i] + ': ' + action);
	}
}

function act(car){
	var distanceBetweenCities = 50;
	if (car.gas < 20){
		return fillUpGas(car);
	} else if (car.passengers < 3) {
		return PickUpPassenger(car);
	} else {
		if (car.gas < distanceBetweenCities){
			return fillUpGas(car);
		}
		var droveTo = drive(car, distanceBetweenCities);
		var passengersDropped = dropOffPassengers(car);
		return droveTo + passengersDropped;
	}
}


function PickUpPassenger(car){
	car.passengers += 1;
	car.gas -= 10;
	return 'picked up passenger. Car now has ' + car.passengers + ' passengers.';
}
var cars = [];
addOneCarPerDay(cars, 10)
