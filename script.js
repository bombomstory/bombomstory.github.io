// Function to generate a random number between 11 and 99
function getRandomNumber() {
    return Math.floor(Math.random() * (99 - 11 + 1)) + 11;
}

// Function to display the random number and its square
function displayRandomNumberAndSquare() {
    const randomNumber = getRandomNumber();
    const squaredNumber = randomNumber * randomNumber;

    document.getElementById('randomNumber').innerText = `Random Number: ${randomNumber}`;
    document.getElementById('squaredNumber').innerText = `Squared Number: ${squaredNumber}`;

    return { randomNumber, squaredNumber };
}

// Function to reveal the square root of the squared number
function revealSquareRoot(randomNumber) {
    document.getElementById('result').innerText = `Square Root of Squared Number: ${randomNumber}`;
}

// Main script
document.addEventListener('DOMContentLoaded', () => {
    const { randomNumber } = displayRandomNumberAndSquare();

    document.getElementById('revealButton').addEventListener('click', () => {
        revealSquareRoot(randomNumber);
    });
});
