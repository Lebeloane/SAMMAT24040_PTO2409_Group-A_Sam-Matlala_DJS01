/**
 * Calculating the Mars Climate Orbiter velocity. 
 * Provided the value needs to be in kilometers per hour 
 */

// Given Parameters
const FUELBURN_RATE = 0.5; // fuel burn rate (kg/s)

const initialVelocity = {
  value: 10000,
  measurement: 'kilometer-hour',
}; // velocity (km/h)

const acceleration = {
  value: 3,
  measurement: 'meters-second^2',
}; // acceleration (m/s^2)

const timeInSecs = {
  value: 3600, // time in seconds
  measurement: 'seconds',
};

const initialDistance = {
  value: 0,
  measurement: 'kilometers',
}; // distance (km)

const initialFuel = {
  value: 5000,
  measurement: 'kilograms',
}; // remaining fuel (kg)


// Convert acceleration to km/s^2 for consistency
const accelerationInKmPerSecSquared = {
  value: acceleration.value / 1000, // convert m/s^2 to km/s^2
  measurement: 'kilometers-second^2',
};

// Calculate the new distance and remaining fuel
const timeInHours = timeInSecs.value / 3600; // convert time to hours
const newDistance = initialDistance.value + (initialVelocity.value * timeInHours);
const remainingFuel = initialFuel.value - (FUELBURN_RATE * timeInSecs.value); // fuel burn over the time period

// Calculate the new velocity using calcNewVelocity function
const newVelocity = calcNewVelocity({
  acceleration: accelerationInKmPerSecSquared,
  initialVelocity,
  timeInSecs,
});

function calcNewVelocity({ acceleration, initialVelocity, timeInSecs }) {
  if (!acceleration) throw new Error('"acceleration" is required');
  if (!initialVelocity) throw new Error('"initialVelocity" is required');
  if (!timeInSecs) throw new Error('"timeInSecs" is required');

  if (acceleration.measurement !== 'kilometers-second^2') {
    throw new Error('Acceleration measurement must be in kilometers-second^2');
  }
  if (initialVelocity.measurement !== 'kilometer-hour') {
    throw new Error('Initial velocity must be in kilometers per hour');
  }
  if (timeInSecs.measurement !== 'seconds') {
    throw new Error('Time must be in seconds');
  }

  // Calculate final velocity in km/s and then convert to km/h
  const initialVelocityInKmPerSec = initialVelocity.value / 3600; // Convert km/h to km/s
  const newVelocityInKmPerSec = initialVelocityInKmPerSec + (acceleration.value * timeInSecs.value);
  const newVelocityInKmPerHour = newVelocityInKmPerSec * 3600; // Convert km/s back to km/h

  return newVelocityInKmPerHour;
}

console.log(`Corrected New Velocity: ${newVelocity.toFixed(0)} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
