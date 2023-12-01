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

const createUser = async (req, res) => {
     try {
         const body = req.body
         const {fullName, email, password,} = body
         await User.create({fullName, email, password,status:'Active'})
            res.status(201).json({ message: 'User created'})
       } catch (error) {
        res.status(500).json ({ message: 'Internal Server Error'})
     }

}


module.exports = {
    getAllUser,
    createUser
}

// terdapat issue terkait pembacaan data ke database yang belum solvenpm