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
     const emailPost = req.body.email
     const passwordPost = req.body.password ;

      console.log(passwordPost);
      
    
     const collect = await db.recuperer('name,password','')          
        //console.log(collect);
      
        const email = collect.map(elmt => elmt.name)
        console.log(email);
        console.log(emailPost);
        const password = collect.map(elmt => elmt.password)
         //filter

         const filterEmail = email.filter(elmts =>{
            return elmts == emailPost 
         })
      
           const filterMdp = password.filter(elmts =>{
                return elmts == passwordPost
           })
           console.log(filterEmail);
           console.log(filterMdp);
        if(emailPost == filterEmail[0] && passwordPost == filterMdp[0]){
             
              res.redirect('/home')
                
        }

        
        


res.end();
            
}