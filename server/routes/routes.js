const {Router} = require('express')
const router = Router()
const {racine} = require('../controllers/ctrl')

router.get('/',racine)

module.exports = router