const {Router} = require('express')
const router = Router()
const {login,register} = require('../controllers/ctrl')

router.get('/',login)
router.get('/register',register)
module.exports = router