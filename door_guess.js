const ITERATIONS = 10000;

function displayRandomTest(iterations) {
  let doors = {
    door1: 0,
    door2: 0,
    door3: 0
  }

  for (let i = 1; i <= iterations; i++) {
    let random = Math.random() * 3;
    // console.log(random);
    if (random < 1) {
      doors.door1++;
    } else if (random < 2) {
      doors.door2++;
    } else {
      doors.door3++;
    }
  }
  console.log(`door1: ${doors.door1}  door2: ${doors.door2}  door3: ${doors.door3}`);
  console.log(`door1: ${(doors.door1/iterations*100).toFixed(1)}%  door2: ${(doors.door2/iterations*100).toFixed(1)}%  door3: ${(doors.door3/iterations*100).toFixed(1)}%`);
  return doors;
}

displayRandomTest(ITERATIONS);


// Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. 
// You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. 
// He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

// Vos Savant's response was that the contestant should switch to the other door.[3] Under the standard assumptions, 
// the switching strategy has a 2/3 probability of winning the car, 
// while the strategy that remains with the initial choice has only a 1/3 probability.
// The host must always open a door that was not picked by the contestant.[9]
// The host must always open a door to reveal a goat and never the car.
// The host must always offer the chance to switch between the originally chosen door and the remaining closed door.

// input - iterations, initial door to choose
// output - object
// {doorPickedByUser, door1, door2, door3, correctInitialCount, correctAfterSwapCount, wouldHaveBeenCorrect}

// initialize object values to 0s
// set currentDoorGuess to initialdoorguess
// loop iteration times
//  get randomlypicked door#
//  - need to have host pick door to open and show
//  - this door need to not be the one the user picked and no the one with the prize
//  - if user happened to pick the prize door then can open either of the other 2 doors
//  - if user didnt pick the prize door, then open the ONE door that isn't the prize
//  if randomlypicked door# === currentDoorGuess then inc correctInitialCount and doorToOpen = either of the two other doors pick at random
//  otherwise 