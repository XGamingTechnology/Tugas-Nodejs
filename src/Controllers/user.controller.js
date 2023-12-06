// const { v4: uuidv4 } = require('uuid');
const { User, Nation } = require('../../models')
const bcrypt = require('bcrypt')
// uuidv4();

const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll({
            include: [
                { 
                   model : Nation
                }
            
            ]
        })   
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json ({ message: 'Internal Server Error'})
    }
}

const createUser = async (req, res) => {
     try {
         const body = req.body
         const {fullName, email, password,} = body

         const saltRounds = 10
         const hashPassword = bcrypt.hashSync(password, saltRounds)

         await User.create({fullName, email, password:hashPassword,status:'Active'})
            res.status(201).json({ message: 'User created'})
       } catch (error) {
        res.status(500).json ({ message: 'Internal Server Error'})
     }

}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { fullName, email, status, NationId } = body
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error('User not found')
            // console.log(new Error)
        }

        await User.update({ fullName, email, status:'Active', NationId },{ where: { id } })

        res.status(200).json({ message: 'User updated'})
        console.log(User)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error'})
    }
    
}
console.log(updateUser)

module.exports = {
    getAllUser,
    createUser,
    updateUser
}
console.log(updateUser)
// terdapat issue terkait pembacaan data ke database yang belum solvenpm