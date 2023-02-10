const express = require('express')
const { buyerController } = require('../controller/buyerController')
const router = express.Router()



router.get('/',buyerController.getAll)
router.post('/',buyerController.add)
router.get('/:id',buyerController.getById)
router.delete('/:id',buyerController.delete)
router.put('/:id',buyerController.update)



module.exports = router;