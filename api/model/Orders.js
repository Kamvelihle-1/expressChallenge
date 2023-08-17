const db = require ('../config')
class Orders{
    fetchOrders(req,res){
        const query =`
        SELECT o.orderID,o.orderDate, b.bookTitle, b.category, b.bookUrl
        FROM orders o
        LEFT JOIN books b
        USING (bookID)
        UNION
        SELECT CONCAT(a.authorName,'',a.authorSurname) 'Author'
        FROM BookAuhor a
        LEFT JOIN orders o
        USING (id);
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchOrder(req,res){
        const query =`
        SELECT o.orderID,o.orderDate, b.bookTitle, b.category, b.bookUrl
        FROM orders o
        LEFT JOIN books b
        USING (bookID)
        WHERE o.orderID = ${req.params.id}
        UNION
        SELECT CONCAT(a.authorName,'',a.authorSurname) 'Author'
        FROM BookAuhor a
        LEFT JOIN orders o
        USING (id)
        WHERE o.orderID = ${req.params.id};
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    updateOrder(req,res){
        const query =`
        UPDATE orders
        SET ?
        WHERE orderID = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg:"This book has been updated"
            })
        })
    }
    deleteOrder(req,res){
        const query =`
        DELETE FROM orders
        WHERE orderID = ${req.params.id};
        `
      db.query(query,(err)=>{
        if(err) throw err
        res.json({
            status:res.statusCode,
            msg:"This book has been deleted."
        })
      })
    }
    addOrder(req,res){
        const data =req.body
        const uID =req.params.userID
        const oID =req.params.orderID
        const bID = req.params.bookID 
        // const dt= new Date()
        // const ndt = `${dt.getFullYear()}-${dt.getMonth() +1}-${dt.getDate()}`  
        const query =`
        INSERT INTO orders
        (orderID,userID,bookID,)
        VALUES('${oID}',${uID},'${bID}')
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
module.exports =Orders;