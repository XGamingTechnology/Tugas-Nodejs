const { fix } = require('../../models')

const getAllUser = (req, res) => {
    console.log('ini jadi apa', fix)
    fix.findAll()
        .then(result => {
            res.json({result})
        })
        .catch(err => {
            res.status(500).json({ message: 'internal Server Error'})

        })
}

module.exports = {
    getAllUser
}

// terdapat issue terkait pembacaan data ke database yang belum solvenpm