const express = require('express');
const route = require('./routes/routes')
const app = express()
const port  =  5000

app.use(route)
app.set('view engine', 'ejs')



app.listen(port,console.log(`Server is runing on ${port}`));



