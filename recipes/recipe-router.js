const express = require('express');

const Recipe = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
	Recipe.getRecipes()
		.then(recipe => {
			res.json(recipe);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get Recipe' });
		});
});

router.get('/:id/shoppingList', (req, res) => {
	const { id } = req.params;

	Recipe.getShoppingList(id)
		.then(recipe => {
			if (recipe) {
				res.json(recipe);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find recipe with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get Recipe' });
		});
});

router.get('/:id/Instructions', (req, res) => {
	const { id } = req.params;

	Recipe.getInstructions(id)
		.then(recipe => {
			if (recipe) {
				res.json(recipe);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find recipe with given id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get Recipe' });
		});
});

module.exports = router;
