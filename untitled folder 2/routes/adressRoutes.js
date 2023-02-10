const express = require('express')
const { adressController } = require('../controller/adressController')
const router = express.Router()



router.get('/',adressController.getAll)
router.post('/',adressController.add)
router.get('/:id',adressController.getById)
router.delete('/:id',adressController.delete)
router.put('/:id',adressController.update)



module.exports = router;