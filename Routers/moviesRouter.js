const router = require('express').Router()
const Movies = require('../Models/Movies')

router.get('/', (req, res) => {
  Movies.find({}, (err, data) => {
    if (data) {
      const newMovie = data.reverse()
      res.send(newMovie)
    } else {
      res.send(err)
    }
  })
})
router.get('/:id', (req, res) => {
  Movies.findOne({ _id: req.params.id }, (err, data) => {
    if (data) {
      res.send(data)
      Movies.updateOne({ _id: req.params.id }, {
        $set: {
          visit: data.visit + 1
        }
      }, (err, data) => {

      })
    } else {
      res.send(err)
    }
  });

})
router.get('/get/:id', (req, res) => {
  Movies.findOne({ _id: req.params.id }, (err, data) => {
    if (data) {
      res.send(data)
    } else {
      res.send(err)
    }
  });

})
router.get('/popular/2023/now', async (req, res) => {
  const data = await Movies.find({})
  var numArray = [34, 140000, 104, 99];
  const popular = await data.sort((a, b) => {
    return b.visit - a.visit
  })
  res.send(popular)
})

router.get('/category/:name', async (req, res) => {
  const data = await Movies.find({})
  const category = await data.filter(item => item.categorys.toLowerCase().includes(req.params.name.toLowerCase()));
  console.log(category.length, req.params.name)
  res.send(category)
})
router.get('/genres/:name', async (req, res) => {
  const data = await Movies.find({})
  const category = await data.filter(item => item.genre.toLowerCase().includes(req.params.name.toLowerCase()));
  res.send(category)
})

router.get('/name/:name', async (req, res) => {
  const data = await Movies.find({})
  const category = await data.filter(item => item.name.toLowerCase().includes(req.params.name.toLowerCase()))
  res.send(category)
})

router.put('/:id', (req, res) => {
  const { name, title, resulation, trailer, language, format, categorys, genre, date, actor, duration, story, release } = req.body
  Movies.updateOne({ _id: req.params.id }, {
    $set: {
      name: name,
      title: title,
      resulation: resulation,
      trailer: trailer,
      language: language,
      format: format,
      categorys: categorys,
      genre: genre,
      date: date,
      actor: actor,
      duration: duration,
      story: story,
      release: release
    }
  }, (err, data) => {
    if (err) {
      res.status(500).send({ message: "Something went wrong" })
    }
    else {
      res.send({ message: "Data Is modifyed Success" })
    }
  })
})

router.post('/', (req, res) => {
  const newMovie = new Movies(req.body)
  newMovie.save((err, data) => {
    if (data) {
      res.status(200).send({ message: "Data Is Inserted Success", data })
    } else {
      res.send({ message: "Something went Wrong", err })

    }
  })
})

router.delete('/:id', (req, res) => {
  Movies.deleteOne({ _id: req.params.id }, (err, data) => {
    if (data) {
      res.status(200).send({ message: "Data Is Deleted Success", data })
    } else {
      res.status(500).send({ message: "Something went Wrong", err })
    }
  })
})

module.exports = router
