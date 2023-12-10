// const { v4: uuidv4 } = require('uuid');
const { User, Nation } = require('../../models')
const bcrypt = require('bcrypt')
const BuildResponse = require('../modules/buildResponse')
const  yup = require('yup')
const { useValidation } = require('../middlewares/userValidation')

const createUserSchema = yup.object().shape({ 
    fullName: yup.string().required('Nama lengkap harus diisi'),
    email: yup.string().email().required('Email harus disis'),
    password: yup.string().required('Password harus disisi'),
})



// uuidv4();

const getAllUser = async (req, res) => {
    try {

        console.log(req.decoded, 'data decoded user')

        let { page, pageSize, fullName } = req.query
        page = parseInt(page) || 1
        pageSize = parseInt(pageSize) || 10

        let where = {}
        if (fullName) {
            where = { fullName }
        }

        const user = await User.findAll({
            include: [
                { 
                   model : Nation
                }
            ],
            limit: pageSize,
            offset: (page - 1) * pageSize,
            where
        })
        console.log(where)
        const total = await User.count()

        // perubahan
        const buildResponse = BuildResponse.get({data: user, total: total})
        
        res.status(200).json(buildResponse)
    } catch (error) {
        console.log(error)
        res.status(500).json ({ message: 'Internal Server Error'})
    }
}

const createUser = async (req, res) => {
     try {
         const body = req.body
         const {fullName, email, password,} = body

        const value = useValidation(createUserSchema, { fullName, email, password })

        console.log (value, 'adadadadadad')
                
         const saltRounds = 10
         const hashPassword = bcrypt.hashSync(password, saltRounds)

         await User.create({fullName, email, password:hashPassword,status:'Active'})
            res.status(201).json({ message: 'User created'})
       } catch (error) {
        res.status(500).json ({ message: 'Internal Server Error'})
        console.log('ini errrorrr', error)
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

        const buildResponse = BuildResponse.updated({})


        res.status(200).json({ buildResponse })
        // console.log(User)
    } catch (error) {
        // console.log(error)
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