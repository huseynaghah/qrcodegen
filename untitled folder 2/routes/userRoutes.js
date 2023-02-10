const express = require('express')
const { userController } = require('../controller/userController')
const router = express.Router()



router.get('/',userController.getAll)
router.post('/',userController.add)
router.post('/mail',userController.sendEmail)


module.exports = router;