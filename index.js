//1.  Automatically load .env file into the application
require('dotenv').config()

// 2. import express
const express = require('express')

// 6. import cors
const cors = require('cors')

//9. import connection.js
require('./connection')

//10. import routes
const router = require('./routes/router')

//3. Create an application using the express
const server = express()

//4. Define the port number
const PORT = 5000

//7. Use cors
server.use(cors())
server.use(express.json()) // it is use for json object data converted to array format
server.use(router)

//5. run the application 
server.listen(PORT,()=>{
    console.log('listening on port ' +PORT);
})

//8. Define routes
server.get('/',(req,res)=>{
res.status(200).json('Ecommerce Service Started')
})

