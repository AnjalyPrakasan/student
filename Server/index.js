const express = require('express')
const app = express()

//dotenv
require('dotenv').config()

//cors
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended : true}))

//convert to json
app.use(express.json())

//router
const studentRouter = require('./router/sRouter')
app.use('/',studentRouter)


//importing main
const main = require('./model/database')
main().catch(err => console.log(err))



app.listen(process.env.PORT,()=>
{
    console.log('Server Running.. http://localhost:9003')
})