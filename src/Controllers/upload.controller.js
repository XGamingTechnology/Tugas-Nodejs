const upload = (req, res) => {
    try {
        console.log('req.file', req.file)
        return true
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error'})
    }

}

module.exports ={ upload }