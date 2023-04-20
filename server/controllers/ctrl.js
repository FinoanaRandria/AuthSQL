const result = JSON.parse(require('../models/db'));

console.log(result);


exports.login = (req, res) => {
  res.render("Login");
};

exports.register = (req, res) => {
  res.render("Register");
};
