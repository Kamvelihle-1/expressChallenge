const db = require ('../config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require ('../middleware/AuthonticateUser')

class Users{
    fetchUsers(req,res){
        const query =`
        SELECT userID, firstName,lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchUser(req,res){
        const query =`
        SELECT userID, firstName,lastName, gender, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,(err,result)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                result
            })
        })
    }
    login(req,res){
    }
   async register(req,res){
        const data =req.body
        data.userPass = await hash(data.userPass,15)
        //payload
        const user ={
            emailAdd : data.emailAdd,
            userPass : data.userPass
        }
        const query =`
        INSERT INTO Users
        SET ?
        `
        db.query(query,[data],(err)=>{
            if (err) throw err

            let token = createToken(user)
            res.cookie('UserCookie',token,
            {
                maxAge:3600000,
                httpOnly:true
            })
            res.json({
                status:res.statusCode,
                msg:"You are now registered."
            })
        })
    }
    updateUser(req,res){
        const query =`
        UPDATE Users
        SET ? 
        WHERE userID = ${req.params.id};
        `
        db.query(query,[req.body],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been updated "
            })
        })
    }
    deleteUser(req,res){
        const query =`
        DELET FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been deleted."
            })
        })
    }
}
module.exports = Users