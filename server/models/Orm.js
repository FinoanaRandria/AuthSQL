const cnx = require('../models/db')


class ORM_MYSQL{

   constructor(name){
      this.table_name = name
   }

    //methode Recup

     recuperer = async(colonne,others)=>{

    return new Promise((resolve,reject)=>{
        cnx?.connexion.query(`SELECT ${String(colonne)}  FROM ${this.table_name} ${others} `,(err,data,fields)=>{
              
             if(err){
                reject(err)
             }else{
                 resolve(data)
             }


        })
 

    })

     }
  


}




module.exports = {

    ORM : ORM_MYSQL 
}