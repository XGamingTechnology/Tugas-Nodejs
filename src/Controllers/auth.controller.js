const { User }= require('../../models')
const BuildResponse = require('../modules/buildResponse')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try { 
      const { email, password } = req.body

    //   ambil data user bersangkutan
    const user = await User.findOne ({ where: { email }, raw: true })

    if (!User) {
        throw new Error('User not found')
    }

    // generate token
    const payload = {
        role: user.role,
        id: user.id,
    }
    const options = { expiresIn: '5m'}
    const secretkey = 'sagsagsagsagsagas99sagsagsagagss'
    
    const accessToken = jwt.sign(payload, secretkey, options)

    const response = { accessToken, user}
    const buildResponse = BuildResponse.created({ response })

    return res.status(201).json(buildResponse)

    console.log(accessToken, "token" )

    } catch (error) {
        console.log("ini data eror", error)
        res.json({ message: 'Internal server error'})

    }

}

module.exports ={
    login,
}