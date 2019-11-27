import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();




//Export Named Exports
// new example
let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
     maxSpeed:1200,
     minSpeed: 300
   }, 
   {name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
    
   }];
   
   let flightRequirements = {
     requiredStaff: 4,
     requiredSpeedRange: 700, 
   };
   function meetsSpeedRangeRequirements(maxSpeed, minSpeed,requiredSpeedRange) {
     let range = maxSpeed - minSpeed;
     if(range > requiredSpeedRange){
       return true;
     }else{
       return false;
     }
     };
   export let availableAirplanes = [...];
   
   export let flightRequirements = {...};
   
   export function meetsStaffRequirements(){};
   
   export function meetsSpeedRangeRequirements(){};
   
   function meetsStaffRequirements(availableStaff, requiredStaff) {
     if (availableStaff.length >= requiredStaff) {
       return true;
     } else {
       return false;
     }
   };
   
   export { availableAirplanes, flightRequirements, meetsStaffRequirements};


   /*-- Import Named Imports--*/

   import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();


// Export as

let availableAirplanes = [
    {name: 'AeroJet',
     fuelCapacity: 800,
     availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
     maxSpeed: 1200,
     minSpeed: 300
    }, 
    {name: 'SkyJet',
     fuelCapacity: 500,
     availableStaff: ['pilots', 'flightAttendants'],
     maxSpeed: 800,
     minSpeed: 200
    }
    ];
    
    let flightRequirements = {
      requiredStaff: 4,
      requiredSpeedRange: 700
    };
    
    function meetsStaffRequirements(availableStaff, requiredStaff) {
      if (availableStaff.length >= requiredStaff) {
        return true;
      } else {
        return false;
      }
    };
    
    function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
      let range = maxSpeed - minSpeed;
      if (range > requiredSpeedRange) {
        return true;
        } else {
        return false;
      }
    };
    
    export { availableAirplanes as aircrafts, 
        flightRequirements as flightReqs,
         meetsStaffRequirements as meetsStaffReqs, 
         meetsSpeedRangeRequirements as meetsSpeedRangeReqs };

         //Import as
         import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element['maxSpeed'], element['minSpeed'], flightRequirements['requiredSpeedRange']));
  });
}

displaySpeedRangeStatus();


//Combining Import Statements

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
import meetsSpeedRangeRequirements from './airplane';
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element['maxSpeed'], element['minSpeed'], flightRequirements['requiredSpeedRange']));
  });
}

displaySpeedRangeStatus();