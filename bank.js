var fs = require("fs");

var operator = process.argv[2];




var total = function(){

}

var deposit = function(){
    
}

var withdraw = function(){
    
}

var lotto = function(){
    
}





switch(operator){
    case total:
        total();
        break;
    case deposit:
        deposit();
        break;
    case withdraw:
        withdraw();
        break;
    case lotto:
        lotto();
        break;
    default:
        return console.log(`please enter a valid operator: 'total', 'deposit', 'withdraw', or 'lotto'`);
}