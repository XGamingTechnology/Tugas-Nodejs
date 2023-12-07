const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()
const port = 3000

// untuk memangangi request json
app.use(express.json())

// config swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation Belajar NodeJS',
      version: '0.0.1',
      description: 'Belajar NodeJs'
    }
  },
  apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)
console.log(swaggerSpec)
console.log(swaggerUi)

// import router
const userRouter = require('./src/routes/user.routes')
const nationRouter = require('./src/routes/nation.routes')
const authRouter = require('./src/routes/auth.routes ')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api', userRouter)
app.use('/api', nationRouter)
app.use('/api', authRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})