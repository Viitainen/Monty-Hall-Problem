let simulationCount = 100000000;

let correctGuessCount = 0;
let correctWhenChangedCount = 0;
let doorCount = 3;

let guessPosibilitiesTemplate = [];

//Initiate template for guess posibilities
for(let i = 1; i <= doorCount; i++) {
    guessPosibilitiesTemplate.push(i);
};

//Without changing
for(let i = 0; i < simulationCount; i++) {
    //Take copy of the original template
    let guessPossibilities = guessPosibilitiesTemplate.slice();

    let doorWithPrice = guessPossibilities[Math.floor(Math.random() * guessPossibilities.length)];
    let initialGuess = guessPossibilities[Math.floor(Math.random() * guessPossibilities.length)];

    let correctGuess = doorWithPrice == initialGuess;

    if (correctGuess) {
        correctGuessCount++;
    }

    let changedGuess = initialGuess;

    //Changing logic
    //Remove initial guess from the options
    guessPossibilities.splice(guessPossibilities.indexOf(initialGuess), 1);

    let wrongDoorIndexes = [];

    //Get all the wrong door indexes
    for(let j = 0; j < guessPossibilities.length; j++) {
        if (guessPossibilities[j] !== doorWithPrice) {
            wrongDoorIndexes.push(j);
        }
    }

    //Remove one wrong door randomly from the possibilities
    if (wrongDoorIndexes.length > 0) {
        guessPossibilities.splice(wrongDoorIndexes[Math.floor(Math.random() * wrongDoorIndexes.length)], 1);
    }

    //Get a random door from the remaining possibilities
    changedGuess = guessPossibilities[Math.floor(Math.random() * guessPossibilities.length)];

    let changedGuessCorrect = changedGuess == doorWithPrice;

    if (changedGuessCorrect) {
        correctWhenChangedCount++;
    }
}

console.log(`Results without changing: ${correctGuessCount}/${simulationCount} ${correctGuessCount/simulationCount*100}%`);
console.log(`Results with changing: ${correctWhenChangedCount}/${simulationCount} ${correctWhenChangedCount/simulationCount*100}%`);
