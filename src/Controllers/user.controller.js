const { harus } = require('../../models')

const getAllUser = async (req, res) => {
    console.log('ini jadi apa', harus)
    harus.findAll()
        .then(result => {
            res.json({ result })
        })
        .catch(err => {
            console.error('Sequelize Error:', err); // Tambahkan baris ini
            res.status(500).json({ message: 'Internal Server Error' })
        });
    

    
    // try {
    //     const users = await harus.findAll();
    //     res.json({ users });
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).json({ message: 'Internal Server Error' });
    // }
}
    
    
    
    // console.log('ini jadi apa', harus)
    // harus.findAll()
    //     .then(result => {
    //         res.json({result})
    //     })
    //     .catch(err => {
    //         res.status(500).json({ message: 'internal Server Error'})

    //     })
// }

module.exports = {
    getAllUser
}

// terdapat issue terkait pembacaan data ke database yang belum solvenpm