const db = require ('../config')
class bookAuthors{
    fetchAuthors(req,res){
        const query =`
        SELECT id,authorName,authorSurname,bookID
        FROM BookAuthor;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchAuthor(req,res){
        const query =`
        SELECT id,authorName,authorSurname,bookID
        FROM BookAuthor
        WHERE id = ${req.params.id};
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    updateAuthor(req,res){
        const query =`
        UPDATE BookAuthor
        SET ?
        WHERE id = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg:"This author has been updated"
            })
        })
    }
    deleteAuthor(req,res){
        const query =`
        DELETE FROM BookAuthor
        WHERE id = ${req.params.id};
        `
      db.query(query,(err)=>{
        if(err) throw err
        res.json({
            status:res.statusCode,
            msg:"This author has been deleted."
        })
      })
    }
    addAuthor(req,res){
        const data =req.body
        const query =`
        INSERT INTO BookAuthor
        SET ? 
        `
        db.query(query,[data],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"This author has been added."
            })
        })
    }
}
module.exports = bookAuthors