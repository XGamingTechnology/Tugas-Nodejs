const jwt = require('jsonwebtoken')
const Authentication = (req, res, next) => {
    const token = req.headers.authorization
    console.log(token, 'token')
    console.log(req, 'ini req')
    if (!token) {
        return res.status(401).json({})
    }

    jwt.verify(token.split(' ')[1], 'sagsagsagsagsagas99sagsagsagagss',(err,decoded) => {
        if (err) {
            throw new Error(err.message)
        }
        req.decoded = decoded
        console.log('decoded', decoded)
        next(null,decoded)
    })

}

module.exports = { Authentication }