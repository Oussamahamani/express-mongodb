const fruitController = require('../controllers/fruitController')

const express = require('express')

const router = express.Router()

// const fruits = require('../models/fruits')

// fruits get 
// "index" route
router.get('/', fruitController.fruitIndex)

// "new" route
router.get('/new', fruitController.fruitNew)

// seed router
router.get('/seed',fruitController.fruitSeed)

//delete all
router.get('/clear',fruitController.fruitClear)
// "show" route
router.get('/:id', fruitController.fruitShow)

// "create" route
router.post('/', fruitController.fruitCreate)

// "edit" route
router.get('/:id/edit', fruitController.fruitEdit)

// "destroy" route
router.delete('/:id', fruitController.fruitDelete)

// "update" route
router.put('/:id', fruitController.fruitUpdate)

module.exports = router