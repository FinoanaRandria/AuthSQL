const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NodeTest",
});



  con.query("SELECT * FROM user ", (err, result) => {

        data = result
       
   }
   
 );




con.connect((err) => {
  if (err) throw err;

  console.log("Connexion BD SQL reussie!");
 
});

module.exports = {
  
  
  





}