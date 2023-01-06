const router = require('express').Router()
const Email = require('../Models/Email')
const File = require('../Models/Files')

router.get('/', (req, res) => {
    File.find({}, (err, data) => {
        if (data) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
})

router.post('/', async (req, res) => {
    const newFile = new File(req.body)
    const storageId = req.body.storageId
    const getStorage = await Email.findOne({ _id: storageId })
    const updateStorage = await Email.updateOne({ _id: storageId }, {
        $set: {
            avaiable: getStorage.avaiable - req.body.size
        }
    })

    if (updateStorage.modifiedCount > 0) {
        newFile.save((err, data) => {
            if (data) {
                res.status(200).send({ message: "Data Is Inserted Success", data, success: true })
            } else {
                res.status(500).send({ message: "Something went Wrong", err })
                console.log(err)
            }
        })
    }
    else {
        res.send({ success: false, message: "Something went wrong" })
    }

})

router.delete('/:id', (req, res) => {
    File.deleteOne({ _id: req.params.id }, (err, data) => {
        if (data) {
            res.status(200).send({ message: "Data Is Deleted Success", data })
        } else {
            res.status(500).send({ message: "Something went Wrong", err })
        }
    })
})

module.exports = router
