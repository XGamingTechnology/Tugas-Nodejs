const { User } = require('../../models')

const getAllUser = (req, res) => {
    console.log('User', User)
    User.findAll()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({ message: 'internal Server Error'})

        })
}

module.exports = {
    getAllUser
}

// terdapat issue terkait pembacaan data ke database yang belum solve