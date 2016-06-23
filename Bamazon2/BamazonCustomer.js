//vars and requires

var mysql = require('mysql');
var line = "";
var prompt = require('prompt');
prompt.start();

//function vars
var userID = 0;//this var holds the id# the user inputs
var theQuantity = 0; // thie var holds the quantity the user inputs
// var desire = 0;
var change = 0; // this var holds stockquantity - userquantity
var stock = 0; //this is the stockquantity held locally
var cost = 0; // this is the sum total of user transactions

//make connection object
var connection = mysql.createConnection({
	host: "LocalHost",
	port: 3306,
	user: 'root',
	password: "",
	database: "Bamazon"
});


//creates functioning connection to db
connection.connect(function(err){
	// if there is an error log it
	if (err) {
		console.log("error!");
		console.error('error connecting: ' + err.stack);
		return;
	}
	// if not error console.log connected
	// console.log("Success!");
	// console.log('connected as id: ' + connection.threadID);
	// console.log(connection);

});

//accesses all items from DB, calls userbegin

function showitems(){

	connection.query("SELECT * FROM products ORDER BY ItemID ASC", function(err, res){

		logger();

		if (err) throw err;

		for(q=0;q<res.length;q++){

			displayitem(q,res);
			line="";
		}

		logger();

		//this starts the user input chain
		userbegin();

	});
}

showitems();

//this function ques the user to enter an item and number successively, and checks to make sure they are valie. 
function userbegin(){


	if (cost == 0){
		console.log();	
		console.log("Would you like to buy anything? Enter the ID number of the product (or 'no' to exit):");

	}else{
		console.log();	
		console.log("Your purchases total to: $%d", cost); 
		console.log("Would you like anything else? Enter the ID number (or 'no' to exit):");

	}	

	prompt.get(['ID'],function(err, result){

		userID = result.ID;
		// console.log("user id = " + userID);

		
		if (userID == "N"||userID == "n"||userID == "no"||userID == "NO"||userID == "nO"||userID == "No"){

			console.log("Your purchases totalled to: $" + cost);
			console.log("Thank you for shopping with Bamazon.");
			process.exit();

		}else if (userID.length != 2 || userID%1 !== 0 || userID >= 20){

			console.log("Try again");
			console.log();

			userbegin();

		} else {

			//calls howmuch, asks user for quantity 
			userquantity();
		}

	});
}

//this is a subfunction of userbegin, it asks how many of them they want and re-calls itself if invalid
function userquantity(){

	// console.log("userquantity");

	connection.query("SELECT * FROM products WHERE ItemID = " + userID, function(err, resultUQ3){

		console.log("We have %d %s in stock, how many would you like?", resultUQ3[0].StockQuantity, resultUQ3[0].ProductName);
		stock = resultUQ3[0].StockQuantity;
	
	});

	//prompt user for quantity
	prompt.get(['quantity'], function(err, result){
			
			//sets global to the result
			theQuantity = result.quantity;

			//checks for valid quantity
			if(theQuantity <= 0 || theQuantity % 1 !== 0){

				console.log("Try again");
				userquantity();
			}
			// else if(isInteger(theQuantity>)) {}

			else{		

				//checks that quantity is not greater than stock
				if (theQuantity <= stock){

					// console.log("stock" + stock);
					// console.log("quantity" + theQuantity);

					stock = stock - theQuantity;

					//updates db quantity
					updatequery(userID, stock);

					//doublecheck db quantity
						connection.query("SELECT * FROM products WHERE ItemID = " + userID, function(err, resultUQ3){

						console.log("We have %d in stock, after that purchase", resultUQ3[0].StockQuantity);

						cost += Number((resultUQ3[0].Price * theQuantity).toFixed(2));			

						console.log();	
						console.log("The total cost of your transaction = $" + cost);
						console.log();		
					
						});

						showitems();

				}else {

					console.log("Not enough stock, choose a different amount:");
					userquantity();
					
				}
			}
	});	
}

//this function will update an item, you pass in the item id = k and quantity = j 
function updatequery(k, j){

	//this updates the quantity
	connection.query("UPDATE products SET StockQuantity = " + j + " WHERE ItemID =" + k, function(err, resultuq){

		if (err) throw err;

	});
} 

//this function will add spaces to item y, of array position x
function displayitem(x,y){

	line += "ID: " + y[x].ItemID;

	addspaces(7,line);
	line += y[x].ProductName;

	addspaces(35,line);
	line += "$" + y[x].Price;

	addspaces(45,line);
	line += "#" + y[x].StockQuantity;

	console.log(line);
	console.log();
}

//this just adds a bunch of spaces, called by the displayitem function only
function addspaces(x){

	for (z = line.length;z < x; z++)
	{line+=" ";} 
	
}

function logger(){

	console.log("=====================================================");
}