var players = {};
var playerData = {};

function movePlayer(dice) {

    var moveValue = dice[0] + dice[1];

    var currentPlayer = currentPlayers.shift();
    // console.log(currentPlayer.name);
    // console.log(currentPlayers[0].name );

    if(currentPlayers[0].name  == 'capAm') {
      $('.bounce').css('background','blue').css('color','white');
    } else if (currentPlayers[0].name   == 'hulkAm' ) {
        $('.bounce').css('background','green').css('color','white');
    } else if (currentPlayers[0].name   == 'thorAm' ) {
        $('.bounce').css('background','grey').css('color','white').css('text-shadow', '');
    } else if (currentPlayers[0].name   == 'ironManAm' ) {
        $('.bounce').css('background','red').css('color','white');
    }

    var currentPosition = currentPlayer.currentPosition;
    var nextPosition = currentPosition + moveValue;

    if (nextPosition > 37) {
        nextPosition -= 37;
    }
    // debugger;

    currentPlayer.currentPosition = nextPosition;

    $(`[data-position="${currentPosition}"]`).removeClass(currentPlayer.name);
    $(`[data-position="${nextPosition}"]`).addClass(currentPlayer.name);

    currentPlayers.push(currentPlayer);

    // console.log(currentPlayer);

    if(nextPosition in propertyValues) {
        buyInit(nextPosition, currentPlayer);
    }
}
