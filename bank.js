var fs = require("fs");
var operator = process.argv[2].toLowerCase();
var number = parseFloat(process.argv[3]);


function total(){
    fs.readFile("bank.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
        }

        data = data.split(", ");

        var sum = 0;

        for (var i = 0; i < data.length; i++){
            var num = parseFloat(data[i]);
            sum += num;   
        }
        console.log(`Current balance: $${sum.toFixed(2)}`);
       
    });
}

function deposit(){
    fs.appendFile("bank.txt", `, ${number}`, function(error){
        if (error){
            return console.log(error);
        }
        
        console.log(`You have deposited: $${number}.00.`)
        total();
    })
}

function withdraw(){
    fs.appendFile("bank.txt", `, - ${number}`, function(error){
        if (error){
            return console.log(error);
        }
        else {
            console.log(`You have withdrawn $${number}.00.`);
            total();
        }
    });
}

function lotto(){
    fs.appendFile("bank.txt", ", -0.25", function(error){
        if (error){
            return console.log(error);
        }
        
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        if (randomNumber === 4){
            fs.appendFile("bank.txt", ", 2", function(error){
                if (error){
                    return console.log(error);
                }
                
                console.log(`You won!  $2.00 has been added to your account!`);
                total();
            })
        } 
        else {
            console.log(`You lost the lotto.  Better luck next time!`);
            total();
        }
        
    })
}

switch(operator){
    case "total":
        total();
        break;

    case "deposit":
        deposit();
        break;

    case "withdraw":
        withdraw();
        break;

    case "lotto":
        lotto();
        break;

    default:
        return console.log(`please enter a valid operator: 'total', 'deposit', 'withdraw', or 'lotto'`);
}



