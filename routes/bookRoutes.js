const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticated = require('../middlewares/authMiddleware')

router.post('/books',authenticated, bookController.createBook);
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id',authenticated, bookController.updateBookById);
router.delete('/books/:id', authenticated, bookController.deleteBookById);

module.exports = router;