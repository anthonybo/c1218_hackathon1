$(document).ready(initApp);

function initApp() {
    clickHandler();
}

function clickHandler() {
    $('#diceButton').click(displayDice);
}

function randomizeDice() {
    var dice1 = Math.floor((Math.random() * 6) + 1);
    var dice2 = Math.floor((Math.random() * 6) + 1);

    return [dice1, dice2];
}

function displayDice() {
    // debugger;
    var dice = randomizeDice();
    movePlayer(dice);
    $('#diceImg').empty();

    for (var diceValue of dice) {
        $('#diceImg').append($('<img>', {id: `dice${diceValue}`, src: `images/die${diceValue}.png`}));
    }
}