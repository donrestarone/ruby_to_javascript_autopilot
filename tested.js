function addOneCarPerDay(cars, numDays){
	for(var i = 0; i < numDays; i++){
		var newCar = getNewCar();

		(addCar(cars, newCar));
	}
	commandFleet(cars)
}

function getNewCar(){
	return {
		city: 'Toronto',
		passengers: 0,
		gas: 100,
	}
}

function addCar(cars, newCar){
	cars.push(newCar);
	return console.log("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}

function commandFleet(cars){
	for(var i = 0; i < cars.length; i++){
		action = act(cars[i]);
		return console.log('car ' + cars[i] + ': ' + action);
	}
}

function act(car){
	var distanceBetweenCities = 50;
	if (car.gas < 20){
		fillUpGas(car);
	} else if (car.passengers < 3) {
		PickUpPassenger(car);
	} else {
		if (car.gas < distanceBetweenCities){
			return fillUpGas(car);
		}
		var drove_to = drive(car, distanceBetweenCities);
		var passengersDropped = dropOffPassengers(car);
		return console.log(drove_to + passengersDropped);
	}
}

function PickUpPassenger(car){
	car.passengers += 1;
	car.gas -= 10;
	return console.log('picked up passneger. Car now has ' + car.passengers + ' passengers.');
}

var cars = [];
addOneCarPerDay(cars, 10)