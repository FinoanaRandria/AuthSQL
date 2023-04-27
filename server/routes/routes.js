const {Router} = require('express')
const router = Router()
const {login,register,home,postLogin,postRegister} = require('../controllers/auth.controller')

//get 
router.get('/',login)
router.get('/register',register)
router.get('/home',home)
//post 


router.post('/post1',postLogin)
router.post('/post2',postRegister)



module.exports = router