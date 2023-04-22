const {ORM} = require('../models/Orm')


var db = new ORM('user')


db.recuperer('*','').then(data =>{
   console.log(data);
})

exports.login = (req, res) => {
  res.render("Login");
};

exports.register = (req, res) => {
  res.render("Register");
};
