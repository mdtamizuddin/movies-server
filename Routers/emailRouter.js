const router = require('express').Router()
const Email = require('../Models/Email')

router.get('/', (req, res) => {
    Email.find({}, (err, data) => {
        if (data) {
            const newData = data.reverse()
            res.send(newData)
        } else {
            res.send(err)
        }
    })
})

router.post('/', (req, res) => {
    const newEmail = new Email(req.body)
    newEmail.save((err, data) => {
        if (data) {
            res.status(200).send({ message: "Data Is Inserted Success", data })
        } else {
            res.status(500).send({ message: "Something went Wrong", err })
        }
    })
})

router.delete('/:id', (req, res) => {

    Email.deleteOne({ _id: req.params.id }, (err, data) => {
        if (data) {
            res.status(200).send({ message: "Data Is Deleted Success", data })
        } else {
            res.status(500).send({ message: "Something went Wrong", err })
        }
    })
})

module.exports = router
