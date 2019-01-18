
var player1Total = 1500;
var player2Total = 1500;
var player3Total = 1500;
var player4Total = 1500;
var player1 = 'Thor';
var player2 = 'Hulk';
var player3 = 'Captain America';
var player4 = 'Iron Man';
var propertyValues = {
    '1': 60,
    '3': 60,
    '6': 100,
    '8': 100,
    '9': 120,
    '11': 140,
    '12': 140,
    '13': 160,
    '15': 180,
    '17': 180,
    '18': 200,
    '20': 220,
    '22': 220,
    '23': 240,
    '25': 260,
    '26': 260,
    '27': 280,
    '29': 300,
    '30': 300,
    '32': 320,
    '35': 350,
    '37': 400
};

function passGo(player, playerTotal) {
    player1Total= player1Total + 200;
    console.log(player1, player1Total);
}
function goToJail(player, playerTotal){
    player1Total = player1Total - 50;
    console.log(player1, player1Total);
}
function communityChestMoney(player, playerTotal){
    var communityChestMoneyAmount
    var randomNumber = Math.floor((Math.random() * 2) + 1);
    switch(randomNumber){
        case 1:
            player1Total = player1Total + 50;
            break;
        case 2:
            player1Total = player1Total - 15;
            break;
        default:
            console.log('why are you here');
    }
    console.log(player1, player1Total);
}
function chanceMoney(player, playerTotal){
    var randomNumber = Math.floor((Math.random() * 2) + 1);
    switch(randomNumber){
        case 1:
            player1Total = player1Total + 50;
            break;
        case 2:
            player1Total = player1Total - 50;
            break;
        default:
            console.log('why are you here');
    }
    console.log(player1, player1Total);
}
function gainMoneyUtilties(player, playerTotal){
    //need to grab the amount of railroads owned from the current player
    var rent = 100;
    var utilitiesOwned = 1;
    if (utilitiesOwned === 1){
        //need a way to link this to track the number of utlities owned
        player1Total = player1Total + (rent * 4);
    } else if (utilitiesOwned === 2) {
        //need a way to link this to track the number of utlities owned
        player1Total = player1Total+ (rent * 10);
    }
    console.log(player1, player1Total);
}
function payMoneyUtilties(player, playerTotal){
    //need to grab the amount of railroads owned from the current player
    var rent = 100;
    var utilitiesOwned = 1;
    if (utilitiesOwned === 1){
        //need a way to link this to track the number of utlities owned
        player1Total = player1Total - (rent * 4);
    } else if (utilitiesOwned === 2) {
        //need a way to link this to track the number of utlities owned
        player1Total = player1Total - (rent * 10);
    }
    console.log(player1, player1Total);
}
function payRailroadMoney(player, playerTotal){
    //need to grab the amount of railroads owned from the current player
    var numberOfRailroads = 1;
    if(numberOfRailroads === 1){
        player1Total = player1Total - 25;
    } else if (numberOfRailroads === 2 ) {
        player1Total = player1Total - 50;
    } else if (numberOfRailroads === 3 ) {
        player1Total = player1Total- 100;
    } else if (numberOfRailroads === 4 ) {
        player1Total = player1Total - 200;
    } else {
        player1Total = player1Total - 0;
    }
    console.log(player1, player1Total);
}
function gainRailroadMoney(player, playerTotal){
    //need to grab the amount of railroads owned from the current player
    var numberOfRailroads = 1;
    if(numberOfRailroads === 1){
        player1Total = player1Total + 25;
    } else if (numberOfRailroads === 2 ) {
        player1Total = player1Total + 50;
    } else if (numberOfRailroads === 3 ) {
        player1Total = player1Total- 100;
    } else if (numberOfRailroads === 4 ) {
        player1Total = player1Total + 200;
    } else {
        player1Total = player1Total + 0;
    }
    console.log(player1, player1Total);
}
function incomeTax(player, playerTotal){
    var landOnIncomeTax = true;
    if (landOnIncomeTax === true){
        player1Total = player1Total - 200;
    } else {
        player1Total = player1Total - 0;
    }
    console.log(player1, player1Total);
}
