const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
//import all model's objects
const {users,books,bookAuthors,orders} = require('../model')

//=====Routes for users=====
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.fetchUser(req,res)
})
routes.post('/register',bodyParser.json(),(req,res)=>{
    users.register(req,res)
})
routes.put('/user/:id',bodyParser.json(),(req,res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    users.deleteUser(req,res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

//====Routes for books=====
routes.get('/books',(req,res)=>{
    books.fetchBooks(req,res)
})
routes.get('/book/:id',(req,res)=>{
    books.fetchBook(req,res)
})
routes.put('/book/:id',bodyParser.json(),(req,res)=>{
    books.updateBook(req,res)
})
routes.delete('/book/:id',(req,res)=>{
    books.deleteBook(req,res)
})
routes.post('/addBook',bodyParser.json(),(req,res)=>{
    books.addBook(req,res)
})

//====Routes for book authors=====
routes.get('/authors',(req,res)=>{
    bookAuthors.fetchAuthors(req,res)
})
routes.get('/author/:id',(req,res)=>{
    bookAuthors.fetchAuthor(req,res)
})
routes.put('/author/:id',bodyParser.json(),(req,res)=>{
    bookAuthors.updateAuthor(req,res)
})
routes.delete('/author/:id',(req,res)=>{
    bookAuthors.deleteAuthor(req,res)
})
routes.post('/addAuthor',bodyParser.json(),(req,res)=>{
    bookAuthors.addAuthor(req,res)
})

//====Routes for orders=====
routes.get('/orders',(req,res)=>{
    bookAuthors.fetchOrders(req,res)
})
routes.get('/order/:id',(req,res)=>{
    bookAuthors.fetchOrder(req,res)
})
routes.put('/order/:id',bodyParser.json(),(req,res)=>{
    bookAuthors.updateOrder(req,res)
})
routes.delete('/order/:id',(req,res)=>{
    bookAuthors.deleteOrder(req,res)
})
routes.post('/addOrder',bodyParser.json(),(req,res)=>{
    bookAuthors.addOrder(req,res)
})

module.exports ={
    express,
    routes
}

