const mongoose = require('mongoose')
require('dotenv').config()
//main

async function main()
{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('mongoose connected!')
}
module.exports = main