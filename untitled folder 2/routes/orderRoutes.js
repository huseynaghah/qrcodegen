const express = require('express')
const { orderController } = require('../controller/orderController')
const router = express.Router()



router.get('/',orderController.getAll)
router.post('/',orderController.add)
router.get('/:id',orderController.getById)
router.delete('/:id',orderController.delete)
router.put('/:id',orderController.update)


module.exports = router;