const express = require('express')
const { categoryController } = require('../controller/categoryController')
const router = express.Router()



router.get('/',categoryController.getAll)
router.post('/',categoryController.add)
router.get('/:id',categoryController.getById)
router.delete('/:id',categoryController.delete)
router.put('/:id',categoryController.update)



module.exports = router;