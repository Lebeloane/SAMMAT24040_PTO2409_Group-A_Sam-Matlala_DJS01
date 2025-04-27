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


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






