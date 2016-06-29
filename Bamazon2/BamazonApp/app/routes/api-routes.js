var Bamazon = require('../../model/table.js');
var Sequelize = require ('sequelize');

module.exports = function(app){

	app.get('/all', function(req, res){

		console.log("/all");
		console.log("Object?")
		console.log(res.locals);

		Bamazon.findAll({}).then(function(result){
			res.json(result);
		});
	});

	app.get('/new', function(req, res){

		console.log(req.body);
		var newEntry = req.body;

		console.log("/new");

		Bamazon.create({
			ProductName: newEntry.Name,
			DepartmentName: newEntry.Department,
			Price: newEntry.Price,
			StockQuantity: newEntry.Stock
		});

		Bamazon.findAll({}).then(function(result){
			res.json(result);
		});
		
	});

	app.post('/delete', function(req, res){
		console.log(req.body.idNum);
		Bamazon.destroy({
			where:{
				ItemId: req.body.idNum
			}
		});
	});
}