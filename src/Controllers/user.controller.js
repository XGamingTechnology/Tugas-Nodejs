// const { v4: uuidv4 } = require('uuid');
const { User } = require('../../models')

// uuidv4();

const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll()   
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json ({ message: 'Internal Server Error'})
    }
}

const createUser = (req, res) => {
    const body = req.body
    const {fullName, email, password,} = body
    User.create({fullName, email, password,status:'Active'})
    .then(result => {
        res.status(201).json({message: 'berhasil'})
    })
    .catch(err => {
        res.status(500).json({ message: 'internal Server Error'})
        console.log("err", err )

    })

}


module.exports = {
    getAllUser,
    createUser
}

// terdapat issue terkait pembacaan data ke database yang belum solvenpm