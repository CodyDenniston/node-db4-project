exports.up = function (knex) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.increments();

			tbl.string('name', 255).notNullable();
		})
		.createTable('ingredients', tbl => {
			tbl.increments();

			tbl.string('name', 255).notNullable();
		})
		.createTable('recipes_ingredients', tbl => {
			tbl.increments();
			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('CASCADE') // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
				.onUpdate('CASCADE');

			tbl
				.integer('ingredients_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('CASCADE') // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
				.onUpdate('CASCADE');

			tbl.integer('Quantity_of_ingredient');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
