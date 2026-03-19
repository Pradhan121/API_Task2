const express = require('express')
const router = express.Router();
const multer = require('multer')

const getAuth = require('../controller/auth')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

router.get('/getAuth', getAuth.getDataAuth)
router.post('/register', upload.single('profile'), getAuth.register)
router.post('/login', getAuth.login)

module.exports = router