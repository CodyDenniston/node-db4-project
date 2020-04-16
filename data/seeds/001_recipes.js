exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipes')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('recipes').insert([
				{ id: 1, name: 'Apple Pie' },
				{ id: 2, name: 'Bacon&Eggs' },
				{ id: 3, name: 'Cereal' },
			]);
		});
};
