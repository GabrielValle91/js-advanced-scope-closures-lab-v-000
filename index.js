function produceDrivingRange(maxDistance){
  return function(startingBlock, endingBlock){
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let difference = Math.abs(start - end);
    let travel = maxDistance - difference;
    if (travel < 0){
      return `${Math.abs(travel)} blocks out of range`;
    } else {
      return `within range by ${travel}`;
    }
  };
}

function produceTipCalculator(percent){
  return function(bill){
    return percent * bill;
  };
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
