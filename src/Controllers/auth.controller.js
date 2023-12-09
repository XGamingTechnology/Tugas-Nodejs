const { User }= require('../../models')
const BuildResponse = require('../modules/buildResponse')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const login = async (req, res) => {
    try { 
      const { email, password } = req.body

    //   ambil data user bersangkutan
    const user = await User.findOne ({ where: { email }, raw: true })

    if (!User) {
        throw new Error('User not found')
    }

    //  check password
    bcrypt.compare(password, user.password, (err, result)=> {
        if (!err && result === true) {
            console.log('err', err)
            console.log(result,'result')
            // generate token
            const payload = {
                role: user.role,
                id: user.id,
            }
            const options = { expiresIn: '5m'}
            const secretkey = 'sagsagsagsagsagas99sagsagsagagss'
            
            const accessToken = jwt.sign(payload, secretkey, options)

            const refeshToken = jwt.sign(payload, secretkey, { expiresIn: '15m'})
        
            const response = { accessToken, user, refeshToken}
            const buildResponse = BuildResponse.created({ response })
            return res.status(201).json(buildResponse)
        }
        return res.status(400).json({ message: 'email atau password salah'})
    })

    } catch (error) {
        console.log("ini data eror", error)
        res.json({ message: 'Internal server error'})

    }
    }
    
    const refreshToken = (req, res) => {
        try {
            const { token} = req.body
            jwt.verify(token,'sagsagsagsagsagas99sagsagsagagss', (err, decoded) => {
                if (err) {
                    throw new Error(err.message)
                }
                const payload = { id: decoded.id, role: decoded.role }
                const options = { expiresIn: '5m'}
                const secretkey = 'sagsagsagsagsagas99sagsagsagagss'
                
                const accessToken = jwt.sign(payload, secretkey, options)

                const newRefreshToken = jwt.sign(payload, secretkey, { expiresIn:'15m'})

                const response = { accessToken, refreshToken: newRefreshToken}
                const buildResponse = BuildResponse.created({response})

                return res.status(201).json(buildResponse)
            })
        } catch (error) {

            res.json({ message: 'Internal server eror'})
        }

    }
    
    
module.exports ={
    login,
    refreshToken,
}