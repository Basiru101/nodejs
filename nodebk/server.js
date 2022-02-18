const stripSecretKey = process.env.STRIPE_SECRET_KEY

console.log(stripSecretKey)

const express = require('express');
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(3000)