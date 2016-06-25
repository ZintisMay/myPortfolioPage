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

}