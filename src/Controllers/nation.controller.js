const { Nation } = require('../../models')

const createNation = async (req, res) => {
    try {
        const body = req.body
        await Nation.create(body)

        res.status(201).json ({ message: 'Nation created'})
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error'})
    }
}

module.exports = {
    createNation
}