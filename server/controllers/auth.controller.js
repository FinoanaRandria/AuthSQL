const con = require('../config/db');
const {getUser} = require('../models/auth')


//Get 
exports.login = (req, res) => {
  res.render("Login");
};

exports.register = (req, res) => {
  res.render("Register");
};

exports.home = (req, res) => {
  res.render("Home");
};

//post 

exports.postLogin = async (req,res)=>{
   const dataBd = await getUser()
  const email  =  req.body.email
  const password = req.body.password
     
    //mappage
    const dbMapEmail = dataBd.map(elmt => elmt.name) 
    const dbMapPassword = dataBd.map(elmt => elmt.password)
     //filtrage
      const filtreEmail = dbMapEmail.filter(elmt =>{
          return elmt == email
      })
      const filterPassword = dbMapPassword.filter(elmt=>{
        return elmt == password 
      })

      if(filtreEmail[0] == email && filterPassword[0] == password ){
         
          res.redirect('/home')
            res.end()
      }else{
           res.redirect('/')
      }



}


exports.postRegister = (req,res)=>{
   const email = req.body.emailRegister
   const password = req.body.passwordRegister
    const confirmPasswrd = req.body.confirmPasswordRegister
   if( password == confirmPasswrd){

     con.connect((err)=>{
        if(err) throw err;
        const sql = `INSERT INTO user (name, password) VALUES ('${email}', '${password}')`;
   
    con.query(sql,(err,result)=>{
        if (err) throw err;
        console.log('insered in to db');
    })

    })
          res.redirect('/')
   }else{

      res.redirect('/register')
   }

   
   

     res.end()
}