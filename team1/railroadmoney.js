 // this is dependent on if a player lands on a railroad space, player who  owns it, recieves money
var defaultValue = 1500;
function gainRailroadMoney(){
 var numberOfRailroads = 1;
  if(numberOfRailroads === 1){
      defaultValue = defaultValue + 25;
      console.log(defaultValue);
     } else if (numberOfRailroads === 2 ) {
       defaultValue = defaultValue + 50;
       console.log(defaultValue);
     } else if (numberOfRailroads === 3 ) {
       defaultValue = defaultValue + 100;
       console.log(defaultValue);
     } else if (numberOfRailroads === 4 ) {
       defaultValue = defaultValue + 200;
       console.log(defaultValue);
     } else {
       defaultValue = defaultValue + 0;
       console.log(defaultValue);
  }

}
gainRailroadMoney();
console.log(defaultValue);

 var defaultValue = 1500;
// this is dependent on if a player lands on a railroad space, player who lands on it pays money
function payRailroadMoney(){
  var numberOfRailroads = 0;
  if(numberOfRailroads === 1){
     defaultValue = defaultValue - 25;
     } else if (numberOfRailroads === 2 ) {
      defaultValue = defaultValue - 50;
     } else if (numberOfRailroads === 3 ) {
      defaultValue = defaultValue - 100;
     } else if (numberOfRailroads === 4 ) {
      defaultValue = defaultValue - 200;
     } else {
      defaultValue = defaultValue + 0;
  }
}
payRailroadMoney();
console.log(defaultValue);