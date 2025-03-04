// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    const hqBlock = 42; // Headquarters is at 42nd street
    return Math.abs(block - hqBlock);
  }
  
  function distanceFromHqInFeet(block) {
    const feetPerBlock = 264; // 1 block = 264 feet
    return distanceFromHqInBlocks(block) * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // 1 block = 264 feet
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // No rides over 2500 feet
    }
  }
  
 