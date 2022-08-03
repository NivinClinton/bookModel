import express from 'express'
import { addBooks, deleteBook, getAllBooks, updateBook } from '../controllers/bookController.js'

const bookRouter = express.Router()

bookRouter.post('/addbook' ,addBooks)
bookRouter.get('/',getAllBooks)
bookRouter.put("/update/:id",updateBook);
bookRouter.delete("/:id", deleteBook);


export default bookRouter