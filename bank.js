var fs = require("fs");

var operator = process.argv[2];
var number = process.argv[3];
var sum = 0;


var total = function(){
    fs.readFile("bank.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
        }

        var dataArray = data.split(", ");
        
        for (var i = 0; i < dataArray.length; i++){
            var num = parseFloat(dataArray[i]);
            sum += num;
            
        }
        return sum;
       
    });
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