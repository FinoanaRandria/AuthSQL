const mysql = require("mysql");

const auto_detect_bd = ()=>{

 const cnx =  mysql?.createConnection?.({
    host: "localhost",
    user: "root",
    password: "",
    database: "NodeTest",
  });
 
     if(cnx!= "undefined"){
      return {
         type: "Mysql",
         connexion: cnx
      }
     }

}


module.exports =auto_detect_bd() ?? console.log('aucune connexion a la base de donne')


  

