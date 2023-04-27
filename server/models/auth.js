const con = require('../config/db')

const getUser = ()=>{
    return new Promise((resolve,reject)=>{
        con.query('SELECT * FROM user ' ,(err,result,field)=>{
               if(err){
                reject(err)
               }else{
                 resolve(result)
               }
        })

    })
}




module.exports = {
  getUser,

}