const fruits = require('../models/fruits')
const Fruit = require('../models/Fruit')

const fruitIndex = async(req, res) => {
    let data 
    try{

        data =await Fruit.find()
       
        console.log('data from mongo: ',data)
    }catch(err){
console.log("data eror",err)
    }
    res.render('folder/Index', { fruits: data })
}

const fruitNew = (req, res) => {
    res.render('New')
}

// "show" route
const fruitShow = async(req, res) => {
    console.log(req.params.id)
    //name = apple
    //name= apple , color:green, sort()
  const data = await Fruit.findById(req.params.id)
  console.log(data)
    res.render('Show', { fruit: data  })
    // res.send(fruits[req.params.index])
}

// "create" route
const fruitCreate = async(req, res) => {
    // console.log(req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    console.log(req.body)

    try{
    
   const result=  await Fruit.create(req.body)
   console.log('data saved ', result)
    }catch(err){
console.log('erro',err)
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
    console.log('delte')
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