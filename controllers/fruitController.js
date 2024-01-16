const fruits = require('../models/fruits')

const fruitIndex = (req, res) => {
    res.render('Index', { fruits: fruits })
}

const fruitNew = (req, res) => {
    res.render('New')
}

// "show" route
const fruitShow = (req, res) => {
    res.render('Show', { fruit: fruits[req.params.index], index: req.params.index })
    // res.send(fruits[req.params.index])
}

// "create" route
const fruitCreate = (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
}

// "edit" route
const fruitEdit = (req, res) => {
    res.render('Edit', { fruit: fruits[req.params.index], index: req.params.index })
}

// "destroy" route
const fruitDelete = (req, res) => {
    fruits.splice(req.params.index, 1)
    console.log('deleting')
    res.redirect('/fruits')
}

// "update" route
const fruitUpdate = (req, res) => {
    console.log('update')
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits[req.params.index] = req.body
    res.redirect(`/fruits/${req.params.index}`)
}

module.exports = {
    fruitCreate,
    fruitDelete,
    fruitEdit,
    fruitIndex,
    fruitNew,
    fruitShow,
    fruitUpdate
}