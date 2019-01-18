// var defaultValue = 1500;
// function passGo() {
//     //who did it and what to give them
//     defaultValue = defaultValue + 200;
// }
// passGo(); // this is what adds the money, so need to use this to pass in to use
// console.log(defaultValue);
//
// function goToJail(){
//     // player chooses to pay 50 or not
//     defaultValue = defaultValue - 50;
// }
// goToJail(); // this is what adds the money, so need to use this to pass in to use
// console.log(defaultValue);
//
// function communityChestMoney(){
//     var communityChestMoneyAmount
//     var randomNumber = Math.floor((Math.random() * 2) + 1);
//     switch(randomNumber){
//         case 1:
//             defaultValue = defaultValue + 10;
//             break;
//         case 2:
//             defaultValue = defaultValue - 10;
//             break;
//         default:
//             console.log('why are you here');
//     }
// }
// function chanceMoney(){
//     var randomNumber = Math.floor((Math.random() * 2) + 1);
//     switch(randomNumber){
//         case 1:
//             defaultValue = defaultValue + 10;
//             break;
//         case 2:
//             defaultValue = defaultValue - 10;
//             break;
//         default:
//             console.log('why are you here');
//     }
// }
//
// function gainMoneyUtilties(){
//     var rent = 100;
//     var utilitiesOwned = 1;
//     if (utilitiesOwned === 1){
//         //need a way to link this to track the number of utlities owned
//         defaultValue = defaultValue + (rent * 4);
//     } else if (utilitiesOwned === 2) {
//         //need a way to link this to track the number of utlities owned
//         defaultValue = defaultValue + (rent * 10);
//     }
//
// }
// gainMoneyUtilties();
// console.log(defaultValue);
//
// // this is dependent on if a player lands on a railroad space, player who lands on it pays money
// function payRailroadMoney(){
//     var numberOfRailroads = 0;
//     if(numberOfRailroads === 1){
//         defaultValue = defaultValue - 25;
//     } else if (numberOfRailroads === 2 ) {
//         defaultValue = defaultValue - 50;
//     } else if (numberOfRailroads === 3 ) {
//         defaultValue = defaultValue - 100;
//     } else if (numberOfRailroads === 4 ) {
//         defaultValue = defaultValue - 200;
//     } else {
//         defaultValue = defaultValue + 0;
//     }
// }
// payRailroadMoney();
// console.log(defaultValue);
//
// function gainRailroadMoney(){
//     var numberOfRailroads = 1;
//     if(numberOfRailroads === 1){
//         defaultValue = defaultValue + 25;
//         console.log(defaultValue);
//     } else if (numberOfRailroads === 2 ) {
//         defaultValue = defaultValue + 50;
//         console.log(defaultValue);
//     } else if (numberOfRailroads === 3 ) {
//         defaultValue = defaultValue + 100;
//         console.log(defaultValue);
//     } else if (numberOfRailroads === 4 ) {
//         defaultValue = defaultValue + 200;
//         console.log(defaultValue);
//     } else {
//         defaultValue = defaultValue + 0;
//         console.log(defaultValue);
//     }
//
// }
// gainRailroadMoney();
// console.log(defaultValue);