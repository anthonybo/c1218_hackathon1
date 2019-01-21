var takenProperties = [];
var noCounter = 0;


function buyInit(property, currentPlayer) {
    // console.log(propertyValues);
    // console.log('In Buy Property!');


    var currentPropertyValue = propertyValues[property];
    // console.log(currentPropertyValue);
    $('#propertyName').text('$' + currentPropertyValue);

    var currentPosition = currentPlayer.currentPosition;
    // console.log('Current Position: ' + currentPosition);

    var positionName = '';
    switch (currentPosition) {
        case 1:
            positionName = 'Mediterranean Avenue';
            break;
        case 3:
            positionName = 'Baltic Avenue';
            break;
        case 6:
            positionName = 'Oriental Avenue';
            break;
        case 5:
            positionName = 'Reading Railroad';
            break;
        case 8:
            positionName = 'Vermont Avenue';
            break;
        case 9:
            positionName = 'Connecticut Avenue';
            break;
        case 11:
            positionName = 'St. Charles Place';
            break;
        case 12:
            positionName = 'States Avenue';
            break;
        case 13:
            positionName = 'Virginia Avenue';
            break;
        case 14:
            positionName = 'Pennsylvania Railroad';
            break;
        case 15:
            positionName = 'St. James Place';
            break;
        case 17:
            positionName = 'Tennessee Avenue';
            break;
        case 18:
            positionName = 'New York Avenue';
            break;
        case 20:
            positionName = 'Kentucky Avenue';
            break;
        case 22:
            positionName = 'Indiana Avenue';
            break;
        case 23:
            positionName = 'Illinois Avenue';
            break;
        case 24:
            positionName = 'B & O Railroad';
            break;
        case 25:
            positionName = 'Atlantic Avenue';
            break;
        case 26:
            positionName = 'Ventnor Avenue';
            break;
        case 27:
            positionName = 'Marvin Gardens';
            break;
        case 29:
            positionName = 'Pacific Avenue';
            break;
        case 30:
            positionName = 'North Carolina Avenue';
            break;
        case 32:
            positionName = 'Pennsylvania Avenue';
            break;
        case 33:
            positionName = 'Short Line R.R';
            break;
        case 35:
            positionName = 'Park Place';
            break;
        case 37:
            positionName = 'Boardwalk';
            break;

    }

    for (var index = 0; index < takenProperties.length; index++) {
        if( takenProperties[index] == positionName){
            console.error(currentPlayer.name+' Position Already Taken');
            payUp(currentPosition, currentPlayer, positionName);
            return;
        }
    }

    // $('#dice').hide();
    $('#diceButton').hide();
    $('.buyProperty').show();
    $('#propertyList').empty();
    $('#propertyName').text(positionName+' ' + '$' + currentPropertyValue);


    if(currentPlayer.name  == 'capAm') {
        $('#buyPropertyPlayer').text('Captain America ');
        $('#buyPropertyPlayer').css('color', '#8c8cef').css('font-weight', 'bold').css('textShadow','black 1px 1px');
    } else if (currentPlayer.name  == 'hulkAm' ) {
        $('#buyPropertyPlayer').text('Hulk ');
        $('#buyPropertyPlayer').css('color', 'green').css('font-weight', 'bold').css('textShadow','black 1px 1px');
    } else if (currentPlayer.name   == 'thorAm' ) {
        $('#buyPropertyPlayer').text('Thor ');
        $('#buyPropertyPlayer').css('color', 'grey').css('font-weight', 'bold').css('textShadow','black 1px 1px');
    } else if (currentPlayer.name   == 'ironManAm' ) {
        $('#buyPropertyPlayer').text('Iron Man ');
        $('#buyPropertyPlayer').css('color', 'red').css('font-weight', 'bold').css('textShadow','black 1px 1px');
    }

    // $('#buyPropertyPlayer').text(currentPlayer.name + ' ');

    // console.log(currentPlayer.name);
    // debugger;
    $('#buyYes').click(function() {
        // debugger;
        // noCounter++;
        // console.log('Yes Loop: ' + noCounter);
        // if(noCounter <= 1) {
        //     // console.log('This is a NO click which should not be here, catching this condition and returning');
        //     // return;
        //
        // } else if (noCounter > 1) {
        //     noCounter = 0;
        //     return;
        // }


        if(currentPlayer.name  == 'capAm') {
            if(capMoney < 0 || capMoney < currentPropertyValue) {
                // alert('You\'re Broke!');
                $('#brokePlayerName').text('Captain America ').css('color', '#8c8cef').css('font-weight', 'bold').css('textShadow','black 1px 1px');
                $('#currentBalance').text('Property Price: ' + currentPropertyValue + ' Your Balance: ' + capMoney);
                $('#diceButton').hide();
                $('.playerBroke').show();
            } else {
                console.log('Cap: ' + currentPropertyValue);
                capMoney -= currentPropertyValue;
                console.log(capMoney);
                $('#capAm > div').text('Money: $' + capMoney);
                capProperties.push(positionName);
                var purchase = $('<div>').attr('id', 'purchaseCap');
                $(`[data-position="${property}"]`).append(purchase);

                takenProperties.push(positionName);
            }

        } else if (currentPlayer.name  == 'hulkAm' ) {
            if(hulkMoney < 0 || hulkMoney < currentPropertyValue) {
                // alert('You\'re Broke!');
                $('#brokePlayerName').text('Hulk ').css('color', 'green').css('font-weight', 'bold').css('textShadow','black 1px 1px');
                $('#currentBalance').text('Property Price: ' + currentPropertyValue + ' Your Balance: ' + hulkMoney);
                $('#diceButton').hide();
                $('.playerBroke').show();
            } else {
                console.log('hulk' + currentPropertyValue);
                hulkMoney -= currentPropertyValue;
                console.log(hulkMoney);
                $('#hulkAm > div').text('Money: $' + hulkMoney);
                hulkProperties.push(positionName);
                var purchase = $('<div>').attr('id', 'purchaseHulk');
                $(`[data-position="${property}"]`).append(purchase);

                takenProperties.push(positionName);
            }

        } else if (currentPlayer.name   == 'thorAm' ) {
            if(thorMoney < 0 || thorMoney < currentPropertyValue) {
                // alert('You\'re Broke!');
                $('#brokePlayerName').text('Thor ').css('color', 'grey').css('font-weight', 'bold').css('textShadow','black 1px 1px');
                $('#currentBalance').text('Property Price: ' + currentPropertyValue + ' Your Balance: ' + thorMoney);
                $('#diceButton').hide();
                $('.playerBroke').show();
            } else {
                console.log('thor' + currentPropertyValue);
                thorMoney -= currentPropertyValue;
                console.log(thorMoney);
                $('#thorAm> div').text('Money: $' + thorMoney);
                thorProperties.push(positionName);
                var purchase = $('<div>').attr('id', 'purchaseThor');
                $(`[data-position="${property}"]`).append(purchase);

                takenProperties.push(positionName);
            }

        } else if (currentPlayer.name   == 'ironManAm' ) {
            if (ironManMoney < 0 || ironManMoney < currentPropertyValue) {
                // alert('You\'re Broke!');
                $('#brokePlayerName').text('Iron Man ').css('color', 'red').css('font-weight', 'bold').css('textShadow','black 1px 1px');
                $('#currentBalance').text('Property Price: ' + currentPropertyValue + ' Your Balance: ' + ironManMoney);
                $('#diceButton').hide();
                $('.playerBroke').show();
            } else {
                console.log('ironman' + currentPropertyValue);
                ironManMoney -= currentPropertyValue;
                console.log(ironManMoney);
                $('#ironManAm > div').text('Money: $' + ironManMoney);
                ironManProperties.push(positionName);
                var purchase = $('<div>').attr('id', 'purchaseIM');
                $(`[data-position="${property}"]`).append(purchase);

                takenProperties.push(positionName);
            }

        }
        $('.buyProperty').hide();
        // $('#dice').show();
        $('#diceButton').show();

        $('#buyYes').off();
        console.log(takenProperties);
    });

    $('#buyNo').click(noBuyProperty);
}


