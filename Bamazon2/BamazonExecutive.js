//vars etc...
var prompt = require('prompt');
prompt.start();
var mysql = require('mysql');
var line = "";


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
});

//welcome
console.log("Welcome to Bamazon:");

//intro
function intro(){

	logger();
	console.log("MENU:")
	console.log("(1): View Products for Sale");
	console.log("(2): View Low Inventory");
	console.log("(3): Add to Inventory");
	console.log("(4): Add New Product");
	console.log("(x): Exit");

	logger();
	console.log("What would you like to do? 1-4:");

	input14();
}

intro();

function input14(){

	console.log();

	prompt.get(['input'],function(err, result){

		console.log();

		switch(result.input){

			case "1": 
				console.log("Viewing Products:");
				viewProducts();
				break;

			case "2": 
				console.log("Viewing Low Inventory");
				lowInventory();
				break;

			case "3": 
				console.log("Adding to Inventory");
				addInventory();
				break;

			case "4":
				console.log("Add New Product");
				addNew();
				break;
			case "x":
				console.log("Goodbye");
				process.exit();

			default: 
				console.log("Try again");
				input14();
				break;

		}

	});

}

function viewProducts(){
	
	showitems();
	
}

function addNew(){
	
}

function logger(){

	console.log("=====================================================");
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

//accesses all items from DB
function showitems(){

	console.log();

	connection.query("SELECT * FROM products ORDER BY ItemID ASC", function(err, res){

		logger();

		if (err) throw err;

		for(q=0;q<res.length;q++){

			displayitem(q,res);
			line="";
		}

		logger();

		intro();

	});
}

//accesses all items with stock<10 from DB
function lowInventory(){

	connection.query("SELECT * FROM products WHERE StockQuantity < 10 ORDER BY StockQuantity ASC", function(err, res){

		if (err) throw err;

		logger();
		
		for(q=0;q<res.length;q++){

			displayitem(q,res);
			line="";
		}

		logger();

		intro();

	});
}

// adds more items to inventory stock
function addInventory(){

	//temp object to hold the parameters
	var object = {
		newID: 0,
		ProductName: "",
		DepartmentName: "",
		Price: 0,
		StockQuantity: ""
	};

	var tempstock = 0;

	//user input
	prompt.get(['newID', 'StockQuantity'],function(err, result){

		object.newID = result.newID;
		object.StockQuantity = result.StockQuantity;
		
		console.log(object);

		//makes the tempquery call string4

		tempquery = "SELECT * FROM products WHERE ItemID = " + object.newID + ";";

		console.log(tempquery);

		connection.query(tempquery, function(err, result2){

			if (err) throw err;
				console.log(tempstock);
				console.log(result2.StockQuantity);
			tempstock = result2.StockQuantity;
				console.log(tempstock);
			tempstock += object.StockQuantity;
				console.log(tempstock);
			tempquery = "UPDATE products SET StockQuantity = " + tempstock + " WHERE ItemID = " + object.newID + ";";

			connection.query(tempquery, function(err, results){

				if (err) throw err;
			
			});
		
		});

	});	
}

//adds an new type of item to inventory, you must define it's parameters first
function addNew(){

	//temp object to hold the parameters
	var object = {
		newID: 0,
		ProductName: "",
		DepartmentName: "",
		Price: 0,
		StockQuantity: ""
	};

	//the query to hold themysql call
	var tempquery = "";

	//user input
	prompt.get(['newID','ProductName','DepartmentName','Price','StockQuantity'],function(err, result){

		object.newID = result.newID;
		object.DepartmentName = result.DepartmentName;
		object.Price = result.Price;
		object.StockQuantity = result.StockQuantity;
		object.ProductName = result.ProductName;

	//makes the tempquery call string
		tempquery = "INSERT INTO products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES ("
		 + object.newID + ", '" 
		 + object.ProductName + "', '" 
		 + object.DepartmentName + "', " 
		 + object.Price + ", " 
		 + object.StockQuantity + ");";

	 //sends the query
	 	sendquery(tempquery);
	});	

}

//was being used as a piecemeal prompt.get function, not being used now
function getthis(x){

	prompt.get([x],function(err, result){

		object.x = result.x;

		console.log(object);

	});	
}

//sends a query, can be nested
function sendquery(x){

	connection.query(x, function(err, result){

		if (err) throw err;

		console.log(result);

		intro();

	});

}
