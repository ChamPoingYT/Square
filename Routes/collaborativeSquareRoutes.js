const express = require('express');
const router = express.Router();
const collaborativeSquareController = require('../controllers/collaborativeSquareController');

router.post('/create', collaborativeSquareController.createSquare);
router.get('/', collaborativeSquareController.getSquares);

module.exports = router;
