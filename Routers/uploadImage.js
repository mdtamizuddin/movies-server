const router = require('express').Router()
const multer = require('multer')

const rendom = Math.floor(Math.random() * 420)


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, rendom + file.originalname);
    },
});

const upload = multer({
    storage: storage,
});

router.post("/", upload.single("image"), (req, res) => {
    res.send({ url: `http://localhost:5000/images/${req.file.filename}` });
});

module.exports = router