var takenProperties = [];


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
            payUp();
            return;
        }
    }

    $('#dice').hide();
    $('.buyProperty').show();
    $('#propertyList').empty();
    $('#propertyName').text(positionName+' ' + '$' + currentPropertyValue);


    if(currentPlayer.name  == 'capAm') {
        $('#buyPropertyPlayer').text('Captain America ');
        $('#buyPropertyPlayer').css('color', 'blue').css('font-weight', 'bold').css('textShadow','black 1px 1px');
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
        if(currentPlayer.name  == 'capAm') {
            console.log('Cap: ' + currentPropertyValue);
            capMoney -= currentPropertyValue;
            console.log(capMoney);
            $('#capAm > div').text('Money: $' + capMoney);
            capProperties.push(positionName);

        } else if (currentPlayer.name  == 'hulkAm' ) {
            console.log('hulk' + currentPropertyValue);
            hulkMoney -= currentPropertyValue;
            console.log(hulkMoney);
            $('#hulkAm > div').text('Money: $' + hulkMoney);
            hulkProperties.push(positionName);
        } else if (currentPlayer.name   == 'thorAm' ) {
            console.log('thor' + currentPropertyValue);
            thorMoney -= currentPropertyValue;
            console.log(thorMoney);
            $('#thorAm> div').text('Money: $' + thorMoney);
            thorProperties.push(positionName);
        } else if (currentPlayer.name   == 'ironManAm' ) {
            console.log('ironman' + currentPropertyValue);
            ironManMoney -= currentPropertyValue;
            console.log(ironManMoney);
            $('#ironManAm > div').text('Money: $' + ironManMoney);
            ironManProperties.push(positionName);
        }
        takenProperties.push(positionName);
        $('.buyProperty').hide();
        $('#dice').show();

        $('#buyYes').off();
        console.log(takenProperties);
    });

    $('#buyNo').click(noBuyProperty);
}


function noBuyProperty() {
    $('.buyProperty').hide();
    $('#dice').show();
}

function payUp() {
    console.log('Pay Up!');
}