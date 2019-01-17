
var player1Total = 1500;
var player2Total = 1500;
var player3Total = 1500;
var player4Total = 1500;
var player1 = 'Thor';
var player2 = 'Hulk';
var player3 = 'Captain America';
var player4 = 'Iron Man';
var propertyValues = {
    'Mediterranean Avenue': 60,
    'Baltic Avenue': 60,
    'Oriental Avenue': 100,
    'Vermont Avenue': 100,
    'Connecticut Avenue': 120,
    'St. Charles': 140,
    'State Avenue': 140,
    'Virginia Avenue': 160,
    'St. James Place': 180,
    'Tenesee Avenue': 180,
    'New York Avenue': 200,
    'Kentucky Avenue': 220,
    'Indiana Avenue': 220,
    'Illinoise Avenue': 240,
    'Atlantic Avenue': 260,
    'Ventnor Avenue': 260,
    'Marvin Gardens': 280,
    'Pacific Avenue': 300,
    'North Carolina Avenue': 300,
    'Pennsylvania Avenue': 320,
    'Park Place': 350,
    'Boardwalk': 400
}
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
