exports.up = function (knex) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.string('id', 255).primary();

			tbl.string('name', 255).notNullable();
		})
		.createTable('recipes_ingredients', tbl => {
			tbl
				.string('recipe_id', 255)
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('RESTRICT') // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
				.onUpdate('CASCADE');

			tbl
				.string('ingredients_id', 255)
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('RESTRICT') // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
				.onUpdate('CASCADE');
		})
		.createTable('ingredients', tbl => {
			tbl.string('id', 255).primary();

			tbl.string('name', 255).notNullable();
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('recipes');
};
