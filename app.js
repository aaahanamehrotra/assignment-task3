const express = require('express');
const mongoose = require('mongoose')
const uuid = require("uuid")
const dbUrl = 'mongodb://localhost/DataDB'

const app = express()
mongoose.connect(dbUrl, {useNewUrlParser:true})
const connection = mongoose.connection

app.use(express.json())

const dweetRouter = require("./dweet")
app.use('/dweet', dweetRouter)

connection.on('open', () => console.log('connected to database'))

app.listen(8000, ()=> console.log("listening to port 8000"))