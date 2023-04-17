const mysql = require('mysql');

const connection  = mysql.createConnection({

    host:"localhost",
    user: "root",
    password :"",
    database : "NodeTest"
})


connection.connect((err)=>{
    if(err) throw err
    console.log('Connection SQL reussie!');
})