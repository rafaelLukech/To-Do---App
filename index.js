const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app. get('/', (requisicao, resposta) => {
    resposta.render('home')
})

const conxao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "<Rafa2010%>",
    database: "todoapp",
    port: 3306
})

