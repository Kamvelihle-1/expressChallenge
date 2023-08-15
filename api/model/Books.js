const db = require ('../config')

class Books{
    fetchBooks(req,res){
        const query =`
        SELECT bookID, bookTitle, category, bookUrl
        FROM books;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchBook(req,res){
        const query =`
        SELECT bookID, bookTitle, category, bookUrl
        FROM books
        WHERE bookID = ${req.params.id};
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    updateBook(req,res){
        const query =`
        UPDATE books
        SET ?
        WHERE bookID = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg:"This book has been updated"
            })
        })
    }
    deleteBook(req,res){
        const query =`
        DELETE FROM books
        WHERE bookID = ${req.params.id};
        `
      db.query(query,(err)=>{
        if(err) throw err
        res.json({
            status:res.statusCode,
            msg:"This book has been deleted."
        })
      })
    }
    addBook(req,res){
        const data =req.body
        const query =`
        INSERT INTO books
        SET ? 
        `
        db.query(query,[data],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"This book has been added."
            })
        })
    }

}
module.exports = Books