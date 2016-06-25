var Sequelize = require("sequelize"); 

var sequelize = require("../config/connection.js"); 

var Bamazon = sequelize.define("Bamazon", {
	ItemID: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	ProductName: {
		type: Sequelize.STRING,
	},
	DepartmentName: {
		type: Sequelize.STRING,
	},
	Price: {
		type: Sequelize.STRING,
	},
	StockQuantity: {
		type: Sequelize.INTEGER,
	}
	// createdAt:{
	// 	type: Sequelize.DATETIME,
	// },
	// updatedAt:{
	// 	type: Sequelize.DATETIME,
	// }

});

Bamazon.sync().then(function(post){
	console.log("sync");
	console.log(post);
	console.log("sync");
});

module.exports = Bamazon;

//
//
//pretty sure this one is good to go