var Bamazon = require('../../model/table.js');

module.exports = function(app){

	app.get('/all', function(req, res){

		console.log("/all");
		console.log("Object?")
		console.log(res.locals);

		Bamazon.findAll({where: {ItemID: 1}}).then(function(result){
			res.json(result);
		});
	});

}