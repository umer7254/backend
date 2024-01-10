import express from 'express';
import {createBook, getBook, getBookID , } from '../controllers/book.js';

const router = express.Router();


router.post('/createbook', createBook);
router.get('/books', getBook);
router.get('/books/:id', getBookID);


export default router;