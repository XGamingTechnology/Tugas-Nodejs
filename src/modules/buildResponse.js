const get = ({ data, total }) => ({
    code: 200,
    message: 'Berhasil mendapatkan data',
    data,
    total,
  })

// const updated = ({ data, total }) => ({
//     code: 200,
//     message: 'Berhasil ubah data',
//     data,
//     total,
//   })
  
  module.exports = { get};