var defaultValue = 1500;
function gainMoneyUtilties(){
    var rent = 100;
    var utilitiesOwned = 1;
    if (utilitiesOwned === 1){
        //need a way to link this to track the number of utlities owned
        defaultValue = defaultValue + (rent * 4);
    } else if (utilitiesOwned === 2) {
        //need a way to link this to track the number of utlities owned
        defaultValue = defaultValue + (rent * 10);
    }

}
gainMoneyUtilties();
console.log(defaultValue);