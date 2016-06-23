var Sequelize = require("sequelize"); 

var sequelize = require("../config/connection.js"); 

var Table = sequelize.define("character", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	routeName: {
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
	},
	role: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.INTEGER,
	},
	forcePoints: {
		type: Sequelize.INTEGER,
	},
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
