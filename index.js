// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation >= 42) {
    const distanceInBlocks = pickupLocation - 42;
    return distanceInBlocks;
  } else {
    const distanceInBlocks = 42 - pickupLocation;
    return distanceInBlocks;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  const distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    const distanceTravelled = destination - start;
    const distanceInFeet = distanceTravelled * 264;
    return distanceInFeet;
  } else {
    const distanceTravelled = start - destination;
    const distanceInFeet = distanceTravelled * 264;
    return distanceInFeet;
  }
}

function calculatesFarePrice (start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        const price = 0;
        return price;
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const price = (distanceInFeet - 400) * 0.02;
        return price;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        const price = 25;
        return price;
    } else if (distanceInFeet > 2500) {
        return `cannot travel that far`;
    }

}
