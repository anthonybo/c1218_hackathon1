var currentPlayers = [];
var capMoney = 1000;
var capProperties = ['Baltic', 'Boardwalk', 'Park Place'];
var ironManMoney = 1000;
var ironManProperties = ['Indian Ave', 'Connecticut Ave'];
var hulkMoney = 1000;
var hulkProperties = ['Water Works', 'Electric Company'];
var thorMoney = 1000;
var thorProperties = ['Reading Raildroad'];


$(document).ready(function() {
    $("#start_game").click(player_select);
    $(".modalDiv").toggleClass('hide');
});

function player_select() {
    var playerDiv = $('<div>').attr('id', 'players').text('Player Select');
    var selectFinish = $('<button>').attr('id', 'confirm').text('Done').css({'cursor': 'pointer'}).click();
    var playerSelectCap = $('<button>').attr('id', 'cap').text('Captain America').css({'cursor': 'pointer'}).click(createCap);
    var playerSelectIronMan = $('<button>').attr('id', 'iron_man').text('Iron Man').css({'cursor': 'pointer'}).click(createIm);
    var playerSelectHulk = $('<button>').attr('id', 'hulk').text('Hulk').css({'cursor': 'pointer'}).click(createHulk);
    var playerSelectThor = $('<button>').attr('id', 'thor').text('Thor').css({'cursor': 'pointer'}).click(createThor);

    $('.start button').hide();

    var endBtn = $(this);
    endBtn.attr('disabled', 'disabled');

    playerDiv.append(playerSelectCap);
    playerDiv.append(playerSelectIronMan);
    playerDiv.append(playerSelectHulk);
    playerDiv.append(playerSelectThor);
    playerDiv.append(selectFinish);
    $("#player_area").append(playerDiv);

    $('#confirm').click(startGame);
}
function createCap() {
    var cap = $("<div id='capAm'>").text('Captain America').css({
        'color' : 'darkgrey',
        'background-color': 'navy',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '24px',
        'height': '125px',
        'width': '200px',
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

}

function capPropList (){
        $('.modalDiv').toggleClass('hide');
        $('#propertyList').empty();
        $('#propertyList').text(capProperties);
}

function createIm(){
    var ironMan = $("<div id='ironManAm'>").text('Iron Man').css({
        'color' : 'gold',
        'background-color': 'red',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '24px',
        'height': '125px',
        'width': '200px',
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

}

function imPropList (){
    $('.modalDiv').toggleClass('hide');
    $('#propertyList').empty();
    $('#propertyList').text(ironManProperties);
}

function createHulk(){
    var strongestAvenger = $("<div id='hulkAm'>").text('Hulk').css({
        'color' : 'purple',
        'background-color': 'green',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '24px',
        'height': '125px',
        'width': '200px',
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

}

function hulkPropList (){
    $('.modalDiv').toggleClass('hide');
    $('#propertyList').empty();
    $('#propertyList').text(hulkProperties);
}

function createThor(){
    var pointBreak = $("<div id='thorAm'>").text('Thor').css({
        'color' : 'gold',
        'background-color': 'gray',
        'text-align': 'center',
        'padding': '10px',
        'font-weight': 'bold',
        'font-size': '24px',
        'height': '125px',
        'width': '200px',
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

}

function thorPropList (){
    $('.modalDiv').toggleClass('hide');
    $('#propertyList').empty();
    $('#propertyList').text(thorProperties);
}
//
// function showDeed(boardpiece){
//         //on mouse over, show deed related to board piece
//         boardpiece.src = "MyPicture2.jpg";
//     }
//     function MouseOut(MyImage) {
//         MyImage.src = "MyPicture1.jpg";
//     }
// }

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
        console.log(currentPlayers);
        console.log(currentPlayers[0].name );
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
    }
}
