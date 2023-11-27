// const { v4: uuidv4 } = require('uuid');
const { User } = require('../../models')

// uuidv4();

const getAllUser = (req, res) => {
    console.log('ini jadi apa', User)
    User.findAll()
        .then(result => {
            res.json({result})
        })
        .catch(err => {
            res.status(500).json({ message: 'internal Server Error'})
            console.log("err", err )

        })
}

module.exports = {
    getAllUser
}

// terdapat issue terkait pembacaan data ke database yang belum solvenpm