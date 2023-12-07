const { User }= require('../../models')
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

    console.log(accessToken, "token" )

    } catch (error) {
        console.log("ini data eror", error)
        res.json({ message: 'Internal server error'})

    }

}

module.exports ={
    login,
}