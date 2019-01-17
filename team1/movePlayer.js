var players = {};

function movePlayer(dice) {
    // debugger;
    // console.log('Move player Function' + dice);

    var moveValue = dice[0] + dice[1];
    console.log('Move Amount: ' + moveValue);

    if ('player1' in players) {
        // console.log('Player Exists');
        var oldValue = players['player1'];
        players['player1'] = oldValue += moveValue;
        if(players['player1'] >= 40) {
            console.log('You have lapped the board');
            players['player1'] = players['player1'] - 38;
            if(players['player1'] <= 0) {
                players['player1'] = 1;
            }

        }
    } else {
        // console.log('No Player');
        players['player1'] = moveValue;
    }
    console.log(players);

    var playerPosition = players['player1'];

    if(playerPosition <= 11) {
        // console.log('Bottom row for first roll');
        $('.leftColumn div').removeClass('currentSquare');
        $('.bottomCont div').removeClass('currentSquare');
        $('.topCont div').removeClass('currentSquare');
        $('.rightColumn div').removeClass('currentSquare');
        $(`.bottomCont div:nth-child(${playerPosition})`).addClass('currentSquare');
    } else if( playerPosition > 11 && playerPosition <= 19 ){
        $('.bottomCont div').removeClass('currentSquare');
        $('.leftColumn div').removeClass('currentSquare');
        $('.topCont div').removeClass('currentSquare');
        $('.rightColumn div').removeClass('currentSquare');
        $(`.leftColumn div:nth-child(${playerPosition-11} )`).addClass('currentSquare');
    } else if( playerPosition > 19 && playerPosition <= 29 ){
        $('.bottomCont div').removeClass('currentSquare');
        $('.leftColumn div').removeClass('currentSquare');
        $('.topCont div').removeClass('currentSquare');
        $('.rightColumn div').removeClass('currentSquare');
        $(`.topCont div:nth-child(${playerPosition-19} )`).addClass('currentSquare');
    } else if( playerPosition > 29 && playerPosition <= 38 ){
        $('.bottomCont div').removeClass('currentSquare');
        $('.leftColumn div').removeClass('currentSquare');
        $('.topCont div').removeClass('currentSquare');
        $('.rightColumn div').removeClass('currentSquare');
        $(`.rightColumn div:nth-child(${playerPosition-29} )`).addClass('currentSquare');
    }
}
