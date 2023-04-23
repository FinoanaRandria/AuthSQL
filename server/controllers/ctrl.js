const {ORM} = require('../models/Orm')


var db = new ORM('user')


db.recuperer('name,password','').then(data =>{
   console.log(data);
})


//get 
exports.login = (req, res) => {
  res.render("Login");
};

exports.register = (req, res) => {
  res.render("Register");
};

exports.home = (req,res)=>{
  res.render("Home")

}


//post 
exports.postLogin = (req,res)=>{
     console.log(req.body);

     res.end()
}