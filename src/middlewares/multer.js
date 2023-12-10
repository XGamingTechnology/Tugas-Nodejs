const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename(req, file, cb) {
        cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    },
})

// validasi jenis file 
const fileFilter = (Preq, file, cb) => {
    const allowdTypes = /jpeg|jpg|png/

    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = allowedTypes.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    }
    cb('Erro: Hanya diperbolehkan mengunggah file gambar (jpeg/jpg/png)')
}

const upload = multer({ storage: storage })

module.exports ={ upload }