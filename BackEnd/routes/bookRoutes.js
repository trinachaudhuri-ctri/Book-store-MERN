const express=require('express')
const router=express.Router()
const booksControllers=require('../controllers/book-controller')
var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()

router.get('/',booksControllers.getAllBooks)
router.post('/',booksControllers.addBook) 
router.get('/:id',booksControllers.getById)
router.put('/:id',booksControllers.updateBook)
router.delete('/:id',booksControllers.deleteBook)
module.exports=router