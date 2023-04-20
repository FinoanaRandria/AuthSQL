const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "NodeTest",
});

con.connect((err) => {
  if (err) throw err;

  console.log("Connexion BD SQL reussie!");
  con.query("SELECT * FROM user ", (err, result) => {

    module.exports = JSON.stringify(result);
    //console.log(result);
  });
});
