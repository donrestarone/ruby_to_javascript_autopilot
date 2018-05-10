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
	return ("Adding new car to fleet. Fleet size is now " + cars.length + ".");
}

function commandFleet(cars){
	for(var i = 0; i < cars.length; i++){
		var action = act(cars[i]);
		return console.log('car ' + cars[i] + ': ' + action);
	}
}

function drive(car, cityDistance){
	if (car.gas < cityDistance) {
		return fillUpGas(car);
	}
	car.city = getDestination(car);
	car.gas -= cityDistance;
	return console.log('Drove to ' + car.city + '.'+ ' Remaining gas:' + getGasDisplay(car.gas))
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


function fillUpGas(car){
	var old_gas = car.gas;
	car.gas = 100;
	return 'Filled up to'+ car.gas + 'from' + old_gas ;
}

function getDestination(car){
	if (car.city === 'Toronto'){
		return 'Missisauga'
	} else if (car.city === 'Missisauga'){
		return 'London'
	} else if (car.city === 'London'){
		return 'Toronto'
	}
}


function getGasDisplay(gasAmount){
	return gasAmount;
}



function dropOffPassengers(car){
	var previousPassengers = car.passengers;
	car.passengers = 0;
	console.log('dropped off ' + previousPassengers + ' passengers')
}







var cars = [];

addOneCarPerDay(cars, 10);