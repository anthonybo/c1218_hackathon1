var currentPlayers = [];
var capMoney = 1500;
var capProperties = [];
var ironManMoney = 1500;
var ironManProperties = [];
var hulkMoney = 1500;
var hulkProperties = [];
var thorMoney = 1500;
var thorProperties = [];


$(document).ready(initialize);

function initialize() {
    $(".modalDiv").toggleClass('hide');
    $('.buyProperty').hide();
    $('.payRent').hide();
    $('.playerBroke').hide();
    clickHandlers();
}

function clickHandlers() {
    $('#exitModal').click(closeModal);
    $('#exitModalRent').click(closeModalRent);
    $('#exitModalBroke').click(closeModalBroke);
    $("#start_game").click(player_select);


    // $('.modalDiv').click(function(){
    //     $('.modalDiv').toggleClass('hide');
    // });
}

function player_select() {
    var playerDiv = $('<div>').attr('id', 'players');
    var selectPlayerText = $('<div>').attr('id', 'selectPlayerText').text('Select Your Players');
    var playerSelectCap = $('<div>').attr('id', 'cap').text('Captain America').css({'cursor': 'pointer'}).click(createCap);
    var playerSelectIronMan = $('<div>').attr('id', 'iron_man').text('Iron Man').css({'cursor': 'pointer'}).click(createIm);
    var playerSelectHulk = $('<div>').attr('id', 'hulk').text('Hulk').css({'cursor': 'pointer'}).click(createHulk);
    var playerSelectThor = $('<div>').attr('id', 'thor').text('Thor').css({'cursor': 'pointer'}).click(createThor);
    // var selectFinish = $('<button>').attr('id', 'confirm').text('Start Game').css({'cursor': 'pointer'}).click();


    $('.start button').hide();

    var endBtn = $(this);
    endBtn.attr('disabled', 'disabled');

    playerDiv.append(selectPlayerText);
    playerDiv.append(playerSelectCap);
    playerDiv.append(playerSelectIronMan);
    playerDiv.append(playerSelectHulk);
    playerDiv.append(playerSelectThor);

    // console.log($('div[id^=players]').length);
    // playerDiv.append(selectFinish);
    $("#player_area").append(playerDiv);

    // $('#confirm').click(startGame);
}
function createCap() {
    $('#cap').hide();

    var cap = $("<div id='capAm'>").text('Captain America').css({
        'color' : 'darkgrey',
        'background-color': 'navy',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '3vmin',
        'height': '15vh',
        'width': '100%',
        'position': 'relative'
    });
    var money = $("<div>").text('Money: $'+capMoney).css({
        'text-align': 'center',
        'padding': '10px'
                });
    var propBtn= $('<button>').attr('id', 'property').text('Properties').css({'cursor': 'pointer'}).click(capPropList);
    var endBtn = $(this);
    endBtn.attr('disabled', 'disabled');
    $(cap).append(money);
    $(cap).append(propBtn);
    $('#player_area').append(cap);

    // console.log( $('#player_area').children().length-1 );
    if($('#player_area').children().length-1 > 1) {
        // console.log('We Have two players now.');
        createStartButton();
    }

}

function capPropList (){
        $('.modalDiv').toggleClass('hide');
        $('#propertyList').empty();
        $('#propertyList').text(capProperties);
        $('.modalDiv').css('background-color','navy');
}

function createIm(){
    $('#iron_man').hide();
    var ironMan = $("<div id='ironManAm'>").text('Iron Man').css({
        'color' : 'gold',
        'background-color': 'red',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '3vmin',
        'height': '15vh',
        'width': '100%',
        'position': 'relative'
    });
    var money = $("<div>").text('Money: $'+ironManMoney).css({
        'text-align': 'center',
        'padding': '10px'
    });
    var propBtn= $('<button>').attr('id', 'property').text('Properties').css({'cursor': 'pointer'}).click(imPropList);
    var endBtn = $(this);
    endBtn.attr('disabled', 'disabled');
    $(ironMan).append(money);
    $(ironMan).append(propBtn);
    $('#player_area').append(ironMan);
    // console.log($('#player_area').children().length-1);
    if($('#player_area').children().length-1 > 1) {
        // console.log('We Have two players now.');
        createStartButton();
    }
}

