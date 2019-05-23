//Creating pointer variable to File System.
var fs = require("fs");

//Capturing the third input in the CLI.
var operator = process.argv[2].toLowerCase();

//Capturing the fourth input in the CLI.
var number = parseFloat(process.argv[3]);

//Function that totals everything in bank.txt.
function total(){
    //Reading what's in the bank.txt file and handling errors, if any, and the data.
    fs.readFile("bank.txt", "utf8", function(error, data){
        if (error) {
            return console.log(error);
        }

        //Taking the data and separating it into an array on every comma space.
        data = data.split(", ");

        //Starting the value at 0 so that we can avoid errors when adding up bank.txt's content each time.
        var sum = 0;

        //For loop that goes through the data array.  Each time the data is turned from a string to a number so that we can add it to the sum.
        for (var i = 0; i < data.length; i++){
            var num = parseFloat(data[i]);
            sum += num;   
        }
        //Console.log of the sum, cutting off after two decimal points.
        console.log(`Current balance: $${sum.toFixed(2)}`);
       
    });
}

//Function that adds numbers to bank.txt, it uses the fourth input in the CLI.  
function deposit(){
    fs.appendFile("bank.txt", `, ${number}`, function(error){
        if (error){
            return console.log(error);
        }
        
        //Tells the user what they wrote as the fourth input then tells the user their newly calculated total.
        console.log(`You have deposited: $${number}.00.`)
        total();
    })
}

//Function that adds a negative number to bank.txt based off of the fourth input in the CLI.
function withdraw(){
    fs.appendFile("bank.txt", `, - ${number}`, function(error){
        if (error){
            return console.log(error);
        }
        else {
            //Tells the user what they wrote as the fourth input in the CLI and then tells the user their newly calculated total.
            console.log(`You have withdrawn $${number}.00.`);
            total();
        }
    });
}

//Function that charges the user $0.25 every time they select it.  The -$0.25 is written to bank.txt.
function lotto(){
    fs.appendFile("bank.txt", ", -0.25", function(error){
        if (error){
            return console.log(error);
        }
        
        //Calculating the random number between 1-10.
        var randomNumber = Math.floor(Math.random() * 10) + 1;

        //Condition to be met to win the lotto.
        if (randomNumber === 4){

            //If the condition is met and there aren't any errors to be handled then the user gets $2.00 written to bank.txt.
            fs.appendFile("bank.txt", ", 2", function(error){
                if (error){
                    return console.log(error);
                }
                
                //Telling the user they won and then telling them the new balance in the account.
                console.log(`You won!  $2.00 has been added to your account!`);
                total();
            })
        } 
        
        //If the randomNumber that was generated wasn't 4.
        else {

            //Telling the user they lost and telling them the balance in the account.
            console.log(`You lost the lotto.  Better luck next time!`);
            total();
        }
        
    })
}

//Switch case using the operator variable, the third CLI input that triggers the appropriate function.  If the user doesn't enter in any of these, or does so incorrectly the default tells them how to interact with the program.
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



