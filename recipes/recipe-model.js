const knex = require('knex');
const knexFile = require('../knexfile');
const db = knex(knexFile.development);

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
};

function getRecipes() {
	return db('recipes');
}

function getShoppingList(recipe_id) {
	return db('recipes_ingredients').where('recipe_id', recipe_id);
}

function getInstructions(recipe_id) {
	return db('recipes_ingredients').where('recipe_id', recipe_id);
}
