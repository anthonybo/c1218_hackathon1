var players = {};
var playerData = {};

function movePlayer(dice) {

    // var currentSquareClass = '';
    // for (var index = 0;index < currentPlayers.length; index++ ) {
    //     console.log(currentPlayers[index]);
    //     if(currentPlayers[index] == 'capAm') {
    //         // console.log(`Player${index+1} - we have cap`);
    //         playerData[`player${index+1}`] = 'Captain';
    //         currentSquareClass = 'currentSquareCap';
    //         // $('.currentSquare').css('4px', 'solid', 'blue');
    //     } else if (currentPlayers[index] == 'hulkAm' ) {
    //         // console.log(`Player${index+1}- we have hulk`);
    //         playerData[`player${index+1}`] = 'Hulk';
    //         currentSquareClass = 'currentSquareHulk';
    //     } else if (currentPlayers[index] == 'thorAm' ) {
    //         // console.log(`Player${index+1} - we have Thor`);
    //         playerData[`player${index+1}`] = 'Thor';
    //         currentSquareClass = 'currentSquareThor';
    //     } else if (currentPlayers[index] == 'ironManAm' ) {
    //         // console.log(`Player${index+1} - we have IronMan`);
    //         playerData[`player${index+1}`] = 'IronMan';
    //         currentSquareClass = 'currentSquareIron';
    //     }
    // }

    // debugger;
    // console.log('Move player Function' + dice);
    var moveValue = dice[0] + dice[1];
    // console.log('Move Amount: ' + moveValue);

    // if ('player1' in players) {
    //     // console.log('Player Exists');
    //     var oldValue = players['player1'];
    //     players['player1'] = oldValue += moveValue;
    //     if(players['player1'] >= 40) {
    //         // console.log('You have lapped the board');
    //         players['player1'] = players['player1'] - 38;
    //         if(players['player1'] <= 0) {
    //             players['player1'] = 1;
    //         }
    //     }
    // } else {
    //     // console.log('No Player');
    //     players['player1'] = moveValue;
    // }

    var currentPlayer = currentPlayers.shift();
    // console.log(currentPlayer.name);
    // console.log(currentPlayers[0].name );

    if(currentPlayers[0].name  == 'capAm') {
            $('.bounce').css('background','blue').css('color','white');

        } else if (currentPlayers[0].name   == 'hulkAm' ) {
            $('.bounce').css('background','green').css('color','white');

        } else if (currentPlayers[0].name   == 'thorAm' ) {
            $('.bounce').css('background','grey').css('color','white');

        } else if (currentPlayers[0].name   == 'ironManAm' ) {
            $('.bounce').css('background','red').css('color','white');
        }

    var currentPosition = currentPlayer.currentPosition;
    var nextPosition = currentPosition + moveValue;

    if (nextPosition > 37) {
        nextPosition -= 37;
    }

    currentPlayer.currentPosition = nextPosition;

    $(`[data-position="${currentPosition}"]`).removeClass(currentPlayer.name);
    $(`[data-position="${nextPosition}"]`).addClass(currentPlayer.name);

    currentPlayers.push(currentPlayer);
    // if(playerPosition <= 11) {
    //     // console.log('Bottom row for first roll');
    //     $('.leftColumn div').removeClass(currentSquareClass);
    //     $('.bottomCont div').removeClass(currentSquareClass);
    //     $('.topCont div').removeClass(currentSquareClass);
    //     $('.rightColumn div').removeClass(currentSquareClass);
    //     $(`.bottomCont div:nth-child(${playerPosition})`).addClass(currentSquareClass);
    // } else if( playerPosition > 11 && playerPosition <= 19 ){
    //     $('.bottomCont div').removeClass(currentSquareClass);
    //     $('.leftColumn div').removeClass(currentSquareClass);
    //     $('.topCont div').removeClass(currentSquareClass);
    //     $('.rightColumn div').removeClass(currentSquareClass);
    //     $(`.leftColumn div:nth-child(${playerPosition-11} )`).addClass(currentSquareClass);
    // } else if( playerPosition > 19 && playerPosition <= 29 ){
    //     $('.bottomCont div').removeClass(currentSquareClass);
    //     $('.leftColumn div').removeClass(currentSquareClass);
    //     $('.topCont div').removeClass(currentSquareClass);
    //     $('.rightColumn div').removeClass(currentSquareClass);
    //     $(`.topCont div:nth-child(${playerPosition-19} )`).addClass(currentSquareClass);
    // } else if( playerPosition > 29 && playerPosition <= 38 ){
    //     $('.bottomCont div').removeClass(currentSquareClass);
    //     $('.leftColumn div').removeClass(currentSquareClass);
    //     $('.topCont div').removeClass(currentSquareClass);
    //     $('.rightColumn div').removeClass(currentSquareClass);
    //     $(`.rightColumn div:nth-child(${playerPosition-29} )`).addClass(currentSquareClass);
    // }
    // console.log(playerData);

}
