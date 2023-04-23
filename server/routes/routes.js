const {Router} = require('express')
const router = Router()
const {login,register,home,postLogin} = require('../controllers/ctrl')

//get 
router.get('/',login)
router.get('/register',register)
router.get('/home',home)
//post 


router.post('/post1',postLogin)





module.exports = router