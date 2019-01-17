
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


        var endBtn = $(this);
        endBtn.attr('disabled', 'disabled');

        playerDiv.append(playerSelectCap);
        playerDiv.append(playerSelectIronMan);
        playerDiv.append(playerSelectHulk);
        playerDiv.append(playerSelectThor);
        playerDiv.append(selectFinish);
        $("#player_area").append(playerDiv);
    }
    function createCap(){
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

// function endSelect(){

// }
