const router = require('express').Router()
const Category = require('../Models/Category')

router.get('/', (req , res) => {
  Category.find({},(err , data) => {
    if (data) {
      res.send(data)
    } else {
      res.send(err)
    }
  })
})

router.post('/', (req ,res) => {
  const newCategory = new Category(req.body)
  newCategory.save((err , data) => {
    if (data) {
      res.status(200).send({message: "Data Is Inserted Success", data})
    } else {
      res.status(500).send({message: "Something went Wrong", err})
    }
  })
})

router.delete('/:id', (req , res)=> {
  Category.deleteOne({_id : req.params.id},(err , data)=> {
    if (data) {
      res.status(200).send({message: "Data Is Deleted Success", data})
    } else {
      res.status(500).send({message: "Something went Wrong", err})
    }
  })
} )

module.exports = router