function imPropList (){
    $('.modalDiv').toggleClass('hide');
    $('#propertyList').empty();
    $('#propertyList').text(ironManProperties);
    $('.modalDiv').css('background-color','firebrick');

}

function createHulk(){
    $('#hulk').hide();
    var strongestAvenger = $("<div id='hulkAm'>").text('Hulk').css({
        'color' : 'purple',
        'background-color': 'green',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '3vmin',
        'height': '15vh',
        'width': '100%',
        'position': 'relative'
    });
    var money = $("<div>").text('Money: $'+hulkMoney).css({
        'text-align': 'center',
        'padding': '10px'
    });
    var propBtn= $('<button>').attr('id', 'property').text('Properties').css({'cursor': 'pointer'}).click(hulkPropList);
    var endBtn = $(this);
    endBtn.attr('disabled', 'disabled');
    $(strongestAvenger).append(money);
    $(strongestAvenger).append(propBtn);
    $('#player_area').append(strongestAvenger);
    // console.log($('#player_area').children().length-1);
    if($('#player_area').children().length-1 > 1) {
        // console.log('We Have two players now.');
        createStartButton();
    }

}

function hulkPropList (){
    $('.modalDiv').toggleClass('hide');
    $('#propertyList').empty();
    $('#propertyList').text(hulkProperties);
    $('.modalDiv').css('background-color','green');

}

function createThor(){
    $('#thor').hide();
    var pointBreak = $("<div id='thorAm'>").text('Thor').css({
        'color' : 'gold',
        'background-color': 'gray',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '3vmin',
        'height': '15vh',
        'width': '100%',
        'position': 'relative'
    });
    var money = $("<div>").text('Money: $'+thorMoney).css({
        'text-align': 'center',
        'padding': '10px'
    });
    var propBtn= $('<button>').attr('id', 'property').text('Properties').css({'cursor': 'pointer'}).click(thorPropList);
    var endBtn = $(this);
    endBtn.attr('disabled', 'disabled');
    $(pointBreak).append(money);
    $(pointBreak).append(propBtn);
    $('#player_area').append(pointBreak);
    // console.log($('#player_area').children().length-1);
    if($('#player_area').children().length-1 > 1) {
        // console.log('We Have two players now.');
        createStartButton();
    }

}

function thorPropList (){
    $('.modalDiv').toggleClass('hide');
    $('#propertyList').empty();
    $('#propertyList').text(thorProperties);
    $('.modalDiv').css('background-color','grey');

}

function toggleMute(){
    $("#audio_player").prop("muted",!$("#audio_player").prop("muted"));
}

function startGame() {
    // console.log('In StartGame..');

    if( $('#capAm')[0] || $('#ironManAm')[0] || $('#hulkAm')[0] || $('#thorAm')[0] ) {

        $('#players').hide();
        // var firstPlayer = $('#player_area > div div').offsetParent().attr('id');

        $('#player_area').children('div').each(function(){
            // console.log( $(this).attr('id') );
            var value = $(this).attr('id');

            var playerObject = {
                name: value,
                currentPosition: 0
            };
            currentPlayers.push(playerObject);

        });

        currentPlayers.shift();
        // console.log(currentPlayers);
        // debugger;
        // console.log(currentPlayers);
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

        $('#dice').show();
        // $('#diceButton').show();
    }
}

function createStartButton() {
    var numberOfPlayersCurrentlySelected = $('#player_area').children().length-1;

    if( !$('#confirm')[0] ) {
        var selectFinish = $('<button>').attr('id', 'confirm').text('Start Game').css({'cursor': 'pointer'}).click();
        $('#selectPlayerText').after(selectFinish);
        $('#confirm').click(startGame);
    }

    if( numberOfPlayersCurrentlySelected > 3 ) {
        // console.log('All Players Selected');
        $('#selectPlayerText').hide();
    }

}

function closeModal() {
    $('.modalDiv').toggleClass('hide');
}

function closeModalRent() {
    $('#diceButton').show();
    $('.payRent').hide();
}

function closeModalBroke() {
    $('#diceButton').show();
    $('.playerBroke').hide();
}