function noBuyProperty() {
    // noCounter++;
    // console.log('No Loop: ' + noCounter);

    $('.buyProperty').hide();
    // $('#dice').show();
    $('#diceButton').show();
    $('#buyNo').off();
}

function payUp(currentPosition, currentPlayer, positionName) {
    var rent = 0;

    switch (currentPosition) {
        case 1:
            rent = 10;
            break;
        case 3:
            rent = 20;
            break;
        case 5:
            rent = 25;
            break;
        case 6:
            rent = 30;
            break;
        case 8:
            rent = 30;
            break;
        case 9:
            rent = 40;
            break;
        case 11:
            rent = 50;
            break;
        case 12:
            rent = 50;
            break;
        case 13:
            rent = 60;
            break;
        case 14:
            rent = 25;
            break;
        case 15:
            rent = 70;
            break;
        case 17:
            rent = 70;
            break;
        case 18:
            rent = 80;
            break;
        case 20:
            rent = 90;
            break;
        case 22:
            rent = 90;
            break;
        case 23:
            rent = 100;
            break;
        case 24:
            rent = 25;
            break;
        case 25:
            rent = 110;
            break;
        case 26:
            rent = 110;
            break;
        case 27:
            rent = 120;
            break;
        case 29:
            rent = 130;
            break;
        case 30:
            rent = 130;
            break;
        case 32:
            rent = 150;
            break;
        case 33:
            rent = 25;
            break;
        case 35:
            rent = 175;
            break;
        case 37:
            rent = 200;
            break;
    }
    console.log('Pay Up!' + ' ' + currentPlayer.name + ' ' + rent );
    // debugger;

    if(currentPlayer.name  == 'capAm') {
        capMoney -= rent;
        $('#capAm > div').text('Money: $' + capMoney);
        $('#rentDuePlayerName').text('Captain America ').css('color', '#8c8cef').css('font-weight', 'bold').css('textShadow','black 1px 1px');

    } else if (currentPlayer.name  == 'hulkAm' ) {
        hulkMoney -= rent;
        $('#hulkAm > div').text('Money: $' + hulkMoney);
        $('#rentDuePlayerName').text('Hulk ').css('color', 'green').css('font-weight', 'bold').css('textShadow','black 1px 1px');

    } else if (currentPlayer.name   == 'thorAm' ) {
        thorMoney -= rent;
        $('#thorAm> div').text('Money: $' + thorMoney);
        $('#rentDuePlayerName').text('Thor ').css('color', 'grey').css('font-weight', 'bold').css('textShadow','black 1px 1px');

    } else if (currentPlayer.name   == 'ironManAm' ) {
        ironManMoney -= rent;
        $('#ironManAm > div').text('Money: $' + ironManMoney);
        $('#rentDuePlayerName').text('Iron Man ').css('color', 'red').css('font-weight', 'bold').css('textShadow','black 1px 1px');

    }
    $('#diceButton').hide();
    $('#rentAmount').text(positionName + ' $' + rent);
    $('.payRent').show();

}