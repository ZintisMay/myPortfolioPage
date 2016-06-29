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

	app.post('/new', function(req, res){

		console.log(req.body);
		var newEntry = req.body;

		console.log("/new (api call)");

		Bamazon.create({
			ProductName: newEntry.Name,
			Price: newEntry.Price,
			StockQuantity: newEntry.Stock,
			DepartmentName: newEntry.Department

		});
	});

	// app.post('/update', function(req, res){

	// 	console.log(req.body);
	// 	var idTarget = req.body;

	// 	console.log("/new (api call)");

	// 	Bamazon.find({where:{ItemID: idTarget.name}}).on('success', function(Bamazon){
	// 		if (Bamazon){
	// 			Bamazon.updateAttributes({
	// 				StockQuantity: 
	// 			})
	// 		}
	// 	})
			

	// 	});
	// });

	app.post('/delete', function(req, res){
		console.log(req.body.idNum);
		Bamazon.destroy({
			where:{
				ItemID: req.body.idNum
			}
		});
	});

	app.post
}