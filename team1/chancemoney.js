var defaultValue = 1500;
function chanceMoney(){
    var randomNumber = Math.floor((Math.random() * 2) + 1);
    switch(randomNumber){
        case 1:
            defaultValue = defaultValue + 10;
            break;
        case 2:
            defaultValue = defaultValue - 10;
            break;
        default:
            console.log('why are you here');
    }
}