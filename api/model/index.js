const Users = require('./Users')
const Books = require('./Books')
const Orders = require('./Orders')
const BookAuthors = require('./BookAuthors')

module.exports ={
    users: new Users(),
    books: new Books(),
    orders: new Orders(),
    bookAuthors: new BookAuthors()
}