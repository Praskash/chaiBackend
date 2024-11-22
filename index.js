require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello this is the home page!')
})

app.get('/login', (req, res) => {
    res.send('Hello this is the loged ins page!')
  })

app.get('/user', (req, res)=>{
    make.send("This is the user page")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
