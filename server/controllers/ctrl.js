const {ORM} = require('../models/Orm')


var db = new ORM('user')





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
exports.postLogin = async (req,res)=>{
     const data = req.body
            console.log(data);
    
     const collect = await db.recuperer('name,password','')
     
        console.log(collect);




    res.end()
        
}