const express = require('express');
const route = require('./routes/routes')
const bodyparser = require('body-parser')
const app = express()
const port  =  5000


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(route)
app.set('view engine', 'ejs')



app.listen(port,console.log(`Server is runing on ${port}`));



