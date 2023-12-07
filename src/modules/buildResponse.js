// const get = ({ data, total }) => ({
//     code: 200,
//     message: 'Berhasil mendapatkan data',
//     data,
//     total,
//   })

// const updated = ({ dataResponse}) => ({
//     code: 200,
//     message: 'Berhasil ubah data',
//     ...dataResponse
//   })

  const get = ({ dataResponse, data, total}) => ({
    code: 200,
    message: 'Berhasil mendapatkan data',
    data,
    total,
    dataResponse,
  })

  const updated = ({ dataResponse, data, total}) => ({
    code: 200,
    message: 'Berhasil ubah data',
    data,
    total,
    dataResponse,
  })
  
  module.exports = { get, updated };